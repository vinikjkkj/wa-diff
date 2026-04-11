__d(
  "WAWebPsGroupSafetyCheckUiInteractionsWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumPsGroupSafetyCheckUiInteractions"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        PsGroupSafetyCheckUiInteractions: [
          6242,
          {
            integrityGroupUserHashedId: [
              3,
              o("WAWebWamCodegenUtils").TYPES.STRING,
            ],
            psSafetyCheckGroupJid: [1, o("WAWebWamCodegenUtils").TYPES.STRING],
            psSafetyCheckInteraction: [
              2,
              o("WAWebWamEnumPsGroupSafetyCheckUiInteractions")
                .PS_GROUP_SAFETY_CHECK_UI_INTERACTIONS,
            ],
          },
          [1, 1, 1],
          "private",
          216763284,
        ],
      },
      { PsGroupSafetyCheckUiInteractions: [] },
    );
    l.PsGroupSafetyCheckUiInteractionsWamEvent = e;
  },
  98,
);
