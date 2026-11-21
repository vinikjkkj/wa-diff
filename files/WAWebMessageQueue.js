__d(
  "WAWebMessageQueue",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 2e4,
      m = {
        allChatQueue: new (o("WAWebPromiseQueue").PromiseQueue)(),
        chatQueue: new (o("WAPromiseQueue").PromiseQueueMap)(),
      },
      p = {
        allChatQueue: new (o("WAWebPromiseQueue").PromiseQueue)(),
        chatQueue: new (o("WAPromiseQueue").PromiseQueueMap)(),
      },
      _ = { offline: 0, online: 0 };
    function f(e) {
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
    function g(e) {
      return o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()
        ? R(e)
        : v(e);
    }
    function h(e) {
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
            mustWaitForEarlierInboundMsgs: b,
            waitForEarlierInboundMsgs: function () {
              return y(n);
            },
          });
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = globalThis.performance.now();
          (yield o(
            "WAWebInboundMsgPersistedQueueAdapter",
          ).waitForInboundMsgDrainIdle(),
            e == null || e(globalThis.performance.now() - t));
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return (
        o(
          "WAWebInboundMsgPersistedQueueAdapter",
        ).isInboundMsgPersistedQueueRegistered() ||
        o(
          "WAWebInboundMsgPersistedQueueAdapter",
        ).isInboundMsgQueueRegistrationPending()
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            H(a) &&
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
                q("offline", V(s, t)))
              : (o(
                  "WAWebOfflineResumeCounters",
                ).maybeLogOfflineMsgRoutedToOnlineQueue(r, "legacy"),
                o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
                  "online",
                  "legacy",
                ),
                q(
                  "online",
                  G({
                    enqueue: function () {
                      return Q(s, t);
                    },
                    skipOfflineWait: i,
                  }),
                ))
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.isOffline,
            r = e.msgCategory,
            a = e.skipOfflineWait;
          H(r) &&
            (yield o(
              "WAWebWaitForInitialChatsSynced",
            ).waitForInitialChatsSynced());
          var i = h(e);
          return n &&
            !o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete()
            ? (o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
                "offline",
                "one_queue",
              ),
              W(t, i))
            : (o(
                "WAWebOfflineResumeCounters",
              ).maybeLogOfflineMsgRoutedToOnlineQueue(n, "one_queue"),
              o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
                "online",
                "one_queue",
              ),
              i != null && P()
                ? q("online", E(i, t))
                : q(
                    "online",
                    G({
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
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield N();
          return o("WAWebOneQueue").enqueueOnOneQueue({
            action: t,
            inboundMsgOrder: e,
            isOffline: !1,
            waitForAdmission: n
              ? void 0
              : o("WAWebEventsWaitForOfflineDeliveryEnd")
                  .waitForOfflineDeliveryEnd,
          });
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.handler,
            r = e.isOffline,
            a = e.msgCategory,
            i = e.onInboundDrainWaited,
            l = e.props,
            s = a === o("WAWebHandleMsgCommon").MSG_CATEGORY.peer,
            u = s
              ? null
              : {
                  mustWaitForEarlierInboundMsgs: O,
                  waitForEarlierInboundMsgs: function () {
                    return y(i);
                  },
                },
            c = s
              ? void 0
              : o("WAWebInboundMsgPersistedQueueAdapter")
                  .whenInboundMsgQueueRegistered;
          if (
            (H(a) &&
              (yield o(
                "WAWebWaitForInitialChatsSynced",
              ).waitForInitialChatsSynced()),
            r &&
              !o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete())
          ) {
            o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
              "offline",
              "one_queue",
            );
            var d = null;
            return o("WAWebOneQueue")
              .handleStanzaOnOneQueue({
                handler: t,
                inboundMsgOrder: u,
                isOffline: !0,
                props: l,
                waitForAdmission: (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      ((d = U("offline")),
                        yield c == null ? void 0 : c(),
                        yield o(
                          "WAWebEventsWaitForReadyForOffline",
                        ).waitForOfflineProcessReady(),
                        yield o(
                          "WAWebOfflineBacklogHold",
                        ).waitForOfflineBacklogRelease());
                    },
                  );
                  function t() {
                    return e.apply(this, arguments);
                  }
                  return t;
                })(),
              })
              .finally(function () {
                return d == null ? void 0 : d();
              });
          }
          return (
            o(
              "WAWebOfflineResumeCounters",
            ).maybeLogOfflineMsgRoutedToOnlineQueue(r, "one_queue"),
            o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
              "online",
              "one_queue",
            ),
            q(
              "online",
              D(s, c, function (e) {
                return o("WAWebOneQueue").handleStanzaOnOneQueue({
                  handler: t,
                  inboundMsgOrder: u,
                  isOffline: !1,
                  props: l,
                  waitForAdmission: e,
                });
              }),
            )
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
      return e || !P()
        ? G({
            enqueue: function () {
              return n(t);
            },
          })
        : x(function (e) {
            return n(
              e
                ? o("WAWebInboundMsgPersistedQueueAdapter")
                    .whenInboundMsgQueueRegistered
                : A,
            );
          });
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield N();
          return e(t);
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return (
        !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd &&
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeOnSocketDisconnectInProgress()
      );
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            return (
              yield o("WAPromiseTimeout").promiseTimeout(
                (c || (c = n("Promise"))).race([
                  c.all([
                    o("WAWebOneQueue").waitForOneQueueOfflineEnd(),
                    r("WAWebEventsWaitForMainStreamReadyMd")(),
                  ]),
                  w(),
                ]),
                o("WAWebEventsWaitForOfflineDeliveryEnd")
                  .OFFLINE_RESUME_WAIT_TIMEOUT,
              ),
              !1
            );
          } catch (e) {
            if (!(e instanceof o("WACustomError").TimeoutError)) throw e;
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume] delivery promise timeout 5min",
                    ])),
                )
                .sendLogs("offline-resume-promise-unresolved", {
                  sampling: 0.01,
                }),
              o("WAWebMessageDeliveryCounters").logOfflineDeliveryWaitTimeout(
                o("WAWebMessageQueueImpl").getMessageQueueImpl(),
              ),
              !0
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      return o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd
        ? (c || (c = n("Promise"))).resolve()
        : new (c || (c = n("Promise")))(function (e) {
            o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(
              function () {
                return e();
              },
            );
          });
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o(
            "WAWebInboundMsgPersistedQueueAdapter",
          ).whenInboundMsgQueueRegistered(),
            o("WAWebInboundMsgPersistedQueueAdapter").getInboundMsgIntake() ==
              null &&
              (yield o(
                "WAWebEventsWaitForOfflineDeliveryEnd",
              ).waitForOfflineDeliveryEnd()));
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      return (
        o(
          "WAWebInboundMsgPersistedQueueAdapter",
        ).isInboundMsgPersistedQueueRegistered() &&
        o("WAWebInboundMsgPersistedQueueAdapter").getInboundMsgIntake() == null
      );
    }
    function B() {
      return babelHelpers.extends({}, _);
    }
    function W(e, t) {
      var r = null;
      return o("WAWebOneQueue")
        .enqueueOnOneQueue({
          action: e,
          inboundMsgOrder: t,
          isOffline: !0,
          waitForAdmission: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              ((r = U("offline")),
                yield o(
                  "WAWebEventsWaitForReadyForOffline",
                ).waitForOfflineProcessReady(),
                yield o(
                  "WAWebOfflineBacklogHold",
                ).waitForOfflineBacklogRelease());
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        })
        .finally(function () {
          return r == null ? void 0 : r();
        });
    }
    function q(e, t) {
      return t.finally(U(e));
    }
    function U(e) {
      return (
        _[e]++,
        function () {
          _[e]--;
        }
      );
    }
    function V(t, r) {
      return p.allChatQueue.enqueue(function () {
        return p.chatQueue.enqueue(
          t,
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return (
              yield o(
                "WAWebEventsWaitForReadyForOffline",
              ).waitForOfflineProcessReady(),
              yield o("WAWebOfflineBacklogHold").waitForOfflineBacklogRelease(),
              o("WAPromiseTimeout")
                .promiseTimeout(r(), d)
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
    function H(e) {
      return (
        e !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer &&
        o("WAWebWaitForInitialChatsSynced").isWaitForInitialChatsSyncedPending()
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.enqueue,
            n = e.skipOfflineWait,
            r = o("WAWebWorkerOnlineMessageAdmission")
              .workerOnlineMessageAdmission.queue;
          return r != null
            ? n === !0
              ? t()
              : j({ enqueue: t, onlineAdmissionQueue: r })
            : (n !== !0 &&
                (yield o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).waitForOfflineDeliveryEnd()),
              t());
        })),
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.enqueue,
            r = e.onlineAdmissionQueue,
            a = o(
              "WAWebEventsWaitForOfflineDeliveryEnd",
            ).waitForOfflineDeliveryEnd(),
            i = (c || (c = n("Promise"))).resolve(null);
          return (
            yield r.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (yield a, (i = t()));
              }),
            ),
            i
          );
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e, t) {
      return m.allChatQueue.enqueue(function () {
        return m.chatQueue.enqueue(e, function () {
          return o("WAPromiseTimeout")
            .promiseTimeout(t(), d)
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
    function X() {
      return p.allChatQueue.wait();
    }
    function Y() {
      return m.allChatQueue.wait();
    }
    function J() {
      return (
        o("WAWebWorkerOnlineMessageAdmission").workerOnlineMessageAdmission
          .queue != null
      );
    }
    function Z() {
      var e, t;
      return (e =
        (t = o("WAWebWorkerOnlineMessageAdmission").workerOnlineMessageAdmission
          .queue) == null
          ? void 0
          : t.wait()) != null
        ? e
        : (c || (c = n("Promise"))).resolve();
    }
    ((l.configureWorkerOnlineMessageQueueTracking = f),
      (l.onMessageQueue = g),
      (l.admitStanzaTaskToOneQueue = I),
      (l.getMessageQueueDepth = B),
      (l.waitForLegacyOfflineMessageQueue = X),
      (l.waitForLegacyOnlineMessageQueue = Y),
      (l.isWorkerOnlineMessageQueueTrackingEnabled = J),
      (l.waitForWorkerOnlineMessageAdmission = Z));
  },
  98,
);
