__d(
  "WAWebCustomerManagerAddCustomerMenuJourneyEvents",
  [
    "WAWebCustomerManagerCustomerProfileDecoders",
    "WAWebLeadStage",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        extraAttributes: {
          stage: o("WAWebLeadStage").getLeadStageCanonicalName(e),
        },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "add_customer_lead_stage_option",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      };
    }
    function s() {
      return {
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "add_customer_lead_stage_menu",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      };
    }
    function u(e) {
      var t;
      return {
        extraAttributes: {
          source:
            (t = o(
              "WAWebCustomerManagerCustomerProfileDecoders",
            ).toAcquisitionSourceFilterText(e)) != null
              ? t
              : null,
        },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "add_customer_acquisition_source_option",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      };
    }
    function c() {
      return {
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_ADD_CUSTOMER,
        userActionTarget: "add_customer_acquisition_source_menu",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.DISMISS,
      };
    }
    ((l.getAddCustomerLeadStagePickEvent = e),
      (l.getAddCustomerLeadStageDismissEvent = s),
      (l.getAddCustomerSourcePickEvent = u),
      (l.getAddCustomerSourceDismissEvent = c));
  },
  98,
);
