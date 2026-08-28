__d(
  "AdgroupSpecUtil",
  [
    "AdCreativeStandardEnhancementsEditSourceType",
    "AdErrorSeverityTypes",
    "AdGroupMediaSourceType",
    "AdsAPIAssetFeedTextActionType",
    "AdsAPIAudienceNetworkPosition",
    "AdsAPIBidInfoFields",
    "AdsAPIBidType",
    "AdsAPICreativeAssetGroupsSpecOrigin",
    "AdsAPICreativeAssetImageSource",
    "AdsAPICreativeAssetTextTypeSpecFields",
    "AdsAPIFacebookPosition",
    "AdsAPIInstagramPosition",
    "AdsAPIMessengerPosition",
    "AdsAPIOculusPosition",
    "AdsAPIThreadsPosition",
    "AdsAPIWhatsAppPosition",
    "AdsCarouselStyleType",
    "AdsCarouselWithStaticCardType",
    "AdsEffectiveStatus",
    "AdsErrorPlacementTypes",
    "AdsTargetingGender",
    "ConversionActionQuerySpecUtil",
    "FBLogger",
    "MetaRewardAdgroupStatusForApi",
    "TypeCoercionUtils",
    "VideoThumbnailSource",
    "enumUtils",
    "getJSEnumSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = void 0;
    function s(e) {
      return o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        e == null
          ? void 0
          : e.map(function (e) {
              var t, n, a, i, l, s, u, c;
              return {
                action_type:
                  (t = o("enumUtils").coerceFromKey(
                    e.action_type,
                    r("AdsAPIAssetFeedTextActionType"),
                  )) != null
                    ? t
                    : void 0,
                asset_source: (n = e.asset_source) != null ? n : void 0,
                language: (a = e.language) != null ? a : void 0,
                target_audience: (i = e.target_audience) != null ? i : void 0,
                text: (l = e.text) != null ? l : void 0,
                text_gen_input_text:
                  (s = e.text_gen_input_text) != null ? s : void 0,
                text_gen_original_text:
                  (u = e.text_gen_original_text) != null ? u : void 0,
                uuid: (c = e.uuid) != null ? c : void 0,
              };
            }),
      );
    }
    function u(e) {
      var t, n, r, o, a;
      if (e != null) {
        var i = e.value;
        return {
          type: (t = e.type) != null ? t : void 0,
          value:
            i != null
              ? {
                  app_destination: (n = i.app_destination) != null ? n : void 0,
                  app_link: (r = i.app_link) != null ? r : void 0,
                  link: (o = i.link) != null ? o : void 0,
                  link_caption: (a = i.link_caption) != null ? a : void 0,
                }
              : void 0,
        };
      }
    }
    function c(t) {
      var n, a, l, c, m, p, _, f, y, C, b, v, S;
      if (t.__typename !== "Adgroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "Adgroup", got "%s when loading id %s"',
          t.__typename,
          t.id,
        );
      var R = t.tracking_and_conversion_with_defaults;
      return {
        account_id: o("TypeCoercionUtils").coerceNonMaybeValue(
          t.ad_account_legacy_account_id,
          "ad_account_legacy_account_id",
          i.id,
        ),
        ad_active_time: o("TypeCoercionUtils").coerceMaybeNumberToString(
          t.ad_active_time,
        ),
        ad_review_feedback: t.new_review_feedback
          ? g(t.new_review_feedback)
          : void 0,
        ad_schedule_end_time: (n = t.ad_schedule_end_time) != null ? n : void 0,
        ad_schedule_start_time:
          (a = t.ad_schedule_start_time) != null ? a : void 0,
        adgroup_status: void 0,
        adset:
          t.ad_campaign_id != null
            ? {
                id: o("TypeCoercionUtils").coerceNonMaybeValue(
                  t.ad_campaign_id,
                  "ad_campaign_id",
                  i.id,
                ),
                name: o("TypeCoercionUtils").coerceNonMaybeValue(
                  t.ad_campaign_name,
                  "ad_campaign_name",
                  i.id,
                ),
              }
            : void 0,
        adset_id: o("TypeCoercionUtils").coerceNonMaybeValue(
          t.ad_campaign_id,
          "ad_campaign_id",
          i.id,
        ),
        bid_amount: t.bid_amount_value,
        bid_info: o("TypeCoercionUtils").coerceObjectToUndefined(
          t.bid_info.reduce(function (e, t) {
            var n = o("enumUtils").coerce(
              o("TypeCoercionUtils").coerceNonMaybeValue(
                t.objective,
                "bid_info[].objective",
                i.id,
              ),
              r("AdsAPIBidInfoFields"),
            );
            return (
              (e[
                o("TypeCoercionUtils").coerceNonMaybeValue(n, "objective", i.id)
              ] = o("TypeCoercionUtils").coerceNonMaybeValue(
                t.amount,
                "bid_info[].amount",
                i.id,
              )),
              e
            );
          }, {}),
        ),
        bid_type: o("TypeCoercionUtils").coerceNonMaybeValue(
          r("getJSEnumSafe")(r("AdsAPIBidType"), t.bid_type),
          "bid_type",
          i.id,
        ),
        biz_ai_enabled_state: t.biz_ai_enabled_state,
        campaign_id: o("TypeCoercionUtils").coerceNonMaybeValue(
          t.ad_campaign_group_id,
          "ad_campaign_group_id",
          i.id,
        ),
        can_aggregate_social_feedback_on_edit: t.is_eligible_for_post_editing,
        conversion_domain: (l = t.conversion_domain) != null ? l : void 0,
        conversion_specs:
          (c = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.optimization_specs.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.conversion_action_query_spec,
                "optimization_specs[].conversion_action_query_spec",
                i.id,
              );
            }),
          )) != null
            ? c
            : void 0,
        created_time: (m = t.created_time_with_timezone) != null ? m : void 0,
        creative: h(t),
        creative_asset_groups_spec: t.creative_asset_groups_spec
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              groups: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                t.creative_asset_groups_spec.groups.map(function (e) {
                  var t, n, a, i;
                  return {
                    call_to_action:
                      (t =
                        (n = e.call_to_action) == null
                          ? void 0
                          : n.call_to_action_spec) != null
                        ? t
                        : void 0,
                    group_type: (a = e.group_type) != null ? a : void 0,
                    group_uuid: (i = e.group_uuid) != null ? i : void 0,
                    images: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.images.map(function (e) {
                        var t, n, a, i, l, s;
                        return {
                          hash: (t = e.hash) != null ? t : void 0,
                          image_crops:
                            (n = e.image_crops) != null &&
                            n.ad_image_crops_per_dimension_spec &&
                            (a = o("TypeCoercionUtils").coerceObjectToUndefined(
                              (i = e.image_crops) == null
                                ? void 0
                                : i.ad_image_crops_per_dimension_spec,
                            )) != null
                              ? a
                              : void 0,
                          source:
                            (l = o("enumUtils").coerceFromKey(
                              e.source,
                              r("AdsAPICreativeAssetImageSource"),
                            )) != null
                              ? l
                              : void 0,
                          url: (s = e.url) != null ? s : void 0,
                        };
                      }),
                    ),
                    long_texts: o(
                      "TypeCoercionUtils",
                    ).coerceEmptyArrayToUndefined(
                      e.long_texts.map(function (e) {
                        var t;
                        return { text: (t = e.text) != null ? t : void 0 };
                      }),
                    ),
                    posts: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.posts.map(function (e) {
                        var t, n, r, o, a;
                        return {
                          bodies: s(e.bodies),
                          body: (t = e.body) != null ? t : void 0,
                          call_to_action: u(
                            (n = e.call_to_action) == null
                              ? void 0
                              : n.call_to_action_spec,
                          ),
                          post_id: (r = e.post_id) != null ? r : void 0,
                          source_instagram_media_id:
                            (o = e.source_instagram_media_id) != null
                              ? o
                              : void 0,
                          title: (a = e.title) != null ? a : void 0,
                          titles: s(e.titles),
                        };
                      }),
                    ),
                    short_texts: o(
                      "TypeCoercionUtils",
                    ).coerceEmptyArrayToUndefined(
                      e.short_texts.map(function (e) {
                        var t;
                        return { text: (t = e.text) != null ? t : void 0 };
                      }),
                    ),
                    texts: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.texts.map(function (e) {
                        var t;
                        return {
                          text: r("isStringNullOrEmpty")(e.text)
                            ? void 0
                            : e.text,
                          text_type:
                            (t = r("getJSEnumSafe")(
                              r("AdsAPICreativeAssetTextTypeSpecFields"),
                              e.text_type,
                            )) != null
                              ? t
                              : void 0,
                        };
                      }),
                    ),
                    videos: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.videos.map(function (e) {
                        var t, n, a, i, l, s, u;
                        return {
                          image_hash: (t = e.image_hash) != null ? t : void 0,
                          image_url: (n = e.image_url) != null ? n : void 0,
                          source:
                            (a = o("enumUtils").coerceFromKey(
                              e.source,
                              r("AdsAPICreativeAssetImageSource"),
                            )) != null
                              ? a
                              : void 0,
                          thumbnail_id:
                            (i = e.thumbnail_id) != null ? i : void 0,
                          thumbnail_source:
                            (l = o("enumUtils").coerceFromKey(
                              (s = e.thumbnail_source) == null
                                ? void 0
                                : s.toUpperCase(),
                              r("VideoThumbnailSource"),
                            )) != null
                              ? l
                              : void 0,
                          video_id: (u = e.video_id) != null ? u : void 0,
                        };
                      }),
                    ),
                  };
                }),
              ),
              origins: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                (p = t.creative_asset_groups_spec) == null ||
                  (p = p.origins) == null
                  ? void 0
                  : p.map(function (e) {
                      var t;
                      return (t = r("getJSEnumSafe")(
                        r("AdsAPICreativeAssetGroupsSpecOrigin"),
                        e,
                      )) != null
                        ? t
                        : void 0;
                    }),
              ),
            })
          : void 0,
        creative_audience_pairing_persona: void 0,
        creative_automation_spec: t.creative_automation_spec
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              decision_type:
                (_ = t.creative_automation_spec.decision_type) != null
                  ? _
                  : void 0,
              enrollment_status:
                (f = t.creative_automation_spec.enrollment_status) != null
                  ? f
                  : void 0,
            })
          : void 0,
        creative_delivery_push: e,
        creative_link_url: (y = t.creative_link_url) != null ? y : void 0,
        delivery_info: null,
        delivery_status: null,
        demolink_hash: t.demo_link_hash,
        display_sequence: o("TypeCoercionUtils").coerceNonMaybeValue(
          t.display_sequence,
          "display_sequence",
          i.id,
        ),
        effective_status: t.effective_status,
        engagement_audience: t.engagement_audience,
        id: o("TypeCoercionUtils").coerceNonMaybeValue(t.id, "id", i.id),
        include_in_ad_study_cell_id: e,
        include_in_ad_study_id: t.include_in_ad_study_id,
        is_creative_flex_feature_aware: void 0,
        is_eligible_for_message_editing: t.is_eligible_for_message_editing,
        is_organic_ad_joint_optimized: void 0,
        last_updated_by_app_id: null,
        lightweight_split_test: null,
        lightweight_split_test_options: null,
        manual_review_requested: null,
        meta_reward_adgroup_status: o("TypeCoercionUtils").coerceNonMaybeValue(
          r("getJSEnumSafe")(
            r("MetaRewardAdgroupStatusForApi"),
            t.meta_reward_adgroup_status,
          ),
          "meta_reward_adgroup_status",
          i.id,
        ),
        metadata: d(t.metadata),
        name: o("TypeCoercionUtils").coerceNonMaybeValue(t.name, "name", i.id),
        naming_template_custom_fields:
          t.naming_template_custom_fields.length > 0
            ? t.naming_template_custom_fields.reduce(function (e, t) {
                return (
                  (e[
                    o("TypeCoercionUtils").coerceNonMaybeValue(
                      t.key,
                      "naming_template_custom_fields[].key",
                      i.id,
                    )
                  ] = t.value),
                  e
                );
              }, {})
            : void 0,
        placement: void 0,
        priority: t.priority,
        product_set_optimization_setting: null,
        related_media_user_opted_out: t.related_media_user_opted_out,
        review_config: void 0,
        shops_ads_metadata_tags:
          (C = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.shops_ads_metadata_tags,
          )) != null
            ? C
            : void 0,
        source_ad_id: (b = t.source_adgroup) == null ? void 0 : b.id,
        source_app_id: (v = t.source_app) == null ? void 0 : v.id,
        status: o("TypeCoercionUtils").coerceNonMaybeValue(
          t.status,
          "status",
          i.id,
        ),
        targeting: null,
        tracking_and_conversion_with_defaults: R
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              custom_conversion:
                R != null && R.custom_conversion
                  ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      R == null
                        ? void 0
                        : R.custom_conversion.map(function (e) {
                            return o(
                              "ConversionActionQuerySpecUtil",
                            ).coerceActionSpecDefaultFromConversionActionQuerySpec(
                              o("TypeCoercionUtils").coerceNonMaybeValue(
                                e.conversion_action_query_with_defaults_spec,
                                "tracking_and_conversion.custom_conversion[].conversion_action_query_with_defaults_spec",
                                i.id,
                              ),
                            );
                          }),
                    )
                  : void 0,
              custom_tracking:
                R != null && R.custom_tracking
                  ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      R == null
                        ? void 0
                        : R.custom_tracking.map(function (e) {
                            return o(
                              "ConversionActionQuerySpecUtil",
                            ).coerceActionSpecDefaultFromConversionActionQuerySpec(
                              o("TypeCoercionUtils").coerceNonMaybeValue(
                                e.conversion_action_query_with_defaults_spec,
                                "tracking_and_conversion.custom_tracking[].conversion_action_query_with_defaults_spec",
                                i.id,
                              ),
                            );
                          }),
                    )
                  : void 0,
              default_conversion:
                R != null && R.default_conversion
                  ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      R == null
                        ? void 0
                        : R.default_conversion.map(function (e) {
                            return o(
                              "ConversionActionQuerySpecUtil",
                            ).coerceActionSpecDefaultFromConversionActionQuerySpec(
                              o("TypeCoercionUtils").coerceNonMaybeValue(
                                e.conversion_action_query_with_defaults_spec,
                                "tracking_and_conversion.default_conversion[].conversion_action_query_with_defaults_spec",
                                i.id,
                              ),
                            );
                          }),
                    )
                  : void 0,
              default_tracking:
                R != null && R.default_tracking
                  ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      R == null
                        ? void 0
                        : R.default_tracking.map(function (e) {
                            return o(
                              "ConversionActionQuerySpecUtil",
                            ).coerceActionSpecDefaultFromConversionActionQuerySpec(
                              o("TypeCoercionUtils").coerceNonMaybeValue(
                                e.conversion_action_query_with_defaults_spec,
                                "tracking_and_conversion.default_tracking[].conversion_action_query_with_defaults_spec",
                                i.id,
                              ),
                            );
                          }),
                    )
                  : void 0,
            })
          : void 0,
        tracking_specs:
          (S = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.tracking_specs.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.conversion_action_query_spec,
                "tracking_specs[].conversion_action_query_spec",
                i.id,
              );
            }),
          )) != null
            ? S
            : void 0,
        updated_time: t.updated_time_with_timezone,
        view_tags: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          t.view_tags,
        ),
      };
    }
    function d(e) {
      var t, n, a, i, l, s;
      return e
        ? o("TypeCoercionUtils").coerceObjectToUndefined({
            ad_standard_enhancements_edit_source:
              e != null &&
              e.ad_standard_enhancements_edit_source &&
              (t = r("getJSEnumSafe")(
                r("AdCreativeStandardEnhancementsEditSourceType"),
                e.ad_standard_enhancements_edit_source,
              )) != null
                ? t
                : void 0,
            adgroup_creation_source:
              (n = e == null ? void 0 : e.adgroup_creation_source) != null
                ? n
                : void 0,
            adgroup_media_source:
              e != null &&
              e.adgroup_media_source &&
              (a = r("getJSEnumSafe")(
                r("AdGroupMediaSourceType"),
                e == null ? void 0 : e.adgroup_media_source,
              )) != null
                ? a
                : void 0,
            carousel_style:
              e != null &&
              e.carousel_style &&
              (i = r("getJSEnumSafe")(
                r("AdsCarouselStyleType"),
                e.carousel_style,
              )) != null
                ? i
                : void 0,
            carousel_with_static_card_style:
              e != null &&
              e.carousel_with_static_card_style &&
              (l = r("getJSEnumSafe")(
                r("AdsCarouselWithStaticCardType"),
                e.carousel_with_static_card_style,
              )) != null
                ? l
                : void 0,
            is_pca_unified_format_ad:
              (s = e == null ? void 0 : e.is_pca_unified_format_ad) != null
                ? s
                : void 0,
          })
        : void 0;
    }
    function m(e) {
      var t, n, a;
      if (e.__typename !== "Adgroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "Adgroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        account_id: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.ad_account_legacy_account_id,
          "ad_account_legacy_account_id",
          i.id,
        ),
        adset_id: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.ad_campaign_id,
          "ad_campaign_id",
          i.id,
        ),
        campaign_id: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.ad_campaign_group_id,
          "ad_campaign_group_id",
          i.id,
        ),
        creative: h(e),
        creative_asset_groups_spec: e.creative_asset_groups_spec
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              groups: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                e.creative_asset_groups_spec.groups.map(function (e) {
                  var t, n, a, i;
                  return {
                    call_to_action:
                      (t =
                        (n = e.call_to_action) == null
                          ? void 0
                          : n.call_to_action_spec) != null
                        ? t
                        : void 0,
                    group_type: (a = e.group_type) != null ? a : void 0,
                    group_uuid: (i = e.group_uuid) != null ? i : void 0,
                    images: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.images.map(function (e) {
                        var t, n, a, i, l, s;
                        return {
                          hash: (t = e.hash) != null ? t : void 0,
                          image_crops:
                            (n = e.image_crops) != null &&
                            n.ad_image_crops_per_dimension_spec &&
                            (a = o("TypeCoercionUtils").coerceObjectToUndefined(
                              (i = e.image_crops) == null
                                ? void 0
                                : i.ad_image_crops_per_dimension_spec,
                            )) != null
                              ? a
                              : void 0,
                          source:
                            (l = o("enumUtils").coerceFromKey(
                              e.source,
                              r("AdsAPICreativeAssetImageSource"),
                            )) != null
                              ? l
                              : void 0,
                          url: (s = e.url) != null ? s : void 0,
                        };
                      }),
                    ),
                    long_texts: o(
                      "TypeCoercionUtils",
                    ).coerceEmptyArrayToUndefined(
                      e.long_texts.map(function (e) {
                        var t;
                        return { text: (t = e.text) != null ? t : void 0 };
                      }),
                    ),
                    posts: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.posts.map(function (e) {
                        var t, n, r, o, a;
                        return {
                          bodies: s(e.bodies),
                          body: (t = e.body) != null ? t : void 0,
                          call_to_action: u(
                            (n = e.call_to_action) == null
                              ? void 0
                              : n.call_to_action_spec,
                          ),
                          post_id: (r = e.post_id) != null ? r : void 0,
                          source_instagram_media_id:
                            (o = e.source_instagram_media_id) != null
                              ? o
                              : void 0,
                          title: (a = e.title) != null ? a : void 0,
                          titles: s(e.titles),
                        };
                      }),
                    ),
                    short_texts: o(
                      "TypeCoercionUtils",
                    ).coerceEmptyArrayToUndefined(
                      e.short_texts.map(function (e) {
                        var t;
                        return { text: (t = e.text) != null ? t : void 0 };
                      }),
                    ),
                    texts: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.texts.map(function (e) {
                        var t;
                        return {
                          text: r("isStringNullOrEmpty")(e.text)
                            ? void 0
                            : e.text,
                          text_type:
                            (t = r("getJSEnumSafe")(
                              r("AdsAPICreativeAssetTextTypeSpecFields"),
                              e.text_type,
                            )) != null
                              ? t
                              : void 0,
                        };
                      }),
                    ),
                    videos: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.videos.map(function (e) {
                        var t, n, a, i, l, s, u;
                        return {
                          image_hash: (t = e.image_hash) != null ? t : void 0,
                          image_url: (n = e.image_url) != null ? n : void 0,
                          source:
                            (a = o("enumUtils").coerceFromKey(
                              e.source,
                              r("AdsAPICreativeAssetImageSource"),
                            )) != null
                              ? a
                              : void 0,
                          thumbnail_id:
                            (i = e.thumbnail_id) != null ? i : void 0,
                          thumbnail_source:
                            (l = o("enumUtils").coerceFromKey(
                              (s = e.thumbnail_source) == null
                                ? void 0
                                : s.toUpperCase(),
                              r("VideoThumbnailSource"),
                            )) != null
                              ? l
                              : void 0,
                          video_id: (u = e.video_id) != null ? u : void 0,
                        };
                      }),
                    ),
                  };
                }),
              ),
              origins: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                (t = e.creative_asset_groups_spec) == null ||
                  (t = t.origins) == null
                  ? void 0
                  : t.map(function (e) {
                      var t;
                      return (t = r("getJSEnumSafe")(
                        r("AdsAPICreativeAssetGroupsSpecOrigin"),
                        e,
                      )) != null
                        ? t
                        : void 0;
                    }),
              ),
            })
          : void 0,
        creative_automation_spec: e.creative_automation_spec
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              decision_type:
                (n = e.creative_automation_spec.decision_type) != null
                  ? n
                  : void 0,
              enrollment_status:
                (a = e.creative_automation_spec.enrollment_status) != null
                  ? a
                  : void 0,
            })
          : void 0,
        effective_status: e.effective_status,
        id: o("TypeCoercionUtils").coerceNonMaybeValue(e.id, "id", i.id),
        name: o("TypeCoercionUtils").coerceNonMaybeValue(e.name, "name", i.id),
        status: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.status,
          "status",
          i.id,
        ),
      };
    }
    function p(e) {
      var t, n, a;
      if (e.__typename !== "Adgroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "Adgroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        account_id: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.ad_account_legacy_account_id,
          "ad_account_legacy_account_id",
          i.id,
        ),
        creative: h(e),
        creative_asset_groups_spec: e.creative_asset_groups_spec
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              groups: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                e.creative_asset_groups_spec.groups.map(function (e) {
                  var t, n, a, i;
                  return {
                    call_to_action:
                      (t =
                        (n = e.call_to_action) == null
                          ? void 0
                          : n.call_to_action_spec) != null
                        ? t
                        : void 0,
                    group_type: (a = e.group_type) != null ? a : void 0,
                    group_uuid: (i = e.group_uuid) != null ? i : void 0,
                    images: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.images.map(function (e) {
                        var t, n, a, i, l, s;
                        return {
                          hash: (t = e.hash) != null ? t : void 0,
                          image_crops:
                            (n = e.image_crops) != null &&
                            n.ad_image_crops_per_dimension_spec &&
                            (a = o("TypeCoercionUtils").coerceObjectToUndefined(
                              (i = e.image_crops) == null
                                ? void 0
                                : i.ad_image_crops_per_dimension_spec,
                            )) != null
                              ? a
                              : void 0,
                          source:
                            (l = o("enumUtils").coerceFromKey(
                              e.source,
                              r("AdsAPICreativeAssetImageSource"),
                            )) != null
                              ? l
                              : void 0,
                          url: (s = e.url) != null ? s : void 0,
                        };
                      }),
                    ),
                    long_texts: o(
                      "TypeCoercionUtils",
                    ).coerceEmptyArrayToUndefined(
                      e.long_texts.map(function (e) {
                        var t;
                        return { text: (t = e.text) != null ? t : void 0 };
                      }),
                    ),
                    posts: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.posts.map(function (e) {
                        var t, n, r, o, a;
                        return {
                          bodies: s(e.bodies),
                          body: (t = e.body) != null ? t : void 0,
                          call_to_action: u(
                            (n = e.call_to_action) == null
                              ? void 0
                              : n.call_to_action_spec,
                          ),
                          post_id: (r = e.post_id) != null ? r : void 0,
                          source_instagram_media_id:
                            (o = e.source_instagram_media_id) != null
                              ? o
                              : void 0,
                          title: (a = e.title) != null ? a : void 0,
                          titles: s(e.titles),
                        };
                      }),
                    ),
                    short_texts: o(
                      "TypeCoercionUtils",
                    ).coerceEmptyArrayToUndefined(
                      e.short_texts.map(function (e) {
                        var t;
                        return { text: (t = e.text) != null ? t : void 0 };
                      }),
                    ),
                    texts: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.texts.map(function (e) {
                        var t;
                        return {
                          text: r("isStringNullOrEmpty")(e.text)
                            ? void 0
                            : e.text,
                          text_type:
                            (t = r("getJSEnumSafe")(
                              r("AdsAPICreativeAssetTextTypeSpecFields"),
                              e.text_type,
                            )) != null
                              ? t
                              : void 0,
                        };
                      }),
                    ),
                    videos: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.videos.map(function (e) {
                        var t, n, a, i, l, s, u;
                        return {
                          image_hash: (t = e.image_hash) != null ? t : void 0,
                          image_url: (n = e.image_url) != null ? n : void 0,
                          source:
                            (a = o("enumUtils").coerceFromKey(
                              e.source,
                              r("AdsAPICreativeAssetImageSource"),
                            )) != null
                              ? a
                              : void 0,
                          thumbnail_id:
                            (i = e.thumbnail_id) != null ? i : void 0,
                          thumbnail_source:
                            (l = o("enumUtils").coerceFromKey(
                              (s = e.thumbnail_source) == null
                                ? void 0
                                : s.toUpperCase(),
                              r("VideoThumbnailSource"),
                            )) != null
                              ? l
                              : void 0,
                          video_id: (u = e.video_id) != null ? u : void 0,
                        };
                      }),
                    ),
                  };
                }),
              ),
              origins: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                (t = e.creative_asset_groups_spec) == null ||
                  (t = t.origins) == null
                  ? void 0
                  : t.map(function (e) {
                      var t;
                      return (t = r("getJSEnumSafe")(
                        r("AdsAPICreativeAssetGroupsSpecOrigin"),
                        e,
                      )) != null
                        ? t
                        : void 0;
                    }),
              ),
            })
          : void 0,
        creative_automation_spec: e.creative_automation_spec
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              decision_type:
                (n = e.creative_automation_spec.decision_type) != null
                  ? n
                  : void 0,
              enrollment_status:
                (a = e.creative_automation_spec.enrollment_status) != null
                  ? a
                  : void 0,
            })
          : void 0,
        effective_status: e.effective_status,
        id: o("TypeCoercionUtils").coerceNonMaybeValue(e.id, "id", i.id),
        status: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.status,
          "status",
          i.id,
        ),
      };
    }
    function _(e) {
      var t,
        n,
        a,
        l,
        s,
        u,
        c,
        m,
        p,
        _,
        f,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $;
      if (e.__typename !== "Adgroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "Adgroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      var P = e.tracking_and_conversion_with_defaults;
      return {
        ad_active_time: o("TypeCoercionUtils").coerceMaybeNumberToString(
          e.ad_active_time,
        ),
        ad_review_feedback: e.new_review_feedback
          ? g(e.new_review_feedback)
          : void 0,
        ad_schedule_end_time: (t = e.ad_schedule_end_time) != null ? t : void 0,
        ad_schedule_start_time:
          (n = e.ad_schedule_start_time) != null ? n : void 0,
        adset:
          e.ad_campaign_id != null
            ? {
                id: o("TypeCoercionUtils").coerceNonMaybeValue(
                  e.ad_campaign_id,
                  "ad_campaign_id",
                  i.id,
                ),
                name: o("TypeCoercionUtils").coerceNonMaybeValue(
                  e.ad_campaign_name,
                  "ad_campaign_name",
                  i.id,
                ),
              }
            : void 0,
        bid_amount: e.bid_amount_value,
        bid_info: o("TypeCoercionUtils").coerceObjectToUndefined(
          e.bid_info.reduce(function (e, t) {
            var n = o("enumUtils").coerce(
              o("TypeCoercionUtils").coerceNonMaybeValue(
                t.objective,
                "bid_info[].objective",
                i.id,
              ),
              r("AdsAPIBidInfoFields"),
            );
            return (
              (e[
                o("TypeCoercionUtils").coerceNonMaybeValue(n, "objective", i.id)
              ] = o("TypeCoercionUtils").coerceNonMaybeValue(
                t.amount,
                "bid_info[].amount",
                i.id,
              )),
              e
            );
          }, {}),
        ),
        bid_type: o("TypeCoercionUtils").coerceNonMaybeValue(
          r("getJSEnumSafe")(r("AdsAPIBidType"), e.bid_type),
          "bid_type",
          i.id,
        ),
        biz_ai_enabled_state: e.biz_ai_enabled_state,
        can_aggregate_social_feedback_on_edit: e.is_eligible_for_post_editing,
        conversion_domain: (a = e.conversion_domain) != null ? a : void 0,
        conversion_specs:
          (l = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.optimization_specs.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.conversion_action_query_spec,
                "optimization_specs[].conversion_action_query_spec",
                i.id,
              );
            }),
          )) != null
            ? l
            : void 0,
        created_time: (s = e.created_time_with_timezone) != null ? s : void 0,
        creative_audience_pairing_persona:
          e.creative_audience_pairing_persona != null
            ? {
                age_max:
                  (u = e.creative_audience_pairing_persona.age_max) != null
                    ? u
                    : void 0,
                age_min:
                  (c = e.creative_audience_pairing_persona.age_min) != null
                    ? c
                    : void 0,
                genders: e.creative_audience_pairing_persona.genders.flatMap(
                  function (e) {
                    var t = o("enumUtils").coerce(e, r("AdsTargetingGender"));
                    return t != null ? [t] : [];
                  },
                ),
              }
            : void 0,
        creative_link_url: (m = e.creative_link_url) != null ? m : void 0,
        demolink_hash: e.demo_link_hash,
        display_sequence: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.display_sequence,
          "display_sequence",
          i.id,
        ),
        engagement_audience: e.engagement_audience,
        id: o("TypeCoercionUtils").coerceNonMaybeValue(e.id, "id", i.id),
        include_in_ad_study_id: e.include_in_ad_study_id,
        is_eligible_for_message_editing: e.is_eligible_for_message_editing,
        last_updated_by_app_id: null,
        lightweight_split_test: null,
        lightweight_split_test_options: null,
        meta_reward_adgroup_status: o("TypeCoercionUtils").coerceNonMaybeValue(
          r("getJSEnumSafe")(
            r("MetaRewardAdgroupStatusForApi"),
            e.meta_reward_adgroup_status,
          ),
          "meta_reward_adgroup_status",
          i.id,
        ),
        metadata: d(e.metadata),
        naming_template_custom_fields:
          e.naming_template_custom_fields.length > 0
            ? e.naming_template_custom_fields.reduce(function (e, t) {
                return (
                  (e[
                    o("TypeCoercionUtils").coerceNonMaybeValue(
                      t.key,
                      "naming_template_custom_fields[].key",
                      i.id,
                    )
                  ] = t.value),
                  e
                );
              }, {})
            : void 0,
        placement:
          e.placement != null
            ? {
                audience_network_positions: o(
                  "enumUtils",
                ).assertIterableFromKey(
                  (p =
                    (_ = e.placement) == null
                      ? void 0
                      : _.audience_network_positions) != null
                    ? p
                    : [],
                  r("AdsAPIAudienceNetworkPosition"),
                ),
                facebook_positions: o("enumUtils").assertIterableFromKey(
                  (f =
                    (h = e.placement) == null
                      ? void 0
                      : h.facebook_positions) != null
                    ? f
                    : [],
                  r("AdsAPIFacebookPosition"),
                ),
                instagram_positions: o("enumUtils").assertIterableFromKey(
                  (y =
                    (C = e.placement) == null
                      ? void 0
                      : C.instagram_positions) != null
                    ? y
                    : [],
                  r("AdsAPIInstagramPosition"),
                ),
                messenger_positions: o("enumUtils").assertIterableFromKey(
                  (b =
                    (v = e.placement) == null
                      ? void 0
                      : v.messenger_positions) != null
                    ? b
                    : [],
                  r("AdsAPIMessengerPosition"),
                ),
                oculus_positions: o("enumUtils").assertIterableFromKey(
                  (S =
                    (R = e.placement) == null ? void 0 : R.oculus_positions) !=
                    null
                    ? S
                    : [],
                  r("AdsAPIOculusPosition"),
                ),
                threads_positions: o("enumUtils").assertIterableFromKey(
                  (L =
                    (E = e.placement) == null ? void 0 : E.threads_positions) !=
                    null
                    ? L
                    : [],
                  r("AdsAPIThreadsPosition"),
                ),
                whatsapp_positions: o("enumUtils").assertIterableFromKey(
                  (k =
                    (I = e.placement) == null
                      ? void 0
                      : I.whatsapp_positions) != null
                    ? k
                    : [],
                  r("AdsAPIWhatsAppPosition"),
                ),
              }
            : void 0,
        priority: e.priority,
        related_media_user_opted_out: e.related_media_user_opted_out,
        shops_ads_metadata_tags:
          (T = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.shops_ads_metadata_tags,
          )) != null
            ? T
            : void 0,
        source_ad_id: (D = e.source_adgroup) == null ? void 0 : D.id,
        source_app_id: (x = e.source_app) == null ? void 0 : x.id,
        tracking_and_conversion_with_defaults: P
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              custom_conversion:
                P != null && P.custom_conversion
                  ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      P == null
                        ? void 0
                        : P.custom_conversion.map(function (e) {
                            return o(
                              "ConversionActionQuerySpecUtil",
                            ).coerceActionSpecDefaultFromConversionActionQuerySpec(
                              o("TypeCoercionUtils").coerceNonMaybeValue(
                                e.conversion_action_query_spec,
                                "tracking_and_conversion.custom_conversion[].conversion_action_query_spec",
                                i.id,
                              ),
                            );
                          }),
                    )
                  : void 0,
              custom_tracking:
                P != null && P.custom_tracking
                  ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      P == null
                        ? void 0
                        : P.custom_tracking.map(function (e) {
                            return o(
                              "ConversionActionQuerySpecUtil",
                            ).coerceActionSpecDefaultFromConversionActionQuerySpec(
                              o("TypeCoercionUtils").coerceNonMaybeValue(
                                e.conversion_action_query_spec,
                                "tracking_and_conversion.custom_tracking[].conversion_action_query_spec",
                                i.id,
                              ),
                            );
                          }),
                    )
                  : void 0,
              default_conversion:
                P != null && P.default_conversion
                  ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      P == null
                        ? void 0
                        : P.default_conversion.map(function (e) {
                            return o(
                              "ConversionActionQuerySpecUtil",
                            ).coerceActionSpecDefaultFromConversionActionQuerySpec(
                              o("TypeCoercionUtils").coerceNonMaybeValue(
                                e.conversion_action_query_spec,
                                "tracking_and_conversion.default_conversion[].conversion_action_query_spec",
                                i.id,
                              ),
                            );
                          }),
                    )
                  : void 0,
              default_tracking:
                P != null && P.default_tracking
                  ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      P == null
                        ? void 0
                        : P.default_tracking.map(function (e) {
                            return o(
                              "ConversionActionQuerySpecUtil",
                            ).coerceActionSpecDefaultFromConversionActionQuerySpec(
                              o("TypeCoercionUtils").coerceNonMaybeValue(
                                e.conversion_action_query_spec,
                                "tracking_and_conversion.default_tracking[].conversion_action_query_spec",
                                i.id,
                              ),
                            );
                          }),
                    )
                  : void 0,
            })
          : void 0,
        tracking_specs:
          ($ = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.tracking_specs.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.conversion_action_query_spec,
                "tracking_specs[].conversion_action_query_spec",
                i.id,
              );
            }),
          )) != null
            ? $
            : void 0,
        updated_time: e.updated_time_with_timezone,
        view_tags: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          e.view_tags,
        ),
      };
    }
    function f(e) {
      if (e.__typename !== "Adgroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "Adgroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        adset_id: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.ad_campaign_id,
          "ad_campaign_id",
          i.id,
        ),
        campaign_id: o("TypeCoercionUtils").coerceNonMaybeValue(
          e.ad_campaign_group_id,
          "ad_campaign_group_id",
          i.id,
        ),
        id: o("TypeCoercionUtils").coerceNonMaybeValue(e.id, "id", i.id),
        name: o("TypeCoercionUtils").coerceNonMaybeValue(e.name, "name", i.id),
      };
    }
    function g(e) {
      var t, n, r;
      return o("TypeCoercionUtils").coerceObjectToUndefined({
        global: o("TypeCoercionUtils").coerceObjectToUndefined(
          (t =
            e == null
              ? void 0
              : e.global_feedback.reduce(function (e, t) {
                  return (
                    t.disapproval_reason !== null &&
                      (e[
                        o("TypeCoercionUtils").coerceNonMaybeValue(
                          t.disapproval_reason,
                          "global_feedback[].disapproval_reason",
                          i.id,
                        )
                      ] = t.raw_reason),
                    e
                  );
                }, {})) != null
            ? t
            : {},
        ),
        placement_specific: o("TypeCoercionUtils").coerceObjectToUndefined(
          (n =
            e == null || (r = e.placement_specific_feedback) == null
              ? void 0
              : r.reduce(function (e, t) {
                  if (t.review_placement !== null) {
                    var n, r;
                    e[
                      o("TypeCoercionUtils").coerceNonMaybeValue(
                        t.review_placement,
                        "placement_specific_feedback[].review_placement",
                        i.id,
                      )
                    ] =
                      (n =
                        (r = t.review_feedback) == null
                          ? void 0
                          : r.reduce(function (e, t) {
                              return (
                                t.disapproval_reason !== null &&
                                  (e[
                                    o("TypeCoercionUtils").coerceNonMaybeValue(
                                      t.disapproval_reason,
                                      "placement_specific_feedback[].review_feedback[].disapproval_reason",
                                      i.id,
                                    )
                                  ] = t.raw_reason),
                                e
                              );
                            }, {})) != null
                        ? n
                        : void 0;
                  }
                  return e;
                }, {})) != null
            ? n
            : {},
        ),
      });
    }
    function h(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.adgroup_creative_spec;
      if (n)
        return babelHelpers.extends({}, n, {
          effective_instagram_media_id: e.effective_instagram_media_id,
          effective_instagram_story_id: e.effective_instagram_story_id,
          instagram_permalink_url: e.instagram_permalink_url,
          uca_draft_version: e.uca_draft_version,
        });
    }
    function y(e) {
      return o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        e.map(function (e) {
          var t, n;
          return {
            blame_field: o("TypeCoercionUtils").coerceEmptyStringToUndefined(
              e.blame_field,
            ),
            code: o("TypeCoercionUtils").coerceNonMaybeValue(
              e.code,
              "recommendations[].code",
              i.id,
            ),
            confidence: e.confidence,
            importance: e.importance,
            message: o("TypeCoercionUtils").coerceNonMaybeValue(
              e.message,
              "recommendations[].message",
              i.id,
            ),
            recommendation_data:
              ((t = e.recommendation_data) == null ? void 0 : t.link) != null
                ? {
                    link: o("TypeCoercionUtils").coerceNonMaybeValue(
                      (n = e.recommendation_data) == null ? void 0 : n.link,
                      "recommendations[].recommendation_data.link",
                      i.id,
                    ),
                  }
                : void 0,
            title: o("TypeCoercionUtils").coerceNonMaybeValue(
              e.title,
              "recommendations[].title",
              i.id,
            ),
          };
        }),
      );
    }
    function C(e) {
      var t, n, a, l, s;
      if (e.__typename !== "Adgroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "Adgroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        branded_content_post_publish_errors: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          e.branded_content_post_publish_errors.map(function (e) {
            var t, n, a, l, s, u;
            return {
              blame_field_spec:
                (t = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  e.blame_field_spec,
                )) != null
                  ? t
                  : void 0,
              error_code: o("TypeCoercionUtils").coerceNonMaybeValue(
                e.error_code,
                "branded_content_post_publish_errors[].error_code",
                i.id,
              ),
              error_description: (n = e.error_description) != null ? n : void 0,
              error_message: (a = e.error_message) != null ? a : void 0,
              error_placement:
                (l = r("getJSEnumSafe")(
                  r("AdsErrorPlacementTypes"),
                  e.error_placement,
                )) != null
                  ? l
                  : void 0,
              error_severity:
                (s = r("getJSEnumSafe")(
                  r("AdErrorSeverityTypes"),
                  e.error_severity,
                )) != null
                  ? s
                  : void 0,
              error_type: void 0,
              help_center_id:
                (u = o("TypeCoercionUtils").coerceEmptyStringToUndefined(
                  e.help_center_id,
                )) != null
                  ? u
                  : void 0,
              www_request_id: void 0,
            };
          }),
        ),
        delivery_info:
          e.delivery_info != null
            ? e.delivery_info.ad_delivery_info_spec
            : void 0,
        delivery_status:
          e.delivery_status != null
            ? e.delivery_status.ad_delivery_status_spec
            : void 0,
        effective_status:
          (t = o("enumUtils").coerceFromKey(
            e.effective_status,
            r("AdsEffectiveStatus"),
          )) != null
            ? t
            : void 0,
        issues_info:
          (n = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.issues_info.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.ad_issues_info_spec,
                "issues_info[].ad_issues_info_spec",
                i.id,
              );
            }),
          )) != null
            ? n
            : void 0,
        optimal_delivery_growth_opportunities:
          (a = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.optimal_delivery_growth_opportunities.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.ads_optimal_delivery_growth_opportunity_spec,
                "optimal_delivery_growth_opportunities[].ads_optimal_delivery_growth_opportunity_spec",
                i.id,
              );
            }),
          )) != null
            ? a
            : void 0,
        preview_link: (l = e.preview_link) != null ? l : void 0,
        recommendations: (s = y(e.recommendations)) != null ? s : void 0,
      };
    }
    function b(e) {
      if (e.__typename !== "Adgroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "Adgroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        delivery_status:
          e.delivery_status != null
            ? e.delivery_status.ad_delivery_status_spec
            : void 0,
      };
    }
    function v(e) {
      var t, n;
      if (e.__typename !== "Adgroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "Adgroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        issues_info:
          (t = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e == null || (n = e.issues_info) == null
              ? void 0
              : n.map(function (e) {
                  return o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.ad_issues_info_spec,
                    "issues_info[].ad_issues_info_spec",
                    i.id,
                  );
                }),
          )) != null
            ? t
            : void 0,
      };
    }
    function S(e) {
      var t, n, a, l;
      if (e.__typename !== "Adgroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "Adgroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        branded_content_post_publish_errors: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          e.branded_content_post_publish_errors.map(function (e) {
            var t, n, a, l, s, u;
            return {
              blame_field_spec:
                (t = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  e.blame_field_spec,
                )) != null
                  ? t
                  : void 0,
              error_code: o("TypeCoercionUtils").coerceNonMaybeValue(
                e.error_code,
                "branded_content_post_publish_errors[].error_code",
                i.id,
              ),
              error_description: (n = e.error_description) != null ? n : void 0,
              error_message: (a = e.error_message) != null ? a : void 0,
              error_placement:
                (l = r("getJSEnumSafe")(
                  r("AdsErrorPlacementTypes"),
                  e.error_placement,
                )) != null
                  ? l
                  : void 0,
              error_severity:
                (s = r("getJSEnumSafe")(
                  r("AdErrorSeverityTypes"),
                  e.error_severity,
                )) != null
                  ? s
                  : void 0,
              error_type: void 0,
              help_center_id:
                (u = o("TypeCoercionUtils").coerceEmptyStringToUndefined(
                  e.help_center_id,
                )) != null
                  ? u
                  : void 0,
              www_request_id: void 0,
            };
          }),
        ),
        delivery_info:
          e.delivery_info != null
            ? e.delivery_info.ad_delivery_info_spec
            : void 0,
        effective_status:
          (t = o("enumUtils").coerceFromKey(
            e.effective_status,
            r("AdsEffectiveStatus"),
          )) != null
            ? t
            : void 0,
        optimal_delivery_growth_opportunities:
          (n = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.optimal_delivery_growth_opportunities.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.ads_optimal_delivery_growth_opportunity_spec,
                "optimal_delivery_growth_opportunities[].ads_optimal_delivery_growth_opportunity_spec",
                i.id,
              );
            }),
          )) != null
            ? n
            : void 0,
        preview_link: (a = e.preview_link) != null ? a : void 0,
        recommendations: (l = y(e.recommendations)) != null ? l : void 0,
      };
    }
    function R(e) {
      var t;
      if (e.__typename !== "Adgroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "Adgroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return { preview_link: (t = e.preview_link) != null ? t : void 0 };
    }
    function L(e) {
      var t, n, a;
      if (e.__typename !== "Adgroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "Adgroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        branded_content_post_publish_errors: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          e.branded_content_post_publish_errors.map(function (e) {
            var t, n, a, l, s, u;
            return {
              blame_field_spec:
                (t = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  e.blame_field_spec,
                )) != null
                  ? t
                  : void 0,
              error_code: o("TypeCoercionUtils").coerceNonMaybeValue(
                e.error_code,
                "branded_content_post_publish_errors[].error_code",
                i.id,
              ),
              error_description: (n = e.error_description) != null ? n : void 0,
              error_message: (a = e.error_message) != null ? a : void 0,
              error_placement:
                (l = r("getJSEnumSafe")(
                  r("AdsErrorPlacementTypes"),
                  e.error_placement,
                )) != null
                  ? l
                  : void 0,
              error_severity:
                (s = r("getJSEnumSafe")(
                  r("AdErrorSeverityTypes"),
                  e.error_severity,
                )) != null
                  ? s
                  : void 0,
              error_type: void 0,
              help_center_id:
                (u = o("TypeCoercionUtils").coerceEmptyStringToUndefined(
                  e.help_center_id,
                )) != null
                  ? u
                  : void 0,
              www_request_id: void 0,
            };
          }),
        ),
        delivery_info:
          e.delivery_info != null
            ? e.delivery_info.ad_delivery_info_spec
            : void 0,
        effective_status:
          (t = o("enumUtils").coerceFromKey(
            e.effective_status,
            r("AdsEffectiveStatus"),
          )) != null
            ? t
            : void 0,
        optimal_delivery_growth_opportunities:
          (n = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.optimal_delivery_growth_opportunities.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                e.ads_optimal_delivery_growth_opportunity_spec,
                "optimal_delivery_growth_opportunities[].ads_optimal_delivery_growth_opportunity_spec",
                i.id,
              );
            }),
          )) != null
            ? n
            : void 0,
        recommendations: (a = y(e.recommendations)) != null ? a : void 0,
      };
    }
    function E(e) {
      var t;
      if (e.__typename !== "Adgroup")
        throw r("FBLogger")("am_frameworks").mustfixThrow(
          'Expected GraphQL object type "Adgroup", got "%s when loading id %s"',
          e.__typename,
          e.id,
        );
      return {
        creative: h(e),
        creative_asset_groups_spec: e.creative_asset_groups_spec
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              groups: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                e.creative_asset_groups_spec.groups.map(function (e) {
                  var t, n, a, i;
                  return {
                    call_to_action:
                      (t =
                        (n = e.call_to_action) == null
                          ? void 0
                          : n.call_to_action_spec) != null
                        ? t
                        : void 0,
                    group_type: (a = e.group_type) != null ? a : void 0,
                    group_uuid: (i = e.group_uuid) != null ? i : void 0,
                    images: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.images.map(function (e) {
                        var t, n, a, i, l, s;
                        return {
                          hash: (t = e.hash) != null ? t : void 0,
                          image_crops:
                            (n = e.image_crops) != null &&
                            n.ad_image_crops_per_dimension_spec &&
                            (a = o("TypeCoercionUtils").coerceObjectToUndefined(
                              (i = e.image_crops) == null
                                ? void 0
                                : i.ad_image_crops_per_dimension_spec,
                            )) != null
                              ? a
                              : void 0,
                          source:
                            (l = o("enumUtils").coerceFromKey(
                              e.source,
                              r("AdsAPICreativeAssetImageSource"),
                            )) != null
                              ? l
                              : void 0,
                          url: (s = e.url) != null ? s : void 0,
                        };
                      }),
                    ),
                    long_texts: o(
                      "TypeCoercionUtils",
                    ).coerceEmptyArrayToUndefined(
                      e.long_texts.map(function (e) {
                        var t;
                        return { text: (t = e.text) != null ? t : void 0 };
                      }),
                    ),
                    posts: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.posts.map(function (e) {
                        var t, n, r, o, a;
                        return {
                          bodies: s(e.bodies),
                          body: (t = e.body) != null ? t : void 0,
                          call_to_action: u(
                            (n = e.call_to_action) == null
                              ? void 0
                              : n.call_to_action_spec,
                          ),
                          post_id: (r = e.post_id) != null ? r : void 0,
                          source_instagram_media_id:
                            (o = e.source_instagram_media_id) != null
                              ? o
                              : void 0,
                          title: (a = e.title) != null ? a : void 0,
                          titles: s(e.titles),
                        };
                      }),
                    ),
                    short_texts: o(
                      "TypeCoercionUtils",
                    ).coerceEmptyArrayToUndefined(
                      e.short_texts.map(function (e) {
                        var t;
                        return { text: (t = e.text) != null ? t : void 0 };
                      }),
                    ),
                    texts: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.texts.map(function (e) {
                        var t;
                        return {
                          text: r("isStringNullOrEmpty")(e.text)
                            ? void 0
                            : e.text,
                          text_type:
                            (t = r("getJSEnumSafe")(
                              r("AdsAPICreativeAssetTextTypeSpecFields"),
                              e.text_type,
                            )) != null
                              ? t
                              : void 0,
                        };
                      }),
                    ),
                    videos: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.videos.map(function (e) {
                        var t, n, a, i, l, s, u;
                        return {
                          image_hash: (t = e.image_hash) != null ? t : void 0,
                          image_url: (n = e.image_url) != null ? n : void 0,
                          source:
                            (a = o("enumUtils").coerceFromKey(
                              e.source,
                              r("AdsAPICreativeAssetImageSource"),
                            )) != null
                              ? a
                              : void 0,
                          thumbnail_id:
                            (i = e.thumbnail_id) != null ? i : void 0,
                          thumbnail_source:
                            (l = o("enumUtils").coerceFromKey(
                              (s = e.thumbnail_source) == null
                                ? void 0
                                : s.toUpperCase(),
                              r("VideoThumbnailSource"),
                            )) != null
                              ? l
                              : void 0,
                          video_id: (u = e.video_id) != null ? u : void 0,
                        };
                      }),
                    ),
                  };
                }),
              ),
              origins: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                (t = e.creative_asset_groups_spec) == null ||
                  (t = t.origins) == null
                  ? void 0
                  : t.map(function (e) {
                      var t;
                      return (t = r("getJSEnumSafe")(
                        r("AdsAPICreativeAssetGroupsSpecOrigin"),
                        e,
                      )) != null
                        ? t
                        : void 0;
                    }),
              ),
            })
          : void 0,
      };
    }
    ((l.coerceGraphQLSpecToGraphAPI = c),
      (l.coerceGraphQLSpecToGraphAPITier1 = m),
      (l.coerceGraphQLSpecToGraphAPITier1V2 = p),
      (l.coerceGraphQLSpecToGraphAPITier2 = _),
      (l.coerceGraphQLSpecToGraphAPITier3 = f),
      (l.coerceDynamicGraphQLSpecToGraphAPI = C),
      (l.coerceDynamicGraphQLSpecTier1ToGraphAPI = b),
      (l.coerceDynamicGraphQLSpecTier2ToGraphAPI = v),
      (l.coerceDynamicGraphQLSpecTier3ToGraphAPI = S),
      (l.coerceDynamicGraphQLSpecTier3V2ToGraphAPI = R),
      (l.coerceDynamicGraphQLSpecTier4ToGraphAPI = L),
      (l.coerceGraphQLSpecToGraphAPIGroundTruth = E));
  },
  98,
);
