__d(
  "AdsMgmtStartupLogger",
  ["CometAddInlineTiming", "Env", "InteractionTracingMetrics", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map();
    function u(e) {
      window.__adsServerData = e;
    }
    function c() {
      var e = window.__adsServerData;
      if (e != null) {
        var t,
          n,
          r = e.points,
          o = {};
        Object.keys(r).forEach(function (e) {
          Object.keys(r[e]).forEach(function (t) {
            var n = r[e][t],
              a = n.end,
              i = n.start,
              l,
              s;
            (e === "FLUSH" || e === "Preloader" || e === "RelayPreloader"
              ? ((l = "[" + e + "] " + t + "_start"),
                (s = "[" + e + "] " + t + "_end"))
              : ((l = t + "_START"), (s = t + "_END")),
              (o[l] = i),
              a != null && (o[s] = a));
          });
        });
        var a = Object.fromEntries(
            Object.entries((t = e.annotations_int) != null ? t : {}).map(
              function (e) {
                var t = e[0],
                  n = e[1];
                return [t, String(n)];
              },
            ),
          ),
          i = Object.fromEntries(
            Object.entries((n = e.annotations_bool) != null ? n : {}).map(
              function (e) {
                var t = e[0],
                  n = e[1];
                return [t, String(n)];
              },
            ),
          );
        return {
          payloadRefs: e.payloadRefs,
          serverStartTime: e.serverStartTime,
          points: o,
          annotations: babelHelpers.extends({}, e.annotations_string, a, i),
        };
      }
    }
    function d() {
      return (e || (e = r("Env"))).brsid != null
        ? String((e || (e = r("Env"))).brsid)
        : null;
    }
    function m(e) {
      var t = d();
      if (t != null) {
        var n = "[Comet] ";
        (r("justknobx")._("357") &&
          o("CometAddInlineTiming").addInlineTiming(e, t, 0, n),
          r("justknobx")._("152") &&
            (o("CometAddInlineTiming").addServerTags(e),
            o("CometAddInlineTiming").addServerAnnotationsInt(e, t)));
      }
    }
    function p(e) {
      m(e);
      var t = window.__adsServerData;
      if (t != null) {
        var n = t.points,
          r = t.serverStartTime,
          o = {};
        return (
          Object.keys(n).forEach(function (e) {
            Object.keys(n[e]).forEach(function (t) {
              var a = null,
                i = t;
              if (
                (e === "FLUSH"
                  ? ((a = "ServerTimings"), (i = e + "_" + i))
                  : e === "Preloader"
                    ? i.includes("Preloader")
                      ? (a = "AdsPreloader")
                      : (a = "ServerTimings")
                    : e === "RelayPreloader"
                      ? (a = "RelayPreloader")
                      : (a = "ServerTimings"),
                a != null)
              ) {
                var l = n[e][t],
                  s = l.end,
                  u = l.start,
                  c = u - r;
                o[i] = {
                  subspanType: a,
                  start: c,
                  end: s != null ? s - r : null,
                };
              }
            });
          }),
          s.forEach(function (e, t) {
            var n = e.type,
              a = e.value;
            o[t]
              ? (o[t][n] = a - r)
              : (o[t] = {
                  subspanType: "ServerTimings",
                  start: n === "start" ? a - r : 0,
                  end: n === "end" ? a - r : null,
                });
          }),
          o
        );
      }
    }
    function _(e, t, n) {
      s.has(e) || s.set(e, { type: t, value: n });
    }
    function f(e) {
      var t,
        n,
        o,
        a = window.__adsServerData;
      if (a != null) {
        var i = (t = a.annotations_string) != null ? t : {};
        Object.keys(i).forEach(function (t) {
          r("InteractionTracingMetrics").addAnnotation(e, t, i[t]);
        });
        var l = (n = a.annotations_int) != null ? n : {};
        Object.keys(l).forEach(function (t) {
          r("InteractionTracingMetrics").addAnnotationInt(e, t, l[t]);
        });
        var s = (o = a.annotations_bool) != null ? o : {};
        Object.keys(s).forEach(function (t) {
          r("InteractionTracingMetrics").addAnnotationBoolean(e, t, s[t]);
        });
      }
    }
    ((l.setQPLServerData = u),
      (l.getQPLServerData = c),
      (l.getLoomServerData = p),
      (l.addClientSideData = _),
      (l.addAnnotationsToTrace = f));
  },
  98,
);
