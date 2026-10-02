__d(
  "WAWebHandleParsedGroupNotification",
  [
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebHandleGroupNotificationAction",
    "WAWebHandleGroupNotificationV2",
    "WAWebMessageQueue",
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
        : o("WAWebMessageQueue").onMessageQueue({
            chatWid: e.chatId,
            isOffline: t,
            msgCategory: null,
            action: (function () {
              var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  return (
                    yield o("WAWebHandleGroupNotificationAction").handleActions(
                      { isOffline: t, meta: e },
                    ),
                    o("WAWap").wap("ack", {
                      to: o("WAWebCommsWapMd").GROUP_JID(e.chatId),
                      id: o("WAWap").CUSTOM_STRING(e.externalId),
                      class: "notification",
                      type: "w:gp2",
                      participant: e.author
                        ? o("WAWebCommsWapMd").USER_JID(e.author)
                        : o("WAWap").DROP_ATTR,
                    })
                  );
                },
              );
              function a() {
                return r.apply(this, arguments);
              }
              return a;
            })(),
          });
    }
    l.handleParsedGroupNotification = e;
  },
  98,
);
