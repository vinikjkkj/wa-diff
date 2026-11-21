__d(
  "WAWebPersistedQueues",
  [
    "WALogger",
    "WAWebAddonDeletionQueue",
    "WAWebBackendEventBus",
    "WAWebDbEncryptionKey",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebIndexedDB",
    "WAWebJobsMigrationGating",
    "WAWebKeyShareQueue",
    "WAWebMetaAiThreadServerDeleteQueue",
    "WAWebNoop",
    "WAWebODS",
    "WAWebPersistedQueuesRegistry",
    "WAWebResendMsgQueue",
    "WAWebWormCallbacks",
    "WAWormQueue",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "persisted_queues",
      d = 10,
      m = null;
    function p(e) {
      if (m != null) return m;
      var t = g().then(function (t) {
        t && _(e);
      });
      return (
        (m = t),
        t.catch(function () {
          m === t && (m = null);
        }),
        t
      );
    }
    function _(e) {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
        if (
          e ||
          o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
        ) {
          f();
          return;
        }
        o("WAWebEventsWaitForOfflineDeliveryEnd")
          .waitForOfflineDeliveryEnd({ ignoreInit: !0 })
          .finally(f);
      }
    }
    function f() {
      (o("WAWebAddonDeletionQueue").startAddonDeletionQueueDrain(),
        o("WAWebKeyShareQueue").startKeyShareQueue(),
        o(
          "WAWebMetaAiThreadServerDeleteQueue",
        ).startMetaAiThreadServerDeleteQueue(),
        o("WAWebResendMsgQueue").startResendQueues());
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield y();
          return t == null
            ? (r("WAWebODS").incr("web.persisted_queues.error.unpersisted"), !1)
            : (o("WAWebPersistedQueuesRegistry").bindPersistedQueues(t),
              yield o("WAWebPersistedQueuesRegistry")
                .recordNewestStoredQueueIds()
                .catch(function (t) {
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[persisted-queues] reading the newest rows failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t))
                    .tags("messaging")
                    .sendLogs("persisted-queues-newest-rows-read-failed", {
                      sampling: 0.01,
                    });
                }),
              !0);
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (r("WAWebIndexedDB") == null) return null;
          try {
            return (
              yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForWormEarKey(),
              o("WAWebWormCallbacks").setupWAWebWormCallbacks(),
              yield o("WAWormQueue").openWAWormQueueDatabase({
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
                      b(t));
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
                qplEvent: r("qpl")._(891432473, "3638"),
                schema: o("WAWebPersistedQueuesRegistry").persistedQueueStores,
              })
            );
          } catch (e) {
            return (
              o("WAWormQueue").logWAWormQueueDbInitFailure(
                o("WAWebPersistedQueuesRegistry").PERSISTED_QUEUES_DB_ALIAS,
                e,
              ),
              null
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
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
    ((l.recordAddonDeletions = o(
      "WAWebAddonDeletionQueue",
    ).recordAddonDeletions),
      (l.requestKeyShareNow = o("WAWebKeyShareQueue").requestKeyShareNow),
      (l.enqueueMetaAiThreadServerDeleteNow = o(
        "WAWebMetaAiThreadServerDeleteQueue",
      ).enqueueMetaAiThreadServerDeleteNow),
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
