__d(
  "WAWebCustomerManagerBusinessToolsTileLogger",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BUSINESS_TOOLS,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .CUSTOMER_MANAGER,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BUSINESS_HOME_PAGE,
        userActionTarget: "business_tools_tile",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    l.clickBusinessToolsTile = e;
  },
  98,
);
