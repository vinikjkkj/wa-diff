__d(
  "WAWebMessageQueue",
  [
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
      u = 2e4,
      c = {
        allChatQueue: new (o("WAWebPromiseQueue").PromiseQueue)(),
        chatQueue: new (o("WAPromiseQueue").PromiseQueueMap)(),
      },
      d = {
        allChatQueue: new (o("WAWebPromiseQueue").PromiseQueue)(),
        chatQueue: new (o("WAPromiseQueue").PromiseQueueMap)(),
      };
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.action,
            i = t.chatWid,
            l = t.isOffline,
            m = t.msgCategory,
            p = t.skipOfflineWait,
            _ =
              i.isRegularUser() && !i.isLid()
                ? o("WAWebApiContact").getCurrentLid(i)
                : null,
            f = (_ != null ? _ : i).toString();
          return (
            !r("gkx")("17199") &&
              m !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer &&
              o(
                "WAWebWaitForInitialChatsSynced",
              ).isWaitForInitialChatsSyncedPending() &&
              (yield o(
                "WAWebWaitForInitialChatsSynced",
              ).waitForInitialChatsSynced()),
            l &&
            !o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete()
              ? d.allChatQueue.enqueue(function () {
                  return d.chatQueue.enqueue(
                    f,
                    n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                      return (
                        yield o(
                          "WAWebEventsWaitForReadyForOffline",
                        ).waitForOfflineProcessReady(),
                        o("WAPromiseTimeout")
                          .promiseTimeout(a(), u)
                          .catch(function (t) {
                            if (t instanceof o("WACustomError").TimeoutError)
                              return (
                                o("WALogger")
                                  .LOG(
                                    e ||
                                      (e =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "Offline chat queue MAX_MESSAGE_DELAY exceeded",
                                          ],
                                        )),
                                  )
                                  .tags("messaging"),
                                null
                              );
                            throw t;
                          })
                      );
                    }),
                  );
                })
              : (o(
                  "WAWebOfflineResumeCounters",
                ).maybeLogOfflineMsgRoutedToOnlineQueue(l),
                p !== !0 &&
                  (yield o(
                    "WAWebEventsWaitForOfflineDeliveryEnd",
                  ).waitForOfflineDeliveryEnd()),
                c.allChatQueue.enqueue(function () {
                  return c.chatQueue.enqueue(f, function () {
                    return o("WAPromiseTimeout")
                      .promiseTimeout(a(), u)
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
                            null
                          );
                        throw e;
                      });
                  });
                }))
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return d.allChatQueue.wait();
    }
    function f() {
      return c.allChatQueue.wait();
    }
    ((l.onMessageQueue = m),
      (l.waitForOfflineMessageQueue = _),
      (l.waitForOnlineMessageQueue = f));
  },
  98,
);
