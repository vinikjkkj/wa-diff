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
      m,
      p = 5e3,
      _ = 1e3,
      f = !1,
      g = "main",
      h = 0,
      y = !0,
      C = 0,
      b = 0,
      v = 0,
      S = 0,
      R = 0,
      L = 0,
      E = 0,
      k = null,
      I = null,
      T = null,
      D = null;
    function x(e) {
      (y ? (b += e - C) : (v += e - C), (C = e));
    }
    function $(t) {
      if (!(!f || g === t)) {
        var n = Date.now(),
          r = g,
          a = n - h;
        (g === "main"
          ? x(n)
          : g === "popout"
            ? (S += a)
            : g === "pip" && (R += a),
          (g = t),
          (h = n),
          t === "main" && ((y = !document.hidden), (C = n)),
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
    function P() {
      ((g = "main"),
        (h = 0),
        (y = !0),
        (C = 0),
        (b = 0),
        (v = 0),
        (S = 0),
        (R = 0),
        (L = 0),
        (E = 0),
        (k = null),
        (I = null),
        (T = null));
    }
    function N() {
      T != null &&
        (document.removeEventListener("visibilitychange", T), (T = null));
      var e = k;
      e != null &&
        (e.stopDetection(),
        I != null &&
          (e.off(o("WAWebBaseJSHaltDetector").JS_HALT_EVENT, I), (I = null)),
        (k = null));
    }
    function M(e) {
      $(e);
    }
    function w() {
      if (!f) {
        ((f = !0), (D = null), N(), P());
        var e = Date.now();
        ((h = e),
          (g = "main"),
          (y = !document.hidden),
          (C = e),
          (T = function () {
            if (!(!f || g !== "main")) {
              var e = Date.now(),
                t = e - C;
              (x(e),
                (y = !document.hidden),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [FocusTracker] main tab ",
                      " (prev state lasted ",
                      "ms)",
                    ])),
                  y ? "visible" : "hidden",
                  t,
                ));
            }
          }),
          document.addEventListener("visibilitychange", T));
        var t = new (o("WAWebBaseJSHaltDetector").BaseJsHaltDetector)(p, _);
        ((k = t),
          (I = function (t) {
            (L++,
              (E += t),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [FocusTracker] JS halt detected: ",
                    "ms",
                  ])),
                t,
              ));
          }),
          t.on(o("WAWebBaseJSHaltDetector").JS_HALT_EVENT, I),
          t.startDetection(),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [FocusTracker] Started tracking (mode=",
                ")",
              ])),
            g,
          ));
      }
    }
    function A() {
      f &&
        ((D = F()),
        (f = !1),
        N(),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [FocusTracker] stopped",
            ])),
        ));
    }
    function F() {
      if (!f) return D;
      var e = Date.now();
      return (
        g === "main"
          ? x(e)
          : g === "popout"
            ? (S += e - h)
            : g === "pip" && (R += e - h),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [FocusTracker] snapshot: vis=",
              " hid=",
              " pop=",
              " pip=",
              " halt=",
              " haltTotal=",
              "",
            ])),
          b,
          v,
          S,
          R,
          L,
          E,
        ),
        {
          mainTabVisibleMsT: b,
          mainTabHiddenMsT: v,
          popoutWebWindowMsT: S,
          pipWebWindowMsT: R,
          jsHaltCount: L,
          jsHaltTotalMsT: E,
        }
      );
    }
    function O() {
      var e = Date.now();
      ((b = 0), (v = 0), (S = 0), (R = 0), (L = 0), (E = 0), (h = e), (C = e));
    }
    ((l.notifyWindowModeChanged = M),
      (l.startVoipFocusTracking = w),
      (l.stopVoipFocusTracking = A),
      (l.snapshotFocusStats = F),
      (l.resetFocusStats = O));
  },
  98,
);
