__d(
  "WAWebVoipPopoutWindowState",
  ["WALogger", "WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (r("WAWebEventEmitter"))(),
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
      f = !1,
      g = 0,
      h = new Set();
    function y() {
      return d;
    }
    function C(e) {
      d !== e &&
        ((d = e), s.trigger("callActiveInPopoutChanged", { isActive: e }));
    }
    function b() {
      return p;
    }
    function v(e) {
      p !== e &&
        ((p = e), s.trigger("popoutWindowOpeningChanged", { isOpening: e }));
    }
    function S() {
      return _;
    }
    function R(e) {
      _ !== e &&
        ((_ = e), s.trigger("autoPopoutPendingChanged", { isPending: e }));
    }
    function L() {
      return f;
    }
    function E() {
      f = !0;
    }
    function k() {
      f = !1;
    }
    function I() {
      return h.size > 0;
    }
    function T() {
      var e = g++;
      return (
        h.add(e),
        function () {
          h.delete(e);
        }
      );
    }
    function D() {
      h.clear();
    }
    function x() {
      if (m == null || !d) return !1;
      try {
        return !(m.document.hidden || m.innerWidth <= 0 || m.innerHeight <= 0);
      } catch (e) {
        return !1;
      }
    }
    function $() {
      return m;
    }
    function P(e) {
      m = e;
    }
    function N() {
      if (m == null) return !1;
      try {
        return !M(m);
      } catch (e) {
        return !1;
      }
    }
    function M(e) {
      return (
        e != null && typeof e == "object" && "closed" in e && e.closed === !0
      );
    }
    ((l.WAWebVoipUiPopoutWindowEventEmitter = s),
      (l.MAIN_WINDOW_NAME = u),
      (l.focusMainWindowForMediaPrompt = c),
      (l.getIsCallActiveInPopoutWindow = y),
      (l.setIsCallActiveInPopoutWindow = C),
      (l.getIsPopoutWindowOpening = b),
      (l.setIsPopoutWindowOpening = v),
      (l.getIsAutoPopoutPending = S),
      (l.setIsAutoPopoutPending = R),
      (l.getIsPopoutUiReady = L),
      (l.markPopoutUiReady = E),
      (l.resetPopoutUiReady = k),
      (l.getIsCameraStreamReacquisitionInProgress = I),
      (l.beginCameraStreamReacquisition = T),
      (l.resetCameraStreamReacquisitions = D),
      (l.getIsPopoutWindowActiveAndVisible = x),
      (l.getPopoutWindow = $),
      (l.setPopoutWindow = P),
      (l.isPopoutWindowAlive = N),
      (l.isWindowClosed = M));
  },
  98,
);
