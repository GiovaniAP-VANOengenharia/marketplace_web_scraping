from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from manager import manager


app = Flask(__name__)

CORS(app)


@cross_origin
@app.route("/products", methods=['POST'])
def get_products():
    received = request.json
    products = manager(received)
    return jsonify(products)


if __name__ == "__main__":
    app.run(port=5000, host='localhost', debug=True)
