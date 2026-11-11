__d(
  "WAWebCustomerManagerColumnWamPayload",
  ["WAWebWamEnumSmbUserActionTypeEnum", "WAWebWamEnumSurfaceType"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return {
        extraAttributes: { from_index: t, to_index: n },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_COLUMNS_MENU,
        userActionTarget:
          e === "drag" ? "column_reorder_drag" : "column_reorder_keyboard",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      };
    }
    function s(e, t, n) {
      return {
        extraAttributes: { column_key: t, width_px: Math.round(n) },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_COLUMNS_MENU,
        userActionTarget:
          e === "drag" ? "column_resize_drag" : "column_resize_keyboard",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      };
    }
    ((l.columnReorder = e), (l.columnResize = s));
  },
  98,
);
