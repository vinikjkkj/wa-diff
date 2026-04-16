__d(
  "WAWebTsNavigationWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumEntryPointConversationInitiated",
    "WAWebWamEnumProductArea",
    "WAWebWamEnumRadioType",
    "WAWebWamEnumReferrerAction",
    "WAWebWamEnumThreadType",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumTypeOfGroupEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          TsNavigation: [
            4334,
            {
              aiSessionId: [39, e.TYPES.STRING],
              canonicalEntLastValidationTsMs: [38, e.TYPES.INTEGER],
              cid: [19, e.TYPES.STRING],
              entryPointConversationInitiated: [
                23,
                o("WAWebWamEnumEntryPointConversationInitiated")
                  .ENTRY_POINT_CONVERSATION_INITIATED,
              ],
              entryPointConversionApp: [24, e.TYPES.STRING],
              entryPointConversionSource: [25, e.TYPES.STRING],
              groupSize: [1, e.TYPES.INTEGER],
              isCanonicalEntPresent: [36, e.TYPES.BOOLEAN],
              isCatalogVisible: [29, e.TYPES.BOOLEAN],
              isCloudapi: [26, e.TYPES.BOOLEAN],
              isMetaAiThread: [30, e.TYPES.BOOLEAN],
              isOnpremises: [27, e.TYPES.BOOLEAN],
              isSmb: [28, e.TYPES.BOOLEAN],
              navigationDestination: [2, o("WAWebWamEnumTsSurface").TS_SURFACE],
              navigationDestinationProductArea: [
                34,
                o("WAWebWamEnumProductArea").PRODUCT_AREA,
              ],
              navigationDestinationViewName: [35, e.TYPES.STRING],
              navigationSource: [3, o("WAWebWamEnumTsSurface").TS_SURFACE],
              networkIsWifiOpNumber: [41, e.TYPES.INTEGER],
              networkRadioTypeEventLevel: [
                40,
                o("WAWebWamEnumRadioType").RADIO_TYPE,
              ],
              networkRadioTypeOpNumber: [42, e.TYPES.INTEGER],
              referrerAction: [
                31,
                o("WAWebWamEnumReferrerAction").REFERRER_ACTION,
              ],
              relativeTimestampMs: [4, e.TYPES.INTEGER],
              smbCatalogBusinessVertical: [20, e.TYPES.STRING],
              smbCatalogIsCatalogVisible: [21, e.TYPES.BOOLEAN],
              smbCatalogIsToggleCart: [22, e.TYPES.BOOLEAN],
              threadType: [7, o("WAWebWamEnumThreadType").THREAD_TYPE],
              traceIdInt: [37, e.TYPES.INTEGER],
              tsSessionId: [5, e.TYPES.INTEGER],
              tsTimestampMs: [32, e.TYPES.INTEGER],
              typeOfGroup: [
                6,
                o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM,
              ],
              unifiedSessionId: [33, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { TsNavigation: [] },
      );
    l.TsNavigationWamEvent = s;
  },
  98,
);
