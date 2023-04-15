import requests
import time
from bs4 import BeautifulSoup
# from tech_news.database import create_news


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
    finally:
        time.sleep(3)


def scrape_updates(html_content):
    if html_content is None:
        return []
    soup = BeautifulSoup(html_content, "html.parser")
    list = [
        url.a.get('href')
        for url in soup.find_all('li', {"class": 'shops__layout-item'})
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
    category = soup.find_all('a', {"class": 'andes-breadcrumb__link'})
    price = soup.find(
        'span', {"class": 'andes-money-amount__fraction'}).string

    dict = {
        "image": image.img.get('src'),
        "title": title,
        "description": description,
        "category": category[-1].string,
        "price": price,
        "url": soup.find('link', {"rel": 'canonical'}).get('href'),
    }
    return dict


def get_tech_news(amount):
    page = fetch("https://blog.betrybe.com/")
    links = scrape_updates(page)

    while len(links) < amount:
        next_page = scrape_next_page_link(page)
        page = fetch(next_page)
        news_links = scrape_updates(page)
        for news_link in news_links:
            links.append(news_link)

    news_list = []

    for index in range(amount):
        req = fetch(links[index])
        news_list.append(scrape_news(req))

    create_news(news_list)

    return news_list
