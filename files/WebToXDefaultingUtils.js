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
    "Promise",
    "WAMOStatusAdsManagerUtils",
    "WebToMessengerUtils",
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
      s = 0.5,
      u = 0.75;
    function c(e) {
      var t;
      e === void 0 && (e = !0);
      var n = (t = r("qex")._("1130")) != null ? t : s,
        o = e ? r("qex")._("1678") === !0 : r("qex")._("1805") === !0;
      return { enabled: o, threshold: n };
    }
    function d() {
      return r("gkx")("9655");
    }
    function m(e) {
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
    function p(e) {
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
    function _(e) {
      return m(e) || p(e);
    }
    function f(e, t, n, r, o, a, i, l, s, u) {
      var c;
      if (
        !d() ||
        (a !== "wtwa_upsell_am_landing" &&
          a !== "wtwa_wam_upsell_am_landing" &&
          a !== "aymt_wtwa_email_upsell_am_landing") ||
        !_(r)
      )
        return !1;
      var m = L(e, t, n, r, o, a, i, l, s, u);
      return (
        m.type !== "whatsapp" &&
        !(
          m.type === "messaging_apps" &&
          ((c = m.multiDestinationType) == null
            ? void 0
            : c.includes("whatsapp")) === !0
        )
      );
    }
    function g(e, t) {
      if ((t === void 0 && (t = !1), !e.has_whatsapp_business_number))
        return !1;
      if (t === !0)
        return (
          e.is_eligible_defaulting_to_wtwa_with_threshold_c === !0 &&
          e.is_eligible_defaulting_to_wtwa_with_threshold_b === !0 &&
          h(e) === !0
        );
      var n = y(e);
      return n;
    }
    function h(e) {
      var t = e.is_eligible_defaulting_to_wtwa_with_threshold_a;
      return !(
        t === !1 &&
        r("gkx")("15276") === !0 &&
        r("gkx")("15277") === !0
      );
    }
    function y(e) {
      return e.is_eligible_defaulting_to_wtwa_with_threshold_b === !0;
    }
    function C(e, t, n, a, i, l, s) {
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
    function b(e, t, n, a, i, l, s, u, c, d, m) {
      var p = t.objective,
        _ = o(
          "ClickToMessageCTXMDOptimizationExpansionFeatureGating",
        ).enableUnifiedCreationWTXMDL1(p, !1);
      if (!_) return null;
      var f = l != null ? l : r("AdsAPIOptimizationGoals").NONE,
        g = [],
        h = I(e, i, f, t, n, a, s);
      (c && h.defaulted && g.push("messenger"),
        d && u.defaulted && g.push("whatsapp"));
      var y = F(e, i, f, t, n, a, s);
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
    function v(e, t, n, r, a, i) {
      var l;
      if (o("WebToMessengerUtils").isWebsiteAndMessagesCampaign(n)) return !1;
      var s = t.objective,
        u = q(
          e,
          a,
          s,
          i,
          r,
          !1,
          o("AdsAPICampaignRecordUtils").getPromotedObjectType(s, n),
          (l = n.promoted_object) == null ? void 0 : l.variation,
        );
      return u.defaulted;
    }
    function S(e, t, n, r, a, i, l, s, u, c) {
      (u === void 0 && (u = !1), c === void 0 && (c = !1));
      var d = L(e, t, n, r, a, i, l, s, u, c);
      return d.type !== "none" &&
        o("WebToXFeatureGating").isAdAccountInWTXDefaultingBacktest()
        ? { type: "none", reason: "wtx_defaulting_backtest." + d.type }
        : (R(d, e, t, r, a, i, s), d);
    }
    function R(e, t, n, o, a, i, l) {
      var s = n.objective;
      e: {
        if (e.type === "messenger") {
          r("WebToXAdsUnifiedFalcoEvent").log(function () {
            return {
              event: "wtm_defaulted",
              ad_group_id: o.id,
              ad_account_id: t == null ? void 0 : t.account_id,
              ad_page_id: a == null ? void 0 : a.id,
              objective: s,
              event_info:
                e.reason === "messenger_sticky"
                  ? (i != null ? i : "") + "_sticky"
                  : i,
              optimization_goal: l,
            };
          });
          break e;
        }
        if (e.type === "messaging_apps") {
          r("WebToXAdsUnifiedFalcoEvent").log(function () {
            var n;
            return {
              event: "wtxmd_defaulted",
              ad_group_id: o.id,
              ad_account_id: t == null ? void 0 : t.account_id,
              ad_page_id: a == null ? void 0 : a.id,
              objective: s,
              event_info: i,
              optimization_goal: l,
              subsequent_data: JSON.stringify({
                destinations: (n = e.multiDestinationType) != null ? n : [],
              }),
            };
          });
          break e;
        }
        if (e.type === "whatsapp") {
          t != null &&
            a != null &&
            e.reason !== "whatsapp_v3_epd_p75" &&
            e.reason !== "whatsapp_v3_epd_p90" &&
            V(t, a, o, s, i);
          break e;
        }
        if (e.type === "instagram_direct") {
          r("WebToXAdsUnifiedFalcoEvent").log(function () {
            return {
              event: "wtd_defaulted",
              ad_account_id: t == null ? void 0 : t.account_id,
              ad_page_id: a == null ? void 0 : a.id,
              ad_group_id: o.id,
              objective: s,
              event_info:
                e.reason === "instagram_direct_sticky"
                  ? (i != null ? i : "") + "_sticky"
                  : i,
              optimization_goal: l,
            };
          });
          break e;
        }
        break e;
      }
    }
    function L(e, t, n, a, i, l, s, u, c, d) {
      var m,
        p = "none",
        _ = "none",
        f = t.objective,
        g = o("AdsAPICampaignRecordUtils").getPromotedObjectType(f, n),
        h = o("AdsODAXUtils").maybeTranslateObjective(
          t.objective,
          g,
          n.optimization_goal,
        ),
        y = q(
          e,
          i,
          f,
          s,
          a,
          d,
          g,
          (m = n.promoted_object) == null ? void 0 : m.variation,
        ),
        C = y.defaulted,
        v = o(
          "AdsAPIAdgroupRecordUtils",
        ).isFlexibleFormatAdOrCreativeAssetGroup(a),
        S =
          !c ||
          o("WebToXFeatureGating").shouldEnableWebToMFlexibleFormat(v, f, h, g),
        R = { defaulted: !1, reason: "none" };
      if (
        (S &&
          (R = k(
            e,
            i,
            u != null ? u : r("AdsAPIOptimizationGoals").NONE,
            t,
            n,
            a,
            g,
            l,
          )),
        R.defaulted)
      ) {
        var L = P();
        L || ((p = "messenger"), (_ = R.reason));
      } else {
        var E =
            !c ||
            o("WebToXFeatureGating").shouldEnableWebToWhatsAppFlexibleFormat(
              !1,
            ),
          T =
            !c ||
            o("WebToXFeatureGating").shouldEnableWebToDFlexibleFormat(
              v,
              f,
              h,
              g,
            ),
          D = b(e, t, n, a, i, u, l, y, S, E, T);
        if (D != null) return D;
        if (C) E && ((p = "whatsapp"), (_ = y.reason));
        else {
          var x =
              y.reason === "wa_unlinked_eligible" &&
              E &&
              r("qex")._("1455") === !0,
            $ = S
              ? I(
                  e,
                  i,
                  u != null ? u : r("AdsAPIOptimizationGoals").NONE,
                  t,
                  n,
                  a,
                  l,
                )
              : null;
          if (x) ((p = "whatsapp"), (_ = "whatsapp_unlinked_high_intent"));
          else if ($ != null && $.defaulted)
            ((p = "messenger"), (_ = $.reason));
          else if (T) {
            var N = O(
                e,
                i,
                u != null ? u : r("AdsAPIOptimizationGoals").NONE,
                t,
                n,
                a,
                l,
              ),
              M = N.defaulted
                ? N
                : F(
                    e,
                    i,
                    u != null ? u : r("AdsAPIOptimizationGoals").NONE,
                    t,
                    n,
                    a,
                    l,
                  );
            ((_ = M.reason), M.defaulted && (p = "instagram_direct"));
          }
        }
      }
      return { type: p, reason: _ };
    }
    function E(t, a, l, s, d, m, p, _, g, h, y, b) {
      var v;
      (y === void 0 && (y = !1), b === void 0 && (b = !1));
      var R = "none",
        L = "none",
        E = void 0;
      if (
        o("WAMOStatusAdsManagerUtils").isOnlyWAMOStatusSelectedFromCampaign(s)
      )
        return { type: "none" };
      if (o("WebToMessengerUtils").isWebsiteAndMessagesCampaign(s))
        return { type: "none" };
      if (f(t, l, s, d, p, _, g, h, y, b)) L = "stale_wtwa_spec_cleanup";
      else if (l.campaign_group_creation_source === "wtm_boost_post_am_landing")
        ((R = "messenger"), (L = "wtm_boost_post_landing"));
      else if (_ === "wtwa_upsell_am_landing")
        ((R = "whatsapp"), (L = "wtwa_upsell_am_landing"));
      else if (_ === "wtwa_wam_upsell_am_landing")
        ((R = "whatsapp"), (L = "wtwa_wam_upsell_am_landing"));
      else if (_ === "aymt_wtwa_email_upsell_am_landing")
        ((R = "whatsapp"), (L = "aymt_wtwa_email_upsell_am_landing"));
      else if (_ === "wtm_ad4ad_am_landing")
        ((R = "messenger"), (L = "wtm_ad4ad_am_landing"));
      else if (_ === "wtx_metrics_ad4ad_wtm_am_landing")
        ((R = "messenger"), (L = "wtx_metrics_ad4ad_wtm_am_landing"));
      else if (_ === "wtm_aymt_coldstart_am_landing")
        ((R = "messenger"), (L = "wtm_aymt_coldstart_am_landing"));
      else if (
        _ === "wtx_create_ad_tofu_wtm_am_landing" ||
        _ === "wtx_create_ad_tofu_wtm_no_insight_am_landing"
      )
        ((R = "messenger"), (L = _));
      else if (_ === "create_flow")
        if (C(t, l, s, d, p, _, h))
          ((R = "phone_call"), (L = "call_extension"));
        else {
          var k = S(t, l, s, d, p, _, g, h, y, b);
          ((R = k.type), (L = k.reason), (E = k.multiDestinationType));
        }
      else {
        var I = S(t, l, s, d, p, _, g, h, y, b);
        ((R = I.type),
          (L = I.reason),
          (E = I.multiDestinationType),
          R === "none" &&
            !L.startsWith("wtx_defaulting_backtest") &&
            C(t, l, s, d, p, _, h) &&
            ((R = "phone_call"), (L = "call_extension")));
      }
      var T = null;
      if ((p == null ? void 0 : p.ctx_ml_scores) != null)
        try {
          T = JSON.parse(p.ctx_ml_scores);
        } catch (e) {}
      var D = c(),
        x =
          ((v =
            p == null
              ? void 0
              : p.passes_instagram_direct_response_rate_threshold) != null
            ? v
            : p == null
              ? void 0
              : p.passes_igd_response_rate_threshold) === !0,
        $ = !D.enabled || x,
        P =
          (p == null ? void 0 : p.passes_messenger_response_rate_threshold) ===
          !0,
        N = (p == null ? void 0 : p.is_page_messenger_responsive) === !0,
        M = N && !P;
      return (
        r("WebToXAdsUnifiedFalcoEvent").log(function () {
          var e, n, r, o, a, i, s, c, m, f, g, y;
          return {
            event: "wtx_defaulting_debug",
            ad_account_id: t == null ? void 0 : t.account_id,
            ad_page_id: p == null ? void 0 : p.id,
            ad_group_id: d.id,
            objective: l.objective,
            optimization_goal: h,
            event_info: [
              "source:" + (_ != null ? _ : "null"),
              "defaulted_extension:" + R,
              "defaulting_reason:" + L,
              "l28_msgr_sends:" +
                ((e = p == null ? void 0 : p.messenger_sends_l28) != null
                  ? e
                  : "null"),
              "l28_ig_sends:" +
                ((n = p == null ? void 0 : p.connected_ig_sends_l28) != null
                  ? n
                  : "null"),
              "ig_connected:" +
                String(
                  (p == null || (r = p.connected_instagram_account) == null
                    ? void 0
                    : r.user_igid) != null,
                ),
              "wa_connected:" +
                String(
                  (o = p == null ? void 0 : p.has_whatsapp_business_number) !=
                    null
                    ? o
                    : !1,
                ),
              "wtm_ml_score:" +
                ((a = (i = T) == null ? void 0 : i.wtm) != null ? a : "null"),
              "wtd_ml_score:" +
                ((s = (c = T) == null ? void 0 : c.wtd) != null ? s : "null"),
              "wtwa_ml_score:" +
                ((m = (f = T) == null ? void 0 : f.wtwa) != null ? m : "null"),
              "messenger_response_rate:" +
                ((g = p == null ? void 0 : p.messenger_response_rate) != null
                  ? g
                  : "null"),
              "messenger_response_rate_threshold:" + u,
              "passes_messenger_response_rate_threshold:" + String(P),
              "is_page_messenger_responsive:" + String(N),
              "messenger_responsiveness_override_applied:" + String(M),
              "instagram_direct_response_rate:" +
                ((y = p == null ? void 0 : p.instagram_direct_response_rate) !=
                null
                  ? y
                  : "null"),
              "instagram_direct_response_rate_threshold:" + D.threshold,
              "passes_instagram_direct_response_rate_threshold:" + String(x),
              "passes_instagram_direct_response_rate_gate:" + String($),
              "passes_igd_response_rate_threshold:" + String(x),
              "igd_response_rate_threshold:" + D.threshold,
              "passes_response_rate_gate:" + String($),
            ].join(","),
          };
        }),
        r("promiseDone")((e || (e = n("Promise"))).resolve({}), function () {
          r("AdsUEditorAdgroupWebsiteAddOnDefaultedAction").dispatch(
            { adgroupIDs: a, hostID: m, websiteExtensionType: R },
            { line: "928", module: "WebToXDefaultingUtils.js", moduleID: i.id },
          );
        }),
        E != null ? { type: R, multiDestinationType: E } : { type: R }
      );
    }
    function k(e, t, n, a, i, l, s, u) {
      var c;
      if (o("WebToXFeatureGating").isAdAccountOptedOutOfWTMDefaulting())
        return { defaulted: !1, reason: "wtm_opt_out_gk" };
      if (o("WebToXFeatureGating").isAdAccountExcludedFromWTXDefaulting())
        return { defaulted: !1, reason: "wtx_excluded_gk" };
      if (!o("WebToXFeatureGating").enableWebToM(a, i, l, !0))
        return { defaulted: !1, reason: "wtm_not_enabled" };
      var d = (c = t == null ? void 0 : t.messenger_sends_l28) != null ? c : 0;
      if (d < 10) return { defaulted: !1, reason: "none" };
      if (!N(a.objective, s) || !M(n)) return { defaulted: !1, reason: "none" };
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
    function I(e, t, n, a, i, l, s) {
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
        m = T(a.objective, n, t, d),
        p = D(e, a.objective, d, n, l, t, s),
        _ = r("qex")._("2585") === !0,
        f = {
          passes_ml_defaulting_rule: x(t),
          passes_heuristic_defaulting_rule: $(t),
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
    function T(e, t, n, r) {
      if (!N(e, r) || !M(t)) return !1;
      var o = x(n);
      return (o && P(), o);
    }
    function D(e, t, n, o, a, i, l) {
      var s;
      if (!N(t, n) || !M(o)) return !1;
      var u = $(i),
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
      return (d && P(), d);
    }
    function x(e) {
      return (e == null ? void 0 : e.is_eligible_for_ml_wtm_defaulting) === !0;
    }
    function $(e) {
      return (
        (e == null ? void 0 : e.more_than_10_messenger_page_sends_l28) === !0 &&
        (e == null ? void 0 : e.is_page_messenger_responsive) === !0
      );
    }
    function P() {
      var e = r("qex")._("739");
      return e === !0;
    }
    function N(e, t) {
      return e === r("AdsAPIObjectives").LINK_CLICKS
        ? t === r("AdsPromotedObjectTypes").WEBSITE
        : e === r("AdsAPIObjectives").OUTCOME_SALES
          ? t === r("AdsPromotedObjectTypes").PIXEL ||
            t === r("AdsPromotedObjectTypes").PRODUCT_SET
          : e === r("AdsAPIObjectives").OUTCOME_LEADS
            ? t === r("AdsPromotedObjectTypes").PIXEL
            : !1;
    }
    function M(e) {
      return (
        e === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS ||
        e === r("AdsAPIOptimizationGoals").RETURN_ON_AD_SPEND ||
        e === r("AdsAPIOptimizationGoals").LINK_CLICKS
      );
    }
    function w(e, t) {
      return e === r("AdsAPIObjectives").LINK_CLICKS
        ? t === r("AdsPromotedObjectTypes").WEBSITE
        : e === r("AdsAPIObjectives").OUTCOME_SALES ||
            e === r("AdsAPIObjectives").OUTCOME_LEADS
          ? t === r("AdsPromotedObjectTypes").PIXEL
          : !1;
    }
    function A(e) {
      return e === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS;
    }
    function F(e, t, n, r, a, i, l) {
      var s;
      if (t == null) return { defaulted: !1, reason: "wtd_missing_page" };
      var u =
        (s = t.connected_instagram_account) == null ? void 0 : s.user_igid;
      if (u == null)
        return { defaulted: !1, reason: "wtd_no_instagram_account" };
      if (o("WebToXFeatureGating").isAdAccountExcludedFromWTXDefaulting())
        return { defaulted: !1, reason: "wtx_excluded_gk" };
      var d = o("AdsAPICampaignRecordUtils").getPromotedObjectType(
        r.objective,
        a,
      );
      if (!o("WebToXFeatureGating").enableWebToIGD(r, a, i, !0))
        return { defaulted: !1, reason: "wtd_not_enabled" };
      if (!w(r.objective, d))
        return { defaulted: !1, reason: "wtd_ineligible_objective" };
      if (!A(n))
        return { defaulted: !1, reason: "wtd_ineligible_optimization_goal" };
      if (t.more_than_100_connected_ig_sends_l28 === !0) {
        var m,
          p = c(!1),
          _ = p.enabled,
          f =
            ((m = t.passes_instagram_direct_response_rate_threshold) != null
              ? m
              : t.passes_igd_response_rate_threshold) === !0;
        return !_ || f
          ? { defaulted: !0, reason: "wtd_heuristics" }
          : { defaulted: !1, reason: "wtd_not_responsive" };
      }
      return { defaulted: !1, reason: "not_eligible_for_wtd_defaulting" };
    }
    function O(e, t, n, a, i, l, s) {
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
      if (!w(a.objective, d))
        return { defaulted: !1, reason: "wtd_ineligible_objective" };
      if (!A(n))
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
          ? B()
            ? { defaulted: !0, reason: "instagram_direct_sticky" }
            : { defaulted: !1, reason: "wtd_sticky_control" }
          : { defaulted: !1, reason: "wtd_sticky_last_ext_not_igd" }
      );
    }
    function B() {
      var e = r("qex")._("1590");
      return e === !0;
    }
    function W(e, t, n) {
      return t === r("AdsAPIObjectives").OUTCOME_SALES ||
        t === r("AdsAPIObjectives").OUTCOME_LEADS ||
        t === r("AdsAPIObjectives").OUTCOME_AWARENESS
        ? g(e, n)
          ? { defaulted: !0, reason: n ? "whatsapp_ml_pgd" : "whatsapp_ml_v2" }
          : { defaulted: !1, reason: "wa_tail_torso_ml_not_eligible" }
        : t === r("AdsAPIObjectives").LINK_CLICKS
          ? { defaulted: !0, reason: "whatsapp_traffic_linked" }
          : { defaulted: !1, reason: "wa_tail_torso_ineligible_objective" };
    }
    function q(e, t, n, a, i, l, s, u) {
      if (
        (i === void 0 && (i = null),
        l === void 0 && (l = !1),
        s === void 0 && (s = r("AdsPromotedObjectTypes").NONE),
        u === void 0 && (u = null),
        e == null || t == null)
      )
        return { defaulted: !1, reason: "wa_missing_account_or_page" };
      var c = U(e, t, n, i);
      if (c != null) return c;
      var d = o("WebToXFeatureGating").isWebToXEligibleForCatalogAds(n, s, u);
      return d &&
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
            : t.has_whatsapp_business_number !== !0
              ? t.is_wtwa_high_intent_advertiser !== !0
                ? { defaulted: !1, reason: "wa_no_number_not_high_intent" }
                : { defaulted: !1, reason: "wa_unlinked_eligible" }
              : e.segment === "TAIL" || e.segment === "TORSO"
                ? W(t, n, l)
                : n === r("AdsAPIObjectives").OUTCOME_SALES ||
                    n === r("AdsAPIObjectives").OUTCOME_LEADS ||
                    n === r("AdsAPIObjectives").LINK_CLICKS
                  ? g(t, l)
                    ? o(
                        "WebToXDefaultingCountryUtils",
                      ).isCampaignAudienceWithinPriorityMarkets(a)
                      ? {
                          defaulted: !0,
                          reason: "whatsapp_head_priority_markets",
                        }
                      : {
                          defaulted: !1,
                          reason: "wa_head_outside_priority_no_backtest",
                        }
                    : { defaulted: !1, reason: "wa_head_ml_not_eligible" }
                  : n === r("AdsAPIObjectives").OUTCOME_AWARENESS
                    ? o(
                        "WebToXDefaultingCountryUtils",
                      ).isCampaignAudienceWithinPriorityMarkets(a)
                      ? { defaulted: !0, reason: "whatsapp_awareness_priority" }
                      : {
                          defaulted: !1,
                          reason: "wa_head_awareness_outside_priority",
                        }
                    : {
                        defaulted: !1,
                        reason: "wa_head_ineligible_objective",
                      });
    }
    function U(e, t, n, a) {
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
    function V(e, t, n, o, a) {
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
    function H(e) {
      return (
        e === "wtx_create_ad_tofu_wtm_am_landing" ||
        e === "wtx_create_ad_tofu_wtm_no_insight_am_landing"
      );
    }
    ((l.checkWebToIGDResponseRateGate = c),
      (l.isPageDefaultedToWTWA = g),
      (l.shouldDefaultToWhatsAppForInstantExperienceAds = v),
      (l.enableWebToXDefaultingType = S),
      (l.enableBrowserAddOnDefaultingType = E),
      (l.enableWebToMessengerStickyDefaulting = k),
      (l.enableWebToMessengerDefaulting = I),
      (l.enableWTMMLDefaulting = T),
      (l.enableWTMHeuristicsDefaulting = D),
      (l.enableWebToIGDDefaulting = F),
      (l.enableWebToIGDStickyDefaulting = O),
      (l.enableWebToWaDefaulting = q),
      (l.isWTXCreateAdTofuSource = H));
  },
  98,
);
