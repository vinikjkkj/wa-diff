__d(
  "adsGetUsingAdSequencing",
  ["qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (r("qex")._("1987") === !0) {
        var t;
        return (
          (Array.isArray(e)
            ? e.length
            : (t = e == null ? void 0 : e.size) != null
              ? t
              : 0) > 0
        );
      }
      var n = Array.isArray(e) ? e : e == null ? void 0 : e.toArray();
      return (n != null ? n : []).length > 0;
    }
    l.default = e;
  },
  98,
);
