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
    "WAWebInboundMsgPersistedQueueAdapter",
    "WAWebMessageDeliveryCounters",
    "WAWebMessageQueueImpl",
    "WAWebNoop",
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
      I = new Set(),
      T = (d || (d = n("Promise"))).resolve(),
      D = d.resolve(),
      x = d.resolve(),
      $ = d.resolve(),
      P = 0;
    function N() {
      return (
        h != null ||
          (h = new (o("WAOneQueue").WAOneQueue)({
            castAcks: function (t) {
              return (
                ce(t),
                o(
                  "WAWebInboundMsgPersistedQueueAdapter",
                ).sendInboundMsgPersistedQueueReceipts()
              );
            },
            context: {},
            danglingQueue: o("WAWebDanglingReceiptQueue").danglingReceiptQueue,
            enqueuePriority: o("TaskSchedulerPriority").NORMAL_PRIORITY,
            flushables: [
              o("WAWebInboundMsgPersistedQueueAdapter")
                .inboundMsgPersistedQueueAdapterFlushable,
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
              lifecycleListener: ie,
              name: f,
              timeoutMs: g,
            }),
          })),
        h
      );
    }
    function M(e) {
      var t = e.action,
        n = e.inboundMsgOrder,
        r = e.isOffline,
        a = e.waitForAdmission,
        i = function () {
          var e = N().enqueue(
            function () {
              return t(le());
            },
            { flush: !r, operationType: "wa_web_message_queue" },
          );
          return (r && (T = e), e);
        },
        l = Z(i, a, n, r);
      return l.catch(function (e) {
        throw (
          e instanceof o("TaskSchedulerError").TaskSchedulerTimeoutError &&
            o("WAWebMessageDeliveryCounters").logMessageQueueTimeout(
              r ? "offline" : "online",
              "one_queue",
            ),
          e
        );
      });
    }
    function w(e) {
      var t = e.handler,
        n = e.inboundMsgOrder,
        r = e.isOffline,
        a = e.props,
        i = e.waitForAdmission,
        l = function () {
          var e = N().handleStanza(function () {
            return t(le());
          }, a);
          return (a.offline != null && (T = e), e);
        };
      return Z(l, i, n, r).catch(function (e) {
        throw (
          e instanceof o("TaskSchedulerError").TaskSchedulerTimeoutError &&
            o("WAWebMessageDeliveryCounters").logMessageQueueTimeout(
              a.offline != null ? "offline" : "online",
              "one_queue",
            ),
          e
        );
      });
    }
    function A(e) {
      var t = e.attrs.offline;
      if (!t) return B;
      var n = F();
      if (n == null) return B;
      var r = parseInt(String(t), 10);
      n.isOfflineProcessReady ? W(r) : n.offlineCountsBeforeReady.push(r);
      var o = function () {
        return U(n);
      };
      return e.tag === "message" || e.tag === "status" ? o : (o(), B);
    }
    function F() {
      var e,
        t,
        n,
        r = (e = o("WAComms").getComms()) == null ? void 0 : e.socketId;
      return (
        r !== y &&
          ((t = b) == null ? void 0 : t.socketId) !== r &&
          o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() &&
          (b = O(r)),
        ((n = b) == null ? void 0 : n.socketId) === r ? b : null
      );
    }
    function O(e) {
      return {
        hasOfflinePreview: !1,
        isOfflineProcessReady: !1,
        offlineCountsBeforeReady: [],
        processedBeforeReady: 0,
        socketId: e,
      };
    }
    function B() {}
    function W(e) {
      (G().stanzaArrived(e), q(e));
    }
    function q(e) {
      (v > 0 && S >= v) || (S++, G().stanzaReceived(e));
    }
    function U(e) {
      if (V(e)) {
        if (!e.isOfflineProcessReady) {
          e.processedBeforeReady++;
          return;
        }
        var t = G();
        (t.stanzaProcessed(), t.shouldFlash() && H());
      }
    }
    function V(e) {
      var t;
      return (
        e === b &&
        e.socketId ===
          ((t = o("WAComms").getComms()) == null ? void 0 : t.socketId)
      );
    }
    function H() {
      J(I, function () {
        return N().enqueue(
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
    function G() {
      return (
        C != null ||
          (C = new (o("WAPullMode").PullMode)(
            function (e) {
              var t = Math.max(
                m,
                Math.min(o("WAPullMode").defaultOfflineBatchSize(e), z()),
              );
              return ((v += t), t);
            },
            { delayCount: _, isAdaptiveLowWatermarkEnabled: j },
          )),
        C
      );
    }
    function z() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "web_message_processing_cache_size",
      );
      return j() ? Math.floor(e / 2) : v === 0 ? Math.min(e, p) : e;
    }
    function j() {
      return r("qex")._("6062") === !0;
    }
    function K(e) {
      var t = Q();
      if (!(e > 0 && (t == null ? void 0 : t.hasOfflinePreview) === !0)) {
        var n = e > 0 ? (t != null ? t : O(y)) : null;
        ((b = n),
          (v = 0),
          (S = 0),
          G().offlineStart(),
          n != null &&
            ((n.hasOfflinePreview = !0),
            o("WAWebEventsWaitForReadyForOffline")
              .waitForOfflineProcessReady()
              .then(function () {
                return X(n);
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
    function Q() {
      var e = b;
      return e != null && !e.isOfflineProcessReady && e.socketId === y
        ? e
        : null;
    }
    function X(e) {
      if (((e.isOfflineProcessReady = !0), !!V(e))) {
        e.offlineCountsBeforeReady.forEach(W);
        for (var t = G(), n = !1, r = 0; r < e.processedBeforeReady; r++)
          (t.stanzaProcessed(), (n = t.shouldFlash() || n));
        n && H();
      }
    }
    function Y() {
      var e;
      ((b = null), (e = C) == null || e.clear());
    }
    function J(e, t) {
      return e.size === 0
        ? t()
        : (d || (d = n("Promise"))).allSettled(Array.from(e)).then(t);
    }
    function Z(e, t, n, r) {
      return n != null ? ee(e, t, n, r) : t == null ? e() : oe(t, e, r);
    }
    function ee(e, t, o, a) {
      var i = o.mustWaitForEarlierInboundMsgs,
        l = o.waitForEarlierInboundMsgs,
        s = (d || (d = n("Promise"))).all([
          $,
          a ? null : x,
          t == null ? void 0 : t(),
        ]),
        u = d.all([D, s]).then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            i() && (yield re(), yield l());
          }),
        );
      P++;
      var c = oe(
          function () {
            return u;
          },
          e,
          a,
          s,
        ),
        m = function () {
          P--;
        };
      return (
        u.then(m, m),
        a
          ? ((D = u.catch(r("WAWebNoop"))), ($ = s.catch(r("WAWebNoop"))))
          : (x = u.catch(r("WAWebNoop"))),
        c
      );
    }
    function te() {
      return R.size > 0;
    }
    function ne() {
      return P > 0;
    }
    function re() {
      return N().enqueue(
        function () {
          return (d || (d = n("Promise"))).resolve();
        },
        { flush: !1, operationType: "wa_web_inbound_msg_barrier" },
      );
    }
    function oe(e, t, n, r) {
      var o = e();
      return (n && (ae(k, o), ae(I, r != null ? r : o)), o.then(t));
    }
    function ae(e, t) {
      e.add(t);
      var n = function () {
        e.delete(t);
      };
      t.then(n, n);
    }
    function ie(e) {
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
    function le() {
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
    function se(e) {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = N();
        (de(t),
          t.handleOfflineStartStanza({
            appdata: 0,
            count: e.count,
            message: e.message,
            notification: e.notification,
            receipt: e.receipt,
          }),
          K(e.count));
      }
    }
    function ue() {
      var e;
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = N();
        (y !== ((e = o("WAComms").getComms()) == null ? void 0 : e.socketId) &&
          de(t),
          Y(),
          pe(t));
      }
    }
    function ce(e) {
      var t,
        n = (t = o("WAComms").getComms()) == null ? void 0 : t.socketId;
      e.forEach(function (e) {
        var t = e.response,
          r = e.socketId;
        t === "NO_ACK" ||
          t === "CLOSE_SOCKET" ||
          r !== n ||
          o("WAComms").castSmaxStanza(t);
      });
    }
    function de(e) {
      var t;
      (e.newConnection(),
        (y = (t = o("WAComms").getComms()) == null ? void 0 : t.socketId));
    }
    function me() {
      var e;
      o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() &&
        (((e = b) == null ? void 0 : e.isOfflineProcessReady) !== !1 && Y(),
        pe(N()));
    }
    function pe(e) {
      var t = y;
      J(k, function () {
        return e.handleOfflineEndStanza(t);
      })
        .then(function () {
          return _e(t);
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
    function _e(e) {
      var t = e != null && e !== y ? "replaced" : "dropped",
        n = N().waitForWAInfraOfflineSyncEnd();
      return fe(n).then(function (e) {
        e &&
          o("WAWebOfflineResumeCounters").logOneQueueOfflineEndNotResolved(t);
      });
    }
    function fe(e) {
      var t = {};
      return (d || (d = n("Promise"))).race([e, d.resolve(t)]).then(function (
        e,
      ) {
        return e === t;
      }, o("WAWebBoolFunc").returnFalse);
    }
    function ge() {
      return N().waitForWAInfraOfflineSyncEnd();
    }
    function he() {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (k.size > 0 &&
            (yield (d || (d = n("Promise"))).allSettled(Array.from(k))),
            yield T.catch(B));
        })),
        ye.apply(this, arguments)
      );
    }
    function Ce() {
      return be.apply(this, arguments);
    }
    function be() {
      return (
        (be = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          k.size > 0 &&
            (yield (d || (d = n("Promise"))).allSettled(Array.from(k)));
          try {
            yield N().enqueue(
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
        be.apply(this, arguments)
      );
    }
    ((l.getWAWebOneQueue = N),
      (l.enqueueOnOneQueue = M),
      (l.handleStanzaOnOneQueue = w),
      (l.countOfflineStanzaForPullMode = A),
      (l.hasQueuedOneQueueTasks = te),
      (l.hasOrderedAdmissionsWaiting = ne),
      (l.handleOneQueueOfflineStart = se),
      (l.handleOneQueueOfflineIb = ue),
      (l.handleOneQueueOfflineEnd = me),
      (l.waitForOneQueueOfflineEnd = ge),
      (l.waitForOneQueueOfflineWorkProcessed = he),
      (l.waitForOneQueueOfflineWorkDrained = Ce));
  },
  98,
);
