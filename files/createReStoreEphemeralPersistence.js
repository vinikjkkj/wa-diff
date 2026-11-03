__d(
  "createReStoreEphemeralPersistence",
  ["FBLogger", "ReStorePersistence"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var r = e.get(t);
      if (r !== void 0) return r;
      var o = n();
      return (e.set(t, o), o);
    }
    function s(t, n) {
      var a = Promise.resolve(),
        i = new Map();
      function l(t) {
        return e(i, t, function () {
          return new Map();
        });
      }
      return {
        flush: function (t) {
          return (
            t.forEach(function (e, t) {
              var n = l(t);
              e.forEach(function (e, t) {
                o("ReStorePersistence").isDeletedValue(e)
                  ? n.delete(t)
                  : n.set(t, e);
              });
            }),
            Promise.resolve()
          );
        },
        get: function (t, n, r) {
          var e = l(n);
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
        runExclusively: function (t) {
          var e = n == null ? void 0 : n.startTracking(!1);
          return (
            e == null ||
              e.addAnnotations({
                string: {
                  source: "createReStoreEphemeralPersistence",
                  type: "runExclusivelyPromiseChain",
                },
              }),
            new Promise(function (n, r) {
              a = a
                .then(async function () {
                  var o = await t(),
                    a = o[0],
                    i = o[1];
                  try {
                    (n(await a()), e == null || e.end());
                  } catch (t) {
                    (r(t), e == null || e.fail());
                  }
                })
                .catch(function (e) {
                  r(e);
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
    l.default = s;
  },
  98,
);
