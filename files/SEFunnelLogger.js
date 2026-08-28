__d(
  "SEFunnelLogger",
  [
    "AdsFlexibleFormatAdexUtils",
    "AdsInterfacesLogger",
    "AdsManagerAppConfig",
    "CurrentUser",
    "PEAppContext",
    "getByPath",
    "gkx",
    "justknobx",
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
    function d(e) {
      return typeof e == "string"
        ? e
        : Array.isArray(e) && typeof e[0] == "string"
          ? e[0]
          : null;
    }
    function m(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c,
        m,
        p = o("PEAppContext").getEventDataForLogging(),
        _ = (n = p.query_data) != null ? n : {};
      return (
        (m = {}),
        (m.object_level = e.object_level),
        (m.campaign_group_id =
          (a = e.campaign_group_id) != null ? a : d(_.selected_campaign_ids)),
        (m.campaign_id =
          (i = e.campaign_id) != null ? i : d(_.selected_adset_ids)),
        (m.adgroup_id = (l = e.adgroup_id) != null ? l : p.adgroup_id),
        (m.business_id = (s = e.business_id) != null ? s : p.business_id),
        (m.object_creation_source = e.object_creation_source),
        (m.session_id =
          (u = p.session_id) != null ? u : o("AdsManagerAppConfig").sessionID),
        (m.ad_account_id = (c = e.ad_account_id) != null ? c : p.ad_account_id),
        (m.user_account_id = r("CurrentUser").getID()),
        (m.subsequent_data = JSON.stringify(babelHelpers.extends({}, t))),
        m
      );
    }
    function p() {
      return {
        is_sa_m1_blocklisted: !o(
          "AdsFlexibleFormatAdexUtils",
        ).passSACarouselFFQE(),
        is_reactive_control_default_off: r("gkx")("3384") === !0,
        is_se_disable_default_on: r("gkx")("356") === !0,
        is_se_sourcing_blocklisted: r("gkx")("16077") === !0,
      };
    }
    function _(e) {
      return {
        website_highlights_enroll_status: r("getByPath")(
          e,
          [
            "creative",
            "creative_sourcing_spec",
            "website_media_spec",
            "enroll_status",
          ],
          null,
        ),
        featured_offerings_enroll_status: r("getByPath")(
          e,
          [
            "creative",
            "creative_sourcing_spec",
            "featured_offering_spec",
            "enroll_status",
          ],
          null,
        ),
        site_links_enroll_status: r("getByPath")(
          e,
          [
            "creative",
            "creative_sourcing_spec",
            "site_links_data_consented",
            "enroll_status",
          ],
          null,
        ),
      };
    }
    function f(e, t) {
      var n = u(e.adgroup_id, "pass", null);
      n.shouldLog &&
        r("AdsInterfacesLogger").logOnce({
          eventName: "se_funnel_l1_eligibility_pass",
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
    function g(e, t) {
      var n,
        o = u(
          e.adgroup_id,
          "fail",
          (n = t == null ? void 0 : t.ineligibility_reason) != null ? n : null,
        );
      o.shouldLog &&
        r("AdsInterfacesLogger").logOnce({
          eventName: "se_funnel_l1_eligibility_fail",
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
    function h(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_site_extension_selector_impression",
        data: m(e, t),
      });
    }
    function y(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_site_links_api_success",
        data: babelHelpers.extends(
          {},
          m(e, t),
          ((n = {}), (n.caller = t == null ? void 0 : t.caller), n),
        ),
      });
    }
    function C(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_site_links_api_fail",
        data: babelHelpers.extends(
          {},
          m(e, t),
          ((n = {}), (n.caller = t == null ? void 0 : t.caller), n),
        ),
      });
    }
    function b(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_modal_site_links_consumed",
        data: babelHelpers.extends(
          {},
          m(e, t),
          ((n = {}), (n.caller = t == null ? void 0 : t.caller), n),
        ),
      });
    }
    function v(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_site_link_default_on",
        data: m(e, t),
      });
    }
    function S(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_site_link_default_off",
        data: m(e, t),
      });
    }
    function R(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_data_consent_default_on",
        data: m(e, t),
      });
    }
    function L(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_data_consent_default_off",
        data: m(e, t),
      });
    }
    function E(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_data_consent_user_on",
        data: m(e, t),
      });
    }
    function k(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_data_consent_user_off",
        data: m(e, t),
      });
    }
    function I(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_data_consent_state",
        data: m(e, t),
      });
    }
    function T(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_format_consent_state",
        data: m(e, t),
      });
    }
    function D(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_site_link_add",
        data: m(e, t),
      });
    }
    function x(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_site_link_edit",
        data: m(e, t),
      });
    }
    function $(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_site_link_remove",
        data: m(e, t),
      });
    }
    function P(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_carousel_format_default_on",
        data: m(e, t),
      });
    }
    function N(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_carousel_format_default_off",
        data: m(e, t),
      });
    }
    function M(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_tiles_format_default_on",
        data: m(e, t),
      });
    }
    function w(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_tiles_format_default_off",
        data: m(e, t),
      });
    }
    function A(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_carousel_format_user_on",
        data: m(e, t),
      });
    }
    function F(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_carousel_format_user_off",
        data: m(e, t),
      });
    }
    function O(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_tiles_format_user_on",
        data: m(e, t),
      });
    }
    function B(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_tiles_format_user_off",
        data: m(e, t),
      });
    }
    function W(e, t, n) {
      if (r("justknobx")._("672")) {
        var o = r("getByPath")(
            t,
            [
              "creative",
              "creative_sourcing_spec",
              "site_links_data_consented",
              "enroll_status",
            ],
            null,
          ),
          a = r("getByPath")(
            t,
            [
              "creative",
              "degrees_of_freedom_spec",
              "creative_features_spec",
              "site_extensions",
              "enroll_status",
            ],
            null,
          );
        r("AdsInterfacesLogger").logOnce({
          eventName: "se_consent_divergence_check",
          data: m(
            { adgroup_id: e, object_level: "ad_level" },
            {
              data_consent_status: typeof o == "string" ? o : null,
              format_consent_status: typeof a == "string" ? a : null,
              is_divergent:
                typeof o == "string" && typeof a == "string" && o !== a,
              write_origin: n,
            },
          ),
        });
      }
    }
    function q(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_publish_success",
        data: m(e, t),
      });
    }
    function U(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_publish_fail",
        data: m(e, t),
      });
    }
    function V(e, t, n, r, o) {
      return (
        o === void 0 && (o = !1),
        e.is_se_disable_default_on === !0
          ? "GK_BLOCKED"
          : e.is_sa_m1_blocklisted === !0
            ? "BLOCKLISTED"
            : e.is_se_sourcing_blocklisted === !0
              ? "SOURCING_BLOCKLISTED"
              : t
                ? "COOLDOWN"
                : n
                  ? r
                    ? o
                      ? "PE_DEFAULTING"
                      : "UNKNOWN"
                    : "SE_INELIGIBLE"
                  : "NO_SITE_LINKS"
      );
    }
    function H(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_consent_render_skipped",
        data: m(e, t),
      });
    }
    function G(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_publish_consent_snapshot",
        data: m(e, t),
      });
    }
    function z(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_prereq_pass",
        data: m(e, t),
      });
    }
    function j(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_prereq_fail",
        data: m(e, t),
      });
    }
    function K(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_blocklist_pass",
        data: m(e, t),
      });
    }
    function Q(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_blocklist_fail",
        data: m(e, t),
      });
    }
    function X(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_plugin_initial_state",
        data: m(e, t),
      });
    }
    function Y(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_source_url_sync",
        data: m(e, t),
      });
    }
    function J(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "se_funnel_l1_defaulting_trigger",
        data: m(e, t),
      });
    }
    ((l.resetEligibilityState = c),
      (l.getSEGKBlocklistFields = p),
      (l.getWHFOSLStatusFromAdgroup = _),
      (l.logL1EligibilityPass = f),
      (l.logL1EligibilityFail = g),
      (l.logL1SiteExtensionSelectorImpression = h),
      (l.logL1SiteLinksAPISuccess = y),
      (l.logL1SiteLinksAPIFail = C),
      (l.logL1ModalSiteLinksConsumed = b),
      (l.logL1SiteLinkDefaultOn = v),
      (l.logL1SiteLinkDefaultOff = S),
      (l.logL1DataConsentDefaultOn = R),
      (l.logL1DataConsentDefaultOff = L),
      (l.logL1DataConsentUserOn = E),
      (l.logL1DataConsentUserOff = k),
      (l.logL1DataConsentState = I),
      (l.logL1FormatConsentState = T),
      (l.logL1SiteLinkAdd = D),
      (l.logL1SiteLinkEdit = x),
      (l.logL1SiteLinkRemove = $),
      (l.logL1CarouselFormatDefaultOn = P),
      (l.logL1CarouselFormatDefaultOff = N),
      (l.logL1TilesFormatDefaultOn = M),
      (l.logL1TilesFormatDefaultOff = w),
      (l.logL1CarouselFormatUserOn = A),
      (l.logL1CarouselFormatUserOff = F),
      (l.logL1TilesFormatUserOn = O),
      (l.logL1TilesFormatUserOff = B),
      (l.logConsentDivergenceCheck = W),
      (l.logL1PublishSuccess = q),
      (l.logL1PublishFail = U),
      (l.computeSESkipReason = V),
      (l.logConsentRenderSkipped = H),
      (l.logL1PublishConsentSnapshot = G),
      (l.logPrereqPass = z),
      (l.logPrereqFail = j),
      (l.logBlocklistPass = K),
      (l.logBlocklistFail = Q),
      (l.logL1PluginInitialState = X),
      (l.logL1SourceUrlSync = Y),
      (l.logL1DefaultingTrigger = J));
  },
  98,
);
