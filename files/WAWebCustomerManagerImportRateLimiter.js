__d(
  "WAWebCustomerManagerImportRateLimiter",
  ["invariant", "WAPromiseDelays", "WATimeUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l, s) {
    var e = 6e4;
    function u(t, r) {
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
        d = (i = r.delay) != null ? i : o("WAPromiseDelays").delayMs,
        m = e / t,
        p = Math.max(1, Math.floor(t / 60)),
        _ = [],
        f = 0;
      function g(e) {
        return h.apply(this, arguments);
      }
      function h() {
        return (
          (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
            (Number.isInteger(n) && n > 0 && n <= p) || s(0, 185773);
            var r = u(),
              o = c(_, r, f, n, t);
            if (o > r) return (yield d(Math.ceil(o - r)), g(n));
            ((_ = _.filter(function (t) {
              return t.startedAt > r - e;
            })),
              _.push({ count: n, startedAt: r }),
              (f = r + n * m));
          })),
          h.apply(this, arguments)
        );
      }
      function y(e, n, r) {
        if (e === 0) return 0;
        var o = u(),
          a = Math.min(n, p),
          i = c(_, o, f, Math.min(a, e), t),
          l = e % a || a;
        return i - o + (e - l) * Math.max(m, r) + l * r;
      }
      return {
        batchSize: function (t) {
          return Math.min(t, p);
        },
        estimateRemainingMs: y,
        waitForBatch: g,
      };
    }
    function c(t, n, r, o, a) {
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
    l.createImportRateLimiter = u;
  },
  98,
);
