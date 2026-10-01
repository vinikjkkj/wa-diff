__d(
  "WAWebGettersMemoryPressure",
  ["WALogger", "WAWebABProps", "WAWebGetters", "WAWebUiIdleEventBus"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 0.5,
      c = 600 * 1e3,
      d = 3,
      m = 300 * 1e3,
      p = 3,
      _ = 0,
      f = 0,
      g = null,
      h = null;
    function y(t) {
      k(t);
      var n = b(t);
      if (n != null) {
        var r = o("WAWebGetters").clearAllGetterCaches();
        (n === "heap_ratio" ? _++ : f++,
          (g = Date.now()),
          (h = t.usedJsHeapSizeMb),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[getters-memory-pressure] ",
                " cleared ",
                " getter cache entries at ",
                "/",
                "MB",
              ])),
            n,
            r,
            t.usedJsHeapSizeMb,
            t.jsHeapSizeLimitMb,
          ));
      }
    }
    function C() {
      ((_ = 0), (f = 0), (g = null), (h = null));
    }
    function b(e) {
      return E() ? (v(e) ? "heap_ratio" : S(e) ? "heap_over_mb" : null) : null;
    }
    function v(e) {
      return (
        _ < d &&
        !R(c) &&
        L(e) &&
        o("WAWebABProps").getABPropConfigValue(
          "web_getters_clear_caches_on_memory_pressure",
        )
      );
    }
    function S(e) {
      var t = e.usedJsHeapSizeMb;
      if (f >= p || R(m)) return !1;
      var n = o("WAWebABProps").getABPropConfigValue(
        "web_getters_clear_caches_on_memory_over_mb",
      );
      return n > 0 && t > n;
    }
    function R(e) {
      var t = g;
      return t != null && Date.now() - t < e;
    }
    function L(e) {
      var t = e.jsHeapSizeLimitMb,
        n = e.usedJsHeapSizeMb;
      return t > 0 && n / t >= u;
    }
    function E() {
      return (
        document.visibilityState === "hidden" ||
        o("WAWebUiIdleEventBus").UiIdleEventBus.uiBusy === 0
      );
    }
    function k(e) {
      var t = e.usedJsHeapSizeMb;
      h != null &&
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[getters-memory-pressure] heap ",
              "MB before the last clear, ",
              "MB on the next sample",
            ])),
          h,
          t,
        ),
        (h = null));
    }
    ((l.maybeClearGetterCachesForMemoryPressure = y),
      (l.resetGettersMemoryPressureStateForTesting = C));
  },
  98,
);
