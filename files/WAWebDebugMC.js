__d(
  "WAWebDebugMC",
  ["MetaConfig", "WALogger"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      var t = r("MetaConfig")._("248");
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            'wa:debug MC "wangzhao_test_www_wa_mc:test_static_bool_1": ',
            "",
          ])),
        t.toString(),
      );
      var n = r("MetaConfig")._("404");
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            'wa:debug MC "wangzhao_test_www_wa_mc:test_int_1": ',
            "",
          ])),
        n.toString(),
      );
    }
    ((u.doc = "Logs the MobileConfig value for chat entity thread key"),
      (u.paramsToExecute = []));
    var c = { logTestMCKey: u };
    l.default = c;
  },
  98,
);
