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
    "qex",
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
      E = new Set(),
      k = (c || (c = n("Promise"))).resolve();
    function I() {
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
              stanzaArrived: function () {},
              stanzaProcessed: function () {},
              stanzaReceived: function () {},
            },
            scheduler: o(
              "WAWebOneQueuePromiseScheduler",
            ).makeOneQueuePromiseScheduler({
              lifecycleListener: q,
              name: _,
              timeoutMs: f,
            }),
          })),
        g
      );
    }
    function T(e) {
      var t = e.action,
        n = e.isOffline,
        r = e.waitForAdmission,
        a = function () {
          var e = I().enqueue(
            function () {
              return t(U());
            },
            { flush: !n, operationType: "wa_web_message_queue" },
          );
          return (n && (k = e), e);
        },
        i = r == null ? a() : W(r, a);
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
    function D(e) {
      var t = C,
        n = e.attrs.offline;
      if (t == null || !n) return x;
      var r = parseInt(String(n), 10);
      (M().stanzaArrived(r), $(r));
      var o = function () {
        return P(t);
      };
      return e.tag === "message" || e.tag === "status" ? o : (o(), x);
    }
    function x() {}
    function $(e) {
      (b > 0 && v >= b) || (v++, M().stanzaReceived(e));
    }
    function P(e) {
      var t;
      if (
        !(
          e !== C ||
          e.socketId !==
            ((t = o("WAComms").getComms()) == null ? void 0 : t.socketId)
        )
      ) {
        var n = M();
        (n.stanzaProcessed(), n.shouldFlash() && N());
      }
    }
    function N() {
      B(function () {
        return I().enqueue(
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
    function M() {
      return (
        y != null ||
          (y = new (o("WAPullMode").PullMode)(
            function (e) {
              var t = Math.max(
                d,
                Math.min(o("WAPullMode").defaultOfflineBatchSize(e), w()),
              );
              return ((b += t), t);
            },
            { delayCount: p, isAdaptiveLowWatermarkEnabled: A },
          )),
        y
      );
    }
    function w() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "web_message_processing_cache_size",
      );
      return A() ? Math.floor(e / 2) : b === 0 ? Math.min(e, m) : e;
    }
    function A() {
      return r("qex")._("6062") === !0;
    }
    function F(e) {
      ((C = e > 0 ? { socketId: h } : null),
        (b = 0),
        (v = 0),
        M().offlineStart());
    }
    function O() {
      var e;
      ((C = null), (e = y) == null || e.clear());
    }
    function B(e) {
      return E.size === 0
        ? e()
        : (c || (c = n("Promise"))).allSettled(Array.from(E)).then(e);
    }
    function W(e, t) {
      var n = e();
      E.add(n);
      var r = function () {
        E.delete(n);
      };
      return (n.then(r, r), n.then(t));
    }
    function q(e) {
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
    function U() {
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
    function V(e) {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = I();
        (G(t),
          t.handleOfflineStartStanza({
            appdata: 0,
            count: e.count,
            message: e.message,
            notification: e.notification,
            receipt: e.receipt,
          }),
          F(e.count));
      }
    }
    function H() {
      var e;
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = I();
        (h !== ((e = o("WAComms").getComms()) == null ? void 0 : e.socketId) &&
          G(t),
          z());
      }
    }
    function G(e) {
      var t;
      (e.newConnection(),
        (h = (t = o("WAComms").getComms()) == null ? void 0 : t.socketId));
    }
    function z() {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        O();
        var e = I(),
          t = h;
        B(function () {
          return e.handleOfflineEndStanza(t);
        })
          .then(function () {
            return j(t);
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
    function j(e) {
      var t = e != null && e !== h ? "replaced" : "dropped",
        n = I().waitForWAInfraOfflineSyncEnd();
      return K(n).then(function (e) {
        e &&
          o("WAWebOfflineResumeCounters").logOneQueueOfflineEndNotResolved(t);
      });
    }
    function K(e) {
      var t = {};
      return (c || (c = n("Promise"))).race([e, c.resolve(t)]).then(function (
        e,
      ) {
        return e === t;
      }, o("WAWebBoolFunc").returnFalse);
    }
    function Q() {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (E.size > 0 &&
            (yield (c || (c = n("Promise"))).allSettled(Array.from(E))),
            yield k.catch(x));
        })),
        X.apply(this, arguments)
      );
    }
    function Y() {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          E.size > 0 &&
            (yield (c || (c = n("Promise"))).allSettled(Array.from(E)));
          try {
            yield I().enqueue(
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
        J.apply(this, arguments)
      );
    }
    ((l.getWAWebOneQueue = I),
      (l.enqueueOnOneQueue = T),
      (l.countOfflineStanzaForPullMode = D),
      (l.handleOneQueueOfflineStart = V),
      (l.handleOneQueueOfflineIb = H),
      (l.handleOneQueueOfflineEnd = z),
      (l.waitForOneQueueOfflineWorkProcessed = Q),
      (l.waitForOneQueueOfflineWorkDrained = Y));
  },
  98,
);
