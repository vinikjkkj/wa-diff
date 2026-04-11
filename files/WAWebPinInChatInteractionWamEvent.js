__d(
  "WAWebPinInChatInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupRoleType",
    "WAWebWamEnumGroupTypeClient",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumPinInChatInteractionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PinInChatInteraction: [
            4436,
            {
              groupRole: [1, o("WAWebWamEnumGroupRoleType").GROUP_ROLE_TYPE],
              groupSize: [2, e.TYPES.INTEGER],
              groupTypeClient: [
                3,
                o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT,
              ],
              isAGroup: [4, e.TYPES.BOOLEAN],
              isSelfPin: [8, e.TYPES.BOOLEAN],
              mediaType: [5, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              pinCount: [6, e.TYPES.INTEGER],
              pinInChatInteractionType: [
                7,
                o("WAWebWamEnumPinInChatInteractionType")
                  .PIN_IN_CHAT_INTERACTION_TYPE,
              ],
              pinIndex: [9, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PinInChatInteraction: [] },
      );
    l.PinInChatInteractionWamEvent = s;
  },
  98,
);
