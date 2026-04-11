__d(
  "WAWebWebcBackgroundSyncAdoptionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumOffboardSources",
    "WAWebWamEnumOnboardSources",
    "WAWebWamEnumPushNotificationInteractions",
    "WAWebWamEnumWebNotificationSettingType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebcBackgroundSyncAdoption: [
          5302,
          {
            offboardSource: [
              1,
              o("WAWebWamEnumOffboardSources").OFFBOARD_SOURCES,
            ],
            onboardSource: [2, o("WAWebWamEnumOnboardSources").ONBOARD_SOURCES],
            pushNotificationInteraction: [
              3,
              o("WAWebWamEnumPushNotificationInteractions")
                .PUSH_NOTIFICATION_INTERACTIONS,
            ],
            webOsNotificationSetting: [
              4,
              o("WAWebWamEnumWebNotificationSettingType")
                .WEB_NOTIFICATION_SETTING_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebcBackgroundSyncAdoption: [] },
    );
    l.WebcBackgroundSyncAdoptionWamEvent = e;
  },
  98,
);
