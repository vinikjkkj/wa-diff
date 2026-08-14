__d(
  "createReStoreEphemeralPersistence",
  ["FBLogger", "Promise", "ReStorePersistence", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n) {
      var r = e.get(t);
      if (r !== void 0) return r;
      var o = n();
      return (e.set(t, o), o);
    }
    function u(t, a) {
      var i = (e || (e = n("Promise"))).resolve(),
        l = new Map();
      function u(e) {
        return s(l, e, function () {
          return new Map();
        });
      }
      return {
        flush: function (r) {
          return (
            r.forEach(function (e, t) {
              var n = u(t);
              e.forEach(function (e, t) {
                o("ReStorePersistence").isDeletedValue(e)
                  ? n.delete(t)
                  : n.set(t, e);
              });
            }),
            (e || (e = n("Promise"))).resolve()
          );
        },
        get: function (t, n, r) {
          var e = u(n);
          return e.get(r);
        },
        logError: function (t, n, o, a) {
          if (o === "dbCorruption") {
            var e, i;
            throw r("FBLogger")("messenger_web").mustfixThrow(
              "Got unexpected undefined in edb, mode: %s, table: %s, id: %s, deletedInThisTxn: %s",
              n,
              t,
              (e = a == null ? void 0 : a.id) != null ? e : "",
              (i = a == null ? void 0 : a.deletedInThisTxn) != null ? i : "",
            );
          }
        },
        permitsSynchronousIO: function (t) {
          return !0;
        },
        queueCommitWork: void 0,
        runExclusively: function (r) {
          var t = a == null ? void 0 : a.startTracking(!1);
          return (
            t == null ||
              t.addAnnotations({
                string: {
                  source: "createReStoreEphemeralPersistence",
                  type: "runExclusivelyPromiseChain",
                },
              }),
            new (e || (e = n("Promise")))(function (e, o) {
              i = i
                .then(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    var n = yield r(),
                      a = n[0],
                      i = n[1];
                    try {
                      (e(yield a()), t == null || t.end());
                    } catch (e) {
                      (o(e), t == null || t.fail());
                    }
                  }),
                )
                .catch(function (e) {
                  o(e);
                });
            })
          );
        },
        shouldApplySync: function () {
          return !1;
        },
        shouldInline: function (t, n) {
          return !0;
        },
        shouldSync: function () {
          return !1;
        },
        types: ["ephemeral"],
        uniqueId: t,
      };
    }
    l.default = u;
  },
  98,
);
