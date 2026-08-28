__d(
  "baseTypeaheadStartsWithMatchBuilder",
  ["escapeRegex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.query,
        n = new RegExp("^" + r("escapeRegex")(t), "i");
      return function (e) {
        var t;
        return n.test((t = e.label) != null ? t : "");
      };
    }
    l.default = e;
  },
  98,
);
