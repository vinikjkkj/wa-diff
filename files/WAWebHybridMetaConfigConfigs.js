__d(
  "WAWebHybridMetaConfigConfigs",
  ["MetaConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      {
        name: "wa_win_mc_test:bucket4",
        readWithoutLogging: function () {
          return r("MetaConfig")._("526", !0);
        },
        logExposure: function () {
          r("MetaConfig")._("527");
        },
      },
    ];
    l.HYBRID_META_CONFIG_ENTRIES = e;
  },
  98,
);
