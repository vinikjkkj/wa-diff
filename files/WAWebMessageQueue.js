__d(
  "WAWebMessageQueue",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseQueue",
    "WAPromiseTimeout",
    "WAWebApiContact",
    "WAWebBackendEventBus",
    "WAWebEventsWaitForMainStreamReadyMd",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebEventsWaitForReadyForOffline",
    "WAWebHandleMsgCommon",
    "WAWebInboundMsgPersistedQueueAdapter",
    "WAWebMessageDeliveryCounters",
    "WAWebMessageQueueImpl",
    "WAWebOfflineBacklogHold",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeCounters",
    "WAWebOneQueue",
    "WAWebPromiseQueue",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWorkerOnlineMessageAdmission",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 2e4,
      d = {
        allChatQueue: new (o("WAWebPromiseQueue").PromiseQueue)(),
        chatQueue: new (o("WAPromiseQueue").PromiseQueueMap)(),
      },
      m = {
        allChatQueue: new (o("WAWebPromiseQueue").PromiseQueue)(),
        chatQueue: new (o("WAPromiseQueue").PromiseQueueMap)(),
      },
      p = { offline: 0, online: 0 };
    function _(e) {
      if (e) {
        var t;
        (t = o("WAWebWorkerOnlineMessageAdmission").workerOnlineMessageAdmission
          .queue) != null ||
          (o(
            "WAWebWorkerOnlineMessageAdmission",
          ).workerOnlineMessageAdmission.queue = new (o(
            "WAWebPromiseQueue",
          ).PromiseQueue)());
      } else
        o(
          "WAWebWorkerOnlineMessageAdmission",
        ).workerOnlineMessageAdmission.queue = null;
    }
    function f(e) {
      return o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()
        ? b(e)
        : C(e);
    }
    function g(e) {
      var t = e.msgCategory,
        n = e.onInboundDrainWaited,
        r = e.skipOfflineWait;
      return (!o(
        "WAWebInboundMsgPersistedQueueAdapter",
      ).isInboundMsgOrderLatched() &&
        !o(
          "WAWebInboundMsgPersistedQueueAdapter",
        ).isInboundMsgPersistedQueueRegistered() &&
        !o(
          "WAWebInboundMsgPersistedQueueAdapter",
        ).isInboundMsgQueueRegistrationPending() &&
        !o("WAWebOneQueue").hasOrderedAdmissionsWaiting()) ||
        t === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer ||
        r === !0
        ? null
        : (o("WAWebInboundMsgPersistedQueueAdapter").latchInboundMsgOrder(),
          {
            mustWaitForEarlierInboundMsgs: y,
            waitForEarlierInboundMsgs: function () {
              return h(n);
            },
          });
    }
    async function h(e) {
      var t = globalThis.performance.now();
      (await o(
        "WAWebInboundMsgPersistedQueueAdapter",
      ).waitForInboundMsgDrainIdle(),
        e == null || e(globalThis.performance.now() - t));
    }
    function y() {
      return (
        o(
          "WAWebInboundMsgPersistedQueueAdapter",
        ).isInboundMsgPersistedQueueRegistered() ||
        o(
          "WAWebInboundMsgPersistedQueueAdapter",
        ).isInboundMsgQueueRegistrationPending()
      );
    }
    async function C(e) {
      var t = e.action,
        n = e.chatWid,
        r = e.isOffline,
        a = e.msgCategory,
        i = e.skipOfflineWait,
        l =
          n.isRegularUser() && !n.isLid()
            ? o("WAWebApiContact").getCurrentLid(n)
            : null,
        s = (l != null ? l : n).toString();
      return (
        w(a) &&
          (await o(
            "WAWebWaitForInitialChatsSynced",
          ).waitForInitialChatsSynced()),
        r &&
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete()
          ? (o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
              "offline",
              "legacy",
            ),
            P("offline", M(s, t)))
          : (o(
              "WAWebOfflineResumeCounters",
            ).maybeLogOfflineMsgRoutedToOnlineQueue(r, "legacy"),
            o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
              "online",
              "legacy",
            ),
            P(
              "online",
              A({
                enqueue: function () {
                  return O(s, t);
                },
                skipOfflineWait: i,
              }),
            ))
      );
    }
    async function b(e) {
      var t = e.action,
        n = e.isOffline,
        r = e.msgCategory,
        a = e.skipOfflineWait;
      w(r) &&
        (await o("WAWebWaitForInitialChatsSynced").waitForInitialChatsSynced());
      var i = g(e);
      return n &&
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete()
        ? (o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
            "offline",
            "one_queue",
          ),
          $(t, i))
        : (o(
            "WAWebOfflineResumeCounters",
          ).maybeLogOfflineMsgRoutedToOnlineQueue(n, "one_queue"),
          o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
            "online",
            "one_queue",
          ),
          i != null && E()
            ? P("online", v(i, t))
            : P(
                "online",
                A({
                  enqueue: function () {
                    return o("WAWebOneQueue").enqueueOnOneQueue({
                      action: t,
                      inboundMsgOrder: i,
                      isOffline: !1,
                    });
                  },
                  skipOfflineWait: a,
                }),
              ));
    }
    async function v(e, t) {
      var n = await k();
      return o("WAWebOneQueue").enqueueOnOneQueue({
        action: t,
        inboundMsgOrder: e,
        isOffline: !1,
        waitForAdmission: n
          ? void 0
          : o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd,
      });
    }
    async function S(e) {
      var t = e.handler,
        n = e.isOffline,
        r = e.msgCategory,
        a = e.onInboundDrainWaited,
        i = e.props,
        l = r === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer,
        s = l
          ? null
          : {
              mustWaitForEarlierInboundMsgs: D,
              waitForEarlierInboundMsgs: function () {
                return h(a);
              },
            },
        u = l
          ? void 0
          : o("WAWebInboundMsgPersistedQueueAdapter")
              .whenInboundMsgQueueRegistered;
      if (
        (w(r) &&
          (await o(
            "WAWebWaitForInitialChatsSynced",
          ).waitForInitialChatsSynced()),
        n &&
          !o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.isResumeFromRestartComplete())
      ) {
        o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
          "offline",
          "one_queue",
        );
        var c = null;
        return o("WAWebOneQueue")
          .handleStanzaOnOneQueue({
            handler: t,
            inboundMsgOrder: s,
            isOffline: !0,
            props: i,
            waitForAdmission: async function () {
              ((c = N("offline")),
                await (u == null ? void 0 : u()),
                await o(
                  "WAWebEventsWaitForReadyForOffline",
                ).waitForOfflineProcessReady(),
                await o(
                  "WAWebOfflineBacklogHold",
                ).waitForOfflineBacklogRelease());
            },
          })
          .finally(function () {
            return c == null ? void 0 : c();
          });
      }
      return (
        o("WAWebOfflineResumeCounters").maybeLogOfflineMsgRoutedToOnlineQueue(
          n,
          "one_queue",
        ),
        o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
          "online",
          "one_queue",
        ),
        P(
          "online",
          R(l, u, function (e) {
            return o("WAWebOneQueue").handleStanzaOnOneQueue({
              handler: t,
              inboundMsgOrder: s,
              isOffline: !1,
              props: i,
              waitForAdmission: e,
            });
          }),
        )
      );
    }
    function R(e, t, n) {
      return e || !E()
        ? A({
            enqueue: function () {
              return n(t);
            },
          })
        : L(function (e) {
            return n(
              e
                ? o("WAWebInboundMsgPersistedQueueAdapter")
                    .whenInboundMsgQueueRegistered
                : T,
            );
          });
    }
    async function L(e) {
      var t = await k();
      return e(t);
    }
    function E() {
      return (
        !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd &&
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()
      );
    }
    async function k() {
      try {
        return (
          await o("WAPromiseTimeout").promiseTimeout(
            Promise.race([
              Promise.all([
                o("WAWebOneQueue").waitForOneQueueOfflineEnd(),
                r("WAWebEventsWaitForMainStreamReadyMd")(),
              ]),
              I(),
            ]),
            o("WAWebEventsWaitForOfflineDeliveryEnd")
              .OFFLINE_RESUME_WAIT_TIMEOUT,
          ),
          !1
        );
      } catch (t) {
        if (!(t instanceof o("WACustomError").TimeoutError)) throw t;
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume] delivery promise timeout 5min",
                ])),
            )
            .sendLogs("offline-resume-promise-unresolved", { sampling: 0.01 }),
          o("WAWebMessageDeliveryCounters").logOfflineDeliveryWaitTimeout(
            o("WAWebMessageQueueImpl").getMessageQueueImpl(),
          ),
          !0
        );
      }
    }
    function I() {
      return o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
        ? Promise.resolve()
        : new Promise(function (e) {
            o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(
              function () {
                return e();
              },
            );
          });
    }
    async function T() {
      (await o(
        "WAWebInboundMsgPersistedQueueAdapter",
      ).whenInboundMsgQueueRegistered(),
        o("WAWebInboundMsgPersistedQueueAdapter").getInboundMsgIntake() ==
          null &&
          (await o(
            "WAWebEventsWaitForOfflineDeliveryEnd",
          ).waitForOfflineDeliveryEnd()));
    }
    function D() {
      return (
        o(
          "WAWebInboundMsgPersistedQueueAdapter",
        ).isInboundMsgPersistedQueueRegistered() &&
        o("WAWebInboundMsgPersistedQueueAdapter").getInboundMsgIntake() == null
      );
    }
    function x() {
      return babelHelpers.extends({}, p);
    }
    function $(e, t) {
      var n = null;
      return o("WAWebOneQueue")
        .enqueueOnOneQueue({
          action: e,
          inboundMsgOrder: t,
          isOffline: !0,
          waitForAdmission: async function () {
            ((n = N("offline")),
              await o(
                "WAWebEventsWaitForReadyForOffline",
              ).waitForOfflineProcessReady(),
              await o(
                "WAWebOfflineBacklogHold",
              ).waitForOfflineBacklogRelease());
          },
        })
        .finally(function () {
          return n == null ? void 0 : n();
        });
    }
    function P(e, t) {
      return t.finally(N(e));
    }
    function N(e) {
      return (
        p[e]++,
        function () {
          p[e]--;
        }
      );
    }
    function M(e, t) {
      return m.allChatQueue.enqueue(function () {
        return m.chatQueue.enqueue(e, async function () {
          return (
            await o(
              "WAWebEventsWaitForReadyForOffline",
            ).waitForOfflineProcessReady(),
            await o("WAWebOfflineBacklogHold").waitForOfflineBacklogRelease(),
            o("WAPromiseTimeout")
              .promiseTimeout(t(), c)
              .catch(function (e) {
                if (e instanceof o("WACustomError").TimeoutError)
                  return (
                    o("WALogger")
                      .LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Offline chat queue MAX_MESSAGE_DELAY exceeded",
                          ])),
                      )
                      .tags("messaging"),
                    o("WAWebMessageDeliveryCounters").logMessageQueueTimeout(
                      "offline",
                      "legacy",
                    ),
                    null
                  );
                throw e;
              })
          );
        });
      });
    }
    function w(e) {
      return (
        e !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer &&
        o("WAWebWaitForInitialChatsSynced").isWaitForInitialChatsSyncedPending()
      );
    }
    async function A(e) {
      var t = e.enqueue,
        n = e.skipOfflineWait,
        r = o("WAWebWorkerOnlineMessageAdmission").workerOnlineMessageAdmission
          .queue;
      return r != null
        ? n === !0
          ? t()
          : F({ enqueue: t, onlineAdmissionQueue: r })
        : (n !== !0 &&
            (await o(
              "WAWebEventsWaitForOfflineDeliveryEnd",
            ).waitForOfflineDeliveryEnd()),
          t());
    }
    async function F(e) {
      var t = e.enqueue,
        n = e.onlineAdmissionQueue,
        r = o(
          "WAWebEventsWaitForOfflineDeliveryEnd",
        ).waitForOfflineDeliveryEnd(),
        a = Promise.resolve(null);
      return (
        await n.enqueue(async function () {
          (await r, (a = t()));
        }),
        a
      );
    }
    function O(e, t) {
      return d.allChatQueue.enqueue(function () {
        return d.chatQueue.enqueue(e, function () {
          return o("WAPromiseTimeout")
            .promiseTimeout(t(), c)
            .catch(function (e) {
              if (e instanceof o("WACustomError").TimeoutError)
                return (
                  o("WALogger")
                    .LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Online chat queue MAX_MESSAGE_DELAY exceeded",
                        ])),
                    )
                    .tags("messaging"),
                  o("WAWebMessageDeliveryCounters").logMessageQueueTimeout(
                    "online",
                    "legacy",
                  ),
                  null
                );
              throw e;
            });
        });
      });
    }
    function B() {
      return m.allChatQueue.wait();
    }
    function W() {
      return d.allChatQueue.wait();
    }
    function q() {
      return (
        o("WAWebWorkerOnlineMessageAdmission").workerOnlineMessageAdmission
          .queue != null
      );
    }
    function U() {
      var e, t;
      return (e =
        (t = o("WAWebWorkerOnlineMessageAdmission").workerOnlineMessageAdmission
          .queue) == null
          ? void 0
          : t.wait()) != null
        ? e
        : Promise.resolve();
    }
    ((l.configureWorkerOnlineMessageQueueTracking = _),
      (l.onMessageQueue = f),
      (l.admitStanzaTaskToOneQueue = S),
      (l.getMessageQueueDepth = x),
      (l.waitForLegacyOfflineMessageQueue = B),
      (l.waitForLegacyOnlineMessageQueue = W),
      (l.isWorkerOnlineMessageQueueTrackingEnabled = q),
      (l.waitForWorkerOnlineMessageAdmission = U));
  },
  98,
);
