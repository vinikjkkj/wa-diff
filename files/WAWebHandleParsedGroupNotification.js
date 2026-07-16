__d(
  "WAWebHandleParsedGroupNotification",
  [
    "Promise",
    "WAWap",
    "WAWebCommsWapMd",
    "WAWebHandleGroupNotificationAction",
    "WAWebHandleGroupNotificationV2",
    "WAWebMessageQueue",
    "WAWebOfflineHandler",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var r =
        !!t.offline &&
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete();
      return o(
        "WAWebHandleGroupNotificationV2",
      ).isGroupNotificationOptimizationEligible(t, r) && r
        ? o("WAWebHandleGroupNotificationV2").handleGroupNotificationV2(t, r)
        : o("WAWebMessageQueue").onMessageQueue({
            chatWid: t.chatId,
            isOffline: r,
            msgCategory: null,
            action: (function () {
              var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  return (
                    yield (e || (e = n("Promise"))).all(
                      t.actions.map(function (e) {
                        return o(
                          "WAWebHandleGroupNotificationAction",
                        ).handleAction({ action: e, isOffline: r, meta: t });
                      }),
                    ),
                    o("WAWap").wap("ack", {
                      to: o("WAWebCommsWapMd").GROUP_JID(t.chatId),
                      id: o("WAWap").CUSTOM_STRING(t.externalId),
                      class: "notification",
                      type: "w:gp2",
                      participant: t.author
                        ? o("WAWebCommsWapMd").USER_JID(t.author)
                        : o("WAWap").DROP_ATTR,
                    })
                  );
                },
              );
              function i() {
                return a.apply(this, arguments);
              }
              return i;
            })(),
          });
    }
    l.handleParsedGroupNotification = s;
  },
  98,
);
