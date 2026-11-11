__d(
  "WAWebCustomerManagerFilterWamPayload",
  ["WAWebWamEnumSmbUserActionTypeEnum", "WAWebWamEnumSurfaceType"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return (
        n === void 0 && (n = "list"),
        babelHelpers.extends({}, t != null ? { extraAttributes: t } : {}, {
          surface:
            n === "pipeline"
              ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                  .CUSTOMER_MANAGER_PIPELINE
              : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CUSTOMER_MANAGER_LIST,
          userActionTarget: e,
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.CLICK,
        })
      );
    }
    function s(e, t) {
      return (
        t === void 0 && (t = "list"),
        {
          extraAttributes: e,
          surface:
            t === "pipeline"
              ? o("WAWebWamEnumSurfaceType").SURFACE_TYPE
                  .CUSTOMER_MANAGER_PIPELINE
              : o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CUSTOMER_MANAGER_LIST,
          userActionTarget: "filter_menu",
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
        }
      );
    }
    ((l.filterClick = e), (l.filterDismiss = s));
  },
  98,
);
