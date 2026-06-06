__d(
  "WAWebDbUsageApiUtils",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e;
    function l(e) {
      return e != null && e !== 0 ? Math.round(e / 1e6).toString() : "0";
    }
    function s(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        ((t.onsuccess = function (t) {
          e(t.target.result);
        }),
          (t.onerror = function (e) {
            n(e.target.result);
          }));
      });
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield s(e.open("__dbnames"));
          if ((t = n.objectStoreNames) != null && t.length) {
            var r = n.transaction(n.objectStoreNames, "readonly"),
              o = r.objectStore(r.objectStoreNames[0]),
              a = yield s(o.getAll());
            return a;
          } else if (e.databases) return e.databases();
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield s(e.open(t));
          return n;
        })),
        m.apply(this, arguments)
      );
    }
    function p(t, r) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var o = t.openCursor(null, "prev");
        ((o.onsuccess = function (t) {
          var n = t.target.result;
          n && r(n.value) ? n.continue() : e();
        }),
          (o.onerror = function (e) {
            n(e.target.result);
          }));
      });
    }
    ((i.convertToMBToString = l),
      (i.promisifyRequest = s),
      (i.getAllDatabases = u),
      (i.getDatabase = d),
      (i.objectStoreIterator = p));
  },
  66,
);
