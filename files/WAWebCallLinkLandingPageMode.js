__d(
  "WAWebCallLinkLandingPageMode",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return e
        ? t == null
          ? null
          : t
            ? "lobby"
            : "join_call_lite"
        : n
          ? "qr_redirect"
          : "join_call_lite";
    }
    i.computeMode = e;
  },
  66,
);
