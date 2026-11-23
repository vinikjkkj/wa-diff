__d(
  "WAPromiseLoop",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    async function e(e, t) {
      for (
        var n = { resolved: !1 },
          r = function (t) {
            n = { resolved: !0, value: t };
          },
          o = 0,
          a = t;
        !n.resolved;
      )
        ((a = await e(r, a, o)), o++);
      return n.value;
    }
    i.promiseLoop = e;
  },
  66,
);
