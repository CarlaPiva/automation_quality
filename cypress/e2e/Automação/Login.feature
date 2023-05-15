Feature: Feature login

    Feature Description Login
    Scenario: Scenario login

        Given acessar homepage
        When acessar página login
        When digitar usuário e senha ERRADOS e clicar em submit
        Then mensagem de erro deve aparecer