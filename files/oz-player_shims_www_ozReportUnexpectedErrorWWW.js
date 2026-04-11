__d(
  "oz-player/shims/www/ozReportUnexpectedErrorWWW",
  ["FBLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      n === void 0 && (n = "mustfix");
      var o = r("getErrorSafe")(e),
        a = r("FBLogger")("oz_player").catching(o),
        i = "Unexpected " + o.name + " in " + t;
      switch (n) {
        case "fatal":
          a.fatal(i);
          break;
        case "mustfix":
          a.mustfix(i);
          break;
        case "warn":
          a.warn(i);
          break;
        case "info":
          a.info(i);
          break;
        case "debug":
          a.debug(i);
          break;
      }
    }
    l.default = e;
  },
  98,
);
