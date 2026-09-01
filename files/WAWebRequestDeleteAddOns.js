__d(
  "WAWebRequestDeleteAddOns",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAddonDeletionQueueDef",
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWormQueueDef",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("WAWebLazyPersistedQueue").lazyPersistedQueue(
        o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE,
      );
    function u(e, t) {
      return o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()
        ? s.add(d(e, t))
        : o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .waitUntilPersisted(
              o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(
                e,
                t,
              ),
            );
    }
    function c(t, n) {
      if (!o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
        o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .fireAndForget(
            o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(t, n),
          );
        return;
      }
      s.add(d(t, n)).catch(function (n) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[addon-deletion-queue] enqueue failed, dropping cleanup for ",
                "",
              ])),
            t,
          )
          .catching(r("getErrorSafe")(n))
          .tags("addons", "messaging")
          .sendLogs("addon-deletion-enqueue-failed");
      });
    }
    function d(e, t) {
      var n = o("WATimeUtils").unixTimeMs();
      return t.map(function (t) {
        return {
          addedAtMs: n,
          changedAtMs: n,
          chatId: e,
          parentMsgKey: t,
          queueId: o("WAWormQueueDef").toWAWormQueueId(t),
        };
      });
    }
    ((l.requestDeleteAddOns = u), (l.requestDeleteAddOnsFireAndForget = c));
  },
  98,
);
