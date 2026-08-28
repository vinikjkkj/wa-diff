__d(
  "PEFunnelLogger",
  [
    "AdsInterfacesLogger",
    "AdsManagerAppConfig",
    "CurrentUser",
    "PEAppContext",
    "PEDefaultOnExclusions",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = new Map();
    function u(t, n, r) {
      var o, a;
      if (t == null) return { shouldLog: !0 };
      var i = e.get(t);
      if (i != null && i.result === n && i.reason === r)
        return { shouldLog: !1 };
      var l = ((o = s.get(t)) != null ? o : 0) + (i != null ? 1 : 0);
      return (
        s.set(t, l),
        e.set(t, { result: n, reason: r }),
        {
          shouldLog: !0,
          previousResult:
            (a = i == null ? void 0 : i.result) != null ? a : "unknown",
          previousReason: i == null ? void 0 : i.reason,
          transitionCount: l,
        }
      );
    }
    function c() {
      (e.clear(), s.clear());
    }
    function d() {
      return {
        is_adex_revamp_blocked:
          r("gkx")("2898") === !0 || r("gkx")("1972") === !0,
        is_default_on_blocklisted: o(
          "PEDefaultOnExclusions",
        ).isDefaultOnBlocklisted(),
        is_saef_sensitive_excluded: o(
          "PEDefaultOnExclusions",
        ).isExcludedBySaefSensitiveVerticals(),
        is_targeting_gk_blocked: !r("gkx")("21554"),
      };
    }
    function m(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u = o("PEAppContext").getEventDataForLogging(),
        c = (n = e.adgroup_id) != null ? n : u.adgroup_id,
        d = e.campaign_group_id,
        m = e.campaign_id,
        p = babelHelpers.extends({}, t);
      return (
        (s = {}),
        (s.object_level = e.object_level),
        (s.campaign_group_id = d),
        (s.campaign_id = m),
        (s.adgroup_id = c),
        (s.business_id = (a = e.business_id) != null ? a : u.business_id),
        (s.product_set_id = e.product_set_id),
        (s.object_creation_source = e.object_creation_source),
        (s.session_id =
          (i = u.session_id) != null ? i : o("AdsManagerAppConfig").sessionID),
        (s.ad_account_id = (l = e.ad_account_id) != null ? l : u.ad_account_id),
        (s.user_account_id = r("CurrentUser").getID()),
        (s.subsequent_data = JSON.stringify(p)),
        s
      );
    }
    function p(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l3_eligibility_pass",
        data: m(e, t),
      });
    }
    function _(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l3_eligibility_fail",
        data: m(e, t),
      });
    }
    function f(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l3_catalog_defaulted_success",
        data: m(e, t),
      });
    }
    function g(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l3_catalog_defaulted_skip",
        data: m(e, t),
      });
    }
    function h(e, t) {
      var n = u(e.adgroup_id, "pass", null);
      n.shouldLog &&
        r("AdsInterfacesLogger").logOnce({
          eventName: "pe_funnel_l1_eligibility_pass",
          data: m(
            e,
            babelHelpers.extends({}, t, {
              previous_result: n.previousResult,
              previous_reason: n.previousReason,
              transition_count: n.transitionCount,
            }),
          ),
        });
    }
    function y(e, t) {
      var n,
        o = u(
          e.adgroup_id,
          "fail",
          (n = t == null ? void 0 : t.ineligibility_reason) != null ? n : null,
        );
      o.shouldLog &&
        r("AdsInterfacesLogger").logOnce({
          eventName: "pe_funnel_l1_eligibility_fail",
          data: m(
            e,
            babelHelpers.extends({}, t, {
              previous_result: o.previousResult,
              previous_reason: o.previousReason,
              transition_count: o.transitionCount,
            }),
          ),
        });
    }
    function C(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_data_consent_default_on",
        data: m(e, t),
      });
    }
    function b(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_data_consent_default_off",
        data: m(e, t),
      });
    }
    function v(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_data_consent_user_on",
        data: m(e, t),
      });
    }
    function S(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_data_consent_user_off",
        data: m(e, t),
      });
    }
    function R(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_data_consent_state",
        data: m(e, t),
      });
    }
    function L(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_format_consent_state",
        data: m(e, t),
      });
    }
    function E(e, t, n, r, o, a) {
      return e.is_targeting_gk_blocked === !0
        ? "GK_BLOCKED"
        : e.is_default_on_blocklisted === !0
          ? "BLOCKLISTED"
          : e.is_saef_sensitive_excluded === !0
            ? "SAEF_SENSITIVE"
            : e.is_adex_revamp_blocked === !0
              ? "ADEX_BLOCKED"
              : t
                ? "COOLDOWN"
                : n == null
                  ? "CATALOG_STATUS_UNKNOWN"
                  : o === "loading"
                    ? "CATALOG_LOADING"
                    : a === "api_failure"
                      ? "CATALOG_FETCH_FAILED"
                      : n
                        ? r
                          ? "CATALOG_INELIGIBLE"
                          : "PE_INELIGIBLE"
                        : "NO_ELIGIBLE_CATALOG";
    }
    function k(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_consent_render_skipped",
        data: m(e, t),
      });
    }
    function I(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_catalog_selector_impression",
        data: m(e, t),
      });
    }
    function T(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_catalog_select_success",
        data: m(e, t),
      });
    }
    function D(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_pset_select_success",
        data: m(e, t),
      });
    }
    function x(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_pset_select_fail",
        data: m(e, t),
      });
    }
    function $(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_tiles_format_default_on",
        data: m(e, t),
      });
    }
    function P(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_tiles_format_default_off",
        data: m(e, t),
      });
    }
    function N(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_carousel_format_default_on",
        data: m(e, t),
      });
    }
    function M(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_carousel_format_default_off",
        data: m(e, t),
      });
    }
    function w(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_tiles_format_user_on",
        data: m(e, t),
      });
    }
    function A(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_tiles_format_user_off",
        data: m(e, t),
      });
    }
    function F(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_carousel_format_user_on",
        data: m(e, t),
      });
    }
    function O(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_carousel_format_user_off",
        data: m(e, t),
      });
    }
    function B(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_publish_success",
        data: m(e, t),
      });
    }
    function W(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_publish_fail",
        data: m(e, t),
      });
    }
    function q(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_publish_consent_snapshot",
        data: m(e, t),
      });
    }
    function U(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_prereq_pass",
        data: m(e, t),
      });
    }
    function V(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_prereq_fail",
        data: m(e, t),
      });
    }
    function H(e, t) {
      r("AdsInterfacesLogger").log({
        eventName: "pe_auto_toggled_for_existing_post",
        data: m(e, {
          is_partnership_ad: t.isPartnershipAd,
          is_sticky_opt_out: t.isStickyOptOut,
          enroll_status: t.enrollStatus,
          action_type: t.actionType,
        }),
      });
    }
    ((l.resetEligibilityState = c),
      (l.getPEGKBlocklistFields = d),
      (l.logL3EligibilityPass = p),
      (l.logL3EligibilityFail = _),
      (l.logL3CatalogDefaultedSuccess = f),
      (l.logL3CatalogDefaultedSkip = g),
      (l.logL1EligibilityPass = h),
      (l.logL1EligibilityFail = y),
      (l.logL1DataConsentDefaultOn = C),
      (l.logL1DataConsentDefaultOff = b),
      (l.logL1DataConsentUserOn = v),
      (l.logL1DataConsentUserOff = S),
      (l.logL1DataConsentState = R),
      (l.logL1FormatConsentState = L),
      (l.computeSkipReason = E),
      (l.logConsentRenderSkipped = k),
      (l.logL1CatalogSelectorImpression = I),
      (l.logL1CatalogSelectSuccess = T),
      (l.logL1PsetSelectSuccess = D),
      (l.logL1PsetSelectFail = x),
      (l.logL1TilesFormatDefaultOn = $),
      (l.logL1TilesFormatDefaultOff = P),
      (l.logL1CarouselFormatDefaultOn = N),
      (l.logL1CarouselFormatDefaultOff = M),
      (l.logL1TilesFormatUserOn = w),
      (l.logL1TilesFormatUserOff = A),
      (l.logL1CarouselFormatUserOn = F),
      (l.logL1CarouselFormatUserOff = O),
      (l.logL1PublishSuccess = B),
      (l.logL1PublishFail = W),
      (l.logL1PublishConsentSnapshot = q),
      (l.logPrereqPass = U),
      (l.logPrereqFail = V),
      (l.logPEAutoToggledForExistingPost = H));
  },
  98,
);
