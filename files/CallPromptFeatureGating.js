__d(
  "CallPromptFeatureGating",
  [
    "$InternalEnum",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsInterfacesLogger",
    "QE2Logger",
    "adsCallToActionIsCTASupportedByObjective",
    "getByPath",
    "getIsEligibleHighAdminCountPage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set([
        (e = r("AdsAPIObjectives")).OUTCOME_ENGAGEMENT,
        e.OUTCOME_SALES,
        e.LINK_CLICKS,
        e.MESSAGES,
        e.CONVERSIONS,
      ]),
      c = new Set([
        (s = r("AdCampaignDestination")).MESSENGER,
        s.MESSAGING_MESSENGER_WHATSAPP,
        s.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
        s.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
      ]),
      d = new Set([
        "feed",
        "search",
        "story",
        "video_feeds",
        "instream_video",
        "marketplace",
      ]),
      m = n("$InternalEnum").Mirrored([
        "CreateNewRadioButton",
        "UseExistingTemplate",
        "ToggleInStartConversationTemplate",
        "DefaultingInDuplicationFlow",
      ]);
    function p(e) {
      return (
        (e == null ? void 0 : e.is_eligible_for_call_prompt_defaulting) ===
          !0 &&
        ((e == null ? void 0 : e.is_page_rtc_enabled) === void 0 ||
          (e == null ? void 0 : e.is_page_rtc_enabled) === !0)
      );
    }
    function _(e, t, n, a, i) {
      i === void 0 && (i = {});
      var l = i,
        s = l.canSkipPlacementCheck,
        u = s === void 0 ? !1 : s,
        c = l.logExposureForHighAdminExperiment,
        d = c === void 0 ? !1 : c,
        m = l.logExposureForNonMsgActiveExperiment,
        p = l.pathForHoldoutExposureLogging;
      if (!f(e) || !g(t) || (!u && !h(n))) return !1;
      m === !0 &&
        a != null &&
        o("QE2Logger").logExposureForPage(
          "non_messaging_active_pages_for_biz_calling_experiments",
          a.id,
        );
      var _ = C(p, a);
      return (
        _ &&
          a != null &&
          (a == null
            ? void 0
            : a.is_eligible_for_calling_enablement_holdout) === !0 &&
          o("QE2Logger").logExposureForPage(
            "business_calling_high_admin_2025",
            a.id,
          ),
        (a == null
          ? void 0
          : a.is_eligible_for_biz_rtc_with_more_than_5_admins) === !0
          ? r("getIsEligibleHighAdminCountPage")(a, d)
          : (_ &&
              a != null &&
              o("QE2Logger").logExposureForPage("bc_holdout_qe_2024", a.id),
            (a == null ? void 0 : a.is_eligible_for_biz_rtc) === !0)
      );
    }
    function f(e) {
      return e != null && u.has(e);
    }
    function g(e) {
      return e != null && c.has(e);
    }
    function h(e) {
      return e.length === 0
        ? !1
        : e.every(function (e) {
            var t = e.facebook_positions;
            return t == null
              ? !1
              : t.some(function (e) {
                  return d.has(e);
                });
          });
    }
    function y(e, t, n, a, i) {
      var l, s;
      if (
        (r("AdsInterfacesLogger").log({
          eventName: "call_prompt_update_cta_eligiblility_check_started",
          data:
            ((l = {}),
            (l.page_id = t == null ? void 0 : t.id),
            (l.metadata = i),
            l),
        }),
        n == null || t == null || t.id == null)
      )
        return !1;
      var u = r("adsCallToActionIsCTASupportedByObjective")(n, "CONTACT_US"),
        c = r("getByPath")(a, ["is_call_prompt_enabled"]);
      if (e !== "MESSAGE_PAGE" || u !== !0 || c !== !0) return !1;
      o("QE2Logger").logExposureForPage("call_prompt_update_cta_page_id", t.id);
      var d =
        (t == null ? void 0 : t.is_eligible_for_call_prompt_update_cta) === !0;
      return (
        r("AdsInterfacesLogger").log({
          eventName: "call_prompt_update_cta_eligiblility_check_ended",
          data:
            ((s = {}),
            (s.page_id = t == null ? void 0 : t.id),
            (s.metadata = i),
            (s.new_value = d),
            s),
        }),
        d
      );
    }
    function C(e, t) {
      if (e == null) return !1;
      switch (e) {
        case m.CreateNewRadioButton:
        case m.UseExistingTemplate:
        case m.DefaultingInDuplicationFlow:
          return (
            (t == null
              ? void 0
              : t.is_business_calling_eligible_including_holdout) === !0 &&
            (t == null
              ? void 0
              : t.is_in_call_prompt_defaulting_eligibility_raw_laser) === !0
          );
        case m.ToggleInStartConversationTemplate:
          return (
            (t == null
              ? void 0
              : t.is_business_calling_eligible_including_holdout) === !0
          );
      }
      return !1;
    }
    function b(e) {
      return e == null || (e == null ? void 0 : e.id) == null
        ? !1
        : (e == null ? void 0 : e.is_eligible_for_warm_call_prompt) === !0;
    }
    ((l.CallPromptCreationHoldoutLoggingPath = m),
      (l.isPageEligibleForCallPromptDefaulting = p),
      (l.eligibleForCallPromptForCTXAdsAM = _),
      (l.eligibleForCallPromptUpdateCTA = y),
      (l.isEligibleForWarmCallPrompt = b));
  },
  98,
);
