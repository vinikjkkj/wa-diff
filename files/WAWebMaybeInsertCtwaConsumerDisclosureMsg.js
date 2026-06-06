__d(
  "WAWebMaybeInsertCtwaConsumerDisclosureMsg",
  [
    "WAWebCommonCTWAConsumerTransparency",
    "WAWebContactSystemMsg",
    "WAWebDBUpdateChatTable",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
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
        (await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: e.id,
          handleSingleMsgOrigin:
            "hasCtwaConsumerDataSharingDisclosureNotification",
          messageOverwriteOption: o("WAWebHandleMsgTypes.flow")
            .MessageOverwriteOption.NO_OVERWRITE,
          newMsg: t,
          preserveOrder: !1,
        }),
          await o("WAWebDBUpdateChatTable").updateChatTable(e.id, {
            hasCtwaConsumerDataSharingDisclosureSystemMsg: !0,
          }));
      }
    }
    l.maybeInsertCtwaConsumerDisclosureMsg = e;
  },
  98,
);
