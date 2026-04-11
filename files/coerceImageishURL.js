__d(
  "coerceImageishURL",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e &&
        typeof e == "object" &&
        !e.sprited &&
        typeof e.uri == "string" &&
        e.width !== void 0 &&
        e.height !== void 0
        ? e
        : null;
    }
    i.default = e;
  },
  66,
);
