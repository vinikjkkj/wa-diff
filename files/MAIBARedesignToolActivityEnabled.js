__d(
  "MAIBARedesignToolActivityEnabled",
  ["MAIBASurfacesUtils", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("MAIBASurfacesUtils").getCurrentAutoLoggingTool();
      return (
        r("gkx")("27391") ||
        (e != null &&
          o("MAIBASurfacesUtils").ADS_MANAGER_SURFACES.has(e) &&
          (r("gkx")("28914") || r("gkx")("19"))) ||
        String(r("qex")._("3548")).includes("maiba_redesign_v0")
      );
    }
    l.default = e;
  },
  98,
);
