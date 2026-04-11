__d(
  "WAWebCtwaLabelSignalWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCtwaLabelTarget",
    "WAWebWamEnumCtwaLabelType",
    "WAWebWamEnumCustomerAdsSharingSettingEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          CtwaLabelSignal: [
            4662,
            {
              ctwaConversationDepth: [11, e.TYPES.INTEGER],
              ctwaLabelSignalVersion: [1, e.TYPES.INTEGER],
              ctwaLabelTarget: [
                2,
                o("WAWebWamEnumCtwaLabelTarget").CTWA_LABEL_TARGET,
              ],
              ctwaLabelType: [
                3,
                o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE,
              ],
              ctwaSignalMetadata: [9, e.TYPES.STRING],
              customerAdsSharingSettingEnabled: [
                10,
                o("WAWebWamEnumCustomerAdsSharingSettingEnabled")
                  .CUSTOMER_ADS_SHARING_SETTING_ENABLED,
              ],
              deepLinkConversionData: [4, e.TYPES.STRING],
              deepLinkConversionSource: [5, e.TYPES.STRING],
              eventSharingSettingEnabled: [6, e.TYPES.BOOLEAN],
              globalSharingSettingEnabled: [7, e.TYPES.BOOLEAN],
              threadIdHmac: [8, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { CtwaLabelSignal: [] },
      );
    l.CtwaLabelSignalWamEvent = s;
  },
  98,
);
