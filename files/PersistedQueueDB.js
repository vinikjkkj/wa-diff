__d(
  "PersistedQueueDB",
  [
    "FBLogger",
    "PersistedQueuesSchema",
    "WAResolvable",
    "WormEarAsync",
    "err",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (o("WAResolvable").Resolvable)();
    async function u(t) {
      var n = t.blockingErrorThreshold,
        a = t.dbName,
        i = t.onBlockingError,
        l = t.qplEvent,
        u = t.strEncKey;
      try {
        var c = o("PersistedQueuesSchema").makePersistedQueueSchema(
          a,
          u,
          n,
          i,
          function (t) {
            if (t instanceof o("WormEarAsync").DecryptionError) {
              var n,
                a,
                i = t;
              (r("FBLogger")("messenger_web").mustfix(
                "EAR decryption error in store: %s. Dropping corrupted entity",
                i.store,
              ),
                r("promiseDone")(
                  (n =
                    (a = e) == null
                      ? void 0
                      : a.runInTransaction(
                          [i.store],
                          "readwrite",
                          function (e) {
                            var t = e.stores[i.store];
                            return i.maybeHashedPk != null
                              ? t.delete(i.maybeHashedPk)
                              : t.clear();
                          },
                          "delete-corrupted-entity",
                        )) != null
                    ? n
                    : Promise.resolve(),
                ));
            }
          },
          l,
        );
        return ((e = c), await c.init(), s.resolve(c), c);
      } catch (e) {
        throw (
          r("FBLogger")("messenger_web")
            .catching(r("getErrorSafe")(e))
            .mustfix("Error performing PersistedQueue init"),
          e
        );
      }
    }
    function c() {
      if (e == null) throw r("err")("PersistedQueue is not initialized");
      return e;
    }
    ((l.makePersistedQueues = u), (l.getPersistedQueues = c));
  },
  98,
);
