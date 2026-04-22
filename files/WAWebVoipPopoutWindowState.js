__d(
  "WAWebVoipPopoutWindowState",
  ["WAWebTypedEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("WAWebTypedEventEmitter"))(),
      s = "wa-web-main",
      u = !1,
      c = null,
      d = !1;
    function m() {
      return u;
    }
    function p(e) {
      u = e;
    }
    function _() {
      return d;
    }
    function f(e) {
      d = e;
    }
    function g() {
      if (c == null || !u) return !1;
      try {
        return !(c.document.hidden || c.innerWidth <= 0 || c.innerHeight <= 0);
      } catch (e) {
        return !1;
      }
    }
    function h() {
      return c;
    }
    function y(e) {
      c = e;
    }
    function C() {
      if (c == null) return !1;
      try {
        return !b(c);
      } catch (e) {
        return !1;
      }
    }
    function b(e) {
      return (
        e != null && typeof e == "object" && "closed" in e && e.closed === !0
      );
    }
    ((l.WAWebVoipUiPopoutWindowEventEmitter = e),
      (l.MAIN_WINDOW_NAME = s),
      (l.getIsCallActiveInPopoutWindow = m),
      (l.setIsCallActiveInPopoutWindow = p),
      (l.getIsPopoutWindowOpening = _),
      (l.setIsPopoutWindowOpening = f),
      (l.getIsPopoutWindowActiveAndVisible = g),
      (l.getPopoutWindow = h),
      (l.setPopoutWindow = y),
      (l.isPopoutWindowAlive = C));
  },
  98,
);
