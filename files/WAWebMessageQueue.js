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
    "WAWebOfflineHandler",
    "WAWebOfflineResumeCounters",
    "WAWebOneQueue",
    "WAWebPromiseQueue",
    "WAWebWaitForInitialChatsSynced",
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
      p = null,
      _ = { offline: 0, online: 0 };
    function f(e) {
      e
        ? p != null || (p = new (o("WAWebPromiseQueue").PromiseQueue)())
        : (p = null);
    }
    function g(e) {
      return o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled()
        ? C(e)
        : h(e);
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            k(a) &&
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
                R("offline", E(s, t)))
              : (o(
                  "WAWebOfflineResumeCounters",
                ).maybeLogOfflineMsgRoutedToOnlineQueue(r, "legacy"),
                o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
                  "online",
                  "legacy",
                ),
                R(
                  "online",
                  I({
                    enqueue: function () {
                      return $(s, t);
                    },
                    skipOfflineWait: i,
                  }),
                ))
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.isOffline,
            r = e.msgCategory,
            a = e.skipOfflineWait;
          return n &&
            !o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete()
            ? (o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
                "offline",
                "one_queue",
              ),
              S(t, r))
            : (k(r) &&
                (yield o(
                  "WAWebWaitForInitialChatsSynced",
                ).waitForInitialChatsSynced()),
              o(
                "WAWebOfflineResumeCounters",
              ).maybeLogOfflineMsgRoutedToOnlineQueue(n, "one_queue"),
              o("WAWebMessageDeliveryCounters").logMessageQueueEnqueued(
                "online",
                "one_queue",
              ),
              R(
                "online",
                I({
                  enqueue: function () {
                    return o("WAWebOneQueue").enqueueOnOneQueue({
                      action: t,
                      isOffline: !1,
                    });
                  },
                  skipOfflineWait: a,
                }),
              ));
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return babelHelpers.extends({}, _);
    }
    function S(e, t) {
      var r = null;
      return o("WAWebOneQueue")
        .enqueueOnOneQueue({
          action: e,
          isOffline: !0,
          waitForAdmission: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (k(t) &&
                (yield o(
                  "WAWebWaitForInitialChatsSynced",
                ).waitForInitialChatsSynced()),
                (r = L("offline")),
                yield o(
                  "WAWebEventsWaitForReadyForOffline",
                ).waitForOfflineProcessReady());
            });
            function a() {
              return e.apply(this, arguments);
            }
            return a;
          })(),
        })
        .finally(function () {
          return r == null ? void 0 : r();
        });
    }
    function R(e, t) {
      return t.finally(L(e));
    }
    function L(e) {
      return (
        _[e]++,
        function () {
          _[e]--;
        }
      );
    }
    function E(t, r) {
      return m.allChatQueue.enqueue(function () {
        return m.chatQueue.enqueue(
          t,
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return (
              yield o(
                "WAWebEventsWaitForReadyForOffline",
              ).waitForOfflineProcessReady(),
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
    function k(e) {
      return (
        e !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer &&
        o("WAWebWaitForInitialChatsSynced").isWaitForInitialChatsSyncedPending()
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.enqueue,
            n = e.skipOfflineWait,
            r = p;
          return r != null
            ? n === !0
              ? t()
              : D({ enqueue: t, onlineAdmissionQueue: r })
            : (n !== !0 &&
                (yield o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).waitForOfflineDeliveryEnd()),
              t());
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
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
    function P() {
      return m.allChatQueue.wait();
    }
    function N() {
      return d.allChatQueue.wait();
    }
    function M() {
      return p != null;
    }
    function w() {
      if (o("WAWebMessageQueueImpl").isOneQueueAdoptionEnabled())
        return (u || (u = n("Promise"))).resolve();
      var e = p;
      return e == null
        ? N()
        : e.enqueue(function () {
            return N();
          });
    }
    ((l.configureWorkerOnlineMessageQueueTracking = f),
      (l.onMessageQueue = g),
      (l.getMessageQueueDepth = v),
      (l.waitForLegacyOfflineMessageQueue = P),
      (l.waitForLegacyOnlineMessageQueue = N),
      (l.isWorkerOnlineMessageQueueTrackingEnabled = M),
      (l.waitForWorkerOnlineMessageQueueAfterOfflineDeliveryEnd = w));
  },
  98,
);
