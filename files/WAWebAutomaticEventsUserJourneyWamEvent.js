__d(
  "WAWebAutomaticEventsUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAutomaticEventsTargetComponentEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          AutomaticEventsUserJourney: [
            6636,
            {
              aeOffboardingSurveyOtherText: [6, e.TYPES.STRING],
              automaticEventsTargetComponent: [
                1,
                o("WAWebWamEnumAutomaticEventsTargetComponentEnum")
                  .AUTOMATIC_EVENTS_TARGET_COMPONENT_ENUM,
              ],
              dedupKey: [5, e.TYPES.INTEGER],
              extraAttributes: [4, e.TYPES.STRING],
              smbUserActionType: [
                2,
                o("WAWebWamEnumSmbUserActionTypeEnum")
                  .SMB_USER_ACTION_TYPE_ENUM,
              ],
              surface: [3, o("WAWebWamEnumSurfaceType").SURFACE_TYPE],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { AutomaticEventsUserJourney: [] },
      );
    l.AutomaticEventsUserJourneyWamEvent = s;
  },
  98,
);
