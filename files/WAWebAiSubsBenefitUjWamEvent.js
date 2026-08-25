__d(
  "WAWebAiSubsBenefitUjWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAiSubComponent",
    "WAWebWamEnumAiSubEntrypoint",
    "WAWebWamEnumAiSubScreen",
    "WAWebWamEnumAiSubUserAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        AiSubsBenefitUj: [
          8220,
          {
            aiSubComponent: [
              1,
              o("WAWebWamEnumAiSubComponent").AI_SUB_COMPONENT,
            ],
            aiSubEntrypoint: [
              2,
              o("WAWebWamEnumAiSubEntrypoint").AI_SUB_ENTRYPOINT,
            ],
            aiSubScreen: [3, o("WAWebWamEnumAiSubScreen").AI_SUB_SCREEN],
            aiSubSessionId: [6, o("WAWebWamCodegenUtils").TYPES.STRING],
            aiSubUserAction: [
              4,
              o("WAWebWamEnumAiSubUserAction").AI_SUB_USER_ACTION,
            ],
            aiSubscriptionTier: [5, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { AiSubsBenefitUj: [] },
    );
    l.AiSubsBenefitUjWamEvent = e;
  },
  98,
);
