__d(
  "WAWebChatlistTertiaryPillsLogEvents",
  [
    "$InternalEnum",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        AI_RESPONDING: "ai_responding",
        AI_HANDOFF: "ai_handoff",
        LABELS_ONLY: "labels_only",
      }),
      s = n("$InternalEnum")({
        EMPTY_AFTER_RESERVATION: "empty_after_reservation",
      }),
      u = new Set();
    function c(e, t, n, r) {
      var a = e + "|" + t;
      u.has(a) ||
        (u.add(a),
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
          featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
            .GEN_AI_AGENT,
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.VIEW,
          userActionTarget: t,
          extraAttributes: { pill_count: n, overflow_count: r },
        }));
    }
    function d(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .GEN_AI_AGENT,
        surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
        userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
          .SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
        userActionTarget: e,
      });
    }
    function m() {
      u.clear();
    }
    ((l.TertiaryPillsChipKind = e),
      (l.TertiaryPillsMismatchReason = s),
      (l.logTertiaryPillsRowImpression = c),
      (l.logTertiaryPillsRowMismatch = d),
      (l.resetTertiaryPillsImpressionDedupForTests = m));
  },
  98,
);
