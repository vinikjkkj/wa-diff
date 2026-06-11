__d(
  "WAWebCooldownBatcher",
  ["WABatcher", "WAPromiseDelays", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var r = o("WABatcher").createBatcher(function (e) {
          return t(e).then(function (t) {
            for (var n = new Map(), r = 0; r < e.length; r++) n.set(e[r], t[r]);
            return n;
          });
        }),
        a = !1,
        i = 0,
        l = 0,
        s = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = Date.now();
            if (!(n - t >= e.maxWindowMs)) {
              var r = e.windowMs - (n - i);
              if (!(r <= 0)) {
                var a = e.maxWindowMs - (n - t);
                (yield o("WAPromiseDelays").delayMs(Math.min(r, a)),
                  yield s(t));
              }
            }
          });
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        u = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            ((a = !0), yield s(Date.now()));
            var t = Date.now() - l;
            (t < e.cooldownMs &&
              (yield o("WAPromiseDelays").delayMs(e.cooldownMs - t)),
              (l = Date.now()),
              (a = !1),
              r.runActiveBatch());
          });
          return function () {
            return t.apply(this, arguments);
          };
        })();
      return function (e) {
        var t = r.accept(e);
        return ((i = Date.now()), a || u(), t);
      };
    }
    l.createCooldownBatcher = e;
  },
  98,
);
