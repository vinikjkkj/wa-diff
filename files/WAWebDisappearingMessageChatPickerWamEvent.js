__d(
  "WAWebDisappearingMessageChatPickerWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDmChatPickerEntryPointType",
    "WAWebWamEnumDmChatPickerEventNameType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          DisappearingMessageChatPicker: [
            3398,
            {
              chatsSelected: [1, e.TYPES.INTEGER],
              dmChatPickerEntryPoint: [
                2,
                o("WAWebWamEnumDmChatPickerEntryPointType")
                  .DM_CHAT_PICKER_ENTRY_POINT_TYPE,
              ],
              dmChatPickerEventName: [
                3,
                o("WAWebWamEnumDmChatPickerEventNameType")
                  .DM_CHAT_PICKER_EVENT_NAME_TYPE,
              ],
              ephemeralityDuration: [4, e.TYPES.INTEGER],
              groupChatsSelected: [5, e.TYPES.INTEGER],
              groupSizeDistributionJson: [9, e.TYPES.STRING],
              newlyEphemeralChats: [7, e.TYPES.INTEGER],
              totalChatsInChatPicker: [8, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { DisappearingMessageChatPicker: [] },
      );
    l.DisappearingMessageChatPickerWamEvent = s;
  },
  98,
);
