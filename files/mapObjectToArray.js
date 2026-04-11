__d(
  "mapObjectToArray",
  ["forEachObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = [];
      return (
        r("forEachObject")(e, function (e, r, o) {
          n.push(t(e, r, o));
        }),
        n
      );
    }
    l.default = e;
  },
  98,
);
