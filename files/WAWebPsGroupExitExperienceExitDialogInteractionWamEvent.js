__d(
  "WAWebPsGroupExitExperienceExitDialogInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupExitExperienceOrigin",
    "WAWebWamEnumPsGroupExitExperienceExitDialogActions",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PsGroupExitExperienceExitDialogInteraction: [
            6318,
            {
              psExitExperienceReportingEnabled: [1, e.TYPES.BOOLEAN],
              psGroupExitExperienceEnabled: [2, e.TYPES.BOOLEAN],
              psGroupExitExperienceExitDialogAction: [
                3,
                o("WAWebWamEnumPsGroupExitExperienceExitDialogActions")
                  .PS_GROUP_EXIT_EXPERIENCE_EXIT_DIALOG_ACTIONS,
              ],
              psGroupExitExperienceGroupJid: [4, e.TYPES.STRING],
              psGroupExitExperienceTouchPoint: [
                6,
                o("WAWebWamEnumGroupExitExperienceOrigin")
                  .GROUP_EXIT_EXPERIENCE_ORIGIN,
              ],
            },
            [1, 1, 1],
            "private",
            152546501,
          ],
        },
        { PsGroupExitExperienceExitDialogInteraction: [] },
      );
    l.PsGroupExitExperienceExitDialogInteractionWamEvent = s;
  },
  98,
);
