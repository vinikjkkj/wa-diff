__d(
  "WAWebSmbDataSharingConsentSettingWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumSmbDataSharingConsentSettingEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        SmbDataSharingConsentSetting: [
          3974,
          {
            smbDataSharingConsentSettingEntryPoint: [
              1,
              o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT,
            ],
            smbDataSharingConsentSettingType: [
              2,
              o("WAWebWamCodegenUtils").TYPES.BOOLEAN,
            ],
            smbDataSharingConsentSettingVersion: [
              3,
              o("WAWebWamCodegenUtils").TYPES.INTEGER,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { SmbDataSharingConsentSetting: [] },
    );
    l.SmbDataSharingConsentSettingWamEvent = e;
  },
  98,
);
