__d(
  "CometSSRContentRevealer",
  [
    "CometClientRootRendererUtils",
    "CometSSRLogger",
    "ExecutionEnvironment",
    "SSRInjectedElements",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = !1,
      c = !1,
      d = !1,
      m = o("CometSSRLogger").getSSRLogger(),
      p = null;
    function _(e) {
      p = e;
    }
    function f() {
      return c;
    }
    function g(t, n) {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var o = document.getElementById("caa-reg-fb-welcome-content");
        o != null &&
          (n.addAnnotationInt("enable_caa_welcome_screen_delay", 1),
          s != null && window.clearTimeout(s),
          (s = window.setTimeout(function () {
            (window.clearTimeout(s), (s = null), u && h(t));
          }, 2e3)));
      }
    }
    function h(e, t, n) {
      if ((t === void 0 && (t = !1), n === void 0 && (n = !1), !t && !b()))
        return (
          p != null &&
            p(function () {
              y(e, n);
            }),
          y(e, n)
        );
    }
    function y(e, t) {
      (t === void 0 && (t = !1), v());
      var n = o("CometClientRootRendererUtils").getOrCreateRootElement(e);
      C(n, t);
    }
    function C(e, t) {
      (t && e.style.removeProperty("content-visibility"),
        (e.style.visibility = ""),
        (e.style.display = ""),
        d || m.current.logSSRShown(),
        r("SSRInjectedElements").add(e),
        (d = !0));
    }
    function b() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t = document.getElementById("caa-reg-fb-welcome-content");
        if (s != null && t != null && !u) return ((u = !0), !0);
      }
      return !1;
    }
    function v() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM && !c) {
        var t = document.getElementById("splash-screen");
        t !== null &&
          (t.remove(), (c = !0), m.current.logSSRSplashScreenRemoved());
      }
    }
    ((l.setExternalSplashScreenController = _),
      (l.getIsSplashRemoved = f),
      (l.maybeInitTimerForCaaRegistrationWelcomeScreen = g),
      (l.unhideElement = h));
  },
  98,
);
