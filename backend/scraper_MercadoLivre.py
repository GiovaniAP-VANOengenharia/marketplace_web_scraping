import requests
from bs4 import BeautifulSoup
from database import create_products_filter


def fetch(url):
    try:
        response = requests.get(
            url, headers={
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
            }, timeout=3)
        if response.status_code == 200:
            return response.text
        else:
            return None
    except requests.ReadTimeout:
        return None


def scrape_url_products(html_content):
    if html_content is None:
        return []
    soup = BeautifulSoup(html_content, "html.parser")
    list = [
        url.a.get('href')
        for url in soup.find_all('li', {"class": 'ui-search-layout__item'})
    ]
    return list


def scrape_next_page_link(html_content):
    if html_content is None:
        return None
    soup = BeautifulSoup(html_content, "html.parser")
    next_page_button = soup.find(
        'li', {"class": 'andes-pagination__button--next'})
    if next_page_button is None:
        return None
    return next_page_button.a.get('href')


def scrape_products(html_content):
    soup = BeautifulSoup(html_content, "html.parser")

    image = soup.find('figure', {"class": 'ui-pdp-gallery__figure'})
    title = soup.find('h1', {"class": 'ui-pdp-title'}).string
    description = soup.find('p', {"class": 'ui-pdp-description__content'}).text
    price = soup.find('span', {"class": 'ui-pdp-price__part'})

    dict = {
        "image": image.img.get('src'),
        "title": title,
        "description": description,
        "price": price.meta.get('content'),
    }
    return dict


def get_products(amount, url, filters):
    page = fetch(url)

    links = scrape_url_products(page)
    products = []

    while len(products) < amount:
        next_page = scrape_next_page_link(page)
        page = fetch(next_page)
        product_data = scrape_products(page)
        products.append(product_data)

    products_list = []

    for index in range(amount):
        req = fetch(links[index])
        products_list.append(scrape_products(req))

    data = {**filters, "products": products_list}

    create_products_filter(data)

    return products_list
