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
      p = 0,
      _ = new Set();
    function f() {
      return u;
    }
    function g(e) {
      u = e;
    }
    function h() {
      return d;
    }
    function y(t) {
      d !== t &&
        ((d = t), e.trigger("popoutWindowOpeningChanged", { isOpening: t }));
    }
    function C() {
      return m;
    }
    function b() {
      m = !0;
    }
    function v() {
      m = !1;
    }
    function S() {
      return _.size > 0;
    }
    function R() {
      var e = p++;
      return (
        _.add(e),
        function () {
          _.delete(e);
        }
      );
    }
    function L() {
      _.clear();
    }
    function E() {
      if (c == null || !u) return !1;
      try {
        return !(c.document.hidden || c.innerWidth <= 0 || c.innerHeight <= 0);
      } catch (e) {
        return !1;
      }
    }
    function k() {
      return c;
    }
    function I(e) {
      c = e;
    }
    function T() {
      if (c == null) return !1;
      try {
        return !D(c);
      } catch (e) {
        return !1;
      }
    }
    function D(e) {
      return (
        e != null && typeof e == "object" && "closed" in e && e.closed === !0
      );
    }
    ((l.WAWebVoipUiPopoutWindowEventEmitter = e),
      (l.MAIN_WINDOW_NAME = s),
      (l.getIsCallActiveInPopoutWindow = f),
      (l.setIsCallActiveInPopoutWindow = g),
      (l.getIsPopoutWindowOpening = h),
      (l.setIsPopoutWindowOpening = y),
      (l.getIsPopoutUiReady = C),
      (l.markPopoutUiReady = b),
      (l.resetPopoutUiReady = v),
      (l.getIsCameraStreamReacquisitionInProgress = S),
      (l.beginCameraStreamReacquisition = R),
      (l.resetCameraStreamReacquisitions = L),
      (l.getIsPopoutWindowActiveAndVisible = E),
      (l.getPopoutWindow = k),
      (l.setPopoutWindow = I),
      (l.isPopoutWindowAlive = T),
      (l.isWindowClosed = D));
  },
  98,
);
