__d(
  "WAWebHybridMetaConfigConfigs",
  ["MetaConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      {
        name: "wa_win_mc_test:bucket",
        readWithoutLogging: function () {
          return r("MetaConfig")._("496", !0);
        },
        logExposure: function () {
          r("MetaConfig")._("497");
        },
      },
    ];
    l.HYBRID_META_CONFIG_ENTRIES = e;
  },
  98,
);
