__d(
  "WAWebVoipPopoutWindowState",
  ["WAWebTypedEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("WAWebTypedEventEmitter"))(),
      s = "wa-web-main",
      u = !1,
      c = null,
      d = !1,
      m = !1;
    function p() {
      return u;
    }
    function _(e) {
      u = e;
    }
    function f() {
      return d;
    }
    function g(t) {
      d !== t &&
        ((d = t), e.trigger("popoutWindowOpeningChanged", { isOpening: t }));
    }
    function h() {
      return m;
    }
    function y() {
      m = !0;
    }
    function C() {
      m = !1;
    }
    function b() {
      if (c == null || !u) return !1;
      try {
        return !(c.document.hidden || c.innerWidth <= 0 || c.innerHeight <= 0);
      } catch (e) {
        return !1;
      }
    }
    function v() {
      return c;
    }
    function S(e) {
      c = e;
    }
    function R() {
      if (c == null) return !1;
      try {
        return !L(c);
      } catch (e) {
        return !1;
      }
    }
    function L(e) {
      return (
        e != null && typeof e == "object" && "closed" in e && e.closed === !0
      );
    }
    ((l.WAWebVoipUiPopoutWindowEventEmitter = e),
      (l.MAIN_WINDOW_NAME = s),
      (l.getIsCallActiveInPopoutWindow = p),
      (l.setIsCallActiveInPopoutWindow = _),
      (l.getIsPopoutWindowOpening = f),
      (l.setIsPopoutWindowOpening = g),
      (l.getIsPopoutUiReady = h),
      (l.markPopoutUiReady = y),
      (l.resetPopoutUiReady = C),
      (l.getIsPopoutWindowActiveAndVisible = b),
      (l.getPopoutWindow = v),
      (l.setPopoutWindow = S),
      (l.isPopoutWindowAlive = R));
  },
  98,
);
