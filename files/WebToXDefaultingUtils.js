__d(
  "WebToXDefaultingUtils",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsCFAdgroupCallExtensionUtils",
    "AdsCallAddonUtils",
    "AdsInterfacesLogger",
    "AdsODAXUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupWebsiteAddOnDefaultedAction",
    "AdsWebsiteExtensionTypeUtils.facebook",
    "ClickToMessageCTXMDOptimizationExpansionFeatureGating",
    "CtxAdvertiserQeHbtExposureFalcoEvent",
    "CurrentAdAccount",
    "Promise",
    "WAMOStatusAdsManagerUtils",
    "WebToWhatsappUtils",
    "WebToXAdsUnifiedFalcoEvent",
    "WebToXDefaultingCountryUtils",
    "WebToXFeatureGating",
    "gkx",
    "promiseDone",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0.5;
    function u(e) {
      var t;
      e === void 0 && (e = !0);
      var n = (t = r("qex")._("1130")) != null ? t : s,
        o = e ? r("qex")._("1678") === !0 : r("qex")._("1805") === !0;
      return { enabled: o, threshold: n };
    }
    function c() {
      return r("gkx")("9655");
    }
    function d(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.message_extensions,
        r = Array.isArray(n) ? n : n == null ? void 0 : n.toArray();
      return (
        (r == null
          ? void 0
          : r.some(function (e) {
              return (
                (e == null ? void 0 : e.type) === "whatsapp" ||
                (e == null ? void 0 : e.type) === "whatsapp_facebook_page" ||
                (e == null ? void 0 : e.type) === "whatsapp_promo"
              );
            })) === !0
      );
    }
    function m(e) {
      var t,
        n,
        r,
        o,
        a,
        i =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.call_to_actions;
      return (
        (Array.isArray(i)
          ? i.some(function (e) {
              return (e == null ? void 0 : e.type) === "WHATSAPP_MESSAGE";
            })
          : (i == null
              ? void 0
              : i.some(function (e, t) {
                  return i.getIn([t, "type"]) === "WHATSAPP_MESSAGE";
                })) === !0) ||
        [
          (n = e.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.link_data) == null
            ? void 0
            : n.call_to_action,
          (r = e.creative) == null ||
          (r = r.object_story_spec) == null ||
          (r = r.photo_data) == null
            ? void 0
            : r.call_to_action,
          (o = e.creative) == null ||
          (o = o.object_story_spec) == null ||
          (o = o.template_data) == null
            ? void 0
            : o.call_to_action,
          (a = e.creative) == null ||
          (a = a.object_story_spec) == null ||
          (a = a.video_data) == null
            ? void 0
            : a.call_to_action,
        ].some(function (e) {
          return (e == null ? void 0 : e.type) === "WHATSAPP_MESSAGE";
        })
      );
    }
    function p(e) {
      return d(e) || m(e);
    }
    function _(e, t, n, r, o, a, i, l, s, u) {
      var d;
      if (
        !c() ||
        (a !== "wtwa_upsell_am_landing" &&
          a !== "wtwa_wam_upsell_am_landing" &&
          a !== "aymt_wtwa_email_upsell_am_landing") ||
        !p(r)
      )
        return !1;
      var m = b(e, t, n, r, o, a, i, l, s, u, !0);
      return (
        m.type !== "whatsapp" &&
        !(
          m.type === "messaging_apps" &&
          ((d = m.multiDestinationType) == null
            ? void 0
            : d.includes("whatsapp")) === !0
        )
      );
    }
    function f(e, t) {
      if ((t === void 0 && (t = !1), !e.has_whatsapp_business_number))
        return !1;
      if (t === !0)
        return (
          e.is_eligible_defaulting_to_wtwa_with_threshold_c === !0 &&
          e.is_eligible_defaulting_to_wtwa_with_threshold_b === !0 &&
          g(e) === !0
        );
      var n = h(e);
      return n;
    }
    function g(e) {
      var t = e.is_eligible_defaulting_to_wtwa_with_threshold_a;
      return !(
        t === !1 &&
        r("gkx")("15276") === !0 &&
        r("gkx")("15277") === !0
      );
    }
    function h(e) {
      return e.is_eligible_defaulting_to_wtwa_with_threshold_b === !0;
    }
    function y(e, t, n, a, i, l, s) {
      if (
        (r("AdsInterfacesLogger").logOnce({
          eventName: "call_extension_defaulting_eligibility_check",
          data: {
            adgroup_id: a.id,
            page_id: i == null ? void 0 : i.id,
            objective: t.objective,
          },
        }),
        !o("AdsCallAddonUtils").isCallExtensionEnabled(
          t,
          n,
          a,
          !1,
          i != null,
          !1,
        ))
      )
        return !1;
      var u = o(
        "AdsCFAdgroupCallExtensionUtils",
      ).isEligibleForDefaultingInCreationFlow(i);
      return (
        u &&
          (r("WebToXAdsUnifiedFalcoEvent").log(function () {
            return {
              event: "call_extension_defaulted",
              ad_group_id: a.id,
              ad_account_id: e == null ? void 0 : e.account_id,
              ad_page_id: i == null ? void 0 : i.id,
              objective: t.objective,
              event_info: l,
              optimization_goal: s,
            };
          }),
          r("AdsInterfacesLogger").logOnce({
            eventName: "call_extension_field_automatically_enabled",
            data: {
              adgroup_id: a.id,
              page_id: i == null ? void 0 : i.id,
              objective: t.objective,
            },
          }),
          (i == null ? void 0 : i.phone_number_prefill) != null &&
            r("AdsInterfacesLogger").logOnce({
              eventName: "call_extension_defaulted_with_phone_number_prefilled",
              data: {
                adgroup_id: a.id,
                page_id: i == null ? void 0 : i.id,
                objective: t.objective,
              },
            })),
        u
      );
    }
    function C(e, t, n, a, i, l, s, u, c, d, m) {
      var p = t.objective,
        _ = o(
          "ClickToMessageCTXMDOptimizationExpansionFeatureGating",
        ).enableUnifiedCreationWTXMDL1(p, !1);
      if (!_) return null;
      var f = l != null ? l : r("AdsAPIOptimizationGoals").NONE,
        g = [],
        h = R(e, i, f, t, n, a, s);
      (c && h.defaulted && g.push("messenger"),
        d && u.defaulted && g.push("whatsapp"));
      var y = N(e, i, f, t, n, a, s);
      return (
        m && y.defaulted && g.push("instagram_message"),
        g.length < 2
          ? null
          : {
              type: "messaging_apps",
              reason: "wtxmd_defaulting",
              multiDestinationType: g,
            }
      );
    }
    function b(e, t, n, a, i, l, s, u, c, d, m) {
      var p;
      (c === void 0 && (c = !1),
        d === void 0 && (d = !1),
        m === void 0 && (m = !1));
      var _ = "none",
        f = "none",
        g = void 0,
        h = t.objective,
        y = o("AdsAPICampaignRecordUtils").getPromotedObjectType(h, n),
        b = o("AdsODAXUtils").maybeTranslateObjective(
          t.objective,
          y,
          n.optimization_goal,
        ),
        v = A(
          e,
          i,
          h,
          l,
          s,
          a,
          d,
          y,
          (p = n.promoted_object) == null ? void 0 : p.variation,
          !0,
        ),
        L = v.defaulted,
        E = o(
          "AdsAPIAdgroupRecordUtils",
        ).isFlexibleFormatAdOrCreativeAssetGroup(a),
        k =
          !c ||
          o("WebToXFeatureGating").shouldEnableWebToMFlexibleFormat(E, h, b, y),
        I = { defaulted: !1, reason: "none" };
      if (
        (k &&
          (I = S(
            e,
            i,
            u != null ? u : r("AdsAPIOptimizationGoals").NONE,
            t,
            n,
            a,
            y,
            l,
          )),
        I.defaulted)
      ) {
        var D = T();
        D ||
          (m ||
            r("WebToXAdsUnifiedFalcoEvent").log(function () {
              return {
                event: "wtm_defaulted",
                ad_group_id: a.id,
                ad_account_id: e == null ? void 0 : e.account_id,
                ad_page_id: i == null ? void 0 : i.id,
                objective: t.objective,
                event_info: (l != null ? l : "") + "_sticky",
                optimization_goal: u,
              };
            }),
          (_ = "messenger"),
          (f = I.reason));
      } else {
        var x =
            !c ||
            o("WebToXFeatureGating").shouldEnableWebToWhatsAppFlexibleFormat(
              !1,
            ),
          $ =
            !c ||
            o("WebToXFeatureGating").shouldEnableWebToDFlexibleFormat(
              E,
              h,
              b,
              y,
            ),
          P = C(e, t, n, a, i, u, l, v, k, x, $);
        if (P != null)
          (m ||
            r("WebToXAdsUnifiedFalcoEvent").log(function () {
              var t;
              return {
                event: "wtxmd_defaulted",
                ad_group_id: a.id,
                ad_account_id: e == null ? void 0 : e.account_id,
                ad_page_id: i == null ? void 0 : i.id,
                objective: h,
                event_info: l,
                optimization_goal: u,
                subsequent_data: JSON.stringify({
                  destinations: (t = P.multiDestinationType) != null ? t : [],
                }),
              };
            }),
            (_ = P.type),
            (f = P.reason),
            (g = P.multiDestinationType));
        else if (L)
          x &&
            (e != null &&
              i != null &&
              v.reason !== "whatsapp_v3_epd_p75" &&
              v.reason !== "whatsapp_v3_epd_p90" &&
              (m || O(e, i, a, h, l)),
            (_ = "whatsapp"),
            (f = v.reason));
        else if (
          k &&
          R(e, i, u != null ? u : r("AdsAPIOptimizationGoals").NONE, t, n, a, l)
            .defaulted
        ) {
          var w = R(
            e,
            i,
            u != null ? u : r("AdsAPIOptimizationGoals").NONE,
            t,
            n,
            a,
            l,
          );
          (m ||
            r("WebToXAdsUnifiedFalcoEvent").log(function () {
              return {
                event: "wtm_defaulted",
                ad_group_id: a.id,
                ad_account_id: e == null ? void 0 : e.account_id,
                ad_page_id: i == null ? void 0 : i.id,
                objective: t.objective,
                event_info: l,
                optimization_goal: u,
              };
            }),
            (_ = "messenger"),
            (f = w.reason));
        } else if (
          v.reason === "wa_unlinked_eligible" &&
          r("qex")._("1455") === !0
        )
          (e != null && i != null && (m || O(e, i, a, h, l)),
            (_ = "whatsapp"),
            (f = "whatsapp_unlinked_high_intent"));
        else if ($) {
          var F = M(
              e,
              i,
              u != null ? u : r("AdsAPIOptimizationGoals").NONE,
              t,
              n,
              a,
              l,
            ),
            B = F.defaulted
              ? F
              : N(
                  e,
                  i,
                  u != null ? u : r("AdsAPIOptimizationGoals").NONE,
                  t,
                  n,
                  a,
                  l,
                );
          ((f = B.reason),
            B.defaulted &&
              (m ||
                r("WebToXAdsUnifiedFalcoEvent").log(function () {
                  return {
                    event: "wtd_defaulted",
                    ad_account_id: e == null ? void 0 : e.account_id,
                    ad_page_id: i == null ? void 0 : i.id,
                    ad_group_id: a.id,
                    objective: h,
                    event_info: F.defaulted
                      ? (l != null ? l : "") + "_sticky"
                      : l,
                    optimization_goal: u,
                  };
                }),
              (_ = "instagram_direct")));
        }
      }
      return g != null
        ? { type: _, reason: f, multiDestinationType: g }
        : { type: _, reason: f };
    }
    function v(t, a, l, s, c, d, m, p, f, g, h, C) {
      (h === void 0 && (h = !1), C === void 0 && (C = !1));
      var v = "none",
        S = "none",
        R = void 0;
      if (
        o("WAMOStatusAdsManagerUtils").isOnlyWAMOStatusSelectedFromCampaign(s)
      )
        return { type: "none" };
      if (_(t, l, s, c, m, p, f, g, h, C)) S = "stale_wtwa_spec_cleanup";
      else if (l.campaign_group_creation_source === "wtm_boost_post_am_landing")
        ((v = "messenger"), (S = "wtm_boost_post_landing"));
      else if (p === "wtwa_upsell_am_landing")
        ((v = "whatsapp"), (S = "wtwa_upsell_am_landing"));
      else if (p === "wtwa_wam_upsell_am_landing")
        ((v = "whatsapp"), (S = "wtwa_wam_upsell_am_landing"));
      else if (p === "aymt_wtwa_email_upsell_am_landing")
        ((v = "whatsapp"), (S = "aymt_wtwa_email_upsell_am_landing"));
      else if (p === "wtm_ad4ad_am_landing")
        ((v = "messenger"), (S = "wtm_ad4ad_am_landing"));
      else if (p === "wtx_metrics_ad4ad_wtm_am_landing")
        ((v = "messenger"), (S = "wtx_metrics_ad4ad_wtm_am_landing"));
      else if (p === "wtm_aymt_coldstart_am_landing")
        ((v = "messenger"), (S = "wtm_aymt_coldstart_am_landing"));
      else if (
        p === "wtx_create_ad_tofu_wtm_am_landing" ||
        p === "wtx_create_ad_tofu_wtm_no_insight_am_landing"
      )
        ((v = "messenger"), (S = p));
      else if (p === "create_flow")
        if (y(t, l, s, c, m, p, g))
          ((v = "phone_call"), (S = "call_extension"));
        else {
          var L = b(t, l, s, c, m, p, f, g, h, C);
          ((v = L.type), (S = L.reason), (R = L.multiDestinationType));
        }
      else {
        var E = b(t, l, s, c, m, p, f, g, h, C);
        ((v = E.type),
          (S = E.reason),
          (R = E.multiDestinationType),
          v === "none" &&
            y(t, l, s, c, m, p, g) &&
            ((v = "phone_call"), (S = "call_extension")));
      }
      var k = null;
      if ((m == null ? void 0 : m.ctx_ml_scores) != null)
        try {
          k = JSON.parse(m.ctx_ml_scores);
        } catch (e) {}
      var I = u(),
        T = (m == null ? void 0 : m.passes_igd_response_rate_threshold) === !0,
        D = !I.enabled || T;
      return (
        r("WebToXAdsUnifiedFalcoEvent").log(function () {
          var e, n, r, o, a, i, s, u, d, _;
          return {
            event: "wtx_defaulting_debug",
            ad_account_id: t == null ? void 0 : t.account_id,
            ad_page_id: m == null ? void 0 : m.id,
            ad_group_id: c.id,
            objective: l.objective,
            optimization_goal: g,
            event_info: [
              "source:" + (p != null ? p : "null"),
              "defaulted_extension:" + v,
              "defaulting_reason:" + S,
              "l28_msgr_sends:" +
                ((e = m == null ? void 0 : m.messenger_sends_l28) != null
                  ? e
                  : "null"),
              "l28_ig_sends:" +
                ((n = m == null ? void 0 : m.connected_ig_sends_l28) != null
                  ? n
                  : "null"),
              "ig_connected:" +
                String(
                  (m == null || (r = m.connected_instagram_account) == null
                    ? void 0
                    : r.user_igid) != null,
                ),
              "wa_connected:" +
                String(
                  (o = m == null ? void 0 : m.has_whatsapp_business_number) !=
                    null
                    ? o
                    : !1,
                ),
              "wtm_ml_score:" +
                ((a = (i = k) == null ? void 0 : i.wtm) != null ? a : "null"),
              "wtd_ml_score:" +
                ((s = (u = k) == null ? void 0 : u.wtd) != null ? s : "null"),
              "wtwa_ml_score:" +
                ((d = (_ = k) == null ? void 0 : _.wtwa) != null ? d : "null"),
              "passes_igd_response_rate_threshold:" + String(T),
              "igd_response_rate_threshold:" + I.threshold,
              "passes_response_rate_gate:" + String(D),
            ].join(","),
          };
        }),
        r("promiseDone")((e || (e = n("Promise"))).resolve({}), function () {
          r("AdsUEditorAdgroupWebsiteAddOnDefaultedAction").dispatch(
            { adgroupIDs: a, hostID: d, websiteExtensionType: v },
            { line: "838", module: "WebToXDefaultingUtils.js", moduleID: i.id },
          );
        }),
        R != null ? { type: v, multiDestinationType: R } : { type: v }
      );
    }
    function S(e, t, n, a, i, l, s, u) {
      var c;
      if (o("WebToXFeatureGating").isAdAccountOptedOutOfWTMDefaulting())
        return { defaulted: !1, reason: "wtm_opt_out_gk" };
      if (o("WebToXFeatureGating").isAdAccountExcludedFromWTXDefaulting())
        return { defaulted: !1, reason: "wtx_excluded_gk" };
      if (!o("WebToXFeatureGating").enableWebToM(a, i, l, !0))
        return { defaulted: !1, reason: "wtm_not_enabled" };
      var d = (c = t == null ? void 0 : t.messenger_sends_l28) != null ? c : 0;
      if (d < 10) return { defaulted: !1, reason: "none" };
      if (!D(a.objective, s) || !x(n, a.objective))
        return { defaulted: !1, reason: "none" };
      var m = o("AdsWebsiteExtensionTypeUtils.facebook").toJSEnum(
          t == null ? void 0 : t.last_website_extension_type,
        ),
        p = m === "messenger",
        _ = {
          passes_sticky_defaulting_rule: p,
          last_website_extension: m != null ? m : "null",
        };
      return (
        r("WebToXAdsUnifiedFalcoEvent").log(function () {
          return {
            event: "wtm_default_debug",
            ad_account_id: e == null ? void 0 : e.account_id,
            ad_page_id: t == null ? void 0 : t.id,
            ad_group_id: l.id,
            objective: a.objective,
            optimization_goal: n,
            event_info: u,
            subsequent_data: JSON.stringify(_),
          };
        }),
        p
          ? { defaulted: !0, reason: "messenger_sticky" }
          : { defaulted: !1, reason: "none" }
      );
    }
    function R(e, t, n, a, i, l, s) {
      var u;
      if (o("WebToXFeatureGating").isAdAccountOptedOutOfWTMDefaulting())
        return { defaulted: !1, reason: "wtm_opt_out_gk" };
      if (o("WebToXFeatureGating").isAdAccountExcludedFromWTXDefaulting())
        return { defaulted: !1, reason: "wtx_excluded_gk" };
      if (!o("WebToXFeatureGating").enableWebToM(a, i, l, !0))
        return { defaulted: !1, reason: "none" };
      var c = (u = t == null ? void 0 : t.messenger_sends_l28) != null ? u : 0;
      if (c < 10) return { defaulted: !1, reason: "none" };
      var d = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
          a.objective,
          i,
        ),
        m = L(a.objective, n, t, d),
        p = E(e, a.objective, d, n, l, t, s),
        _ = r("qex")._("2585") === !0,
        f = {
          passes_ml_defaulting_rule: k(t),
          passes_heuristic_defaulting_rule: I(t),
          ml_result: m,
          heuristics_result: p,
          in_test_group: _,
        };
      return (
        r("WebToXAdsUnifiedFalcoEvent").log(function () {
          return {
            event: "wtm_default_debug",
            ad_account_id: e == null ? void 0 : e.account_id,
            ad_page_id: t == null ? void 0 : t.id,
            objective: a.objective,
            optimization_goal: n,
            event_info: s,
            subsequent_data: JSON.stringify(f),
          };
        }),
        _ && m
          ? { defaulted: !0, reason: "messenger_ml" }
          : !_ && p
            ? { defaulted: !0, reason: "messenger_heuristics" }
            : { defaulted: !1, reason: "none" }
      );
    }
    function L(e, t, n, r) {
      if (!D(e, r) || !x(t, e)) return !1;
      var o = k(n);
      return (o && T(), o);
    }
    function E(e, t, n, o, a, i, l) {
      var s;
      if (!D(t, n) || !x(o, t)) return !1;
      var u = I(i),
        c = (s = i == null ? void 0 : i.wtm_opt_outs_l28) != null ? s : 0;
      r("WebToXAdsUnifiedFalcoEvent").log(function () {
        return {
          event: "wtm_default_debug",
          ad_account_id: e == null ? void 0 : e.account_id,
          ad_page_id: i == null ? void 0 : i.id,
          ad_group_id: a.id,
          objective: t,
          optimization_goal: o,
          event_info: l,
          subsequent_data: JSON.stringify({
            passes_heuristic: u,
            wtm_opt_outs: c,
          }),
        };
      });
      var d = u && i != null && c < 3;
      return (d && T(), d);
    }
    function k(e) {
      return (e == null ? void 0 : e.is_eligible_for_ml_wtm_defaulting) === !0;
    }
    function I(e) {
      return (
        (e == null ? void 0 : e.more_than_10_messenger_page_sends_l28) === !0 &&
        (e == null ? void 0 : e.is_page_messenger_responsive) === !0
      );
    }
    function T() {
      var e = r("qex")._("739");
      return e === !0;
    }
    function D(e, t) {
      return e === r("AdsAPIObjectives").LINK_CLICKS
        ? t === r("AdsPromotedObjectTypes").WEBSITE
        : e === r("AdsAPIObjectives").OUTCOME_SALES
          ? t === r("AdsPromotedObjectTypes").PIXEL ||
            t === r("AdsPromotedObjectTypes").PRODUCT_SET
          : e === r("AdsAPIObjectives").OUTCOME_LEADS
            ? t === r("AdsPromotedObjectTypes").PIXEL
            : e === r("AdsAPIObjectives").OUTCOME_AWARENESS;
    }
    function x(e, t) {
      return t === r("AdsAPIObjectives").OUTCOME_AWARENESS
        ? e === r("AdsAPIOptimizationGoals").REACH &&
            o("WebToXFeatureGating").enableWTMDefaultingExpansion()
        : e === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
            e === r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND ||
            e === r("AdsAPIOptimizationGoals").LINK_CLICKS;
    }
    function $(e, t) {
      return e === r("AdsAPIObjectives").LINK_CLICKS
        ? t === r("AdsPromotedObjectTypes").WEBSITE
        : e === r("AdsAPIObjectives").OUTCOME_SALES ||
            e === r("AdsAPIObjectives").OUTCOME_LEADS
          ? t === r("AdsPromotedObjectTypes").PIXEL
          : !1;
    }
    function P(e) {
      return e === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
    }
    function N(e, t, n, r, a, i, l) {
      var s;
      if (t == null) return { defaulted: !1, reason: "wtd_missing_page" };
      var c =
        (s = t.connected_instagram_account) == null ? void 0 : s.user_igid;
      if (c == null)
        return { defaulted: !1, reason: "wtd_no_instagram_account" };
      if (o("WebToXFeatureGating").isAdAccountExcludedFromWTXDefaulting())
        return { defaulted: !1, reason: "wtx_excluded_gk" };
      var d = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
        r.objective,
        a,
      );
      if (!o("WebToXFeatureGating").enableWebToIGD(r, a, i, !0))
        return { defaulted: !1, reason: "wtd_not_enabled" };
      if (!$(r.objective, d))
        return { defaulted: !1, reason: "wtd_ineligible_objective" };
      if (!P(n))
        return { defaulted: !1, reason: "wtd_ineligible_optimization_goal" };
      if (t.more_than_100_connected_ig_sends_l28 === !0) {
        var m = u(!1),
          p = m.enabled;
        return !p || t.passes_igd_response_rate_threshold === !0
          ? { defaulted: !0, reason: "wtd_heuristics" }
          : { defaulted: !1, reason: "wtd_not_responsive" };
      }
      return { defaulted: !1, reason: "not_eligible_for_wtd_defaulting" };
    }
    function M(e, t, n, a, i, l, s) {
      var u;
      if (t == null) return { defaulted: !1, reason: "wtd_missing_page" };
      var c =
        (u = t.connected_instagram_account) == null ? void 0 : u.user_igid;
      if (c == null)
        return { defaulted: !1, reason: "wtd_no_instagram_account" };
      if (o("WebToXFeatureGating").isAdAccountExcludedFromWTXDefaulting())
        return { defaulted: !1, reason: "wtx_excluded_gk" };
      var d = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
        a.objective,
        i,
      );
      if (!o("WebToXFeatureGating").enableWebToIGD(a, i, l, !0))
        return { defaulted: !1, reason: "wtd_not_enabled" };
      if (!$(a.objective, d))
        return { defaulted: !1, reason: "wtd_ineligible_objective" };
      if (!P(n))
        return { defaulted: !1, reason: "wtd_ineligible_optimization_goal" };
      var m = o("AdsWebsiteExtensionTypeUtils.facebook").toJSEnum(
          t.last_website_extension_type,
        ),
        p = m === "instagram_direct",
        _ = {
          passes_sticky_defaulting_rule: p,
          last_website_extension: m != null ? m : "null",
          in_test_group: r("qex")._("4015") === !0,
        };
      return (
        r("WebToXAdsUnifiedFalcoEvent").log(function () {
          return {
            event: "wtd_default_debug",
            ad_account_id: e == null ? void 0 : e.account_id,
            ad_page_id: t.id,
            ad_group_id: l.id,
            objective: a.objective,
            optimization_goal: n,
            event_info: s,
            subsequent_data: JSON.stringify(_),
          };
        }),
        p
          ? w()
            ? { defaulted: !0, reason: "instagram_direct_sticky" }
            : { defaulted: !1, reason: "wtd_sticky_control" }
          : { defaulted: !1, reason: "wtd_sticky_last_ext_not_igd" }
      );
    }
    function w() {
      var e = r("qex")._("1590");
      return e === !0;
    }
    function A(e, t, n, a, i, l, s, u, c, d) {
      if (
        (l === void 0 && (l = null),
        s === void 0 && (s = !1),
        u === void 0 && (u = r("AdsPromotedObjectTypes").NONE),
        c === void 0 && (c = null),
        d === void 0 && (d = !1),
        e == null || t == null)
      )
        return { defaulted: !1, reason: "wa_missing_account_or_page" };
      var m = F(e, t, n, l);
      if (m != null) return m;
      var p = o("WebToXFeatureGating").isWebToXEligibleForCatalogAds(n, u, c);
      return p &&
        !o("WebToWhatsappUtils").shouldEnableWebToWhatsAppCatalogAds(!1)
        ? { defaulted: !1, reason: "wa_catalog_check_failed" }
        : (r("AdsInterfacesLogger").log({
            eventName: "ctwa_web_to_whatsapp_defaulting_v2_eligibility_check",
            data: {
              ad_account_id: e.account_id,
              page_id: t.id,
              objective: n,
              ctx_has_wa_biz_number_connected: t.has_whatsapp_business_number,
              is_enabled: t.is_eligible_defaulting_to_wtwa_with_threshold_b,
              is_config_enabled:
                t.is_eligible_defaulting_to_wtwa_with_threshold_c,
            },
          }),
          r("gkx")("17784")
            ? { defaulted: !1, reason: "wa_opt_out_gk" }
            : t.has_whatsapp_business_number === !1
              ? t.is_wtwa_high_intent_advertiser !== !0
                ? { defaulted: !1, reason: "wa_no_number_not_high_intent" }
                : { defaulted: !1, reason: "wa_unlinked_eligible" }
              : e.segment === "TAIL" || e.segment === "TORSO"
                ? n === r("AdsAPIObjectives").OUTCOME_SALES ||
                  n === r("AdsAPIObjectives").OUTCOME_LEADS ||
                  n === r("AdsAPIObjectives").OUTCOME_AWARENESS
                  ? f(t, s)
                    ? (d || O(e, t, l, n, a),
                      {
                        defaulted: !0,
                        reason: s ? "whatsapp_ml_pgd" : "whatsapp_ml_v2",
                      })
                    : { defaulted: !1, reason: "wa_tail_torso_ml_not_eligible" }
                  : n === r("AdsAPIObjectives").LINK_CLICKS
                    ? (d || O(e, t, l, n, a),
                      { defaulted: !0, reason: "whatsapp_traffic_linked" })
                    : {
                        defaulted: !1,
                        reason: "wa_tail_torso_ineligible_objective",
                      }
                : n === r("AdsAPIObjectives").OUTCOME_SALES ||
                    n === r("AdsAPIObjectives").OUTCOME_LEADS ||
                    n === r("AdsAPIObjectives").LINK_CLICKS
                  ? f(t, s)
                    ? o(
                        "WebToXDefaultingCountryUtils",
                      ).isCampaignAudienceWithinPriorityMarkets(i)
                      ? (d || O(e, t, l, n, a),
                        {
                          defaulted: !0,
                          reason: "whatsapp_head_priority_markets",
                        })
                      : {
                          defaulted: !1,
                          reason: "wa_head_outside_priority_no_backtest",
                        }
                    : { defaulted: !1, reason: "wa_head_ml_not_eligible" }
                  : n === r("AdsAPIObjectives").OUTCOME_AWARENESS
                    ? o(
                        "WebToXDefaultingCountryUtils",
                      ).isCampaignAudienceWithinPriorityMarkets(i)
                      ? (d || O(e, t, l, n, a),
                        {
                          defaulted: !0,
                          reason: "whatsapp_awareness_priority",
                        })
                      : {
                          defaulted: !1,
                          reason: "wa_head_awareness_outside_priority",
                        }
                    : {
                        defaulted: !1,
                        reason: "wa_head_ineligible_objective",
                      });
    }
    function F(e, t, n, a) {
      var i = o("WebToXDefaultingCountryUtils").isAdvertiserInEpdCountry(e),
        l = t.is_eligible_defaulting_to_wtwa_v3_epd_with_threshold_p75 === !0,
        s = t.is_eligible_defaulting_to_wtwa_v3_epd_with_threshold_p90 === !0,
        u = t.is_eligible_defaulting_to_wtwa_with_threshold_b === !0,
        c = l || s;
      if (
        (i &&
          r("WebToXAdsUnifiedFalcoEvent").log(function () {
            var r, o;
            return {
              event: "wtx_defaulting_debug",
              ad_account_id: e.account_id,
              ad_page_id: t.id,
              objective: n,
              experiment_variant: "wtwa_defaulting_v3_epd",
              subsequent_data: JSON.stringify({
                adgroup_id: (r = a == null ? void 0 : a.id) != null ? r : null,
                country_code: (o = e.business_country_code) != null ? o : null,
                v2_would_default: u,
                v3_p75_eligible: l,
                v3_p90_eligible: s,
                v3_unlocks_new: !u && c,
                v3_drops_existing: u && !c,
              }),
            };
          }),
        o("WebToXFeatureGating").isAdAccountExcludedFromWTXDefaulting())
      )
        return { defaulted: !1, reason: "wtx_excluded_gk" };
      if (i && !u && c) {
        var d = r("qex")._("4396");
        if (d === !0) {
          var m = r("qex")._("4437");
          if (m === "p75" && l)
            return { defaulted: !0, reason: "whatsapp_v3_epd_p75" };
          if (m === "p90" && s)
            return { defaulted: !0, reason: "whatsapp_v3_epd_p90" };
        }
      }
      return null;
    }
    function O(e, t, n, o, a) {
      (r("WebToXAdsUnifiedFalcoEvent").log(function () {
        return {
          event: "wtwa_defaulted",
          ad_account_id: e.account_id,
          ad_page_id: t.id,
          ad_group_id: n == null ? void 0 : n.id,
          objective: o,
          event_info: a,
        };
      }),
        r("AdsInterfacesLogger").logOnce({
          eventName: "ctwa_web_to_whatsapp_defaulting_event_v2",
          data: {
            account_id: e.account_id,
            adgroup_id: n == null ? void 0 : n.id,
            page_id: t.id,
            objective: o,
            source: a,
            ctx_has_wa_biz_number_connected: t.has_whatsapp_business_number,
          },
        }));
    }
    function B(e) {
      return (
        e === "wtx_create_ad_tofu_wtm_am_landing" ||
        e === "wtx_create_ad_tofu_wtm_no_insight_am_landing"
      );
    }
    function W(e) {
      if ((e === void 0 && (e = !1), r("gkx")("11835"))) return !0;
      var t = e ? r("gkx")("11803") === !0 : r("gkx")("11946") === !0;
      return (
        e &&
          r("CtxAdvertiserQeHbtExposureFalcoEvent").log(function () {
            var e;
            return {
              condition: t ? "test" : "control",
              feature_name: "wtx_defaulting_fixes_qe",
              hbt_name: "h2_train_1_am_mid_adacc_w998_hbt",
              unit_id: (e = r("CurrentAdAccount").getID()) != null ? e : "",
              unit_type: "ad_account_id",
            };
          }),
        t
      );
    }
    ((l.checkWebToIGDResponseRateGate = u),
      (l.isPageDefaultedToWTWA = f),
      (l.enableCallExtensionDefaulting = y),
      (l.enableWebToXDefaultingType = b),
      (l.enableBrowserAddOnDefaultingType = v),
      (l.enableWebToMessengerStickyDefaulting = S),
      (l.enableWebToMessengerDefaulting = R),
      (l.enableWTMMLDefaulting = L),
      (l.enableWTMHeuristicsDefaulting = E),
      (l.enableWebToIGDDefaulting = N),
      (l.enableWebToIGDStickyDefaulting = M),
      (l.enableWebToWaDefaulting = A),
      (l.isWTXCreateAdTofuSource = B),
      (l.isWTXDefaultingFixesEnabled = W));
  },
  98,
);
