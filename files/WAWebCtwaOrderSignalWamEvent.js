__d(
  "WAWebCtwaOrderSignalWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCustomerAdsSharingSettingEnabled",
    "WAWebWamEnumOrderSignalType",
    "WAWebWamEnumOrderStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CtwaOrderSignal: [
            4264,
            {
              ctwaOrderSignalVersion: [1, e.TYPES.INTEGER],
              ctwaSignalMetadata: [10, e.TYPES.STRING],
              customerAdsSharingSettingEnabled: [
                11,
                o("WAWebWamEnumCustomerAdsSharingSettingEnabled")
                  .CUSTOMER_ADS_SHARING_SETTING_ENABLED,
              ],
              deepLinkConversionData: [2, e.TYPES.STRING],
              deepLinkConversionSource: [3, e.TYPES.STRING],
              eventSharingSettingEnabled: [4, e.TYPES.BOOLEAN],
              globalSharingSettingEnabled: [5, e.TYPES.BOOLEAN],
              orderPaid: [8, e.TYPES.BOOLEAN],
              orderSignalType: [
                6,
                o("WAWebWamEnumOrderSignalType").ORDER_SIGNAL_TYPE,
              ],
              orderStatus: [7, o("WAWebWamEnumOrderStatus").ORDER_STATUS],
              threadIdHmac: [9, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CtwaOrderSignal: [] },
      );
    l.CtwaOrderSignalWamEvent = s;
  },
  98,
);
