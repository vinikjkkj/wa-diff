__d(
  "WAWebPsGroupExitExperienceGroupActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupExitExperienceOrigin",
    "WAWebWamEnumPsGroupExitExperienceActions",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        PsGroupExitExperienceGroupAction: [
          6332,
          {
            psGroupExitExperienceAction: [
              1,
              o("WAWebWamEnumPsGroupExitExperienceActions")
                .PS_GROUP_EXIT_EXPERIENCE_ACTIONS,
            ],
            psGroupExitExperienceEnabled: [
              2,
              o("WAWebWamCodegenUtils").TYPES.BOOLEAN,
            ],
            psGroupExitExperienceGroupJid: [
              3,
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
      { PsGroupExitExperienceGroupAction: [] },
    );
    l.PsGroupExitExperienceGroupActionWamEvent = e;
  },
  98,
);
