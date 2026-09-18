__d(
  "WAWebChatMuteWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumActionConducted",
    "WAWebWamEnumChatMuteNotificationChoice",
    "WAWebWamEnumMuteChatType",
    "WAWebWamEnumMuteEntryPoint",
    "WAWebWamEnumWaOfficialAccountName",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChatMute: [
            2280,
            {
              actionConducted: [
                3,
                o("WAWebWamEnumActionConducted").ACTION_CONDUCTED,
              ],
              chatMuteNotificationChoice: [
                5,
                o("WAWebWamEnumChatMuteNotificationChoice")
                  .CHAT_MUTE_NOTIFICATION_CHOICE,
              ],
              dedupKey: [8, e.TYPES.INTEGER],
              muteChatType: [4, o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE],
              muteDuration: [1, e.TYPES.TIMER],
              muteEntryPoint: [
                6,
                o("WAWebWamEnumMuteEntryPoint").MUTE_ENTRY_POINT,
              ],
              muteGroupSize: [2, e.TYPES.INTEGER],
              waOfficialAccountName: [
                7,
                o("WAWebWamEnumWaOfficialAccountName").WA_OFFICIAL_ACCOUNT_NAME,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChatMute: [] },
      );
    l.ChatMuteWamEvent = s;
  },
  98,
);
