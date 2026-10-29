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
      m = 200,
      p = 200,
      _ = "waweb",
      f = 2e4,
      g = null,
      h = null,
      y = null,
      C = null,
      b = 0,
      v = 0,
      S = new Map(),
      R = -1 / 0,
      L = null,
      E = new Set();
    function k() {
      return (
        g != null ||
          (g = new (o("WAOneQueue").WAOneQueue)({
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
              lifecycleListener: O,
              name: _,
              timeoutMs: f,
            }),
          })),
        g
      );
    }
    function I(e) {
      var t = e.action,
        n = e.isOffline,
        r = e.waitForAdmission,
        a = function () {
          return k().enqueue(
            function () {
              return t(B());
            },
            { flush: !n, operationType: "wa_web_message_queue" },
          );
        },
        i = r == null ? a() : F(r, a);
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
    function T(e) {
      var t = C,
        n = e.attrs.offline;
      if (t == null || !n) return D;
      x(parseInt(n, 10));
      var r = function () {
        return $(t);
      };
      return e.tag === "message" || e.tag === "status" ? r : (r(), D);
    }
    function D() {}
    function x(e) {
      (b > 0 && v >= b) || (v++, N().stanzaReceived(e));
    }
    function $(e) {
      var t;
      if (
        !(
          e !== C ||
          e.socketId !==
            ((t = o("WAComms").getComms()) == null ? void 0 : t.socketId)
        )
      ) {
        var n = N();
        (n.stanzaProcessed(), n.shouldFlash() && P());
      }
    }
    function P() {
      A(function () {
        return k().enqueue(
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
    function N() {
      return (
        y != null ||
          (y = new (o("WAPullMode").PullMode)(function (e) {
            var t = Math.max(
              d,
              Math.min(
                o("WAPullMode").defaultOfflineBatchSize(e),
                o("WAWebABProps").getABPropConfigValue(
                  "web_message_processing_cache_size",
                ),
                b === 0 ? m : 1 / 0,
              ),
            );
            return ((b += t), t);
          }, p)),
        y
      );
    }
    function M(e) {
      ((C = e > 0 ? { socketId: h } : null),
        (b = 0),
        (v = 0),
        N().offlineStart());
    }
    function w() {
      var e;
      ((C = null), (e = y) == null || e.clear());
    }
    function A(e) {
      return E.size === 0
        ? e()
        : (c || (c = n("Promise"))).allSettled(Array.from(E)).then(e);
    }
    function F(e, t) {
      var n = e();
      E.add(n);
      var r = function () {
        E.delete(n);
      };
      return (n.then(r, r), n.then(t));
    }
    function O(e) {
      var t = self.performance.now();
      e: {
        var n = e;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "queued" &&
          "taskId" in n
        ) {
          var r = n.taskId;
          S.set(r, t);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "granted" &&
          "taskId" in n
        ) {
          var o,
            a = n.taskId,
            i = Math.max((o = S.get(a)) != null ? o : t, R);
          (S.delete(a), (L = { gateWaitMs: Math.max(t - i, 0), grantedAt: t }));
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
          R = t;
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
    function B() {
      var e = L;
      return (
        (L = null),
        e == null
          ? null
          : {
              gateWaitMs: e.gateWaitMs,
              tickWaitMs: self.performance.now() - e.grantedAt,
            }
      );
    }
    function W(e) {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = k();
        (U(t),
          t.handleOfflineStartStanza({
            appdata: 0,
            count: e.count,
            message: e.message,
            notification: e.notification,
            receipt: e.receipt,
          }),
          M(e.count));
      }
    }
    function q() {
      var e;
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = k();
        (h !== ((e = o("WAComms").getComms()) == null ? void 0 : e.socketId) &&
          U(t),
          V());
      }
    }
    function U(e) {
      var t;
      (e.newConnection(),
        (h = (t = o("WAComms").getComms()) == null ? void 0 : t.socketId));
    }
    function V() {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        w();
        var e = k(),
          t = h;
        A(function () {
          return e.handleOfflineEndStanza(t);
        })
          .then(function () {
            return H(t);
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
    function H(e) {
      var t = e != null && e !== h ? "replaced" : "dropped",
        n = k().waitForWAInfraOfflineSyncEnd();
      return G(n).then(function (e) {
        e &&
          o("WAWebOfflineResumeCounters").logOneQueueOfflineEndNotResolved(t);
      });
    }
    function G(e) {
      var t = {};
      return (c || (c = n("Promise"))).race([e, c.resolve(t)]).then(function (
        e,
      ) {
        return e === t;
      }, o("WAWebBoolFunc").returnFalse);
    }
    function z() {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          E.size > 0 &&
            (yield (c || (c = n("Promise"))).allSettled(Array.from(E)));
          try {
            yield k().enqueue(
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
        j.apply(this, arguments)
      );
    }
    ((l.getWAWebOneQueue = k),
      (l.enqueueOnOneQueue = I),
      (l.countOfflineStanzaForPullMode = T),
      (l.handleOneQueueOfflineStart = W),
      (l.handleOneQueueOfflineIb = q),
      (l.handleOneQueueOfflineEnd = V),
      (l.waitForOneQueueOfflineWorkDrained = z));
  },
  98,
);
