__d(
  "WAWebBizBroadcastProSuggestedAudienceLoggerV2",
  [
    "WAWebBBLoggerTypes",
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumBbTierType",
    "WAWebWamEnumSmbFeatureNameEnum",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log({
        bbTier: o("WAWebWamEnumBbTierType").BB_TIER_TYPE.PRO,
        entryPoint: r,
        extraAttributes: {
          predicate_type: t != null ? t : void 0,
          resolved_count: n,
          suggested_audience_card_id: e,
        },
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .BUSINESS_BROADCAST,
        surface: a,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .SUGGESTED_AUDIENCE_CARD_CLICK,
        userActionType: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
      });
    }
    l.logProSuggestedAudienceCardClicked = e;
  },
  98,
);
