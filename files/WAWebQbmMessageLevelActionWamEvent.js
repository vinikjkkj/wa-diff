__d(
  "WAWebQbmMessageLevelActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumContactType",
    "WAWebWamEnumMessageActionEntryPoint",
    "WAWebWamEnumMessageLevelAction",
    "WAWebWamEnumSignupEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          QbmMessageLevelAction: [
            5976,
            {
              bizTrustTier: [1, e.TYPES.STRING],
              bodyUrlCountInt: [23, e.TYPES.INTEGER],
              bodyUrlUniqueCountInt: [24, e.TYPES.INTEGER],
              buttonValueJsonArray: [16, e.TYPES.STRING],
              contactType: [2, o("WAWebWamEnumContactType").CONTACT_TYPE],
              ctaUrlUniqueCountInt: [25, e.TYPES.INTEGER],
              decisionId: [13, e.TYPES.STRING],
              deltaTimeReceived: [3, e.TYPES.INTEGER],
              entSourceSubplatform: [12, e.TYPES.STRING],
              iasEntryPoint: [
                29,
                o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT,
              ],
              iasOptinDs: [30, e.TYPES.STRING],
              isBizIntent: [10, e.TYPES.BOOLEAN],
              isBroadcastMessage: [11, e.TYPES.BOOLEAN],
              isCoex: [27, e.TYPES.BOOLEAN],
              isIasSubscriber: [31, e.TYPES.BOOLEAN],
              isInsubContact: [4, e.TYPES.BOOLEAN],
              isOba: [15, e.TYPES.BOOLEAN],
              isThroughDecisionService: [28, e.TYPES.BOOLEAN],
              messageActionEntryPoint: [
                5,
                o("WAWebWamEnumMessageActionEntryPoint")
                  .MESSAGE_ACTION_ENTRY_POINT,
              ],
              messageFieldJsonArray: [17, e.TYPES.STRING],
              messageHasUrl: [6, e.TYPES.BOOLEAN],
              messageIdHmac: [7, e.TYPES.STRING],
              messageLevelAction: [
                8,
                o("WAWebWamEnumMessageLevelAction").MESSAGE_LEVEL_ACTION,
              ],
              submessageFieldJsonArray: [18, e.TYPES.STRING],
              threadIdHmac: [9, e.TYPES.STRING],
              threadLidHmac: [14, e.TYPES.STRING],
              urlUniqueCountInt: [26, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { QbmMessageLevelAction: [] },
      );
    l.QbmMessageLevelActionWamEvent = s;
  },
  98,
);
