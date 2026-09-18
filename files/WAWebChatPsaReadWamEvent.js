__d(
  "WAWebChatPsaReadWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumReadEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChatPsaRead: [
            3574,
            {
              dedupKey: [6, e.TYPES.INTEGER],
              messageMediaType: [1, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              psaCampaignId: [4, e.TYPES.STRING],
              psaMsgId: [5, e.TYPES.STRING],
              readEntryPoint: [
                3,
                o("WAWebWamEnumReadEntryPoint").READ_ENTRY_POINT,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChatPsaRead: [] },
      );
    l.ChatPsaReadWamEvent = s;
  },
  98,
);
