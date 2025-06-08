import { Before, After } from '@cucumber/cucumber';
import { request } from '@playwright/test';
import { UsuarioApi } from '../support/api/UsuarioApi';

// Hook para criar o contexto de API antes de cada cenário
Before(async function () {
  this.apiContext = await request.newContext({
    baseURL: 'https://serverest.dev', // ajuste para sua API
    extraHTTPHeaders: {
      Accept: 'application/json'
    }
  });
  // Instancia o PageObject da API de usuários
  this.usuarioApi = new UsuarioApi(this.apiContext);
});

// (Opcional) Limpa após o cenário
After(async function () {
  if (this.apiContext) {
    await this.apiContext.dispose();
  }
});