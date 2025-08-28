const datadabase = 'BD3-NoSQL-Produtos';
const collection = 'bd3-nosql-atv7';
use(datadabase)

db['bd3-nosql-atv7'].insertMany(
    [
    {
        "cod_aluno": 1,
        "nome_produto": "arroz",
        "desc_produto": "Pacote de arroz com 1KG",
        "valor_decimal": NumberDecimal("120.00")
    },
    {
        "cod_aluno": 2,
        "nome_produto": "feijão",
        "desc_produto": "Feijão preto tipo 1 - 1KG",
        "valor_decimal": NumberDecimal("150.50")
    },
    {
        "cod_aluno": 3,
        "nome_produto": "açúcar",
        "desc_produto": "Açúcar cristal refinado 1KG",
        "valor_decimal": NumberDecimal("175.75")
    },
    {
        "cod_aluno": 4,
        "nome_produto": "macarrão",
        "desc_produto": "Macarrão espaguete 500g",
        "valor_decimal": NumberDecimal("200.25")
    },
    {
        "cod_aluno": 5,
        "nome_produto": "óleo",
        "desc_produto": "Óleo de soja 900ml",
        "valor_decimal": NumberDecimal("300.00")
    },
    {
        "cod_aluno": 6,
        "nome_produto": "leite",
        "desc_produto": "Leite integral 1L",
        "valor_decimal": NumberDecimal("420.40")
    },
    {
        "cod_aluno": 7,
        "nome_produto": "café",
        "desc_produto": "Café torrado e moído 500g",
        "valor_decimal": NumberDecimal("510.00")
    },
    {
        "cod_aluno": 8,
        "nome_produto": "farinha",
        "desc_produto": "Farinha de trigo tipo 1 - 1KG",
        "valor_decimal": NumberDecimal("635.80")
    },
    {
        "cod_aluno": 9,
        "nome_produto": "sal",
        "desc_produto": "Sal refinado 1KG",
        "valor_decimal": NumberDecimal("770.99")
    },
    {
        "cod_aluno": 10,
        "nome_produto": "biscoito",
        "desc_produto": "Biscoito recheado 130g",
        "valor_decimal": NumberDecimal("990.00")
    }
    ]
)