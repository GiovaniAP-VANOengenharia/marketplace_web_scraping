from pymongo import MongoClient
from config.database_config import database_infos as db_infos


client = MongoClient(host=db_infos["db"])
db = client.get_database('scraping')
collection = db.get_collection('marketplace')


def create_products_filter(data):
    collection.insert_one(data)


def find_filters(data):
    return collection.find_one(data)
