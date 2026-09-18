__d(
  "WAWebSmbDataSharingConsentSettingWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumSmbDataSharingConsentSettingEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SmbDataSharingConsentSetting: [
            3974,
            {
              dedupKey: [4, e.TYPES.INTEGER],
              smbDataSharingConsentSettingEntryPoint: [
                1,
                o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
                  .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT,
              ],
              smbDataSharingConsentSettingType: [2, e.TYPES.BOOLEAN],
              smbDataSharingConsentSettingVersion: [3, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { SmbDataSharingConsentSetting: [] },
      );
    l.SmbDataSharingConsentSettingWamEvent = s;
  },
  98,
);
