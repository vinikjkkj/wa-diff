__d(
  "WAWebHybridMetaConfig",
  ["WALogger", "WAWebHybridMetaConfigConfigs", "WAWebODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return o("WAWebHybridMetaConfigConfigs").HYBRID_META_CONFIG_ENTRIES.map(
        function (e) {
          return { name: e.name, value: String(e.readWithoutLogging()) };
        },
      );
    }
    function u(t) {
      var n = o("WAWebHybridMetaConfigConfigs").HYBRID_META_CONFIG_ENTRIES.find(
        function (e) {
          return e.name === t;
        },
      );
      return n == null
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[metaconfig][windows hybrid] unknown exposure name: ",
                "",
              ])),
            t,
          ),
          r("WAWebODS").incr("web.hybrid.metaconfig.exposure.unknown_name"),
          !1)
        : (n.logExposure(),
          r("WAWebODS").incr("web.hybrid.metaconfig.exposure.logged"),
          !0);
    }
    ((l.getAllHybridMetaConfigs = s), (l.logHybridMetaConfigExposure = u));
  },
  98,
);
