__d(
  "AdsLeadGenAdGroupUtils",
  [
    "fbt",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsLearnMore.react",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
    "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
    "ImmutableMapWithV4Types",
    "adsConvertAdObjectRecordToPlainJS",
    "immutable",
    "qex",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "1438863853809586",
      d = s._(/*BTDS*/ "How Instant forms work"),
      m = s._(/*BTDS*/ "What\u2019s an instant form add-on?"),
      p = s._(
        /*BTDS*/ "Your bids for website and instant forms are adjustable",
      ),
      _ = s._(
        /*BTDS*/ "You could get 14-24\u0025 lower cost per lead by choosing website and instant forms",
      ),
      f = s._(/*BTDS*/ "Website and instant form"),
      g = s._(/*BTDS*/ "Website and instant form table"),
      h = s._(
        /*BTDS*/ "Review eligible ad sets to duplicate and apply the suggested conversion location",
      ),
      y = s._(/*BTDS*/ "Duplicate as drafts");
    function C() {
      return s._(
        /*BTDS*/ "Send people to your website or instant form, wherever they\u2019re most likely to convert. {Learn more}",
        [
          s._param(
            "Learn more",
            u.jsx(r("AdsLearnMore.react"), {
              cmsID: c,
              label: s._(/*BTDS*/ "About website and instant forms"),
              source: "ads_manager_context_preview_learn_more",
            }),
          ),
        ],
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    var b = s._(
        /*BTDS*/ "Send people to your website or instant form, wherever they're most likely to convert.",
      ),
      v = s._(
        /*BTDS*/ 'This result is based on multiple large scale experiments using the leads objective run globally across verticals from November 2024 to February 2025. The experiment compared the performance of campaigns using "Website and instant forms" as the conversion location to campaigns using only "Website" as the conversion location. The result showed that campaigns using "Website and instant forms" as the conversion location had on average 14.8\u0025 to 24\u0025 lower cost per lead than the "Website" conversion location campaigns. This potential outcome is provided to give you an idea of possible performance but isn\'t guaranteed.',
      ),
      S = s._(/*BTDS*/ "Website and calls"),
      R = s._(
        /*BTDS*/ "You could get 9\u0025 more conversions by choosing website and calls",
      ),
      L = s._(
        /*BTDS*/ "Send people to your website with a call button at the bottom of the screen to make it easy for them to call your business.",
      ),
      E = s._(/*BTDS*/ "Up to 9\u0025 more conversions"),
      k = s._(
        /*BTDS*/ 'This result is based on an experiment run between July 29, 2025 and Aug 5, 2025. The experiment compared the performance of campaigns using "Website and calls" as the conversion location to campaigns using only "Website" as the conversion location. The result showed that campaigns using "Website and calls" as the conversion location had on average 9\u0025 more conversions than the "Website" conversion location campaigns. This potential outcome is provided to give you an idea of possible performance but isn\'t guaranteed.',
      ),
      I = s._(
        /*BTDS*/ "You updated your conversion location to website and calls.",
      ),
      T = s._(/*BTDS*/ "Website and calls table"),
      D = s._(
        /*BTDS*/ "Review eligible ad sets to duplicate and apply the suggested conversion location",
      ),
      x = s._(/*BTDS*/ "Duplicate as drafts"),
      $ = s._(/*BTDS*/ "Suggested performance goal");
    function P() {
      return s._(
        /*BTDS*/ "Send people to your website with a call button at the bottom of the screen to make it easy for them to call your business.",
      );
    }
    P.displayName = P.name + " [from " + i.id + "]";
    var N = "0";
    function M(e, t, n) {
      var o,
        a = e.destination_type,
        i = r("AdsAdgroupSemanticFields").callToActionValue.get(n, t),
        l =
          (i == null ? void 0 : i.get("lead_gen_form_id")) ||
          ((o = r("AdsAdgroupRecordAccessors").creative) == null ||
          (o = o.call_to_action) == null ||
          (o = o.value) == null
            ? void 0
            : o.lead_gen_form_id.get(t));
      if (
        a === r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM ||
        (l != null && l !== "")
      )
        return !0;
      var s = r("AdsAdgroupSemanticFields").callToAction.get(n, t);
      return s === void 0 || !(s instanceof r("immutable").List)
        ? !1
        : s.some(function (e) {
            var t = e.get("value");
            if (t == null || !(t instanceof r("ImmutableMapWithV4Types")))
              return !1;
            var n = t.get("lead_gen_form_id");
            return n != null && n !== "";
          });
    }
    function w(e, t) {
      if (
        o(
          "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
        ).isAdAccountEligibleForMarketingMessagesMessageOnly()
      ) {
        var n = r("adsConvertAdObjectRecordToPlainJS")(t),
          a = n.targeting,
          i = o(
            "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
          ).hasOnlyMarketingMessagesTargeting(a);
        if (i) return !1;
      }
      var l = G(!1);
      return (
        (e === o("AdsAPIObjectives").OUTCOME_LEADS && U(t)) ||
        (!l &&
          (e === o("AdsAPIObjectives").LINK_CLICKS ||
            e === o("AdsAPIObjectives").OUTCOME_SALES))
      );
    }
    function A(e, t) {
      return (
        (e === o("AdsAPIObjectives").OUTCOME_LEADS ||
          e === o("AdsAPIObjectives").OUTCOME_SALES) &&
        F(t)
      );
    }
    function F(e) {
      return (
        e.destination_type === r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM
      );
    }
    function O() {
      return !0;
    }
    function B() {
      return s._(
        /*BTDS*/ "Your bids for website conversions and instant form conversions are equal by default. Set value rules to adjust your bids. {Learn more}",
        [
          s._param(
            "Learn more",
            u.jsx(r("AdsLearnMore.react"), {
              cmsID: c,
              label: s._(/*BTDS*/ "About website and instant forms"),
              source: "ads_manager_context_preview_learn_more",
            }),
          ),
        ],
      );
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W() {
      return null;
    }
    function q(e, t) {
      return (
        e.destination_type ===
          r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM &&
        (t === r("AdsPromotedObjectTypes").PIXEL ||
          t === r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM)
      );
    }
    function U(e) {
      return (
        e.optimization_goal !== r("AdsAPIOptimizationGoals").LEAD_GENERATION &&
        e.optimization_goal !== r("AdsAPIOptimizationGoals").QUALITY_LEAD
      );
    }
    function V(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s =
          (t = r("AdsAdgroupRecordAccessors").creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null ||
          (t = t.call_to_action) == null ||
          (t = t.value) == null ||
          (t = t.lead_gen_form_id) == null
            ? void 0
            : t.delete(e);
      ((s =
        (n = r("AdsAdgroupRecordAccessors").creative) == null ||
        (n = n.call_to_action) == null ||
        (n = n.value) == null ||
        (n = n.lead_gen_form_id) == null
          ? void 0
          : n.delete(s)),
        (s =
          (o = r("AdsAdgroupRecordAccessors").creative) == null ||
          (o = o.object_story_spec) == null ||
          (o = o.video_data) == null ||
          (o = o.call_to_action) == null ||
          (o = o.value) == null ||
          (o = o.lead_gen_form_id) == null
            ? void 0
            : o.delete(s)),
        (s =
          (a = r("AdsAdgroupRecordAccessors").creative) == null ||
          (a = a.object_story_spec) == null ||
          (a = a.template_data) == null ||
          (a = a.call_to_action) == null ||
          (a = a.value) == null ||
          (a = a.lead_gen_form_id) == null
            ? void 0
            : a.delete(s)));
      var u =
        (i = s.creative) == null || (i = i.object_story_spec) == null
          ? void 0
          : i.link_data;
      if (u && u.child_attachments != null) {
        var c = u.child_attachments.map(function (e) {
          return e.deleteIn(["call_to_action", "value", "lead_gen_form_id"]);
        });
        s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.child_attachments.set(c, s);
      }
      var d =
        (l = s.creative) == null || (l = l.asset_feed_spec) == null
          ? void 0
          : l.call_to_actions;
      if (d) {
        var m;
        s =
          (m = r("AdsAdgroupRecordAccessors").creative) == null ||
          (m = m.asset_feed_spec) == null
            ? void 0
            : m.call_to_actions.delete(s);
      }
      return s;
    }
    function H(e) {
      var t,
        n =
          e == null ||
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.link_data) == null ||
          (t = t.call_to_action) == null ||
          (t = t.value) == null
            ? void 0
            : t.lead_gen_form_id;
      if (n == null) {
        var o,
          a =
            (o = e.creative) == null || (o = o.asset_feed_spec) == null
              ? void 0
              : o.call_to_actions,
          i = a && a.size > 0 ? a.get(0) : null;
        if (i != null) {
          var l = i.get("value");
          l instanceof r("immutable").Map && (n = l.get("lead_gen_form_id"));
        }
      }
      if (n == null) {
        var s;
        n =
          e == null ||
          (s = e.creative) == null ||
          (s = s.call_to_action) == null ||
          (s = s.value) == null
            ? void 0
            : s.lead_gen_form_id;
      }
      if (n == null) {
        var u;
        n =
          e == null ||
          (u = e.creative) == null ||
          (u = u.object_story_spec) == null ||
          (u = u.template_data) == null ||
          (u = u.call_to_action) == null ||
          (u = u.value) == null
            ? void 0
            : u.lead_gen_form_id;
      }
      return n;
    }
    function G(e) {
      return (
        e === void 0 && (e = !1),
        e ? r("qex")._("5008") === !0 : r("qex")._("5009") === !0
      );
    }
    ((l.FORM_EXTENSION_HELP_TEXT_TITLE = d),
      (l.FORM_EXTENSION_HELP_TEXT_TITLE_NEW = m),
      (l.CONVERSION_VALUE_RULES_GUIDANCE_CARD_TITLE = p),
      (l.WEBSITE_AND_INSTANT_FORM_UPSELL_TITLE = _),
      (l.WEBSITE_AND_INSTANT_FORM_NAME = f),
      (l.WEBSITE_AND_INSTANT_FORM_MFR_TABLE_LABEL = g),
      (l.WEBSITE_AND_INSTANT_FORM_MFR_TABLE_HEADER = h),
      (l.WEBSITE_AND_INSTANT_FORM_MFR_TABLE_PRIMARY_BUTTON_LABEL = y),
      (l.WEBSITE_AND_INSTANT_FORM_MFR_TABLE_DESCRIPTION = C),
      (l.WEBSITE_AND_INSTANT_FORM_UPSELL_BODY_1 = b),
      (l.WEBSITE_AND_INSTANT_FORM_UPSELL_TOOLTIP = v),
      (l.WEBSITE_AND_CALLS_UPSELL_NAME = S),
      (l.WEBSITE_AND_CALLS_UPSELL_TITLE = R),
      (l.WEBSITE_AND_CALLS_UPSELL_BODY = L),
      (l.WEBSITE_AND_CALLS_UPSELL_OUTCOME_LIFT_TEXT = E),
      (l.WEBSITE_AND_CALLS_UPSELL_TOOLTIP_BODY = k),
      (l.WEBSITE_AND_CALLS_UPSELL_SUCCESS_TOAST_BODY = I),
      (l.WEBSITE_AND_CALLS_UPSELL_MFR_TABLE_LABEL = T),
      (l.WEBSITE_AND_CALLS_UPSELL_MFR_TABLE_HEADER = D),
      (l.WEBSITE_AND_CALLS_UPSELL_MFR_TABLE_PRIMARY_BUTTON_LABEL = x),
      (l.WEBSITE_AND_CALLS_UPSELL_MFR_TABLE_SUGGESTED_PERFORMANCE_GOAL = $),
      (l.WEBSITE_AND_CALLS_UPSELL_MFR_TABLE_DESCRIPTION = P),
      (l.FORM_EXTENSION_LEAD_FORM_ID_PLACEHOLDER = N),
      (l.isLeadGenFormEnabled = M),
      (l.isLeadGenFormExtensionEnabled = w),
      (l.isLeadGenFormMultiDestinationEnabled = A),
      (l.isLeadGenF2MultiDestinationCampaign = F),
      (l.isLeadGenF2MultiDestinationEligible = O),
      (l.getConversionValueRulesGuidanceMessage = B),
      (l.getConversionValueRulesTooltipMessage = W),
      (l.isF2MultiDestinationKeepOriginalAdgroup = q),
      (l.isLeadGenFormExtensionCampaign = U),
      (l.clearLeadGenFormId = V),
      (l.getLeadGenFormId = H),
      (l.shouldDisableFormExtension = G));
  },
  226,
);
