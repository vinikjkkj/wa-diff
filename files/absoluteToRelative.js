__d(
  "absoluteToRelative",
  ["memoizeStringOnly"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("memoizeStringOnly")(function (e) {
      return e.replace(/^https?:\/\/[^\/]+/i, "");
    });
    function s(t) {
      return e(t != null ? t : "#");
    }
    l.default = s;
  },
  98,
);
