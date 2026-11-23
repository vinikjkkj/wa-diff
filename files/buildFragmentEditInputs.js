__d(
  "buildFragmentEditInputs",
  ["adsMAIBAIGGoalEditDraftUtils", "isMAIBAAdsManagerCatalogEnabled"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.get(t);
      if (n != null) return n;
      var r = [];
      return (e.set(t, r), r);
    }
    var s = new Map([
        ["creative_body_content", "message"],
        ["creative_title", "name"],
        ["creative_link_description", "description"],
        ["creative_display_url", "caption"],
      ]),
      u = new Map([
        ["creative_phone_number", "link"],
        ["creative_deep_link_url", "app_link"],
        ["creative_lead_gen_form_id", "lead_gen_form_id"],
      ]),
      c = "creative_call_to_action_type",
      d = "creative_call_to_action_value",
      m = "creative_link_url",
      p = "creative_message_extensions",
      _ = "creative_self_disclosure_opted_in",
      f = [
        "generative_asset_spec",
        "transparency_metadata",
        "self_disclosure",
        "enroll_status",
      ],
      g = "creative.",
      h = "saved_audience",
      y = "targeting_advantage_audience",
      C = "targeting_automation",
      b = "targeting_flexible_spec",
      v = "targeting_optimization",
      S = "targeting_relaxation_types",
      R = new Map([
        ["targeting_custom_audience_ids", "custom_audiences"],
        ["targeting_excluded_custom_audience_ids", "excluded_custom_audiences"],
      ]),
      L = new Map([
        ["geo_locations", "geo_locations"],
        ["excluded_geo_locations", "excluded_geo_locations"],
        [C, "targeting_automation"],
        [v, "targeting_optimization"],
        [S, "targeting_relaxation_types"],
        ["targeting_age_min", "age_min"],
        ["targeting_age_max", "age_max"],
        ["targeting_age_range", "age_range"],
        [b, "flexible_spec"],
        ["targeting_genders", "genders"],
        ["targeting_locale_keys", "locales"],
        ["targeting_user_age_unknown", "user_age_unknown"],
      ]),
      E = new Map([
        ["targeting_publisher_platforms", "publisher_platforms"],
        ["targeting_facebook_positions", "facebook_positions"],
        ["targeting_instagram_positions", "instagram_positions"],
        ["targeting_audience_network_positions", "audience_network_positions"],
        ["targeting_messenger_positions", "messenger_positions"],
        ["targeting_whatsapp_positions", "whatsapp_positions"],
        ["targeting_threads_positions", "threads_positions"],
        ["targeting_device_platforms", "device_platforms"],
        ["targeting_user_os", "user_os"],
        ["targeting_wireless_carrier", "wireless_carrier"],
        [
          "targeting_instream_video_skippable_excluded",
          "instream_video_skippable_excluded",
        ],
      ]),
      k = new Map([
        ["placement_soft_opt_out_facebook_positions", "facebook_positions"],
        ["placement_soft_opt_out_instagram_positions", "instagram_positions"],
        [
          "placement_soft_opt_out_audience_network_positions",
          "audience_network_positions",
        ],
        ["placement_soft_opt_out_messenger_positions", "messenger_positions"],
        ["placement_soft_opt_out_whatsapp_positions", "whatsapp_positions"],
        ["placement_soft_opt_out_threads_positions", "threads_positions"],
      ]);
    function I(e) {
      return (
        e.startsWith(g) ||
        s.has(e) ||
        u.has(e) ||
        e === c ||
        e === d ||
        e === m ||
        e === p ||
        e === _
      );
    }
    function T(e) {
      return e === y || L.has(e) || E.has(e) || R.has(e);
    }
    function D(e) {
      return k.has(e);
    }
    function x(e, t) {
      var n = e[t],
        r =
          n != null && typeof n == "object" && !Array.isArray(n)
            ? babelHelpers.extends({}, n)
            : {};
      return ((e[t] = r), r);
    }
    function $(e, t, n) {
      if (t.length !== 0) {
        for (var r = e, o = 0; o < t.length - 1; o++) r = x(r, t[o]);
        r[t[t.length - 1]] = n;
      }
    }
    function P(e, t, n) {
      if (n == null || typeof n != "object" || Array.isArray(n)) {
        e[t] = n;
        return;
      }
      var r = e[t];
      e[t] =
        r != null && typeof r == "object" && !Array.isArray(r)
          ? babelHelpers.extends({}, r, n)
          : n;
    }
    function N(e) {
      return typeof e == "boolean" ? (e ? 1 : 0) : e;
    }
    function M(e) {
      var t = N(e);
      return t === 1 ? "expansion_all" : t === 0 ? "none" : null;
    }
    function w(e) {
      return Array.isArray(e)
        ? e.map(function (e) {
            return typeof e == "string" || typeof e == "number"
              ? { id: String(e) }
              : e;
          })
        : e;
    }
    function A(e) {
      var t = x(e, "object_story_spec");
      return x(t, "link_data");
    }
    function F(e, t) {
      if (e.length === 0) return null;
      var n = {},
        r = {},
        o = e.find(function (e) {
          return e.field === d;
        }),
        a = o == null ? void 0 : o.value,
        i =
          a != null && typeof a == "object" && !Array.isArray(a)
            ? babelHelpers.extends({}, a)
            : {};
      for (var l of e) {
        if (l.field.startsWith(g)) {
          $(n, l.field.slice(g.length).split("."), l.value);
          continue;
        }
        var h = s.get(l.field),
          y = u.get(l.field);
        if (h != null) {
          var C = A(n);
          C[h] = l.value;
        } else if (y != null) i[y] = l.value;
        else if (l.field === c) r.type = l.value;
        else {
          if (l.field === d) continue;
          if (l.field === m) {
            if (!t) {
              var b = A(n);
              b.link = l.value;
            }
            i.link = l.value;
          } else if (l.field === _)
            $(n, f, l.value === !0 ? "OPT_IN" : "OPT_OUT");
          else if (l.field === p) {
            var v = Array.isArray(l.value) ? l.value : [],
              S = v
                .filter(function (e) {
                  return typeof e == "string";
                })
                .map(function (e) {
                  return { type: e };
                }),
              R = x(n, "asset_feed_spec");
            R.message_extensions = S;
          }
        }
      }
      if (
        ((o != null || Object.keys(i).length > 0) &&
          (r.value = o != null && a == null ? null : i),
        Object.keys(r).length > 0)
      )
        if (t) n.call_to_action = r;
        else {
          var L = A(n);
          ((L.call_to_action = r), r.type !== void 0 && (n.call_to_action = r));
        }
      return n;
    }
    function O(e) {
      if (e.length === 0) return null;
      var t = {};
      for (var n of e) {
        if (n.field === y) {
          $(t, ["targeting_automation", "advantage_audience"], N(n.value));
          var r = M(n.value);
          r != null && (t.targeting_optimization = r);
          continue;
        }
        var o = R.get(n.field);
        if (o != null) {
          t[o] = w(n.value);
          continue;
        }
        var a = L.get(n.field),
          i = E.get(n.field),
          l = a != null ? a : i;
        if (l != null)
          if (n.field === C) {
            if (a == null) continue;
            P(t, a, n.value);
          } else t[l] = n.value;
      }
      return t;
    }
    function B(e) {
      if (e.length === 0) return null;
      var t = {};
      for (var n of e) {
        var r = k.get(n.field);
        if (r != null) {
          var o;
          t[r] = (o = n.value) != null ? o : [];
        }
      }
      return t;
    }
    function W(e) {
      return e == null
        ? null
        : typeof e == "string"
          ? e
          : typeof e == "number" || typeof e == "boolean"
            ? String(e)
            : JSON.stringify(e);
    }
    function q(e) {
      return e == null
        ? null
        : typeof e == "string" || typeof e == "number"
          ? JSON.stringify({ id: String(e) })
          : W(e);
    }
    function U(t, n, r, a, i, l) {
      var s = {
        field: t.field,
        new_value: t.field === h ? q(t.value) : W(t.value),
      };
      (t.field ===
        o("adsMAIBAIGGoalEditDraftUtils")
          .MAIBA_IG_COMBINED_OBJECTIVE_METADATA_FIELD &&
        t.originalValue !== void 0 &&
        (s.old_value = W(t.originalValue)),
        t.level === "L3"
          ? a.push(s)
          : t.level === "L2" && n != null
            ? e(i, n).push(s)
            : t.level === "L1" && r != null && e(l, r).push(s));
    }
    function V(e, t, n, r) {
      if (n.size !== 0) {
        var o = new Map(
          r.map(function (e) {
            return [e.id, e.draftFragmentID];
          }),
        );
        e[t] = Array.from(n, function (e) {
          var t = e[0],
            n = e[1],
            r = o.get(t),
            a = { ad_object_id: t, values: n };
          return (r != null && (a.draft_fragment_id = r), a);
        });
      }
    }
    function H(t, n) {
      var o,
        a,
        i,
        l,
        s = r("isMAIBAAdsManagerCatalogEnabled")(n.product),
        u =
          (o = (a = n.campaignEntities[0]) == null ? void 0 : a.id) != null
            ? o
            : null,
        c =
          (i = (l = n.adgroupEntities[0]) == null ? void 0 : l.id) != null
            ? i
            : null,
        d = [],
        m = new Map(),
        p = new Map(),
        _ = new Map(),
        f = new Map(),
        g = new Map();
      for (var h of t) {
        var y = s ? h.adObjectID : c,
          C = s ? h.adObjectID : u;
        if (I(h.field)) {
          y != null && e(_, y).push(h);
          continue;
        }
        if (h.level === "L2" && T(h.field)) {
          C != null && e(f, C).push(h);
          continue;
        }
        if (h.level === "L2" && D(h.field)) {
          C != null && e(g, C).push(h);
          continue;
        }
        U(h, C, y, d, m, p);
      }
      for (var b of _) {
        var v = b[0],
          S = b[1],
          R = F(S, n.isExistingPostBoost === !0);
        R != null &&
          e(p, v).push({ field: "creative", new_value: JSON.stringify(R) });
      }
      for (var L of f) {
        var E = L[0],
          k = L[1],
          x = O(k);
        x != null &&
          e(m, E).push({ field: "targeting", new_value: JSON.stringify(x) });
      }
      for (var $ of g) {
        var P = $[0],
          N = $[1],
          M = B(N);
        M != null &&
          e(m, P).push({
            field: "placement_soft_opt_out",
            new_value: JSON.stringify(M),
          });
      }
      var w = {
        ad_account_id: n.accountID,
        ad_draft_id: n.draftID,
        campaign_group_id: n.campaignGroupID,
      };
      return (
        n.product != null && (w.surface = n.product),
        n.conversationID != null &&
          n.conversationID !== "" &&
          (w.conversation_id = n.conversationID),
        d.length > 0 &&
          ((w.campaign_group_values = d),
          n.cgDraftFragmentID != null &&
            (w.campaign_group_draft_fragment_id = n.cgDraftFragmentID)),
        V(w, "campaigns", m, n.campaignEntities),
        V(w, "adgroups", p, n.adgroupEntities),
        w
      );
    }
    l.default = H;
  },
  98,
);
