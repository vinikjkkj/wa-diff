__d(
  "WAWebCustomerManagerImportProgress",
  ["WATimeUtils"],
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
    async function s(e, t, n, r) {
      var o = e.reduce(function (e, n) {
        var r;
        return e + ((r = t.get(n.rowIndex)) != null ? r : 1);
      }, 0);
      await n.startBatch(e.length, o);
      var a;
      try {
        a = await r();
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
    }
    function u(e, t, n, r) {
      var o = e.reduce(function (e, n) {
        var r;
        return e + ((r = t.get(n.rowIndex)) != null ? r : 1);
      }, 0);
      return (
        n.skipBatch(e.length, o),
        e.map(function () {
          return { status: "rejected", reason: r };
        })
      );
    }
    function c(t, n, r, a) {
      var i = o("WATimeUtils").monotonicTime(),
        l =
          a != null
            ? a
            : function () {
                return o("WATimeUtils").monotonicTimeSince(i);
              },
        s = e(t),
        u = 0,
        c = 0,
        d = 0,
        m = 0,
        p = 0;
      function _() {
        ((s = babelHelpers.extends({}, s, { estimatedRemainingSeconds: f() })),
          r == null || r(s));
      }
      function f() {
        if (u === 0 && d === 0) return 0;
        if (c === 0) return null;
        var e = p / c;
        return Math.ceil((d * e + n.estimateRemainingMs(u, 50, e)) / 1e3);
      }
      function g(e, n) {
        u = e;
        var r = t - n;
        ((s = babelHelpers.extends({}, s, {
          failureCount: r,
          phase: "queued",
          processedCount: r,
          queuedCount: n,
        })),
          _());
      }
      async function h(e, t) {
        ((s = babelHelpers.extends({}, s, { phase: "queued" })),
          _(),
          await n.waitForBatch(e),
          (u -= e),
          (d = e),
          (m = l()),
          (s = babelHelpers.extends({}, s, {
            activeCount: t,
            phase: "saving",
            queuedCount: s.queuedCount - t,
          })),
          _());
      }
      function y(e, t) {
        ((u -= e),
          (s = babelHelpers.extends({}, s, {
            failureCount: s.failureCount + t,
            processedCount: s.processedCount + t,
            queuedCount: s.queuedCount - t,
          })),
          _());
      }
      function C(e, t, n) {
        ((p += Math.max(0, l() - m)),
          (c += e),
          (d = 0),
          (s = babelHelpers.extends({}, s, {
            activeCount: 0,
            failureCount: s.failureCount + n,
            phase: "queued",
            processedCount: s.processedCount + t + n,
            successCount: s.successCount + t,
          })),
          _());
      }
      return (
        r == null || r(s),
        {
          beginChecking: function () {
            ((s = babelHelpers.extends({}, s, { phase: "checking" })),
              r == null || r(s));
          },
          finishBatch: C,
          ready: g,
          skipBatch: y,
          startBatch: h,
          stopBeforeSave: function () {
            return g(0, 0);
          },
        }
      );
    }
    ((l.initialImportProgress = e),
      (l.runImportBatch = s),
      (l.failImportBatch = u),
      (l.createImportProgressReporter = c));
  },
  98,
);
