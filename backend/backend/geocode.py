import geocoder


def address_to_lat_long(address):
    resp = geocoder.osm(address).json

    return (resp["lat"], resp["lng"])

