__d(
  "AdsInsightsBreakdownEntryConfig",
  [
    "fbt",
    "AdsInsightsBreakdownBaseConfig",
    "AdsInsightsBreakdownsSpec",
    "AdsInsightsDmaDeprecationUtils",
    "AdsInsightsGKByAccountDeprecated",
    "AdsInsightsMetricNames",
    "AdsManagerCSABreakdownUtils",
    "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
    "AdsMgmt2025H2ExperimentUtils",
    "AdsMgmt2026H1BreakdownExperimentUtils",
    "AdsMgmt2026H1ExperimentUtils",
    "AdsObjectTypes",
    "DateTime",
    "Timezone",
    "distinctArray",
    "filterValues",
    "flattenArray",
    "gkx",
    "isTruthy",
    "memoize",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = function (t, n) {
        return n.length ? [].concat(n).sort().join(",") : t;
      },
      m = {},
      p = [
        "country",
        "region",
        "region_id",
        "dma",
        "comscore_market",
        "place_page_id",
        "user_segment_key",
      ],
      _ = ["age", "gender", "user_segment_key"],
      f = [
        "activity_recency",
        "device_platform",
        "product_id",
        "publisher_platform",
        "platform_position",
        "hourly_stats_aggregated_by_advertiser_time_zone",
        "hourly_stats_aggregated_by_audience_time_zone",
        "impression_device",
        "frequency_value",
        "pa_creator_ig_handle",
        "msa_seller_name",
        "creative_media_type",
        "ad_extension_domain",
        "ad_extension_url",
        "reels_trending_topic",
      ],
      g = [
        "body_asset",
        "call_to_action_asset",
        "description_asset",
        "image_asset",
        "link_url_asset",
        "media_asset",
        "title_asset",
        "video_asset",
        "creative_automation_asset_id",
      ],
      h = [
        "signal_source_bucket",
        "conversion_destination",
        "is_business_ai_assisted",
        "promoted_product_set_result",
        "action_device",
        "action_carousel_card_name",
        "action_destination",
        "action_reaction",
        "action_brand_name",
        "action_category_name",
        "action_video_sound",
        "action_video_type",
        "action_canvas_component_name",
        "action_event_channel",
      ],
      y = ["days_1", "days_7", "days_14", "monthly"],
      C = [
        (c = o("AdsInsightsBreakdownsSpec")).ObjectBreakdowns.AD_NAME,
        c.ObjectBreakdowns.ADSET_NAME,
      ],
      b = [
        c.AttributionSettingBreakdowns.ATTRIBUTION_SETTING,
        c.AttributionSettingBreakdowns.CONVERSION_COUNT,
      ],
      v = {
        entryType: "composite",
        breakdowns: [],
        name: (u = r("AdsInsightsMetricNames")).none,
      },
      S = { entryType: "single", breakdowns: ["days_1"] },
      R = { entryType: "single", breakdowns: ["age"] },
      L = { entryType: "single", breakdowns: ["gender"] },
      E = {
        entryType: "composite",
        breakdowns: ["age", "gender"],
        name: s._(/*BTDS*/ "Age and gender"),
        unsupported: [
          "action_canvas_component_name",
          "action_device",
          "action_reaction",
          "action_video_sound",
          "place_page_id",
          "country",
          "region_id",
          "region",
          "dma",
          "comscore_market",
          "activity_recency",
          "impression_device",
          "creative_media_type",
          "publisher_platform",
          "platform_position",
          "device_platform",
          "product_id",
          "frequency_value",
          "hourly_stats_aggregated_by_advertiser_time_zone",
          "hourly_stats_aggregated_by_audience_time_zone",
        ].concat(b),
        tooltip: s._(
          /*BTDS*/ "View your data by age range and gender. These values are estimated.",
        ),
      },
      k = {
        entryType: "single",
        breakdowns: ["activity_recency"],
        launchDate: r("DateTime").fromISOString(
          "2017-05-14",
          o("Timezone").UTC,
        ),
      },
      I = { entryType: "single", breakdowns: ["place_page_id"] },
      T = { entryType: "single", breakdowns: ["country"] },
      D = s._(
        /*BTDS*/ "View your data by the audiences where you applied value rules. These values are estimated.",
      ),
      x = {
        entryType: "composite",
        breakdowns: ["user_persona_id", "user_persona_name"],
        name: u.user_persona_name,
        unsupported: ["action_type", "action_target_id"].concat(
          C,
          y,
          h,
          _,
          p,
          g,
          f,
          b,
        ),
        tooltip: D,
        description: s._(/*BTDS*/ "Ads and ad sets only"),
        breakdownType: "demographics",
        hiddenFor: [r("AdsObjectTypes").CAMPAIGN_GROUP],
      },
      $ = {
        entryType: "composite",
        breakdowns: ["region_id", "region"],
        tooltip: s._(
          /*BTDS*/ "View your data by the region (such as state or province) where people live or were located when they saw your ads, depending on how you set your location targeting. These values are estimated.",
        ),
        name: u.region,
        unsupported: [
          "action_canvas_component_name",
          "action_carousel_card_name",
          "action_device",
          "action_reaction",
          "action_video_sound",
          "age",
          "gender",
          "user_segment_key",
          "activity_recency",
          "impression_device",
          "creative_media_type",
          "publisher_platform",
          "platform_position",
          "device_platform",
          "product_id",
          "frequency_value",
          "hourly_stats_aggregated_by_advertiser_time_zone",
          "hourly_stats_aggregated_by_audience_time_zone",
        ].concat(g, b),
      },
      P = { entryType: "single", breakdowns: ["dma"] },
      N = { entryType: "single", breakdowns: ["comscore_market"] },
      M = { entryType: "single", breakdowns: ["impression_device"] },
      w = {
        entryType: "composite",
        breakdowns: ["creative_media_type"],
        name: u.creative_media_type,
        hiddenFor: [r("AdsObjectTypes").CREATIVE],
        unsupported: [
          "action_device",
          "action_reaction",
          "action_destination",
          "action_event_channel",
          "action_video_type",
          "action_video_sound",
          "action_carousel_card_name",
          "action_canvas_component_name",
          "age",
          "gender",
          "user_segment_key",
          "place_page_id",
          "country",
          "region_id",
          "region",
          "dma",
          "comscore_market",
          "user_segment_key",
        ].concat(g, b),
      },
      A = {
        entryType: "single",
        breakdowns: ["publisher_platform"],
        canSee: !0,
      },
      F = {
        entryType: "composite",
        breakdowns: ["publisher_platform", "impression_device"],
        canSee: !0,
        tooltip: s._(
          /*BTDS*/ "View your data by platform (ex: Facebook, Instagram) where your ad was shown and devices people were using when they saw your ads. These values are estimated.",
        ),
        name: s._(/*BTDS*/ "Platform and device"),
        unsupported: [
          "action_canvas_component_name",
          "action_reaction",
          "action_video_sound",
          "age",
          "gender",
          "user_segment_key",
          "place_page_id",
          "country",
          "region_id",
          "region",
          "dma",
          "comscore_market",
          "user_segment_key",
        ].concat(g, b),
      },
      O = { entryType: "single", breakdowns: ["user_segment_key"] },
      B = {
        entryType: "composite",
        breakdowns: ["user_segment_key", "country"],
        tooltip: s._(
          /*BTDS*/ "View your data by new audiences, engaged audiences and existing customers. You can manage audience segments in Advertising settings.",
        ),
        name: s._(/*BTDS*/ "Country and audience segments"),
        unsupported: [
          "action_brand",
          "action_brand_name",
          "action_canvas_component_id",
          "action_canvas_component_name",
          "action_carousel_card_id",
          "action_carousel_card_name",
          "action_category",
          "action_category_name",
          "action_converted_brand_tag_id",
          "action_converted_category_tag_id",
          "action_converted_product_id",
          "action_destination",
          "action_device",
          "action_event_channel",
          "action_link_click_destination",
          "action_location_code",
          "action_reaction",
          "action_target_id",
          "action_type",
          "action_video_asset_id",
          "action_video_sound",
          "action_video_type",
          "app_optimized_custom_event_name",
          "attribution_model_type",
          "business_contact_option",
          "interactive_component_sticker_id",
          "interactive_component_sticker_response",
          "optimized_custom_event_name",
          "standard_event_content_type",
          "age",
          "gender",
          "activity_recency",
          "impression_device",
          "creative_media_type",
          "publisher_platform",
          "platform_position",
          "device_platform",
          "product_id",
          "frequency_value",
          "hourly_stats_aggregated_by_advertiser_time_zone",
          "hourly_stats_aggregated_by_audience_time_zone",
        ].concat(b),
        unsupportedWithComparison: !0,
      },
      W = {
        entryType: "composite",
        breakdowns: [
          "publisher_platform",
          "platform_position",
          "device_platform",
        ],
        tooltip: s._(
          /*BTDS*/ "View your data by placement where your ad was shown (ex: Facebook desktop Feed, Instagram mobile feed). These values are estimated.",
        ),
        name: u.placement,
        unsupported: [
          "action_canvas_component_name",
          "action_reaction",
          "action_video_sound",
          "age",
          "gender",
          "user_segment_key",
          "place_page_id",
          "country",
          "region_id",
          "region",
          "dma",
          "comscore_market",
          "user_segment_key",
        ].concat(
          o(
            "AdsMgmt2026H1BreakdownExperimentUtils",
          ).getIsAccountInMultiMediaPlacementBreakdownWithoutExposure()
            ? [].concat(
                g.filter(function (e) {
                  return e !== "creative_automation_asset_id";
                }),
                [
                  "flexible_format_asset_type",
                  "gen_ai_asset_type",
                  "creative_relaxation_asset_type",
                ],
              )
            : g,
          b,
        ),
      },
      q = {
        entryType: "composite",
        breakdowns: [
          "publisher_platform",
          "platform_position",
          "device_platform",
          "impression_device",
        ],
        tooltip: s._(
          /*BTDS*/ "View your data by placement where your ad was shown and devices people were using when they saw your ads (ex: Facebook desktop Feed, Instagram mobile feed). These values are estimated.",
        ),
        name: s._(/*BTDS*/ "Placement and device"),
        unsupported: [
          "action_canvas_component_name",
          "action_reaction",
          "action_video_sound",
          "age",
          "gender",
          "user_segment_key",
          "place_page_id",
          "country",
          "region_id",
          "region",
          "dma",
          "comscore_market",
          "user_segment_key",
        ].concat(g, b),
      },
      U = {
        entryType: "single",
        breakdowns: ["product_id"],
        hiddenFor: [r("AdsObjectTypes").CREATIVE],
      },
      V = {
        entryType: "single",
        breakdowns: ["frequency_value"],
        hiddenFor: [
          r("AdsObjectTypes").CAMPAIGN,
          r("AdsObjectTypes").CAMPAIGN_GROUP,
        ],
      },
      H = {
        entryType: "single",
        breakdowns: ["hourly_stats_aggregated_by_advertiser_time_zone"],
      },
      G = {
        entryType: "single",
        breakdowns: ["hourly_stats_aggregated_by_audience_time_zone"],
      },
      z = { entryType: "single", breakdowns: ["action_device"] },
      j = { entryType: "single", breakdowns: ["action_reaction"] },
      K = { entryType: "single", breakdowns: ["action_destination"] },
      Q = { entryType: "single", breakdowns: ["action_event_channel"] },
      X = { entryType: "single", breakdowns: ["action_video_type"] },
      Y = { entryType: "single", breakdowns: ["action_video_sound"] },
      J = { entryType: "single", breakdowns: ["action_carousel_card_name"] },
      Z = {
        entryType: "single",
        breakdowns: ["action_canvas_component_name"],
        hiddenFor: [r("AdsObjectTypes").CAMPAIGN_GROUP],
      },
      ee = { entryType: "single", breakdowns: ["action_brand_name"] },
      te = { entryType: "single", breakdowns: ["action_category_name"] },
      ne = { entryType: "single", breakdowns: ["ad_extension_domain"] },
      re = { entryType: "single", breakdowns: ["ad_extension_url"] },
      oe = { entryType: "single", breakdowns: ["reels_trending_topic"] },
      ae = { entryType: "single", breakdowns: ["conversion_destination"] },
      ie = { entryType: "single", breakdowns: ["is_business_ai_assisted"] },
      le = { entryType: "single", breakdowns: ["pa_creator_ig_handle"] },
      se = {
        entryType: "single",
        breakdowns: ["msa_seller_name"],
        hiddenFor: [
          r("AdsObjectTypes").ACCOUNT,
          r("AdsObjectTypes").CAMPAIGN_GROUP,
          r("AdsObjectTypes").ADGROUP,
          r("AdsObjectTypes").CREATIVE,
        ],
      },
      ue = {
        entryType: "composite",
        breakdowns: [
          "msa_seller_name",
          "hourly_stats_aggregated_by_advertiser_time_zone",
        ],
        name: s._(/*BTDS*/ "Budget splits ID and time of day"),
        gkResult: r("gkx")("15494"),
        hiddenFor: [
          r("AdsObjectTypes").ACCOUNT,
          r("AdsObjectTypes").CAMPAIGN_GROUP,
          r("AdsObjectTypes").ADGROUP,
          r("AdsObjectTypes").CREATIVE,
        ],
      },
      ce = { entryType: "single", breakdowns: ["signal_source_bucket"] },
      de = {
        entryType: "single",
        breakdowns: ["promoted_product_set_result"],
        canSee: o("AdsMgmt2026H1ExperimentUtils").getIsAccountInPPSRBreakdown(),
      },
      me = {
        entryType: "single",
        breakdowns: ["image_asset"],
        hiddenFor: [
          r("AdsObjectTypes").ACCOUNT,
          r("AdsObjectTypes").CAMPAIGN_GROUP,
        ],
        canSee: !1,
        isAsset: !0,
        shouldRenderAsLink: !0,
        hasThumbnail: !0,
      },
      pe = {
        entryType: "single",
        breakdowns: ["video_asset"],
        hiddenFor: [
          r("AdsObjectTypes").ACCOUNT,
          r("AdsObjectTypes").CAMPAIGN_GROUP,
        ],
        canSee: !1,
        isAsset: !0,
        shouldRenderAsLink: !0,
        hasThumbnail: !0,
      },
      _e = {
        entryType: "single",
        breakdowns: ["media_asset"],
        hiddenFor: [
          r("AdsObjectTypes").ACCOUNT,
          r("AdsObjectTypes").CAMPAIGN_GROUP,
        ],
        canSee: !0,
        isAsset: !0,
        shouldRenderAsLink: !0,
        hasThumbnail: !0,
      },
      fe = {
        entryType: "single",
        breakdowns: ["link_url_asset"],
        hiddenFor: [
          r("AdsObjectTypes").ACCOUNT,
          r("AdsObjectTypes").CAMPAIGN_GROUP,
        ],
        isAsset: !0,
      },
      ge = {
        entryType: "single",
        breakdowns: ["body_asset"],
        hiddenFor: [
          r("AdsObjectTypes").ACCOUNT,
          r("AdsObjectTypes").CAMPAIGN_GROUP,
        ],
        isAsset: !0,
      },
      he = {
        entryType: "single",
        breakdowns: ["title_asset"],
        hiddenFor: [
          r("AdsObjectTypes").ACCOUNT,
          r("AdsObjectTypes").CAMPAIGN_GROUP,
        ],
        isAsset: !0,
      },
      ye = {
        entryType: "single",
        breakdowns: ["description_asset"],
        hiddenFor: [
          r("AdsObjectTypes").ACCOUNT,
          r("AdsObjectTypes").CAMPAIGN_GROUP,
        ],
        isAsset: !0,
      },
      Ce = {
        entryType: "single",
        breakdowns: ["call_to_action_asset"],
        hiddenFor: [
          r("AdsObjectTypes").ACCOUNT,
          r("AdsObjectTypes").CAMPAIGN_GROUP,
        ],
        isAsset: !0,
      },
      be = {
        entryType: "composite",
        breakdowns: [
          "creative_automation_asset_id",
          "publisher_platform",
          "platform_position",
          "device_platform",
        ],
        tooltip: s._(
          /*BTDS*/ "View your data by the media used in the ad and the placement where your ad was shown (ex: Facebook desktop Feed, Instagram mobile feed). These values are estimated.",
        ),
        name: s._(/*BTDS*/ "Media and placement"),
        canSee: o(
          "AdsMgmt2026H1BreakdownExperimentUtils",
        ).getIsAccountInMultiMediaPlacementBreakdownWithoutExposure(),
        isAsset: !0,
        shouldRenderAsLink: !0,
        hasThumbnail: !0,
        hiddenFor: [
          r("AdsObjectTypes").ACCOUNT,
          r("AdsObjectTypes").CAMPAIGN_GROUP,
        ],
        unsupported: [].concat(_, p, f, h, b),
      };
    ((m.geography = [v, T, B, $, I]
      .concat(o("AdsInsightsDmaDeprecationUtils").shouldHideDma() ? [] : [P])
      .concat([N])),
      (m.demographics = [v, R, L, E, O, x]),
      (m.impression = [
        v,
        W,
        A,
        oe,
        H,
        G,
        M,
        F,
        q,
        k,
        w,
        U,
        V,
        ne,
        re,
        le,
        se,
        ue,
      ]),
      (m.action = [v, ce, de, ae, ie, z, J, K, j, ee, te, Y, X, Z, Q]),
      (m.time = [
        v,
        S,
        { entryType: "single", breakdowns: ["days_7"] },
        { entryType: "single", breakdowns: ["days_14"] },
        { entryType: "single", breakdowns: ["monthly"] },
      ]),
      (m.asset = [v, _e, me, ge, he, ye, Ce, fe, pe]),
      (m.object = [
        v,
        {
          entryType: "single",
          breakdowns: [o("AdsInsightsBreakdownsSpec").ObjectBreakdowns.AD_NAME],
          hiddenFor: r("filterValues")(r("objectValues")(r("AdsObjectTypes")), [
            r("AdsObjectTypes").CREATIVE,
          ]),
        },
        {
          entryType: "single",
          breakdowns: [
            o("AdsInsightsBreakdownsSpec").ObjectBreakdowns.ADSET_NAME,
          ],
          canSee: !0,
          hiddenFor: r("filterValues")(r("objectValues")(r("AdsObjectTypes")), [
            r("AdsObjectTypes").CREATIVE,
          ]),
        },
      ]),
      (m.settings = []),
      (m.custom_breakdowns = []),
      (m.conversion_value_rules_breakdowns = []),
      (m.creative = [
        v,
        {
          entryType: "single",
          breakdowns: ["flexible_format_asset_type"],
          canSee: !0,
        },
        {
          entryType: "single",
          breakdowns: ["creative_relaxation_asset_type"],
          canSee: !0,
        },
        babelHelpers.extends(
          {
            entryType: "single",
            breakdowns: ["creative_automation_asset_id"],
            canSee: o(
              "AdsMgmt2025H2ExperimentUtils",
            ).getIsAccountInAssetLevelBreakdownWithoutExposure(),
            isAsset: !0,
            shouldRenderAsLink: !0,
            hasThumbnail: !0,
            hiddenFor: [
              r("AdsObjectTypes").ACCOUNT,
              r("AdsObjectTypes").CAMPAIGN_GROUP,
            ],
          },
          o(
            "AdsMgmt2026H1BreakdownExperimentUtils",
          ).getIsAccountInMultiMediaPlacementBreakdownWithoutExposure()
            ? {
                unsupported: [
                  "activity_recency",
                  "product_id",
                  "hourly_stats_aggregated_by_advertiser_time_zone",
                  "hourly_stats_aggregated_by_audience_time_zone",
                  "impression_device",
                  "frequency_value",
                  "media_creator",
                  "creative_media_type",
                  "ad_extension_domain",
                  "ad_extension_url",
                  "reels_trending_topic",
                ],
              }
            : {},
        ),
        be,
      ]),
      (m.attribution_setting_breakdowns = [
        v,
        {
          entryType: "single",
          breakdowns: [
            o("AdsInsightsBreakdownsSpec").AttributionSettingBreakdowns
              .ATTRIBUTION_SETTING,
          ],
          canSee: o(
            "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
          ).shouldAccountSeeAttributionSettingBreakdownWithoutExposure(),
        },
        {
          entryType: "single",
          breakdowns: [
            o("AdsInsightsBreakdownsSpec").AttributionSettingBreakdowns
              .CONVERSION_COUNT,
          ],
          canSee: o(
            "AdsMgmt2025H2AttributionSettingBreakdownExpUtils",
          ).shouldAccountSeeAttributionSettingBreakdownWithoutExposure(),
        },
      ]));
    var ve = d(x.entryType, ["user_persona_id", "user_persona_name"]),
      Se = o("AdsManagerCSABreakdownUtils").isCSAVARBreakdownEnabled()
        ? [ve]
        : [];
    m.popular_breakdowns = [];
    var Re = [S, R, W, T, A].map(function (e) {
        return d(e.entryType, e.breakdowns);
      }),
      Le = function (n, o) {
        var t = o.unsupported,
          a = o.unsupportedTypes;
        return (e || (e = r("distinctArray")))(
          (t || []).concat(
            r("flattenArray")(
              (a || []).map(function (e) {
                return n[e].map(function (e) {
                  var t = e.breakdowns;
                  return t;
                });
              }),
            ),
          ),
        );
      },
      Ee = function (t) {
        var e = o("AdsInsightsBreakdownBaseConfig").getConfigsByID(),
          n = {},
          a = {};
        return (
          Object.keys(t).forEach(function (o) {
            var i = t[o]
              .map(function (t) {
                var n = t.breakdowns.length === 1 ? t.breakdowns[0] : null;
                return n
                  ? babelHelpers.extends({}, e[n], t)
                  : (t.entryType === "composite", t);
              })
              .filter(function (e) {
                return typeof e.canSee == "boolean"
                  ? e.canSee
                  : (e.gkResult == null &&
                      (e.gk_by_act == null || e.gk_by_act === "")) ||
                      (e.gkResult != null && r("isTruthy")(e.gkResult)) ||
                      (e.gk_by_act != null &&
                        r("AdsInsightsGKByAccountDeprecated")[e.gk_by_act]);
              })
              .map(function (e) {
                var n;
                return babelHelpers.extends({}, e, {
                  displayNewBadge: e.isUserBadgeEligible,
                  id: d(o, e.breakdowns),
                  unsupported: Le(t, e),
                  type: (n = e.breakdownType) != null ? n : o,
                });
              });
            ((a[o] = i.map(function (e) {
              return e.id;
            })),
              i.forEach(function (e) {
                n[e.id] = Object.seal(e);
              }));
          }),
          { configsByID: n, entriesByType: a }
        );
      },
      ke = function () {
        return Ee(m);
      },
      Ie = r("memoize")(ke);
    ((l.makeID = d),
      (l.PERSONA_BREAKDOWN_ID = ve),
      (l.conversionValueRulesBreakdowns = Se),
      (l.popularBreakdowns = Re),
      (l.__buildInternal = Ee),
      (l.build = Ie));
  },
  226,
);
