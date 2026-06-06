__d(
  "WAWebSmbPerCustomerDataSharingControlWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumSmbPerCustomerDataSharingControlAction",
    "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SmbPerCustomerDataSharingControl: [
            8232,
            {
              smbPerCustomerDataSharingControlAction: [
                1,
                o("WAWebWamEnumSmbPerCustomerDataSharingControlAction")
                  .SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION,
              ],
              smbPerCustomerDataSharingControlActionOptInStatus: [
                2,
                e.TYPES.BOOLEAN,
              ],
              smbPerCustomerDataSharingControlCurrentOptInStatus: [
                3,
                e.TYPES.BOOLEAN,
              ],
              smbPerCustomerDataSharingControlEntryPoint: [
                4,
                o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint")
                  .SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT,
              ],
              smbPerCustomerDataSharingControlGlobalDataSharingEntryPoint: [
                6,
                o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
                  .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT,
              ],
              smbPerCustomerDataSharingControlOptInCustomerCount: [
                7,
                e.TYPES.INTEGER,
              ],
              smbPerCustomerDataSharingControlVersion: [5, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { SmbPerCustomerDataSharingControl: [] },
      );
    l.SmbPerCustomerDataSharingControlWamEvent = s;
  },
  98,
);
