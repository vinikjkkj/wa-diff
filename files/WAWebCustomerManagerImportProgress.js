__d(
  "WAWebCustomerManagerImportProgress",
  ["WATimeUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        activeCount: 0,
        estimatedRemainingSeconds: null,
        failureCount: 0,
        phase: "queued",
        processedCount: 0,
        queuedCount: e,
        successCount: 0,
        totalCount: e,
      };
    }
    function s(e, t, n, r) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = e.reduce(function (e, n) {
              var r;
              return e + ((r = t.get(n.rowIndex)) != null ? r : 1);
            }, 0);
            yield n.startBatch(e.length, o);
            var a;
            try {
              a = yield r();
            } catch (t) {
              throw (n.finishBatch(e.length, 0, o), t);
            }
            var i = e.reduce(function (e, n, r) {
              var o;
              return (
                e +
                (a[r].status === "rejected"
                  ? (o = t.get(n.rowIndex)) != null
                    ? o
                    : 1
                  : 0)
              );
            }, 0);
            return (n.finishBatch(e.length, o - i, i), a);
          },
        )),
        u.apply(this, arguments)
      );
    }
    function c(t, r, a, i) {
      var l = o("WATimeUtils").monotonicTime(),
        s =
          i != null
            ? i
            : function () {
                return o("WATimeUtils").monotonicTimeSince(l);
              },
        u = e(t),
        c = 0,
        d = 0,
        m = 0,
        p = 0,
        _ = 0;
      function f() {
        ((u = babelHelpers.extends({}, u, { estimatedRemainingSeconds: g() })),
          a == null || a(u));
      }
      function g() {
        if (c === 0 && m === 0) return 0;
        if (d === 0) return null;
        var e = _ / d;
        return Math.ceil((m * e + r.estimateRemainingMs(c, 50, e)) / 1e3);
      }
      function h(e, n) {
        c = e;
        var r = t - n;
        ((u = babelHelpers.extends({}, u, {
          failureCount: r,
          phase: "queued",
          processedCount: r,
          queuedCount: n,
        })),
          f());
      }
      function y(e, t) {
        return C.apply(this, arguments);
      }
      function C() {
        return (
          (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
            ((u = babelHelpers.extends({}, u, { phase: "queued" })),
              f(),
              yield r.waitForBatch(e),
              (c -= e),
              (m = e),
              (p = s()),
              (u = babelHelpers.extends({}, u, {
                activeCount: t,
                phase: "saving",
                queuedCount: u.queuedCount - t,
              })),
              f());
          })),
          C.apply(this, arguments)
        );
      }
      function b(e, t, n) {
        ((_ += Math.max(0, s() - p)),
          (d += e),
          (m = 0),
          (u = babelHelpers.extends({}, u, {
            activeCount: 0,
            failureCount: u.failureCount + n,
            phase: "queued",
            processedCount: u.processedCount + t + n,
            successCount: u.successCount + t,
          })),
          f());
      }
      return (
        a == null || a(u),
        {
          beginChecking: function () {
            ((u = babelHelpers.extends({}, u, { phase: "checking" })),
              a == null || a(u));
          },
          finishBatch: b,
          ready: h,
          startBatch: y,
          stopBeforeSave: function () {
            return h(0, 0);
          },
        }
      );
    }
    ((l.initialImportProgress = e),
      (l.runImportBatch = s),
      (l.createImportProgressReporter = c));
  },
  98,
);
