__d(
  "WAWebCustomerManagerEntryExitJourneyEvents",
  [
    "WAWebCustomerManagerWamLogging",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (!t) {
        e != null &&
          o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.setEntryPoint(
            e,
            o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
              .CUSTOMER_MANAGER,
          );
        return;
      }
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        babelHelpers.extends({}, e != null ? { entryPoint: e } : {}, {
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
            .CUSTOMER_MANAGER_LIST,
          userActionTarget: "customer_manager_entry",
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.ENTER,
        }),
      );
    }
    function s(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: "customer_manager_exit",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      });
    }
    ((l.enterCustomerManager = e), (l.exitCustomerManager = s));
  },
  98,
);
