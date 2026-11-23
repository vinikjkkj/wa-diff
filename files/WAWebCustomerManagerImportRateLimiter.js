__d(
  "WAWebCustomerManagerImportRateLimiter",
  ["invariant", "WAPromiseDelays", "WATimeUtils", "WAWebBackendErrors"],
  function (t, n, r, o, a, i, l, s) {
    var e = 6e4,
      u = 3e5;
    function c(e, t) {
      var n = [];
      return {
        take: function () {
          var r = t();
          if (
            ((n = n.filter(function (e) {
              var t = e.takenAt;
              return t > r - u;
            })),
            n.length >= e)
          )
            return null;
          var o = { takenAt: r };
          return (n.push(o), o);
        },
        refund: function (t) {
          n = n.filter(function (e) {
            return e !== t;
          });
        },
      };
    }
    function d(e) {
      return (
        e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
        e.status === 429
      );
    }
    function m(t, n) {
      var r, a;
      (n === void 0 && (n = {}),
        (Number.isInteger(t) && t > 0) || s(0, 185772));
      var i = o("WATimeUtils").monotonicTime(),
        l =
          (r = n.now) != null
            ? r
            : function () {
                return o("WATimeUtils").monotonicTimeSince(i);
              },
        u = (a = n.delay) != null ? a : o("WAPromiseDelays").delayMs,
        c = e / t,
        d = t,
        m = [],
        _ = 0;
      async function f(n) {
        (Number.isInteger(n) && n > 0 && n <= d) || s(0, 185773);
        var r = l(),
          o = p(m, r, _, n, t);
        if (o > r) return (await u(Math.ceil(o - r)), f(n));
        ((m = m.filter(function (t) {
          return t.startedAt > r - e;
        })),
          m.push({ count: n, startedAt: r }),
          (_ = r + n * c));
      }
      function g(n, r, o) {
        if (((Number.isInteger(r) && r > 0) || s(0, 192685), n === 0)) return 0;
        var a = l(),
          i = Math.min(r, d),
          u = p(m, a, _, Math.min(i, n), t),
          c = n % i || i,
          f = e / (Math.floor(t / i) * i);
        return u - a + (n - c) * Math.max(f, o) + c * o;
      }
      return {
        batchSize: function (t) {
          return Math.min(t, d);
        },
        estimateRemainingMs: g,
        waitForBatch: f,
      };
    }
    function p(t, n, r, o, a) {
      var i = Math.max(n, r),
        l = t.filter(function (t) {
          return t.startedAt > i - e;
        }),
        s =
          l.reduce(function (e, t) {
            return e + t.count;
          }, o) - a;
      for (var u of l) {
        if (s <= 0) break;
        ((i = Math.max(i, u.startedAt + e)), (s -= u.count));
      }
      return i;
    }
    ((l.createContactSaveRetryBudget = c),
      (l.isUsyncRateLimit = d),
      (l.createImportRateLimiter = m));
  },
  98,
);
