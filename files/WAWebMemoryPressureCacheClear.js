__d(
  "WAWebMemoryPressureCacheClear",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebGetters",
    "WAWebMemoryPressureCacheRegistry",
    "WAWebUiIdleEventBus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 0.5,
      d = 600 * 1e3,
      m = 3,
      p = 300 * 1e3,
      _ = 3,
      f = {
        name: "getters",
        unit: "entries",
        release: o("WAWebGetters").clearAllGetterCaches,
      },
      g = 0,
      h = 0,
      y = null,
      C = null;
    function b(t) {
      T(t);
      var n = S(t);
      if (n != null) {
        var r = []
          .concat(
            o("WAWebMemoryPressureCacheRegistry").getMemoryPressureCaches(),
            [f],
          )
          .map(D);
        (n === "heap_ratio" ? g++ : h++,
          (y = Date.now()),
          (C = t.usedJsHeapSizeMb),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[memory-pressure] ",
                " released ",
                " at ",
                "/",
                "MB",
              ])),
            n,
            x(r),
            t.usedJsHeapSizeMb,
            t.jsHeapSizeLimitMb,
          ));
      }
    }
    function v() {
      ((g = 0), (h = 0), (y = null), (C = null));
    }
    function S(e) {
      return I() ? (R(e) ? "heap_ratio" : L(e) ? "heap_over_mb" : null) : null;
    }
    function R(e) {
      return (
        g < m &&
        !E(d) &&
        k(e) &&
        o("WAWebABProps").getABPropConfigValue(
          "web_getters_clear_caches_on_memory_pressure",
        )
      );
    }
    function L(e) {
      var t = e.usedJsHeapSizeMb;
      if (h >= _ || E(p)) return !1;
      var n = o("WAWebABProps").getABPropConfigValue(
        "web_getters_clear_caches_on_memory_over_mb",
      );
      return n > 0 && t > n;
    }
    function E(e) {
      var t = y;
      return t != null && Date.now() - t < e;
    }
    function k(e) {
      var t = e.jsHeapSizeLimitMb,
        n = e.usedJsHeapSizeMb;
      return t > 0 && n / t >= c;
    }
    function I() {
      return (
        document.visibilityState === "hidden" ||
        o("WAWebUiIdleEventBus").UiIdleEventBus.uiBusy === 0
      );
    }
    function T(e) {
      var t = e.usedJsHeapSizeMb;
      C != null &&
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[memory-pressure] heap ",
              "MB before the last clear, ",
              "MB on the next sample",
            ])),
          C,
          t,
        ),
        (C = null));
    }
    function D(e) {
      var t = e.name,
        n = e.release,
        r = e.unit;
      try {
        return { name: t, unit: r, released: n() };
      } catch (e) {
        return (
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[memory-pressure] releasing ",
                " failed: ",
                "",
              ])),
            t,
            String(e),
          ),
          { name: t, unit: r, released: 0 }
        );
      }
    }
    function x(e) {
      return e
        .map(function (e) {
          var t = e.name,
            n = e.released,
            r = e.unit;
          return t + " " + n + " " + r;
        })
        .join(", ");
    }
    ((l.maybeClearCachesForMemoryPressure = b),
      (l.resetMemoryPressureStateForTesting = v));
  },
  98,
);
