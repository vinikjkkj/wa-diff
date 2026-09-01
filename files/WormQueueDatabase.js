__d(
  "WormQueueDatabase",
  [
    "FBLogger",
    "Worm",
    "WormEar",
    "WormStoreRunner",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      n.attachStoreRunner(o("WormStoreRunner").makeWormStoreRunner(e, t));
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.blockingErrorThreshold,
            n = e.dbAlias,
            r = e.dbName,
            a = e.encKey,
            i = e.makeDriver,
            l = e.odsLogger,
            s = e.onBlockingError,
            u = e.qplEvent,
            d = e.schema,
            m = null,
            p = i({
              dbAlias: n,
              dbName: r,
              encKey: a,
              odsLogger: l,
              options: {
                blockingErrorThreshold: t,
                onBlockingError: s,
                onTransactionError: function (t) {
                  c(m, n, t);
                },
              },
              schema: d,
            }),
            _ = new (o("Worm").WormDatabase)(p, u);
          return ((m = _), yield _.init(), _);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n) {
      if (n instanceof o("WormEar").DecryptionError) {
        var a = n;
        (r("FBLogger")("wmi")
          .tags(["worm-persisted-queue"])
          .mustfix(
            "EAR decryption error in %s store %s. Dropping corrupted entity",
            t,
            String(a.store),
          ),
          e != null &&
            r("promiseDone")(
              e.runInTransaction(
                [a.store],
                "readwrite",
                function (e) {
                  var t = e.stores[a.store];
                  return a.maybeHashedPk != null
                    ? t.delete(a.maybeHashedPk)
                    : t.clear();
                },
                "delete-corrupted-entity",
              ),
            ));
      }
    }
    function d(e, t) {
      r("FBLogger")("wmi")
        .tags(["worm-persisted-queue"])
        .catching(r("getErrorSafe")(t))
        .mustfix("Error opening WORM persisted queue db %s", e);
    }
    ((l.bindWormPersistedQueue = e),
      (l.openWormQueueDatabase = s),
      (l.logWormQueueDbInitFailure = d));
  },
  98,
);
