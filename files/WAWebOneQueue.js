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
    "WAPullMode",
    "WAWebABProps",
    "WAWebBoolFunc",
    "WAWebDanglingReceiptQueue",
    "WAWebMessageCacheOneQueueFlushable",
    "WAWebMessageDeliveryCounters",
    "WAWebMessageQueueImpl",
    "WAWebOfflineResumeCounters",
    "WAWebOneQueuePromiseScheduler",
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
          (_ = new (o("WAOneQueue").WAOneQueue)({
            castAcks: function () {
              return (c || (c = n("Promise"))).resolve();
            },
            context: {},
            danglingQueue: o("WAWebDanglingReceiptQueue").danglingReceiptQueue,
            enqueuePriority: o("TaskSchedulerPriority").NORMAL_PRIORITY,
            flushables: [
              o("WAWebMessageCacheOneQueueFlushable")
                .messageCacheOneQueueFlushable,
              o("WAWebSignalStateOneQueueFlushable")
                .signalStateOneQueueFlushable,
            ],
            mode: o("WAOfflineUtils").ServerRPCMode.ONLINE,
            pullMode: {
              clear: function () {},
              offlineStart: function () {},
              shouldFlash: o("WAWebBoolFunc").returnFalse,
              stanzaProcessed: function () {},
              stanzaReceived: function () {},
            },
            scheduler: o(
              "WAWebOneQueuePromiseScheduler",
            ).makeOneQueuePromiseScheduler({
              lifecycleListener: A,
              name: m,
              timeoutMs: p,
            }),
          })),
        _
      );
    }
    function E(e) {
      var t = e.action,
        n = e.isOffline,
        r = e.waitForAdmission,
        a = function () {
          return L().enqueue(
            function () {
              return t(F());
            },
            { flush: !n, operationType: "wa_web_message_queue" },
          );
        },
        i = r == null ? a() : w(r, a);
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
    function k(e) {
      var t = h,
        n = e.attrs.offline;
      if (t == null || !n) return I;
      T(parseInt(n, 10));
      var r = function () {
        return D(t);
      };
      return e.tag === "message" || e.tag === "status" ? r : (r(), I);
    }
    function I() {}
    function T(e) {
      (y > 0 && C >= y) || (C++, $().stanzaReceived(e));
    }
    function D(e) {
      var t;
      if (
        !(
          e !== h ||
          e.socketId !==
            ((t = o("WAComms").getComms()) == null ? void 0 : t.socketId)
        )
      ) {
        var n = $();
        (n.stanzaProcessed(), n.shouldFlash() && x());
      }
    }
    function x() {
      M(function () {
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
    function $() {
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
    function P(e) {
      ((h = e > 0 ? { socketId: f } : null),
        (y = 0),
        (C = 0),
        $().offlineStart());
    }
    function N() {
      var e;
      ((h = null), (e = g) == null || e.clear());
    }
    function M(e) {
      return R.size === 0
        ? e()
        : (c || (c = n("Promise"))).allSettled(Array.from(R)).then(e);
    }
    function w(e, t) {
      var n = e();
      R.add(n);
      var r = function () {
        R.delete(n);
      };
      return (n.then(r, r), n.then(t));
    }
    function A(e) {
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
    function F() {
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
    function O(e) {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = L();
        (W(t),
          t.handleOfflineStartStanza({
            appdata: 0,
            count: e.count,
            message: e.message,
            notification: e.notification,
            receipt: e.receipt,
          }),
          P(e.count));
      }
    }
    function B() {
      var e;
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = L();
        (f !== ((e = o("WAComms").getComms()) == null ? void 0 : e.socketId) &&
          W(t),
          q());
      }
    }
    function W(e) {
      var t;
      (e.newConnection(),
        (f = (t = o("WAComms").getComms()) == null ? void 0 : t.socketId));
    }
    function q() {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        N();
        var e = L(),
          t = f;
        M(function () {
          return e.handleOfflineEndStanza(t);
        })
          .then(function () {
            return U(t);
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
    function U(e) {
      var t = e != null && e !== f ? "replaced" : "dropped",
        n = L().waitForWAInfraOfflineSyncEnd();
      return V(n).then(function (e) {
        e &&
          o("WAWebOfflineResumeCounters").logOneQueueOfflineEndNotResolved(t);
      });
    }
    function V(e) {
      var t = {};
      return (c || (c = n("Promise"))).race([e, c.resolve(t)]).then(function (
        e,
      ) {
        return e === t;
      }, o("WAWebBoolFunc").returnFalse);
    }
    function H() {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        G.apply(this, arguments)
      );
    }
    ((l.getWAWebOneQueue = L),
      (l.enqueueOnOneQueue = E),
      (l.countOfflineStanzaForPullMode = k),
      (l.handleOneQueueOfflineStart = O),
      (l.handleOneQueueOfflineIb = B),
      (l.handleOneQueueOfflineEnd = q),
      (l.waitForOneQueueOfflineWorkDrained = H));
  },
  98,
);
