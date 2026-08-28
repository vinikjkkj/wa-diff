__d(
  "AdDeliveryStatusUtil",
  [
    "AdLearningStageExitReasonUtils.facebook",
    "AdproRegionalRegulatedCategory",
    "AdsAPIFatigueScoreLevel",
    "AdsAemMaeDAOEIneligibleScenario",
    "AdsAemMaeRoMaeIneligibleScenario",
    "AdsDeliveryCreativeFatigueRecommendationType",
    "AdsDeliveryInsightsLearningStageStatus",
    "AdsDeliveryMidflightCreativeLimitedGuidanceCardVariant",
    "AdsDeliveryReviewStatus",
    "AdsMAEAEMv2IneligibleReasonUtils.facebook",
    "AdsMAIIneligibleReasonUtils.facebook",
    "AdsManagerDeliveryStatus",
    "AdsManagerDeliverySubstatus",
    "BusinessVerificationStatus",
    "FBLogger",
    "SKANReadinessStatus",
    "SignalsDataSourcesEnumUtils.facebook",
    "SignalsDiagnosticEventEnumUtils.facebook",
    "TypeCoercionUtils",
    "WhatsAppBusinessHSMRejectionReason",
    "WhatsAppBusinessHSMStatus",
    "enumUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "NOT_FEATURE_LIMITED":
          return "not_feature_limited";
        case "PERMANENTLY_FEATURE_LIMITED":
          return "permanently_feature_limited";
        case "TEMPORARILY_FEATURE_LIMITED":
          return "temporarily_feature_limited";
        default:
          return (
            r("FBLogger")("relay_ads_manager")
              .blameToPreviousFrame()
              .mustfix(
                "Unsupported value for messenger_page_messaging_feature_limit, got %s",
                e,
              ),
            e
          );
      }
    }
    function s(e) {
      var t;
      return (t =
        e == null
          ? void 0
          : e
              .map(function (e) {
                var t = e.event_name,
                  n = e.restriction_status;
                return t == null || n == null
                  ? null
                  : { event_name: t, restriction_status: String(n) };
              })
              .filter(Boolean)) != null
        ? t
        : [];
    }
    function u(e) {
      var t, n, a, i, l, s, u, c, d, m, p, _, f;
      if (e != null)
        return {
          cas_segment: (t = e.cas_segment) != null ? t : void 0,
          conversions: e.conversions,
          current_budget_prediction:
            e.current_budget_prediction != null &&
            e.current_budget_prediction.budget != null &&
            e.current_budget_prediction.predicted_daily_conversions != null &&
            e.current_budget_prediction.predicted_days_to_exit != null
              ? {
                  budget: e.current_budget_prediction.budget,
                  predicted_daily_conversions:
                    e.current_budget_prediction.predicted_daily_conversions,
                  predicted_days_to_exit:
                    e.current_budget_prediction.predicted_days_to_exit,
                }
              : void 0,
          dynamic_lp_conversions_threshold:
            (n = e.dynamic_lp_conversions_threshold) != null ? n : void 0,
          dynamic_lp_days_threshold:
            (a = e.dynamic_lp_days_threshold) != null ? a : void 0,
          dynamic_lp_status:
            (i = r("getJSEnumSafe")(
              r("AdsDeliveryInsightsLearningStageStatus"),
              e.dynamic_lp_status,
            )) != null
              ? i
              : void 0,
          exit_reason:
            (l = o("AdLearningStageExitReasonUtils.facebook").toJSEnum(
              e.exit_reason,
            )) != null
              ? l
              : void 0,
          is_one_to_one_cbo_budget:
            (s = e.is_one_to_one_cbo_budget) != null ? s : void 0,
          last_sig_edit_ts: (u = e.last_sig_edit_ts) != null ? u : void 0,
          performance_indicator:
            (c = e.performance_indicator) != null ? c : void 0,
          prediction_curve_budgets:
            (d = e.prediction_curve_budgets) != null ? d : void 0,
          prediction_curve_daily_conversions:
            (m = e.prediction_curve_daily_conversions) != null ? m : void 0,
          recommended_budget_prediction:
            e.recommended_budget_prediction != null &&
            e.recommended_budget_prediction.budget != null &&
            e.recommended_budget_prediction.predicted_daily_conversions !=
              null &&
            e.recommended_budget_prediction.predicted_days_to_exit != null
              ? {
                  budget: e.recommended_budget_prediction.budget,
                  predicted_daily_conversions:
                    e.recommended_budget_prediction.predicted_daily_conversions,
                  predicted_days_to_exit:
                    e.recommended_budget_prediction.predicted_days_to_exit,
                }
              : void 0,
          remaining_conversions_needed:
            (p = e.remaining_conversions_needed) != null ? p : void 0,
          sigedit_removal: (_ = e.sigedit_removal) != null ? _ : void 0,
          status:
            (f = r("getJSEnumSafe")(
              r("AdsDeliveryInsightsLearningStageStatus"),
              e.status,
            )) != null
              ? f
              : void 0,
        };
    }
    function c(e) {
      return o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        e == null
          ? void 0
          : e.map(function (e) {
              var t;
              return {
                adgroup_issues_info: (t =
                  o("TypeCoercionUtils")).coerceEmptyArrayToUndefined(
                  e.adgroup_issues_info.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.ad_object_spec,
                      "warningStatuses[].adgroup_issues_info[].ad_object_spec",
                      i.id,
                    );
                  }),
                ),
                campaign_issues_info: t.coerceEmptyArrayToUndefined(
                  e.campaign_issues_info.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.ad_object_spec,
                      "warningStatuses[].campaign_issues_info[].ad_object_spec",
                      i.id,
                    );
                  }),
                ),
                children: t.coerceEmptyArrayToUndefined(
                  e.children.map(function (e) {
                    return {
                      adgroup_issues_info: o(
                        "TypeCoercionUtils",
                      ).coerceEmptyArrayToUndefined(
                        e.adgroup_issues_info.map(function (e) {
                          return o("TypeCoercionUtils").coerceNonMaybeValue(
                            e.ad_object_spec,
                            "warningStatuses[].children[].adgroup_issues_info[].ad_object_spec",
                            i.id,
                          );
                        }),
                      ),
                      id: o("TypeCoercionUtils").coerceNonMaybeValue(
                        e.object_id,
                        "warningStatuses[].children[].object_id",
                        i.id,
                      ),
                      substatuses: e.substatuses.map(function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          r("getJSEnumSafe")(
                            r("AdsManagerDeliverySubstatus"),
                            e,
                          ),
                          "warningStatuses[].children[].substatuses[]",
                          i.id,
                        );
                      }),
                    };
                  }),
                ),
                id: t.coerceNonMaybeValue(
                  e.object_id,
                  "warningStatuses[].object_id",
                  i.id,
                ),
                substatuses: e.substatuses.map(function (e) {
                  return o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumSafe")(r("AdsManagerDeliverySubstatus"), e),
                    "warningStatuses[].substatuses[]",
                    i.id,
                  );
                }),
              };
            }),
      );
    }
    function d(e) {
      return e == null
        ? null
        : o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e
              .map(function (e) {
                var t = e == null ? void 0 : e.campaign_id,
                  n = e == null ? void 0 : e.campaign_name,
                  r = e == null ? void 0 : e.dataset_id,
                  o = e == null ? void 0 : e.optimized_event;
                return t == null || n == null || r == null || o == null
                  ? null
                  : {
                      campaign_id: t,
                      campaign_name: n,
                      dataset_id: r,
                      optimized_event: o,
                    };
              })
              .filter(Boolean),
          );
    }
    function m(t) {
      var n,
        a,
        l,
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
        Y,
        J,
        Z,
        ee,
        te,
        ne,
        re,
        oe,
        ae,
        ie,
        le,
        se,
        ue,
        ce,
        de,
        me,
        pe,
        _e,
        fe,
        ge,
        he,
        ye,
        Ce,
        be,
        ve,
        Se,
        Re,
        Le,
        Ee,
        ke,
        Ie,
        Te,
        De,
        xe,
        $e,
        Pe,
        Ne,
        Me,
        we,
        Ae,
        Fe,
        Oe,
        Be,
        We,
        qe,
        Ue,
        Ve,
        He,
        Ge,
        ze,
        je,
        Ke,
        Qe,
        Xe,
        Ye,
        Je,
        Ze,
        et,
        tt,
        nt,
        rt,
        ot,
        at,
        it,
        lt,
        st,
        ut,
        ct,
        dt,
        mt,
        pt,
        _t,
        ft,
        gt,
        ht,
        yt,
        Ct,
        bt,
        vt,
        St,
        Rt,
        Lt,
        Et,
        kt,
        It,
        Tt,
        Dt,
        xt,
        $t,
        Pt,
        Nt,
        Mt,
        wt,
        At,
        Ft,
        Ot,
        Bt,
        Wt,
        qt,
        Ut,
        Vt,
        Ht,
        Gt,
        zt,
        jt,
        Kt,
        Qt,
        Xt,
        Yt,
        Jt,
        Zt,
        en,
        tn,
        nn,
        rn,
        on,
        an,
        ln,
        sn,
        un,
        cn,
        dn,
        mn,
        pn,
        _n,
        fn,
        gn,
        hn,
        yn,
        Cn,
        bn,
        vn,
        Sn,
        Rn,
        Ln,
        En,
        kn,
        In,
        Tn,
        Dn,
        xn,
        $n,
        Pn,
        Nn,
        Mn,
        wn,
        An,
        Fn,
        On,
        Bn,
        Wn,
        qn,
        Un,
        Vn,
        Hn,
        Gn,
        zn,
        jn,
        Kn,
        Qn,
        Xn,
        Yn,
        Jn,
        Zn,
        er,
        tr;
      return {
        extra_data:
          t.extra_data != null
            ? o(
                "TypeCoercionUtils",
              ).coerceObjectWithNullAndEmptyArraysToUndefined({
                account_spend_limit_cap:
                  (n = o("TypeCoercionUtils").coerceMaybeStringToNumber(
                    (a = t.extra_data) == null
                      ? void 0
                      : a.account_spend_limit_cap_str,
                  )) != null
                    ? n
                    : void 0,
                ad_limit_reached_info:
                  ((l = t.extra_data) == null
                    ? void 0
                    : l.ad_limit_reached_info) != null
                    ? {
                        page_id: o(
                          "TypeCoercionUtils",
                        ).coerceMaybeStringToNumber(
                          (m = t.extra_data) == null ||
                            (m = m.ad_limit_reached_info) == null
                            ? void 0
                            : m.page_id,
                        ),
                        page_name: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (p = t.extra_data) == null ||
                            (p = p.ad_limit_reached_info) == null
                            ? void 0
                            : p.page_name,
                          "extra_data.ad_limit_reached_info.page_name",
                          i.id,
                        ),
                      }
                    : void 0,
                adgroup_issues_info: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (_ = t.extra_data) == null
                    ? void 0
                    : _.adgroup_issues_info.map(function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          e.ad_object_spec,
                          "extra_data.ad_limit_reached_info.adgroup_issues_info[].ad_object_spec",
                          i.id,
                        );
                      }),
                ),
                adgroup_validation_errors: void 0,
                aem_eligibility_will_lose_below_ate_threshold:
                  (f =
                    (g = t.extra_data) == null
                      ? void 0
                      : g.aem_eligibility_will_lose_below_ate_threshold) != null
                    ? f
                    : void 0,
                aem_skan_discrepancy_by_channel_info:
                  ((h = t.extra_data) == null
                    ? void 0
                    : h.aem_skan_discrepancy_by_channel_info) != null
                    ? {
                        aem_channel:
                          (y = t.extra_data) == null ||
                          (y = y.aem_skan_discrepancy_by_channel_info) == null
                            ? void 0
                            : y.aem_channel,
                        issue_type:
                          (C = t.extra_data) == null ||
                          (C = C.aem_skan_discrepancy_by_channel_info) == null
                            ? void 0
                            : C.issue_type,
                        skan_channel:
                          (b = t.extra_data) == null ||
                          (b = b.aem_skan_discrepancy_by_channel_info) == null
                            ? void 0
                            : b.skan_channel,
                      }
                    : void 0,
                age_block_partial_delivery_info:
                  ((v = t.extra_data) == null
                    ? void 0
                    : v.age_block_partial_delivery_info) != null
                    ? {
                        is_appeal_eligible:
                          t.extra_data.age_block_partial_delivery_info
                            .is_appeal_eligible,
                        is_product_vt:
                          t.extra_data.age_block_partial_delivery_info
                            .is_product_vt,
                        policy_name:
                          t.extra_data.age_block_partial_delivery_info
                            .policy_name,
                        rule_name:
                          t.extra_data.age_block_partial_delivery_info
                            .rule_name,
                      }
                    : void 0,
                alcohol_block_partial_delivery_info:
                  ((S = t.extra_data) == null
                    ? void 0
                    : S.alcohol_block_partial_delivery_info) != null
                    ? {
                        is_appeal_eligible:
                          t.extra_data.alcohol_block_partial_delivery_info
                            .is_appeal_eligible,
                      }
                    : void 0,
                app_id:
                  (R = (L = t.extra_data) == null ? void 0 : L.app_id) != null
                    ? R
                    : void 0,
                are_all_children_preparing:
                  (E = t.extra_data) == null
                    ? void 0
                    : E.are_all_children_preparing,
                auction_overlap_info:
                  ((k = t.extra_data) == null
                    ? void 0
                    : k.auction_overlap_info) != null
                    ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        (I = t.extra_data) == null
                          ? void 0
                          : I.auction_overlap_info.map(function (e) {
                              return {
                                id: o("TypeCoercionUtils").coerceNonMaybeValue(
                                  e.campaign_id,
                                  "extra_data.auction_overlap_info[].campaign_id",
                                  i.id,
                                ),
                                is_worst_performing: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  e.is_worst_performing,
                                  "extra_data.auction_overlap_info[].is_worst_performing",
                                  i.id,
                                ),
                              };
                            }),
                      )
                    : void 0,
                australia_finserv_beneficiary_entity_status: r("getJSEnumSafe")(
                  r("BusinessVerificationStatus"),
                  (T = t.extra_data) == null
                    ? void 0
                    : T.australia_finserv_beneficiary_entity_status,
                ),
                australia_finserv_payer_entity_status: r("getJSEnumSafe")(
                  r("BusinessVerificationStatus"),
                  (D = t.extra_data) == null
                    ? void 0
                    : D.australia_finserv_payer_entity_status,
                ),
                campaign_count:
                  (x = t.extra_data) == null ? void 0 : x.campaign_count,
                campaign_group_issues_info: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  ($ = t.extra_data) == null
                    ? void 0
                    : $.campaign_group_issues_info.map(function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          e.ad_object_spec,
                          "extra_data.campaign_group_issues_info[].ad_object_spec",
                          i.id,
                        );
                      }),
                ),
                campaign_group_validation_errors: void 0,
                campaign_issues_info: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (P = t.extra_data) == null
                    ? void 0
                    : P.campaign_issues_info.map(function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          e.ad_object_spec,
                          "extra_data.campaign_issues_info[].ad_object_spec",
                          i.id,
                        );
                      }),
                ),
                campaign_validation_errors: void 0,
                can_user_edit_billing:
                  (N =
                    (M = t.extra_data) == null
                      ? void 0
                      : M.can_user_edit_billing) != null
                    ? N
                    : void 0,
                cbo_inconsistent_bid_strategy_campaign_ids: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (w = t.extra_data) == null
                    ? void 0
                    : w.cbo_inconsistent_bid_strategy_campaign_ids,
                ),
                children_error_statuses:
                  (A = c(
                    (F = t.extra_data) == null
                      ? void 0
                      : F.children_error_statuses_v2,
                  )) != null
                    ? A
                    : void 0,
                children_warning_statuses:
                  (O = c(
                    (B = t.extra_data) == null
                      ? void 0
                      : B.children_warning_statuses_v2,
                  )) != null
                    ? O
                    : void 0,
                compliance_regulated_regions:
                  (W =
                    (q = t.extra_data) == null
                      ? void 0
                      : q.compliance_regulated_regions) != null
                    ? W
                    : [],
                cost_limited_eligibility_version:
                  (U = t.extra_data) == null
                    ? void 0
                    : U.cost_limited_eligibility_version,
                creative_fatigue_delivery_extra_info:
                  ((V = t.extra_data) == null
                    ? void 0
                    : V.creative_fatigue_extra_data) != null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        campaign_id:
                          (H = t.extra_data) == null ||
                          (H = H.creative_fatigue_extra_data) == null
                            ? void 0
                            : H.campaign_id,
                        card_variant: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          r("getJSEnumSafe")(
                            r(
                              "AdsDeliveryMidflightCreativeLimitedGuidanceCardVariant",
                            ),
                            (G = t.extra_data) == null ||
                              (G = G.creative_fatigue_extra_data) == null
                              ? void 0
                              : G.card_variant,
                          ),
                          "extra_data.creative_fatigue_extra_data.card_variant",
                          i.id,
                        ),
                        fatigue_recommendation_type: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          r("getJSEnumSafe")(
                            r("AdsDeliveryCreativeFatigueRecommendationType"),
                            (z = t.extra_data) == null ||
                              (z = z.creative_fatigue_extra_data) == null
                              ? void 0
                              : z.fatigue_recommendation_type,
                          ),
                          "extra_data.creative_fatigue_extra_data.fatigue_recommendation_type",
                          i.id,
                        ),
                        fatigue_score_level: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          r("getJSEnumSafe")(
                            r("AdsAPIFatigueScoreLevel"),
                            (j = t.extra_data) == null ||
                              (j = j.creative_fatigue_extra_data) == null
                              ? void 0
                              : j.fatigue_score_level,
                          ),
                          "extra_data.creative_fatigue_extra_data.fatigue_score_level",
                          i.id,
                        ),
                        generated_images_urls:
                          (K =
                            (Q = t.extra_data) == null ||
                            (Q = Q.creative_fatigue_extra_data) == null
                              ? void 0
                              : Q.generated_images_urls) != null
                            ? K
                            : [],
                        is_genai_eligible:
                          (X = t.extra_data) == null ||
                          (X = X.creative_fatigue_extra_data) == null
                            ? void 0
                            : X.is_genai_eligible,
                        is_hero:
                          (Y = t.extra_data) == null ||
                          (Y = Y.creative_fatigue_extra_data) == null
                            ? void 0
                            : Y.is_hero,
                        qe_check_required:
                          (J = t.extra_data) == null ||
                          (J = J.creative_fatigue_extra_data) == null
                            ? void 0
                            : J.qe_check_required,
                        show_as_creative_limited: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (Z = t.extra_data) == null ||
                            (Z = Z.creative_fatigue_extra_data) == null
                            ? void 0
                            : Z.show_as_creative_limited,
                          "extra_data.creative_fatigue_extra_data.show_as_creative_limited",
                          i.id,
                        ),
                      })
                    : null,
                currency: (ee = t.extra_data) == null ? void 0 : ee.currency,
                da_oe_ineligible_scenario:
                  (te = t.extra_data) != null && te.da_oe_ineligible_scenario
                    ? {
                        catalog_id: o(
                          "TypeCoercionUtils",
                        ).coerceEmptyStringToUndefined(
                          (ne = t.extra_data) == null ||
                            (ne = ne.da_oe_ineligible_scenario) == null
                            ? void 0
                            : ne.catalog_id,
                        ),
                        da_oe_ineligible_scenario:
                          (re = r("getJSEnumSafe")(
                            r("AdsAemMaeDAOEIneligibleScenario"),
                            (oe = t.extra_data) == null ||
                              (oe = oe.da_oe_ineligible_scenario) == null
                              ? void 0
                              : oe.da_oe_ineligible_scenario,
                          )) != null
                            ? re
                            : void 0,
                        ro_mae_ineligible_scenario:
                          (ae = r("getJSEnumSafe")(
                            r("AdsAemMaeRoMaeIneligibleScenario"),
                            (ie = t.extra_data) == null ||
                              (ie = ie.da_oe_ineligible_scenario) == null
                              ? void 0
                              : ie.ro_mae_ineligible_scenario,
                          )) != null
                            ? ae
                            : void 0,
                        universal_link: o(
                          "TypeCoercionUtils",
                        ).coerceEmptyStringToUndefined(
                          (le = t.extra_data) == null ||
                            (le = le.da_oe_ineligible_scenario) == null
                            ? void 0
                            : le.universal_link,
                        ),
                      }
                    : void 0,
                days_left_in_aem_grace_period:
                  (se =
                    (ue = t.extra_data) == null
                      ? void 0
                      : ue.days_left_in_aem_grace_period) != null
                    ? se
                    : void 0,
                dead_link:
                  ((ce = t.extra_data) == null ? void 0 : ce.dead_link) != null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        adgroup_dead_link_info_dict:
                          (de = t.extra_data) == null ||
                          (de = de.dead_link) == null
                            ? void 0
                            : de.adgroup_dead_link_info_dict.map(function (e) {
                                return {
                                  key: o(
                                    "TypeCoercionUtils",
                                  ).coerceNonMaybeValue(
                                    e.key,
                                    "extra_data.dead_link.adgroup_dead_link_info_dict[].key",
                                    i.id,
                                  ),
                                  value: o(
                                    "TypeCoercionUtils",
                                  ).coerceNonMaybeValue(
                                    e.value,
                                    "extra_data.dead_link.adgroup_dead_link_info_dict[].value",
                                    i.id,
                                  ),
                                };
                              }),
                        failure_rate: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (me = t.extra_data) == null ||
                            (me = me.dead_link) == null
                            ? void 0
                            : me.failure_rate,
                          "extra_data.dead_link.failure_rate",
                          i.id,
                        ),
                        primary_adgroup_id: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (pe = t.extra_data) == null ||
                            (pe = pe.dead_link) == null
                            ? void 0
                            : pe.primary_ad_group_id,
                          "extra_data.dead_link.primary_ad_group_id",
                          i.id,
                        ),
                        status: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (_e = t.extra_data) == null ||
                            (_e = _e.dead_link) == null
                            ? void 0
                            : _e.status,
                          "extra_data.dead_link.status",
                          i.id,
                        ),
                      })
                    : void 0,
                default_whatsapp_phone_number:
                  (fe =
                    (ge = t.extra_data) == null
                      ? void 0
                      : ge.default_whatsapp_phone_number) != null
                    ? fe
                    : void 0,
                dsa_beneficiary:
                  (he = t.extra_data) == null ? void 0 : he.dsa_beneficiary,
                dsa_payor: (ye = t.extra_data) == null ? void 0 : ye.dsa_payor,
                financial_service_value_blocked_limited_delivery_info:
                  ((Ce = t.extra_data) == null
                    ? void 0
                    : Ce.financial_service_value_blocked_limited_delivery_info) !=
                  null
                    ? {
                        limited_delivery_data_source_ids:
                          (be =
                            (ve = t.extra_data) == null
                              ? void 0
                              : ve
                                  .financial_service_value_blocked_limited_delivery_info
                                  .limited_delivery_data_source_ids) != null
                            ? be
                            : [],
                      }
                    : void 0,
                fips_age_geo_block_partial_delivery_info:
                  ((Se = t.extra_data) == null
                    ? void 0
                    : Se.fips_age_geo_block_partial_delivery_info) != null
                    ? {
                        is_appeal_eligible:
                          t.extra_data.fips_age_geo_block_partial_delivery_info
                            .is_appeal_eligible,
                        policy_name:
                          t.extra_data.fips_age_geo_block_partial_delivery_info
                            .policy_name,
                        rule_name:
                          t.extra_data.fips_age_geo_block_partial_delivery_info
                            .rule_name,
                      }
                    : void 0,
                has_ad_account_write_permission:
                  (Re =
                    (Le = t.extra_data) == null
                      ? void 0
                      : Le.has_ad_account_write_permission) != null
                    ? Re
                    : void 0,
                india_finserv_beneficiary_entity_status: r("getJSEnumSafe")(
                  r("BusinessVerificationStatus"),
                  (Ee = t.extra_data) == null
                    ? void 0
                    : Ee.india_finserv_beneficiary_entity_status,
                ),
                india_finserv_payer_entity_status: r("getJSEnumSafe")(
                  r("BusinessVerificationStatus"),
                  (ke = t.extra_data) == null
                    ? void 0
                    : ke.india_finserv_payer_entity_status,
                ),
                is_ctxmd: (Ie = t.extra_data) == null ? void 0 : Ie.is_ctxmd,
                is_declaration_error:
                  (Te = t.extra_data) == null
                    ? void 0
                    : Te.is_declaration_error,
                is_invalid_beneficiary_error:
                  (De = t.extra_data) == null
                    ? void 0
                    : De.is_invalid_beneficiary_error,
                is_live_video_ad:
                  (xe = t.extra_data) == null ? void 0 : xe.is_live_video_ad,
                is_prepaid_funds_account:
                  (($e = t.extra_data) == null
                    ? void 0
                    : $e.is_prepaid_funds_account) == null ||
                  (Pe = t.extra_data) == null
                    ? void 0
                    : Pe.is_prepaid_funds_account,
                learning_stage_info: u(
                  (Ne = t.extra_data) == null ? void 0 : Ne.learning_stage_info,
                ),
                live_video_no_live_delivery_status_info:
                  ((Me = t.extra_data) == null
                    ? void 0
                    : Me.live_video_no_live_delivery_status_info) != null
                    ? {
                        go_live_ddl: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (we = t.extra_data) == null ||
                            (we = we.live_video_no_live_delivery_status_info) ==
                              null
                            ? void 0
                            : we.go_live_ddl,
                          "extra_data.live_video_no_live_delivery_status_info.go_live_ddl",
                          i.id,
                        ),
                        is_live_on_fb: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (Ae = t.extra_data) == null ||
                            (Ae = Ae.live_video_no_live_delivery_status_info) ==
                              null
                            ? void 0
                            : Ae.is_live_on_fb,
                          "extra_data.live_video_no_live_delivery_status_info.is_live_on_fb",
                          i.id,
                        ),
                        live_video_id:
                          (Fe = t.extra_data) == null ||
                          (Fe = Fe.live_video_no_live_delivery_status_info) ==
                            null
                            ? void 0
                            : Fe.live_video_id,
                        profile_id:
                          (Oe = t.extra_data) == null ||
                          (Oe = Oe.live_video_no_live_delivery_status_info) ==
                            null
                            ? void 0
                            : Oe.profile_id,
                      }
                    : void 0,
                mae_aemv2_ineligible_reasons: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (Be = t.extra_data) == null
                    ? void 0
                    : Be.mae_aemv2_ineligible_reasons.map(function (e) {
                        return o(
                          "AdsMAEAEMv2IneligibleReasonUtils.facebook",
                        ).toJSEnum(e);
                      }),
                ),
                mai_aemv2_ineligible_reasons: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (We = t.extra_data) == null
                    ? void 0
                    : We.mai_aemv2_ineligible_reasons.map(function (e) {
                        return o(
                          "AdsMAIIneligibleReasonUtils.facebook",
                        ).toJSEnum(e);
                      }),
                ),
                messenger_page_messaging_feature_limit:
                  (qe = t.extra_data) != null &&
                  qe.messenger_page_messaging_feature_limit
                    ? {
                        messaging_feature_limit_duration:
                          (Ue =
                            (Ve = t.extra_data) == null ||
                            (Ve = Ve.messenger_page_messaging_feature_limit) ==
                              null
                              ? void 0
                              : Ve.messaging_feature_limit_duration) != null
                            ? Ue
                            : void 0,
                        messaging_feature_limit_type: e(
                          (He = t.extra_data) == null ||
                            (He = He.messenger_page_messaging_feature_limit) ==
                              null
                            ? void 0
                            : He.messaging_feature_limit_type,
                        ),
                        messaging_violation_type:
                          (Ge =
                            (ze = t.extra_data) == null ||
                            (ze = ze.messenger_page_messaging_feature_limit) ==
                              null
                              ? void 0
                              : ze.messaging_violation_type) != null
                            ? Ge
                            : void 0,
                      }
                    : void 0,
                multi_ad_account_over_skan_campaign_limits_info:
                  ((je = t.extra_data) == null
                    ? void 0
                    : je.multi_ad_account_over_skan_campaign_limits_info) !=
                  null
                    ? {
                        campaign_ids_this_account:
                          (Ke = t.extra_data) == null ||
                          (Ke =
                            Ke.multi_ad_account_over_skan_campaign_limits_info) ==
                            null
                            ? void 0
                            : Ke.campaign_ids_this_account,
                        error_code:
                          (Qe =
                            (Xe = t.extra_data) == null ||
                            (Xe =
                              Xe.multi_ad_account_over_skan_campaign_limits_info) ==
                              null
                              ? void 0
                              : Xe.error_code) != null
                            ? Qe
                            : void 0,
                        ios_14_plus_campaign_group_limit: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (Ye = t.extra_data) == null ||
                            (Ye =
                              Ye.multi_ad_account_over_skan_campaign_limits_info) ==
                              null
                            ? void 0
                            : Ye.ios_14_plus_campaign_group_limit,
                          "extra_data.multi_ad_account_over_skan_campaign_limits_info.ios_14_plus_campaign_group_limit",
                          i.id,
                        ),
                        num_active_campaigns_other_account: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (Je = t.extra_data) == null ||
                            (Je =
                              Je.multi_ad_account_over_skan_campaign_limits_info) ==
                              null
                            ? void 0
                            : Je.num_active_campaigns_other_account,
                          "extra_data.multi_ad_account_over_skan_campaign_limits_info.num_active_campaigns_other_account",
                          i.id,
                        ),
                        num_active_campaigns_this_account: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (Ze = t.extra_data) == null ||
                            (Ze =
                              Ze.multi_ad_account_over_skan_campaign_limits_info) ==
                              null
                            ? void 0
                            : Ze.num_active_campaigns_this_account,
                          "extra_data.multi_ad_account_over_skan_campaign_limits_info.num_active_campaigns_this_account",
                          i.id,
                        ),
                        num_cooldown_campaigns_other_account: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (et = t.extra_data) == null ||
                            (et =
                              et.multi_ad_account_over_skan_campaign_limits_info) ==
                              null
                            ? void 0
                            : et.num_cooldown_campaigns_other_account,
                          "extra_data.multi_ad_account_over_skan_campaign_limits_info.num_cooldown_campaigns_other_account",
                          i.id,
                        ),
                        num_cooldown_campaigns_this_account: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (tt = t.extra_data) == null ||
                            (tt =
                              tt.multi_ad_account_over_skan_campaign_limits_info) ==
                              null
                            ? void 0
                            : tt.num_cooldown_campaigns_this_account,
                          "extra_data.multi_ad_account_over_skan_campaign_limits_info.num_cooldown_campaigns_this_account",
                          i.id,
                        ),
                        skan_cool_down_time_hour: void 0,
                      }
                    : void 0,
                omnichannel_learning_limited_info:
                  ((nt = t.extra_data) == null
                    ? void 0
                    : nt.omnichannel_learning_limited_info) != null
                    ? {
                        adgroup_count:
                          (rt =
                            (ot = t.extra_data) == null ||
                            (ot = ot.omnichannel_learning_limited_info) == null
                              ? void 0
                              : ot.adgroup_count) != null
                            ? rt
                            : 0,
                        adgroups_with_tracking_issue:
                          (at = o(
                            "TypeCoercionUtils",
                          ).coerceEmptyArrayToUndefined(
                            (it = t.extra_data) == null ||
                              (it = it.omnichannel_learning_limited_info) ==
                                null
                              ? void 0
                              : it.adgroups_with_tracking_issue,
                          )) != null
                            ? at
                            : [],
                        campaign_count:
                          (lt =
                            (st = t.extra_data) == null ||
                            (st = st.omnichannel_learning_limited_info) == null
                              ? void 0
                              : st.campaign_count) != null
                            ? lt
                            : 0,
                        campaigns_with_event_volume_drop:
                          (ut = o(
                            "TypeCoercionUtils",
                          ).coerceEmptyArrayToUndefined(
                            (ct = t.extra_data) == null ||
                              (ct = ct.omnichannel_learning_limited_info) ==
                                null
                              ? void 0
                              : ct.campaigns_with_event_volume_drop,
                          )) != null
                            ? ut
                            : [],
                        campaigns_with_purchase_event_coverage:
                          (dt = o(
                            "TypeCoercionUtils",
                          ).coerceEmptyArrayToUndefined(
                            (mt = t.extra_data) == null ||
                              (mt = mt.omnichannel_learning_limited_info) ==
                                null
                              ? void 0
                              : mt.campaigns_with_purchase_event_coverage,
                          )) != null
                            ? dt
                            : [],
                        campaigns_with_purchase_event_volume_drop:
                          (pt = o(
                            "TypeCoercionUtils",
                          ).coerceEmptyArrayToUndefined(
                            (_t = t.extra_data) == null ||
                              (_t = _t.omnichannel_learning_limited_info) ==
                                null
                              ? void 0
                              : _t.campaigns_with_purchase_event_volume_drop,
                          )) != null
                            ? pt
                            : [],
                        campaigns_with_purchase_value_negative_or_zero:
                          (ft = o(
                            "TypeCoercionUtils",
                          ).coerceEmptyArrayToUndefined(
                            (gt = t.extra_data) == null ||
                              (gt = gt.omnichannel_learning_limited_info) ==
                                null
                              ? void 0
                              : gt.campaigns_with_purchase_value_negative_or_zero,
                          )) != null
                            ? ft
                            : [],
                      }
                    : void 0,
                optimal_audience_size:
                  (ht = t.extra_data) == null
                    ? void 0
                    : ht.optimal_audience_size,
                partial_active_info:
                  ((yt = t.extra_data) == null
                    ? void 0
                    : yt.partial_active_info) != null
                    ? {
                        primary_adgroup_id:
                          (Ct = o(
                            "TypeCoercionUtils",
                          ).coerceMaybeStringToNumber(
                            (bt = t.extra_data) == null ||
                              (bt = bt.partial_active_info) == null ||
                              (bt = bt.primary_adgroup) == null
                              ? void 0
                              : bt.id,
                          )) != null
                            ? Ct
                            : void 0,
                        rejected_headline_count: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (vt = t.extra_data) == null ||
                            (vt = vt.partial_active_info) == null
                            ? void 0
                            : vt.rejected_headline_count,
                          "extra_data.partial_active_info.rejected_headline_count",
                          i.id,
                        ),
                        rejected_media_count: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (St = t.extra_data) == null ||
                            (St = St.partial_active_info) == null
                            ? void 0
                            : St.rejected_media_count,
                          "extra_data.partial_active_info.rejected_media_count",
                          i.id,
                        ),
                        rejected_primary_text_count: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (Rt = t.extra_data) == null ||
                            (Rt = Rt.partial_active_info) == null
                            ? void 0
                            : Rt.rejected_primary_text_count,
                          "extra_data.partial_active_info.rejected_primary_text_count",
                          i.id,
                        ),
                      }
                    : void 0,
                pending_review_status_info:
                  ((Lt = t.extra_data) == null
                    ? void 0
                    : Lt.pending_review_status_info) != null
                    ? {
                        latest_update_time: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (Et = t.extra_data) == null ||
                            (Et = Et.pending_review_status_info) == null
                            ? void 0
                            : Et.latest_update_time,
                          "extra_data.pending_review_status_info.latest_update_time",
                          i.id,
                        ),
                        review_status:
                          ((kt = t.extra_data) == null ||
                          (kt = kt.pending_review_status_info) == null
                            ? void 0
                            : kt.review_status) != null &&
                          (It = o("enumUtils").coerce(
                            (Tt = t.extra_data) == null ||
                              (Tt = Tt.pending_review_status_info) == null
                              ? void 0
                              : Tt.review_status,
                            r("AdsDeliveryReviewStatus"),
                          )) != null
                            ? It
                            : void 0,
                      }
                    : void 0,
                recommended_budget:
                  (Dt = t.extra_data) == null ? void 0 : Dt.recommended_budget,
                regional_regulated_categories:
                  (xt =
                    ($t = t.extra_data) == null ||
                    ($t = $t.regional_regulated_categories) == null
                      ? void 0
                      : $t.map(function (e) {
                          return o("TypeCoercionUtils").coerceNonMaybeValue(
                            r("getJSEnumSafe")(
                              r("AdproRegionalRegulatedCategory"),
                              e,
                            ),
                            "extra_data.regional_regulated_categories[].category",
                            i.id,
                          );
                        })) != null
                    ? xt
                    : [],
                ro_mae_ineligible_scenario:
                  (Pt = t.extra_data) != null &&
                  (Pt = Pt.ro_mae_ineligible_scenario) != null &&
                  Pt.ro_mae_ineligible_scenario
                    ? {
                        catalog_id: o(
                          "TypeCoercionUtils",
                        ).coerceEmptyStringToUndefined(
                          (Nt = t.extra_data) == null ||
                            (Nt = Nt.ro_mae_ineligible_scenario) == null
                            ? void 0
                            : Nt.catalog_id,
                        ),
                        da_oe_ineligible_scenario:
                          (Mt = r("getJSEnumSafe")(
                            r("AdsAemMaeDAOEIneligibleScenario"),
                            (wt = t.extra_data) == null ||
                              (wt = wt.ro_mae_ineligible_scenario) == null
                              ? void 0
                              : wt.da_oe_ineligible_scenario,
                          )) != null
                            ? Mt
                            : void 0,
                        ro_mae_ineligible_scenario:
                          (At = r("getJSEnumSafe")(
                            r("AdsAemMaeRoMaeIneligibleScenario"),
                            (Ft = t.extra_data) == null ||
                              (Ft = Ft.ro_mae_ineligible_scenario) == null
                              ? void 0
                              : Ft.ro_mae_ineligible_scenario,
                          )) != null
                            ? At
                            : void 0,
                        universal_link: o(
                          "TypeCoercionUtils",
                        ).coerceEmptyStringToUndefined(
                          (Ot = t.extra_data) == null ||
                            (Ot = Ot.ro_mae_ineligible_scenario) == null
                            ? void 0
                            : Ot.universal_link,
                        ),
                      }
                    : void 0,
                self_report_in_review_info:
                  ((Bt = t.extra_data) == null
                    ? void 0
                    : Bt.self_report_in_review_info) != null
                    ? {
                        report_creation_time: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (Wt = t.extra_data) == null ||
                            (Wt = Wt.self_report_in_review_info) == null
                            ? void 0
                            : Wt.report_creation_time,
                          "extra_data.self_report_in_review_info.report_creation_time",
                          i.id,
                        ),
                        report_id: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (qt = t.extra_data) == null ||
                            (qt = qt.self_report_in_review_info) == null
                            ? void 0
                            : qt.report_id,
                          "extra_data.self_report_in_review_info.report_id",
                          i.id,
                        ),
                      }
                    : void 0,
                shop_ads_disconnected_identity_info:
                  ((Ut = t.extra_data) == null
                    ? void 0
                    : Ut.shop_ads_disconnected_identity_info) != null
                    ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        (Vt = t.extra_data) == null
                          ? void 0
                          : Vt.shop_ads_disconnected_identity_info.map(
                              function (e) {
                                return {
                                  ad_object_id: o(
                                    "TypeCoercionUtils",
                                  ).coerceNonMaybeValue(
                                    e.ad_object_id,
                                    "extra_data.shop_ads_disconnected_identity_info[].info.ad_object_id",
                                    i.id,
                                  ),
                                };
                              },
                            ),
                      )
                    : void 0,
                shop_ads_invalid_product_info:
                  ((Ht = t.extra_data) == null
                    ? void 0
                    : Ht.shop_ads_invalid_product_info) != null
                    ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        (Gt = t.extra_data) == null
                          ? void 0
                          : Gt.shop_ads_invalid_product_info.map(function (e) {
                              return {
                                ad_object_id: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  e.ad_object_id,
                                  "extra_data.shop_ads_invalid_product_info[].ad_object_id",
                                  i.id,
                                ),
                                invalid_reason: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  String(e.invalid_reason),
                                  "extra_data.shop_ads_invalid_product_info[].invalid_reason",
                                  i.id,
                                ),
                                product_name: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  e.product_name,
                                  "extra_data.shop_ads_invalid_product_info[].product_name",
                                  i.id,
                                ),
                              };
                            }),
                      )
                    : void 0,
                shopify_app_installation_uri:
                  (zt = t.extra_data) == null
                    ? void 0
                    : zt.shopify_app_installation_uri,
                signal_diagnostic_issue_info:
                  ((jt = t.extra_data) == null
                    ? void 0
                    : jt.signal_diagnostic_issue_info) != null
                    ? {
                        data_source_id: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          (Kt = t.extra_data) == null ||
                            (Kt = Kt.signal_diagnostic_issue_info) == null
                            ? void 0
                            : Kt.data_source_id,
                          "extra_data.signal_diagnostic_issue_info.data_source_id",
                          i.id,
                        ),
                        data_source_type: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          o("SignalsDataSourcesEnumUtils.facebook").toJSEnum(
                            (Qt = t.extra_data) == null ||
                              (Qt = Qt.signal_diagnostic_issue_info) == null
                              ? void 0
                              : Qt.data_source_type,
                          ),
                          "extra_data.signal_diagnostic_issue_info.data_source_type",
                          i.id,
                        ),
                        diagnostic_type: o(
                          "TypeCoercionUtils",
                        ).coerceNonMaybeValue(
                          o(
                            "SignalsDiagnosticEventEnumUtils.facebook",
                          ).toJSEnum(
                            (Xt = t.extra_data) == null ||
                              (Xt = Xt.signal_diagnostic_issue_info) == null
                              ? void 0
                              : Xt.diagnostic_type,
                          ),
                          "extra_data.signal_diagnostic_issue_info.diagnostic_type",
                          i.id,
                        ),
                        event_name: o("TypeCoercionUtils").coerceNonMaybeValue(
                          (Yt = t.extra_data) == null ||
                            (Yt = Yt.signal_diagnostic_issue_info) == null
                            ? void 0
                            : Yt.event_name,
                          "extra_data.signal_diagnostic_issue_info.event_name",
                          i.id,
                        ),
                        traffic_anomaly_drop_percentage:
                          (Jt =
                            (Zt = t.extra_data) == null ||
                            (Zt = Zt.signal_diagnostic_issue_info) == null
                              ? void 0
                              : Zt.traffic_anomaly_drop_percentage) != null
                            ? Jt
                            : void 0,
                        traffic_anomaly_drop_timestamp:
                          (en =
                            (tn = t.extra_data) == null ||
                            (tn = tn.signal_diagnostic_issue_info) == null
                              ? void 0
                              : tn.traffic_anomaly_drop_timestamp) != null
                            ? en
                            : void 0,
                      }
                    : void 0,
                signals_data_restriction_info:
                  ((nn = t.extra_data) == null
                    ? void 0
                    : nn.signals_data_restriction_info) != null
                    ? {
                        restricted_entities:
                          (rn = t.extra_data) == null ||
                          (rn = rn.signals_data_restriction_info) == null
                            ? void 0
                            : rn.restricted_entities,
                      }
                    : void 0,
                signals_event_data_restriction_info:
                  ((on = t.extra_data) == null
                    ? void 0
                    : on.signals_event_data_restriction_info) != null
                    ? {
                        affected_conversion_data_sources:
                          (an =
                            (ln = t.extra_data) == null ||
                            (ln = ln.signals_event_data_restriction_info) ==
                              null ||
                            (ln = ln.affected_conversion_data_sources) == null
                              ? void 0
                              : ln.map(function (e) {
                                  return babelHelpers.extends({}, e, {
                                    cen_restricted_events: s(
                                      e.cen_restricted_events,
                                    ),
                                  });
                                })) != null
                            ? an
                            : [],
                        affected_targeting_data_sources:
                          (sn =
                            (un = t.extra_data) == null ||
                            (un = un.signals_event_data_restriction_info) ==
                              null ||
                            (un = un.affected_targeting_data_sources) == null
                              ? void 0
                              : un.map(function (e) {
                                  return babelHelpers.extends({}, e, {
                                    cen_restricted_events: s(
                                      e.cen_restricted_events,
                                    ),
                                  });
                                })) != null
                            ? sn
                            : [],
                        current_eu_eligibility:
                          (cn =
                            (dn = t.extra_data) == null ||
                            (dn = dn.signals_event_data_restriction_info) ==
                              null
                              ? void 0
                              : dn.current_eu_eligibility) != null
                            ? cn
                            : void 0,
                        current_row_eligibility:
                          (mn =
                            (pn = t.extra_data) == null ||
                            (pn = pn.signals_event_data_restriction_info) ==
                              null
                              ? void 0
                              : pn.current_row_eligibility) != null
                            ? mn
                            : void 0,
                        future_eu_eligibility:
                          (_n =
                            (fn = t.extra_data) == null ||
                            (fn = fn.signals_event_data_restriction_info) ==
                              null
                              ? void 0
                              : fn.future_eu_eligibility) != null
                            ? _n
                            : void 0,
                        future_row_eligibility:
                          (gn =
                            (hn = t.extra_data) == null ||
                            (hn = hn.signals_event_data_restriction_info) ==
                              null
                              ? void 0
                              : hn.future_row_eligibility) != null
                            ? gn
                            : void 0,
                        grace_period_days_remaining:
                          (yn =
                            (Cn = t.extra_data) == null ||
                            (Cn = Cn.signals_event_data_restriction_info) ==
                              null
                              ? void 0
                              : Cn.grace_period_days_remaining) != null
                            ? yn
                            : void 0,
                        remaining_days_until_enforcement:
                          (bn =
                            (vn = t.extra_data) == null ||
                            (vn = vn.signals_event_data_restriction_info) ==
                              null
                              ? void 0
                              : vn.remaining_days_until_enforcement) != null
                            ? bn
                            : 0,
                        restricted_conversion_data_source_ids:
                          (Sn =
                            (Rn = t.extra_data) == null ||
                            (Rn = Rn.signals_event_data_restriction_info) ==
                              null
                              ? void 0
                              : Rn.restricted_conversion_data_source_ids) !=
                          null
                            ? Sn
                            : [],
                        restricted_targeting_data_source_ids:
                          (Ln =
                            (En = t.extra_data) == null ||
                            (En = En.signals_event_data_restriction_info) ==
                              null
                              ? void 0
                              : En.restricted_targeting_data_source_ids) != null
                            ? Ln
                            : [],
                      }
                    : void 0,
                singapore_universal_beneficiary_entity_status: r(
                  "getJSEnumSafe",
                )(
                  r("BusinessVerificationStatus"),
                  (kn = t.extra_data) == null
                    ? void 0
                    : kn.singapore_universal_beneficiary_entity_status,
                ),
                singapore_universal_payer_entity_status: r("getJSEnumSafe")(
                  r("BusinessVerificationStatus"),
                  (In = t.extra_data) == null
                    ? void 0
                    : In.singapore_universal_payer_entity_status,
                ),
                skan_readiness_status: r("getJSEnumSafe")(
                  r("SKANReadinessStatus"),
                  (Tn = t.extra_data) == null
                    ? void 0
                    : Tn.skan_readiness_status,
                ),
                taiwan_finserv_beneficiary_entity_status: r("getJSEnumSafe")(
                  r("BusinessVerificationStatus"),
                  (Dn = t.extra_data) == null
                    ? void 0
                    : Dn.taiwan_finserv_beneficiary_entity_status,
                ),
                taiwan_finserv_payer_entity_status: r("getJSEnumSafe")(
                  r("BusinessVerificationStatus"),
                  (xn = t.extra_data) == null
                    ? void 0
                    : xn.taiwan_finserv_payer_entity_status,
                ),
                time_until_event_cooldown:
                  ($n = t.extra_data) == null
                    ? void 0
                    : $n.time_until_event_cooldown,
                time_until_ios_fourteen_campaign_cooldown:
                  (Pn = t.extra_data) == null
                    ? void 0
                    : Pn.time_until_ios_14_campaign_cooldown,
                unavailable_event_info: d(
                  (Nn = t.extra_data) == null
                    ? void 0
                    : Nn.unavailable_event_info,
                ),
                universal_beneficiary_entity_status: r("getJSEnumSafe")(
                  r("BusinessVerificationStatus"),
                  (Mn = t.extra_data) == null
                    ? void 0
                    : Mn.universal_beneficiary_entity_status,
                ),
                universal_payer_entity_status: r("getJSEnumSafe")(
                  r("BusinessVerificationStatus"),
                  (wn = t.extra_data) == null
                    ? void 0
                    : wn.universal_payer_entity_status,
                ),
                validation_error: void 0,
                web_only_deprecation_adgroup_ids:
                  (An =
                    (Fn = t.extra_data) == null
                      ? void 0
                      : Fn.web_only_deprecation_adgroup_ids) != null
                    ? An
                    : void 0,
                whatsapp_business_account_appeal_status:
                  (On =
                    (Bn = t.extra_data) == null
                      ? void 0
                      : Bn.whatsapp_business_account_appeal_status) != null
                    ? On
                    : void 0,
                whatsapp_business_account_id:
                  (Wn =
                    (qn = t.extra_data) == null
                      ? void 0
                      : qn.whatsapp_business_account_id) != null
                    ? Wn
                    : void 0,
                whatsapp_business_account_name:
                  (Un =
                    (Vn = t.extra_data) == null
                      ? void 0
                      : Vn.whatsapp_business_account_name) != null
                    ? Un
                    : void 0,
                whatsapp_business_account_restriction_end_date:
                  (Hn =
                    (Gn = t.extra_data) == null
                      ? void 0
                      : Gn.whatsapp_business_account_restriction_end_date) !=
                  null
                    ? Hn
                    : void 0,
                whatsapp_phone_number:
                  (zn =
                    (jn = t.extra_data) == null
                      ? void 0
                      : jn.whatsapp_phone_number) != null
                    ? zn
                    : void 0,
                whatsapp_template_id:
                  (Kn =
                    (Qn = t.extra_data) == null
                      ? void 0
                      : Qn.whatsapp_template_id) != null
                    ? Kn
                    : void 0,
                whatsapp_template_rejection_reason:
                  (Xn = r("getJSEnumSafe")(
                    r("WhatsAppBusinessHSMRejectionReason"),
                    (Yn = t.extra_data) == null
                      ? void 0
                      : Yn.whatsapp_template_rejection_reason,
                  )) != null
                    ? Xn
                    : void 0,
                whatsapp_template_status:
                  (Jn = r("getJSEnumSafe")(
                    r("WhatsAppBusinessHSMStatus"),
                    (Zn = t.extra_data) == null
                      ? void 0
                      : Zn.whatsapp_template_status,
                  )) != null
                    ? Jn
                    : void 0,
                whatsapp_template_top_block_reason:
                  (er =
                    (tr = t.extra_data) == null
                      ? void 0
                      : tr.whatsapp_template_top_block_reason) != null
                    ? er
                    : void 0,
              })
            : void 0,
        status: o("TypeCoercionUtils").coerceNonMaybeValue(
          r("getJSEnumSafe")(r("AdsManagerDeliveryStatus"), t.status),
          "data.status",
          i.id,
        ),
        substatuses: t.substatuses.map(function (e) {
          return o("TypeCoercionUtils").coerceNonMaybeValue(
            r("getJSEnumSafe")(r("AdsManagerDeliverySubstatus"), e.id),
            "substatus.id",
            i.id,
          );
        }),
      };
    }
    l.coerceGraphQLSpecToGraphAPI = m;
  },
  98,
);
