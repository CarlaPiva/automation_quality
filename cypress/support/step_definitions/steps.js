import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

Given("I access google page", () => {
    cy.visit("https://www.google.com.br/");
})

When("I search for Grupo Quality", () => {
    cy.get('[title="Pesquisar"]').type('Quality Digital{enter}')
})

Given("acessar homepage", () => {
    cy.visit("https://automationexercise.com/");
})


When("acessar página login", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
});


When("digitar usuário e senha ERRADOS e clicar em submit", () => {
	cy.get('[data-qa="login-email"]').type('carla@gmail.com')
    cy.get('[data-qa="login-password"]').type('123')
    cy.get('[data-qa="login-button"]').click();
});


Then("mensagem de erro deve aparecer", () => {
	cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!');
});


