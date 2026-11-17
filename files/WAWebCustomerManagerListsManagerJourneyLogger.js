__d(
  "WAWebCustomerManagerListsManagerJourneyLogger",
  [
    "WAWebLeadStage",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      u({
        extraAttributes: { update_entry_point: e != null ? e : null },
        userActionTarget: "manage_lists_lead_stage_row",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    function s(e, t) {
      u({
        extraAttributes: {
          stage:
            e == null ? null : o("WAWebLeadStage").getLeadStageCanonicalName(e),
          update_entry_point: t != null ? t : null,
        },
        userActionTarget: "manage_lists_lead_stage_option",
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.EDIT,
      });
    }
    function u(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
        babelHelpers.extends({}, e, {
          featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
            .CUSTOMER_MANAGER,
          stickyEntryPoint: !1,
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.LABEL_APPLICATION,
        }),
      );
    }
    ((l.clickManageListsLeadStageRow = e),
      (l.editManageListsLeadStagePick = s));
  },
  98,
);
