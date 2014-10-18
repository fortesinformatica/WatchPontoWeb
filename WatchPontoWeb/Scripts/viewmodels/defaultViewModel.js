$(function () {
    var defaultData = ko.observable({
        dadosExtrato: ko.observableArray([])
    });

    var filtroExtrato = {
        PIS: ko.observable(),
        DataInicio: ko.observable(),
        DataFim: ko.observable()
    };

    var dataSource = new DefaultDataSource();

    dataSource.aoConsultarExtrato.subscribe(function(dados) {
        defaultData().dadosExtrato(dados);
    });

    ko.applyBindings(filtroExtrato, $("#loginForm")[0]);
    ko.applyBindings(defaultData, $("#extrato-ponto")[0]);

    $("form").submit(function () {
        dataSource.getExtrato(filtroExtrato.PIS(), filtroExtrato.DataInicio(), filtroExtrato.DataFim());

        return false;
    });
});