<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Uma pequena api  de veículos com autenticação jwt feita com [Nest](https://github.com/nestjs/nest). 

## Instalação

```zsh
git clone https://github.com/allanvobraun/car-api.git
yarn install
```

## Rodando o app

```zsh
# development
yarn run start:dev

# production mode
yarn run build
yarn run start:prod
```

---
## Endpoints

### Login
* Metodo: `POST`
* endpoint: `/auth/login`
* parametros:
```json
{
	"email": "allanvobraun@gmail.com",
	"password": "teste"
}
```

* Resposta
```json
{
	"access_token": "token jwt"
}
```

### Profile
* Metodo: `GET`
* endpoint: `/profile`
* header:
```
Authorization: Bearer "tokenjwt"
```

* Resposta
```json
{
    "id": 4,
    "email": "allanvobraun@gmail.com",
    "name": "allan"
}
```

### PegaToken
* Metodo: `GET`
* endpoint: `/pegaToken?candidato=hash`
Onde o hash é igual o hash md5 do email do usuario
* header:
```
Authorization: Bearer "tokenjwt"
```

* Resposta
```json
{
    "token": "b660a6b1cf9bce36373b383b659ab8db"
}
```

### PegaJson
* Metodo: `GET`
* endpoint: `/pegaJson?candidato=hash`
Onde o hash será o um hash MD5 do primeiro nome do usuario (totalmente minúsculo e
sem acentos) concatenado com ":" e o token retornado pelo request anterior.
* header:
```
Authorization: Bearer "token"
```

* Resposta
```json
{
    {
        "marca": "ford",
        "modelo": "belina",
        "cor": "verde",
        "ano": 1985,
        "tipo_veiculo": "carro"
    },
    {
        "marca": "ford",
        "modelo": "belina2",
        "cor": "marrom",
        "ano": 1987,
        "tipo_veiculo": "carro"
    }
}
```

### Vehicles
Endpoint para teste sem autenticação
* Metodo: `GET`
* endpoint: `/vehicles`

* Resposta
```json
{
    {
        "marca": "ford",
        "modelo": "belina",
        "cor": "verde",
        "ano": 1985,
        "tipo_veiculo": "carro"
    },
    {
        "marca": "ford",
        "modelo": "belina2",
        "cor": "marrom",
        "ano": 1987,
        "tipo_veiculo": "carro"
    }
}
```
---
## Demo online
`http://car-api-challenge.herokuapp.com/vehicles`
## License

Nest is [MIT licensed](LICENSE).
