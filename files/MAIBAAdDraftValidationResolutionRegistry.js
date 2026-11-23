__d(
  "MAIBAAdDraftValidationResolutionRegistry",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map([
        [1341012, { fieldKey: null, level: "L1", sectionKind: "identity" }],
        [1487079, { fieldKey: null, level: "L2", sectionKind: "audience" }],
        [1487110, { fieldKey: null, level: "L2", sectionKind: "audience" }],
        [1487212, { fieldKey: null, level: "L1", sectionKind: "ad_creative" }],
        [
          1487429,
          {
            fieldKey: "promoted_object_pixel_id",
            level: "L2",
            sectionKind: "goal",
          },
        ],
        [1487756, { fieldKey: null, level: "L2", sectionKind: "audience" }],
        [1487897, { fieldKey: null, level: "L1", sectionKind: "ad_creative" }],
        [1815089, { fieldKey: null, level: "L2", sectionKind: "goal" }],
        [
          1815430,
          {
            fieldKey: "promoted_object_pixel_id",
            level: "L2",
            sectionKind: "goal",
          },
        ],
        [
          1815488,
          {
            fieldKey: "objective",
            level: "L3",
            sectionKind: "campaign_settings",
          },
        ],
        [1885364, { fieldKey: null, level: "L2", sectionKind: "audience" }],
        [
          2446880,
          {
            fieldKey: "promoted_object_whatsapp_phone_number",
            level: "L2",
            sectionKind: "goal",
          },
        ],
        [
          2490408,
          { fieldKey: "optimization_goal", level: "L2", sectionKind: "goal" },
        ],
        [
          3390001,
          {
            fieldKey: "creative_lead_gen_form_id",
            level: "L1",
            sectionKind: "destination",
          },
        ],
      ]),
      l = [
        {
          fieldKey: "targeting_age_range",
          fields: [
            "targeting_age_min",
            "targeting_age_max",
            "targeting_age_range",
          ],
          level: "L2",
          sectionKind: "audience",
        },
        {
          fieldKey: "targeting_advantage_audience",
          fields: [
            "targeting_advantage_audience",
            "individual_setting",
            "targeting_geo_individual_setting",
          ],
          level: "L2",
          sectionKind: "audience",
        },
        {
          fields: [
            "targeting_publisher_platforms",
            "targeting_facebook_positions",
            "targeting_instagram_positions",
            "targeting_messenger_positions",
            "targeting_audience_network_positions",
          ],
          level: "L2",
          sectionKind: "placements",
        },
      ],
      s = [
        {
          fields: ["objective", "spend_cap"],
          level: "L3",
          sectionKind: "campaign_settings",
          useSourceField: !0,
        },
        {
          fields: ["is_using_l3_schedule", "budget_strategy", "bid_strategy"],
          level: "L3",
          sectionKind: "campaign_settings",
        },
        {
          fields: [
            "targeting_genders",
            "targeting_automation",
            "targeting_geo_locations",
            "targeting_location_types",
            "targeting_custom_audiences",
            "targeting_flexible_spec",
            "targeting_optimization",
          ],
          level: "L2",
          sectionKind: "audience",
        },
        {
          fields: [
            "creative_advantage_plus",
            "creative_media",
            "image_hash",
            "image_url",
            "video_id",
            "creative",
          ],
          level: "L1",
          sectionKind: "ad_creative",
        },
        {
          fields: [
            "creative_body_content",
            "creative_title",
            "creative_link_description",
          ],
          level: "L1",
          sectionKind: "ad_creative",
          useSourceField: !0,
        },
        {
          fieldKey: "creative_page_id",
          fields: ["creative_page_id", "page_id"],
          level: "L1",
          sectionKind: "identity",
        },
        {
          fieldKey: "creative_instagram_user_id",
          fields: [
            "creative_instagram_user_id",
            "instagram_actor_id",
            "instagram_user_id",
          ],
          level: "L1",
          sectionKind: "identity",
        },
        {
          fieldKey: "creative_link_url",
          fields: ["creative_link_url", "link", "website_url"],
          level: "L1",
          sectionKind: "destination",
        },
        {
          fieldKey: "creative_lead_gen_form_id",
          fields: ["creative_lead_gen_form_id", "lead_gen_form_id"],
          level: "L1",
          sectionKind: "destination",
        },
        {
          fieldKey: "creative_call_to_action_type",
          fields: ["creative_call_to_action_type"],
          level: "L1",
          sectionKind: "destination",
        },
        {
          fields: [
            "creative_display_url",
            "creative_deep_link_url",
            "creative_phone_number",
          ],
          level: "L1",
          sectionKind: "destination",
          useSourceField: !0,
        },
        {
          fields: ["compliance_section"],
          level: "L1",
          sectionKind: "ad_transparency",
        },
        {
          fields: ["compliance_section_india"],
          level: "L1",
          sectionKind: "india_finserv",
        },
        {
          fieldKey: "special_ad_category_country",
          fields: ["special_ad_category_country"],
          level: "L3",
          sectionKind: "special_ad_category",
        },
        {
          fields: ["special_ad_categories"],
          level: "L3",
          sectionKind: "special_ad_category",
        },
        {
          fieldKey: "promoted_object_pixel_id",
          fields: ["promoted_object_pixel_id", "pixel_id"],
          level: "L2",
          sectionKind: "goal",
        },
        {
          fields: [
            "promoted_object_custom_event_type",
            "billing_event",
            "bid_amount",
          ],
          level: "L2",
          sectionKind: "goal",
        },
        {
          fieldKey: "optimization_goal",
          fields: ["optimization_goal"],
          level: "L2",
          sectionKind: "goal",
        },
      ];
    function u(e) {
      return e === "" ? [] : e.split(".");
    }
    function c(e, t) {
      return t.some(function (t) {
        return e.includes(t);
      });
    }
    function d(e) {
      return e === "L1"
        ? "ad_name"
        : e === "L2"
          ? "campaign_details"
          : e === "L3"
            ? "campaign_name"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function m(e, t) {
      var n,
        r = t.find(function (t) {
          return t.fields.includes(e);
        });
      return r == null
        ? null
        : {
            fieldKey:
              r.useSourceField === !0 ? e : (n = r.fieldKey) != null ? n : null,
            level: r.level,
            sectionKind: r.sectionKind,
          };
    }
    function p(e, t) {
      var n = u(t),
        r = n[n.length - 1];
      if (r == null) return null;
      if (r === "name")
        return { fieldKey: "name", level: e, sectionKind: d(e) };
      if (c(n, ["daily_budget", "lifetime_budget"]))
        return {
          fieldKey: r,
          level: e === "L3" ? "L3" : "L2",
          sectionKind: e === "L3" ? "campaign_settings" : "budget_schedule",
        };
      if (c(n, ["start_time", "stop_time"]))
        return {
          fieldKey: e === "L3" ? null : r,
          level: e === "L3" ? "L3" : "L2",
          sectionKind: e === "L3" ? "campaign_settings" : "budget_schedule",
        };
      if (r === "type" && n.includes("call_to_action"))
        return {
          fieldKey: "creative_call_to_action_type",
          level: "L1",
          sectionKind: "destination",
        };
      var o = m(r, l);
      if (o != null) return o;
      if (n.includes("targeting"))
        return { fieldKey: null, level: "L2", sectionKind: "audience" };
      var a = m(r, s);
      return a != null
        ? a
        : c(n, [
              "child_attachments",
              "asset_feed_spec",
              "object_story_spec",
              "link_data",
              "video_data",
            ])
          ? { fieldKey: null, level: "L1", sectionKind: "ad_creative" }
          : n.includes("promoted_object_spec")
            ? { fieldKey: null, level: "L2", sectionKind: "goal" }
            : null;
    }
    function _(t) {
      var n,
        r,
        o = t.canonicalPath,
        a = t.errorCode,
        i = t.level;
      return (n = (r = p(i, o)) != null ? r : e.get(a)) != null ? n : null;
    }
    ((i.getMAIBAAdDraftValidationPathTarget = p),
      (i.resolveMAIBAAdDraftValidationTarget = _));
  },
  66,
);
