# marketplace_web_scraping

Esta é uma aplicação web que permite aos usuários pesquisar produtos em diferentes marketplaces e obter informações sobre eles. A aplicação é dividida em duas partes principais: o frontend e o backend. O frontend foi desenvolvido em TypeScript e o backend em Python usando o Flask.

## Frontend

O frontend é responsável por apresentar a interface gráfica da aplicação ao usuário final. Ele foi desenvolvido usando o framework React e o TypeScript, o que permite uma maior segurança e facilidade na manutenção do código.

### Tecnologias utilizadas
- React
- TypeScript
- HTML/CSS
- Styled Components

## Para executar a aplicação localmente, siga estes passos:
- Clone o repositório
- Navegue até a pasta frontend do projeto
  ```
- Instale as dependências:
  ```bash
  npm install
  ```
- Execute a aplicação:
  ```bash
  npm start
  ```
- A aplicação estará disponível em `http://localhost:3000`


## Backend

O backend é responsável por realizar a raspagem de dados nos diferentes marketplaces e retornar as informações ao frontend. Ele foi desenvolvido em Python usando o framework Flask, que é uma excelente opção para construção de APIs.

### Tecnologias utilizadas

- Python
- Flask
- BeautifulSoup
- Requests

### Instalação e Execução

- Navegue até a pasta backend do projeto
- Crie um ambiente virtual Python usando o comando
```bash
 python -m venv venv
 ```
- Ative o ambiente virtual usando o comando  (Windows)
```bash
 venv\Scripts\activate
  ```
- (Linux/MacOS)
```bash
  source venv/bin/activate 
```
- Para instalar as dependências do projeto execute o comando 
```bash
  pip install -r requirements.txt
```
- Para iniciar a aplicação execute o comando
```bash
  flask run
```
- Acesse a API em http://localhost:5000
