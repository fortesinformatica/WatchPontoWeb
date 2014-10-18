$(function () {
    var lancamentoManualViewModel = {
        PIS: ko.observable(),
        DtRegistro: ko.observable(),
        Tipo: ko.observable(),
        Justificativa: ko.observable(),
        optionsTipo: ko.observableArray([{ texto: "Esquecimento", valor: 1 }, { texto: "Falta Papel", valor: 2 }, { texto: "Outros", valor: 3 }])
    }

    ko.applyBindings(lancamentoManualViewModel, $("#lancamento-manual-form")[0]);
    var dataSource = new DefaultDataSource();
    $("#lancamento-manual-form-post").submit(function () {
        dataSource.postJustificativa(lancamentoManualViewModel);
        return false;
    });
});