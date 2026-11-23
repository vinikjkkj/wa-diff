__d(
  "SEFunnelLogger",
  [
    "AdsFlexibleFormatAdexUtils",
    "AdsInterfacesLogger",
    "AdsManagerAppConfig",
    "AdsSiteLinksSharedCooldownGK",
    "CurrentUser",
    "FBLogger",
    "PEAppContext",
    "getByPath",
    "getErrorSafe",
    "gkx",
    "guid",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "ai_relevancy_session_id",
        "ai_relevancy_session_input_version",
        "ai_relevancy_strategy_id",
        "ai_relevancy_strategy_null_reason",
        "ai_relevancy_strategy_type",
        "decision_id",
      ],
      s = ["async_request_set_id", "fragment_id"],
      u = new Map(),
      c = new Map(),
      d = new Set();
    function m(e, t, n) {
      var r, o;
      if (e == null) return { shouldLog: !0 };
      var a = u.get(e);
      if (a != null && a.result === t && a.reason === n)
        return { shouldLog: !1 };
      var i = ((r = c.get(e)) != null ? r : 0) + (a != null ? 1 : 0);
      return (
        c.set(e, i),
        u.set(e, { result: t, reason: n }),
        {
          shouldLog: !0,
          previousResult:
            (o = a == null ? void 0 : a.result) != null ? o : "unknown",
          previousReason: a == null ? void 0 : a.reason,
          transitionCount: i,
        }
      );
    }
    function p() {
      (u.clear(), c.clear(), d.clear());
    }
    function _(e, t) {
      var n = JSON.stringify([e.eventName, t]);
      d.has(n) ||
        (d.add(n),
        r("AdsInterfacesLogger").logOnce(
          e,
          r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
          { eventName: e.eventName, data: { se_dedupe_key: n } },
        ));
    }
    function f(e) {
      r("AdsInterfacesLogger").logOnce(
        e,
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
        babelHelpers.extends({}, e, { data: babelHelpers.extends({}, e.data) }),
      );
    }
    function g(t, n, o) {
      var a = o != null ? o : {},
        i = a.ai_relevancy_session_id,
        l = a.ai_relevancy_session_input_version,
        s = a.ai_relevancy_strategy_id,
        u = a.ai_relevancy_strategy_null_reason,
        c = a.ai_relevancy_strategy_type,
        d = a.decision_id,
        m = babelHelpers.objectWithoutPropertiesLoose(a, e);
      r("AdsInterfacesLogger").logOnce(
        t,
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
        babelHelpers.extends({}, t, { data: y(n, m) }),
      );
    }
    function h(e) {
      return typeof e == "string"
        ? e
        : Array.isArray(e) && typeof e[0] == "string"
          ? e[0]
          : null;
    }
    function y(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m = o("PEAppContext").getEventDataForLogging(),
        p = (n = m.query_data) != null ? n : {};
      return (
        (d = {}),
        (d.object_level = e.object_level),
        (d.campaign_group_id =
          (a = e.campaign_group_id) != null ? a : h(p.selected_campaign_ids)),
        (d.campaign_id =
          (i = e.campaign_id) != null ? i : h(p.selected_adset_ids)),
        (d.adgroup_id = (l = e.adgroup_id) != null ? l : m.adgroup_id),
        (d.business_id = (s = e.business_id) != null ? s : m.business_id),
        (d.object_creation_source = e.raw_object_creation_source),
        (d.session_id =
          (u = m.session_id) != null ? u : o("AdsManagerAppConfig").sessionID),
        (d.ad_account_id = (c = e.ad_account_id) != null ? c : m.ad_account_id),
        (d.user_account_id = r("CurrentUser").getID()),
        (d.subsequent_data = JSON.stringify(
          babelHelpers.extends({}, t, {
            normalized_object_creation_source: e.object_creation_source,
          }),
        )),
        d
      );
    }
    function C(e, t) {
      var n, r, o, a, i, l;
      return babelHelpers.extends(
        {},
        y(e, t),
        ((l = {}),
        (l.ad_account_id = (n = e.ad_account_id) != null ? n : null),
        (l.adgroup_id = (r = e.adgroup_id) != null ? r : null),
        (l.business_id = (o = e.business_id) != null ? o : null),
        (l.campaign_group_id = (a = e.campaign_group_id) != null ? a : null),
        (l.campaign_id = (i = e.campaign_id) != null ? i : null),
        l),
      );
    }
    function b() {
      return {
        is_sa_m1_blocklisted: !o(
          "AdsFlexibleFormatAdexUtils",
        ).passSACarouselFFQE(),
        is_reactive_control_default_off: r("gkx")("3384") === !0,
        is_se_disable_default_on: o(
          "AdsSiteLinksSharedCooldownGK",
        ).isSEDisableDefaultOn(),
        is_se_sourcing_blocklisted: o(
          "AdsSiteLinksSharedCooldownGK",
        ).isSESourcingBlocklisted(),
      };
    }
    function v() {
      var e = o("AdsSiteLinksSharedCooldownGK").isSEAlphaPauseEnabled(!0);
      return {
        cooldown_window_days: e
          ? o("AdsSiteLinksSharedCooldownGK").getSEAlphaPauseDays()
          : o(
              "AdsSiteLinksSharedCooldownGK",
            ).getSiteLinksDataConsentPauseDays(),
        is_se_shared_cooldown_enabled: e,
      };
    }
    function S(e, t) {
      var n,
        r,
        o,
        a =
          e == null ||
          (n = e.creative) == null ||
          (n = n.creative_sourcing_spec) == null
            ? void 0
            : n.ad_extensions_relevancy_spec,
        i = a == null ? void 0 : a.se_ai_relevancy_ent_id;
      if (i == null || String(i) === "")
        return {
          ai_relevancy_session_id: null,
          ai_relevancy_session_input_version: null,
          ai_relevancy_strategy_id: null,
          ai_relevancy_strategy_null_reason: "no_session",
          ai_relevancy_strategy_type: null,
        };
      var l =
          a == null ||
          (r = a.extension_specs) == null ||
          (r = r.find(function (e) {
            return (
              (e == null ? void 0 : e.extension_type) === "site_extensions"
            );
          })) == null
            ? void 0
            : r.selected_strategy_id,
        s = l == null ? null : String(l),
        u =
          s != null && (t == null ? void 0 : t.sessionID) === String(i)
            ? t == null || (o = t.strategyGroups) == null
              ? void 0
              : o.find(function (e) {
                  return e.strategyID === s;
                })
            : null;
      return {
        ai_relevancy_session_id: String(i),
        ai_relevancy_session_input_version:
          u != null ? (t == null ? void 0 : t.inputVersion) : null,
        ai_relevancy_strategy_id: s,
        ai_relevancy_strategy_null_reason: s == null ? "no_open_session" : null,
        ai_relevancy_strategy_type:
          (u == null ? void 0 : u.strategyType) == null ? null : u.strategyType,
      };
    }
    function R(e) {
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
    function L(e) {
      var t = e instanceof r("immutable").List ? e.toJS() : e;
      return Array.isArray(t) ? t : [];
    }
    function E(e) {
      var t = L(
        r("getByPath")(e, ["creative", "format_transformation_spec"], null),
      ).filter(function (e) {
        return r("getByPath")(e, ["format"], null) === "sa_collection";
      });
      return t.length === 0
        ? "no_entry"
        : t.some(function (e) {
              return L(r("getByPath")(e, ["data_source"], null)).includes(
                "site_links",
              );
            })
          ? "site_links"
          : "other";
    }
    function k(e) {
      var t,
        n = (t = r("getByPath"))(
          e,
          ["creative", "creative_sourcing_spec", "website_media_spec"],
          null,
        ),
        o = t(
          e,
          [
            "creative",
            "degrees_of_freedom_spec",
            "creative_features_spec",
            "site_extensions",
          ],
          null,
        );
      return {
        fts_sa_collection_state: E(e),
        se_cfs_action_type: t(o, ["action_metadata", "type"]),
        se_cfs_enroll_status: t(o, ["enroll_status"]),
        website_highlights_action_type: t(n, ["action_metadata", "type"]),
        website_highlights_enroll_status: t(n, ["enroll_status"]),
        website_highlights_image_count: L(t(n, ["media"], null)).filter(
          function (e) {
            return r("getByPath")(e, ["image_url"], null) != null;
          },
        ).length,
      };
    }
    function I(e, t) {
      var n = m(e.adgroup_id, "pass", null);
      n.shouldLog &&
        f({
          eventName: "se_funnel_l1_eligibility_pass",
          data: y(
            e,
            babelHelpers.extends({}, t, {
              previous_result: n.previousResult,
              previous_reason: n.previousReason,
              transition_count: n.transitionCount,
            }),
          ),
        });
    }
    function T(e, t) {
      var n,
        r = m(
          e.adgroup_id,
          "fail",
          (n = t == null ? void 0 : t.ineligibility_reason) != null ? n : null,
        );
      r.shouldLog &&
        f({
          eventName: "se_funnel_l1_eligibility_fail",
          data: y(
            e,
            babelHelpers.extends({}, t, {
              previous_result: r.previousResult,
              previous_reason: r.previousReason,
              transition_count: r.transitionCount,
            }),
          ),
        });
    }
    function D(e, t) {
      f({
        eventName: "se_funnel_l1_site_extension_selector_impression",
        data: y(e, t),
      });
    }
    function x(e, t, n) {
      var r = function (r) {
        var e;
        return babelHelpers.extends(
          {},
          y(t, r),
          ((e = {}), (e.caller = n == null ? void 0 : n.caller), e),
        );
      };
      _(
        { eventName: e, data: r(n) },
        r(babelHelpers.extends({}, n, { duration_ms: null })),
      );
    }
    function $(e, t) {
      x("se_funnel_l1_site_links_api_success", e, t);
    }
    function P(e, t) {
      x("se_funnel_l1_site_links_api_fail", e, t);
    }
    function N(e, t) {
      var n = y(e, t);
      _({ eventName: "se_funnel_l1_site_links_notice_impression", data: n }, [
        n.session_id,
        n.adgroup_id,
        t.notice_type,
      ]);
    }
    function M(e, t) {
      var n;
      f({
        eventName: "se_funnel_l1_modal_site_links_consumed",
        data: babelHelpers.extends(
          {},
          y(e, t),
          ((n = {}), (n.caller = t == null ? void 0 : t.caller), n),
        ),
      });
    }
    function w(e, t) {
      var n,
        r = babelHelpers.extends(
          {},
          y(e, t),
          ((n = {}), (n.caller = t.caller), n),
        );
      _({ eventName: "se_funnel_l1_modal_close_without_apply", data: r }, [
        r.session_id,
        r.adgroup_id,
        t.close_reason,
      ]);
    }
    function A(e, t, n) {
      try {
        e.forEach(function (e) {
          e != null &&
            w({ ad_account_id: n, adgroup_id: e, object_level: "ad_level" }, t);
        });
      } catch (e) {
        r("FBLogger")("ads_extensions")
          .catching(r("getErrorSafe")(e))
          .warn("Failed to log Creative setup close without Apply");
      }
    }
    function F(e, t) {
      g(
        { eventName: "se_funnel_l1_site_link_default_on", data: y(e, t) },
        e,
        t,
      );
    }
    function O(e, t) {
      g(
        { eventName: "se_funnel_l1_site_link_default_off", data: y(e, t) },
        e,
        t,
      );
    }
    function B(e) {
      return {
        blocking_reasons: e.blockingReasons,
        blocking_reasons_exhaustive: e.blockingReasonsExhaustive,
        decision_outcome: e.outcome,
        decision_version: "producer_v1",
        input_resolution: e.inputResolution,
        skip_reason: e.reason,
      };
    }
    function W(e, t, n) {
      var r = babelHelpers.extends({}, n, B(t));
      t.outcome === "allow" ? F(e, r) : O(e, r);
    }
    function q(e, t) {
      f({ eventName: "se_funnel_l1_data_consent_default_on", data: y(e, t) });
    }
    function U(e, t) {
      f({ eventName: "se_funnel_l1_data_consent_default_off", data: y(e, t) });
    }
    function V(e, t) {
      g(
        { eventName: "se_funnel_l1_data_consent_user_on", data: y(e, t) },
        e,
        t,
      );
    }
    function H(e, t) {
      g(
        { eventName: "se_funnel_l1_data_consent_user_off", data: y(e, t) },
        e,
        t,
      );
    }
    function G(e, t) {
      r("AdsInterfacesLogger").log({
        eventName: "se_funnel_l1_dynamic_consent_user_on",
        data: y(e, t),
      });
    }
    function z(e, t) {
      r("AdsInterfacesLogger").log({
        eventName: "se_funnel_l1_dynamic_consent_user_off",
        data: y(e, t),
      });
    }
    function j(e, t) {
      f({ eventName: "se_funnel_l1_data_consent_state", data: y(e, t) });
    }
    function K(e, t) {
      f({ eventName: "se_funnel_l1_format_consent_state", data: y(e, t) });
    }
    function Q(e, t) {
      r("AdsInterfacesLogger").log({
        eventName: "se_funnel_l1_format_default_decision",
        data: C(
          e,
          babelHelpers.extends({}, t, {
            decision_adgroup_id:
              e.adgroup_id == null ? null : String(e.adgroup_id),
          }),
        ),
      });
    }
    function X(e, t) {
      r("AdsInterfacesLogger").log({
        eventName: "se_funnel_l1_format_user_intent",
        data: C(e, t),
      });
    }
    function Y(e, t) {
      f({ eventName: "se_funnel_l1_site_link_add", data: y(e, t) });
    }
    function J(e, t) {
      f({ eventName: "se_funnel_l1_site_link_edit", data: y(e, t) });
    }
    function Z(e, t) {
      f({ eventName: "se_funnel_l1_site_link_remove", data: y(e, t) });
    }
    function ee(e, t) {
      r("AdsInterfacesLogger").log({
        eventName: "se_funnel_l1_site_link_save_fail",
        data: y(e, t),
      });
    }
    function te(e, t) {
      f({
        eventName: "se_funnel_l1_carousel_format_default_on",
        data: y(e, t),
      });
    }
    function ne(e, t) {
      f({
        eventName: "se_funnel_l1_carousel_format_default_off",
        data: y(e, t),
      });
    }
    function re(e, t) {
      f({ eventName: "se_funnel_l1_tiles_format_default_on", data: y(e, t) });
    }
    function oe(e, t) {
      f({ eventName: "se_funnel_l1_tiles_format_default_off", data: y(e, t) });
    }
    function ae(e, t) {
      f({ eventName: "se_funnel_l1_carousel_format_user_on", data: y(e, t) });
    }
    function ie(e, t) {
      f({ eventName: "se_funnel_l1_carousel_format_user_off", data: y(e, t) });
    }
    function le(e, t) {
      f({ eventName: "se_funnel_l1_tiles_format_user_on", data: y(e, t) });
    }
    function se(e, t) {
      f({ eventName: "se_funnel_l1_tiles_format_user_off", data: y(e, t) });
    }
    function ue(e, t, n, o, a, i) {
      var l = r("getByPath")(
          t,
          [
            "creative",
            "creative_sourcing_spec",
            "site_links_data_consented",
            "enroll_status",
          ],
          null,
        ),
        s = r("getByPath")(
          t,
          [
            "creative",
            "degrees_of_freedom_spec",
            "creative_features_spec",
            "site_extensions",
            "enroll_status",
          ],
          null,
        ),
        u = function (u) {
          return (
            u === void 0 && (u = {}),
            y(
              {
                adgroup_id: e,
                object_level: "ad_level",
                raw_object_creation_source: o,
              },
              babelHelpers.extends(
                {
                  data_consent_status: typeof l == "string" ? l : null,
                  format_consent_status: typeof s == "string" ? s : null,
                  is_divergent:
                    typeof l == "string" && typeof s == "string" && l !== s,
                  format_consent_action_type: r("getByPath")(
                    t,
                    [
                      "creative",
                      "degrees_of_freedom_spec",
                      "creative_features_spec",
                      "site_extensions",
                      "action_metadata",
                      "type",
                    ],
                    null,
                  ),
                  site_links_count: r("getByPath")(
                    t,
                    [
                      "creative",
                      "creative_sourcing_spec",
                      "site_links_spec",
                      "size",
                    ],
                    null,
                  ),
                  wh_enroll_status: r("getByPath")(
                    t,
                    [
                      "creative",
                      "creative_sourcing_spec",
                      "website_media_spec",
                      "enroll_status",
                    ],
                    null,
                  ),
                  wh_media_count: r("getByPath")(
                    t,
                    [
                      "creative",
                      "creative_sourcing_spec",
                      "website_media_spec",
                      "media",
                      "size",
                    ],
                    null,
                  ),
                  write_origin: n,
                },
                a,
                u,
              ),
            )
          );
        },
        c = { eventName: "se_consent_divergence_check", data: u() };
      if (i == null) {
        f(c);
        return;
      }
      r("AdsInterfacesLogger").logOnce(
        babelHelpers.extends({}, c, { data: u(i) }),
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
        c,
      );
    }
    function ce(e, t, n, o) {
      try {
        var a = n();
        a != null && ue(e, t, "fdo_render", o, a);
      } catch (e) {
        r("FBLogger")("ads_extensions")
          .catching(r("getErrorSafe")(e))
          .warn(
            "Failed to log FDO Collection website highlights toggle eligibility",
          );
      }
    }
    function de(e, t) {
      f({ eventName: "se_funnel_l1_publish_success", data: y(e, t) });
    }
    function me(e, t) {
      f({ eventName: "se_funnel_l1_publish_fail", data: y(e, t) });
    }
    function pe(e, t) {
      f({ eventName: "se_funnel_l1_consent_render_skipped", data: y(e, t) });
    }
    function _e(e, t, n) {
      t.outcome !== "allow" && pe(e, babelHelpers.extends({}, n, B(t)));
    }
    function fe(e, t) {
      var n = t.async_request_set_id,
        o = t.fragment_id,
        a = babelHelpers.objectWithoutPropertiesLoose(t, s);
      r("AdsInterfacesLogger").logOnce(
        { eventName: "se_funnel_l1_publish_consent_snapshot", data: y(e, t) },
        r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
        { eventName: "se_funnel_l1_publish_consent_snapshot", data: y(e, a) },
      );
    }
    function ge(e, t) {
      _(
        {
          eventName: "se_funnel_l1_publish_created_from_status",
          data: C(e, t),
        },
        [t.async_request_set_id, t.fragment_id].map(function (e) {
          return e == null ? null : String(e);
        }),
      );
    }
    function he(e, t) {
      f({ eventName: "se_funnel_prereq_pass", data: y(e, t) });
    }
    function ye(e, t) {
      f({ eventName: "se_funnel_prereq_fail", data: y(e, t) });
    }
    function Ce(e, t) {
      f({ eventName: "se_funnel_blocklist_pass", data: y(e, t) });
    }
    function be(e, t) {
      f({ eventName: "se_funnel_blocklist_fail", data: y(e, t) });
    }
    var ve = new Map(),
      Se = new WeakMap();
    function Re(e) {
      var t;
      return e == null ? null : (t = Se.get(e)) != null ? t : null;
    }
    function Le(e, t, n, o) {
      var a,
        i = { eventName: "se_funnel_l1_plugin_initial_state", data: y(e, t) };
      if (n == null) {
        f(i);
        return;
      }
      var l = n.decision_adgroup_id,
        s =
          i.data.adgroup_id == null && l != null
            ? babelHelpers.extends({}, i, {
                data: y(
                  e,
                  babelHelpers.extends({}, t, { decision_adgroup_id: l }),
                ),
              })
            : i,
        u = JSON.stringify(s),
        c = (a = ve.get(u)) != null ? a : r("guid")();
      (ve.set(u, c),
        o != null && Se.set(o, c),
        r("AdsInterfacesLogger").logOnce(
          babelHelpers.extends({}, i, {
            data: y(e, babelHelpers.extends({}, t, n, { decision_id: c })),
          }),
          r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
          s,
        ));
    }
    function Ee(e, t) {
      f({ eventName: "se_funnel_l1_source_url_sync", data: y(e, t) });
    }
    function ke(e, t) {
      f({ eventName: "se_funnel_l1_defaulting_trigger", data: y(e, t) });
    }
    function Ie(e) {
      var t = e.accountID,
        n = e.adgroupID,
        o = e.campaignGroupID,
        a = e.campaignID,
        i = e.cooldownAction,
        l = e.cooldownEntrypoint,
        s = e.formatKey;
      r("AdsInterfacesLogger").log({
        eventName: "se_site_links_cooldown_state_changed",
        data: y(
          {
            ad_account_id: t,
            adgroup_id: n,
            campaign_group_id: o,
            campaign_id: a,
            object_level: "ad_level",
          },
          babelHelpers.extends(
            { cooldown_action: i, cooldown_entrypoint: l, format_key: s },
            v(),
          ),
        ),
      });
    }
    ((l.resetEligibilityState = p),
      (l.getSEGKBlocklistFields = b),
      (l.getSESharedCooldownLogFields = v),
      (l.getSEAdRelevancyLogFields = S),
      (l.getWHFOSLStatusFromAdgroup = R),
      (l.getWHFormatStateFields = k),
      (l.logL1EligibilityPass = I),
      (l.logL1EligibilityFail = T),
      (l.logL1SiteExtensionSelectorImpression = D),
      (l.logL1SiteLinksAPISuccess = $),
      (l.logL1SiteLinksAPIFail = P),
      (l.logL1SiteLinksNoticeImpression = N),
      (l.logL1ModalSiteLinksConsumed = M),
      (l.logL1ModalCloseWithoutApply = w),
      (l.logL1ModalCloseWithoutApplyForAds = A),
      (l.logL1SiteLinkDefaultOn = F),
      (l.logL1SiteLinkDefaultOff = O),
      (l.getSEDecisionLogFields = B),
      (l.logL1SiteLinkDefaultDecision = W),
      (l.logL1DataConsentDefaultOn = q),
      (l.logL1DataConsentDefaultOff = U),
      (l.logL1DataConsentUserOn = V),
      (l.logL1DataConsentUserOff = H),
      (l.logL1DynamicConsentUserOn = G),
      (l.logL1DynamicConsentUserOff = z),
      (l.logL1DataConsentState = j),
      (l.logL1FormatConsentState = K),
      (l.logL1FormatDefaultDecision = Q),
      (l.logL1FormatUserIntent = X),
      (l.logL1SiteLinkAdd = Y),
      (l.logL1SiteLinkEdit = J),
      (l.logL1SiteLinkRemove = Z),
      (l.logL1SiteLinkSaveFail = ee),
      (l.logL1CarouselFormatDefaultOn = te),
      (l.logL1CarouselFormatDefaultOff = ne),
      (l.logL1TilesFormatDefaultOn = re),
      (l.logL1TilesFormatDefaultOff = oe),
      (l.logL1CarouselFormatUserOn = ae),
      (l.logL1CarouselFormatUserOff = ie),
      (l.logL1TilesFormatUserOn = le),
      (l.logL1TilesFormatUserOff = se),
      (l.logConsentDivergenceCheck = ue),
      (l.logFDOCollectionWHToggleEligibility = ce),
      (l.logL1PublishSuccess = de),
      (l.logL1PublishFail = me),
      (l.logConsentRenderSkipped = pe),
      (l.logConsentRenderDecision = _e),
      (l.logL1PublishConsentSnapshot = fe),
      (l.logL1PublishCreatedFromStatus = ge),
      (l.logPrereqPass = he),
      (l.logPrereqFail = ye),
      (l.logBlocklistPass = Ce),
      (l.logBlocklistFail = be),
      (l.getSiteLinksDefaultDecisionID = Re),
      (l.logL1PluginInitialState = Le),
      (l.logL1SourceUrlSync = Ee),
      (l.logL1DefaultingTrigger = ke),
      (l.logSESiteLinksCooldownStateChanged = Ie));
  },
  98,
);
