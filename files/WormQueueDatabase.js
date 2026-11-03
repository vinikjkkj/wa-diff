__d(
  "WormQueueDatabase",
  [
    "FBLogger",
    "QPLFlow",
    "Worm",
    "WormEar",
    "WormStoreRunner",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      n.attachStoreRunner(o("WormStoreRunner").makeWormStoreRunner(e, t));
    }
    async function s(e) {
      var t = e.blockingErrorThreshold,
        n = e.dbAlias,
        a = e.dbName,
        i = e.encKey,
        l = e.makeDriver,
        s = e.odsLogger,
        c = e.onBlockingError,
        d = e.qplEvent,
        m = e.schema,
        p =
          d != null
            ? o("QPLFlow").startQPLFlow(d, {
                annotations: {
                  string: {
                    dbAlias: n,
                    operationType: "openWormQueueDatabase",
                  },
                },
                timeoutInMs: o("Worm").OP_TIMEOUT_MS,
              })
            : null,
        _ = null;
      try {
        p == null || p.addPoint("making_driver_start");
        var f = l({
          dbAlias: n,
          dbName: a,
          encKey: i,
          odsLogger: s,
          options: {
            blockingErrorThreshold: t,
            onBlockingError: c,
            onTransactionError: function (t) {
              u(_, n, t);
            },
          },
          schema: m,
        });
        (p == null || p.addPoint("making_driver_end"),
          p == null || p.addPoint("worm_init_start"),
          (_ = new (o("Worm").WormDatabase)(f, d)),
          await _.init({ eventFlow: p }),
          p == null || p.addPoint("worm_init_end"),
          p == null || p.endSuccess());
      } catch (e) {
        throw (
          p == null ||
            p.endFail("error", {
              string: { error_name: r("getErrorSafe")(e).name },
            }),
          e
        );
      }
      return _;
    }
    function u(e, t, n) {
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
    function c(e, t) {
      r("FBLogger")("wmi")
        .tags(["worm-persisted-queue"])
        .catching(r("getErrorSafe")(t))
        .mustfix("Error opening WORM persisted queue db %s", e);
    }
    ((l.bindWormPersistedQueue = e),
      (l.openWormQueueDatabase = s),
      (l.logWormQueueDbInitFailure = c));
  },
  98,
);
