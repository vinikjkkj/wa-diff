__d(
  "GraphAPIPolling",
  ["DateConsts", "FBLogger", "Promise", "err", "promiseDone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5 * o("DateConsts").SEC_PER_MIN * o("DateConsts").MS_PER_SEC,
      u = 5 * o("DateConsts").MS_PER_SEC,
      c = 125;
    function d(e, t, n) {
      return e == null
        ? t
        : e <= 0
          ? (r("FBLogger")("GraphAPIPolling").warn(
              "%s must be a positive value",
              n,
            ),
            t)
          : e;
    }
    function m(t, o, a, i) {
      return function (l) {
        var m = d(a, s, "maxTime"),
          p = d(i, u, "maxDelay"),
          _ = Date.now() + m,
          f = Math.min(c, p),
          g = function (n, a) {
            r("promiseDone")(
              t(l),
              function (e) {
                var t = o(e);
                if (t instanceof Error) {
                  a(t);
                  return;
                }
                if (t) {
                  n(l);
                  return;
                }
                if (Date.now() >= _) {
                  var i = r("err")(
                    "Polling stopped after " + m + " milliseconds.",
                  );
                  a(i);
                  return;
                }
                (setTimeout(function () {
                  return g(n, a);
                }, f),
                  (f = Math.min(f * 2, p || 0)));
              },
              a,
            );
          };
        return new (e || (e = n("Promise")))(g);
      };
    }
    l.poll = m;
  },
  98,
);
