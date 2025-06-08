Feature: Testes de API Serverest

  Scenario: Criar um novo usuário
    Given que desejo criar um novo usuario
    When envio os dados do usuario
    Then o usuario deve ser criado com sucesso

  Scenario: Buscar todos os usuários
    When busco todos os usuarios
    Then a resposta deve conter a lista de usuarios
    
    @only
  Scenario: Buscar usuario por id
    Given que possuo um usuario cadastrado
    When busco o usuario pelo id
    Then a resposta deve conter os dados do usuario

  Scenario: Atualizar usuario existente
    Given que possuo um usuario cadastrado
    When atualizo os dados do usuario
    Then o usuario deve ser atualizado com sucesso

  Scenario: Deletar usuario existente
    Given que possuo um usuario cadastrado
    When deleto o usuario
    Then o usuario deve ser removido com sucesso