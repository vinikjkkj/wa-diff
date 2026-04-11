__d(
  "WAWebPsStructuredMessageInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PsStructuredMessageInteraction: [
            3052,
            {
              bizPlatform: [1, o("WAWebWamEnumBizPlatform").BIZ_PLATFORM],
              businessOwnerJid: [7, e.TYPES.STRING],
              messageClass: [
                3,
                o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS,
              ],
              messageClassAttributes: [5, e.TYPES.STRING],
              messageInteraction: [
                4,
                o("WAWebWamEnumInteractionType").INTERACTION_TYPE,
              ],
              messageMediaType: [2, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              templateId: [8, e.TYPES.STRING],
              threadIdHmac: [9, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            0,
          ],
        },
        { PsStructuredMessageInteraction: [] },
      );
    l.PsStructuredMessageInteractionWamEvent = s;
  },
  98,
);
