__d(
  "WAWebRequestDeleteAddOns",
  [
    "QPLFlow",
    "WACoalescer",
    "WALogger",
    "WATimeUtils",
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
      s = o("WACoalescer").createCoalescer({
        dispatch: p,
        name: "addon-deletion-queue",
        waitBeforeDispatch: o("WAWebLazyPersistedQueue")
          .whenPersistedQueuesMayOpen,
      });
    function u(e, t) {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled())
        return (m(e, t), Promise.resolve());
      var n = d("deleteAddOns");
      return o("QPLFlow").endWith(n, function () {
        return o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .waitUntilPersisted(
            o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(e, t),
          );
      });
    }
    function c(e, t) {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
        m(e, t);
        return;
      }
      var n = d("deleteAddOnsFireAndForget");
      o("QPLFlow").endWith(n, function () {
        return (
          o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .fireAndForget(
              o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(
                e,
                t,
              ),
            ),
          Promise.resolve()
        );
      });
    }
    function d(e) {
      return o("QPLFlow").startQPLFlow(
        o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
        {
          annotations: { bool: { isPQ: !1 }, string: { operationType: e } },
          timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
        },
      );
    }
    function m(e, t) {
      for (var n of _(e, t)) s.add(n);
    }
    async function p(t) {
      var n = new Map();
      for (var a of t) n.set(a.queueId, a);
      var i = Array.from(n.values()),
        l = o("QPLFlow").startQPLFlow(
          o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
          {
            annotations: {
              bool: { isPQ: !0 },
              string: { operationType: "deleteAddOns" },
            },
            timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
          },
        );
      try {
        await o("QPLFlow").endWith(l, async function () {
          var e = await o("WAWebLazyPersistedQueue").whenPersistedQueuesReady(
            l,
          );
          await e.recordAddonDeletions(i);
        });
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[addon-deletion-queue] enqueue failed, dropping ",
                " rows",
              ])),
            i.length,
          )
          .catching(r("getErrorSafe")(t))
          .tags("addons", "messaging")
          .sendLogs("addon-deletion-enqueue-failed");
      }
    }
    function _(e, t) {
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
