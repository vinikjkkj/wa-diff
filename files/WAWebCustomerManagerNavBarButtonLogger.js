__d(
  "WAWebCustomerManagerNavBarButtonLogger",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      (e === void 0 && (e = !1),
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
          babelHelpers.extends(
            {},
            e
              ? {}
              : { entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.NAV_BAR },
            {
              extraAttributes: { already_open: e },
              featureName: o("WAWebWamEnumSmbFeatureNameEnum")
                .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
              surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
              userActionTarget: "nav_bar_button",
              userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
                .SMB_USER_ACTION_TYPE_ENUM.CLICK,
            },
          ),
        ));
    }
    l.clickNavBarButton = e;
  },
  98,
);
