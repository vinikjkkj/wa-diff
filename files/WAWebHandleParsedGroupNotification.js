__d(
  "WAWebHandleParsedGroupNotification",
  [
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebHandleGroupNotificationAction",
    "WAWebHandleGroupNotificationV2",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebOfflineHandler",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t =
        !!e.offline &&
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete();
      return o(
        "WAWebHandleGroupNotificationV2",
      ).isGroupNotificationOptimizationEligible(e, t) && t
        ? o("WAWebHandleGroupNotificationV2").handleGroupNotificationV2(e, t)
        : o("WAWebMessageQueue")
            .onMessageQueue({
              chatWid: e.chatId,
              isOffline: t,
              msgCategory: null,
              action: function () {
                return o(
                  "WAWebHandleGroupNotificationAction",
                ).handleActionsUntilQueued({ isOffline: t, meta: e });
              },
            })
            .catch(function (e) {
              return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
                e,
                "group_notification",
              );
            })
            .then(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    return t == null
                      ? null
                      : (yield t.written,
                        o("WAWap").wap("ack", {
                          to: o("WAWebCommsWapMd").GROUP_JID(e.chatId),
                          id: o("WAWap").CUSTOM_STRING(e.externalId),
                          class: "notification",
                          type: "w:gp2",
                          participant: e.author
                            ? o("WAWebCommsWapMd").USER_JID(e.author)
                            : o("WAWap").DROP_ATTR,
                        }));
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            );
    }
    l.handleParsedGroupNotification = e;
  },
  98,
);
