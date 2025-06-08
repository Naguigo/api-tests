import { setWorldConstructor, IWorldOptions, World as CucumberWorld } from '@cucumber/cucumber';
import { APIRequestContext, APIResponse } from '@playwright/test';
import { UsuarioApi, UserData } from './api/UsuarioApi';

export interface CustomWorld {
  apiContext: APIRequestContext;
  usuarioApi: UsuarioApi;
  userId: string;
  userData: UserData;
  response: APIResponse;
}

export class World extends CucumberWorld implements CustomWorld {
  apiContext!: APIRequestContext;
  usuarioApi!: UsuarioApi;
  userId!: string;
  userData!: UserData;
  response!: APIResponse;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(World);