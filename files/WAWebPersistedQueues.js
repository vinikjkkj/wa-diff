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
    "WAWormQueue",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "persisted_queues",
      d = 10,
      m = null;
    function p() {
      return (m == null && (m = _()), m);
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForWormEarKey(),
            o("WAWormQueue").setWAWormCallbacks({
              onEARInitError: function () {
                (r("WAWebODS").incr("web.persisted_queues.error.ear_init"),
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[persisted-queues] at-rest keychain failed to initialise; stored rows are unreadable",
                        ])),
                    )
                    .tags("messaging")
                    .sendLogs("persisted-queues-ear-init-failed"));
              },
            }));
          try {
            var t = yield o("WAWormQueue").openWAWormQueueDatabase({
              blockingErrorThreshold: d,
              dbAlias: o("WAWebPersistedQueuesRegistry")
                .PERSISTED_QUEUES_DB_ALIAS,
              dbName: c,
              encKey: o("WAWebDbEncryptionKey").DbEncKeyStore.getWormEarKey(),
              makeDriver: o("WAWormQueue").makeWAWormQueueEarSyncDriver,
              odsLogger: {
                log: function (t) {
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[persisted-queues] ",
                        "",
                      ])),
                    t,
                  ),
                    g(t));
                },
              },
              onBlockingError: function (t) {
                (r("WAWebODS").incr("web.persisted_queues.error.blocking"),
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
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
        f.apply(this, arguments)
      );
    }
    function g(e) {
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
      (l.ensurePersistedQueuesOpen = p));
  },
  98,
);
