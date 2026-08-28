__d(
  "isCanvasAppURI",
  ["isFacebookURI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("isFacebookURI")(e) && e.getSubdomain() === "apps";
    }
    l.default = e;
  },
  98,
);
