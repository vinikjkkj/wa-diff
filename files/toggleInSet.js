__d(
  "toggleInSet",
  ["addToSet", "removeFromSet"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.has(t) ? r("removeFromSet")(e, t) : r("addToSet")(e, t);
    }
    l.default = e;
  },
  98,
);
