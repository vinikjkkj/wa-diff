__d(
  "WAWebContactNotificationSettingUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumContactNotificationSettingActionType",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ContactNotificationSettingUserJourney: [
            5304,
            {
              appSessionId: [1, e.TYPES.STRING],
              contactNotificationSettingActionType: [
                2,
                o("WAWebWamEnumContactNotificationSettingActionType")
                  .CONTACT_NOTIFICATION_SETTING_ACTION_TYPE,
              ],
              dedupKey: [5, e.TYPES.INTEGER],
              groupSize: [3, e.TYPES.INTEGER],
              uiSurface: [4, o("WAWebWamEnumTsSurface").TS_SURFACE],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ContactNotificationSettingUserJourney: [] },
      );
    l.ContactNotificationSettingUserJourneyWamEvent = s;
  },
  98,
);
