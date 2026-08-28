__d(
  "AdDeliveryInfoUtils",
  [
    "AdsActivityStatuses",
    "AdsRFUnderdeliveryReason",
    "SignalsDataSourcesEnumUtils.facebook",
    "SignalsDiagnosticEventEnumUtils.facebook",
    "TextPenaltyLevel",
    "TypeCoercionUtils",
    "XFBAdsDeliveryReviewStatusUtils.facebook",
    "bi_penalty_lib_PenaltyType",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        a,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z,
        j,
        K,
        Q,
        X,
        Y;
      return {
        active_accelerated_campaign_count:
          (t = e.active_accelerated_campaign_count) != null ? t : void 0,
        active_day_parted_campaign_count:
          (n = e.active_day_parted_campaign_count) != null ? n : void 0,
        ad_penalty_map:
          e.ad_penalty_map != null
            ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                e.ad_penalty_map.map(function (e) {
                  return {
                    key: o("TypeCoercionUtils").coerceNonMaybeValue(
                      o("TypeCoercionUtils").coerceMaybeNumberToString(
                        r("getJSEnumSafe")(
                          r("bi_penalty_lib_PenaltyType"),
                          e.key,
                        ),
                      ),
                      "ad_penalty_map[].key",
                      i.id,
                    ),
                    value: o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.value,
                      "ad_penalty_map[].value",
                      i.id,
                    ),
                  };
                }),
              )
            : void 0,
        are_all_daily_budgets_spent:
          (a = e.are_all_daily_budgets_spent) != null ? a : void 0,
        credit_needed_ads_count:
          (l = e.credit_needed_ads_count) != null ? l : void 0,
        eligible_for_delivery_insights:
          (s = e.eligible_for_delivery_insights) != null ? s : void 0,
        end_time:
          (u = o("TypeCoercionUtils").coerceEmptyStringToUndefined(
            e.end_time,
          )) != null
            ? u
            : void 0,
        has_account_hit_spend_limit:
          (c = e.has_account_hit_spend_limit) != null ? c : void 0,
        has_campaign_group_hit_spend_limit:
          (d = e.has_campaign_group_hit_spend_limit) != null ? d : void 0,
        has_no_active_ads: (m = e.has_no_active_ads) != null ? m : void 0,
        has_no_ads: (p = e.has_no_ads) != null ? p : void 0,
        inactive_ads_count: (_ = e.inactive_ads_count) != null ? _ : void 0,
        inactive_campaign_count:
          (f = e.inactive_campaign_count) != null ? f : void 0,
        is_account_closed: (g = e.is_account_closed) != null ? g : void 0,
        is_account_disabled: (h = e.is_account_disabled) != null ? h : void 0,
        is_ad_uneconomical: (y = e.is_ad_uneconomical) != null ? y : void 0,
        is_adfarm_penalized: (C = e.is_adfarm_penalized) != null ? C : void 0,
        is_adgroup_partially_rejected:
          (b = e.is_adgroup_partially_rejected) != null ? b : void 0,
        is_campaign_accelerated:
          (v = e.is_campaign_accelerated) != null ? v : void 0,
        is_campaign_completed:
          (S = e.is_campaign_completed) != null ? S : void 0,
        is_campaign_day_parted:
          (R = e.is_campaign_day_parted) != null ? R : void 0,
        is_campaign_disabled: (L = e.is_campaign_disabled) != null ? L : void 0,
        is_campaign_group_disabled:
          (E = e.is_campaign_group_disabled) != null ? E : void 0,
        is_clickbait_penalized:
          (k = e.is_clickbait_penalized) != null ? k : void 0,
        is_daily_budget_spent:
          (I = e.is_daily_budget_spent) != null ? I : void 0,
        is_engagement_bait_penalized:
          (T = e.is_engagement_bait_penalized) != null ? T : void 0,
        is_lqwe_penalized: (D = e.is_lqwe_penalized) != null ? D : void 0,
        is_reach_and_frequency_misconfigured:
          (x = e.is_reach_and_frequency_misconfigured) != null ? x : void 0,
        is_sensationalism_penalized:
          ($ = e.is_sensationalism_penalized) != null ? $ : void 0,
        lift_study_time_period:
          (P = e.lift_study_time_period) != null ? P : void 0,
        needs_credit: (N = e.needs_credit) != null ? N : void 0,
        needs_tax_number: (M = e.needs_tax_number) != null ? M : void 0,
        non_deleted_ads_count:
          (w = e.non_deleted_ads_count) != null ? w : void 0,
        not_delivering_campaign_count:
          (A = e.not_delivering_campaign_count) != null ? A : void 0,
        pending_ads_count: (F = e.pending_ads_count) != null ? F : void 0,
        pending_review_info:
          e.pending_review_info != null
            ? {
                latest_update_time: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (O = e.pending_review_info) == null
                    ? void 0
                    : O.latest_update_time,
                  "pending_review_info.latest_update_time",
                  i.id,
                ),
                review_status: o(
                  "XFBAdsDeliveryReviewStatusUtils.facebook",
                ).toJSEnum(
                  (B = e.pending_review_info) == null
                    ? void 0
                    : B.review_status,
                ),
              }
            : void 0,
        reach_frequency_campaign_underdelivery_reason:
          (W = r("getJSEnumSafe")(
            r("AdsRFUnderdeliveryReason"),
            e.reach_frequency_campaign_underdelivery_reason,
          )) != null
            ? W
            : void 0,
        rejected_ads_count: (q = e.rejected_ads_count) != null ? q : void 0,
        signal_diagnostic_issue:
          e.signal_diagnostic_issue != null
            ? {
                data_source_id: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (U = e.signal_diagnostic_issue) == null
                    ? void 0
                    : U.data_source_id,
                  "signal_diagnostic_issue.data_source_id",
                  i.id,
                ),
                data_source_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                  o("SignalsDataSourcesEnumUtils.facebook").toJSEnum(
                    (V = e.signal_diagnostic_issue) == null
                      ? void 0
                      : V.data_source_type,
                  ),
                  "signal_diagnostic_issue.data_source_type",
                  i.id,
                ),
                diagnostic_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                  o("SignalsDiagnosticEventEnumUtils.facebook").toJSEnum(
                    (H = e.signal_diagnostic_issue) == null
                      ? void 0
                      : H.diagnostic_type,
                  ),
                  "signal_diagnostic_issue.diagnostic_type",
                  i.id,
                ),
                event_name: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (G = e.signal_diagnostic_issue) == null
                    ? void 0
                    : G.event_name,
                  "signal_diagnostic_issue.event_name",
                  i.id,
                ),
                traffic_anomaly_drop_percentage:
                  (z =
                    (j = e.signal_diagnostic_issue) == null
                      ? void 0
                      : j.traffic_anomaly_drop_percentage) != null
                    ? z
                    : void 0,
                traffic_anomaly_drop_timestamp:
                  (K =
                    (Q = e.signal_diagnostic_issue) == null
                      ? void 0
                      : Q.traffic_anomaly_drop_timestamp) != null
                    ? K
                    : void 0,
              }
            : void 0,
        start_time: (X = e.start_time) != null ? X : void 0,
        status: o("TypeCoercionUtils").coerceNonMaybeValue(
          r("getJSEnumSafe")(r("AdsActivityStatuses"), e.status),
          "status",
          i.id,
        ),
        text_penalty_level:
          (Y = r("getJSEnumSafe")(
            r("TextPenaltyLevel"),
            e.text_penalty_level,
          )) != null
            ? Y
            : void 0,
      };
    }
    l.coerceGraphQLSpecToGraphAPI = e;
  },
  98,
);
