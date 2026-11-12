__d(
  "WAWebCustomerManagerProfileWamLogging",
  [
    "WALogger",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSurfaceType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      try {
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
          babelHelpers.extends({}, t, {
            featureName: o("WAWebWamEnumSmbFeatureNameEnum")
              .SMB_FEATURE_NAME_ENUM.CUSTOMER_MANAGER,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
              .CUSTOMER_MANAGER_PROFILE_DRAWER,
          }),
        );
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[CustomerManager] profile telemetry failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("customer-manager-profile-telemetry-failed");
      }
    }
    l.logProfileAction = s;
  },
  98,
);
