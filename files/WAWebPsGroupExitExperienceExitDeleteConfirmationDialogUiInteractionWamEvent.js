__d(
  "WAWebPsGroupExitExperienceExitDeleteConfirmationDialogUiInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupExitExperienceOrigin",
    "WAWebWamEnumPsGroupExitExperienceDeleteConfirmationDialogActions",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        PsGroupExitExperienceExitDeleteConfirmationDialogUiInteraction: [
          6316,
          {
            psGroupExitExperienceDeleteConfirmationDialogAction: [
              1,
              o(
                "WAWebWamEnumPsGroupExitExperienceDeleteConfirmationDialogActions",
              ).PS_GROUP_EXIT_EXPERIENCE_DELETE_CONFIRMATION_DIALOG_ACTIONS,
            ],
            psGroupExitExperienceGroupJid: [
              2,
              o("WAWebWamCodegenUtils").TYPES.STRING,
            ],
            psGroupExitExperienceTouchPoint: [
              4,
              o("WAWebWamEnumGroupExitExperienceOrigin")
                .GROUP_EXIT_EXPERIENCE_ORIGIN,
            ],
          },
          [1, 1, 1],
          "private",
          152546501,
        ],
      },
      { PsGroupExitExperienceExitDeleteConfirmationDialogUiInteraction: [] },
    );
    l.PsGroupExitExperienceExitDeleteConfirmationDialogUiInteractionWamEvent =
      e;
  },
  98,
);
