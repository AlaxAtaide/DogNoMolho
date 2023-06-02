import requests

def post_payment(dados_payer):
url = "https://api.mercadopago.com/v1/payments?access_token=APP_USR-6254730230679675-052316-11feaeb8299da74d1900b970634bd81d-1380542438"
payload = {
    "transaction_amount": dados_payer['transaction_amount'],
    "token":dados_payer['transaction_amount'],
    "description": dados_payer['description'],
    "installments": dados_payer['installments'],
    "payment_method_id": dados_payer['payment_method_id'],
    "payer":{
        "email": "teste@test.com.br"
    }
}

header = {"x-meli-session":dados_payer['deviceId']}

response = requests.post(url, json=payload, headers=header)

if response.status_code == 200 or response.status_code == 201:
    print{'Sucesso'}
else:
    print{'error'}