__d(
  "equalsSet",
  ["everySet"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.size !== t.size
        ? !1
        : r("everySet")(e, function (e) {
            return t.has(e);
          });
    }
    l.default = e;
  },
  98,
);
