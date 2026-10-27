__d(
  "WAWebOneQueue",
  [
    "NativeSchedulerTickStrategy",
    "Promise",
    "TaskScheduler",
    "TaskSchedulerError",
    "TaskSchedulerPriority",
    "WAComms",
    "WALogger",
    "WAOfflineUtils",
    "WAOneQueue",
    "WAPullMode",
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebDanglingReceiptQueue",
    "WAWebMessageCacheOneQueueFlushable",
    "WAWebMessageDeliveryCounters",
    "WAWebMessageQueueImpl",
    "WAWebOfflineResumeCounters",
    "WAWebSignalStateOneQueueFlushable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 1,
      m = "waweb",
      p = 2e4,
      _ = null,
      f = null,
      g = null,
      h = null,
      y = 0,
      C = 0,
      b = new Map(),
      v = -1 / 0,
      S = null,
      R = new Set();
    function L() {
      return (
        _ != null ||
          (E(),
          (_ = new (o("WAOneQueue").WAOneQueue)({
            castAcks: function () {
              return (c || (c = n("Promise"))).resolve();
            },
            context: {},
            danglingQueue: o("WAWebDanglingReceiptQueue").danglingReceiptQueue,
            enqueuePriority: o("TaskSchedulerPriority").HIGH_PRIORITY,
            flushables: [
              o("WAWebMessageCacheOneQueueFlushable")
                .messageCacheOneQueueFlushable,
              o("WAWebSignalStateOneQueueFlushable")
                .signalStateOneQueueFlushable,
            ],
            mode: o("WAOfflineUtils").ServerRPCMode.ONLINE,
            promotionTimeoutMs: null,
            pullMode: {
              clear: function () {},
              offlineStart: function () {},
              shouldFlash: o("WAWebBoolFunc").returnFalse,
              stanzaProcessed: function () {},
              stanzaReceived: function () {},
            },
            schedulerLifecycleListener: F,
            schedulerName: m,
          }))),
        _
      );
    }
    function E() {
      o("TaskScheduler").taskScheduler(
        m,
        {
          concurrency: 1,
          failOnTimeout: !0,
          promotionTimeoutMs: null,
          timeoutMs: p,
        },
        o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
      );
    }
    function k(e) {
      var t = e.action,
        n = e.isOffline,
        r = e.waitForAdmission,
        a = function () {
          return L().enqueue(
            function () {
              return t(O());
            },
            { flush: !n, operationType: "wa_web_message_queue" },
          );
        },
        i = r == null ? a() : A(r, a);
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
    function I(e) {
      var t = h,
        n = e.attrs.offline;
      if (t == null || !n) return T;
      D(parseInt(n, 10));
      var r = function () {
        return x(t);
      };
      return e.tag === "message" || e.tag === "status" ? r : (r(), T);
    }
    function T() {}
    function D(e) {
      (y > 0 && C >= y) || (C++, P().stanzaReceived(e));
    }
    function x(e) {
      var t;
      if (
        !(
          e !== h ||
          e.socketId !==
            ((t = o("WAComms").getComms()) == null ? void 0 : t.socketId)
        )
      ) {
        var n = P();
        (n.stanzaProcessed(), n.shouldFlash() && $());
      }
    }
    function $() {
      w(function () {
        return L().enqueue(
          function () {
            return (c || (c = n("Promise"))).resolve();
          },
          { flush: !0, operationType: "wa_web_offline_batch_flush" },
        );
      }).catch(function (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[one-queue] offline batch flush failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("one-queue-offline-batch-flush-failed", { sampling: 0.01 });
      });
    }
    function P() {
      return (
        g != null ||
          (g = new (o("WAPullMode").PullMode)(function (e) {
            var t = Math.max(
              d,
              Math.min(
                o("WAPullMode").defaultOfflineBatchSize(e),
                o("WAWebABProps").getABPropConfigValue(
                  "web_message_processing_cache_size",
                ),
              ),
            );
            return ((y += t), t);
          })),
        g
      );
    }
    function N(e) {
      ((h = e > 0 ? { socketId: f } : null),
        (y = 0),
        (C = 0),
        P().offlineStart());
    }
    function M() {
      var e;
      ((h = null), (e = g) == null || e.clear());
    }
    function w(e) {
      return R.size === 0
        ? e()
        : (c || (c = n("Promise"))).allSettled(Array.from(R)).then(e);
    }
    function A(e, t) {
      var n = e();
      R.add(n);
      var r = function () {
        R.delete(n);
      };
      return (n.then(r, r), n.then(t));
    }
    function F(e) {
      var t = self.performance.now();
      e: {
        var n = e;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "queued" &&
          "taskId" in n
        ) {
          var r = n.taskId;
          b.set(r, t);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "granted" &&
          "taskId" in n
        ) {
          var o,
            a = n.taskId,
            i = Math.max((o = b.get(a)) != null ? o : t, v);
          (b.delete(a), (S = { gateWaitMs: Math.max(t - i, 0), grantedAt: t }));
          break e;
        }
        if (
          (((typeof n == "object" && n !== null) || typeof n == "function") &&
            n.type === "completed") ||
          (((typeof n == "object" && n !== null) || typeof n == "function") &&
            n.type === "failed") ||
          (((typeof n == "object" && n !== null) || typeof n == "function") &&
            n.type === "stuck")
        ) {
          v = t;
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "promoted"
        )
          break e;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            n,
        );
      }
    }
    function O() {
      var e = S;
      return (
        (S = null),
        e == null
          ? null
          : {
              gateWaitMs: e.gateWaitMs,
              tickWaitMs: self.performance.now() - e.grantedAt,
            }
      );
    }
    function B(e) {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = L();
        (q(t),
          t.handleOfflineStartStanza({
            appdata: 0,
            count: e.count,
            message: e.message,
            notification: e.notification,
            receipt: e.receipt,
          }),
          N(e.count));
      }
    }
    function W() {
      var e;
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = L();
        (f !== ((e = o("WAComms").getComms()) == null ? void 0 : e.socketId) &&
          q(t),
          U());
      }
    }
    function q(e) {
      var t;
      (e.newConnection(),
        (f = (t = o("WAComms").getComms()) == null ? void 0 : t.socketId));
    }
    function U() {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        M();
        var e = L(),
          t = f;
        w(function () {
          return e.handleOfflineEndStanza(t);
        })
          .then(function () {
            return V(t);
          })
          .catch(function (e) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[one-queue] offline_end failed: ",
                  "",
                ])),
              e,
            );
          });
      }
    }
    function V(e) {
      var t = e != null && e !== f ? "replaced" : "dropped",
        n = L().waitForWAInfraOfflineSyncEnd();
      return H(n).then(function (e) {
        e &&
          o("WAWebOfflineResumeCounters").logOneQueueOfflineEndNotResolved(t);
      });
    }
    function H(e) {
      var t = {};
      return (c || (c = n("Promise"))).race([e, c.resolve(t)]).then(function (
        e,
      ) {
        return e === t;
      }, o("WAWebBoolFunc").returnFalse);
    }
    function G() {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          R.size > 0 &&
            (yield (c || (c = n("Promise"))).allSettled(Array.from(R)));
          try {
            yield L().enqueue(
              function () {
                return (c || (c = n("Promise"))).resolve();
              },
              { flush: !0, operationType: "wa_web_offline_drain" },
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[one-queue] offline drain failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("one-queue-offline-drain-failed", { sampling: 0.01 });
          }
        })),
        z.apply(this, arguments)
      );
    }
    ((l.getWAWebOneQueue = L),
      (l.enqueueOnOneQueue = k),
      (l.countOfflineStanzaForPullMode = I),
      (l.handleOneQueueOfflineStart = B),
      (l.handleOneQueueOfflineIb = W),
      (l.handleOneQueueOfflineEnd = U),
      (l.waitForOneQueueOfflineWorkDrained = G));
  },
  98,
);
