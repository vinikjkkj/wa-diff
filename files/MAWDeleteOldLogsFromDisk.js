__d(
  "MAWDeleteOldLogsFromDisk",
  [
    "Deferred",
    "MAWLogIndexedDb",
    "MAWSaveLogToDisk",
    "MAWTransactionMode",
    "WALogger",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = r("justknobx")._("1400"),
      m = r("justknobx")._("1401"),
      p = r("justknobx")._("1402"),
      _ = (u = o("MAWLogIndexedDb")).makeLogMsgrTransactor(
        "logs",
        (c = o("MAWTransactionMode")).READONLY,
      )(function (e) {
        var t = new (r("Deferred"))(),
          n = e(),
          o = n.count();
        return (
          (o.onsuccess = function (e) {
            var n = e.target.result;
            t.resolve(n);
          }),
          (o.onerror = function (e) {
            t.reject(e);
          }),
          t.getPromise()
        );
      }),
      f = u.makeLogMsgrTransactor(
        "logs",
        c.READONLY,
      )(function (e, t) {
        var n = new (r("Deferred"))(),
          o = e(),
          a = [],
          i = o.index("date"),
          l = i.openCursor();
        return (
          (l.onsuccess = function (e) {
            var r = e.target.result;
            if (r == null || !t(r.value, a)) {
              n.resolve(a);
              return;
            }
            (a.push(r.value.id), r.continue());
          }),
          (l.onerror = function (e) {
            n.reject(e);
          }),
          n.getPromise()
        );
      }),
      g = u.makeLogMsgrTransactor(
        "logs",
        c.READWRITE,
      )(function (e) {
        var t = new (r("Deferred"))(),
          n = e(),
          a = n.clear();
        return (
          (a.onsuccess = function () {
            return t.resolve();
          }),
          (a.onerror = function (e) {
            return t.reject(e);
          }),
          o("MAWSaveLogToDisk").clearLogEntryCache(),
          t.getPromise()
        );
      }),
      h = u.makeLogMsgrTransactor(
        "logs",
        c.READWRITE,
      )(function (e, t) {
        var n = new (r("Deferred"))(),
          o = e();
        return (
          t.forEach(function (e) {
            return o.delete(e);
          }),
          (o.transaction.oncomplete = function () {
            return n.resolve();
          }),
          (o.transaction.onerror = function (e) {
            return n.reject(e);
          }),
          n.getPromise()
        );
      });
    function y(e, t) {
      var n = Date.now() - p;
      return e != null && e.date <= n;
    }
    function C(e) {
      return function (t, n) {
        return n.length < e;
      };
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield _();
            if (t === 0) return;
            var n = t - m;
            if (n > 0) {
              var r = yield f(C(n));
              yield h(r);
              return;
            }
            var a = yield f(y);
            a.length > 0 && (yield h(a));
          } catch (t) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to delete old logs: ",
                  "",
                ])),
              t,
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield _();
            if (e === 0) return;
            if (e >= d) {
              yield g();
              return;
            }
          } catch (e) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to delete old logs: ",
                  "",
                ])),
              e,
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    ((l.clearLogs = g), (l.deleteOldLogs = b), (l.deleteOldLogsOnStartup = S));
  },
  98,
);
