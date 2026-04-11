__d(
  "WAWebCustomUrlLogEvents",
  [
    "WAWebBusinessInteractionWamEvent",
    "WAWebComposeBoxActions",
    "WAWebUtilsPnhSmbLoggingHelper",
    "WAWebWamEnumBusinessInteractionActionType",
    "WAWebWamEnumBusinessInteractionEntryPointApp",
    "WAWebWamEnumBusinessInteractionEntryPointSource",
    "WAWebWamEnumBusinessInteractionTargetScreenType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      new (o("WAWebBusinessInteractionWamEvent").BusinessInteractionWamEvent)({
        businessInteractionAction: o(
          "WAWebWamEnumBusinessInteractionActionType",
        ).BUSINESS_INTERACTION_ACTION_TYPE.ACTION_CLICK,
        businessInteractionTargetScreen: o(
          "WAWebWamEnumBusinessInteractionTargetScreenType",
        ).BUSINESS_INTERACTION_TARGET_SCREEN_TYPE.INDIVIDUAL_CHAT,
        businessJid: o("WAWebUtilsPnhSmbLoggingHelper").jidToPnString(e.id),
        entryPointApp: o("WAWebWamEnumBusinessInteractionEntryPointApp")
          .BUSINESS_INTERACTION_ENTRY_POINT_APP.WHATSAPP,
        entryPointSource: o("WAWebWamEnumBusinessInteractionEntryPointSource")
          .BUSINESS_INTERACTION_ENTRY_POINT_SOURCE.CUSTOM_LINK,
      }).commit();
    }
    function s(e) {
      o("WAWebComposeBoxActions").ComposeBoxActions.addMsgSendingLogAttributes(
        e,
        {
          handleOnce: function () {
            new (o(
              "WAWebBusinessInteractionWamEvent",
            ).BusinessInteractionWamEvent)({
              businessInteractionAction: o(
                "WAWebWamEnumBusinessInteractionActionType",
              ).BUSINESS_INTERACTION_ACTION_TYPE.ACTION_MSG_SENT,
              businessJid: o("WAWebUtilsPnhSmbLoggingHelper").jidToPnString(
                e.id,
              ),
              entryPointApp: o("WAWebWamEnumBusinessInteractionEntryPointApp")
                .BUSINESS_INTERACTION_ENTRY_POINT_APP.WHATSAPP,
              entryPointSource: o(
                "WAWebWamEnumBusinessInteractionEntryPointSource",
              ).BUSINESS_INTERACTION_ENTRY_POINT_SOURCE.CUSTOM_LINK,
            }).commit();
          },
        },
      );
    }
    ((l.logClickOnCustomUrl = e), (l.logMessageSentByCustomUrl = s));
  },
  98,
);
