__d(
  "WAWebCustomerManagerImportRateLimiter",
  [
    "invariant",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebBackendErrors",
    "asyncToGeneratorRuntime",
  ],
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
    function m(t, r) {
      var a, i;
      (r === void 0 && (r = {}),
        (Number.isInteger(t) && t > 0) || s(0, 185772));
      var l = o("WATimeUtils").monotonicTime(),
        u =
          (a = r.now) != null
            ? a
            : function () {
                return o("WATimeUtils").monotonicTimeSince(l);
              },
        c = (i = r.delay) != null ? i : o("WAPromiseDelays").delayMs,
        d = e / t,
        m = t,
        _ = [],
        f = 0;
      function g(e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (
          (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
            (Number.isInteger(n) && n > 0 && n <= m) || s(0, 185773);
            var r = u(),
              o = p(_, r, f, n, t);
            if (o > r) return (yield c(Math.ceil(o - r)), g(n));
            ((_ = _.filter(function (t) {
              return t.startedAt > r - e;
            })),
              _.push({ count: n, startedAt: r }),
              (f = r + n * d));
          })),
          h.apply(this, arguments)
        );
      }
      function y(n, r, o) {
        if (((Number.isInteger(r) && r > 0) || s(0, 192685), n === 0)) return 0;
        var a = u(),
          i = Math.min(r, m),
          l = p(_, a, f, Math.min(i, n), t),
          c = n % i || i,
          d = e / (Math.floor(t / i) * i);
        return l - a + (n - c) * Math.max(d, o) + c * o;
      }
      return {
        batchSize: function (t) {
          return Math.min(t, m);
        },
        estimateRemainingMs: y,
        waitForBatch: g,
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
