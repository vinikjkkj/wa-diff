__d(
  "KeyframesPluginLogger",
  ["BanzaiLogger", "CurrentUser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "KeyframesFramePerfLoggerConfig",
      s = {
        appid: 256281040558,
        isemployee: r("CurrentUser").isEmployee() ? 1 : 0,
      },
      u = {
        LOAD_ATTEMPT: "plugin_load_attempt",
        LOAD_ATTEMPT_KF3: "plugin_load_attempt_compat",
      };
    function c(t, n) {
      t != null &&
        t.forEach(function (t) {
          r("BanzaiLogger").log(
            e,
            babelHelpers.extends({}, s, { name: n, extras: t }),
          );
        });
    }
    var d = {
      log: function (t) {
        c(t, u.LOAD_ATTEMPT);
      },
      logCompat: function (t) {
        c(t, u.LOAD_ATTEMPT_KF3);
      },
    };
    l.KeyframesPluginLogger = d;
  },
  98,
);
