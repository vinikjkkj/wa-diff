__d(
  "WAWebPersistedQueues",
  [
    "WALogger",
    "WAWebAddonDeletionQueue",
    "WAWebDbEncryptionKey",
    "WAWebKeyShareQueue",
    "WAWebNoop",
    "WAWebODS",
    "WAWebPersistedQueuesRegistry",
    "WAWebResendMsgQueue",
    "WAWebWormCallbacks",
    "WAWormQueue",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "persisted_queues",
      c = 10,
      d = null;
    function m() {
      return (d == null && (d = p()), d);
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForWormEarKey(),
            o("WAWebWormCallbacks").setupWAWebWormCallbacks());
          try {
            var t = yield o("WAWormQueue").openWAWormQueueDatabase({
              blockingErrorThreshold: c,
              dbAlias: o("WAWebPersistedQueuesRegistry")
                .PERSISTED_QUEUES_DB_ALIAS,
              dbName: u,
              encKey: o("WAWebDbEncryptionKey").DbEncKeyStore.getWormEarKey(),
              makeDriver: o("WAWormQueue").makeWAWormQueueEarSyncDriver,
              odsLogger: {
                log: function (n) {
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[persisted-queues] ",
                        "",
                      ])),
                    n,
                  ),
                    f(n));
                },
              },
              onBlockingError: function (t) {
                (r("WAWebODS").incr("web.persisted_queues.error.blocking"),
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[persisted-queues] unrecoverable: ",
                          "",
                        ])),
                      t,
                    )
                    .sendLogs("persisted-queues-unrecoverable"));
              },
              schema: o("WAWebPersistedQueuesRegistry").persistedQueueStores,
            });
            o("WAWebPersistedQueuesRegistry").bindPersistedQueues(t);
          } catch (e) {
            throw (
              o("WAWormQueue").logWAWormQueueDbInitFailure(
                o("WAWebPersistedQueuesRegistry").PERSISTED_QUEUES_DB_ALIAS,
                e,
              ),
              e
            );
          }
          (o("WAWebAddonDeletionQueue").startAddonDeletionQueueDrain(),
            o("WAWebKeyShareQueue").startKeyShareQueue(),
            o("WAWebResendMsgQueue").startResendQueues());
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = o("WAWebPersistedQueuesRegistry").PERSISTED_QUEUES_DB_ALIAS + ".",
        n = e.startsWith(t) ? e.slice(t.length) : e;
      e: {
        if (n === "error.db_stale") {
          r("WAWebODS").incr("web.persisted_queues.error.db_stale");
          break e;
        }
        if (n === "error.db_close") {
          r("WAWebODS").incr("web.persisted_queues.error.db_close");
          break e;
        }
        if (n === "error.large_idb_value") {
          r("WAWebODS").incr("web.persisted_queues.error.large_idb_value");
          break e;
        }
        {
          r("WAWebNoop")();
          break e;
        }
      }
    }
    ((l.requestKeyShareNow = o("WAWebKeyShareQueue").requestKeyShareNow),
      (l.runGroupMsgResendQueued = o(
        "WAWebResendMsgQueue",
      ).runGroupMsgResendQueued),
      (l.runUserMsgResendQueued = o(
        "WAWebResendMsgQueue",
      ).runUserMsgResendQueued),
      (l.ensurePersistedQueuesOpen = m));
  },
  98,
);
