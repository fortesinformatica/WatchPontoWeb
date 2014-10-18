$(function () {
    var loginViewModel = {
        pis: ko.observable(),
        senha: ko.observable()
    }

    ko.applyBindings(loginViewModel, $("form")[0]);

    $("form").submit(function () {

        var loginDs = new LoginDataSource();
        loginDs.login(ko.toJS(loginViewModel));

        return false;
    });
});