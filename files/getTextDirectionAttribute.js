__d(
  "getTextDirectionAttribute",
  ["cr:1080422"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = "auto";
      return (
        n("cr:1080422") != null &&
          window != null &&
          (t = n("cr:1080422").isDirectionRTL(e) ? "rtl" : "ltr"),
        t
      );
    }
    l.default = e;
  },
  98,
);
