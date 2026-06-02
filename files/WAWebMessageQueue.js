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
    async function m(t) {
      var n = t.action,
        r = t.chatWid,
        a = t.isOffline,
        i = t.msgCategory,
        l = t.skipOfflineWait,
        m =
          r.isRegularUser() && !r.isLid()
            ? o("WAWebApiContact").getCurrentLid(r)
            : null,
        p = (m != null ? m : r).toString();
      return (
        i !== o("WAWebHandleMsgCommon").MSG_CATEGORY.peer &&
          o("WAWebABProps").getABPropConfigValue(
            "web_fix_duplicated_lids_history_sync",
          ) &&
          (await o(
            "WAWebWaitForInitialChatsSynced",
          ).waitForInitialChatsSynced()),
        a &&
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete()
          ? d.allChatQueue.enqueue(function () {
              return d.chatQueue.enqueue(p, async function () {
                return (
                  await o(
                    "WAWebEventsWaitForReadyForOffline",
                  ).waitForOfflineProcessReady(),
                  o("WAPromiseTimeout")
                    .promiseTimeout(n(), u)
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
                          null
                        );
                      throw t;
                    })
                );
              });
            })
          : (l !== !0 &&
              (await o(
                "WAWebEventsWaitForOfflineDeliveryEnd",
              ).waitForOfflineDeliveryEnd()),
            c.allChatQueue.enqueue(function () {
              return c.chatQueue.enqueue(p, function () {
                return o("WAPromiseTimeout")
                  .promiseTimeout(n(), u)
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
    }
    function p() {
      return d.allChatQueue.wait();
    }
    function _() {
      return c.allChatQueue.wait();
    }
    ((l.onMessageQueue = m),
      (l.waitForOfflineMessageQueue = p),
      (l.waitForOnlineMessageQueue = _));
  },
  98,
);
