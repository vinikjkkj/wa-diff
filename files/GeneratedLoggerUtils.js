__d(
  "GeneratedLoggerUtils",
  [
    "invariant",
    "Banzai",
    "JstlMigrationFalcoEvent",
    "getDataWithLoggerOptions",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = window.location.search.indexOf("showlog") > -1;
    function s(t, r, o, a) {
      var i = n("getDataWithLoggerOptions")(r, a),
        l = t.split(":")[0],
        s = t.split(":")[1];
      l == "logger"
        ? n("JstlMigrationFalcoEvent").log(function () {
            return { logger_config_name: s, payload: i };
          })
        : n("Banzai").post(t, i, o);
      var u = e || (s === "EPFrontendLoggerConfig" && n("gkx")("3917"));
      if (u && s === "EPFrontendLoggerConfig" && i)
        var c = i.event_name || "unknown",
          d = i.app || "unknown",
          m = i.surface || "",
          p = m ? " [" + m + "]" : "",
          _ = Date.now(),
          f = new Date(_).toTimeString().split(" ")[0],
          g = c.toLowerCase(),
          h =
            g.includes("rendered") ||
            g.includes("error") ||
            g.includes("view_metric_results") ||
            g.includes("statsig_result_difference") ||
            g.includes("request_interrupted"),
          y = h ? "[EPFrontend]" : "[EPFrontend :click:]";
    }
    var u = {
      log: s,
      serializeVector: function (t) {
        if (!t || Array.isArray(t)) return t;
        if (t.toArray != null) {
          var e = t;
          return e.toArray();
        }
        if (
          typeof t == "object" &&
          t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"]
        )
          return Array.from(t);
        l(0, 3874, t);
      },
      serializeMap: function (t) {
        if (!t) return t;
        if (t.toJS != null) {
          var e = t;
          return e.toJS();
        }
        if (
          typeof t == "object" &&
          t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"]
        ) {
          var n = t,
            r = {};
          for (var o of n) r[o[0]] = o[1];
          return r;
        }
        if (Object.prototype.toString.call(t) === "[object Object]") return t;
        l(0, 3875, t);
      },
      checkExtraDataFieldNames: function (t, n) {
        Object.keys(t).forEach(function (e) {
          !Object.prototype.hasOwnProperty.call(n, e) || l(0, 3876, e);
        });
      },
      warnForInvalidFieldNames: function (t, n, r, o) {},
      throwIfNull: function (t, n) {
        return (t != null || l(0, 3877, n), t);
      },
    };
    a.exports = u;
  },
  null,
);
