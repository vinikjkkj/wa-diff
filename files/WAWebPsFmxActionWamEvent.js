__d(
  "WAWebPsFmxActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCallerDisplayNameType",
    "WAWebWamEnumFmxBusinessHoldoutGroup",
    "WAWebWamEnumFmxEntryPoint",
    "WAWebWamEnumFmxEvent",
    "WAWebWamEnumHighlightGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PsFmxAction: [
            7054,
            {
              commonGroupNum: [1, e.TYPES.INTEGER],
              countryShown: [2, e.TYPES.BOOLEAN],
              fmxBusinessHoldoutGroup: [
                11,
                o("WAWebWamEnumFmxBusinessHoldoutGroup")
                  .FMX_BUSINESS_HOLDOUT_GROUP,
              ],
              fmxConsumerRedesignVariant: [17, e.TYPES.INTEGER],
              fmxDisplayNameType: [
                18,
                o("WAWebWamEnumCallerDisplayNameType").CALLER_DISPLAY_NAME_TYPE,
              ],
              fmxEntryPoint: [
                3,
                o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT,
              ],
              fmxEvent: [4, o("WAWebWamEnumFmxEvent").FMX_EVENT],
              foaMutualsCount: [14, e.TYPES.INTEGER],
              foaMutualsFbCount: [15, e.TYPES.INTEGER],
              foaMutualsIgCount: [16, e.TYPES.INTEGER],
              foaMutualsShown: [13, e.TYPES.BOOLEAN],
              highlightGroupType: [
                5,
                o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE,
              ],
              isDifferentCountry: [10, e.TYPES.BOOLEAN],
              isSenderBiz: [12, e.TYPES.BOOLEAN],
              isSenderSmb: [6, e.TYPES.BOOLEAN],
              isSuspiciousFmx: [8, e.TYPES.BOOLEAN],
              newAccountShown: [9, e.TYPES.BOOLEAN],
              notAContactShown: [7, e.TYPES.BOOLEAN],
              profilePhotoShown: [19, e.TYPES.BOOLEAN],
              senderHasPushName: [20, e.TYPES.BOOLEAN],
              senderPushNameCharLength: [21, e.TYPES.INTEGER],
              senderPushNameEmojiCount: [22, e.TYPES.INTEGER],
              senderPushNameNumberCount: [23, e.TYPES.INTEGER],
              senderPushNameSpecialCharCount: [24, e.TYPES.INTEGER],
              senderPushNameWordCount: [25, e.TYPES.INTEGER],
              usernameShown: [26, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { PsFmxAction: [] },
      );
    l.PsFmxActionWamEvent = s;
  },
  98,
);
