__d(
  "areKeyCombinationsEqual",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e == null || t == null
        ? e === t
        : e.key !== "" &&
            t.key !== "" &&
            e.key === t.key &&
            (e.alt === !0) == (t.alt === !0) &&
            (e.command === !0) == (t.command === !0) &&
            (e.shift === !0) == (t.shift === !0);
    }
    i.default = e;
  },
  66,
);
