__d(
  "WAWebMessageQueue",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseQueue",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebEventsWaitForReadyForOffline",
    "WAWebHandleMsgCommon",
    "WAWebMessageDeliveryCounters",
    "WAWebOfflineHandler",
    "WAWebOfflineResumeCounters",
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
            a !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer &&
              o(
                "WAWebWaitForInitialChatsSynced",
              ).isWaitForInitialChatsSyncedPending() &&
              !o("WAWebABProps").getABPropConfigValue(
                "waweb_deprecate_initial_sync_ordering",
              ) &&
              (yield o(
                "WAWebWaitForInitialChatsSynced",
              ).waitForInitialChatsSynced()),
            r &&
            !o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete()
              ? C("offline", b(s, t))
              : (o(
                  "WAWebOfflineResumeCounters",
                ).maybeLogOfflineMsgRoutedToOnlineQueue(r),
                C("online", v({ action: t, keyChatId: s, skipOfflineWait: i })))
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return babelHelpers.extends({}, _);
    }
    function C(e, t) {
      return (
        _[e]++,
        t.finally(function () {
          _[e]--;
        })
      );
    }
    function b(t, r) {
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
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.keyChatId,
            r = e.skipOfflineWait,
            a = function () {
              return E(n, t);
            },
            i = p;
          return i != null
            ? r === !0
              ? a()
              : R({ enqueue: a, onlineAdmissionQueue: i })
            : (r !== !0 &&
                (yield o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).waitForOfflineDeliveryEnd()),
              a());
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
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
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
                  ),
                  null
                );
              throw e;
            });
        });
      });
    }
    function k() {
      return m.allChatQueue.wait();
    }
    function I() {
      return d.allChatQueue.wait();
    }
    function T() {
      return p != null;
    }
    function D() {
      var e = p;
      return e == null
        ? I()
        : e.enqueue(function () {
            return d.allChatQueue.wait();
          });
    }
    ((l.configureWorkerOnlineMessageQueueTracking = f),
      (l.onMessageQueue = g),
      (l.getMessageQueueDepth = y),
      (l.waitForOfflineMessageQueue = k),
      (l.waitForOnlineMessageQueue = I),
      (l.isWorkerOnlineMessageQueueTrackingEnabled = T),
      (l.waitForWorkerOnlineMessageQueueAfterOfflineDeliveryEnd = D));
  },
  98,
);
