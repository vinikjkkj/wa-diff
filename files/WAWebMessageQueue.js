__d(
  "WAWebMessageQueue",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseQueue",
    "WAPromiseTimeout",
    "WAWebApiContact",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebEventsWaitForReadyForOffline",
    "WAWebHandleMsgCommon",
    "WAWebMessageDeliveryCounters",
    "WAWebMessageQueueImpl",
    "WAWebOfflineBacklogHold",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeCounters",
    "WAWebOneQueue",
    "WAWebPromiseQueue",
    "WAWebWaitForInitialChatsSynced",
    "WAWebWorkerOnlineMessageAdmission",
    "asyncToGeneratorRuntime",
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
        ? y(e)
        : g(e);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            E(a) &&
              (yield o(
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
                S("offline", L(s, t)))
              : (o(
                  "WAWebOfflineResumeCounters",
                ).maybeLogOfflineMsgRoutedToOnlineQueue(r, "legacy"),
                o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
                  "online",
                  "legacy",
                ),
                S(
                  "online",
                  k({
                    enqueue: function () {
                      return x(s, t);
                    },
                    skipOfflineWait: i,
                  }),
                ))
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.isOffline,
            r = e.msgCategory,
            a = e.skipOfflineWait;
          return (
            E(r) &&
              (yield o(
                "WAWebWaitForInitialChatsSynced",
              ).waitForInitialChatsSynced()),
            n &&
            !o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete()
              ? (o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
                  "offline",
                  "one_queue",
                ),
                v(t))
              : (o(
                  "WAWebOfflineResumeCounters",
                ).maybeLogOfflineMsgRoutedToOnlineQueue(n, "one_queue"),
                o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
                  "online",
                  "one_queue",
                ),
                S(
                  "online",
                  k({
                    enqueue: function () {
                      return o("WAWebOneQueue").enqueueOnOneQueue({
                        action: t,
                        isOffline: !1,
                      });
                    },
                    skipOfflineWait: a,
                  }),
                ))
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return babelHelpers.extends({}, p);
    }
    function v(e) {
      var t = null;
      return o("WAWebOneQueue")
        .enqueueOnOneQueue({
          action: e,
          isOffline: !0,
          waitForAdmission: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              ((t = R("offline")),
                yield o(
                  "WAWebEventsWaitForReadyForOffline",
                ).waitForOfflineProcessReady(),
                yield o(
                  "WAWebOfflineBacklogHold",
                ).waitForOfflineBacklogRelease());
            });
            function r() {
              return e.apply(this, arguments);
            }
            return r;
          })(),
        })
        .finally(function () {
          return t == null ? void 0 : t();
        });
    }
    function S(e, t) {
      return t.finally(R(e));
    }
    function R(e) {
      return (
        p[e]++,
        function () {
          p[e]--;
        }
      );
    }
    function L(t, r) {
      return m.allChatQueue.enqueue(function () {
        return m.chatQueue.enqueue(
          t,
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return (
              yield o(
                "WAWebEventsWaitForReadyForOffline",
              ).waitForOfflineProcessReady(),
              yield o("WAWebOfflineBacklogHold").waitForOfflineBacklogRelease(),
              o("WAPromiseTimeout")
                .promiseTimeout(r(), c)
                .catch(function (t) {
                  if (t instanceof o("WACustomError").TimeoutError)
                    return (
                      o("WALogger")
                        .LOG(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
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
                  throw t;
                })
            );
          }),
        );
      });
    }
    function E(e) {
      return (
        e !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer &&
        o("WAWebWaitForInitialChatsSynced").isWaitForInitialChatsSyncedPending()
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.enqueue,
            n = e.skipOfflineWait,
            r = o("WAWebWorkerOnlineMessageAdmission")
              .workerOnlineMessageAdmission.queue;
          return r != null
            ? n === !0
              ? t()
              : T({ enqueue: t, onlineAdmissionQueue: r })
            : (n !== !0 &&
                (yield o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).waitForOfflineDeliveryEnd()),
              t());
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.enqueue,
            r = e.onlineAdmissionQueue,
            a = o(
              "WAWebEventsWaitForOfflineDeliveryEnd",
            ).waitForOfflineDeliveryEnd(),
            i = (u || (u = n("Promise"))).resolve(null);
          return (
            yield r.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (yield a, (i = t()));
              }),
            ),
            i
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return d.allChatQueue.enqueue(function () {
        return d.chatQueue.enqueue(e, function () {
          return o("WAPromiseTimeout")
            .promiseTimeout(t(), c)
            .catch(function (e) {
              if (e instanceof o("WACustomError").TimeoutError)
                return (
                  o("WALogger")
                    .LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
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
    function $() {
      return m.allChatQueue.wait();
    }
    function P() {
      return d.allChatQueue.wait();
    }
    function N() {
      return (
        o("WAWebWorkerOnlineMessageAdmission").workerOnlineMessageAdmission
          .queue != null
      );
    }
    function M() {
      var e, t;
      return (e =
        (t = o("WAWebWorkerOnlineMessageAdmission").workerOnlineMessageAdmission
          .queue) == null
          ? void 0
          : t.wait()) != null
        ? e
        : (u || (u = n("Promise"))).resolve();
    }
    ((l.configureWorkerOnlineMessageQueueTracking = _),
      (l.onMessageQueue = f),
      (l.getMessageQueueDepth = b),
      (l.waitForLegacyOfflineMessageQueue = $),
      (l.waitForLegacyOnlineMessageQueue = P),
      (l.isWorkerOnlineMessageQueueTrackingEnabled = N),
      (l.waitForWorkerOnlineMessageAdmission = M));
  },
  98,
);
