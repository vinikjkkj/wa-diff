__d(
  "WAWebSmbDataSharingConsentScreenWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumSmbDataSharingConsentScreenType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        SmbDataSharingConsentScreen: [
          3972,
          {
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
            smbDataSharingConsentScreenVersion: [
              2,
              o("WAWebWamCodegenUtils").TYPES.INTEGER,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { SmbDataSharingConsentScreen: [] },
    );
    l.SmbDataSharingConsentScreenWamEvent = e;
  },
  98,
);
