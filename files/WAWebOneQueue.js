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
    "WAWebBoolFunc",
    "WAWebDanglingReceiptQueue",
    "WAWebMessageDeliveryCounters",
    "WAWebMessageQueueImpl",
    "WAWebOfflineResumeCounters",
    "WAWebSignalStoreOneQueueFlushable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = null,
      d = null,
      m = new Map(),
      p = -1 / 0,
      _ = null,
      f = new Set();
    function g() {
      return (
        c != null ||
          (c = new (o("WAOneQueue").WAOneQueue)({
            castAcks: function () {
              return (u || (u = n("Promise"))).resolve();
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
              shouldFlash: o("WAWebBoolFunc").returnFalse,
              stanzaProcessed: function () {},
              stanzaReceived: function () {},
            },
            schedulerLifecycleListener: C,
            schedulerName: "waweb",
          })),
        c
      );
    }
    function h(e) {
      var t = e.action,
        n = e.isOffline,
        r = e.waitForAdmission,
        a = function () {
          return g().enqueue(
            function () {
              return t(b());
            },
            { flush: !n, operationType: "wa_web_message_queue" },
          );
        },
        i = r == null ? a() : y(r, a);
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
    function y(e, t) {
      var n = e();
      f.add(n);
      var r = function () {
        f.delete(n);
      };
      return (n.then(r, r), n.then(t));
    }
    function C(e) {
      var t = self.performance.now();
      e: {
        var n = e;
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "queued" &&
          "taskId" in n
        ) {
          var r = n.taskId;
          m.set(r, t);
          break e;
        }
        if (
          ((typeof n == "object" && n !== null) || typeof n == "function") &&
          n.type === "granted" &&
          "taskId" in n
        ) {
          var o,
            a = n.taskId,
            i = Math.max((o = m.get(a)) != null ? o : t, p);
          (m.delete(a), (_ = { gateWaitMs: Math.max(t - i, 0), grantedAt: t }));
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
          p = t;
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
    function b() {
      var e = _;
      return (
        (_ = null),
        e == null
          ? null
          : {
              gateWaitMs: e.gateWaitMs,
              tickWaitMs: self.performance.now() - e.grantedAt,
            }
      );
    }
    function v(e) {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = g();
        (R(t),
          t.handleOfflineStartStanza({
            appdata: 0,
            count: e.count,
            message: e.message,
            notification: e.notification,
            receipt: e.receipt,
          }));
      }
    }
    function S() {
      var e;
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = g();
        (d !== ((e = o("WAComms").getComms()) == null ? void 0 : e.socketId) &&
          R(t),
          L());
      }
    }
    function R(e) {
      var t;
      (e.newConnection(),
        (d = (t = o("WAComms").getComms()) == null ? void 0 : t.socketId));
    }
    function L() {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()) {
        var t = g(),
          r = d,
          a = function () {
            return t.handleOfflineEndStanza(r);
          },
          i =
            f.size === 0
              ? a()
              : (u || (u = n("Promise"))).allSettled(Array.from(f)).then(a);
        i.then(function () {
          return E(r);
        }).catch(function (t) {
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
    function E(e) {
      var t = e != null && e !== d ? "replaced" : "dropped",
        n = g().waitForWAInfraOfflineSyncEnd();
      return k(n).then(function (e) {
        e &&
          o("WAWebOfflineResumeCounters").logOneQueueOfflineEndNotResolved(t);
      });
    }
    function k(e) {
      var t = {};
      return (u || (u = n("Promise"))).race([e, u.resolve(t)]).then(function (
        e,
      ) {
        return e === t;
      }, o("WAWebBoolFunc").returnFalse);
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          f.size > 0 &&
            (yield (u || (u = n("Promise"))).allSettled(Array.from(f)));
          try {
            yield g().enqueue(
              function () {
                return (u || (u = n("Promise"))).resolve();
              },
              { flush: !0, operationType: "wa_web_offline_drain" },
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[one-queue] offline drain failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("one-queue-offline-drain-failed", { sampling: 0.01 });
          }
        })),
        T.apply(this, arguments)
      );
    }
    ((l.getWAWebOneQueue = g),
      (l.enqueueOnOneQueue = h),
      (l.handleOneQueueOfflineStart = v),
      (l.handleOneQueueOfflineIb = S),
      (l.handleOneQueueOfflineEnd = L),
      (l.waitForOneQueueOfflineWorkDrained = I));
  },
  98,
);
