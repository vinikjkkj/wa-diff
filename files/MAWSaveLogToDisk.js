__d(
  "MAWSaveLogToDisk",
  [
    "Deferred",
    "MAWLogIndexedDb",
    "MAWTransactionMode",
    "Promise",
    "asyncToGeneratorRuntime",
    "justknobx",
    "pageID",
    "promiseDone",
    "throttle",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("justknobx")._("1403"),
      u = r("justknobx")._("1404"),
      c = r("justknobx")._("1401");
    function d(e) {
      if (Number.isInteger(e)) return e;
      if (typeof e == "string") return (e || "").replace(/\n/g, "");
      try {
        return JSON.stringify(e);
      } catch (e) {
        return "Data could not be serialized";
      }
    }
    function m(e, t) {
      return (
        t === void 0 && (t = ""),
        e.length > 0 ? "[" + e.join("|") + "]" : t
      );
    }
    function p(e) {
      switch (e) {
        case "logRestricted":
          return "warn";
        case "count":
          return "log";
        case "debug":
        case "log":
        case "warn":
        case "error":
          return e;
      }
    }
    function _(e) {
      return {
        args: e.logString,
        date: e.date,
        event: m(e.tags, "[]"),
        level: p(e.logLevel),
      };
    }
    function f(e, t, n, r, o, a) {
      return {
        args: e + "; ERROR=" + n.message + ";",
        data: { entriesToReport: o, error: n, framesToPop: r, stack: a },
        date: Date.now(),
        event: m(t, "[]"),
        level: "error",
      };
    }
    var g = [],
      h = [],
      y = 5,
      C = 0,
      b = !1,
      v = function () {
        g.length = 0;
      },
      S = function (t) {
        var e = I(t);
        (h.length < y ? h.push(e) : (h[C % y] = e), (C = (C + 1) % y));
      },
      R = function (r) {
        for (var t = [], o = 0; o < r; ) {
          var a = (((C - o - 1) % y) + y) % y,
            i = h[a];
          (t.push(i), o++);
        }
        return (e || (e = n("Promise"))).resolve(t);
      },
      L = function (t, n) {
        (g.push({ context: t, logEntry: n }),
          S({ context: t, logEntry: n }),
          g.length > s ? r("promiseDone")(E()) : k());
      },
      E = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          b = !0;
          try {
            var e = [].concat(g);
            (v(), yield T(e));
          } catch (e) {}
          b = !1;
        });
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      k = r("throttle")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!b) {
            b = !0;
            try {
              var e = [].concat(g);
              (v(), yield T(e));
            } catch (e) {}
            b = !1;
          }
        }),
        u,
      ),
      I = function (t) {
        var e = t.context,
          n = t.logEntry;
        return Object.entries(n).reduce(
          function (e, t) {
            var n = t[0],
              r = t[1];
            return ((e[n] = d(r)), e);
          },
          babelHelpers.extends({}, n, { category: e + "-" + r("pageID") }),
        );
      },
      T = o("MAWLogIndexedDb").makeLogMsgrTransactor(
        "logs",
        o("MAWTransactionMode").READWRITE,
      )(function (e, t) {
        var n = new (r("Deferred"))(),
          o = e();
        return (
          t.forEach(function (e) {
            o.add(I(e));
          }),
          (o.transaction.oncomplete = function () {
            return n.resolve();
          }),
          (o.transaction.onerror = function (e) {
            return n.reject(e);
          }),
          n.getPromise()
        );
      }),
      D = o("MAWLogIndexedDb").makeLogMsgrTransactor(
        "logs",
        o("MAWTransactionMode").READONLY,
      )(function (e) {
        var t = new (r("Deferred"))(),
          n = e(),
          o = n.getAll();
        return (
          (o.onsuccess = function (e) {
            var n = e.target.result,
              r = n.slice(Math.max(0, n.length - c));
            t.resolve(r);
          }),
          (o.onerror = function (e) {
            return t.reject(e);
          }),
          t.getPromise()
        );
      }),
      x = function () {
        return D().catch(function (e) {
          return [];
        });
      },
      $ = function (t) {
        var e = t <= h.length ? R(t) : P(t);
        return e.catch(function (e) {
          return [];
        });
      },
      P = o("MAWLogIndexedDb").makeLogMsgrTransactor(
        "logs",
        o("MAWTransactionMode").READONLY,
      )(function (e, t) {
        var n = new (r("Deferred"))(),
          o = e(),
          a = o.index("date"),
          i = a.openCursor(null, "prev"),
          l = [];
        return (
          (i.onsuccess = function (e) {
            var r = e.target.result;
            if (r == null) {
              n.resolve(l);
              return;
            }
            if ((l.push(r.value), l.length >= t)) {
              n.resolve(l);
              return;
            }
            r.continue();
          }),
          (i.onerror = function (e) {
            return n.reject(e);
          }),
          n.getPromise()
        );
      });
    ((l.joinTags = m),
      (l.formatLog = _),
      (l.formatErrorForLogging = f),
      (l.clearLogEntryCache = v),
      (l.saveLogEntry = L),
      (l.forceCachedLogEntryPersist = E),
      (l.getEntriesFromDb = x),
      (l.getLastNEntries = $));
  },
  98,
);
