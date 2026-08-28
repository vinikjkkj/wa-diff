__d(
  "signalsLoggingReduceSecondaries",
  [
    "SignalsLoggingSessions",
    "getErrorSafe",
    "nullthrows",
    "objectKeys",
    "signalsLoggingFalcoPost",
    "signalsLoggingGetURLData",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.fileName,
        o = t.lineNumber,
        a = t.message,
        i = t.stack,
        l = r("signalsLoggingGetURLData")(),
        s = l.logHTTPReferrer,
        u = l.logURL;
      r("signalsLoggingFalcoPost")({
        action: "CALCULATE",
        file_name: n,
        global_session_start_time: String(
          r("SignalsLoggingSessions").globalSessionStartTime,
        ),
        line_number: String(o),
        log_http_referrer: s,
        log_url: u,
        message: a,
        namespace: "ADS_SIGNALS",
        scope: "SECONDARY_LOGGING." + e,
        secondaries: [],
        sessions: [],
        stack: i,
        type: "error",
      });
    }
    function s(e) {
      var t = babelHelpers.extends({}, e);
      return (
        Object.keys(t).forEach(function (e) {
          return t[e] === void 0 && delete t[e];
        }),
        t
      );
    }
    function u(t) {
      var n = [],
        o = new Map();
      for (var a of t) {
        var i = r("nullthrows")(a.id);
        o.has(i) || o.set(i, a);
      }
      var l = new Map();
      for (var u of o.values()) {
        var c = u.type;
        (l.has(c) || l.set(c, []), r("nullthrows")(l.get(c)).push(u));
      }
      var d = function (t) {
        var e = t[0],
          o = e.options,
          a = e.type;
        if (o.has("GLOBAL_CONTEXT")) n.push(t[0]);
        else if (o.has("ONE_LINE_PER_CALL")) n = [].concat(n, t);
        else if (o.has("MERGE_NON_NULL_DATA_BY_TYPE")) {
          var i = function () {
            return s(
              t.reduce(function (e, t) {
                var n = t.cb,
                  o = n();
                return (
                  n == null ||
                    o == null ||
                    r("objectKeys")(o).forEach(function (t) {
                      (e[t] != null && o[t] == null) ||
                        (e[t] === null && o[t] === void 0) ||
                        (e[t] = o[t]);
                    }),
                  e
                );
              }, {}),
            );
          };
          n.push({ cb: i, options: o, type: a });
        } else if (o.has("MERGE_DATA_BY_TYPE")) {
          var l = function () {
            return s(
              t.reduce(function (e, t) {
                var n = t.cb;
                return babelHelpers.extends({}, e, n());
              }, {}),
            );
          };
          n.push({ cb: l, options: o, type: a });
        }
      };
      for (var m of l.values()) d(m);
      return n
        .map(function (t) {
          var n = t.cb,
            o = t.type;
          try {
            var a = n();
            return a != null ? { data: a, type: o } : null;
          } catch (t) {
            var i = r("getErrorSafe")(t);
            return (e(o, i), null);
          }
        })
        .filter(Boolean);
    }
    l.default = u;
  },
  98,
);
