const basePage = require("./base.page");

const BoardListPage = function () {
  this.seletores = {
    botaoCriarNovoQuadro: ".mod-add",
    botaoMais: ".board-menu-navigation-item-link.js-open-more",
    botaoFechar: ".js-confirm.full.negate",
    mensagem: ".big-message.quiet.closed-board",

    modalCriarQuadro: {
      nomeQuadro: ".create-board-form .subtle-input",
      botaoCriarNovoQuadro: "button[type='submit']"

    },

    menuExcluirQuadro: {
      botaoFecharQuadro: ".board-menu-navigation-item-link.js-close-board",
    }
  };

  this.open = function () {
    basePage.open("qa_challenge_softbox/boards")
  };

  this.criarQuadro = function (nome) {
    browser.waitForVisible(this.seletores.botaoCriarNovoQuadro);
    browser.element(this.seletores.botaoCriarNovoQuadro).click();
    browser.waitForVisible(this.seletores.modalCriarQuadro.nomeQuadro);
    browser.element(this.seletores.modalCriarQuadro.nomeQuadro).setValue(nome);
    browser.element(this.seletores.modalCriarQuadro.botaoCriarNovoQuadro).click();
  };

  this.excluirQuadro = function () {
    browser.pause(5000);
    $('.board-tile-details-name=Gerenciamento de projetos Iza').click();//clicar no quadro
    browser.waitForVisible(this.seletores.botaoMais);
    browser.element(this.seletores.botaoMais).click();//clica no botão Mais
    browser.element(this.seletores.menuExcluirQuadro.botaoFecharQuadro).click(); //clica no botão Fechar Quadro
    browser.waitForVisible(this.seletores.botaoFechar);
    browser.element(this.seletores.botaoFechar).click();//clicar no botão Fechar 
  };

  this.validarMensagemExclusao = function () {
    browser.waitForVisible(this.seletores.mensagem);
    return browser.element(this.seletores.mensagem).getText();
  }

};

module.exports = new BoardListPage();
