__d(
  "adsMemoizeSelectorGetStores",
  [
    "AdsPureGetStoresConfig.experimental",
    "ExecutionEnvironment",
    "FBLogger",
    "Run",
    "ifRequired",
    "memoizeByIdentity",
    "performanceNow",
    "qpl",
    "setInterval",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Map(),
      c = null,
      d =
        (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        Math.random() <= 0.1,
      m =
        (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        Math.random() <= 0.1,
      p = null;
    if (d) {
      p = o("Run").maybeOnBeforeUnload(function () {
        return g(!0);
      }, !1);
      var _ = (s || (s = r("performanceNow")))(),
        f = r("setInterval")(function () {
          var e = (s || (s = r("performanceNow")))();
          (e - _ < 60 * 1e3 && clearInterval(f), (_ = e), g());
        }, 300 * 1e3);
    }
    function g(e) {
      if ((e === void 0 && (e = !1), e)) {
        var t;
        (t = p) == null || t.remove();
      }
      r("ifRequired")("QuickPerformanceLogger", function (e) {
        var t = {};
        for (var n of u) {
          var o = n[0],
            a = n[1];
          a > 1 && (t[o] = a);
        }
        var i = Math.round((s || (s = r("performanceNow")))()),
          l = i - (c != null ? c : 0);
        ((c = i),
          (t.duration = l),
          u.size > 0 &&
            e.markEvent(r("qpl")._(41495493, "6469"), "impure_counts", 7, {
              annotations: { int: t },
            }),
          u.clear());
      });
    }
    function h(e, t) {
      var n = r("memoizeByIdentity")(e);
      return function (o) {
        var a = n(o);
        if (
          Math.random() <=
          r("AdsPureGetStoresConfig.experimental").CANARY_SAMPLE_RATE
        ) {
          var i = e(o);
          r("shallowEqual")(a, i) ||
            r("FBLogger")("ads_selectors_pure_get_stores").mustfix(
              'Selector "%s" getStores was determined to be pure, but is not! This may break Ads Manager in subtle ways and must be fixed by either making it pure or removing the `isGetStoresPure` declaration',
              t,
            );
        }
        return a;
      };
    }
    function y(e, t) {
      return function (n) {
        var r,
          o = (r = u.get(t)) != null ? r : 0;
        return (u.set(t, o + 1), e(n));
      };
    }
    function C(e, t, n, o, a) {
      return (
        o === void 0 && (o = d),
        a === void 0 && (a = m),
        e && a ? h(t, n) : e ? r("memoizeByIdentity")(t) : o ? y(t, n) : t
      );
    }
    l.default = C;
  },
  98,
);
