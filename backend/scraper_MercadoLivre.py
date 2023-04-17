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


def scrape_next_page_link(html_content):
    if html_content is None:
        return None
    soup = BeautifulSoup(html_content, "html.parser")
    next = soup.find('li', {"class": 'andes-pagination__button--next'})
    if next is None:
        return None
    return next.a.get('href')


def scrape_products(html_content):
    soup = BeautifulSoup(html_content, "html.parser")
    items = soup.find_all('li', {"class": 'ui-search-layout__item'})

    # image = [imagem.img for imagem in items]
    description = [desc.h2 for desc in items]
    price = soup.find_all('span', {"class": 'price-tag-fraction'})
    url = [url.a.get('href') for url in items]

    img = []
    for item in url:
        data = fetch(item)
        item_img = BeautifulSoup(data, "html.parser")
        img.append(item_img.find(
            'figure', {"class": 'ui-pdp-gallery__figure'}).img)

    products = []

    for i, _ in enumerate(items):
        dict = {
            "image": img[i].get('src'),
            "description": description[i].text,
            "price": price[i].text,
            "url": url[i],
        }
        products.append(dict)

    return products


def get_products(amount, url, filters):
    page = fetch(url)

    products_list = scrape_products(page)

    while len(products_list) < amount:
        next_page = scrape_next_page_link(page)
        page_next = fetch(next_page)
        new_list = scrape_products(page_next)
        products_list = [*products_list, *new_list]
        page = next_page

    data = {**filters, "products": products_list}

    create_products_filter(data)

    return products_list
