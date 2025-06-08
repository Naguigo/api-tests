import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { World } from '../support/world';
import { UsuarioApi } from '../support/api/UsuarioApi';

Given('que desejo criar um novo usuario', async function (this: World) {
  this.usuarioApi = new UsuarioApi(this.apiContext);
  this.userData = {
    nome: "Nathan Guilherme Gomes",
    email: `teste${Date.now()}@qa.com.br`,
    password: "123456",
    administrador: "true"
  };
});

When('envio os dados do usuario', async function (this: World) {
  this.response = await this.usuarioApi.criarUsuario(this.userData);
  const body = await this.response.json();
  this.userId = body._id;
});

Then('o usuario deve ser criado com sucesso', async function (this: World) {
  expect(this.response.ok()).toBeTruthy();
  const body = await this.response.json();
  expect(body).toHaveProperty('_id');
});

When('busco todos os usuarios', async function (this: World) {
  this.response = await this.usuarioApi.buscarTodosUsuarios();
});

Then('a resposta deve conter a lista de usuarios', async function (this: World) {
  expect(this.response.ok()).toBeTruthy();
  const body = await this.response.json();
  expect(Array.isArray(body.usuarios)).toBeTruthy();
});

Given('que possuo um usuario cadastrado', async function (this: World) {
  this.usuarioApi = new UsuarioApi(this.apiContext);
  this.userData = {
    nome: "Nathan Guilherme Gomes",
    email: `teste${Date.now()}@qa.com.br`,
    password: "123456",
    administrador: "true"
  };
  this.response = await this.usuarioApi.criarUsuario(this.userData);
  const body = await this.response.json();
  this.userId = body._id;
});

When('busco o usuario pelo id', async function (this: World) {
  this.response = await this.usuarioApi.buscarUsuarioPorId(this.userId);
});

Then('a resposta deve conter os dados do usuario', async function (this: World) {
  expect(this.response.ok()).toBeTruthy();
  const body = await this.response.json();
  expect(body).toHaveProperty('nome', this.userData.nome);
  expect(body).toHaveProperty('email', this.userData.email);
});

When('atualizo os dados do usuario', async function (this: World) {
  // Exemplo de update
  this.userData.nome = "Novo Nome";
  this.response = await this.usuarioApi.atualizarUsuario(this.userId, this.userData);
});

Then('o usuario deve ser atualizado com sucesso', async function (this: World) {
  expect(this.response.ok()).toBeTruthy();
  const body = await this.response.json();
  expect(body.message).toContain('Registro alterado com sucesso');
});

When('deleto o usuario', async function (this: World) {
  this.response = await this.usuarioApi.deletarUsuario(this.userId);
});

Then('o usuario deve ser removido com sucesso', async function (this: World) {
  expect(this.response.ok()).toBeTruthy();
  const body = await this.response.json();
  expect(body.message).toContain('Registro excluído com sucesso');
});