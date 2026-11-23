__d(
  "WAWebCooldownBatcher",
  ["WABatcher", "WAPromiseDelays"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WABatcher").createBatcher(function (e) {
          return t(e).then(function (t) {
            for (var n = new Map(), r = 0; r < e.length; r++) n.set(e[r], t[r]);
            return n;
          });
        }),
        r = !1,
        a = 0,
        i = 0,
        l = async function (n) {
          var t = Date.now();
          if (!(t - n >= e.maxWindowMs)) {
            var r = e.windowMs - (t - a);
            if (!(r <= 0)) {
              var i = e.maxWindowMs - (t - n);
              (await o("WAPromiseDelays").delayMs(Math.min(r, i)), await l(n));
            }
          }
        },
        s = async function () {
          ((r = !0), await l(Date.now()));
          var t = Date.now() - i;
          (t < e.cooldownMs &&
            (await o("WAPromiseDelays").delayMs(e.cooldownMs - t)),
            (i = Date.now()),
            (r = !1),
            n.runActiveBatch());
        };
      return function (e) {
        var t = n.accept(e);
        return ((a = Date.now()), r || s(), t);
      };
    }
    l.createCooldownBatcher = e;
  },
  98,
);
