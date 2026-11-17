__d(
  "WAWebCustomerManagerPipelineJourneyEvents",
  [
    "WAWebCustomerManagerWamLogging",
    "WAWebLeadStage",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = {};
      for (var n of o("WAWebLeadStage").ALL_LEAD_STAGES) {
        var r;
        t["stage_" + n + "_count"] = (r = e[String(n)]) != null ? r : 0;
      }
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: t,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_PIPELINE,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function s(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { stage: e != null ? e : null },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_PIPELINE,
        userActionTarget: "pipeline_customer_card",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function u(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { new_stage: t, prev_stage: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_PIPELINE,
        userActionTarget: "pipeline_card_drag",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      });
    }
    function c(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { from_stage: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_PIPELINE,
        userActionTarget: "pipeline_card_drag_start",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      });
    }
    function d(e, t, n) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { action_status: e, new_stage: n, prev_stage: t },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_PIPELINE,
        userActionTarget: "pipeline_card_drag",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function m(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { stage: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_PIPELINE,
        userActionTarget: "pipeline_column_error",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VIEW,
      });
    }
    function p(e) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { stage: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_PIPELINE,
        userActionTarget: "pipeline_column_retry",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function _(e, t) {
      o("WAWebCustomerManagerWamLogging").logCustomerManagerJourney({
        extraAttributes: { from_stage: t, reason: e },
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE
          .CUSTOMER_MANAGER_PIPELINE,
        userActionTarget: "pipeline_card_drag_abandoned",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      });
    }
    ((l.viewPipeline = e),
      (l.clickPipelineCustomerCard = s),
      (l.editPipelineCardDrag = u),
      (l.editPipelineCardDragStart = c),
      (l.pipelineCardDragResult = d),
      (l.viewPipelineColumnError = m),
      (l.clickPipelineColumnRetry = p),
      (l.pipelineCardDragAbandoned = _));
  },
  98,
);
