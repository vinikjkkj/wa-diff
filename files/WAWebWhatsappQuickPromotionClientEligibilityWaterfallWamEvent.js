__d(
  "WAWebWhatsappQuickPromotionClientEligibilityWaterfallWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WhatsappQuickPromotionClientEligibilityWaterfall: [
            4360,
            {
              clientExtraData: [6, e.TYPES.STRING],
              eligibilityStatus: [1, e.TYPES.BOOLEAN],
              instanceLogData: [5, e.TYPES.STRING],
              promotionId: [2, e.TYPES.STRING],
              qpFailureReason: [3, e.TYPES.STRING],
              step: [4, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WhatsappQuickPromotionClientEligibilityWaterfall: [] },
      );
    l.WhatsappQuickPromotionClientEligibilityWaterfallWamEvent = s;
  },
  98,
);
