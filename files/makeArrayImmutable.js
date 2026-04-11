__d(
  "makeArrayImmutable",
  ["makeImmutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("makeImmutable")(e, [
        "copyWithin",
        "fill",
        "pop",
        "push",
        "reverse",
        "shift",
        "sort",
        "splice",
        "unshift",
      ]);
    }
    l.default = e;
  },
  98,
);
