__d(
  "Page-base_page_spec-resolver",
  [
    "AdCampaignDestination",
    "AdsManagerErrorUtils",
    "AdsPromotedObjectTypes",
    "CTDDownFunnelOptimizationEligibilityExpansionQEUniverse",
    "ClickToMessageDefaultingSource",
    "FBLogger",
    "PageBasePageSpecResolver.graphql",
    "RelayHooks",
    "TypeCoercionUtils",
    "XFBCtmPurchaseEligibilityTagUtils.facebook",
    "XFBRecommendedPostSourceUtils.facebook",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t,
        n,
        r =
          (t =
            e == null || (n = e.nodes) == null
              ? void 0
              : n.map(function (e) {
                  return {
                    id: o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.id,
                      "name_id_node_array[].id",
                      i.id,
                    ),
                    name: o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.name,
                      "name_id_node_array[].name",
                      i.id,
                    ),
                  };
                })) != null
            ? t
            : null,
        a = r !== null ? { data: r } : void 0;
      return a;
    }
    function u(e) {
      var t,
        n,
        r =
          (t =
            e == null || (n = e.nodes) == null
              ? void 0
              : n.map(function (e) {
                  var t, n;
                  return {
                    business: {
                      id: o("TypeCoercionUtils").coerceNonMaybeValue(
                        (t = e.business) == null ? void 0 : t.id,
                        "businessprojects.nodes[].business.id",
                        i.id,
                      ),
                      name: o("TypeCoercionUtils").coerceNonMaybeValue(
                        (n = e.business) == null ? void 0 : n.name,
                        "businessprojects.nodes[].business.name",
                        i.id,
                      ),
                    },
                    id: o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.id,
                      "businessprojects.nodes[].id",
                      i.id,
                    ),
                    name: o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.name,
                      "businessprojects.nodes[].name",
                      i.id,
                    ),
                  };
                })) != null
            ? t
            : null;
      if (!(r === null || r.length === 0)) {
        var a = { data: r };
        return a;
      }
    }
    function c(e, t) {
      var n = {
        latitude: o("TypeCoercionUtils").coerceOptionalValue(
          t == null ? void 0 : t.latitude,
        ),
        longitude: o("TypeCoercionUtils").coerceOptionalValue(
          t == null ? void 0 : t.longitude,
        ),
        name: o("TypeCoercionUtils").coerceOptionalValue(
          e == null ? void 0 : e.name,
        ),
        street: o("TypeCoercionUtils").coerceEmptyStringToUndefined(
          e == null ? void 0 : e.street,
        ),
      };
      return o("TypeCoercionUtils").coerceObjectToUndefined(n);
    }
    function d(e, t) {
      var n,
        r = {
          height: o("TypeCoercionUtils").coerceNonMaybeValue(
            e == null ? void 0 : e.height,
            "profile_picture.height",
            i.id,
          ),
          is_silhouette: o("TypeCoercionUtils").coerceNonMaybeValue(
            e == null ? void 0 : e.is_silhouette,
            "profile_picture.is_silhouette",
            i.id,
          ),
          url: o("TypeCoercionUtils").coerceNonMaybeValue(
            (n = t != null ? t : e == null ? void 0 : e.uri) != null ? n : "",
            "url",
            i.id,
          ),
          width: o("TypeCoercionUtils").coerceNonMaybeValue(
            e == null ? void 0 : e.width,
            "profile_picture.width",
            i.id,
          ),
        };
      return o("TypeCoercionUtils").coerceNonMaybeValue(
        { data: r },
        "picture",
        i.id,
      );
    }
    function m(e) {
      if (e != null) {
        var t = {
          messaging_feature_limit_duration: o(
            "TypeCoercionUtils",
          ).coerceOptionalValue(
            e == null ? void 0 : e.messaging_feature_limit_duration,
          ),
          messaging_feature_limit_type: o(
            "TypeCoercionUtils",
          ).coerceNonMaybeValue(
            e != null && e.messaging_feature_limit_type
              ? p(e.messaging_feature_limit_type)
              : "not_feature_limited",
            "messaging_feature_limit.messaging_feature_limit_type",
            i.id,
          ),
          messaging_violation_type: o("TypeCoercionUtils").coerceOptionalValue(
            e == null ? void 0 : e.messaging_violation_type,
          ),
        };
        return t;
      }
    }
    function p(e) {
      switch (e) {
        case "NOT_FEATURE_LIMITED":
          return "not_feature_limited";
        case "PERMANENTLY_FEATURE_LIMITED":
          return "permanently_feature_limited";
        case "TEMPORARILY_FEATURE_LIMITED":
          return "temporarily_feature_limited";
        case "%future added value":
          return (
            r("FBLogger")("page_graphql", "messaging_feature_limit").warn(
              "Unhandled future value: %s",
              e,
            ),
            "not_feature_limited"
          );
        default:
          return (
            r("FBLogger")("page_graphql", "messaging_feature_limit").warn(
              "Unexpected input type: %s",
              e,
            ),
            "not_feature_limited"
          );
      }
    }
    function _(e) {
      if (e != null) {
        var t = {
          ctd: o("TypeCoercionUtils").coerceNonMaybeValue(
            e.ctd,
            "ctx_page_based_default_greeting_text.ctd",
            i.id,
          ),
          ctm: o("TypeCoercionUtils").coerceNonMaybeValue(
            e.ctm,
            "ctx_page_based_default_greeting_text.ctm",
            i.id,
          ),
          ctwa: o("TypeCoercionUtils").coerceNonMaybeValue(
            e.ctwa,
            "ctx_page_based_default_greeting_text.ctwa",
            i.id,
          ),
        };
        return o("TypeCoercionUtils").coerceObjectToUndefined(t);
      }
    }
    function f(e) {
      var t;
      if (!(e == null || (e == null ? void 0 : e.id) == null))
        return {
          id: o("TypeCoercionUtils").coerceMaybeFBIDtoZeroOrFBID(e.id),
          name:
            (t = o("TypeCoercionUtils").coerceOptionalValue(
              e == null ? void 0 : e.name,
            )) != null
              ? t
              : "",
        };
    }
    function g(e) {
      if (!(!e || e.length === 0))
        return e.map(function (e) {
          var t, n, r, o, a;
          return {
            ctd_support_only_for_ig_app:
              (t = e.ctd_support_only_for_ig_app) != null ? t : !1,
            has_instagram_messaging_permission:
              (n = e.has_instagram_messaging_permission) != null ? n : !1,
            has_messenger_messaging_permission:
              (r = e.has_messenger_messaging_permission) != null ? r : !1,
            id: (o = e.id) != null ? o : "",
            name: (a = e.name) != null ? a : "",
          };
        });
    }
    function h(e) {
      if (!(e == null || e.automation_id == null)) {
        var t = e.eligible_faq_response_pairs.map(function (e) {
          return {
            custom_question: o("TypeCoercionUtils").coerceNonMaybeValue(
              e.custom_question,
              "inbox_faq_automation.eligible_faq_response_pairs[].custom_question",
              i.id,
            ),
            saved_response: o("TypeCoercionUtils").coerceNonMaybeValue(
              e.saved_response,
              "inbox_faq_automation.eligible_faq_response_pairs[].saved_response",
              i.id,
            ),
          };
        });
        return {
          automation_id: o("TypeCoercionUtils").coerceNonMaybeValue(
            e.automation_id,
            "inbox_faq_automation.automation_id",
            i.id,
          ),
          eligible_faq_response_pairs:
            o("TypeCoercionUtils").coerceEmptyArrayToUndefined(t),
          skipped_faq_with_media_or_button: o(
            "TypeCoercionUtils",
          ).coerceNonMaybeValue(
            e.skipped_faq_with_media_or_button,
            "inbox_faq_automation.skipped_faq_with_media_or_button",
            i.id,
          ),
        };
      }
    }
    function y(e) {
      var t = o("TypeCoercionUtils").coerceOptionalValue(
        e == null ? void 0 : e.source,
      );
      if (t != null) return { source: t };
    }
    function C(e) {
      if (e != null && e.ok === !1 && Array.isArray(e.errors)) {
        var t = e.errors;
        return o("AdsManagerErrorUtils").parseRelayCatchError(t);
      }
      return null;
    }
    function b(e) {
      var t,
        n,
        r,
        a = [],
        l = new Set([
          "MANAGE",
          "PROFILE_PLUS_FULL_CONTROL",
          "PROFILE_PLUS_MANAGE",
        ]),
        s = new Set([
          "CREATE_CONTENT",
          "PROFILE_PLUS_CREATE_CONTENT",
          "PROFILE_PLUS_FACEBOOK_ACCESS",
        ]),
        u =
          (e == null || (t = e.permitted_tasks) == null ? void 0 : t.ok) === !0
            ? e.permitted_tasks.value.map(function (e) {
                return o("TypeCoercionUtils").coerceNonMaybeValue(
                  e,
                  "permitted_tasks.value",
                  i.id,
                );
              })
            : [];
      u.some(function (e) {
        return l.has(e);
      })
        ? a.push({ role: "MANAGER" })
        : u.some(function (e) {
            return s.has(e);
          }) && a.push({ role: "CONTENT_CREATOR" });
      var c =
        (n =
          (r = e.page_businesses) == null
            ? void 0
            : r.nodes.map(function (e) {
                return {
                  business: {
                    id: o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.id,
                      "page_businesses[].id",
                      i.id,
                    ),
                    name: o("TypeCoercionUtils").coerceNonMaybeValue(
                      e.name,
                      "page_businesses[].name",
                      i.id,
                    ),
                  },
                  role: "",
                };
              })) != null
          ? n
          : [];
      if (
        ((c = c.sort(function (e, t) {
          return e.business.id < t.business.id ? 1 : -1;
        })),
        !(a.length === 0 && c.length === 0))
      )
        return { data: a.concat(c) };
    }
    function v(e) {
      return o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        e.map(function (e) {
          var t;
          return {
            app_data: S(e.app_data),
            flow_data: (t = R(e.flow_data)) != null ? t : [],
          };
        }),
      );
    }
    function S(e) {
      if (e != null)
        return {
          app_id: o("TypeCoercionUtils").coerceNonMaybeValue(
            e.app_id,
            "app_data.app_id",
            i.id,
          ),
          app_name: o("TypeCoercionUtils").coerceNonMaybeValue(
            e.app_name,
            "app_data.app_name",
            i.id,
          ),
        };
    }
    function R(e) {
      if (e != null)
        return o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          e.map(function (e) {
            var t, n;
            return {
              compatible_platforms:
                (t = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  e.compatible_platforms.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      e,
                      "flow[].compatible_platforms[]",
                      i.id,
                    );
                  }),
                )) != null
                  ? t
                  : [],
              eligible_platforms:
                (n = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  e.eligible_platforms.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      e,
                      "flow[].eligible_platforms[]",
                      i.id,
                    );
                  }),
                )) != null
                  ? n
                  : [],
              id: o("TypeCoercionUtils").coerceNonMaybeValue(
                e.id,
                "flow[].id",
                i.id,
              ),
              is_ig_only_flow: o("TypeCoercionUtils").coerceNonMaybeValue(
                e.is_ig_only_flow,
                "flow[].is_ig_only_flow",
                i.id,
              ),
              last_update_time: o("TypeCoercionUtils").coerceNonMaybeValue(
                e.last_update_time,
                "flow[].last_update_time",
                i.id,
              ),
              name: o("TypeCoercionUtils").coerceNonMaybeValue(
                e.name,
                "flow[].name",
                i.id,
              ),
              welcome_message_flow: o("TypeCoercionUtils").coerceNonMaybeValue(
                e.welcome_message_flow,
                "flow[].welcome_message_flow",
                i.id,
              ),
            };
          }),
        );
    }
    function L(e) {
      return o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        e.map(function (e) {
          return {
            id: o("TypeCoercionUtils").coerceNonMaybeValue(
              e.id,
              "subscribed_apps[].id",
              i.id,
            ),
            name: o("TypeCoercionUtils").coerceNonMaybeValue(
              e.name,
              "subscribed_apps[].name",
              i.id,
            ),
            waba_id: o("TypeCoercionUtils").coerceNonMaybeValue(
              e.waba_id,
              "subscribed_apps[].waba_id",
              i.id,
            ),
          };
        }),
      );
    }
    function E(e) {
      return o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        e.map(function (e) {
          return {
            page_whatsapp_number: o("TypeCoercionUtils").coerceNonMaybeValue(
              e.page_whatsapp_number,
              "whatsapp_messaging_apps_info[].page_whatsapp_number",
              i.id,
            ),
            subscribed_apps: L(e.subscribed_apps),
          };
        }),
      );
    }
    function k(e) {
      var t, n, r;
      return e == null
        ? void 0
        : {
            recommendation_source:
              (t = o("XFBRecommendedPostSourceUtils.facebook").toJSEnum(
                e == null ? void 0 : e.recommendation_source,
              )) != null
                ? t
                : "default",
            recommended_posts:
              (n =
                e == null || (r = e.recommended_posts) == null
                  ? void 0
                  : r.map(function (e) {
                      return {
                        intent_score: o(
                          "TypeCoercionUtils",
                        ).coerceOptionalValue(e.intent_score),
                        is_ig_media: o("TypeCoercionUtils").coerceOptionalValue(
                          e.is_ig_media,
                        ),
                        post_id: o("TypeCoercionUtils").coerceOptionalValue(
                          e.post_id,
                        ),
                      };
                    })) != null
                ? n
                : [],
          };
    }
    function I(e) {
      if (e != null) {
        var t = {
          fri_1_close: void 0,
          fri_1_open: void 0,
          fri_2_close: void 0,
          mon_1_close: void 0,
          mon_1_open: void 0,
          mon_2_close: void 0,
          sat_1_close: void 0,
          sat_1_open: void 0,
          sat_2_close: void 0,
          sun_1_close: void 0,
          sun_1_open: void 0,
          sun_2_close: void 0,
          thu_1_close: void 0,
          thu_1_open: void 0,
          thu_2_close: void 0,
          tue_1_close: void 0,
          tue_1_open: void 0,
          tue_2_close: void 0,
          wed_1_close: void 0,
          wed_1_open: void 0,
          wed_2_close: void 0,
        };
        Object.keys(t).forEach(function (n) {
          var r = o("TypeCoercionUtils").coerceOptionalValue(e[n]);
          r != null && (t[n] = r);
        });
        var n = Object.values(t).some(function (e) {
          return e != null;
        });
        return n ? t : void 0;
      }
    }
    function T(e) {
      var t,
        n,
        a,
        l,
        p,
        S,
        R,
        L,
        T,
        D,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U = !Object.entries(e).every(function (e) {
          var t = e[0],
            n = e[1];
          return t === "id" || n === void 0;
        });
      if (!U)
        return (
          r("FBLogger")("relay_ads_manager")
            .blameToPreviousFrame()
            .warn(
              "PageBasePageSpecResolver: Relay returned a null or undefined value for every field. This is likely a deleted page object or the user does not have access to it, page id %s",
              e.id,
            ),
          e
        );
      var V = {
        about: o("TypeCoercionUtils").coerceEmptyStringToUndefined(
          (t = e.about) == null ? void 0 : t.text,
        ),
        access_token: o("TypeCoercionUtils").coerceOptionalValue(
          e.ads_manager_access_token,
        ),
        ad_account_primary_objective: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.ad_account_primary_objective),
        automated_chat_default_template_id: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.automated_chat_default_template_id),
        biz_ai_smb_data:
          e.biz_ai_smb_data != null
            ? {
                ads_data:
                  e.biz_ai_smb_data.ads_data != null
                    ? {
                        experiment_state:
                          e.biz_ai_smb_data.ads_data.experiment_state != null
                            ? e.biz_ai_smb_data.ads_data.experiment_state
                            : void 0,
                        wa_default_on_eligible:
                          (n =
                            e.biz_ai_smb_data.ads_data
                              .wa_default_on_eligible) != null
                            ? n
                            : void 0,
                      }
                    : void 0,
              }
            : void 0,
        business: f(e.business),
        businessprojects: u(e.businessprojects),
        call_ads_engagement_default_ml_score:
          e.call_ads_engagement_default_ml_score,
        call_ads_leads_default_ml_score: e.call_ads_leads_default_ml_score,
        call_ads_sales_default_ml_score: e.call_ads_sales_default_ml_score,
        call_ads_similar_advertiser_budget_recommendation: x(
          e.call_ads_similar_advertiser_budget_recommendation,
        ),
        call_ads_traffic_default_ml_score: e.call_ads_traffic_default_ml_score,
        can_manage_page_whatsapp: o("TypeCoercionUtils").coerceOptionalValue(
          e.can_manage_page_whatsapp,
        ),
        can_manage_wa_flows: o("TypeCoercionUtils").coerceOptionalValue(
          e.can_manage_wa_flows,
        ),
        can_viewer_advertise_with_posts: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.can_viewer_advertise_with_posts),
        category: o("TypeCoercionUtils").coerceOptionalValue(e.category_name),
        connected_ig_sends_l28: o(
          "TypeCoercionUtils",
        ).coerceNumbertoZeroOrNumber(e.connected_ig_sends_l28),
        connected_instagram_account:
          e.ads_assoc_v2_linked_bizlink_instagram_account
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                profile_picture: o("TypeCoercionUtils").coerceOptionalValue(
                  e.ads_assoc_v2_linked_bizlink_instagram_account
                    .profile_picture_url,
                ),
                user_igid: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (a = e.ads_assoc_v2_linked_bizlink_instagram_account) == null
                    ? void 0
                    : a.instagram_user_id,
                  "ads_assoc_v2_linked_bizlink_instagram_account.ads_assoc_v2_linked_bizlink_instagram_account.instagram_user_id",
                  i.id,
                ),
              })
            : void 0,
        cover: y(e.ads_cover),
        ctd_dfo_budget_guidance_sabr_zo: $(e.ctd_dfo_budget_guidance_sabr_zo),
        ctd_leads_optimization_eligibility_expansion_universe: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          r("getJSEnumSafe")(
            r("CTDDownFunnelOptimizationEligibilityExpansionQEUniverse"),
            e.ctd_leads_optimization_eligibility_expansion_universe,
          ),
        ),
        ctd_purchase_optimization_eligibility_expansion_universe: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          r("getJSEnumSafe")(
            r("CTDDownFunnelOptimizationEligibilityExpansionQEUniverse"),
            e.ctd_purchase_optimization_eligibility_expansion_universe,
          ),
        ),
        ctd_similar_advertiser_budget_recommendation: x(
          e.ctd_similar_advertiser_budget_recommendation,
        ),
        ctd_zo_recommendation_non_cbo: e.ctd_zo_recommendation_non_cbo,
        ctm_odax_dfo_l2_modal_content: o(
          "TypeCoercionUtils",
        ).coerceObjectToUndefined({
          body: o("TypeCoercionUtils").coerceOptionalValue(
            (l = e.ctm_odax_dfo_l2_modal_content) == null ? void 0 : l.body,
          ),
          created_dfo_before: o("TypeCoercionUtils").coerceOptionalValue(
            (p = e.ctm_odax_dfo_l2_modal_content) == null
              ? void 0
              : p.created_dfo_before,
          ),
          title: o("TypeCoercionUtils").coerceOptionalValue(
            (S = e.ctm_odax_dfo_l2_modal_content) == null ? void 0 : S.title,
          ),
        }),
        ctm_purchase_eligibility_tags: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          (R = e.ctm_purchase_eligibility_tags) == null
            ? void 0
            : R.map(function (e) {
                return o("TypeCoercionUtils").coerceOptionalValue(
                  o("XFBCtmPurchaseEligibilityTagUtils.facebook").toJSEnum(e),
                );
              }),
        ),
        ctm_purchase_optimization_model_based_defaulting_pvalue: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.ctm_purchase_optimization_model_based_defaulting_pvalue,
          "ctm_purchase_optimization_model_based_defaulting_pvalue",
          i.id,
        ),
        ctm_similar_advertiser_budget_recommendation_conversations: x(
          e.ctm_similar_advertiser_budget_recommendation_conversations,
        ),
        ctm_similar_advertiser_budget_recommendation_purchase_optimization: x(
          e == null
            ? void 0
            : e.ctm_similar_advertiser_budget_recommendation_purchase_optimization,
        ),
        ctm_value_optimization_eligibility_config: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          (L = e.ctm_value_optimization_eligibility_config) == null
            ? void 0
            : L.map(function (e) {
                return e.segment != null && e.is_eligible != null
                  ? { is_eligible: e.is_eligible, segment: e.segment }
                  : null;
              }),
        ),
        ctm_zo_recommendation_non_cbo_conversations:
          e.ctm_zo_recommendation_non_cbo_conversations,
        ctm_zo_recommendation_non_cbo_purchase_optimization:
          e.ctm_zo_recommendation_non_cbo_purchase_optimization,
        ctwa_dfo_budget_guidance_sabr_zo: $(e.ctwa_dfo_budget_guidance_sabr_zo),
        ctwa_flows_vertical: o("TypeCoercionUtils").coerceOptionalValue(
          e.ctwa_flows_vertical,
        ),
        ctwa_similar_advertiser_budget_recommendation: x(
          e.ctwa_similar_advertiser_budget_recommendation,
        ),
        ctwa_zo_recommendation_non_cbo: e.ctwa_zo_recommendation_non_cbo,
        ctx_account_based_default_source: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          (T = e.ctx_account_based_default_source) == null
            ? void 0
            : T.map(function (e) {
                return o("TypeCoercionUtils").coerceOptionalValue(
                  r("getJSEnumSafe")(r("ClickToMessageDefaultingSource"), e),
                );
              }),
        ),
        ctx_awareness_conversion_location_intent_with_mtml_v4: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          r("getJSEnumSafe")(
            r("AdsPromotedObjectTypes"),
            e.ctx_awareness_conversion_location_intent_with_mtml_v4,
          ),
        ),
        ctx_cbo_similar_advertiser_budget_recommendation: x(
          e.ctx_cbo_similar_advertiser_budget_recommendation,
        ),
        ctx_cbo_similar_advertiser_budget_recommendation_purchase_optimization:
          x(
            e.ctx_cbo_similar_advertiser_budget_recommendation_purchase_optimization,
          ),
        ctx_cbo_zero_outcome_budget_recommendation: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.ctx_cbo_zero_outcome_budget_recommendation),
        ctx_cbo_zero_outcome_budget_recommendation_purchase_optimization: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.ctx_cbo_zero_outcome_budget_recommendation_purchase_optimization,
        ),
        ctx_conversion_location_intent_with_mtml_v4: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          r("getJSEnumSafe")(
            r("AdsPromotedObjectTypes"),
            e.ctx_conversion_location_intent_with_mtml_v4,
          ),
        ),
        ctx_default_optimization_goal_configs: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          e.ctx_default_optimization_goal_configs.map(function (e) {
            var t;
            return e.destination_type != null &&
              e.objective != null &&
              e.optimization_goal != null
              ? {
                  defaulting_source:
                    (t = e.defaulting_source) != null ? t : "unknown",
                  destination_type: e.destination_type,
                  objective: e.objective,
                  optimization_goal: e.optimization_goal,
                }
              : null;
          }),
        ),
        ctx_dfo_budget_guidance_sabr_zo: $(e.ctx_dfo_budget_guidance_sabr_zo),
        ctx_engagement_high_intent_default_messsage_destination_with_mtml_v4: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          r("getJSEnumSafe")(
            r("AdCampaignDestination"),
            e.ctx_engagement_high_intent_default_messsage_destination_with_mtml_v4,
          ),
        ),
        ctx_leads_conversion_location_intent_with_mtml_v4: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          r("getJSEnumSafe")(
            r("AdsPromotedObjectTypes"),
            e.ctx_leads_conversion_location_intent_with_mtml_v4,
          ),
        ),
        ctx_ml_scores: (D = e.ctx_ml_scores) != null ? D : null,
        ctx_page_based_default_greeting_text: _(
          e.ctx_page_based_default_greeting_text,
        ),
        ctx_post_free_default: o("TypeCoercionUtils").coerceOptionalValue(
          r("getJSEnumSafe")(
            r("AdCampaignDestination"),
            e.ctx_post_free_default,
          ),
        ),
        ctx_sales_conversion_location_intent_with_mtml_v4: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          r("getJSEnumSafe")(
            r("AdsPromotedObjectTypes"),
            e.ctx_sales_conversion_location_intent_with_mtml_v4,
          ),
        ),
        ctx_traffic_conversion_location_intent_with_mtml_v4: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          r("getJSEnumSafe")(
            r("AdsPromotedObjectTypes"),
            e.ctx_traffic_conversion_location_intent_with_mtml_v4,
          ),
        ),
        ctx_traffic_high_intent_default_messsage_destination_with_mtml_v4: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          r("getJSEnumSafe")(
            r("AdCampaignDestination"),
            e.ctx_traffic_high_intent_default_messsage_destination_with_mtml_v4,
          ),
        ),
        ctxmd_dfo_budget_guidance_sabr_zo: $(
          e.ctxmd_dfo_budget_guidance_sabr_zo,
        ),
        ctxmd_dwa_similar_advertiser_budget_recommendation: x(
          e.ctxmd_dwa_similar_advertiser_budget_recommendation,
        ),
        ctxmd_md_similar_advertiser_budget_recommendation: x(
          e.ctxmd_md_similar_advertiser_budget_recommendation,
        ),
        ctxmd_mdwa_similar_advertiser_budget_recommendation: x(
          e.ctxmd_mdwa_similar_advertiser_budget_recommendation,
        ),
        ctxmd_mwa_similar_advertiser_budget_recommendation: x(
          e.ctxmd_mwa_similar_advertiser_budget_recommendation,
        ),
        currency: o("TypeCoercionUtils").coerceOptionalValue(e.currency),
        does_viewer_have_page_permission_link_ig: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.does_viewer_have_page_permission_link_ig),
        engagement: o("TypeCoercionUtils").coerceObjectToUndefined({
          social_sentence: o("TypeCoercionUtils").coerceNonMaybeValue(
            (N = e.engagement) == null ? void 0 : N.social_sentence,
            "engagement.social_sentence",
            i.id,
          ),
        }),
        error: C(e.permitted_tasks),
        external_legal_budget_l28: o(
          "TypeCoercionUtils",
        ).coerceNumbertoZeroOrNumber(e.external_legal_budget_l28),
        get_started_nullstate: o("TypeCoercionUtils").coerceObjectToUndefined({
          cta_title: o("TypeCoercionUtils").coerceOptionalValue(
            (M = e.get_started_nullstate) == null ? void 0 : M.cta_title,
          ),
          processed_greeting: o(
            "TypeCoercionUtils",
          ).coerceEmptyStringToUndefined(
            (w = e.get_started_nullstate) == null
              ? void 0
              : w.processed_greeting,
          ),
          responsiveness: o("TypeCoercionUtils").coerceOptionalValue(
            (A = e.get_started_nullstate) == null ? void 0 : A.responsiveness,
          ),
        }),
        global_brand_page_name: o("TypeCoercionUtils").coerceOptionalValue(
          e.global_brand_page_name,
        ),
        has_create_ads_access: o("TypeCoercionUtils").coerceOptionalValue(
          e.has_create_ads_access,
        ),
        has_transitioned_to_new_page_experience: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.has_transitioned_to_new_page_experience,
          "has_transitioned_to_new_page_experience",
          i.id,
        ),
        has_whatsapp_business_number: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(e.is_business_number, "is_business_number", i.id),
        has_whatsapp_catalog: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.has_whatsapp_catalog,
          "has_whatsapp_catalog",
          i.id,
        ),
        has_whatsapp_number: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.has_whatsapp_number,
          "has_whatsapp_number",
          i.id,
        ),
        has_whatsapp_number_in_location_structure: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.has_whatsapp_number_in_location_structure,
          "has_whatsapp_number_in_location_structure",
          i.id,
        ),
        hours: I(e.ads_hours),
        id: o("TypeCoercionUtils").coerceMaybeFBIDtoZeroOrFBID(e.id),
        ig_lva_default_duration_s: o("TypeCoercionUtils").coerceOptionalValue(
          e.ig_lva_default_duration_s,
        ),
        ig_lva_live_block_reason:
          e.ig_lva_live_block_reason != null
            ? e.ig_lva_live_block_reason
            : void 0,
        inbox_faq_automation: h(e.inbox_faq_automation),
        instagram_external_legal_budget_l28: o(
          "TypeCoercionUtils",
        ).coerceNumbertoZeroOrNumber(e.instagram_external_legal_budget_l28),
        is_always_open: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_always_open,
        ),
        is_business_calling_eligible_including_holdout: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_business_calling_eligible_including_holdout,
          "is_business_calling_eligible_including_holdout",
          i.id,
        ),
        is_ctd_leads_optimization_goal_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_ctd_leads_optimization_goal_eligible),
        is_ctd_purchase_optimization_defaulting_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctd_purchase_optimization_defaulting_eligible,
        ),
        is_ctd_purchase_optimization_goal_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_ctd_purchase_optimization_goal_eligible),
        is_ctm_leads_optimization_goal_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_ctm_leads_optimization_goal_eligible),
        is_ctm_lo_goal_eligible_incl_ucd_po: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_ctm_lo_goal_eligible_incl_ucd_po),
        is_ctm_marketing_messages_option_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_ctm_marketing_messages_option_eligible),
        is_ctm_purchase_conversions_optimization_goal_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctm_purchase_conversions_optimization_goal_eligible,
        ),
        is_ctm_purchase_conversions_optimization_phase2_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctm_purchase_conversions_optimization_phase2_eligible,
        ),
        is_ctm_purchase_optimization_dc_segment_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctm_purchase_optimization_dc_segment_eligible,
        ),
        is_ctm_purchase_optimization_dfo_everywhere_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctm_purchase_optimization_dfo_everywhere_eligible,
        ),
        is_ctm_purchase_optimization_dfo_everywhere_eligible_tier2: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctm_purchase_optimization_dfo_everywhere_eligible_tier2,
        ),
        is_ctm_purchase_optimization_do_3p_defaulting_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctm_purchase_optimization_do_3p_defaulting_eligible,
        ),
        is_ctm_purchase_optimization_model_based_defaulting_po_outcome_eligible:
          o("TypeCoercionUtils").coerceOptionalValue(
            e.is_ctm_purchase_optimization_model_based_defaulting_po_outcome_eligible,
          ),
        is_ctm_purchase_optimization_model_based_defaulting_po_spending_eligible:
          o("TypeCoercionUtils").coerceOptionalValue(
            e.is_ctm_purchase_optimization_model_based_defaulting_po_spending_eligible,
          ),
        is_ctm_purchase_optimization_p2m_relaxed_criteria_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctm_purchase_optimization_p2m_relaxed_criteria_eligible,
        ),
        is_ctm_purchase_optimization_page_experiment_check: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctm_purchase_optimization_page_experiment_check,
        ),
        is_ctm_purchase_optimization_relaxed_criteria_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctm_purchase_optimization_relaxed_criteria_eligible,
        ),
        is_ctm_value_optimization_eligible_incl_detected_value_segment: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctm_value_optimization_eligible_incl_detected_value_segment,
        ),
        is_ctm_value_optimization_goal_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_ctm_value_optimization_goal_eligible),
        is_ctm_value_optimization_goal_eligible_gt50_relaxed_threshold: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctm_value_optimization_goal_eligible_gt50_relaxed_threshold,
        ),
        is_ctm_value_optimization_goal_eligible_relaxed_threshold: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctm_value_optimization_goal_eligible_relaxed_threshold,
        ),
        is_ctwa_lead_optimization_eligible_with_one_lead: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctwa_lead_optimization_eligible_with_one_lead,
        ),
        is_ctwa_lead_optimization_goal_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_ctwa_lead_optimization_goal_eligible),
        is_ctwa_lead_optimization_goal_eligible_defaulting: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctwa_lead_optimization_goal_eligible_defaulting,
        ),
        is_ctwa_lead_optimization_goal_eligible_with_important_labels_flows: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctwa_lead_optimization_goal_eligible_with_important_labels_flows,
        ),
        is_ctwa_purchase_conversions_optimization_goal_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctwa_purchase_conversions_optimization_goal_eligible,
        ),
        is_ctwa_purchase_conversions_optimization_phase2_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctwa_purchase_conversions_optimization_phase2_eligible,
        ),
        is_ctwa_purchase_conversions_optimization_phase3_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctwa_purchase_conversions_optimization_phase3_eligible,
        ),
        is_ctwa_purchase_conversions_optimization_phase4_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctwa_purchase_conversions_optimization_phase4_eligible,
        ),
        is_ctwa_purchase_optimization_dfo_everywhere_zero_outcome_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_ctwa_purchase_optimization_dfo_everywhere_zero_outcome_eligible,
        ),
        is_ctxmd_lo_eligible: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_ctxmd_lo_eligible,
        ),
        is_ctxmd_po_eligible: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_ctxmd_po_eligible,
        ),
        is_eligible_defaulting_to_wtwa_v3_epd_with_threshold_p75: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_eligible_defaulting_to_wtwa_v3_epd_with_threshold_p75,
          "is_eligible_defaulting_to_wtwa_v3_epd_with_threshold_p75",
          i.id,
        ),
        is_eligible_defaulting_to_wtwa_v3_epd_with_threshold_p90: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_eligible_defaulting_to_wtwa_v3_epd_with_threshold_p90,
          "is_eligible_defaulting_to_wtwa_v3_epd_with_threshold_p90",
          i.id,
        ),
        is_eligible_defaulting_to_wtwa_with_threshold_a: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_eligible_defaulting_to_wtwa_with_threshold_a,
          "is_eligible_defaulting_to_wtwa_with_threshold_a",
          i.id,
        ),
        is_eligible_defaulting_to_wtwa_with_threshold_b: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_eligible_defaulting_to_wtwa_with_threshold_b,
          "is_eligible_defaulting_to_wtwa_with_threshold_b",
          i.id,
        ),
        is_eligible_defaulting_to_wtwa_with_threshold_c: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_eligible_defaulting_to_wtwa_with_threshold_c,
          "is_eligible_defaulting_to_wtwa_with_threshold_c",
          i.id,
        ),
        is_eligible_for_automated_chat_defaulting: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_eligible_for_automated_chat_defaulting),
        is_eligible_for_bic_call_prompt: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_eligible_for_bic_call_prompt,
          "is_eligible_for_bic_call_prompt",
          i.id,
        ),
        is_eligible_for_biz_ai_aplusc: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_eligible_for_biz_ai_aplusc),
        is_eligible_for_biz_rtc: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_eligible_for_biz_rtc,
        ),
        is_eligible_for_biz_rtc_with_more_than_5_admins: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_eligible_for_biz_rtc_with_more_than_5_admins,
        ),
        is_eligible_for_call_ads_with_messenger_call: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_eligible_for_call_ads_with_messenger_call),
        is_eligible_for_call_ads_with_whatsapp_call: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_eligible_for_call_ads_with_whatsapp_call),
        is_eligible_for_call_extension_ml_defaulting: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_eligible_for_call_extension_ml_defaulting,
          "is_eligible_for_call_extension_ml_defaulting",
          i.id,
        ),
        is_eligible_for_call_extension_ml_defaulting_for_threshold_a: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_eligible_for_call_extension_ml_defaulting_for_threshold_a,
          "is_eligible_for_call_extension_ml_defaulting_for_threshold_a",
          i.id,
        ),
        is_eligible_for_call_extension_ml_defaulting_for_threshold_b: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_eligible_for_call_extension_ml_defaulting_for_threshold_b,
          "is_eligible_for_call_extension_ml_defaulting_for_threshold_b",
          i.id,
        ),
        is_eligible_for_call_extension_sticky_defaulting: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_eligible_for_call_extension_sticky_defaulting,
        ),
        is_eligible_for_call_optimization_defaulting: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_eligible_for_call_optimization_defaulting),
        is_eligible_for_call_prompt_defaulting: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.eligible_for_call_prompt_defaulting,
          "eligible_for_call_prompt_defaulting",
          i.id,
        ),
        is_eligible_for_call_prompt_update_cta: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_eligible_for_call_prompt_update_cta,
          "is_eligible_for_call_prompt_update_cta",
          i.id,
        ),
        is_eligible_for_calling_enablement_holdout: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_eligible_for_calling_enablement_holdout),
        is_eligible_for_ctd_sd_defaulting_md_expansion: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_eligible_for_ctd_sd_defaulting_md_expansion),
        is_eligible_for_disable_connect_ig_btn_for_non_page_admin_am_web: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_eligible_for_disable_connect_ig_btn_for_non_page_admin_am_web,
        ),
        is_eligible_for_live_boosting: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_eligible_for_live_boosting),
        is_eligible_for_live_boosting_expansion: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_eligible_for_live_boosting_expansion),
        is_eligible_for_live_clips_indicator: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_eligible_for_live_clips_indicator),
        is_eligible_for_live_video_reminder: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_eligible_for_live_video_reminder),
        is_eligible_for_location_extension_website_and_in_store_default_on: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_eligible_for_location_extension_website_and_in_store_default_on,
        ),
        is_eligible_for_location_extension_website_default_on: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.is_eligible_for_location_extension_website_default_on,
        ),
        is_eligible_for_ml_wtd_defaulting: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_eligible_for_ml_wtd_defaulting,
          "is_eligible_for_ml_wtd_defaulting",
          i.id,
        ),
        is_eligible_for_ml_wtm_defaulting: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_eligible_for_ml_wtm_defaulting,
          "is_eligible_for_ml_wtm_defaulting",
          i.id,
        ),
        is_eligible_for_ml_wtm_defaulting_with_threshold_p90: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_eligible_for_ml_wtm_defaulting_with_threshold_p90,
          "is_eligible_for_ml_wtm_defaulting_with_threshold_p90",
          i.id,
        ),
        is_eligible_for_seller_rnr: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_eligible_for_seller_rnr,
        ),
        is_eligible_for_warm_call_prompt: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_eligible_for_warm_call_prompt),
        is_ig_account_eligible_for_lva: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_ig_account_eligible_for_lva),
        is_in_call_prompt_defaulting_eligibility_raw_laser: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_in_call_prompt_defaulting_eligibility_raw_laser,
          "is_in_call_prompt_defaulting_eligibility_raw_laser",
          i.id,
        ),
        is_inbox_waba: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_inbox_waba,
        ),
        is_instagram_account_backed_page: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_instagram_account_backed_page),
        is_linked_ig_account_eligible_for_ctd_sd_defaulting_based_on_purchases:
          o("TypeCoercionUtils").coerceOptionalValue(
            e.is_linked_ig_account_eligible_for_ctd_sd_defaulting_based_on_purchases,
          ),
        is_linked_ig_account_in_ctd_priority_market: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_linked_ig_account_in_ctd_priority_market),
        is_messaging_light_switch_enabled: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_messaging_light_switch_enabled),
        is_messenger_bot_get_started_enabled: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_messenger_bot_get_started_enabled,
          "is_messenger_bot_get_started_enabled",
          i.id,
        ),
        is_page_in_th_or_vn: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_page_in_th_or_vn,
        ),
        is_page_messenger_responsive: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_page_messenger_responsive,
          "is_page_messenger_responsive",
          i.id,
        ),
        is_page_rtc_enabled: o("TypeCoercionUtils").coerceOptionalValue(
          e.is_biz_rtc_enabled,
        ),
        is_part_of_location_structure: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_part_of_location_structure),
        is_ptwa_defaulting_intent_am: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_ptwa_defaulting_intent_am),
        is_published: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.is_published,
          "is_published",
          i.id,
        ),
        is_structured_leads_eligible: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.is_structured_leads_eligible),
        is_verified: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.is_verified,
          "is_verified",
          i.id,
        ),
        is_whatsapp_ads_identity: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.is_whatsapp_ads_identity,
          "is_whatsapp_ads_identity",
          i.id,
        ),
        is_wtwa_high_intent_advertiser: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.is_wtwa_high_intent_advertiser,
          "is_wtwa_high_intent_advertiser",
          i.id,
        ),
        last_destination_type: o("TypeCoercionUtils").coerceOptionalValue(
          r("getJSEnumSafe")(
            r("AdCampaignDestination"),
            e.last_destination_type,
          ),
        ),
        last_website_extension_type: o("TypeCoercionUtils").coerceOptionalValue(
          e.last_website_extension_type,
        ),
        last_website_link: o("TypeCoercionUtils").coerceOptionalValue(
          e.last_website_link,
        ),
        leadgen_tos_accepted: e.lead_gen_tos !== null,
        link: o("TypeCoercionUtils").coerceNonMaybeValue(e.link, "link", i.id),
        link_in_bio: o("TypeCoercionUtils").coerceOptionalValue(e.link_in_bio),
        live_shopping_page_level_experiment: P(
          e.live_shopping_page_level_experiment,
        ),
        loadState: "LOADED",
        location: c(e.ads_location, e.location),
        locations: {
          summary: {
            total_count: o("TypeCoercionUtils").coerceNumbertoZeroOrNumber(
              e.locations_count,
            ),
          },
        },
        marketing_messages_mapped_messenger_subscriber_pool:
          e.marketing_messages_mapped_messenger_subscriber_pool == null
            ? null
            : {
                id: e.marketing_messages_mapped_messenger_subscriber_pool.id,
                subscriber_pool_audience_size:
                  e.marketing_messages_mapped_messenger_subscriber_pool
                    .subscriber_pool_audience_size == null
                    ? null
                    : {
                        upper_bound:
                          e.marketing_messages_mapped_messenger_subscriber_pool
                            .subscriber_pool_audience_size.upper_bound,
                      },
              },
        messaging_apps_info: g(e.messaging_apps_info),
        messaging_feature_limit: m(e.messaging_feature_limit),
        messenger_ads_default_icebreakers: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(e.messenger_ads_default_icebreakers),
        messenger_ads_default_quick_replies: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(e.messenger_ads_default_quick_replies),
        messenger_sends_l28: o("TypeCoercionUtils").coerceNumbertoZeroOrNumber(
          e.messenger_sends_l28,
        ),
        more_than_10_messenger_page_sends_l28: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.more_than_10_messenger_page_sends_l28,
          "more_than_10_messenger_page_sends_l28",
          i.id,
        ),
        more_than_100_connected_ig_sends_l28: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.more_than_100_connected_ig_sends_l28,
          "more_than_100_connected_ig_sends_l28",
          i.id,
        ),
        most_frequent_website_link: o("TypeCoercionUtils").coerceOptionalValue(
          e.most_frequent_website_link,
        ),
        name: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.ads_name,
          "ads_name",
          i.id,
        ),
        name_with_location_descriptor: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.name_with_location_descriptor,
          "name_with_location_descriptor",
          i.id,
        ),
        page_first_vertical: o("TypeCoercionUtils").coerceOptionalValue(
          e.page_first_vertical,
        ),
        page_token: (F = e.page_token) != null ? F : "",
        page_whatsapp_number_id: o(
          "TypeCoercionUtils",
        ).coerceEmptyStringToUndefined(e.page_whatsapp_number_id),
        page_whatsapp_number_waba_id: o(
          "TypeCoercionUtils",
        ).coerceEmptyStringToUndefined(e.page_whatsapp_number_waba_id),
        partner_app_and_welcome_message_flows_data: v(
          e.partner_app_and_welcome_message_flows_data,
        ),
        pass_call_prompt_high_admin_qe: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.pass_call_prompt_high_admin_qe),
        passes_igd_response_rate_threshold: o(
          "TypeCoercionUtils",
        ).coerceNonMaybeValue(
          e.passes_igd_response_rate_threshold,
          "passes_igd_response_rate_threshold",
          i.id,
        ),
        pending_request_whatsapp_business_numbers: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          e.pending_request_whatsapp_business_numbers,
        ),
        phone_number_prefill: o(
          "TypeCoercionUtils",
        ).coerceEmptyStringToUndefined(e.phone_number_prefill),
        picture: d(e.profile_picture, e.profile_picture_uri),
        price_range: o("TypeCoercionUtils").coerceOptionalValue(e.price_range),
        privacy_info_url: o("TypeCoercionUtils").coerceOptionalValue(
          e.ads_privacy_info_url,
        ),
        profile_visit_extension_preserve_preference: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.profile_visit_extension_preserve_preference),
        ptwa_defaulting_cas_segment_am: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.ptwa_defaulting_cas_segment_am),
        shared_location_structures:
          e.shared_location_structures &&
          e.shared_location_structures.nodes.length > 0
            ? s(e.shared_location_structures)
            : void 0,
        should_enable_unified_page_ig_link_confirmation_flow_ads_manager: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.should_enable_unified_page_ig_link_confirmation_flow_ads_manager,
        ),
        should_show_page_instagram_link_confirmation_flow: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(
          e.should_show_page_instagram_link_confirmation_flow,
        ),
        suggested_posts_v2: k(e.suggested_posts_v2),
        userpermissions: b(e),
        website:
          (O = e.websites) != null && O[0] ? e.websites.join(", ") : void 0,
        website_add_on_preserve_preference: o(
          "TypeCoercionUtils",
        ).coerceOptionalValue(e.website_add_on_preserve_preference),
        whatsapp_messaging_apps_info: e.whatsapp_messaging_apps_info
          ? E(e.whatsapp_messaging_apps_info)
          : void 0,
        whatsapp_number: o("TypeCoercionUtils").coerceOptionalValue(
          (B = e.whatsapp_numbers_info) == null || (B = B[0]) == null
            ? void 0
            : B.whatsapp_number,
        ),
        whatsapp_number_formatted: o("TypeCoercionUtils").coerceOptionalValue(
          (W = e.whatsapp_numbers_info) == null || (W = W[0]) == null
            ? void 0
            : W.formatted_whatsapp_number,
        ),
        whatsapp_number_type: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.whatsapp_number_type,
          "whatsapp_number_type",
          i.id,
        ),
        whatsapp_numbers_info: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          e.whatsapp_numbers_info.map(function (e) {
            var t, n, r, a;
            return e.formatted_whatsapp_number !== null ||
              e.is_business_number !== null ||
              e.page_whatsapp_number_id !== null ||
              e.whatsapp_number !== null ||
              e.waba_id !== null ||
              e.number_country_prefix !== null
              ? {
                  can_manage_wa_flows: e.can_manage_wa_flows,
                  formatted_whatsapp_number:
                    (t = e.formatted_whatsapp_number) != null ? t : "",
                  is_business_number:
                    (n = e.is_business_number) != null ? n : !1,
                  is_calling_enabled:
                    (r = e.is_calling_enabled) != null ? r : !0,
                  number_country_prefix: e.number_country_prefix,
                  page_whatsapp_number_id:
                    (a = e.page_whatsapp_number_id) != null ? a : "",
                  waba_id: e.waba_id,
                  whatsapp_number: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.whatsapp_number,
                    "whatsapp_numbers_info[].whatsapp_number",
                    i.id,
                  ),
                  whatsapp_smb_device: e.whatsapp_smb_device,
                }
              : null;
          }),
        ),
        whatsapp_page_settings_link: o("TypeCoercionUtils").coerceOptionalValue(
          e.whatsapp_page_settings_link,
        ),
        whatsapp_smb_device: o("TypeCoercionUtils").coerceOptionalValue(
          (q = e.whatsapp_numbers_info) == null || (q = q[0]) == null
            ? void 0
            : q.whatsapp_smb_device,
        ),
        wtm_opt_outs_l28: o("TypeCoercionUtils").coerceNumbertoZeroOrNumber(
          e.wtm_opt_outs_l28,
        ),
        wtwa_cbo_similar_advertiser_budget_recommendation: x(
          e.wtwa_cbo_similar_advertiser_budget_recommendation,
        ),
        wtwa_similar_advertiser_budget_recommendation: x(
          e.wtwa_similar_advertiser_budget_recommendation,
        ),
        wtwa_zo_recommendation_non_cbo: e.wtwa_zo_recommendation_non_cbo,
      };
      return V;
    }
    function D(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0 ? e : (e = n("PageBasePageSpecResolver.graphql")),
        t,
      );
      return T(r);
    }
    function x(e) {
      return o(
        "TypeCoercionUtils",
      ).coerceObjectWithNullAndEmptyArraysToUndefined({
        budget: o("TypeCoercionUtils").coerceMaybeNumberToString(
          e == null ? void 0 : e.budget,
        ),
        budget_new_model: o("TypeCoercionUtils").coerceMaybeNumberToString(
          e == null ? void 0 : e.budget_new_model,
        ),
        budget_without_threshold: o(
          "TypeCoercionUtils",
        ).coerceMaybeNumberToString(
          e == null ? void 0 : e.budget_without_threshold,
        ),
        reported_conversion: o("TypeCoercionUtils").coerceMaybeNumberToString(
          e == null ? void 0 : e.reported_conversion,
        ),
        reported_conversions_new_model: o(
          "TypeCoercionUtils",
        ).coerceMaybeNumberToString(
          e == null ? void 0 : e.reported_conversions_new_model,
        ),
        reported_conversions_without_threshold: o(
          "TypeCoercionUtils",
        ).coerceMaybeNumberToString(
          e == null ? void 0 : e.reported_conversions_without_threshold,
        ),
      });
    }
    function $(e) {
      return o(
        "TypeCoercionUtils",
      ).coerceObjectWithNullAndEmptyArraysToUndefined({
        budget: o("TypeCoercionUtils").coerceMaybeStringToNumber(
          e == null ? void 0 : e.budget,
        ),
        budget_leads: o("TypeCoercionUtils").coerceMaybeStringToNumber(
          e == null ? void 0 : e.budget_leads,
        ),
        budget_new_model: o("TypeCoercionUtils").coerceMaybeStringToNumber(
          e == null ? void 0 : e.budget_new_model,
        ),
        budget_purchases: o("TypeCoercionUtils").coerceMaybeStringToNumber(
          e == null ? void 0 : e.budget_purchases,
        ),
        budget_value: o("TypeCoercionUtils").coerceMaybeStringToNumber(
          e == null ? void 0 : e.budget_value,
        ),
        budget_without_threshold: o(
          "TypeCoercionUtils",
        ).coerceMaybeStringToNumber(
          e == null ? void 0 : e.budget_without_threshold,
        ),
        reported_conversion: o("TypeCoercionUtils").coerceMaybeStringToNumber(
          e == null ? void 0 : e.reported_conversion,
        ),
        reported_conversion_leads: o(
          "TypeCoercionUtils",
        ).coerceMaybeStringToNumber(
          e == null ? void 0 : e.reported_conversion_leads,
        ),
        reported_conversion_purchases: o(
          "TypeCoercionUtils",
        ).coerceMaybeStringToNumber(
          e == null ? void 0 : e.reported_conversion_purchases,
        ),
        reported_conversion_value: o(
          "TypeCoercionUtils",
        ).coerceMaybeStringToNumber(
          e == null ? void 0 : e.reported_conversion_value,
        ),
        reported_conversions_new_model: o(
          "TypeCoercionUtils",
        ).coerceMaybeStringToNumber(
          e == null ? void 0 : e.reported_conversions_new_model,
        ),
        reported_conversions_without_threshold: o(
          "TypeCoercionUtils",
        ).coerceMaybeStringToNumber(
          e == null ? void 0 : e.reported_conversions_without_threshold,
        ),
        zo_budget: o("TypeCoercionUtils").coerceMaybeStringToNumber(
          e == null ? void 0 : e.zo_budget,
        ),
        zo_budget_leads: o("TypeCoercionUtils").coerceMaybeStringToNumber(
          e == null ? void 0 : e.zo_budget_leads,
        ),
        zo_budget_purchases: o("TypeCoercionUtils").coerceMaybeStringToNumber(
          e == null ? void 0 : e.zo_budget_purchases,
        ),
        zo_budget_value: o("TypeCoercionUtils").coerceMaybeStringToNumber(
          e == null ? void 0 : e.zo_budget_value,
        ),
      });
    }
    function P(e) {
      return null;
    }
    ((l.coerceGraphQLSpecToGraphAPI = T), (l.basepage_spec = D));
  },
  98,
);
