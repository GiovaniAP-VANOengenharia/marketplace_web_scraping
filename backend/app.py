from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin


app = Flask(__name__)

CORS(app)

products = [
    {
        'id': 1,
        'image': 'https://http2.mlstatic.com/D_NQ_NP_857476-MLA44219870488_122020-W.webp',
        'description': 'description',
        'category': 'category',
        'price': 'price',
        'url': 'url'
    },
    {
        'id': 2,
        'image': 'image2',
        'description': 'description',
        'category': 'category',
        'price': 'price',
        'url': 'url'
    },
    {
        'id': 3,
        'image': 'image3',
        'description': 'description',
        'category': 'category',
        'price': 'price',
        'url': 'url'
    }
]


@cross_origin
@app.route("/products")
def get_products():
    return jsonify(products)


app.run(port=5000, host='localhost', debug=True)
