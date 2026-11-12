__d(
  "WAWebCustomerManagerImportWamPayload",
  ["WAWebWamEnumSmbUserActionTypeEnum", "WAWebWamEnumSurfaceType"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return babelHelpers.extends({}, t != null ? { extraAttributes: t } : {}, {
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: e,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function s(e, t) {
      return {
        extraAttributes: babelHelpers.extends({}, t, {
          dismiss_method: "escape",
        }),
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: e,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      };
    }
    ((l.importClick = e), (l.importEscapeDismiss = s));
  },
  98,
);
