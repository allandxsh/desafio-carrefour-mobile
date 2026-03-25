# desafio-carrefour-mobile

# 📱 Carrefour Mobile Automation - Desafio Técnico

Projeto de automação de testes mobile para o aplicativo **WebdriverIO Native Demo App**, desenvolvido como parte do desafio técnico para a posição de **QA Principal** no Carrefour. O projeto utiliza **WebdriverIO** com **Appium**, estruturado no padrão **Page Object Model (POM)** e integrado à nuvem do **BrowserStack**.

## 🚀 Diferenciais do Projeto

* **Arquitetura Híbrida:** Configuração única preparada para rodar tanto em **Android** quanto em **iOS**.
* **Cloud Testing (BrowserStack):** Execução em dispositivos reais na nuvem, eliminando a necessidade de emuladores locais.
* **CI/CD Pipeline:** Integração com **GitHub Actions** para execução automatizada a cada push.
* **Clean Code & POM:** Separação clara entre seletores, lógica de negócio e scripts de teste.
* **Segurança (DevSecOps):** Gestão de credenciais sensíveis via **GitHub Secrets** e variáveis de ambiente (`.env`).

## 🛠️ Tecnologias e Ferramentas

* **Framework:** WebdriverIO v8+
* **Driver:** Appium 2.0
* **Cloud:** BrowserStack App Automate
* **Relatórios:** Allure Framework
* **CI/CD:** GitHub Actions
* **Linguagem:** JavaScript (Node.js)

## ⚙️ Configuração e Execução

### 1. Pré-requisitos
* Node.js (v18 ou superior)
* Conta no BrowserStack (User e Access Key)

### 2. Instalação
```
Bash
# Clone o repositório
git clone [https://github.com/allandxsh/desafio-carrefour-mobile.git](https://github.com/allandxsh/desafio-carrefour-mobile.git)

# Entre na pasta
cd desafio-carrefour-mobile

# Instale as dependências
npm install
```

### 3. Configurando os Secrets no seu projeto

1. Crie um arquivo .env com as variáveis e instale a dependência:
```
npm install dotenv --save-dev    

Nome do Secret,Valor (Exemplo)
BS_USERNAME = SEU_USARIO
BS_ACCESS_KEY = SUA_KEY
BS_ANDROID_APP_ID = bs://id_do_seu_app_android
BS_IOS_APP_ID = bs://id_do_seu_app_ios
```

## 4. Comandos Principais

Rodar Android no BrowserStack
npm run test:bs:android

Rodar iOS no BrowserStack
npm run test:bs:ios

Abrir Relatório Allure
npm run report:generate && npm run report:open

##🏗️ Estrutura do Repositório

```
├── .github/workflows/    # Configuração da Pipeline CI/CD
├── test/
│   ├── pageobjects/      # Classes Page Object (Seletores e Ações)
│   ├── specs/            # Scripts de Teste (Cenários)
│   └── config/           # Arquivos de Configuração do WebdriverIO
├── package.json          # Scripts e Dependências
└── .gitignore            # Arquivos ignorados (node_modules, .env, app/)
```

## 🛡️ CI/CD Workflow
------------------

O projeto conta com uma pipeline automática que dispara testes no BrowserStack a cada push para a branch main. As chaves de acesso são gerenciadas via **GitHub Repository Secrets**.
