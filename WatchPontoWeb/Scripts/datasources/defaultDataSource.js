function DefaultDataSource() {
    this.aoConsultarExtrato = new ko.subscribable();
}

DefaultDataSource.prototype.getExtrato = function (pis, dataInicio, dataFim) {
    var self = this;

    if (!pis || !dataInicio || !dataFim) {
        this.aoConsultarExtrato.notifySubscribers([]);
        return;
    }

    //var url = "/api/Ocorrencias/{pis}/{DataInicio}/{DataFim}".replace("{pis}", pis)
    //            .replace("{DataInicio}", dataInicio.toLocaleDateString("pt-BR"))
    //            .replace("{DataFim}", dataFim.toLocaleDateString("pt-BR"));
    var url = "/api/DataSource/Extrato/0";

    $.getJSON(url, function(data) {
        var dados = [];

        if (data && data.length) {
            dados = $.map(data, function(ocorrencia) {
                return {
                    Dia: ko.observable(new Date(ocorrencia.Dia).toLocaleDateString("pt-BR")),
                    Batidas: ko.observableArray($.map(ocorrencia.Batidas, function(batida) {
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
    }).fail(function() {
        self.aoConsultarExtrato.notifySubscribers([]);
    });
}