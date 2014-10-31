function DefaultDataSource() {
    this.aoConsultarExtrato = new ko.subscribable();
}

DefaultDataSource.prototype.getExtrato = function (pis, dataInicio, dataFim) {
    var self = this;

    if (!pis || !dataInicio || !dataFim) {
        this.aoConsultarExtrato.notifySubscribers([]);
        return;
    }

    //var urlExtrato = "http://fortesponto.azurewebsites.net/api/Ocorrencias/{pis}/{DataInicio}/{DataFim}".replace("{pis}", pis)
    //            .replace("{DataInicio}", moment(dataInicio, "DD/MM/YYYY").format("YYYY-MM-DD"))
    //            .replace("{DataFim}", moment(dataFim, "DD/MM/YYYY").format("YYYY-MM-DD"));
    var filtro = pis.trim() + "|" + moment(dataInicio, "DD/MM/YYYY").format("YYYY-MM-DD").trim() + "|" + moment(dataFim, "DD/MM/YYYY").format("YYYY-MM-DD").trim();
    var urlExtrato = "/api/DataSource/Extrato/0?filtro=" + filtro;

    $.getJSON(
        urlExtrato,
        function (data) {
            var dados = [];

            if (data && data.length) {
                dados = $.map(data, function (ocorrencia) {
                    return {
                        Dia: ko.observable(ocorrencia.Dia),
                        Batidas: ko.observableArray($.map(ocorrencia.Batidas, function (batida) {
                            return {
                                Tipo: ko.observable(batida.Tipo),
                                Motivo: ko.observable(batida.Motivo || null),
                                Hora: ko.observable(batida.Hora),
                            };
                        })),
                        Quebras: ko.observableArray(ocorrencia.Quebras)
                    }
                });
            }

            self.aoConsultarExtrato.notifySubscribers(dados);
        }
    ).fail(function () {
        self.aoConsultarExtrato.notifySubscribers([]);
    });
}
DefaultDataSource.prototype.postJustificativa = function (justificativa) {
    var urlJustificativa = "/api/Lancamentos/Manual";
    return $.post(urlJustificativa, {
        PIS: justificativa.PIS(),
        DtRegistro: moment(justificativa.DtRegistro(), "DD/MM/YYYY").format("YYYY-MM-DD"),
        Tipo: justificativa.Tipo(),
        Justificativa: justificativa.Justificativa()
    }, function () {
        
    });
}