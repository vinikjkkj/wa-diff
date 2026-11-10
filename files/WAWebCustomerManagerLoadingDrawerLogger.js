__d(
  "WAWebCustomerManagerLoadingDrawerLogger",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.loadFailed,
        n = e.waitMs;
      (o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: babelHelpers.extends(
          { load_failed: t },
          n != null ? { wait_ms: n } : {},
        ),
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .CUSTOMER_MANAGER,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "loading_drawer",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      }),
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.clearEntryPoint(
          o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
            .CUSTOMER_MANAGER,
        ));
    }
    l.dismissLoadingDrawer = e;
  },
  98,
);
