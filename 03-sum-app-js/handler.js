'use strict';

module.exports.soma = async event => {
  if(event.queryStringParameters == null || !event.queryStringParameters["a"] || !event.queryStringParameters["b"]){
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Parametros não informados'
        },
        null,
        2
      ),
    };
  };

  var soma = 
    parseInt(event.queryStringParameters["a"]) +
    parseInt(event.queryStringParameters["b"]);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        soma: soma
      },
      null,
      2
    ),
  };
};

module.exports.subtracao = async event => {
  if(event.queryStringParameters == null || !event.queryStringParameters["a"] || !event.queryStringParameters["b"]){
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Parametros não informados'
        },
        null,
        2
      ),
    };
  };

  var subtracao = 
    parseInt(event.queryStringParameters["a"]) -
    parseInt(event.queryStringParameters["b"]);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        subtracao: subtracao
      },
      null,
      2
    ),
  };
};

module.exports.multiplicacao = async event => {
  if(event.queryStringParameters == null || !event.queryStringParameters["a"] || !event.queryStringParameters["b"]){
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Parametros não informados'
        },
        null,
        2
      ),
    };
  };

  var multiplicacao = 
    parseInt(event.queryStringParameters["a"]) *
    parseInt(event.queryStringParameters["b"]);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        multiplicacao: multiplicacao
      },
      null,
      2
    ),
  };
};

module.exports.divisao = async event => {
  if(event.queryStringParameters == null || !event.queryStringParameters["a"] || !event.queryStringParameters["b"]){
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Parametros não informados'
        },
        null,
        2
      ),
    };
  };

  var divisao = 
    parseInt(event.queryStringParameters["a"]) /
    parseInt(event.queryStringParameters["b"]);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        divisao: divisao
      },
      null,
      2
    ),
  };
};
