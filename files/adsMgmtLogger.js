__d(
  "adsMgmtLogger",
  ["PEAppLogger", "isFalsey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      r("PEAppLogger").logForAnalytics(
        r("isFalsey")(n) ? "user_action" : n,
        e,
        t,
      );
    }
    l.default = e;
  },
  98,
);
