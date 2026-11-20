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
    "WAWebEventsWaitForReadyForOffline",
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
      d,
      m = 1,
      p = 200,
      _ = 200,
      f = "waweb",
      g = 2e4,
      h = null,
      y = null,
      C = null,
      b = null,
      v = 0,
      S = 0,
      R = new Map(),
      L = -1 / 0,
      E = null,
      k = new Set(),
      I = (d || (d = n("Promise"))).resolve();
    function T() {
      return (
        h != null ||
          (h = new (o("WAOneQueue").WAOneQueue)({
            castAcks: function () {
              return (d || (d = n("Promise"))).resolve();
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
              lifecycleListener: K,
              name: f,
              timeoutMs: g,
            }),
          })),
        h
      );
    }
    function D(e) {
      var t = e.action,
        n = e.isOffline,
        r = e.waitForAdmission,
        a = function () {
          var e = T().enqueue(
            function () {
              return t(Q());
            },
            { flush: !n, operationType: "wa_web_message_queue" },
          );
          return (n && (I = e), e);
        },
        i = r == null ? a() : j(r, a);
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
    function x(e) {
      var t = e.attrs.offline;
      if (!t) return N;
      var n = $();
      if (n == null) return N;
      var r = parseInt(String(t), 10);
      n.isOfflineProcessReady ? M(r) : n.offlineCountsBeforeReady.push(r);
      var o = function () {
        return A(n);
      };
      return e.tag === "message" || e.tag === "status" ? o : (o(), N);
    }
    function $() {
      var e,
        t,
        n,
        r = (e = o("WAComms").getComms()) == null ? void 0 : e.socketId;
      return (
        r !== y &&
          ((t = b) == null ? void 0 : t.socketId) !== r &&
          o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() &&
          (b = P(r)),
        ((n = b) == null ? void 0 : n.socketId) === r ? b : null
      );
    }
    function P(e) {
      return {
        hasOfflinePreview: !1,
        isOfflineProcessReady: !1,
        offlineCountsBeforeReady: [],
        processedBeforeReady: 0,
        socketId: e,
      };
    }
    function N() {}
    function M(e) {
      (B().stanzaArrived(e), w(e));
    }
    function w(e) {
      (v > 0 && S >= v) || (S++, B().stanzaReceived(e));
    }
    function A(e) {
      if (F(e)) {
        if (!e.isOfflineProcessReady) {
          e.processedBeforeReady++;
          return;
        }
        var t = B();
        (t.stanzaProcessed(), t.shouldFlash() && O());
      }
    }
    function F(e) {
      var t;
      return (
        e === b &&
        e.socketId ===
          ((t = o("WAComms").getComms()) == null ? void 0 : t.socketId)
      );
    }
    function O() {
      z(function () {
        return T().enqueue(
          function () {
            return (d || (d = n("Promise"))).resolve();
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
    function B() {
      return (
        C != null ||
          (C = new (o("WAPullMode").PullMode)(
            function (e) {
              var t = Math.max(
                m,
                Math.min(o("WAPullMode").defaultOfflineBatchSize(e), W()),
              );
              return ((v += t), t);
            },
            { delayCount: _, isAdaptiveLowWatermarkEnabled: q },
          )),
        C
      );
    }
    function W() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "web_message_processing_cache_size",
      );
      return q() ? Math.floor(e / 2) : v === 0 ? Math.min(e, p) : e;
    }
    function q() {
      return r("qex")._("6062") === !0;
    }
    function U(e) {
      var t = V();
      if (!(e > 0 && (t == null ? void 0 : t.hasOfflinePreview) === !0)) {
        var n = e > 0 ? (t != null ? t : P(y)) : null;
        ((b = n),
          (v = 0),
          (S = 0),
          B().offlineStart(),
          n != null &&
            ((n.hasOfflinePreview = !0),
            o("WAWebEventsWaitForReadyForOffline")
              .waitForOfflineProcessReady()
              .then(function () {
                return H(n);
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[one-queue] offline process ready wait failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("one-queue-offline-process-ready-failed");
              })));
      }
    }
    function V() {
      var e = b;
      return e != null && !e.isOfflineProcessReady && e.socketId === y
        ? e
        : null;
    }
    function H(e) {
      if (((e.isOfflineProcessReady = !0), !!F(e))) {
        e.offlineCountsBeforeReady.forEach(M);
        for (var t = B(), n = !1, r = 0; r < e.processedBeforeReady; r++)
          (t.stanzaProcessed(), (n = t.shouldFlash() || n));
        n && O();
      }
    }
    function G() {
      var e;
      ((b = null), (e = C) == null || e.clear());
    }
    function z(e) {
      return k.size === 0
        ? e()
        : (d || (d = n("Promise"))).allSettled(Array.from(k)).then(e);
    }
    function j(e, t) {
      var n = e();
      k.add(n);
      var r = function () {
        k.delete(n);
      };
      return (n.then(r, r), n.then(t));
    }
    function K(e) {
      var t = self.performance.now();
      e: {
        var n = e;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "queued" &&
          "taskId" in n
        ) {
          var r = n.taskId;
          R.set(r, t);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "granted" &&
          "taskId" in n
        ) {
          var o,
            a = n.taskId,
            i = Math.max((o = R.get(a)) != null ? o : t, L);
          (R.delete(a), (E = { gateWaitMs: Math.max(t - i, 0), grantedAt: t }));
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
          L = t;
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
    function Q() {
      var e = E;
      return (
        (E = null),
        e == null
          ? null
          : {
              gateWaitMs: e.gateWaitMs,
              tickWaitMs: self.performance.now() - e.grantedAt,
            }
      );
    }
    function X(e) {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = T();
        (J(t),
          t.handleOfflineStartStanza({
            appdata: 0,
            count: e.count,
            message: e.message,
            notification: e.notification,
            receipt: e.receipt,
          }),
          U(e.count));
      }
    }
    function Y() {
      var e;
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = T();
        (y !== ((e = o("WAComms").getComms()) == null ? void 0 : e.socketId) &&
          J(t),
          G(),
          ee(t));
      }
    }
    function J(e) {
      var t;
      (e.newConnection(),
        (y = (t = o("WAComms").getComms()) == null ? void 0 : t.socketId));
    }
    function Z() {
      var e;
      o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() &&
        (((e = b) == null ? void 0 : e.isOfflineProcessReady) !== !1 && G(),
        ee(T()));
    }
    function ee(e) {
      var t = y;
      z(function () {
        return e.handleOfflineEndStanza(t);
      })
        .then(function () {
          return te(t);
        })
        .catch(function (e) {
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[one-queue] offline_end failed: ",
                "",
              ])),
            e,
          );
        });
    }
    function te(e) {
      var t = e != null && e !== y ? "replaced" : "dropped",
        n = T().waitForWAInfraOfflineSyncEnd();
      return ne(n).then(function (e) {
        e &&
          o("WAWebOfflineResumeCounters").logOneQueueOfflineEndNotResolved(t);
      });
    }
    function ne(e) {
      var t = {};
      return (d || (d = n("Promise"))).race([e, d.resolve(t)]).then(function (
        e,
      ) {
        return e === t;
      }, o("WAWebBoolFunc").returnFalse);
    }
    function re() {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (k.size > 0 &&
            (yield (d || (d = n("Promise"))).allSettled(Array.from(k))),
            yield I.catch(N));
        })),
        oe.apply(this, arguments)
      );
    }
    function ae() {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          k.size > 0 &&
            (yield (d || (d = n("Promise"))).allSettled(Array.from(k)));
          try {
            yield T().enqueue(
              function () {
                return (d || (d = n("Promise"))).resolve();
              },
              { flush: !0, operationType: "wa_web_offline_drain" },
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[one-queue] offline drain failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("one-queue-offline-drain-failed", { sampling: 0.01 });
          }
        })),
        ie.apply(this, arguments)
      );
    }
    ((l.getWAWebOneQueue = T),
      (l.enqueueOnOneQueue = D),
      (l.countOfflineStanzaForPullMode = x),
      (l.handleOneQueueOfflineStart = X),
      (l.handleOneQueueOfflineIb = Y),
      (l.handleOneQueueOfflineEnd = Z),
      (l.waitForOneQueueOfflineWorkProcessed = re),
      (l.waitForOneQueueOfflineWorkDrained = ae));
  },
  98,
);
