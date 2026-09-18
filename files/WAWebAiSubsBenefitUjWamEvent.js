__d(
  "WAWebAiSubsBenefitUjWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAiSubBlockSource",
    "WAWebWamEnumAiSubComponent",
    "WAWebWamEnumAiSubEntrypoint",
    "WAWebWamEnumAiSubScreen",
    "WAWebWamEnumAiSubUserAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          AiSubsBenefitUj: [
            8220,
            {
              aiSubBlockSource: [
                8,
                o("WAWebWamEnumAiSubBlockSource").AI_SUB_BLOCK_SOURCE,
              ],
              aiSubComponent: [
                1,
                o("WAWebWamEnumAiSubComponent").AI_SUB_COMPONENT,
              ],
              aiSubEntrypoint: [
                2,
                o("WAWebWamEnumAiSubEntrypoint").AI_SUB_ENTRYPOINT,
              ],
              aiSubScreen: [3, o("WAWebWamEnumAiSubScreen").AI_SUB_SCREEN],
              aiSubSessionId: [6, e.TYPES.STRING],
              aiSubUserAction: [
                4,
                o("WAWebWamEnumAiSubUserAction").AI_SUB_USER_ACTION,
              ],
              aiSubWaffleLinked: [9, e.TYPES.BOOLEAN],
              aiSubscriptionTier: [5, e.TYPES.STRING],
              dedupKey: [7, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { AiSubsBenefitUj: [] },
      );
    l.AiSubsBenefitUjWamEvent = s;
  },
  98,
);
