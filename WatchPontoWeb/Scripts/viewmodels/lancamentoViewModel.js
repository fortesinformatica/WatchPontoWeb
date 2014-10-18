$(function () {
    var lancamentoManualViewModel = {
        PIS: ko.observable(),
        DtRegistro: ko.observable(),
        Tipo: ko.observable(),
        Justificativa: ko.observable()
    }

    ko.applyBindings(lancamentoManualViewModel, $(".lancamento-manual")[0]);

    $("form").submit(function () {

        var loginDs = new LoginDataSource();
        loginDs.login(ko.toJS(loginViewModel));

        return false;
    });
});