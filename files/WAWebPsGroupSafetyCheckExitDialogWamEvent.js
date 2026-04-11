__d(
  "WAWebPsGroupSafetyCheckExitDialogWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumPsGroupSafetyCheckExitDialogActions"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        PsGroupSafetyCheckExitDialog: [
          6252,
          {
            integrityGroupUserHashedId: [
              3,
              o("WAWebWamCodegenUtils").TYPES.STRING,
            ],
            psGroupSafetyCheckExitDialogAction: [
              1,
              o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions")
                .PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS,
            ],
            psSafetyCheckGroupJid: [2, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "private",
          216763284,
        ],
      },
      { PsGroupSafetyCheckExitDialog: [] },
    );
    l.PsGroupSafetyCheckExitDialogWamEvent = e;
  },
  98,
);
