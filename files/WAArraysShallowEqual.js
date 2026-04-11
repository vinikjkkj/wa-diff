__d(
  "WAArraysShallowEqual",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e === t;
    }
    function l(t, n, r) {
      return (
        r === void 0 && (r = e),
        t === n
          ? !0
          : t.length !== n.length
            ? !1
            : t.every(function (e, t) {
                return r(e, n[t]);
              })
      );
    }
    i.default = l;
  },
  66,
);
