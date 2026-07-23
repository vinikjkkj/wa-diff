__d(
  "CometSSRContentRevealer",
  ["CometClientRootRendererUtils", "CometSSRLogger", "SSRInjectedElements"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = !1,
      u = !1,
      c = !1,
      d = o("CometSSRLogger").getSSRLogger(),
      m = null;
    function p(e) {
      m = e;
    }
    function _() {
      return u;
    }
    function f(t, n) {
      var r = document.getElementById("caa-reg-fb-welcome-content");
      r != null &&
        (n.addAnnotationInt("enable_caa_welcome_screen_delay", 1),
        e != null && window.clearTimeout(e),
        (e = window.setTimeout(function () {
          (window.clearTimeout(e), (e = null), s && g(t));
        }, 2e3)));
    }
    function g(e, t, n) {
      if ((t === void 0 && (t = !1), n === void 0 && (n = !1), !t && !C()))
        return (
          m != null &&
            m(function () {
              h(e, n);
            }),
          h(e, n)
        );
    }
    function h(e, t) {
      (t === void 0 && (t = !1), b());
      var n = o("CometClientRootRendererUtils").getOrCreateRootElement(e);
      y(n, t);
    }
    function y(e, t) {
      (t && e.style.removeProperty("content-visibility"),
        (e.style.visibility = ""),
        (e.style.display = ""),
        c || d.current.logSSRShown(),
        r("SSRInjectedElements").add(e),
        (c = !0));
    }
    function C() {
      var t = document.getElementById("caa-reg-fb-welcome-content");
      return e != null && t != null && !s ? ((s = !0), !0) : !1;
    }
    function b() {
      if (!u) {
        var e = document.getElementById("splash-screen");
        e !== null &&
          (e.remove(), (u = !0), d.current.logSSRSplashScreenRemoved());
      }
    }
    ((l.setExternalSplashScreenController = p),
      (l.getIsSplashRemoved = _),
      (l.maybeInitTimerForCaaRegistrationWelcomeScreen = f),
      (l.unhideElement = g));
  },
  98,
);
