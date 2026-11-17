__d(
  "WAWebVoipWindowConstants",
  [
    "WAWebCallCollection",
    "WAWebEventEmitter",
    "WAWebVoipWindowConstants.stylex.const",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 280,
      s = 280,
      u = 200,
      c = 820,
      d = 560,
      m = !1,
      p = c,
      _ = new (r("WAWebEventEmitter"))();
    function f(e, t) {
      (t === void 0 && (t = c), (m = e), (p = t), _.trigger("change", e));
    }
    var g = !1,
      h = new (r("WAWebEventEmitter"))();
    function y(e) {
      e !== g && ((g = e), h.trigger("change", e));
    }
    function C() {
      return g;
    }
    function b() {
      var e = r("WAWebCallCollection").activeCall;
      return (e == null ? void 0 : e.isGroup) === !0 &&
        (e == null ? void 0 : e.isVideo) !== !0
        ? u
        : s;
    }
    function v() {
      return m ? p : e;
    }
    ((l.MIN_WINDOW_WIDTH = e),
      (l.MIN_WINDOW_HEIGHT = s),
      (l.DRAWER_WIDTH = o(
        "WAWebVoipWindowConstants.stylex.const",
      ).drawerDimensions.width),
      (l.MIN_WINDOW_WIDTH_WITH_SIDEBAR = c),
      (l.MIN_WINDOW_WIDTH_WITH_SIDEBAR_BESIDE_ONE_TO_ONE = d),
      (l.sidebarVisibilityEmitter = _),
      (l.setIsSidebarVisible = f),
      (l.speakerDominantTooSmallEmitter = h),
      (l.updateSpeakerDominantTooSmall = y),
      (l.getIsSpeakerDominantTooSmall = C),
      (l.getEffectiveMinWindowHeight = b),
      (l.getEffectiveMinWindowWidth = v));
  },
  98,
);
