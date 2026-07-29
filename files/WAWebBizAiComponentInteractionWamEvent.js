__d(
  "WAWebBizAiComponentInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBizAiAssetMaterializationFailureType",
    "WAWebWamEnumBizAiRenderOutcomeType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          BizAiComponentInteraction: [
            8490,
            {
              bizAiAssetMaterializationAssetId: [5, e.TYPES.STRING],
              bizAiAssetMaterializationAssetType: [6, e.TYPES.STRING],
              bizAiAssetMaterializationFailureType: [
                7,
                o("WAWebWamEnumBizAiAssetMaterializationFailureType")
                  .BIZ_AI_ASSET_MATERIALIZATION_FAILURE_TYPE,
              ],
              bizAiButtonAction: [1, e.TYPES.STRING],
              bizAiClientHasFallbackText: [11, e.TYPES.BOOLEAN],
              bizAiComponentType: [2, e.TYPES.STRING],
              bizAiErrorDetail: [3, e.TYPES.STRING],
              bizAiMessageUuid: [8, e.TYPES.STRING],
              bizAiRenderOutcome: [
                4,
                o("WAWebWamEnumBizAiRenderOutcomeType")
                  .BIZ_AI_RENDER_OUTCOME_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { BizAiComponentInteraction: [] },
      );
    l.BizAiComponentInteractionWamEvent = s;
  },
  98,
);
