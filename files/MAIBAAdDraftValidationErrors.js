__d(
  "MAIBAAdDraftValidationErrors",
  ["fbt", "invariant", "MAIBAAdDraftValidationResolutionRegistry"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = Object.freeze([]),
      c = Object.freeze([]),
      d = Object.freeze([]),
      m = "validation_errors";
    function p(e) {
      var t,
        n = e.split(".");
      return (t = n[n.length - 1]) != null ? t : e;
    }
    function _(e) {
      switch (e) {
        case "L1":
          return "ad_name";
        case "L2":
          return "campaign_details";
        case "L3":
          return "campaign_name";
      }
    }
    function f(e) {
      u(0, 161497, e);
    }
    function g(e) {
      switch (e) {
        case "bid_amount":
        case "bid_strategy":
        case "billing_event":
        case "budget_strategy":
        case "compliance_section":
        case "compliance_section_india":
        case "creative_advantage_plus":
        case "creative_body_content":
        case "creative_call_to_action_type":
        case "creative_deep_link_url":
        case "creative_display_url":
        case "creative_instagram_user_id":
        case "creative_lead_gen_form_id":
        case "creative_link_description":
        case "creative_link_url":
        case "creative_page_id":
        case "creative_phone_number":
        case "creative_title":
        case "daily_budget":
        case "destination_type":
        case "is_using_l3_schedule":
        case "lifetime_budget":
        case "name":
        case "objective":
        case "optimization_goal":
        case "promoted_object_custom_event_type":
        case "special_ad_categories":
        case "special_ad_category_country":
        case "spend_cap":
        case "start_time":
        case "stop_time":
        case "targeting_age_max":
        case "targeting_age_min":
        case "targeting_audience_network_positions":
        case "targeting_custom_audiences":
        case "targeting_facebook_positions":
        case "targeting_genders":
        case "targeting_geo_locations":
        case "targeting_instagram_positions":
        case "targeting_location_types":
        case "targeting_messenger_positions":
        case "targeting_publisher_platforms":
          return e;
      }
      return null;
    }
    function h(e, t) {
      switch (t) {
        case "name":
          return _(e);
        case "daily_budget":
        case "lifetime_budget":
        case "start_time":
        case "stop_time":
          return e === "L3" ? "campaign_settings" : "budget_schedule";
        case "objective":
        case "is_using_l3_schedule":
        case "budget_strategy":
        case "bid_strategy":
        case "spend_cap":
          return "campaign_settings";
        case "targeting_age_min":
        case "targeting_age_max":
        case "targeting_genders":
        case "targeting_geo_locations":
        case "targeting_location_types":
        case "targeting_custom_audiences":
          return "audience";
        case "targeting_publisher_platforms":
        case "targeting_facebook_positions":
        case "targeting_instagram_positions":
        case "targeting_messenger_positions":
        case "targeting_audience_network_positions":
          return "placements";
        case "creative_advantage_plus":
        case "creative_body_content":
        case "creative_title":
        case "creative_link_description":
        case "creative_call_to_action_type":
          return "ad_creative";
        case "creative_page_id":
        case "creative_instagram_user_id":
          return "identity";
        case "creative_link_url":
        case "creative_display_url":
        case "creative_deep_link_url":
        case "creative_lead_gen_form_id":
        case "creative_phone_number":
        case "destination_type":
          return "destination";
        case "compliance_section":
          return "ad_transparency";
        case "compliance_section_india":
          return "india_finserv";
        case "special_ad_categories":
        case "special_ad_category_country":
          return "special_ad_category";
        case "promoted_object_custom_event_type":
        case "optimization_goal":
        case "billing_event":
        case "bid_amount":
          return "goal";
        default:
          return f(t);
      }
    }
    function y(e) {
      var t = [];
      for (var n of e) for (var r of n.split(/[.\[\]]/)) r !== "" && t.push(r);
      return t;
    }
    function C(e) {
      return y(e).join(".");
    }
    function b(e, t, n, r) {
      return n === e ? t : n === "L3" ? r : null;
    }
    function v(e, t) {
      var n = p(t),
        r = g(n);
      return r != null
        ? h(e, r)
        : n.includes("object_story_spec") || n.includes("link_data")
          ? "ad_creative"
          : n.includes("targeting")
            ? "audience"
            : null;
    }
    function S(e, t, n, r, a) {
      var i,
        l = r.blame_field_spec,
        s = C(l);
      if (!a) {
        var u = l.length > 0 ? p(l[0]) : null,
          c = l.length > 0 ? v(e, l[0]) : null;
        return {
          adObjectID: t,
          blameFields: l,
          canonicalPath: s,
          errorCode: r.error_code,
          errorType: r.error_type,
          level: e,
          message: r.error_description,
          resolutionTarget:
            t != null && t !== "" && c != null
              ? { adObjectID: t, fieldKey: u, level: e, sectionKind: c }
              : null,
          sectionKind: c,
        };
      }
      var d = o(
          "MAIBAAdDraftValidationResolutionRegistry",
        ).resolveMAIBAAdDraftValidationTarget({
          canonicalPath: s,
          errorCode: r.error_code,
          level: e,
        }),
        m = d == null ? null : b(e, t, d.level, n),
        _ =
          d != null && m != null && m !== ""
            ? {
                adObjectID: m,
                fieldKey: d.fieldKey,
                level: d.level,
                sectionKind: d.sectionKind,
              }
            : null;
      return {
        adObjectID: t,
        blameFields: l,
        canonicalPath: s,
        dedupeKey: s === "" ? String(r.error_code) : r.error_code + ":" + s,
        errorCode: r.error_code,
        errorType: r.error_type,
        level: e,
        message: r.error_description,
        resolutionTarget: _,
        sectionKind:
          (i = _ == null ? void 0 : _.sectionKind) != null ? i : null,
      };
    }
    function R(e) {
      var t;
      return (t = e == null ? void 0 : e.draft_validation_errors) != null
        ? t
        : d;
    }
    function L(t, n) {
      if ((n === void 0 && (n = !1), t == null || t.data == null)) return e;
      var r = [],
        o = t.data,
        a = o.campaign_group;
      if (a != null)
        for (var i of R(a)) {
          var l, s;
          r.push(
            S(
              "L3",
              (l = t.campaignGroupID) != null ? l : null,
              (s = t.campaignGroupID) != null ? s : null,
              i,
              n,
            ),
          );
        }
      for (var u of (d = o.campaigns) != null ? d : c) {
        var d,
          m = u.node;
        if (m != null)
          for (var p of R(m)) {
            var _;
            r.push(
              S(
                "L2",
                u.node_id,
                (_ = t.campaignGroupID) != null ? _ : null,
                p,
                n,
              ),
            );
          }
      }
      for (var f of (g = o.adgroups) != null ? g : c) {
        var g,
          h = f.node;
        if (h != null)
          for (var y of R(h)) {
            var C;
            r.push(
              S(
                "L1",
                f.node_id,
                (C = t.campaignGroupID) != null ? C : null,
                y,
                n,
              ),
            );
          }
      }
      return r;
    }
    function E(e) {
      return e.message + " (#" + e.errorCode + ")";
    }
    function k(e) {
      return e === 1
        ? s._(/*BTDS*/ "")
        : s._(/*BTDS*/ "", [s._param("number of errors", e)]);
    }
    function I(e) {
      var t = e
        .map(function (e) {
          var t,
            n = (t = e.adObjectID) != null ? t : "unknown",
            r = e.blameFields.length > 0 ? e.blameFields.join(", ") : "none";
          return (
            "- level: " +
            e.level +
            "\n" +
            ("  ad_object_id: " + n + "\n") +
            ("  error_code: " + e.errorCode + "\n") +
            ("  description: " + e.message + "\n") +
            ("  blame_fields: " + r)
          );
        })
        .join("\n");
      return (
        "Fix all current validation errors in this ad draft. Preserve the advertiser intent and make the minimum edits needed for the draft to publish.\n\nValidation errors:\n" +
        t
      );
    }
    function T(e) {
      var t = new Map();
      for (var n of e) {
        var r,
          o = P(n),
          a = (r = t.get(o)) != null ? r : new Map(),
          i = $(n),
          l = a.get(i);
        ((l == null ||
          (l.resolutionTarget == null && n.resolutionTarget != null)) &&
          a.set(i, n),
          t.set(o, a));
      }
      return Array.from(t.values()).flatMap(function (e) {
        var t = Array.from(e.values()),
          n = t.filter(function (e) {
            return e.resolutionTarget != null;
          });
        return n.length > 0 ? n : t.slice(0, 1);
      });
    }
    function D(e) {
      var t = new Set();
      return e.filter(function (e) {
        return t.has(e.errorCode) ? !1 : (t.add(e.errorCode), !0);
      });
    }
    function x(e, t) {
      t === void 0 && (t = !1);
      var n = L(e, t);
      return t ? T(n) : n;
    }
    function $(e) {
      var t,
        n,
        r,
        o = e.resolutionTarget;
      return [
        (t = o == null ? void 0 : o.level) != null ? t : e.level,
        (n =
          (r = o == null ? void 0 : o.adObjectID) != null ? r : e.adObjectID) !=
        null
          ? n
          : "",
        P(e),
      ].join(":");
    }
    function P(e) {
      var t,
        n,
        r = (t = e.canonicalPath) != null ? t : "";
      return (n = e.dedupeKey) != null ? n : [String(e.errorCode), r].join(":");
    }
    function N(t, n, r, o) {
      return r == null || r === ""
        ? e
        : t.filter(function (e) {
            var t = e.resolutionTarget;
            return (
              t != null &&
              t.level === n &&
              t.adObjectID === r &&
              t.sectionKind === o
            );
          });
    }
    function M(e, t, n, r, o) {
      if ((o === void 0 && (o = !1), o || n == null || n === "")) return null;
      var a = e
        .filter(function (e) {
          var o = e.resolutionTarget;
          return o == null || o.level !== t || o.adObjectID !== n
            ? !1
            : e.dedupeKey == null
              ? e.blameFields.some(function (e) {
                  return p(e) === r;
                })
              : o.fieldKey === r;
        })
        .map(function (e) {
          return e.message;
        })
        .filter(function (e) {
          return e !== "";
        });
      return a.length > 0 ? a.join("; ") : null;
    }
    ((l.MAIBA_AD_DRAFT_VALIDATION_ERRORS_SECTION_KIND = m),
      (l.collectMAIBAAdDraftValidationErrors = L),
      (l.formatMAIBAAdDraftValidationError = E),
      (l.getMAIBAAdDraftFixValidationErrorsDisplayMessage = k),
      (l.buildMAIBAAdDraftValidationErrorsFixPrompt = I),
      (l.dedupeMAIBAAdDraftValidationErrors = T),
      (l.dedupeMAIBAAdDraftValidationErrorsByCode = D),
      (l.getMAIBAAdDraftValidationErrors = x),
      (l.getMAIBAAdDraftValidationErrorKey = $),
      (l.getMAIBAAdDraftSectionValidationErrors = N),
      (l.getMAIBAAdDraftFieldValidationMessage = M));
  },
  226,
);
