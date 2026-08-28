__d(
  "AdsAdditionalOptionsReadOnlyStrings",
  [
    "fbt",
    "AdsBudgetUsabilityGKUtils",
    "AdsBulkValueUtils",
    "AdsPlacementCopy",
    "AdsTargetingConstants",
    "BulkValueContainmentStatus",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "On"),
      u = s._(/*BTDS*/ "Off"),
      c = s._(/*BTDS*/ "None selected"),
      d = {
        liveIsExcluded: s._(/*BTDS*/ "Facebook in-stream reels ads"),
        isInstreamNonPartnerExcluded: s._(
          /*BTDS*/ "Facebook in-stream reels ads",
        ),
        isFBReelsNonPartnerExcluded: s._(/*BTDS*/ "Ads on Facebook Reels"),
        isFBInstreamReelsNonPartnerExcluded: s._(
          /*BTDS*/ "Facebook in-stream reels and Ads on Facebook Reels",
        ),
      },
      m = {
        nothingSelected: s._(/*BTDS*/ "None selected"),
        liveIsExcluded: s._(
          /*BTDS*/ "Exclude all live videos from Facebook in-stream reels ads",
        ),
        isInstreamNonPartnerExcluded: s._(
          /*BTDS*/ "Exclude in-stream reels ads from nonpartner-publishers",
        ),
        isFBReelsNonPartnerExcluded: s._(
          /*BTDS*/ "Exclude Ads on Facebook Reels from nonpartner-publishers",
        ),
        isFBInstreamReelsNonPartnerExcluded: s._(
          /*BTDS*/ "Exclude Facebook in-stream reels and Ads on Facebook Reels from nonpartner-publishers",
        ),
      },
      p = s._(/*BTDS*/ "Minimum"),
      _ = s._(/*BTDS*/ "Maximum"),
      f = s._(/*BTDS*/ "None added"),
      g = s._(/*BTDS*/ "Custom"),
      h = s._(/*BTDS*/ "Default"),
      y = s._(/*BTDS*/ "Loading error, please edit this field"),
      C = s._(/*BTDS*/ "Scale budget during specific time periods");
    function b(e) {
      switch (e) {
        case o("AdsTargetingConstants").GENDERS.Men:
          return s._(/*BTDS*/ "Men");
        case o("AdsTargetingConstants").GENDERS.Women:
          return s._(/*BTDS*/ "Women");
        case o("AdsTargetingConstants").GENDERS.All:
          return s._(/*BTDS*/ "All genders");
        default:
          return null;
      }
    }
    function v(e) {
      var t = o("AdsBulkValueUtils").getUniformValue(e),
        n =
          t != null && t.size == 1
            ? t.first()
            : o("AdsTargetingConstants").GENDERS.All;
      return b(n);
    }
    function S(e) {
      return e === r("AdsPlacementCopy").DEFAULT_PLACEMENT_DEVICE_PLATFORM_LABEL
        ? s._(/*BTDS*/ "All devices")
        : e;
    }
    function R(e) {
      return e === r("BulkValueContainmentStatus").ALL
        ? s._(/*BTDS*/ "Accelerated")
        : s._(/*BTDS*/ "Standard");
    }
    function L(e, t) {
      return t &&
        o(
          "AdsBudgetUsabilityGKUtils",
        ).isEligibleForH12025UsabilityBudgetSchedulingRenamePreTest({
          shouldLogExposure: !0,
        })
        ? e === "standard"
          ? s._(/*BTDS*/ "Deliver ads and marketing messages at all times.")
          : s._(/*BTDS*/ "Set a schedule for ads and marketing messages.")
        : e === "standard"
          ? s._(/*BTDS*/ "Run ads all the time")
          : s._(/*BTDS*/ "Run ads on a schedule");
    }
    function E(e) {
      return s._(/*BTDS*/ "Use this ad account's time zone ({timezone})", [
        s._param("timezone", e),
      ]);
    }
    function k(e, t, n) {
      return s._(
        /*BTDS*/ '_j{"*":{"*":"{option_type} - {max_frequency} impressions every {frequency_interval_reset_period_in_days} days","_1":"{option_type} - {max_frequency} impressions every {frequency_interval_reset_period_in_days} day"},"_1":{"*":"{option_type} - {max_frequency} impression every {frequency_interval_reset_period_in_days} days","_1":"{option_type} - {max_frequency} impression every {frequency_interval_reset_period_in_days} day"}}',
        [
          s._plural(t),
          s._plural(n),
          s._param("option_type", e),
          s._param("max_frequency", t),
          s._param("frequency_interval_reset_period_in_days", n),
        ],
      );
    }
    function I(e, t) {
      return s._(/*BTDS*/ "{total spent} of {spendCap} limit spent", [
        s._param("total spent", t),
        s._param("spendCap", e),
      ]);
    }
    ((l.TOGGLE_ON_LABEL = e),
      (l.TOGGLE_OFF_LABEL = u),
      (l.NONE_SELECTED_LABEL = c),
      (l.BRAND_SAFETY_LABEL_CONTENT_TYPE_EXCLUSION_FOBRS = d),
      (l.BRAND_SAFETY_LABEL_MAP = m),
      (l.MIN_SPEND_LIMIT_FIELD_LABEL = p),
      (l.MAX_SPEND_LIMIT_FIELD_LABEL = _),
      (l.NONE_ADDED_LABEL = f),
      (l.CUSTOM_FREQUENCY_OPTION = g),
      (l.DEFAULT_FREQUENCY_OPTION = h),
      (l.LOADING_ERROR_MESSAGE = y),
      (l.TIME_SUGGESTION_ENABLED_LABEL = C),
      (l.getGenderStringFromSwitch = b),
      (l.getGenderString = v),
      (l.getDeviceTypeString = S),
      (l.getDeliveryTypeString = R),
      (l.getAdsSchedulingString = L),
      (l.getTimeZoneString = E),
      (l.getFrequencyCapString = k),
      (l.getCampaignGroupSpendLimitsString = I));
  },
  226,
);
