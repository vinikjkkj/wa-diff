__d(
  "adsCampaignTargetingAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCampaignMarketingMessageChannelsAccessorsFactory",
    "adsCampaignSubscriberUniverseAccessorsFactory",
    "adsCampaignTargetingAutomationAccessorsFactory",
    "adsCampaignTargetingRelaxationTypesAccessorsFactory",
    "adsCatalogBasedGeoLocationsAccessorsFactory",
    "adsGeoLocationsAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          adgroup_id: n.basicFieldAccessorFactory(e, t, "adgroup_id"),
          age_max: n.basicFieldAccessorFactory(e, t, "age_max"),
          age_min: n.basicFieldAccessorFactory(e, t, "age_min"),
          age_range: n.basicListFieldAccessorFactory(e, t, "age_range"),
          app_install_state: n.basicFieldAccessorFactory(
            e,
            t,
            "app_install_state",
          ),
          install_state_application: n.basicFieldAccessorFactory(
            e,
            t,
            "install_state_application",
          ),
          audience_network_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "audience_network_positions",
          ),
          behaviors: n.basicListFieldAccessorFactory(e, t, "behaviors"),
          brand_safety_content_filter_levels: n.basicListFieldAccessorFactory(
            e,
            t,
            "brand_safety_content_filter_levels",
          ),
          catalog_based_targeting: r(
            "adsCatalogBasedGeoLocationsAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.catalog_based_targeting;
            },
            [].concat(t, ["catalog_based_targeting"]),
          ),
          cities: n.basicListFieldAccessorFactory(e, t, "cities"),
          college_years: n.basicListFieldAccessorFactory(e, t, "college_years"),
          contextual_targeting_categories: n.basicListFieldAccessorFactory(
            e,
            t,
            "contextual_targeting_categories",
          ),
          countries: n.basicListFieldAccessorFactory(e, t, "countries"),
          country_groups: n.basicListFieldAccessorFactory(
            e,
            t,
            "country_groups",
          ),
          custom_audiences: n.basicListFieldAccessorFactory(
            e,
            t,
            "custom_audiences",
          ),
          device_platforms: n.basicListFieldAccessorFactory(
            e,
            t,
            "device_platforms",
          ),
          direct_install_devices: n.basicFieldAccessorFactory(
            e,
            t,
            "direct_install_devices",
          ),
          dynamic_audience_ids: n.basicListFieldAccessorFactory(
            e,
            t,
            "dynamic_audience_ids",
          ),
          education_majors: n.basicListFieldAccessorFactory(
            e,
            t,
            "education_majors",
          ),
          education_schools: n.basicListFieldAccessorFactory(
            e,
            t,
            "education_schools",
          ),
          education_statuses: n.basicListFieldAccessorFactory(
            e,
            t,
            "education_statuses",
          ),
          effective_audience_network_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "effective_audience_network_positions",
          ),
          effective_device_platforms: n.basicListFieldAccessorFactory(
            e,
            t,
            "effective_device_platforms",
          ),
          effective_facebook_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "effective_facebook_positions",
          ),
          effective_instagram_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "effective_instagram_positions",
          ),
          effective_messenger_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "effective_messenger_positions",
          ),
          effective_oculus_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "effective_oculus_positions",
          ),
          effective_publisher_platforms: n.basicListFieldAccessorFactory(
            e,
            t,
            "effective_publisher_platforms",
          ),
          effective_whatsapp_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "effective_whatsapp_positions",
          ),
          engagement_specs: n.basicListFieldAccessorFactory(
            e,
            t,
            "engagement_specs",
          ),
          ethnic_affinity: n.basicListFieldAccessorFactory(
            e,
            t,
            "ethnic_affinity",
          ),
          exclude_reached_since: n.basicListFieldAccessorFactory(
            e,
            t,
            "exclude_reached_since",
          ),
          excluded_brand_safety_content_types: n.basicListFieldAccessorFactory(
            e,
            t,
            "excluded_brand_safety_content_types",
          ),
          excluded_custom_audiences: n.basicListFieldAccessorFactory(
            e,
            t,
            "excluded_custom_audiences",
          ),
          excluded_dynamic_audience_ids: n.basicListFieldAccessorFactory(
            e,
            t,
            "excluded_dynamic_audience_ids",
          ),
          excluded_engagement_specs: n.basicListFieldAccessorFactory(
            e,
            t,
            "excluded_engagement_specs",
          ),
          excluded_geo_locations: r("adsGeoLocationsAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.excluded_geo_locations;
            },
            [].concat(t, ["excluded_geo_locations"]),
          ),
          excluded_mobile_device_model: n.basicListFieldAccessorFactory(
            e,
            t,
            "excluded_mobile_device_model",
          ),
          excluded_product_audience_specs: n.basicListFieldAccessorFactory(
            e,
            t,
            "excluded_product_audience_specs",
          ),
          excluded_publisher_list_ids: n.basicListFieldAccessorFactory(
            e,
            t,
            "excluded_publisher_list_ids",
          ),
          excluded_user_device: n.basicListFieldAccessorFactory(
            e,
            t,
            "excluded_user_device",
          ),
          exclusions: n.basicFieldAccessorFactory(e, t, "exclusions"),
          facebook_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "facebook_positions",
          ),
          family_statuses: n.basicListFieldAccessorFactory(
            e,
            t,
            "family_statuses",
          ),
          fb_deal_id: n.basicFieldAccessorFactory(e, t, "fb_deal_id"),
          flexible_spec: n.basicListFieldAccessorFactory(e, t, "flexible_spec"),
          follow_profiles_negative: n.basicListFieldAccessorFactory(
            e,
            t,
            "follow_profiles_negative",
          ),
          follow_profiles: n.basicListFieldAccessorFactory(
            e,
            t,
            "follow_profiles",
          ),
          gatekeepers: n.basicListFieldAccessorFactory(e, t, "gatekeepers"),
          genders: n.basicListFieldAccessorFactory(e, t, "genders"),
          generation: n.basicListFieldAccessorFactory(e, t, "generation"),
          geo_locations: r("adsGeoLocationsAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.geo_locations;
            },
            [].concat(t, ["geo_locations"]),
          ),
          home_ownership: n.basicListFieldAccessorFactory(
            e,
            t,
            "home_ownership",
          ),
          home_type: n.basicListFieldAccessorFactory(e, t, "home_type"),
          home_value: n.basicListFieldAccessorFactory(e, t, "home_value"),
          household_composition: n.basicListFieldAccessorFactory(
            e,
            t,
            "household_composition",
          ),
          income: n.basicListFieldAccessorFactory(e, t, "income"),
          industries: n.basicListFieldAccessorFactory(e, t, "industries"),
          instagram_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "instagram_positions",
          ),
          interested_in: n.basicListFieldAccessorFactory(e, t, "interested_in"),
          instream_video_skippable_excluded: n.basicFieldAccessorFactory(
            e,
            t,
            "instream_video_skippable_excluded",
          ),
          interests: n.basicListFieldAccessorFactory(e, t, "interests"),
          is_whatsapp_destination_ad: n.basicFieldAccessorFactory(
            e,
            t,
            "is_whatsapp_destination_ad",
          ),
          keywords: n.basicListFieldAccessorFactory(e, t, "keywords"),
          life_events: n.basicListFieldAccessorFactory(e, t, "life_events"),
          locales: n.basicListFieldAccessorFactory(e, t, "locales"),
          marketing_message_channels: r(
            "adsCampaignMarketingMessageChannelsAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.marketing_message_channels;
            },
            [].concat(t, ["marketing_message_channels"]),
          ),
          messenger_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "messenger_positions",
          ),
          moms: n.basicListFieldAccessorFactory(e, t, "moms"),
          net_worth: n.basicListFieldAccessorFactory(e, t, "net_worth"),
          oculus_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "oculus_positions",
          ),
          office_type: n.basicListFieldAccessorFactory(e, t, "office_type"),
          place_page_set_ids: n.basicListFieldAccessorFactory(
            e,
            t,
            "place_page_set_ids",
          ),
          political_views: n.basicListFieldAccessorFactory(
            e,
            t,
            "political_views",
          ),
          politics: n.basicListFieldAccessorFactory(e, t, "politics"),
          product_audience_specs: n.basicListFieldAccessorFactory(
            e,
            t,
            "product_audience_specs",
          ),
          prospecting_audience: {},
          publisher_platforms: n.basicListFieldAccessorFactory(
            e,
            t,
            "publisher_platforms",
          ),
          relationship_statuses: n.basicListFieldAccessorFactory(
            e,
            t,
            "relationship_statuses",
          ),
          subscriber_universe: r(
            "adsCampaignSubscriberUniverseAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.subscriber_universe;
            },
            [].concat(t, ["subscriber_universe"]),
          ),
          tafe_ca_mitigation_strategy: n.basicFieldAccessorFactory(
            e,
            t,
            "tafe_ca_mitigation_strategy",
          ),
          targeting_automation: r(
            "adsCampaignTargetingAutomationAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.targeting_automation;
            },
            [].concat(t, ["targeting_automation"]),
          ),
          targeting_optimization: n.basicFieldAccessorFactory(
            e,
            t,
            "targeting_optimization",
          ),
          targeting_relaxation_types: r(
            "adsCampaignTargetingRelaxationTypesAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.targeting_relaxation_types;
            },
            [].concat(t, ["targeting_relaxation_types"]),
          ),
          audience_concepts: n.basicListFieldAccessorFactory(
            e,
            t,
            "audience_concepts",
          ),
          user_adclusters: n.basicListFieldAccessorFactory(
            e,
            t,
            "user_adclusters",
          ),
          user_device: n.basicListFieldAccessorFactory(e, t, "user_device"),
          user_event: n.basicListFieldAccessorFactory(e, t, "user_event"),
          user_os: n.basicListFieldAccessorFactory(e, t, "user_os"),
          user_age_unknown: n.basicFieldAccessorFactory(
            e,
            t,
            "user_age_unknown",
          ),
          whatsapp_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "whatsapp_positions",
          ),
          wireless_carrier: n.basicListFieldAccessorFactory(
            e,
            t,
            "wireless_carrier",
          ),
          work_employers: n.basicListFieldAccessorFactory(
            e,
            t,
            "work_employers",
          ),
          work_positions: n.basicListFieldAccessorFactory(
            e,
            t,
            "work_positions",
          ),
          zips: n.basicListFieldAccessorFactory(e, t, "zips"),
        },
      );
    }
    l.default = e;
  },
  98,
);
