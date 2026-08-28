__d(
  "objectToMap",
  ["forEachObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new Map();
      return (
        r("forEachObject")(e, function (e, n) {
          t.set(n, e);
        }),
        t
      );
    }
    l.default = e;
  },
  98,
);
