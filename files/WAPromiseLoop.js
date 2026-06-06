__d(
  "WAPromiseLoop",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    async function e(e, t) {
      for (
        var n = !1,
          r,
          o = function (t) {
            ((n = !0), (r = t));
          },
          a = 0,
          i = t;
        !n;
      )
        ((i = await e(o, i, a)), a++);
      return r;
    }
    i.promiseLoop = e;
  },
  66,
);
