__d(
  "WAWebCustomerManagerColumnJourneyEvents",
  [
    "WAWebCustomerManagerColumnWamPayload",
    "WAWebCustomerManagerCustomFieldTypes",
    "WAWebCustomerManagerWamLogging",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "custom_field";
    function s(t) {
      return o("WAWebCustomerManagerCustomFieldTypes").customFieldIdFromKey(
        t,
      ) != null
        ? e
        : t;
    }
    function u(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerColumnWamPayload").columnReorder("drag", e, t),
      );
    }
    function c(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerColumnWamPayload").columnReorder(
          "keyboard",
          e,
          t,
        ),
      );
    }
    function d(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerColumnWamPayload").columnResize("drag", s(e), t),
      );
    }
    function m(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerColumnWamPayload").columnResize(
          "keyboard",
          s(e),
          t,
        ),
      );
    }
    function p(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { visible_column_count: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_COLUMNS_MENU,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function _(e, t) {
      var n = s(e);
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { column_key: n, new_state: t },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_COLUMNS_MENU,
        userActionTarget: "column_toggle_" + n,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      });
    }
    function f(e, t, n) {
      var r = s(e);
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: {
          column_key: r,
          direction: t,
          prev_sort_column: n != null ? s(n) : null,
        },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "column_header_" + r,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    ((l.editColumnReorderDrag = u),
      (l.editColumnReorderKeyboard = c),
      (l.editColumnResizeDrag = d),
      (l.editColumnResizeKeyboard = m),
      (l.viewColumnsMenu = p),
      (l.editColumnToggle = _),
      (l.clickColumnHeader = f));
  },
  98,
);
