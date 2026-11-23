__d(
  "WAWebOneQueue",
  [
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
      k = new Set(),
      I = Promise.resolve(),
      T = Promise.resolve(),
      D = Promise.resolve(),
      x = Promise.resolve(),
      $ = 0;
    function P() {
      return (
        g != null ||
          (g = new (o("WAOneQueue").WAOneQueue)({
            castAcks: function (t) {
              return (
                ue(t),
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
              lifecycleListener: ae,
              name: _,
              timeoutMs: f,
            }),
          })),
        g
      );
    }
    function N(e) {
      var t = e.action,
        n = e.inboundMsgOrder,
        r = e.isOffline,
        a = e.waitForAdmission,
        i = function () {
          var e = P().enqueue(
            function () {
              return t(ie());
            },
            { flush: !r, operationType: "wa_web_message_queue" },
          );
          return (r && (I = e), e);
        },
        l = J(i, a, n, r);
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
    function M(e) {
      var t = e.handler,
        n = e.inboundMsgOrder,
        r = e.isOffline,
        a = e.props,
        i = e.waitForAdmission,
        l = function () {
          var e = P().handleStanza(function () {
            return t(ie());
          }, a);
          return (a.offline != null && (I = e), e);
        };
      return J(l, i, n, r).catch(function (e) {
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
    function w(e) {
      var t = e.attrs.offline;
      if (!t) return O;
      var n = A();
      if (n == null) return O;
      var r = parseInt(String(t), 10);
      n.isOfflineProcessReady ? B(r) : n.offlineCountsBeforeReady.push(r);
      var o = function () {
        return q(n);
      };
      return e.tag === "message" || e.tag === "status" ? o : (o(), O);
    }
    function A() {
      var e,
        t,
        n,
        r = (e = o("WAComms").getComms()) == null ? void 0 : e.socketId;
      return (
        r !== h &&
          ((t = C) == null ? void 0 : t.socketId) !== r &&
          o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() &&
          (C = F(r)),
        ((n = C) == null ? void 0 : n.socketId) === r ? C : null
      );
    }
    function F(e) {
      return {
        hasOfflinePreview: !1,
        isOfflineProcessReady: !1,
        offlineCountsBeforeReady: [],
        processedBeforeReady: 0,
        socketId: e,
      };
    }
    function O() {}
    function B(e) {
      (H().stanzaArrived(e), W(e));
    }
    function W(e) {
      (b > 0 && v >= b) || (v++, H().stanzaReceived(e));
    }
    function q(e) {
      if (U(e)) {
        if (!e.isOfflineProcessReady) {
          e.processedBeforeReady++;
          return;
        }
        var t = H();
        (t.stanzaProcessed(), t.shouldFlash() && V());
      }
    }
    function U(e) {
      var t;
      return (
        e === C &&
        e.socketId ===
          ((t = o("WAComms").getComms()) == null ? void 0 : t.socketId)
      );
    }
    function V() {
      Y(k, function () {
        return P().enqueue(
          function () {
            return Promise.resolve();
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
    function H() {
      return (
        y != null ||
          (y = new (o("WAPullMode").PullMode)(
            function (e) {
              var t = Math.max(
                d,
                Math.min(o("WAPullMode").defaultOfflineBatchSize(e), G()),
              );
              return ((b += t), t);
            },
            { delayCount: p, isAdaptiveLowWatermarkEnabled: z },
          )),
        y
      );
    }
    function G() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "web_message_processing_cache_size",
      );
      return z() ? Math.floor(e / 2) : b === 0 ? Math.min(e, m) : e;
    }
    function z() {
      return r("qex")._("6062") === !0;
    }
    function j(e) {
      var t = K();
      if (!(e > 0 && (t == null ? void 0 : t.hasOfflinePreview) === !0)) {
        var n = e > 0 ? (t != null ? t : F(h)) : null;
        ((C = n),
          (b = 0),
          (v = 0),
          H().offlineStart(),
          n != null &&
            ((n.hasOfflinePreview = !0),
            o("WAWebEventsWaitForReadyForOffline")
              .waitForOfflineProcessReady()
              .then(function () {
                return Q(n);
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
    function K() {
      var e = C;
      return e != null && !e.isOfflineProcessReady && e.socketId === h
        ? e
        : null;
    }
    function Q(e) {
      if (((e.isOfflineProcessReady = !0), !!U(e))) {
        e.offlineCountsBeforeReady.forEach(B);
        for (var t = H(), n = !1, r = 0; r < e.processedBeforeReady; r++)
          (t.stanzaProcessed(), (n = t.shouldFlash() || n));
        n && V();
      }
    }
    function X() {
      var e;
      ((C = null), (e = y) == null || e.clear());
    }
    function Y(e, t) {
      return e.size === 0 ? t() : Promise.allSettled(Array.from(e)).then(t);
    }
    function J(e, t, n, r) {
      return n != null ? Z(e, t, n, r) : t == null ? e() : re(t, e, r);
    }
    function Z(e, t, n, o) {
      var a = n.mustWaitForEarlierInboundMsgs,
        i = n.waitForEarlierInboundMsgs,
        l = Promise.all([x, o ? null : D, t == null ? void 0 : t()]),
        s = Promise.all([T, l]).then(async function () {
          a() && (await ne(), await i());
        });
      $++;
      var u = re(
          function () {
            return s;
          },
          e,
          o,
          l,
        ),
        c = function () {
          $--;
        };
      return (
        s.then(c, c),
        o
          ? ((T = s.catch(r("WAWebNoop"))), (x = l.catch(r("WAWebNoop"))))
          : (D = s.catch(r("WAWebNoop"))),
        u
      );
    }
    function ee() {
      return S.size > 0;
    }
    function te() {
      return $ > 0;
    }
    function ne() {
      return P().enqueue(
        function () {
          return Promise.resolve();
        },
        { flush: !1, operationType: "wa_web_inbound_msg_barrier" },
      );
    }
    function re(e, t, n, r) {
      var o = e();
      return (n && (oe(E, o), oe(k, r != null ? r : o)), o.then(t));
    }
    function oe(e, t) {
      e.add(t);
      var n = function () {
        e.delete(t);
      };
      t.then(n, n);
    }
    function ae(e) {
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
    function ie() {
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
    function le(e) {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = P();
        (ce(t),
          t.handleOfflineStartStanza({
            appdata: 0,
            count: e.count,
            message: e.message,
            notification: e.notification,
            receipt: e.receipt,
          }),
          j(e.count));
      }
    }
    function se() {
      var e;
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = P();
        (h !== ((e = o("WAComms").getComms()) == null ? void 0 : e.socketId) &&
          ce(t),
          X(),
          me(t));
      }
    }
    function ue(e) {
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
    function ce(e) {
      var t;
      (e.newConnection(),
        (h = (t = o("WAComms").getComms()) == null ? void 0 : t.socketId));
    }
    function de() {
      var e;
      o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled() &&
        (((e = C) == null ? void 0 : e.isOfflineProcessReady) !== !1 && X(),
        me(P()));
    }
    function me(e) {
      var t = h;
      Y(E, function () {
        return e.handleOfflineEndStanza(t);
      })
        .then(function () {
          return pe(t);
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
    function pe(e) {
      var t = e != null && e !== h ? "replaced" : "dropped",
        n = P().waitForWAInfraOfflineSyncEnd();
      return _e(n).then(function (e) {
        e &&
          o("WAWebOfflineResumeCounters").logOneQueueOfflineEndNotResolved(t);
      });
    }
    function _e(e) {
      var t = {};
      return Promise.race([e, Promise.resolve(t)]).then(function (e) {
        return e === t;
      }, o("WAWebBoolFunc").returnFalse);
    }
    function fe() {
      return P().waitForWAInfraOfflineSyncEnd();
    }
    async function ge() {
      (E.size > 0 && (await Promise.allSettled(Array.from(E))),
        await I.catch(O));
    }
    async function he() {
      E.size > 0 && (await Promise.allSettled(Array.from(E)));
      try {
        await P().enqueue(
          function () {
            return Promise.resolve();
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
    }
    ((l.getWAWebOneQueue = P),
      (l.enqueueOnOneQueue = N),
      (l.handleStanzaOnOneQueue = M),
      (l.countOfflineStanzaForPullMode = w),
      (l.hasQueuedOneQueueTasks = ee),
      (l.hasOrderedAdmissionsWaiting = te),
      (l.handleOneQueueOfflineStart = le),
      (l.handleOneQueueOfflineIb = se),
      (l.handleOneQueueOfflineEnd = de),
      (l.waitForOneQueueOfflineEnd = fe),
      (l.waitForOneQueueOfflineWorkProcessed = ge),
      (l.waitForOneQueueOfflineWorkDrained = he));
  },
  98,
);
