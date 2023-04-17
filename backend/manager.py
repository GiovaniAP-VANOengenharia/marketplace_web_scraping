from scraper_Buscape import get_products as get_bp
from scraper_MercadoLivre import get_products as get_ml
from database import find_filters


def manager(data):
    amount = 20

    if (len(data) > 1):
        ml = []
        bp = []
        find_ml = find_filters(
            {'web': data[0]["web"], 'category': data[0]["category"]})

        find_bp = find_filters(
            {'web': data[1]["web"], 'category': data[1]["category"]})

        if find_ml:
            ml = find_ml['products']
        else:
            ml = get_ml(amount/2, data[0]["url"], data[0])

        if find_bp:
            bp = find_bp['products']
        else:
            bp = get_bp(amount/2, data[1]["url"], data[1])

        return [*ml, *bp]

    if (len(data) == 1 and data[0]["web"] == 'MercadoLivre'):
        find_ml = find_filters(
            {'web': data[0]["web"], 'category': data[0]["category"]})
        if find_ml:
            return find_ml['products']

        return get_ml(amount, data[0]["url"], data[0])

    if (len(data) == 1 and data[0]["web"] == 'Buscapé'):
        find_bp = find_filters(
            {'web': data[0]["web"], 'category': data[0]["category"]})
        if find_bp:
            return find_bp['products']

        return get_bp(amount, data[0]["url"], data[0])
