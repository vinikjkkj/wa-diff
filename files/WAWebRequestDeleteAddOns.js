__d(
  "WAWebRequestDeleteAddOns",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WACoalescer").createCoalescer({
        dispatch: _,
        name: "addon-deletion-queue",
        waitBeforeDispatch: o("WAWebLazyPersistedQueue")
          .whenPersistedQueuesMayOpen,
      });
    function c(e, t) {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled())
        return (p(e, t), (s || (s = n("Promise"))).resolve());
      var r = m("deleteAddOns");
      return o("QPLFlow").endWith(r, function () {
        return o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .waitUntilPersisted(
            o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(e, t),
          );
      });
    }
    function d(e, t) {
      if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
        p(e, t);
        return;
      }
      var r = m("deleteAddOnsFireAndForget");
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
    function m(e) {
      return o("QPLFlow").startQPLFlow(
        o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT,
        {
          annotations: { bool: { isPQ: !1 }, string: { operationType: e } },
          timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS,
        },
      );
    }
    function p(e, t) {
      for (var n of g(e, t)) u.add(n);
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = new Map();
          for (var i of t) a.set(i.queueId, i);
          var l = Array.from(a.values()),
            s = o("QPLFlow").startQPLFlow(
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
            yield o("QPLFlow").endWith(
              s,
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e = yield o(
                  "WAWebLazyPersistedQueue",
                ).whenPersistedQueuesReady(s);
                yield e.recordAddonDeletions(l);
              }),
            );
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[addon-deletion-queue] enqueue failed, dropping ",
                    " rows",
                  ])),
                l.length,
              )
              .catching(r("getErrorSafe")(t))
              .tags("addons", "messaging")
              .sendLogs("addon-deletion-enqueue-failed");
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
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
