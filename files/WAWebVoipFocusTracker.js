__d(
  "WAWebVoipFocusTracker",
  ["WALogger", "WAWebBaseJSHaltDetector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 5e3,
      p = 1e3,
      _ = !1,
      f = "main",
      g = 0,
      h = !0,
      y = 0,
      C = 0,
      b = 0,
      v = 0,
      S = 0,
      R = 0,
      L = 0,
      E = null,
      k = null,
      I = null,
      T = null;
    function D(e) {
      (h ? (C += e - y) : (b += e - y), (y = e));
    }
    function x(t) {
      if (!(!_ || f === t)) {
        var n = Date.now(),
          r = f,
          a = n - g;
        (f === "main"
          ? D(n)
          : f === "popout"
            ? (v += a)
            : f === "pip" && (S += a),
          (f = t),
          (g = n),
          t === "main" && ((h = !document.hidden), (y = n)),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [FocusTracker] ",
                " -> ",
                " (",
                " lasted ",
                "ms)",
              ])),
            r,
            t,
            r,
            a,
          ));
      }
    }
    function $() {
      ((f = "main"),
        (g = 0),
        (h = !0),
        (y = 0),
        (C = 0),
        (b = 0),
        (v = 0),
        (S = 0),
        (R = 0),
        (L = 0),
        (E = null),
        (k = null),
        (I = null));
    }
    function P() {
      I != null &&
        (document.removeEventListener("visibilitychange", I), (I = null));
      var e = E;
      e != null &&
        (e.stopDetection(),
        k != null &&
          (e.off(o("WAWebBaseJSHaltDetector").JS_HALT_EVENT, k), (k = null)),
        (E = null));
    }
    function N(e) {
      x(e);
    }
    function M() {
      if (!_) {
        ((_ = !0), (T = null), P(), $());
        var e = Date.now();
        ((g = e),
          (f = "main"),
          (h = !document.hidden),
          (y = e),
          (I = function () {
            if (!(!_ || f !== "main")) {
              var e = Date.now(),
                t = e - y;
              (D(e),
                (h = !document.hidden),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [FocusTracker] main tab ",
                      " (prev state lasted ",
                      "ms)",
                    ])),
                  h ? "visible" : "hidden",
                  t,
                ));
            }
          }),
          document.addEventListener("visibilitychange", I));
        var t = new (o("WAWebBaseJSHaltDetector").BaseJsHaltDetector)(m, p);
        ((E = t),
          (k = function (t) {
            (R++,
              (L += t),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [FocusTracker] JS halt detected: ",
                    "ms",
                  ])),
                t,
              ));
          }),
          t.on(o("WAWebBaseJSHaltDetector").JS_HALT_EVENT, k),
          t.startDetection(),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [FocusTracker] Started tracking (mode=",
                ")",
              ])),
            f,
          ));
      }
    }
    function w() {
      if (_) {
        _ = !1;
        var e = Date.now();
        (f === "main"
          ? D(e)
          : f === "popout"
            ? (v += e - g)
            : f === "pip" && (S += e - g),
          P(),
          (T = {
            mainTabVisibleMs: C,
            mainTabHiddenMs: b,
            popoutWindowMs: v,
            pipWindowMs: S,
            jsHaltCount: R,
            jsHaltTotalMs: L,
          }),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [FocusTracker] stop vis=",
                " hid=",
                " pop=",
                " pip=",
                " halt=",
                "",
              ])),
            C,
            b,
            v,
            S,
            R,
          ));
      }
    }
    function A() {
      var e = T;
      return ((T = null), e);
    }
    ((l.notifyWindowModeChanged = N),
      (l.startVoipFocusTracking = M),
      (l.stopVoipFocusTracking = w),
      (l.consumeVoipFocusStats = A));
  },
  98,
);
