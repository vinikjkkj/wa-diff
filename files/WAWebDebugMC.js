__d(
  "WAWebDebugMC",
  ["MetaConfig", "MetaConfigMap", "WALogger", "WAWebMetaConfigDebugOverrides"],
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
    function c() {
      var e = r("MetaConfigMap").getAll_DO_NOT_USE();
      return Object.keys(e).map(function (t) {
        var n = e[t];
        return { key: t, value: n.value, type: typeof n.value };
      });
    }
    ((c.doc = "List all MetaConfig values with key, value, and type"),
      (c.paramsToExecute = []));
    function d(e, t) {
      o("WAWebMetaConfigDebugOverrides").overrideMetaConfig(e, t);
    }
    ((d.doc = "Override a MetaConfig value at runtime"),
      (d.paramsToExecute = ["key", "value"]));
    function m(e) {
      o("WAWebMetaConfigDebugOverrides").resetMetaConfig(e);
    }
    ((m.doc = "Reset a MetaConfig value to its original"),
      (m.paramsToExecute = ["key"]));
    var p = {
      logTestMCKey: u,
      listMetaConfigs: c,
      overrideMetaConfig: d,
      resetMetaConfig: m,
    };
    l.default = p;
  },
  98,
);
