__d(
  "WAWebCustomerManagerColumnJourneyEvents",
  [
    "WAWebCustomerManagerColumnWamPayload",
    "WAWebCustomerManagerWamLogging",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerColumnWamPayload").columnReorder("drag", e, t),
      );
    }
    function s(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerColumnWamPayload").columnReorder(
          "keyboard",
          e,
          t,
        ),
      );
    }
    function u(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerColumnWamPayload").columnResize("drag", e, t),
      );
    }
    function c(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerColumnWamPayload").columnResize(
          "keyboard",
          e,
          t,
        ),
      );
    }
    function d(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { visible_column_count: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_COLUMNS_MENU,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function m(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { column_key: e, new_state: t },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_COLUMNS_MENU,
        userActionTarget: "column_toggle_" + e,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      });
    }
    function p(e, t, n) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: {
          column_key: e,
          direction: t,
          prev_sort_column: n != null ? n : null,
        },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "column_header_" + e,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    ((l.editColumnReorderDrag = e),
      (l.editColumnReorderKeyboard = s),
      (l.editColumnResizeDrag = u),
      (l.editColumnResizeKeyboard = c),
      (l.viewColumnsMenu = d),
      (l.editColumnToggle = m),
      (l.clickColumnHeader = p));
  },
  98,
);
