__d(
  "WAWebCustomerManagerChatHeaderJourneyLogger",
  [
    "WAWebLeadStage",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      c({
        userActionTarget: "chat_header_lead_stage_row",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function s(e) {
      c({
        extraAttributes: {
          stage:
            e == null ? null : o("WAWebLeadStage").getLeadStageCanonicalName(e),
        },
        userActionTarget: "chat_header_lead_stage_option",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      });
    }
    function u(e) {
      c({
        extraAttributes: {
          stage:
            e == null ? null : o("WAWebLeadStage").getLeadStageCanonicalName(e),
        },
        userActionTarget: "chat_header_lead_stage_commit",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      });
    }
    function c(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
        babelHelpers.extends({}, e, {
          featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
            .CUSTOMER_MANAGER,
          stickyEntryPoint: !1,
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        }),
      );
    }
    ((l.clickChatHeaderLeadStageRow = e),
      (l.editChatHeaderLeadStagePick = s),
      (l.editChatHeaderLeadStageCommit = u));
  },
  98,
);
