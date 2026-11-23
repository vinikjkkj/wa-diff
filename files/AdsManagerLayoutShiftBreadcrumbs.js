__d(
  "AdsManagerLayoutShiftBreadcrumbs",
  [
    "PerformanceObserver",
    "RSTLogForCrash",
    "getReactComponentContext",
    "getReactComponentStackFromDOMElement_THIS_CAN_BREAK",
    "justknobx",
    "performanceAbsoluteNow",
    "requireWeak",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "adsLayoutShiftSources",
      u = 30,
      c = 5,
      d = "(none)",
      m = function (t) {
        return !1;
      };
    r("requireWeak")("AdsALReactUtils", function (e) {
      m = e.isComponentNameBlocked;
    });
    var p = r("justknobx")._("3242"),
      _ = !1,
      f = 0,
      g = new Map();
    function h(e) {
      try {
        e();
      } catch (e) {}
    }
    function y(e) {
      var t =
        e instanceof Element ? e : e instanceof Node ? e.parentElement : null;
      if (t == null) return d;
      var n = o("getReactComponentContext").getReactComponentContext(
        r("getReactComponentStackFromDOMElement_THIS_CAN_BREAK")(t),
        m,
      );
      return n != null && n.length > 0 ? n.join(" < ") : d;
    }
    function C(e) {
      var t;
      if ((g.set(e, ((t = g.get(e)) != null ? t : 0) + 1), !(g.size <= u))) {
        var n = null;
        for (var r of g) {
          var o = r[0],
            a = r[1];
          o !== e && (n == null || a < n[1]) && (n = [o, a]);
        }
        n != null && g.delete(n[0]);
      }
    }
    function b(t) {
      if (!(t == null || typeof t != "object" || t.hadRecentInput === !0)) {
        var n = Array.isArray(t.sources) ? t.sources : [],
          a = Array.from(
            new Set(
              n.length > 0
                ? n.map(function (e) {
                    return y(e != null && typeof e == "object" ? e.node : null);
                  })
                : [d],
            ),
          );
        (f++, a.forEach(C));
        var i = Array.from(g)
          .sort(function (e, t) {
            return t[1] - e[1];
          })
          .slice(0, c);
        o("RSTLogForCrash").logForCrash(
          s,
          {
            last: a,
            top: i,
            total: f,
            ts: Math.round((e || (e = r("performanceAbsoluteNow")))()),
          },
          o("RSTLogForCrash").RSTLogMode.VALID_UNTIL_NEXT_WRITE,
          { immediateFlush: !0, logForNativeReports: !1 },
        );
      }
    }
    function v() {
      !p ||
        _ ||
        ((_ = !0),
        h(function () {
          o("PerformanceObserver").observe("layout-shift", function (e) {
            return h(function () {
              return b(e);
            });
          });
        }));
    }
    l.startAdsManagerLayoutShiftBreadcrumbs = v;
  },
  98,
);
