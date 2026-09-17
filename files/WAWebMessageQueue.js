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
    "WAWebOfflineHandler",
    "WAWebOfflineResumeCounters",
    "WAWebPromiseQueue",
    "WAWebWaitForInitialChatsSynced",
    "asyncToGeneratorRuntime",
    "gkx",
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
      p = null;
    function _(e) {
      e
        ? p != null || (p = new (o("WAWebPromiseQueue").PromiseQueue)())
        : (p = null);
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            a = e.chatWid,
            i = e.isOffline,
            l = e.msgCategory,
            u = e.skipOfflineWait,
            d =
              a.isRegularUser() && !a.isLid()
                ? o("WAWebApiContact").getCurrentLid(a)
                : null,
            _ = (d != null ? d : a).toString();
          if (
            (!r("gkx")("17199") &&
              l !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer &&
              o(
                "WAWebWaitForInitialChatsSynced",
              ).isWaitForInitialChatsSyncedPending() &&
              (yield o(
                "WAWebWaitForInitialChatsSynced",
              ).waitForInitialChatsSynced()),
            i &&
              !o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete())
          )
            return m.allChatQueue.enqueue(function () {
              return m.chatQueue.enqueue(
                _,
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  return (
                    yield o(
                      "WAWebEventsWaitForReadyForOffline",
                    ).waitForOfflineProcessReady(),
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
                            null
                          );
                        throw e;
                      })
                  );
                }),
              );
            });
          o("WAWebOfflineResumeCounters").maybeLogOfflineMsgRoutedToOnlineQueue(
            i,
          );
          var f = function () {
              return C(_, t);
            },
            g = p;
          return g != null
            ? u === !0
              ? f()
              : h({ enqueue: f, onlineAdmissionQueue: g })
            : (u !== !0 &&
                (yield o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).waitForOfflineDeliveryEnd()),
              f());
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        y.apply(this, arguments)
      );
    }
    function C(t, n) {
      return d.allChatQueue.enqueue(function () {
        return d.chatQueue.enqueue(t, function () {
          return o("WAPromiseTimeout")
            .promiseTimeout(n(), c)
            .catch(function (t) {
              if (t instanceof o("WACustomError").TimeoutError)
                return (
                  o("WALogger")
                    .LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Online chat queue MAX_MESSAGE_DELAY exceeded",
                        ])),
                    )
                    .tags("messaging"),
                  null
                );
              throw t;
            });
        });
      });
    }
    function b() {
      return m.allChatQueue.wait();
    }
    function v() {
      return d.allChatQueue.wait();
    }
    function S() {
      return p != null;
    }
    function R() {
      var e = p;
      return e == null
        ? v()
        : e.enqueue(function () {
            return d.allChatQueue.wait();
          });
    }
    ((l.configureWorkerOnlineMessageQueueTracking = _),
      (l.onMessageQueue = f),
      (l.waitForOfflineMessageQueue = b),
      (l.waitForOnlineMessageQueue = v),
      (l.isWorkerOnlineMessageQueueTrackingEnabled = S),
      (l.waitForWorkerOnlineMessageQueueAfterOfflineDeliveryEnd = R));
  },
  98,
);
