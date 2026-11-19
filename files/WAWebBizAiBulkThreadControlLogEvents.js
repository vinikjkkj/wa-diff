__d(
  "WAWebBizAiBulkThreadControlLogEvents",
  [
    "WAWebProtobufsE2E.pb",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "async_batch_applied",
      s = "thread_state_apply";
    function u(t) {
      var n = t.appliedCount,
        r = t.failedCount,
        a = t.notFoundCount,
        i = t.pendingCount,
        l = t.staleCount,
        s = t.totalCount;
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: {
          async_batch_applied_count: n,
          async_batch_failed_count: r,
          async_batch_not_found_count: a,
          async_batch_stale_count: l,
          async_batch_pending_count: i,
          async_batch_missed_count: r + a + i,
          async_batch_total_count: s,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        stickyEntryPoint: !1,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
        userActionTarget: e,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.API,
      });
    }
    function c(e, t) {
      if (
        t !==
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl.INFO
      ) {
        var n = "unknown";
        (t ===
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
          .CONTROL_PASSED
          ? (n = "control_passed")
          : t ===
              o("WAWebProtobufsE2E.pb")
                .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                .CONTROL_TAKEN && (n = "control_taken"),
          o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
            extraAttributes: {
              thread_control_apply_outcome: e,
              capi_notification_status: n,
              thread_control_apply_missed_count:
                e === "pending" || e === "failed" || e === "not_found" ? 1 : 0,
            },
            featureName: o("WAWebWamEnumSmbFeatureNameEnum")
              .SMB_FEATURE_NAME_ENUM.GEN_AI_AGENT,
            stickyEntryPoint: !1,
            surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
            userActionTarget: s,
            userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
              .SMB_USER_ACTION_TYPE_ENUM.API,
          }));
      }
    }
    ((l.logBulkThreadControlBatchApplied = u),
      (l.logThreadControlApplyOutcome = c));
  },
  98,
);
