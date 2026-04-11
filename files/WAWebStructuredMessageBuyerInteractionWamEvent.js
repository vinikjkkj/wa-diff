__d(
  "WAWebStructuredMessageBuyerInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        StructuredMessageBuyerInteraction: [
          7518,
          {
            bizPlatform: [1, o("WAWebWamEnumBizPlatform").BIZ_PLATFORM],
            messageClass: [
              2,
              o("WAWebWamEnumStructuredMessageClass").STRUCTURED_MESSAGE_CLASS,
            ],
            messageClassAttributes: [3, o("WAWebWamCodegenUtils").TYPES.STRING],
            messageInteraction: [
              4,
              o("WAWebWamEnumInteractionType").INTERACTION_TYPE,
            ],
            messageMediaType: [5, o("WAWebWamEnumMediaType").MEDIA_TYPE],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { StructuredMessageBuyerInteraction: [] },
    );
    l.StructuredMessageBuyerInteractionWamEvent = e;
  },
  98,
);
