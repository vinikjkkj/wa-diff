__d(
  "WAWebChatPsaReadWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumReadEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ChatPsaRead: [
          3574,
          {
            messageMediaType: [1, o("WAWebWamEnumMediaType").MEDIA_TYPE],
            psaCampaignId: [4, o("WAWebWamCodegenUtils").TYPES.STRING],
            psaMsgId: [5, o("WAWebWamCodegenUtils").TYPES.STRING],
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
    l.ChatPsaReadWamEvent = e;
  },
  98,
);
