__d(
  "WAAsyncSleep",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (t === void 0 && (t = 200),
            n === void 0 && (n = 200),
            e > 0 && e % t === 0 && (yield u(n)));
        })),
        s.apply(this, arguments)
      );
    }
    function u(t) {
      return new (e || (e = n("Promise")))(function (e) {
        return setTimeout(e, t);
      });
    }
    ((i.asyncSleepAfterGivenLoopIteration = l), (i.asyncSleep = u));
  },
  66,
);
