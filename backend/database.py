from pymongo import MongoClient
from config import database_infos as db_infos


client = MongoClient(host=db_infos["db"], port=int(db_infos["port"]))
db = client.get_database('scraping')
collection = db.get_collection('marketplace')


def create_products_filter(data):
    collection.insert_one(data)


def insert_or_update(notice):
    return (
        db.news.update_one(
            {"url": notice["url"]}, {"$set": notice}, upsert=True
        ).upserted_id
        is not None
    )


def find_news():
    return list(db.news.find({}, {"_id": False}))


def search_news(query):
    return list(db.news.find(query))


def get_collection():
    return db.news
