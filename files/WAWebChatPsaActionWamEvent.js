__d(
  "WAWebChatPsaActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumPsaMessageActionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChatPsaAction: [
            3572,
            {
              dedupKey: [6, e.TYPES.INTEGER],
              messageMediaType: [1, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              psaCampaignId: [4, e.TYPES.STRING],
              psaMessageActionType: [
                2,
                o("WAWebWamEnumPsaMessageActionType").PSA_MESSAGE_ACTION_TYPE,
              ],
              psaMsgId: [5, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChatPsaAction: [] },
      );
    l.ChatPsaActionWamEvent = s;
  },
  98,
);
