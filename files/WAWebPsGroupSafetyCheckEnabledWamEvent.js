__d(
  "WAWebPsGroupSafetyCheckEnabledWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PsGroupSafetyCheckEnabled: [
            6238,
            {
              didJoinByGil: [3, e.TYPES.BOOLEAN],
              integrityGroupUserHashedId: [4, e.TYPES.STRING],
              psSafetyCheckGroupJid: [1, e.TYPES.STRING],
              psWasSafetyCheckGroupInitiallyMuted: [2, e.TYPES.BOOLEAN],
              wasAddedByContact: [5, e.TYPES.BOOLEAN],
              willSafetyCheckBeSeen: [6, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "private",
            216763284,
          ],
        },
        { PsGroupSafetyCheckEnabled: [] },
      );
    l.PsGroupSafetyCheckEnabledWamEvent = s;
  },
  98,
);
