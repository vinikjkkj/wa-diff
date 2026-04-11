__d(
  "WAWebVoipWindowConstants",
  [
    "WAWebCallCollection",
    "WAWebTypedEventEmitter",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWindowConstants.stylex.const",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 400,
      s = 400,
      u = 820,
      c = !1,
      d = new (r("WAWebTypedEventEmitter"))();
    function m(e) {
      ((c = e), d.trigger("change", e));
    }
    function p() {
      if (c) return u;
      var t = r("WAWebCallCollection").activeCall;
      return t != null &&
        t.isCallLink &&
        t.getState() === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely
        ? u
        : e;
    }
    ((l.MIN_WINDOW_WIDTH = e),
      (l.MIN_WINDOW_HEIGHT = s),
      (l.DRAWER_WIDTH = o(
        "WAWebVoipWindowConstants.stylex.const",
      ).drawerDimensions.width),
      (l.DRAWER_GAP = o(
        "WAWebVoipWindowConstants.stylex.const",
      ).drawerDimensions.gap),
      (l.MIN_WINDOW_WIDTH_WITH_SIDEBAR = u),
      (l.sidebarVisibilityEmitter = d),
      (l.setIsSidebarVisible = m),
      (l.getEffectiveMinWindowWidth = p));
  },
  98,
);
