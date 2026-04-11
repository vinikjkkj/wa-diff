__d(
  "WAWebPsRichOrderStatusMessageInconsistentPayloadReceivedWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PsRichOrderStatusMessageInconsistentPayloadReceived: [
            6938,
            {
              businessJid: [1, e.TYPES.STRING],
              hasCurrencyChanged: [2, e.TYPES.BOOLEAN],
              hasHeaderImageChanged: [3, e.TYPES.BOOLEAN],
              hasItemImageChanged: [4, e.TYPES.BOOLEAN],
              hasItemNameChanged: [5, e.TYPES.BOOLEAN],
              hasItemNumberChanged: [6, e.TYPES.BOOLEAN],
              hasItemPriceChanged: [7, e.TYPES.BOOLEAN],
              hasItemQuantityChanged: [8, e.TYPES.BOOLEAN],
              hasItemVariantChanged: [9, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { PsRichOrderStatusMessageInconsistentPayloadReceived: [] },
      );
    l.PsRichOrderStatusMessageInconsistentPayloadReceivedWamEvent = s;
  },
  98,
);
