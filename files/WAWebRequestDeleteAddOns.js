__d(
  "WAWebRequestDeleteAddOns",
  [
    "Promise",
    "QPLFlow",
    "WACoalescer",
    "WALogger",
    "WATimeUtils",
    "WAWebAddonDeletionQueueDef",
    "WAWebJobsMigrationGating",
    "WAWebLazyPersistedQueue",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPersistedQueueQpl",
    "WAWormQueueDef",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WAWebLazyPersistedQueue").lazyPersistedQueue(
        o("WAWebAddonDeletionQueueDef").ADDON_DELETION_QUEUE,
      ),
      c = o("WACoalescer").createCoalescer({
        dispatch: f,
        name: "addon-deletion-queue",
        waitBeforeDispatch: o("WAWebLazyPersistedQueue")
          .whenPersistedQueuesMayOpen,
      });
    function d(e, t) {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled())
        return (_(e, t), (s || (s = n("Promise"))).resolve());
      var r = p("deleteAddOns");
      return o("QPLFlow").endWith(r, function () {
        return o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .waitUntilPersisted(
            o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(e, t),
          );
      });
    }
    function m(e, t) {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
        _(e, t);
        return;
      }
      var r = p("deleteAddOnsFireAndForget");
      o("QPLFlow").endWith(r, function () {
        return (
          o("WAWebPersistedJobManagerWorkerCompatible")
            .getJobManager()
            .fireAndForget(
              o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(
                e,
                t,
              ),
            ),
          (s || (s = n("Promise"))).resolve()
        );
      });
    }
    function p(e) {
      return o("QPLFlow").startQPLFlow(
        o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
        {
          annotations: { bool: { isPQ: !1 }, string: { operationType: e } },
          timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
        },
      );
    }
    function _(e, t) {
      for (var n of h(e, t)) c.add(n);
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                timeoutInMs: o("WAWebPersistedQueueQpl")
                  .PERSISTED_QUEUE_TIMEOUT_MS,
              },
            );
          try {
            yield o("QPLFlow").endWith(l, function () {
              return u.add(l, i);
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
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
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
    ((l.requestDeleteAddOns = d), (l.requestDeleteAddOnsFireAndForget = m));
  },
  98,
);
