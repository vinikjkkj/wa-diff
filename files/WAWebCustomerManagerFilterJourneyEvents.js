__d(
  "WAWebCustomerManagerFilterJourneyEvents",
  ["WAWebCustomerManagerWamLogging", "WAWebWamEnumSmbUserActionTypeEnum"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: t,
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: "customer_manager_filter_apply",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function s(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: t,
        surface: o("WAWebCustomerManagerWamLogging").viewSurface(e),
        userActionTarget: "customer_manager_filter_result_view",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    ((l.filterApply = e), (l.filterResultView = s));
  },
  98,
);
