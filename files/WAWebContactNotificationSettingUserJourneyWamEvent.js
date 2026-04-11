__d(
  "WAWebContactNotificationSettingUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumContactNotificationSettingActionType",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ContactNotificationSettingUserJourney: [
          5304,
          {
            appSessionId: [1, o("WAWebWamCodegenUtils").TYPES.STRING],
            contactNotificationSettingActionType: [
              2,
              o("WAWebWamEnumContactNotificationSettingActionType")
                .CONTACT_NOTIFICATION_SETTING_ACTION_TYPE,
            ],
            groupSize: [3, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            uiSurface: [4, o("WAWebWamEnumTsSurface").TS_SURFACE],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { ContactNotificationSettingUserJourney: [] },
    );
    l.ContactNotificationSettingUserJourneyWamEvent = e;
  },
  98,
);
