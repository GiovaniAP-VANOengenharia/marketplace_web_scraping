from dotenv import load_dotenv
import os


load_dotenv()

database_infos = {
    "db": os.getenv('DATABASE'),
    "port": os.getenv('PORT')
}
