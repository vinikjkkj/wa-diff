__d(
  "isImageSizeUnderLimit",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = atob(e),
        r = n.length,
        o = r / 1024;
      return o < t;
    }
    i.isImageSizeUnderLimit = e;
  },
  66,
);
