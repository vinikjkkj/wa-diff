__d(
  "WAWebChatPsaActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumPsaMessageActionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ChatPsaAction: [
          3572,
          {
            messageMediaType: [1, o("WAWebWamEnumMediaType").MEDIA_TYPE],
            psaCampaignId: [4, o("WAWebWamCodegenUtils").TYPES.STRING],
            psaMessageActionType: [
              2,
              o("WAWebWamEnumPsaMessageActionType").PSA_MESSAGE_ACTION_TYPE,
            ],
            psaMsgId: [5, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { ChatPsaAction: [] },
    );
    l.ChatPsaActionWamEvent = e;
  },
  98,
);
