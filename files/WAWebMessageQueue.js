__d(
  "WAWebMessageQueue",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseQueue",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebEventsWaitForReadyForOffline",
    "WAWebHandleMsgCommon",
    "WAWebOfflineHandler",
    "WAWebPromiseQueue",
    "WAWebWaitForInitialChatsSynced",
    "asyncToGeneratorRuntime",
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
          var r = t.action,
            a = t.chatWid,
            i = t.isOffline,
            l = t.msgCategory,
            m = t.skipOfflineWait,
            p =
              a.isRegularUser() && !a.isLid()
                ? o("WAWebApiContact").getCurrentLid(a)
                : null,
            _ = (p != null ? p : a).toString();
          return (
            l !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer &&
              o("WAWebABProps").getABPropConfigValue(
                "web_fix_duplicated_lids_history_sync",
              ) &&
              (yield o(
                "WAWebWaitForInitialChatsSynced",
              ).waitForInitialChatsSynced()),
            i &&
            !o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete()
              ? d.allChatQueue.enqueue(function () {
                  return d.chatQueue.enqueue(
                    _,
                    n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                      return (
                        yield o(
                          "WAWebEventsWaitForReadyForOffline",
                        ).waitForOfflineProcessReady(),
                        o("WAPromiseTimeout")
                          .promiseTimeout(r(), u)
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
              : (m !== !0 &&
                  (yield o(
                    "WAWebEventsWaitForOfflineDeliveryEnd",
                  ).waitForOfflineDeliveryEnd()),
                c.allChatQueue.enqueue(function () {
                  return c.chatQueue.enqueue(_, function () {
                    return o("WAPromiseTimeout")
                      .promiseTimeout(r(), u)
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
