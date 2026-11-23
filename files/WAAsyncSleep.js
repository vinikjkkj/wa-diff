__d(
  "WAAsyncSleep",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    async function e(e, t, n) {
      (t === void 0 && (t = 200),
        n === void 0 && (n = 200),
        e > 0 && e % t === 0 && (await l(n)));
    }
    function l(e) {
      return new Promise(function (t) {
        return setTimeout(t, e);
      });
    }
    ((i.asyncSleepAfterGivenLoopIteration = e), (i.asyncSleep = l));
  },
  66,
);
