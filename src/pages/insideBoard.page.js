const InsideBoardPage = function () {
    this.seletores = {
        botaoConfirmarCriacao: ".primary.mod-list-add-button.js-save-edit",
        modalCriarLista: {
            botaoAddLista: "a[class='open-add-list js-open-add-list']",
            campoTituloLista: ".list-name-input",
        }
    };

    this.criarLista = function (nome) {
        browser.pause(5000);
        $('.board-tile-details-name=Gerenciamento de projetos Iza').click();//clicar no quadro que deseja criar a lista
        browser.waitForVisible(this.seletores.modalCriarLista.botaoAddLista);
        browser.element(this.seletores.modalCriarLista.botaoAddLista).click();
        browser.waitForVisible(this.seletores.modalCriarLista.campoTituloLista);
        browser.element(this.seletores.modalCriarLista.campoTituloLista).setValue(nome);
        browser.waitForVisible(this.seletores.botaoConfirmarCriacao);
        browser.element(this.seletores.botaoConfirmarCriacao).click();
    }
};

module.exports = new InsideBoardPage();