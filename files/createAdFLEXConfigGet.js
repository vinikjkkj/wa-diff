__d(
  "createAdFLEXConfigGet",
  ["getToolForCurrentRoute", "memoize"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      return r("memoize")(function () {
        var e = r("getToolForCurrentRoute")();
        return e != null ? t(e) : void 0;
      });
    };
    l.createAdFLEXConfigGet = e;
  },
  98,
);
