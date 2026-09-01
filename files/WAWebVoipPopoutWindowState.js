__d(
  "WAWebVoipPopoutWindowState",
  ["WALogger", "WAWebTypedEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (r("WAWebTypedEventEmitter"))(),
      u = "wa-web-main";
    function c(t, n, r) {
      try {
        var a = t == null ? void 0 : t.open("#", u);
        return (
          a == null || a.focus(),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [",
                "] ",
                " permission prompt would open in the hidden main tab; focusing it so the prompt is visible",
              ])),
            n,
            r,
          ),
          a != null
        );
      } catch (e) {
        return !1;
      }
    }
    var d = !1,
      m = null,
      p = !1,
      _ = !1,
      f = 0,
      g = new Set();
    function h() {
      return d;
    }
    function y(e) {
      d = e;
    }
    function C() {
      return p;
    }
    function b(e) {
      p !== e &&
        ((p = e), s.trigger("popoutWindowOpeningChanged", { isOpening: e }));
    }
    function v() {
      return _;
    }
    function S() {
      _ = !0;
    }
    function R() {
      _ = !1;
    }
    function L() {
      return g.size > 0;
    }
    function E() {
      var e = f++;
      return (
        g.add(e),
        function () {
          g.delete(e);
        }
      );
    }
    function k() {
      g.clear();
    }
    function I() {
      if (m == null || !d) return !1;
      try {
        return !(m.document.hidden || m.innerWidth <= 0 || m.innerHeight <= 0);
      } catch (e) {
        return !1;
      }
    }
    function T() {
      return m;
    }
    function D(e) {
      m = e;
    }
    function x() {
      if (m == null) return !1;
      try {
        return !$(m);
      } catch (e) {
        return !1;
      }
    }
    function $(e) {
      return (
        e != null && typeof e == "object" && "closed" in e && e.closed === !0
      );
    }
    ((l.WAWebVoipUiPopoutWindowEventEmitter = s),
      (l.MAIN_WINDOW_NAME = u),
      (l.focusMainWindowForMediaPrompt = c),
      (l.getIsCallActiveInPopoutWindow = h),
      (l.setIsCallActiveInPopoutWindow = y),
      (l.getIsPopoutWindowOpening = C),
      (l.setIsPopoutWindowOpening = b),
      (l.getIsPopoutUiReady = v),
      (l.markPopoutUiReady = S),
      (l.resetPopoutUiReady = R),
      (l.getIsCameraStreamReacquisitionInProgress = L),
      (l.beginCameraStreamReacquisition = E),
      (l.resetCameraStreamReacquisitions = k),
      (l.getIsPopoutWindowActiveAndVisible = I),
      (l.getPopoutWindow = T),
      (l.setPopoutWindow = D),
      (l.isPopoutWindowAlive = x),
      (l.isWindowClosed = $));
  },
  98,
);
