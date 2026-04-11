__d(
  "WAWebPinInChatMessageSendWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupRoleType",
    "WAWebWamEnumGroupTypeClient",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumPinInChatType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PinInChatMessageSend: [
            4438,
            {
              groupRole: [1, o("WAWebWamEnumGroupRoleType").GROUP_ROLE_TYPE],
              groupTypeClient: [
                2,
                o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT,
              ],
              isAGroup: [3, e.TYPES.BOOLEAN],
              isSelfParentMessage: [7, e.TYPES.BOOLEAN],
              isSelfPin: [8, e.TYPES.BOOLEAN],
              mediaType: [4, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              pinInChatExpirySecs: [5, e.TYPES.INTEGER],
              pinInChatType: [
                6,
                o("WAWebWamEnumPinInChatType").PIN_IN_CHAT_TYPE,
              ],
              timeRemainingToExpirySecs: [9, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PinInChatMessageSend: [] },
      );
    l.PinInChatMessageSendWamEvent = s;
  },
  98,
);
