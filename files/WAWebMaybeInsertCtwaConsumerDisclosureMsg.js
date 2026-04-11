__d(
  "WAWebMaybeInsertCtwaConsumerDisclosureMsg",
  [
    "WAWebCommonCTWAConsumerTransparency",
    "WAWebContactSystemMsg",
    "WAWebDBUpdateChatTable",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(
              e.hasCtwaConsumerDataSharingDisclosureSystemMsg ||
              !o(
                "WAWebCommonCTWAConsumerTransparency",
              ).shouldShowConsumerTransparencyDisclosure(e)
            )
          ) {
            e.hasCtwaConsumerDataSharingDisclosureSystemMsg = !0;
            var t = o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
              e.id,
              "ctwa_consumer_data_sharing_disclosure_system_message",
            );
            (yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
              chatId: e.id,
              handleSingleMsgOrigin:
                "hasCtwaConsumerDataSharingDisclosureNotification",
              messageOverwriteOption: o("WAWebHandleMsgTypes.flow")
                .MessageOverwriteOption.NO_OVERWRITE,
              newMsg: t,
              preserveOrder: !1,
            }),
              yield o("WAWebDBUpdateChatTable").updateChatTable(e.id, {
                hasCtwaConsumerDataSharingDisclosureSystemMsg: !0,
              }));
          }
        })),
        s.apply(this, arguments)
      );
    }
    l.maybeInsertCtwaConsumerDisclosureMsg = e;
  },
  98,
);
