__d(
  "WAWebSmbDataSharingConsentScreenWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumSmbDataSharingConsentScreenType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SmbDataSharingConsentScreen: [
            3972,
            {
              elapsedTimeMs: [4, e.TYPES.INTEGER],
              previousImpressionCount: [5, e.TYPES.INTEGER],
              previousOptOutImpressionCount: [6, e.TYPES.INTEGER],
              smbDataSharingConsentScreenEntryPoint: [
                3,
                o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
                  .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT,
              ],
              smbDataSharingConsentScreenType: [
                1,
                o("WAWebWamEnumSmbDataSharingConsentScreenType")
                  .SMB_DATA_SHARING_CONSENT_SCREEN_TYPE,
              ],
              smbDataSharingConsentScreenVersion: [2, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { SmbDataSharingConsentScreen: [] },
      );
    l.SmbDataSharingConsentScreenWamEvent = s;
  },
  98,
);
