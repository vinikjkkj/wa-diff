__d(
  "WAWebVoipWindowConstants",
  [
    "WAWebCallCollection",
    "WAWebTypedEventEmitter",
    "WAWebVoipWindowConstants.stylex.const",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 280,
      s = 280,
      u = 200,
      c = 820,
      d = !1,
      m = new (r("WAWebTypedEventEmitter"))();
    function p(e) {
      ((d = e), m.trigger("change", e));
    }
    function _() {
      var e = r("WAWebCallCollection").activeCall;
      return (e == null ? void 0 : e.isGroup) === !0 &&
        (e == null ? void 0 : e.isVideo) !== !0
        ? u
        : s;
    }
    function f() {
      return d ? c : e;
    }
    ((l.MIN_WINDOW_WIDTH = e),
      (l.MIN_WINDOW_HEIGHT = s),
      (l.MIN_WINDOW_HEIGHT_GROUP_AUDIO = u),
      (l.DRAWER_WIDTH = o(
        "WAWebVoipWindowConstants.stylex.const",
      ).drawerDimensions.width),
      (l.MIN_WINDOW_WIDTH_WITH_SIDEBAR = c),
      (l.sidebarVisibilityEmitter = m),
      (l.setIsSidebarVisible = p),
      (l.getEffectiveMinWindowHeight = _),
      (l.getEffectiveMinWindowWidth = f));
  },
  98,
);
