// features/support/api/UsuarioApi.ts
import { APIRequestContext, APIResponse } from '@playwright/test';

export interface UserData {
  nome: string;
  email: string;
  password: string;
  administrador: string;
}

export class UsuarioApi {
    static deletarUsuariosPorNome(arg0: string) {
        throw new Error('Method not implemented.');
    }
  private apiContext: APIRequestContext;

  constructor(apiContext: APIRequestContext) {
    this.apiContext = apiContext;
  }

  async criarUsuario(userData: UserData): Promise<APIResponse> {
    return this.apiContext.post('/usuarios', { data: userData });
  }

  async buscarTodosUsuarios(): Promise<APIResponse> {
    return this.apiContext.get('/usuarios');
  }

  async buscarUsuarioPorId(userId: string): Promise<APIResponse> {
    return this.apiContext.get(`/usuarios/${userId}`);
  }

  async atualizarUsuario(userId: string, updateData: UserData): Promise<APIResponse> {
    return this.apiContext.put(`/usuarios/${userId}`, { data: updateData });
  }

  async deletarUsuario(userId: string): Promise<APIResponse> {
    return this.apiContext.delete(`/usuarios/${userId}`);
  }
}