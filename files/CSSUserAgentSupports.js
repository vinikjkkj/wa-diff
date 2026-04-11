__d(
  "CSSUserAgentSupports",
  ["UserAgent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        webkitLineClamp: function () {
          return !(
            r("UserAgent").isBrowser("IE") ||
            r("UserAgent").isBrowser("Edge < 17") ||
            r("UserAgent").isBrowser("Firefox < 68")
          );
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
