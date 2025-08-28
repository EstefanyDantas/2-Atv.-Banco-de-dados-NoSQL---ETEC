const datadabase = 'BD3-NoSQL-Produtos';
const collection = 'bd3-nosql-atv7';
use(datadabase);
db.createCollection(collection);

//maior que 700 reais
//db['bd3-nosql-atv7'].find({"valor_decimal":{$gt: NumberDecimal("700")}});

//menor que 500 reais
//db['bd3-nosql-atv7'].find({"valor_decimal":{$lt: NumberDecimal("450")}});

//maior ou igual a 500 reais e menor ou igual a 950 reais
//db['bd3-nosql-atv7'].find({"valor_decimal":{$gte: NumberDecimal("500"),$lte: NumberDecimal("950")}});