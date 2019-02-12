var basePage = require('./../../src/pages/base.page');
var loginPage = require('./../../src/pages/login.page');
var boardListPage = require('./../../src/pages/boardList.page');
var boardPage = require('./../../src/pages/board.page');

describe('Boards Trello', function () {
    it("Validando a criação de um novo board", function () {
        loginPage.open();
        loginPage.logar("qachallengesoftbox@email.com", "S0ftbox123");
        expect(basePage.getNomeUsuario()).to.equal('QA_CHALLENGE_SOFTBOX (qa_challenge_softbox)');
        boardListPage.open();
        boardListPage.criarQuadro("Gerenciamento de projetos Iza");
        expect(boardPage.getNomeQuadro()).to.equal("Gerenciamento de projetos Iza");
    }); 

    it("Removendo o board criado acima", function() {
        loginPage.open();
        loginPage.logar("qachallengesoftbox@email.com", "S0ftbox123");
        expect(basePage.getNomeUsuario()).to.equal('QA_CHALLENGE_SOFTBOX (qa_challenge_softbox)');
        boardListPage.open();
        boardListPage.excluirQuadro();
        expect(boardListPage.validarMensagemExclusao()).to.include("Gerenciamento de projetos Iza está fechado.");
        boardListPage.open();
        var textoTela = ".home-sticky-container";
        expect(textoTela).to.not.include("Gerenciamento de projetos Iza");    
     });

     
});
