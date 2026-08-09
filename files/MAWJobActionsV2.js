__d(
  "MAWJobActionsV2",
  [
    "MAWTransactionMode",
    "Promise",
    "WALRUMap",
    "WARandomHex",
    "WATimeUtils",
    "emptyFunction",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        ((t.onsuccess = e), (t.onerror = n));
      });
    }
    function u(e) {
      return s(e).then(function (e) {
        return e.target.result;
      });
    }
    function c(t, r, a) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var i = t(o("MAWTransactionMode").READONLY).index(r),
          l = i.openCursor(IDBKeyRange.only(a)),
          s = [];
        ((l.onsuccess = function (t) {
          var n = t.target.result;
          if (!n) {
            e(s);
            return;
          }
          (s.push(n.value), n.continue());
        }),
          (l.onerror = function (e) {
            return n(e);
          }));
      });
    }
    var d = new (o("WALRUMap").LRUMap)({ max: 100 });
    function m(t, r) {
      var a = r.args,
        i = r.scheduleConfig,
        l = r.type,
        s = r.uniqKey,
        d = r.version,
        m = d === void 0 ? 1 : d,
        _ = r.waitUntil,
        f = JSON.stringify([l, s != null ? s : o("WARandomHex").randomHex(32)]),
        g = {
          backedOffCount: 0,
          current: a,
          original: a,
          scheduleConfig: i,
          startTime: o("WATimeUtils").unixTime(),
          step: "$unstarted",
          stepFirstStartTime: null,
          stepHardStartCountAfterTimeout: 0,
          stepUnexpectedErrorCount: 0,
          type: l,
          uniqKey: f,
          version: m,
          waitUntil: _ != null ? _ : null,
        },
        h = function () {
          var e,
            n = t().add(g),
            r = u(n);
          if (
            g.uniqKey == null &&
            typeof ((e = n.transaction) == null ? void 0 : e.commit) ==
              "function"
          )
            try {
              n.transaction.commit();
            } catch (e) {}
          return r.then(function (e) {
            return { id: e, newlyCreated: !0 };
          });
        };
      return s != null
        ? c(t, "uniqKey", f).then(function (r) {
            if (r.length === 0) return h();
            var o = [],
              a = null;
            return (
              r.forEach(function (e) {
                e.step !== "$finished" ? (a = e) : o.push(p(t, e.jobId));
              }),
              (e || (e = n("Promise"))).all(o).then(function () {
                return a != null ? { id: a.jobId, newlyCreated: !1 } : h();
              })
            );
          })
        : h();
    }
    function p(e, t) {
      return u(e().delete(t));
    }
    function _(e, t) {
      return u(e().get(t));
    }
    function f(e, t) {
      return u(e().put(t));
    }
    function g(e) {
      return u(e().getAll());
    }
    function h(t) {
      try {
        return s(t().clear()).then(r("emptyFunction"));
      } catch (t) {
        var o = r("getErrorSafe")(t);
        if (o.name === "NotFoundError")
          return (e || (e = n("Promise"))).resolve();
        throw o;
      }
    }
    ((l.recentFinishedJobsCache = d),
      (l.maybeCreateJob = m),
      (l.deletePersistedJob = p),
      (l.readPersistedJob = _),
      (l.updatePersistedJob = f),
      (l.readAllPersistedJobs = g),
      (l.clearJobs = h));
  },
  98,
);
