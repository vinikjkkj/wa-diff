__d(
  "WAWebPsGroupSafetyCheckSheetSeenWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        PsGroupSafetyCheckSheetSeen: [
          6240,
          {
            integrityGroupUserHashedId: [
              2,
              o("WAWebWamCodegenUtils").TYPES.STRING,
            ],
            psSafetyCheckGroupJid: [1, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "private",
          216763284,
        ],
      },
      { PsGroupSafetyCheckSheetSeen: [] },
    );
    l.PsGroupSafetyCheckSheetSeenWamEvent = e;
  },
  98,
);
