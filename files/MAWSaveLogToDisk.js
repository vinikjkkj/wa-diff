__d(
  "MAWSaveLogToDisk",
  [
    "Deferred",
    "MAWLogIndexedDb",
    "MAWTransactionMode",
    "justknobx",
    "pageID",
    "promiseDone",
    "throttle",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("justknobx")._("1403"),
      s = r("justknobx")._("1404"),
      u = r("justknobx")._("1401");
    function c(e) {
      if (Number.isInteger(e)) return e;
      if (typeof e == "string") return (e || "").replace(/\n/g, "");
      try {
        return JSON.stringify(e);
      } catch (e) {
        return "Data could not be serialized";
      }
    }
    function d(e, t) {
      return (
        t === void 0 && (t = ""),
        e.length > 0 ? "[" + e.join("|") + "]" : t
      );
    }
    function m(e) {
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
    function p(e) {
      return {
        args: e.logString,
        date: e.date,
        event: d(e.tags, "[]"),
        level: m(e.logLevel),
      };
    }
    function _(e, t, n, r, o, a) {
      return {
        args: e + "; ERROR=" + n.message + ";",
        data: { entriesToReport: o, error: n, framesToPop: r, stack: a },
        date: Date.now(),
        event: d(t, "[]"),
        level: "error",
      };
    }
    var f = [],
      g = [],
      h = 5,
      y = 0,
      C = !1,
      b = function () {
        f.length = 0;
      },
      v = function (t) {
        var e = k(t);
        (g.length < h ? g.push(e) : (g[y % h] = e), (y = (y + 1) % h));
      },
      S = function (t) {
        for (var e = [], n = 0; n < t; ) {
          var r = (((y - n - 1) % h) + h) % h,
            o = g[r];
          (e.push(o), n++);
        }
        return Promise.resolve(e);
      },
      R = function (n, o) {
        (f.push({ context: n, logEntry: o }),
          v({ context: n, logEntry: o }),
          f.length > e ? r("promiseDone")(L()) : E());
      },
      L = async function () {
        C = !0;
        try {
          var e = [].concat(f);
          (b(), await I(e));
        } catch (e) {}
        C = !1;
      },
      E = r("throttle")(async function () {
        if (!C) {
          C = !0;
          try {
            var e = [].concat(f);
            (b(), await I(e));
          } catch (e) {}
          C = !1;
        }
      }, s),
      k = function (t) {
        var e = t.context,
          n = t.logEntry;
        return Object.entries(n).reduce(
          function (e, t) {
            var n = t[0],
              r = t[1];
            return ((e[n] = c(r)), e);
          },
          babelHelpers.extends({}, n, { category: e + "-" + r("pageID") }),
        );
      },
      I = o("MAWLogIndexedDb").makeLogMsgrTransactor(
        "logs",
        o("MAWTransactionMode").READWRITE,
      )(function (e, t) {
        var n = new (r("Deferred"))(),
          o = e();
        return (
          t.forEach(function (e) {
            o.add(k(e));
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
      T = o("MAWLogIndexedDb").makeLogMsgrTransactor(
        "logs",
        o("MAWTransactionMode").READONLY,
      )(function (e) {
        var t = new (r("Deferred"))(),
          n = e(),
          o = n.getAll();
        return (
          (o.onsuccess = function () {
            var e = o.result,
              n = e.slice(Math.max(0, e.length - u));
            t.resolve(n);
          }),
          (o.onerror = function (e) {
            return t.reject(e);
          }),
          t.getPromise()
        );
      }),
      D = function () {
        return T().catch(function (e) {
          return [];
        });
      },
      x = function (t) {
        var e = t <= g.length ? S(t) : $(t);
        return e.catch(function (e) {
          return [];
        });
      },
      $ = o("MAWLogIndexedDb").makeLogMsgrTransactor(
        "logs",
        o("MAWTransactionMode").READONLY,
      )(function (e, t) {
        var n = new (r("Deferred"))(),
          o = e(),
          a = o.index("date"),
          i = a.openCursor(null, "prev"),
          l = [];
        return (
          (i.onsuccess = function () {
            var e = i.result;
            if (e == null) {
              n.resolve(l);
              return;
            }
            if ((l.push(e.value), l.length >= t)) {
              n.resolve(l);
              return;
            }
            e.continue();
          }),
          (i.onerror = function (e) {
            return n.reject(e);
          }),
          n.getPromise()
        );
      });
    ((l.joinTags = d),
      (l.formatLog = p),
      (l.formatErrorForLogging = _),
      (l.clearLogEntryCache = b),
      (l.saveLogEntry = R),
      (l.forceCachedLogEntryPersist = L),
      (l.getEntriesFromDb = D),
      (l.getLastNEntries = x));
  },
  98,
);
