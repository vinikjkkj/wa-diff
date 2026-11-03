__d(
  "createReStoreTableNameAllowListPersistence",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r;
      return {
        clearCache: function () {
          (e.clearCache == null || e.clearCache(),
            t.clearCache == null || t.clearCache());
        },
        close: function () {
          (e.close == null || e.close(), t.close == null || t.close());
        },
        flush: async function (o, a) {
          var r = new Map(),
            i = new Map();
          (o.forEach(function (e, t) {
            n.has(t) ? i.set(t, e) : r.set(t, e);
          }),
            await Promise.all([e.flush(r, a), t.flush(i, a)]));
        },
        get: function (o, a, i, l) {
          return n.has(a) ? t.get(o, a, i, l) : e.get(o, a, i, l);
        },
        isClosed: function () {
          return (e.isClosed == null ? void 0 : e.isClosed()) || !1;
        },
        isPersistenceSupported: e.isPersistenceSupported,
        logError: function (o, a, i, l) {
          n.has(o)
            ? t.logError == null || t.logError(o, a, i, l)
            : e.logError == null || e.logError(o, a, i, l);
        },
        permitsSynchronousIO: function (o) {
          if (n.has(o)) {
            var r;
            return (r =
              t.permitsSynchronousIO == null
                ? void 0
                : t.permitsSynchronousIO(o)) != null
              ? r
              : !1;
          } else {
            var a;
            return (a =
              e.permitsSynchronousIO == null
                ? void 0
                : e.permitsSynchronousIO(o)) != null
              ? a
              : !1;
          }
        },
        runExclusively: function (r, o) {
          return e.runExclusively(function () {
            return new Promise(function (e, n) {
              var a = t.runExclusively(async function () {
                var t = await r(),
                  n = t[0],
                  o = t[1],
                  i = new Promise(function (t) {
                    e([
                      function () {
                        return (t(), a);
                      },
                      o,
                    ]);
                  });
                return [
                  async function () {
                    return (await i, n());
                  },
                  o,
                ];
              }, o);
              a.catch(n);
            });
          }, o);
        },
        shouldApplySync: function (o, a) {
          return n.has(a) ? t.shouldApplySync(o, a) : e.shouldApplySync(o, a);
        },
        shouldInline: function (o, a) {
          return n.has(o) ? t.shouldInline(o, a) : e.shouldInline(o, a);
        },
        shouldSync: function (o, a) {
          return n.has(a) ? t.shouldSync(o, a) : e.shouldSync(o, a);
        },
        tabTablesNotifier:
          (r = e.tabTablesNotifier) != null ? r : t.tabTablesNotifier,
        types: [].concat(e.types, t.types),
        uniqueId: t.uniqueId + e.uniqueId,
      };
    }
    i.default = e;
  },
  66,
);
