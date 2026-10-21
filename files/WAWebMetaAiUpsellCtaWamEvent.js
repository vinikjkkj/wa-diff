__d(
  "WAWebMetaAiUpsellCtaWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMetaAiReadOnlyReasonType",
    "WAWebWamEnumMetaAiUpsellCtaOperationType",
    "WAWebWamEnumMetaAiUpsellCtaSourceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MetaAiUpsellCta: [
            6532,
            {
              dedupKey: [3, e.TYPES.INTEGER],
              metaAiReadOnlyReason: [
                5,
                o("WAWebWamEnumMetaAiReadOnlyReasonType")
                  .META_AI_READ_ONLY_REASON_TYPE,
              ],
              metaAiUpsellCtaOperation: [
                1,
                o("WAWebWamEnumMetaAiUpsellCtaOperationType")
                  .META_AI_UPSELL_CTA_OPERATION_TYPE,
              ],
              metaAiUpsellCtaSource: [
                2,
                o("WAWebWamEnumMetaAiUpsellCtaSourceType")
                  .META_AI_UPSELL_CTA_SOURCE_TYPE,
              ],
              proactiveMessageCampaignId: [6, e.TYPES.STRING],
              upsellBannerVariant: [4, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MetaAiUpsellCta: [] },
      );
    l.MetaAiUpsellCtaWamEvent = s;
  },
  98,
);
