__d(
  "WAWebSmbPerCustomerDataSharingControlWamEvent",
  [
    "WAWebWamCodegenUtils",
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
