__d(
  "WAWebBizAiBulkThreadControlLogEvents",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "async_batch_applied";
    function s(t) {
      var n = t.appliedCount,
        r = t.failedCount,
        a = t.notFoundCount,
        i = t.totalCount;
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        extraAttributes: {
          async_batch_applied_count: n,
          async_batch_failed_count: r,
          async_batch_not_found_count: a,
          async_batch_total_count: i,
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
    l.logBulkThreadControlBatchApplied = s;
  },
  98,
);
