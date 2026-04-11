__d(
  "WAWebPsGroupOpenedWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PsGroupOpened: [
            6236,
            {
              integrityGroupUserHashedId: [4, e.TYPES.STRING],
              isGroupSafetyCheckAbpropEnabled: [2, e.TYPES.BOOLEAN],
              isPartOfGroupSafetyCheckExperiment: [3, e.TYPES.BOOLEAN],
              openedGroupJid: [1, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            216763284,
          ],
        },
        { PsGroupOpened: [] },
      );
    l.PsGroupOpenedWamEvent = s;
  },
  98,
);
