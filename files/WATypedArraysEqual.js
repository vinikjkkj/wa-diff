__d(
  "WATypedArraysEqual",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e === t
        ? !0
        : e.length !== t.length
          ? !1
          : e.every(function (e, n) {
              return e === t[n];
            });
    }
    i.default = e;
  },
  66,
);
