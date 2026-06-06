__d(
  "WAWebDbUsageApiUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e != null && e !== 0 ? Math.round(e / 1e6).toString() : "0";
    }
    function l(e) {
      return new Promise(function (t, n) {
        ((e.onsuccess = function (e) {
          t(e.target.result);
        }),
          (e.onerror = function (e) {
            n(e.target.result);
          }));
      });
    }
    async function s(e) {
      var t,
        n = await l(e.open("__dbnames"));
      if ((t = n.objectStoreNames) != null && t.length) {
        var r = n.transaction(n.objectStoreNames, "readonly"),
          o = r.objectStore(r.objectStoreNames[0]),
          a = await l(o.getAll());
        return a;
      } else if (e.databases) return e.databases();
    }
    async function u(e, t) {
      var n = await l(e.open(t));
      return n;
    }
    function c(e, t) {
      return new Promise(function (n, r) {
        var o = e.openCursor(null, "prev");
        ((o.onsuccess = function (e) {
          var r = e.target.result;
          r && t(r.value) ? r.continue() : n();
        }),
          (o.onerror = function (e) {
            r(e.target.result);
          }));
      });
    }
    ((i.convertToMBToString = e),
      (i.promisifyRequest = l),
      (i.getAllDatabases = s),
      (i.getDatabase = u),
      (i.objectStoreIterator = c));
  },
  66,
);
