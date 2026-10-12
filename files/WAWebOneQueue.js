__d(
  "WAWebOneQueue",
  [
    "Promise",
    "TaskSchedulerError",
    "TaskSchedulerPriority",
    "WAComms",
    "WALogger",
    "WAOfflineUtils",
    "WAOneQueue",
    "WAWebDanglingReceiptQueue",
    "WAWebMessageDeliveryCounters",
    "WAWebMessageQueueImpl",
    "WAWebSignalStoreOneQueueFlushable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = null,
      c = null,
      d = new Set();
    function m() {
      return (
        u != null ||
          (u = new (o("WAOneQueue").WAOneQueue)({
            castAcks: function () {
              return (s || (s = n("Promise"))).resolve();
            },
            context: {},
            danglingQueue: o("WAWebDanglingReceiptQueue").danglingReceiptQueue,
            enqueuePriority: o("TaskSchedulerPriority").NORMAL_PRIORITY,
            flushables: [
              o("WAWebSignalStoreOneQueueFlushable")
                .signalStoreOneQueueFlushable,
            ],
            mode: o("WAOfflineUtils").ServerRPCMode.ONLINE,
            promotionTimeoutMs: null,
            pullMode: {
              clear: function () {},
              offlineStart: function () {},
              shouldFlash: function () {
                return !1;
              },
              stanzaProcessed: function () {},
              stanzaReceived: function () {},
            },
            schedulerLifecycleListener: null,
            schedulerName: "waweb",
          })),
        u
      );
    }
    function p(e) {
      var t = e.action,
        n = e.isOffline,
        r = e.waitForAdmission,
        a = function () {
          return m().enqueue(
            function () {
              return t();
            },
            { flush: !n, operationType: "wa_web_message_queue" },
          );
        },
        i = r == null ? a() : _(r, a);
      return i.catch(function (e) {
        throw (
          e instanceof o("TaskSchedulerError").TaskSchedulerTimeoutError &&
            o("WAWebMessageDeliveryCounters").logMessageQueueTimeout(
              n ? "offline" : "online",
              "one_queue",
            ),
          e
        );
      });
    }
    function _(e, t) {
      var n = e();
      d.add(n);
      var r = function () {
        d.delete(n);
      };
      return (n.then(r, r), n.then(t));
    }
    function f(e) {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = m();
        (h(t),
          t.handleOfflineStartStanza({
            appdata: 0,
            count: e.count,
            message: e.message,
            notification: e.notification,
            receipt: e.receipt,
          }));
      }
    }
    function g() {
      var e;
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = m();
        (c !== ((e = o("WAComms").getComms()) == null ? void 0 : e.socketId) &&
          h(t),
          y());
      }
    }
    function h(e) {
      var t;
      (e.newConnection(),
        (c = (t = o("WAComms").getComms()) == null ? void 0 : t.socketId));
    }
    function y() {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = m(),
          r =
            d.size === 0
              ? t.handleOfflineEndStanza()
              : (s || (s = n("Promise")))
                  .allSettled(Array.from(d))
                  .then(function () {
                    return t.handleOfflineEndStanza();
                  });
        r.catch(function (t) {
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[one-queue] offline_end failed: ",
                "",
              ])),
            t,
          );
        });
      }
    }
    function C() {
      return m().waitForWAInfraOfflineSyncEnd();
    }
    ((l.getWAWebOneQueue = m),
      (l.enqueueOnOneQueue = p),
      (l.handleOneQueueOfflineStart = f),
      (l.handleOneQueueOfflineIb = g),
      (l.handleOneQueueOfflineEnd = y),
      (l.waitForOneQueueOfflineEnd = C));
  },
  98,
);
