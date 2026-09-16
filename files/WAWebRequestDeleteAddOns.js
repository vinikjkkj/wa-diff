__d(
  "WAWebRequestDeleteAddOns",
  [
    "Promise",
    "QPLFlow",
    "WALogger",
    "WATimeUtils",
    "WAWebAddonDeletionQueueDef",
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPersistedQueueQpl",
    "WAWormQueueDef",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WAWebLazyPersistedQueue").lazyPersistedQueue(
        o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE,
      );
    function c(e, t) {
      var n = o("WAWebJobsMigrationGating").isPersistedQueuesEnabled(),
        r = o("QPLFlow").startQPLFlow(
          o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
          {
            annotations: {
              bool: { isPQ: n },
              string: { operationType: "deleteAddOns" },
            },
            timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
          },
        );
      return n
        ? o("QPLFlow").endWith(r, function () {
            return u.add(r, m(e, t));
          })
        : o("QPLFlow").endWith(r, function () {
            return o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .waitUntilPersisted(
                o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(
                  e,
                  t,
                ),
              );
          });
    }
    function d(t, a) {
      var i = o("WAWebJobsMigrationGating").isPersistedQueuesEnabled(),
        l = o("QPLFlow").startQPLFlow(
          o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
          {
            annotations: {
              bool: { isPQ: i },
              string: { operationType: "deleteAddOnsFireAndForget" },
            },
            timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
          },
        );
      if (!i) {
        o("QPLFlow").endWith(l, function () {
          return (
            o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .fireAndForget(
                o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(
                  t,
                  a,
                ),
              ),
            (s || (s = n("Promise"))).resolve()
          );
        });
        return;
      }
      o("QPLFlow")
        .endWith(l, function () {
          return u.add(l, m(t, a));
        })
        .catch(function (n) {
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
    function m(e, t) {
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
    ((l.requestDeleteAddOns = c), (l.requestDeleteAddOnsFireAndForget = d));
  },
  98,
);
