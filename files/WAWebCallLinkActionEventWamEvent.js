__d(
  "WAWebCallLinkActionEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCallLinkAction",
    "WAWebWamEnumCallLinkActionEntryPoint",
    "WAWebWamEnumCallLinkMedia",
    "WAWebWamEnumCallLinkShareChatType",
    "WAWebWamEnumCallLinkType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CallLinkActionEvent: [
            3852,
            {
              appSessionId: [5, e.TYPES.STRING],
              callLinkAction: [
                1,
                o("WAWebWamEnumCallLinkAction").CALL_LINK_ACTION,
              ],
              callLinkActionEntryPoint: [
                2,
                o("WAWebWamEnumCallLinkActionEntryPoint")
                  .CALL_LINK_ACTION_ENTRY_POINT,
              ],
              callLinkMedia: [
                3,
                o("WAWebWamEnumCallLinkMedia").CALL_LINK_MEDIA,
              ],
              callLinkShareChatType: [
                6,
                o("WAWebWamEnumCallLinkShareChatType")
                  .CALL_LINK_SHARE_CHAT_TYPE,
              ],
              callLinkSharedApp: [4, e.TYPES.STRING],
              callLinkType: [7, o("WAWebWamEnumCallLinkType").CALL_LINK_TYPE],
              isWaitingRoomEnabled: [10, e.TYPES.BOOLEAN],
              userJourneyEventMs: [8, e.TYPES.INTEGER],
              userJourneyFunnelId: [9, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CallLinkActionEvent: [] },
      );
    l.CallLinkActionEventWamEvent = s;
  },
  98,
);
