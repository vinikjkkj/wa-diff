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
      m = !1,
      p = !1;
    function _() {
      return u;
    }
    function f(e) {
      u = e;
    }
    function g() {
      return d;
    }
    function h(t) {
      d !== t &&
        ((d = t), e.trigger("popoutWindowOpeningChanged", { isOpening: t }));
    }
    function y() {
      return m;
    }
    function C() {
      m = !0;
    }
    function b() {
      m = !1;
    }
    function v() {
      return p;
    }
    function S(e) {
      p = e;
    }
    function R() {
      if (c == null || !u) return !1;
      try {
        return !(c.document.hidden || c.innerWidth <= 0 || c.innerHeight <= 0);
      } catch (e) {
        return !1;
      }
    }
    function L() {
      return c;
    }
    function E(e) {
      c = e;
    }
    function k() {
      if (c == null) return !1;
      try {
        return !I(c);
      } catch (e) {
        return !1;
      }
    }
    function I(e) {
      return (
        e != null && typeof e == "object" && "closed" in e && e.closed === !0
      );
    }
    ((l.WAWebVoipUiPopoutWindowEventEmitter = e),
      (l.MAIN_WINDOW_NAME = s),
      (l.getIsCallActiveInPopoutWindow = _),
      (l.setIsCallActiveInPopoutWindow = f),
      (l.getIsPopoutWindowOpening = g),
      (l.setIsPopoutWindowOpening = h),
      (l.getIsPopoutUiReady = y),
      (l.markPopoutUiReady = C),
      (l.resetPopoutUiReady = b),
      (l.getIsCameraStreamReacquisitionInProgress = v),
      (l.setIsCameraStreamReacquisitionInProgress = S),
      (l.getIsPopoutWindowActiveAndVisible = R),
      (l.getPopoutWindow = L),
      (l.setPopoutWindow = E),
      (l.isPopoutWindowAlive = k));
  },
  98,
);
