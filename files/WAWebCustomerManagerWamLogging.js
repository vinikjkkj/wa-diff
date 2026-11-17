__d(
  "WAWebCustomerManagerWamLogging",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
        babelHelpers.extends({}, e, {
          featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
            .CUSTOMER_MANAGER,
        }),
      );
    }
    function s(e) {
      return e === "pipeline"
        ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CUSTOMER_MANAGER_PIPELINE
        : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CUSTOMER_MANAGER_LIST;
    }
    ((l.logCustomerManagerJourney = e), (l.viewSurface = s));
  },
  98,
);
