__d(
  "WAWebCatalogLogEvents",
  [
    "$InternalEnum",
    "WAWebBizGatingUtils",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      Country: "country",
      Continue: "continue",
      Back: "back",
      Save: "save",
    });
    function s(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        surface: e
          ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE.ADD_ITEM
          : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.EDIT_ITEM,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .CATALOG,
      });
    }
    function u() {
      o("WAWebBizGatingUtils").isCountryOfOriginEnabled() &&
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.CLICK,
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.PRODUCT_DETAILS,
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.ADD_EDIT_PRODUCT,
          featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
            .CATALOG,
          userActionTarget: e.Save,
        });
    }
    function c() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.ORIGIN_COUNTRY,
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.ADD_EDIT_PRODUCT,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .CATALOG,
      });
    }
    function d() {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.IMPORTER_COUNTRY,
        entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.ADD_EDIT_PRODUCT,
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .CATALOG,
      });
    }
    function m(e, t, n) {
      if (o("WAWebBizGatingUtils").isCountryOfOriginEnabled()) {
        var r =
          n != null &&
          e === o("WAWebWamEnumSurfaceType").SURFACE_TYPE.ORIGIN_COUNTRY
            ? n
            : void 0;
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.CLICK,
          surface: e,
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.ADD_EDIT_PRODUCT,
          featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
            .CATALOG,
          userActionTarget: t,
          extraAttributes: r,
        });
      }
    }
    ((l.SmbUserActionTargetEnum = e),
      (l.logAddEditProductDetailsViewed = s),
      (l.logSMBAddEditProductDetailsSaveClicked = u),
      (l.logAddEditCountryOfOriginViewed = c),
      (l.logAddEditImporterCountryListViewed = d),
      (l.logSMBCountryListClicked = m));
  },
  98,
);
