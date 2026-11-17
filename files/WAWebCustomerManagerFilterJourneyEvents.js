__d(
  "WAWebCustomerManagerFilterJourneyEvents",
  [
    "WAWebCustomerManagerFilterWamPayload",
    "WAWebCustomerManagerSMBUserJourneyTypes",
    "WAWebCustomerManagerWamLogging",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: {
          applied_stage: e != null ? e : "cleared",
          previously_applied: t != null ? t : "none",
        },
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(n),
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.LEAD_STAGE_FILTER_CHIP,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function s(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { preset: e != null ? e : "all_time" },
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(t),
        userActionTarget: o("WAWebCustomerManagerSMBUserJourneyTypes")
          .UserActionTarget.LAST_MESSAGE_FILTER_CHIP,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function u(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { label_id: e != null ? e : "cleared" },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "label_filter_chip",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function c(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { source: e != null ? e : "cleared" },
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(t),
        userActionTarget: "acquisition_source_filter_chip",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function d(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { range: e != null ? e : "cleared" },
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(t),
        userActionTarget: "acquisition_date_filter_chip",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function m(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { month: e != null ? e : "cleared" },
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(t),
        userActionTarget: "birth_month_filter_chip",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function p(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerFilterWamPayload").filterClick(
          "contact_type_filter_chip",
          { is_open: e },
        ),
      );
    }
    function _(e, t) {
      (t === void 0 && (t = "list"),
        o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
          o("WAWebCustomerManagerFilterWamPayload").filterClick(
            "last_message_filter_chip",
            { is_open: e },
            t,
          ),
        ));
    }
    function f(e) {
      (e === void 0 && (e = "list"),
        o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
          o("WAWebCustomerManagerFilterWamPayload").filterClick(
            "custom_range_menu_item",
            void 0,
            e,
          ),
        ));
    }
    function g(e) {
      (e === void 0 && (e = "list"),
        o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
          o("WAWebCustomerManagerFilterWamPayload").filterClick(
            "custom_range_calendar_day",
            void 0,
            e,
          ),
        ));
    }
    function h(e) {
      (e === void 0 && (e = "list"),
        o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
          o("WAWebCustomerManagerFilterWamPayload").filterClick(
            "add_filter_chip",
            void 0,
            e,
          ),
        ));
    }
    function y(e, t) {
      (t === void 0 && (t = "list"),
        o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
          o("WAWebCustomerManagerFilterWamPayload").filterClick(
            "filter_submenu_row",
            { filter_key: e },
            t,
          ),
        ));
    }
    function C(e, t, n) {
      (n === void 0 && (n = "list"),
        o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
          o("WAWebCustomerManagerFilterWamPayload").filterDismiss(
            { dismiss_method: t, filter_key: e },
            n,
          ),
        ));
    }
    function b(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney(
        o("WAWebCustomerManagerFilterWamPayload").filterClick(
          "filter_chip",
          { filter_key: e },
          t,
        ),
      );
    }
    function v(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { contact_type: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "contact_type_filter_chip",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function S(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { span_days: e },
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(t),
        userActionTarget: "custom_date_range",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function R(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: e,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_LIST,
        userActionTarget: "filter_result",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    ((l.changeLeadStageFilter = e),
      (l.changeLastMessageFilter = s),
      (l.changeLabelFilter = u),
      (l.changeAcquisitionSourceFilter = c),
      (l.changeAcquisitionDateFilter = d),
      (l.changeBirthMonthFilter = m),
      (l.clickContactTypeChip = p),
      (l.clickLastMessageChip = _),
      (l.clickCustomRangeItem = f),
      (l.clickCustomRangeFirstDay = g),
      (l.clickAddFilterChip = h),
      (l.clickFilterSubmenuRow = y),
      (l.dismissFilterMenu = C),
      (l.clickFilterChipReopen = b),
      (l.changeContactTypeFilter = v),
      (l.changeCustomDateRange = S),
      (l.filterResult = R));
  },
  98,
);
