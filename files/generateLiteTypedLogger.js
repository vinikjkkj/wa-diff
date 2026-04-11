__d(
  "generateLiteTypedLogger",
  ["Banzai", "JstlMigrationFalcoEvent", "getDataWithLoggerOptions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = e.split(":")[0],
        a = e.split(":")[1];
      o == "logger"
        ? r("JstlMigrationFalcoEvent").log(function () {
            return { logger_config_name: a, payload: t };
          })
        : r("Banzai").post(e, t, n);
    }
    function s(t) {
      return {
        log: function (o, a) {
          e(t, r("getDataWithLoggerOptions")(o, a), r("Banzai").BASIC);
        },
        logVital: function (o, a) {
          e(t, r("getDataWithLoggerOptions")(o, a), r("Banzai").VITAL);
        },
        logImmediately: function (o, a) {
          e(t, r("getDataWithLoggerOptions")(o, a), { signal: !0 });
        },
      };
    }
    l.default = s;
  },
  98,
);
