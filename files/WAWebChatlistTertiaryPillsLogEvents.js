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
      u = new Set(),
      c = new Set();
    function d(e) {
      var t = e.chatId,
        n = e.chipKind,
        r = e.overflowCount,
        a = e.pillCount,
        i = t + "|" + n;
      u.has(i) ||
        (u.add(i),
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
          featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
            .GEN_AI_AGENT,
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.VIEW,
          userActionTarget: n,
          extraAttributes: { pill_count: a, overflow_count: r },
        }));
    }
    function m(e, t) {
      var n = e + "|" + t;
      c.has(n) ||
        (c.add(n),
        o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
          featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
            .GEN_AI_AGENT,
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST,
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
          userActionTarget: t,
        }));
    }
    function p() {
      (u.clear(), c.clear());
    }
    ((l.TertiaryPillsChipKind = e),
      (l.TertiaryPillsMismatchReason = s),
      (l.logTertiaryPillsRowImpression = d),
      (l.logTertiaryPillsRowMismatch = m),
      (l.resetTertiaryPillsDedupForTests = p));
  },
  98,
);
