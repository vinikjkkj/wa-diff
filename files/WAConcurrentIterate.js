__d(
  "WAConcurrentIterate",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      for (
        var r = [],
          o = [],
          a = 0,
          i = async function () {
            for (; a < e; ) {
              var n = a;
              (a++, (o[n] = await t(n)));
            }
          },
          l = Math.min(e, n),
          s = 0;
        s < l;
        s++
      )
        r.push(i());
      return Promise.all(r).then(function () {
        return o;
      });
    }
    i.concurrentIterate = e;
  },
  66,
);
