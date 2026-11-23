__d(
  "PEFunnelLogger",
  [
    "AdsInterfacesLogger",
    "AdsManagerAppConfig",
    "CurrentUser",
    "FBLogger",
    "JSResource",
    "PEAppContext",
    "PEDefaultOnExclusions",
    "getErrorSafe",
    "gkx",
    "ifRequired",
    "justknobx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = new Map(),
      u = new Map(),
      c = new Set(),
      d = {
        defaultFired: !1,
        defaultOnFired: !1,
        explicitOptOut: !1,
        persistedOptOutSeen: !1,
        productSetFailed: !1,
        skipReason: null,
        surfaceMounted: !1,
        userActionTaken: !1,
      };
    function m(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u,
        c = o("PEAppContext").getEventDataForLogging(),
        d =
          (t =
            (n = c.session_id) != null
              ? n
              : o("AdsManagerAppConfig").sessionID) != null
            ? t
            : "no_session",
        m =
          (r = (a = e.draft_id) != null ? a : c.draft_id) != null
            ? r
            : "no_draft",
        p =
          (i =
            (l =
              (s = (u = e.adgroup_id) != null ? u : c.adgroup_id) != null
                ? s
                : e.campaign_id) != null
              ? l
              : e.campaign_group_id) != null
            ? i
            : "no_object";
      return String(d) + ":" + String(m) + ":" + String(p);
    }
    function p(e) {
      var t;
      return (t = u.get(m(e))) != null ? t : d;
    }
    function _(e, t) {
      var n = m(e);
      u.set(n, babelHelpers.extends({}, d, u.get(n), t));
    }
    function f(e) {
      return e.isPublishSuccess
        ? e.isStaleOverwrite
          ? "STALE_OVERWRITE"
          : e.productSetState === "INVALID" || e.productSetState === "MISSING"
            ? "INVALID_PRODUCT_SET"
            : e.dcEnrollStatus === "OPT_IN"
              ? "PUBLISHED"
              : e.explicitOptOut ||
                  (e.dcActionType === "MANUAL" &&
                    e.dcEnrollStatus === "OPT_OUT")
                ? "EXPLICIT_OPT_OUT"
                : e.isCooldown ||
                    (e.dcActionType === "STICKY" &&
                      e.dcEnrollStatus === "OPT_OUT")
                  ? "COOLDOWN"
                  : e.isPolicyBlocked
                    ? "POLICY"
                    : e.a2cMatchState === "NO_MATCH"
                      ? "NO_MATCH"
                      : e.a2cMatchState !== "MATCHED" ||
                          e.productSetState !== "VALID"
                        ? "UNKNOWN"
                        : e.surfaceMounted
                          ? e.defaultFired
                            ? "UNKNOWN"
                            : "DEFAULT_NOT_FIRED"
                          : "UI_NOT_MOUNTED"
        : "PUBLISH_FAILURE";
    }
    function g(t, n, r) {
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
    function h() {
      (e.clear(), s.clear(), u.clear(), c.clear(), ue());
    }
    function y() {
      return {
        is_adex_revamp_blocked:
          r("gkx")("1972") === !0 || r("gkx")("2898") === !0,
        is_default_on_blocklisted: o(
          "PEDefaultOnExclusions",
        ).isDefaultOnBlocklisted(),
        is_saef_sensitive_excluded: o(
          "PEDefaultOnExclusions",
        ).isExcludedBySaefSensitiveVerticals(),
        is_targeting_gk_blocked: !r("gkx")("21554"),
      };
    }
    function C(e, t, n, a) {
      var i, l, s, u, c, d, m, p, _, f;
      (n === void 0 && (n = !1),
        a === void 0 && (a = o("PEAppContext").getEventDataForLogging()));
      var g = (i = e.adgroup_id) != null ? i : a.adgroup_id,
        h = e.campaign_group_id,
        y = e.campaign_id,
        C = (l = e.draft_id) != null ? l : a.draft_id,
        b =
          (s =
            (u = a.session_id) != null
              ? u
              : o("AdsManagerAppConfig").sessionID) != null
            ? s
            : "no_session",
        v =
          (c = (d = g != null ? g : y) != null ? d : h) != null
            ? c
            : "no_object",
        S =
          String(b) +
          ":" +
          String(C != null ? C : "no_draft") +
          ":" +
          String(v),
        R = babelHelpers.extends({}, t, {
          normalized_object_creation_source: e.object_creation_source,
        });
      return babelHelpers.extends(
        {},
        n ? ((m = {}), (m.actual_event_time = a.actual_event_time), m) : {},
        ((f = {}),
        (f.object_level = e.object_level),
        (f.campaign_group_id = h),
        (f.campaign_id = y),
        (f.adgroup_id = g),
        (f.business_id = (p = e.business_id) != null ? p : a.business_id),
        (f.draft_id = C),
        (f.product_set_id = e.product_set_id),
        (f.object_creation_source = e.raw_object_creation_source),
        (f.session_id = b),
        (f.sub_session_id = S),
        (f.ad_account_id = (_ = e.ad_account_id) != null ? _ : a.ad_account_id),
        (f.user_account_id = r("CurrentUser").getID()),
        (f.subsequent_data = JSON.stringify(R)),
        f),
      );
    }
    function b(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l3_eligibility_pass",
        data: C(e, t),
      });
    }
    function v(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l3_eligibility_fail",
        data: C(e, t),
      });
    }
    function S(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l3_catalog_defaulted_success",
        data: C(e, t),
      });
    }
    function R(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l3_catalog_defaulted_skip",
        data: C(e, t),
      });
    }
    function L(e, t) {
      var n = g(e.adgroup_id, "pass", null);
      n.shouldLog &&
        r("AdsInterfacesLogger").logOnce({
          eventName: "pe_funnel_l1_eligibility_pass",
          data: C(
            e,
            babelHelpers.extends({}, t, {
              previous_result: n.previousResult,
              previous_reason: n.previousReason,
              transition_count: n.transitionCount,
            }),
          ),
        });
    }
    function E(e, t) {
      var n,
        o = g(
          e.adgroup_id,
          "fail",
          (n = t == null ? void 0 : t.ineligibility_reason) != null ? n : null,
        );
      o.shouldLog &&
        r("AdsInterfacesLogger").logOnce({
          eventName: "pe_funnel_l1_eligibility_fail",
          data: C(
            e,
            babelHelpers.extends({}, t, {
              previous_result: o.previousResult,
              previous_reason: o.previousReason,
              transition_count: o.transitionCount,
            }),
          ),
        });
    }
    function k(e, t) {
      (_(e, { defaultFired: !0, defaultOnFired: !0 }),
        r("AdsInterfacesLogger").logOnce({
          eventName: "pe_funnel_l1_data_consent_default_on",
          data: C(e, t),
        }));
    }
    function I(e, t) {
      (_(e, { defaultFired: !0 }),
        r("AdsInterfacesLogger").logOnce({
          eventName: "pe_funnel_l1_data_consent_default_off",
          data: C(e, t),
        }));
    }
    function T(e, t) {
      (_(e, { defaultFired: !0, surfaceMounted: !0, userActionTaken: !0 }),
        r("AdsInterfacesLogger").logOnce({
          eventName: "pe_funnel_l1_data_consent_user_on",
          data: C(e, t),
        }));
    }
    function D(e, t) {
      (_(e, {
        defaultFired: !0,
        explicitOptOut: !0,
        surfaceMounted: !0,
        userActionTaken: !0,
      }),
        r("AdsInterfacesLogger").logOnce({
          eventName: "pe_funnel_l1_data_consent_user_off",
          data: C(e, t),
        }));
    }
    function x(e, t) {
      (t.consent_surface === "plugin_init" &&
        t.consent_state === "OFF" &&
        !t.is_initial_default &&
        _(e, { persistedOptOutSeen: !0 }),
        t.consent_surface === "catalog_selector" &&
          _(e, { surfaceMounted: !0 }),
        r("AdsInterfacesLogger").logOnce({
          eventName: "pe_funnel_l1_data_consent_state",
          data: C(e, t),
        }));
    }
    function $(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_format_consent_state",
        data: C(e, t),
      });
    }
    function P(e, t, n, r, o, a) {
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
    function N(e, t) {
      var n;
      (_(e, {
        skipReason: (n = t == null ? void 0 : t.skip_reason) != null ? n : null,
      }),
        r("AdsInterfacesLogger").logOnce({
          eventName: "pe_funnel_l1_consent_render_skipped",
          data: C(e, t),
        }));
    }
    function M(e, t) {
      (_(e, { surfaceMounted: !0 }),
        r("AdsInterfacesLogger").logOnce({
          eventName: "pe_funnel_l1_catalog_selector_impression",
          data: C(e, t),
        }));
    }
    function w(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_catalog_select_success",
        data: C(e, t),
      });
    }
    function A(e, t) {
      (_(e, { productSetFailed: !1 }),
        r("AdsInterfacesLogger").logOnce({
          eventName: "pe_funnel_l1_pset_select_success",
          data: C(e, t),
        }));
    }
    function F(e, t) {
      (_(e, { productSetFailed: !0 }),
        r("AdsInterfacesLogger").logOnce({
          eventName: "pe_funnel_l1_pset_select_fail",
          data: C(e, t),
        }));
    }
    function O(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_tiles_format_default_on",
        data: C(e, t),
      });
    }
    function B(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_tiles_format_default_off",
        data: C(e, t),
      });
    }
    function W(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_carousel_format_default_on",
        data: C(e, t),
      });
    }
    function q(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_carousel_format_default_off",
        data: C(e, t),
      });
    }
    function U(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_tiles_format_user_on",
        data: C(e, t),
      });
    }
    function V(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_tiles_format_user_off",
        data: C(e, t),
      });
    }
    function H(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_carousel_format_user_on",
        data: C(e, t),
      });
    }
    function G(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_carousel_format_user_off",
        data: C(e, t),
      });
    }
    function z(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_publish_success",
        data: C(e, t),
      });
    }
    function j(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_l1_publish_fail",
        data: C(e, t),
      });
    }
    function K(e, t, n) {
      var o,
        a,
        i = m(e),
        l = i + ":" + t.publish_attempt_id;
      if (!c.has(l)) {
        c.add(l);
        var s = p(e),
          u = s.productSetFailed ? "INVALID" : t.product_set_state,
          d =
            t.is_stale_overwrite === !0 ||
            (t.is_new_ad === !1 &&
              s.persistedOptOutSeen &&
              s.defaultOnFired &&
              !s.userActionTaken),
          _ =
            t.is_targeting_gk_blocked === !0 ||
            t.is_default_on_blocklisted === !0 ||
            t.is_saef_sensitive_excluded === !0 ||
            t.is_adex_revamp_blocked === !0 ||
            s.skipReason === "GK_BLOCKED" ||
            s.skipReason === "BLOCKLISTED" ||
            s.skipReason === "SAEF_SENSITIVE" ||
            s.skipReason === "ADEX_BLOCKED",
          g = f({
            a2cMatchState: t.a2c_match_state,
            dcActionType:
              (o = t.pe_data_consent_action_type) != null ? o : null,
            dcEnrollStatus:
              (a = t.pe_data_consent_enroll_status) != null ? a : null,
            defaultFired:
              s.defaultFired || t.pe_data_consent_action_type != null,
            explicitOptOut: s.explicitOptOut,
            isCooldown:
              t.is_in_cooldown_period === !0 || s.skipReason === "COOLDOWN",
            isPolicyBlocked: _,
            isPublishSuccess: t.is_publish_success,
            isStaleOverwrite: d,
            productSetState: u,
            surfaceMounted: s.surfaceMounted,
          });
        (r("AdsInterfacesLogger").log({
          eventName: "pe_funnel_l1_publish_consent_snapshot",
          data: C(
            e,
            babelHelpers.extends({}, t, {
              dc_action_type: t.pe_data_consent_action_type,
              dc_enroll_status: t.pe_data_consent_enroll_status,
              fc_action_type: t.pe_carousel_action_type,
              fc_enroll_status: t.pe_carousel_enroll_status,
              is_stale_overwrite: d,
              product_set_state: u,
              snapshot_schema_version: 1,
              terminal_reason_code: g,
              terminal_stage: "publish",
            }),
            !0,
          ),
        }),
          n != null &&
            ie(function (r) {
              return r.logPEJourneyPublishSnapshot(e, n, t);
            }));
      }
    }
    function Q(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_prereq_pass",
        data: C(e, t),
      });
    }
    function X(e, t) {
      r("AdsInterfacesLogger").logOnce({
        eventName: "pe_funnel_prereq_fail",
        data: C(e, t),
      });
    }
    function Y(e, t) {
      r("AdsInterfacesLogger").log({
        eventName: "pe_auto_toggled_for_existing_post",
        data: C(e, {
          is_partnership_ad: t.isPartnershipAd,
          is_sticky_opt_out: t.isStickyOptOut,
          enroll_status: t.enrollStatus,
          action_type: t.actionType,
        }),
      });
    }
    var J = r("JSResource")("PEJourneyLogger").__setRef("PEFunnelLogger"),
      Z = 1e3,
      ee = null,
      te = !1,
      ne = [],
      re = null;
    function oe() {
      return r("justknobx")._("6291");
    }
    function ae(e) {
      try {
        e();
      } catch (e) {
        r("FBLogger")("ads_extensions", "pe_journey")
          .catching(r("getErrorSafe")(e))
          .warn("PE journey logging failed");
      }
    }
    function ie(e) {
      ae(function () {
        if (oe()) {
          var t = ee;
          if (t != null) {
            e(t);
            return;
          }
          ne.length >= Z ||
            (ne.push(e),
            !te &&
              ((te = !0),
              r("promiseDone")(
                J.load(),
                function (e) {
                  ((te = !1),
                    (ee = e),
                    ne.splice(0).forEach(function (t) {
                      return ae(function () {
                        return t(e);
                      });
                    }));
                },
                function () {
                  ((te = !1), ne.splice(0));
                },
              )));
        }
      });
    }
    function le() {
      var e = r("ifRequired")(
        "hyperionAutoLogging",
        function (e) {
          return e.getCurrentUIEventData();
        },
        function () {
          return null;
        },
      );
      return {
        eventIndex: e == null ? void 0 : e.eventIndex,
        eventName: e == null ? void 0 : e.event,
      };
    }
    function se() {
      re == null &&
        (re = r("ifRequired")(
          "AdsALChannel",
          function (e) {
            var t = e.AdsALChannel;
            return t.addListener(
              "al_ad_object_spec_change_event",
              function (e) {
                var t = le();
                ie(function (n) {
                  return n.handlePEJourneySpecChange(e, t);
                });
              },
            );
          },
          function () {
            return null;
          },
        ));
    }
    function ue() {
      var e;
      (ne.splice(0), (te = !1));
      var t = re;
      (t != null &&
        (r("ifRequired")("AdsALChannel", function (e) {
          var n = e.AdsALChannel;
          return n.removeListener("al_ad_object_spec_change_event", t);
        }),
        (re = null)),
        (e = ee) == null || e.resetPEJourneyState(),
        (ee = null));
    }
    function ce(e) {
      ae(function () {
        oe() &&
          (se(),
          ie(function (t) {
            return t.logPEJourneyInitialStates(e);
          }));
      });
    }
    function de(e, t) {
      ie(function (n) {
        return n.logPEJourneyA2CResult(e, t);
      });
    }
    ((l.computeTerminalReasonCode = f),
      (l.resetEligibilityState = h),
      (l.getPEGKBlocklistFields = y),
      (l.buildLogData = C),
      (l.logL3EligibilityPass = b),
      (l.logL3EligibilityFail = v),
      (l.logL3CatalogDefaultedSuccess = S),
      (l.logL3CatalogDefaultedSkip = R),
      (l.logL1EligibilityPass = L),
      (l.logL1EligibilityFail = E),
      (l.logL1DataConsentDefaultOn = k),
      (l.logL1DataConsentDefaultOff = I),
      (l.logL1DataConsentUserOn = T),
      (l.logL1DataConsentUserOff = D),
      (l.logL1DataConsentState = x),
      (l.logL1FormatConsentState = $),
      (l.computeSkipReason = P),
      (l.logConsentRenderSkipped = N),
      (l.logL1CatalogSelectorImpression = M),
      (l.logL1CatalogSelectSuccess = w),
      (l.logL1PsetSelectSuccess = A),
      (l.logL1PsetSelectFail = F),
      (l.logL1TilesFormatDefaultOn = O),
      (l.logL1TilesFormatDefaultOff = B),
      (l.logL1CarouselFormatDefaultOn = W),
      (l.logL1CarouselFormatDefaultOff = q),
      (l.logL1TilesFormatUserOn = U),
      (l.logL1TilesFormatUserOff = V),
      (l.logL1CarouselFormatUserOn = H),
      (l.logL1CarouselFormatUserOff = G),
      (l.logL1PublishSuccess = z),
      (l.logL1PublishFail = j),
      (l.logL1PublishConsentSnapshot = K),
      (l.logPrereqPass = Q),
      (l.logPrereqFail = X),
      (l.logPEAutoToggledForExistingPost = Y),
      (l.logPEJourneyInitialStates = ce),
      (l.logPEJourneyA2CResult = de));
  },
  98,
);
