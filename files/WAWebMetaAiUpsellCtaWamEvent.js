__d(
  "WAWebMetaAiUpsellCtaWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMetaAiUpsellCtaOperationType",
    "WAWebWamEnumMetaAiUpsellCtaSourceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        MetaAiUpsellCta: [
          6532,
          {
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
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { MetaAiUpsellCta: [] },
    );
    l.MetaAiUpsellCtaWamEvent = e;
  },
  98,
);
