__d(
  "WAWebCallLinkLandingPageMode",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.guestCallingEnabled,
        n = e.isGuestCallingSession,
        r = e.isLoggedIn,
        o = e.isUnsupportedBrowser,
        a = e.isWebGroupCalling100Enabled,
        i = e.webCallingEnabled;
      return o
        ? "join_call_lite"
        : t && n
          ? "guest_redirect"
          : r
            ? l(i)
            : t
              ? "guest_redirect"
              : a
                ? "qr_redirect"
                : "join_call_lite";
    }
    function l(e) {
      return e === !1 ? "join_call_lite" : e == null ? null : "lobby";
    }
    i.computeMode = e;
  },
  66,
);
