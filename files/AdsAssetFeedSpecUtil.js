__d(
  "AdsAssetFeedSpecUtil",
  [
    "AdsAPIAdAssetFeedOnsiteDestinationAutoOptimizationValues",
    "AdsAPIAdAssetFeedOnsiteDestinationSourceValues",
    "AdsAPIAudienceNetworkPosition",
    "AdsAPIDevicePlatform",
    "AdsAPIFacebookPosition",
    "AdsAPIInstagramPosition",
    "AdsAPIMessengerPosition",
    "AdsAPIOculusPosition",
    "AdsAPIPublisherPlatform",
    "AdsAPIThreadsPosition",
    "AdsAPIWhatsAppPosition",
    "AdsApiDayPartTimeZoneType",
    "AdsApiLeadGenEndComponentButtonType",
    "AdsCreativeAudiosOptInType",
    "AdsCreativeBadgeAppHighlightsFromProfileOptions",
    "AdsCreativeBadgeBrandHighlightsFromProfileOptions",
    "AdsCreativeBadgeBusinessInfoFromProfileOptions",
    "AdsCreativeBadgePaymentOptions",
    "AdsCreativeBadgeReturnPolicyWindowUnits",
    "AdsCreativeBadgeShippingPolicyWindowUnits",
    "AdsCreativeBadgeSocialCuesFromProfileOptions",
    "AdsCtwaConsentDataType",
    "AdsImageOverlayCustomTextTypes",
    "AdsLeadNurtureChannelType",
    "AdsLeadNurturingAgentStateOnAd",
    "AdsMessageExtensionType",
    "AdsUpcomingEventMetadataDateFormat",
    "AdsUpcomingEventMetadataDetectionSource",
    "AdsUpcomingEventMetadataDisabledReason",
    "ApiCarouselDeliveryMode",
    "ApiDynamicCreativeOptimizationAdFormat",
    "ApiDynamicCreativeOptimizationTypes",
    "AssetFeedTextAssetSource",
    "AssetFeedTextAutomationStatus",
    "AssetFeedTextOptionTrackingTag",
    "CallToActionTypes",
    "DynamicAdsImageOverlayPositions",
    "DynamicAdsImageOverlayTemplates",
    "DynamicAdsImageOverlayTextFonts",
    "DynamicAdsImageOverlayTextTypes",
    "DynamicAdsImageOverlayThemeColors",
    "TypeCoercionUtils",
    "VideoThumbnailSource",
    "enumUtils",
    "filterNulls",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = void 0,
      s = void 0;
    function u(t) {
      var n,
        a,
        l,
        s,
        u,
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
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z,
        j,
        K,
        Q,
        X,
        Y,
        J,
        Z,
        ee,
        te,
        ne,
        re,
        oe,
        ae,
        ie,
        le,
        se,
        ue,
        ce,
        de;
      return {
        ad_formats: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          t.ad_formats.map(function (e) {
            return o("TypeCoercionUtils").coerceNonMaybeValue(
              r("getJSEnumSafe")(
                r("ApiDynamicCreativeOptimizationAdFormat"),
                e,
              ),
              "ad_formats[]",
              i.id,
            );
          }),
        ),
        additional_data: d(t.additional_data),
        additional_image_index: e,
        app_product_page_id: (n = t.app_product_page_id) != null ? n : void 0,
        asset_customization_rules:
          (a = y(t.asset_customization_rules)) != null ? a : void 0,
        audios:
          (l = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.audios
              .map(function (e) {
                var t, n;
                return o(
                  "TypeCoercionUtils",
                ).coerceObjectWithNullAndEmptyArraysToUndefined({
                  is_audio_swap: (t = e.is_audio_swap) != null ? t : void 0,
                  selected_audios:
                    (n = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.selected_audios.map(function (e) {
                        var t, n;
                        return {
                          audio_asset_id: o(
                            "TypeCoercionUtils",
                          ).coerceNonMaybeValue(
                            e.audio_asset_id,
                            "audios[].selected_audios[].audio_asset_id",
                            i.id,
                          ),
                          label: (t = e.label) != null ? t : void 0,
                          start_time: (n = e.start_time) != null ? n : void 0,
                        };
                      }),
                    )) != null
                      ? n
                      : void 0,
                  type:
                    e.type == null
                      ? void 0
                      : o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerceFromKey(
                            o("TypeCoercionUtils").coerceNonMaybeValue(
                              e.type,
                              "audios[].type",
                              i.id,
                            ),
                            r("AdsCreativeAudiosOptInType"),
                          ),
                          "audios[].type",
                          i.id,
                        ),
                });
              })
              .filter(Boolean),
          )) != null
            ? l
            : void 0,
        autotranslate:
          (s = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.autotranslate,
          )) != null
            ? s
            : void 0,
        badge_sets: g(t.badge_sets),
        bodies:
          (u = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.bodies.map(function (e) {
              var t, n, a, l, s, u, c, d, m, p, _;
              return {
                action_type: (t = e.action_type) != null ? t : void 0,
                adlabels: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.adlabels,
                ),
                asset_source:
                  (n = r("getJSEnumSafe")(
                    r("AssetFeedTextAssetSource"),
                    e.asset_source,
                  )) != null
                    ? n
                    : void 0,
                automation_status:
                  (a = r("getJSEnumSafe")(
                    r("AssetFeedTextAutomationStatus"),
                    e.automation_status,
                  )) != null
                    ? a
                    : void 0,
                language: (l = e.language) != null ? l : void 0,
                target_audience: (s = e.target_audience) != null ? s : void 0,
                text: (u = e.text) != null ? u : void 0,
                text_gen_input_text:
                  (c = e.text_gen_input_text) != null ? c : void 0,
                text_gen_original_text:
                  (d = e.text_gen_original_text) != null ? d : void 0,
                tracking_tag: e.tracking_tag.map(function (e) {
                  return o("TypeCoercionUtils").coerceNonMaybeValue(
                    o("enumUtils").coerce(
                      e,
                      r("AssetFeedTextOptionTrackingTag"),
                    ),
                    "bodies[].tracking_tag[]",
                    i.id,
                  );
                }),
                translation_confidence:
                  (m = e.translation_confidence) != null ? m : void 0,
                url_tags: (p = e.url_tags) != null ? p : void 0,
                uuid: (_ = e.uuid) != null ? _ : void 0,
              };
            }),
          )) != null
            ? u
            : void 0,
        call_ads_configuration: c(t.call_ads_configuration),
        call_to_action_types:
          (C = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.call_to_action_types.map(function (e) {
              return o("TypeCoercionUtils").coerceNonMaybeValue(
                r("getJSEnumSafe")(r("CallToActionTypes"), e),
                "call_to_action_types[]",
                i.id,
              );
            }),
          )) != null
            ? C
            : void 0,
        call_to_actions:
          (b = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.call_to_actions.map(function (t) {
              var n,
                a,
                l,
                s,
                u,
                c,
                d,
                m,
                p,
                _,
                f,
                g,
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
              return {
                adlabels: o("TypeCoercionUtils").coerceIDNamePairArray(
                  t.adlabels,
                ),
                type:
                  t.type !== null
                    ? o("enumUtils").coerce(
                        o("TypeCoercionUtils").coerceNonMaybeValue(
                          t.type,
                          "call_to_actions[].type",
                          i.id,
                        ),
                        r("CallToActionTypes"),
                      )
                    : null,
                value: t.value
                  ? o("TypeCoercionUtils").coerceObjectToUndefined({
                      app_destination:
                        (n =
                          (a = t.value) == null ? void 0 : a.app_destination) !=
                        null
                          ? n
                          : void 0,
                      app_destination_page_id:
                        (l =
                          (s = t.value) == null
                            ? void 0
                            : s.app_destination_id) != null
                          ? l
                          : void 0,
                      app_link:
                        (u = (c = t.value) == null ? void 0 : c.app_link) !=
                        null
                          ? u
                          : void 0,
                      application:
                        (d = (m = t.value) == null ? void 0 : m.application) !=
                        null
                          ? d
                          : void 0,
                      event_id:
                        (p = (_ = t.value) == null ? void 0 : _.event_id) !=
                        null
                          ? p
                          : void 0,
                      group_id:
                        (f = (g = t.value) == null ? void 0 : g.group_id) !=
                        null
                          ? f
                          : void 0,
                      instagram_profile_cta_destination:
                        (h =
                          (y = t.value) == null
                            ? void 0
                            : y.instagram_profile_cta_destination) != null
                          ? h
                          : void 0,
                      lead_gen_form_id:
                        (C =
                          (b = t.value) == null
                            ? void 0
                            : b.lead_gen_form_id) != null
                          ? C
                          : void 0,
                      link:
                        (v = (S = t.value) == null ? void 0 : S.link) != null
                          ? v
                          : void 0,
                      link_caption:
                        (R = (L = t.value) == null ? void 0 : L.caption) != null
                          ? R
                          : void 0,
                      link_format:
                        (E = (k = t.value) == null ? void 0 : k.link_format) !=
                        null
                          ? E
                          : void 0,
                      object_store_urls: o(
                        "TypeCoercionUtils",
                      ).coerceEmptyArrayToUndefined(
                        (I = t.value) == null ? void 0 : I.object_store_urls,
                      ),
                      page:
                        (T = (D = t.value) == null ? void 0 : D.page_id) != null
                          ? T
                          : void 0,
                      product_id: e,
                      whatsapp_number:
                        (x =
                          ($ = t.value) == null ? void 0 : $.whatsapp_number) !=
                        null
                          ? x
                          : void 0,
                    })
                  : void 0,
              };
            }),
          )) != null
            ? b
            : void 0,
        captions:
          (v = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.captions.map(function (e) {
              var t, n;
              return o("TypeCoercionUtils").coerceObjectToUndefined({
                adlabels: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.adlabels,
                ),
                text: (t = e.text) != null ? t : void 0,
                url_tags: (n = e.url_tags) != null ? n : void 0,
              });
            }),
          )) != null
            ? v
            : void 0,
        carousels: f(t.carousels),
        collection_thumbnails: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          t.collection_thumbnails.map(function (e) {
            var t;
            return {
              element_child_index: o("TypeCoercionUtils").coerceNonMaybeValue(
                e.element_child_index,
                "collection_thumbnails[].element_child_index",
                i.id,
              ),
              element_crops: o("TypeCoercionUtils").coerceNonMaybeValue(
                (t = e.element_crops) == null
                  ? void 0
                  : t.ad_image_crops_per_dimension_spec,
                "collection_thumbnails[].element_crops.ad_image_crops_per_dimension_spec",
                i.id,
              ),
              element_id: o("TypeCoercionUtils").coerceNonMaybeValue(
                e.element_id,
                "collection_thumbnails[].element_id",
                i.id,
              ),
            };
          }),
        ),
        ctwa_consent_data: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          t.ctwa_consent_data.map(function (e) {
            var t, n;
            return {
              ctwa_anon_consent:
                (t = o("enumUtils").coerceFromKey(
                  e.ctwa_anon_consent,
                  r("AdsCtwaConsentDataType"),
                )) != null
                  ? t
                  : "none",
              ctwa_reporting_consent:
                (n = o("enumUtils").coerceFromKey(
                  e.ctwa_reporting_consent,
                  r("AdsCtwaConsentDataType"),
                )) != null
                  ? n
                  : "none",
            };
          }),
        ),
        descriptions: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          t.descriptions.map(function (e) {
            var t, n, a, i;
            return {
              adlabels: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.adlabels,
              ),
              asset_source:
                (t = r("getJSEnumSafe")(
                  r("AssetFeedTextAssetSource"),
                  e.asset_source,
                )) != null
                  ? t
                  : void 0,
              text: (n = e.text) != null ? n : void 0,
              translation_confidence:
                (a = e.translation_confidence) != null ? a : void 0,
              url_tags: (i = e.url_tags) != null ? i : void 0,
            };
          }),
        ),
        groups: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          t.groups.map(function (e) {
            var t, n, r, a, i, l, s;
            return {
              body_label:
                (t = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  e.body_label,
                )) != null
                  ? t
                  : void 0,
              caption_label:
                (n = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  e.caption_label,
                )) != null
                  ? n
                  : void 0,
              description_label:
                (r = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  e.description_label,
                )) != null
                  ? r
                  : void 0,
              image_label:
                (a = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  e.image_label,
                )) != null
                  ? a
                  : void 0,
              link_url_label:
                (i = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  e.link_url_label,
                )) != null
                  ? i
                  : void 0,
              title_label:
                (l = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  e.title_label,
                )) != null
                  ? l
                  : void 0,
              video_label:
                (s = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  e.video_label,
                )) != null
                  ? s
                  : void 0,
            };
          }),
        ),
        images: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          t.images.map(function (e) {
            var t, n, r, a, i, l, s;
            return {
              adlabels: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.adlabels,
              ),
              hash: (t = e.hash) != null ? t : void 0,
              image_crops:
                (n = e.image_crops) != null &&
                n.ad_image_crops_per_dimension_spec
                  ? o("TypeCoercionUtils").coerceObjectToUndefined(
                      (r = e.image_crops) == null
                        ? void 0
                        : r.ad_image_crops_per_dimension_spec,
                    )
                  : void 0,
              interactive_components_spec:
                ((a = e.interactive_components_spec) == null
                  ? void 0
                  : a.ad_creative_interactive_component_spec) != null
                  ? o("TypeCoercionUtils").coerceObjectToUndefined(
                      e.interactive_components_spec
                        .ad_creative_interactive_component_spec,
                    )
                  : void 0,
              portrait_customizations:
                (i = _(e.portrait_customizations)) != null ? i : void 0,
              url: (l = e.url) != null ? l : void 0,
              url_tags: (s = e.url_tags) != null ? s : void 0,
            };
          }),
        ),
        lead_gen_configuration: t.lead_gen_configuration
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              is_form_qa_enabled:
                (S =
                  (R = t.lead_gen_configuration) == null
                    ? void 0
                    : R.is_form_qa_enabled) != null
                  ? S
                  : void 0,
              is_work_email_enforcement_enabled:
                (L =
                  (E = t.lead_gen_configuration) == null
                    ? void 0
                    : E.is_work_email_enforcement_enabled) != null
                  ? L
                  : void 0,
              offsite_verification_type:
                (k =
                  (I = t.lead_gen_configuration) == null
                    ? void 0
                    : I.offsite_verification_type) != null
                  ? k
                  : void 0,
              verification_type:
                (T =
                  (D = t.lead_gen_configuration) == null
                    ? void 0
                    : D.verification_type) != null
                  ? T
                  : void 0,
            })
          : void 0,
        lead_gen_multi_destination: t.lead_gen_multi_destination
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              is_lead_capture_ai_agent_enabled:
                (x =
                  ($ = t.lead_gen_multi_destination) == null
                    ? void 0
                    : $.is_lead_capture_ai_agent_enabled) != null
                  ? x
                  : void 0,
            })
          : void 0,
        lead_nurture_channels: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          t.lead_nurture_channels.map(function (e) {
            var t, n, a, i, l, s, u, c, d, m, p, _, f;
            return {
              call_to_action:
                e != null && e.call_to_action
                  ? o("TypeCoercionUtils").coerceObjectToUndefined({
                      type:
                        (t = r("getJSEnumSafe")(
                          r("AdsApiLeadGenEndComponentButtonType"),
                          e == null || (n = e.call_to_action) == null
                            ? void 0
                            : n.type,
                        )) != null
                          ? t
                          : void 0,
                      value:
                        (a =
                          e == null || (i = e.call_to_action) == null
                            ? void 0
                            : i.value) != null
                          ? a
                          : void 0,
                    })
                  : void 0,
              channel:
                (l = r("getJSEnumSafe")(
                  r("AdsLeadNurtureChannelType"),
                  e == null ? void 0 : e.channel,
                )) != null
                  ? l
                  : void 0,
              destination_id:
                (s = e == null ? void 0 : e.destination_id) != null
                  ? s
                  : void 0,
              greeting_message:
                (u = e == null ? void 0 : e.greeting_message) != null
                  ? u
                  : void 0,
              ice_breakers:
                e != null && e.ice_breakers
                  ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e == null || (c = e.ice_breakers) == null
                        ? void 0
                        : c.map(function (e) {
                            var t, n;
                            return {
                              question:
                                (t = e == null ? void 0 : e.question) != null
                                  ? t
                                  : "",
                              response:
                                (n = e == null ? void 0 : e.response) != null
                                  ? n
                                  : void 0,
                            };
                          }),
                    )
                  : void 0,
              lead_nurturing_agent_state:
                (d = r("getJSEnumSafe")(
                  r("AdsLeadNurturingAgentStateOnAd"),
                  e == null ? void 0 : e.lead_nurturing_agent_state,
                )) != null
                  ? d
                  : void 0,
              page_whatsapp_number_id:
                (m = e == null ? void 0 : e.page_whatsapp_number_id) != null
                  ? m
                  : void 0,
              partner_app_welcome_message_flow_id:
                (p =
                  e == null ? void 0 : e.partner_app_welcome_message_flow_id) !=
                null
                  ? p
                  : void 0,
              whatsapp_business_asset_id:
                (_ = e == null ? void 0 : e.whatsapp_business_asset_id) != null
                  ? _
                  : void 0,
              whatsapp_business_phone_number_id:
                (f =
                  e == null ? void 0 : e.whatsapp_business_phone_number_id) !=
                null
                  ? f
                  : void 0,
            };
          }),
        ),
        link_urls:
          (P = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.link_urls.map(function (e) {
              var t, n, r, a, i, l, s, u;
              return {
                adlabels: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.adlabels,
                ),
                android_url: (t = e.android_url) != null ? t : void 0,
                deeplink_url: (n = e.deeplink_url) != null ? n : void 0,
                display_url: (r = e.display_url) != null ? r : void 0,
                ios_url: (a = e.ios_url) != null ? a : void 0,
                object_store_urls: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(e.object_store_urls),
                omnichannel_link_spec:
                  (i = e.omnichannel_link_spec) != null &&
                  i.omnichannel_link_spec_ad_object_spec
                    ? o("TypeCoercionUtils").coerceObjectToUndefined(
                        (l = e.omnichannel_link_spec) == null
                          ? void 0
                          : l.omnichannel_link_spec_ad_object_spec,
                      )
                    : void 0,
                url_tags: (s = e.url_tags) != null ? s : void 0,
                website_url: (u = e.website_url) != null ? u : void 0,
              };
            }),
          )) != null
            ? P
            : void 0,
        message_extensions: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          t.message_extensions.map(function (e) {
            var t;
            return {
              type:
                (t = o("enumUtils").coerceFromKey(
                  e.type,
                  r("AdsMessageExtensionType"),
                )) != null
                  ? t
                  : void 0,
            };
          }),
        ),
        onsite_destinations:
          (N = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.onsite_destinations.map(function (e) {
              var t, n, a, i, l;
              return {
                auto_optimization:
                  e.auto_optimization != null &&
                  (t = o("enumUtils").coerce(
                    e.auto_optimization,
                    r(
                      "AdsAPIAdAssetFeedOnsiteDestinationAutoOptimizationValues",
                    ),
                  )) != null
                    ? t
                    : void 0,
                details_page_product_id:
                  (n = e.details_page_product_id) != null ? n : void 0,
                shop_collection_product_set_id:
                  (a = e.shop_collection_product_set_id) != null ? a : void 0,
                source:
                  e.source != null &&
                  (i = o("enumUtils").coerce(
                    e.source,
                    r("AdsAPIAdAssetFeedOnsiteDestinationSourceValues"),
                  )) != null
                    ? i
                    : void 0,
                storefront_shop_id:
                  (l = e.storefront_shop_id) != null ? l : void 0,
              };
            }),
          )) != null
            ? N
            : void 0,
        optimization_type:
          t.optimization_type &&
          (M = o("enumUtils").coerce(
            t.optimization_type,
            r("ApiDynamicCreativeOptimizationTypes"),
          )) != null
            ? M
            : void 0,
        phone_data_ids:
          (w = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.phone_data_ids.map(function (e) {
              return { id: e.phone_data_id };
            }),
          )) != null
            ? w
            : void 0,
        post_click_configuration: m(t.post_click_configuration),
        posts:
          (A = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.posts.map(function (e) {
              var t, n;
              return {
                adlabels: o("TypeCoercionUtils").coerceIDNamePairArray(
                  e.adlabels,
                ),
                post_id: (t = e.post_id) != null ? t : void 0,
                source_instagram_media_id:
                  (n = e.source_instagram_media_id) != null ? n : void 0,
              };
            }),
          )) != null
            ? A
            : void 0,
        product_discount_id: (F = t.product_discount_id) != null ? F : void 0,
        promotional_metadata: t.promotional_metadata
          ? {
              allowed_coupon_code_sources: o(
                "TypeCoercionUtils",
              ).coerceEmptyArrayToUndefined(
                (O = t.promotional_metadata) == null
                  ? void 0
                  : O.allowed_coupon_code_sources,
              ),
              allowed_promo_offer_ids: o(
                "TypeCoercionUtils",
              ).coerceEmptyArrayToUndefined(
                (B = t.promotional_metadata) == null
                  ? void 0
                  : B.allowed_promo_offer_ids,
              ),
              coupon_codes:
                (W = o("TypeCoercionUtils").coerceObjectToUndefined(
                  p(
                    (q = t.promotional_metadata) == null
                      ? void 0
                      : q.coupon_codes_by_source,
                  ),
                )) != null
                  ? W
                  : void 0,
              excluded_offers: o(
                "TypeCoercionUtils",
              ).coerceEmptyArrayToUndefined(
                (U = t.promotional_metadata) == null
                  ? void 0
                  : U.excluded_offers,
              ),
              is_auto_update_allowed:
                (V =
                  (H = t.promotional_metadata) == null
                    ? void 0
                    : H.is_auto_update_allowed) != null
                  ? V
                  : void 0,
              manual_coupon_codes: o(
                "TypeCoercionUtils",
              ).coerceEmptyArrayToUndefined(
                (G = t.promotional_metadata) == null
                  ? void 0
                  : G.manual_coupon_codes,
              ),
              offer_details:
                (z = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  (j = t.promotional_metadata) == null ||
                    (j = j.offer_details) == null
                    ? void 0
                    : j.map(function (e) {
                        var t, n, r, a, i, l, s, u, c;
                        return {
                          applicable_channels: o(
                            "TypeCoercionUtils",
                          ).coerceEmptyArrayToUndefined(e.applicable_channels),
                          barcode_format:
                            (t = e.barcode_format) != null ? t : void 0,
                          coupon_code: (n = e.coupon_code) != null ? n : void 0,
                          detection_source:
                            (r = e.detection_source) != null ? r : void 0,
                          disclaimer_text:
                            (a = e.disclaimer_text) != null ? a : void 0,
                          disclaimer_url:
                            (i = e.disclaimer_url) != null ? i : void 0,
                          end_time: (l = e.end_time) != null ? l : void 0,
                          promotional_type:
                            (s = e.promotional_type) != null ? s : void 0,
                          promotional_value:
                            (u = e.promotional_value) != null ? u : void 0,
                          title: (c = e.title) != null ? c : void 0,
                        };
                      }),
                )) != null
                  ? z
                  : void 0,
              product_catalog_id:
                (K =
                  (Q = t.promotional_metadata) == null
                    ? void 0
                    : Q.product_catalog_id) != null
                  ? K
                  : void 0,
              product_catalog_id_for_email_capture:
                (X =
                  (Y = t.promotional_metadata) == null
                    ? void 0
                    : Y.product_catalog_id_for_email_capture) != null
                  ? X
                  : void 0,
            }
          : void 0,
        reasons_to_shop: (J = t.reasons_to_shop) != null ? J : void 0,
        retailer_item_ids:
          (Z = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.retailer_item_ids,
          )) != null
            ? Z
            : void 0,
        shops_bundle: (ee = t.shops_bundle) != null ? ee : void 0,
        target_rules: (te = h(t.target_rules)) != null ? te : void 0,
        titles: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          t.titles.map(function (e) {
            var t, n, a, i, l, s, u, c, d, m;
            return {
              action_type: (t = e.action_type) != null ? t : void 0,
              adlabels: o("TypeCoercionUtils").coerceIDNamePairArray(
                e.adlabels,
              ),
              asset_source:
                (n = r("getJSEnumSafe")(
                  r("AssetFeedTextAssetSource"),
                  e.asset_source,
                )) != null
                  ? n
                  : void 0,
              language: (a = e.language) != null ? a : void 0,
              target_audience: (i = e.target_audience) != null ? i : void 0,
              text: (l = e.text) != null ? l : void 0,
              text_gen_input_text:
                (s = e.text_gen_input_text) != null ? s : void 0,
              text_gen_original_text:
                (u = e.text_gen_original_text) != null ? u : void 0,
              translation_confidence:
                (c = e.translation_confidence) != null ? c : void 0,
              url_tags: (d = e.url_tags) != null ? d : void 0,
              uuid: (m = e.uuid) != null ? m : void 0,
            };
          }),
        ),
        translations: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          (ne = t.translations.map(function (e) {
            var t, n, o, a;
            return {
              asset_source:
                (t = r("getJSEnumSafe")(
                  r("AssetFeedTextAssetSource"),
                  e.asset_source,
                )) != null
                  ? t
                  : void 0,
              language: (n = e.language) != null ? n : void 0,
              text: (o = e.text) != null ? o : void 0,
              text_gen_input_text:
                (a = e.text_gen_input_text) != null ? a : void 0,
            };
          })) != null
            ? ne
            : void 0,
        ),
        upcoming_event_metadata: t.upcoming_event_metadata
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              date_format:
                (re = r("getJSEnumSafe")(
                  r("AdsUpcomingEventMetadataDateFormat"),
                  (oe = t.upcoming_event_metadata) == null
                    ? void 0
                    : oe.date_format,
                )) != null
                  ? re
                  : void 0,
              detection_source:
                (ae = r("getJSEnumSafe")(
                  r("AdsUpcomingEventMetadataDetectionSource"),
                  (ie = t.upcoming_event_metadata) == null
                    ? void 0
                    : ie.detection_source,
                )) != null
                  ? ae
                  : void 0,
              disabled_reasons: o(
                "TypeCoercionUtils",
              ).coerceEmptyArrayToUndefined(
                r("filterNulls")(
                  (le =
                    (se = t.upcoming_event_metadata) == null
                      ? void 0
                      : se.disabled_reasons.map(function (e) {
                          return r("getJSEnumSafe")(
                            r("AdsUpcomingEventMetadataDisabledReason"),
                            e,
                          );
                        })) != null
                    ? le
                    : [],
                ),
              ),
              event_dates: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                (ue = t.upcoming_event_metadata) == null
                  ? void 0
                  : ue.event_dates,
              ),
            })
          : void 0,
        upcoming_events:
          (ce = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.upcoming_events.map(function (e) {
              var t, n, r, o, a, i, l;
              return {
                end_time: (t = e.end_time) != null ? t : void 0,
                event_id: (n = e.event_id) != null ? n : void 0,
                event_title: (r = e.event_title) != null ? r : void 0,
                start_time: (o = e.start_time) != null ? o : void 0,
                updated_time: (a = e.updated_time) != null ? a : void 0,
                use_remind_me_cta:
                  (i = e.use_remind_me_cta) != null ? i : void 0,
                use_remind_me_cta_for_preview:
                  (l = e.use_remind_me_cta_for_preview) != null ? l : void 0,
              };
            }),
          )) != null
            ? ce
            : void 0,
        videos:
          (de = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t.videos.map(function (t) {
              var n, a, l, s, u, c, d;
              return {
                adlabels: o("TypeCoercionUtils").coerceIDNamePairArray(
                  t.adlabels,
                ),
                caption_ids:
                  (n = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                    t.caption_ids,
                  )) != null
                    ? n
                    : void 0,
                interactive_components_spec:
                  ((a = t.interactive_components_spec) == null
                    ? void 0
                    : a.ad_creative_interactive_component_spec) != null
                    ? o("TypeCoercionUtils").coerceObjectToUndefined(
                        t.interactive_components_spec
                          .ad_creative_interactive_component_spec,
                      )
                    : void 0,
                portrait_customizations:
                  (l = _(t.portrait_customizations)) != null ? l : void 0,
                thumbnail_hash: (s = t.thumbnail_hash) != null ? s : void 0,
                thumbnail_id: e,
                thumbnail_source:
                  t.thumbnail_source !== null
                    ? o("enumUtils").coerce(
                        o("TypeCoercionUtils").coerceNonMaybeValue(
                          t.thumbnail_source,
                          "videos[].thumbnail_source",
                          i.id,
                        ),
                        r("VideoThumbnailSource"),
                      )
                    : void 0,
                thumbnail_url: (u = t.thumbnail_url) != null ? u : void 0,
                url_tags: (c = t.url_tags) != null ? c : void 0,
                video_id: (d = t.video_id) != null ? d : void 0,
              };
            }),
          )) != null
            ? de
            : void 0,
        web_destination_spec: o(
          "TypeCoercionUtils",
        ).coerceObjectWithNullAndEmptyArraysToUndefined(t.web_destination_spec),
      };
    }
    function c(e) {
      var t, n, a, l, s, u, c, d, m, p, _;
      return e
        ? o("TypeCoercionUtils").coerceObjectToUndefined({
            agent_greeting:
              (t = e == null ? void 0 : e.agent_greeting) != null ? t : void 0,
            auto_response:
              (n = e == null ? void 0 : e.auto_response) != null ? n : void 0,
            bizai_config:
              (a = e == null ? void 0 : e.bizai_config) != null ? a : void 0,
            business_hours: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              ((l = e == null ? void 0 : e.business_hours) != null
                ? l
                : []
              ).map(function (e) {
                return {
                  days: [].concat(e.days),
                  end_minute: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.end_minute,
                    "call_ads_configuration.business_hours[].end_minute",
                    i.id,
                  ),
                  start_minute: o("TypeCoercionUtils").coerceNonMaybeValue(
                    e.start_minute,
                    "call_ads_configuration.business_hours[].start_minute",
                    i.id,
                  ),
                  timezone_type: o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumSafe")(
                      r("AdsApiDayPartTimeZoneType"),
                      e.timezone_type,
                    ),
                    "call_ads_configuration.business_hours[].timezone_type",
                    i.id,
                  ),
                };
              }),
            ),
            call_destination_type:
              (s = e == null ? void 0 : e.call_destination_type) != null
                ? s
                : void 0,
            call_forwarding:
              (u = e == null ? void 0 : e.call_forwarding) != null ? u : void 0,
            call_transcript:
              (c = e == null ? void 0 : e.call_transcript) != null ? c : void 0,
            callback_type:
              (d = e == null ? void 0 : e.callback_type) != null ? d : void 0,
            greeting_audio_url:
              (m = e == null ? void 0 : e.greeting_audio_url) != null
                ? m
                : void 0,
            phone_number:
              (p = e == null ? void 0 : e.phone_number) != null ? p : void 0,
            recording_consent:
              (_ = e == null ? void 0 : e.recording_consent) != null
                ? _
                : void 0,
          })
        : void 0;
    }
    function d(e) {
      var t, n, r, a, l, s, u, c, d, m, p, _, f, g, h, y;
      return e
        ? o("TypeCoercionUtils").coerceObjectToUndefined({
            app_destination_metadata:
              (t = e == null ? void 0 : e.app_destination_metadata) != null
                ? t
                : void 0,
            brand_page_id:
              (n = e == null ? void 0 : e.brand_page_id) != null ? n : void 0,
            group_id:
              (r = e == null ? void 0 : e.group_id) != null ? r : void 0,
            is_click_to_message:
              (a = e == null ? void 0 : e.is_click_to_message_optional) != null
                ? a
                : void 0,
            is_crm_delivery_enabled:
              (l = e == null ? void 0 : e.is_crm_delivery_enabled) != null
                ? l
                : void 0,
            is_pbia_messaging_enabled:
              (s = e == null ? void 0 : e.is_pbia_messaging_enabled_optional) !=
              null
                ? s
                : void 0,
            is_smart_app_promotion:
              (u = e == null ? void 0 : e.is_smart_app_promotion_optional) !=
              null
                ? u
                : void 0,
            multi_share_end_card:
              (c = e == null ? void 0 : e.multi_share_end_card_optional) != null
                ? c
                : void 0,
            page_private_reply:
              (d = e == null ? void 0 : e.page_private_reply) != null
                ? d
                : void 0,
            page_welcome_message:
              (m = e == null ? void 0 : e.page_welcome_message) != null
                ? m
                : void 0,
            page_whatsapp_number_id:
              (p = e == null ? void 0 : e.page_whatsapp_number_id) != null
                ? p
                : void 0,
            partner_app_welcome_message_flow_id:
              (_ =
                e == null ? void 0 : e.partner_app_welcome_message_flow_id) !=
              null
                ? _
                : void 0,
            product_discount_id:
              (f = e == null ? void 0 : e.product_discount_id) != null
                ? f
                : void 0,
            reward_info:
              e != null && e.reward_info
                ? {
                    reward_offer_id:
                      (g =
                        e == null || (h = e.reward_info) == null
                          ? void 0
                          : h.reward_offer_id) != null
                        ? g
                        : void 0,
                    reward_program_id: o(
                      "TypeCoercionUtils",
                    ).coerceNonMaybeValue(
                      e == null || (y = e.reward_info) == null
                        ? void 0
                        : y.reward_program_id,
                      "additional_data.reward_info.reward_program_id",
                      i.id,
                    ),
                  }
                : void 0,
          })
        : void 0;
    }
    function m(e) {
      var t, n, a, i, l, s, u, c, d, m, p, _, f, g, h, y;
      return e
        ? {
            image_overlay_spec: e.image_overlay_spec
              ? {
                  custom_text_type:
                    e != null &&
                    (t = e.image_overlay_spec) != null &&
                    t.custom_text_type &&
                    (n = o("enumUtils").coerceFromKey(
                      e.image_overlay_spec.custom_text_type,
                      r("AdsImageOverlayCustomTextTypes"),
                    )) != null
                      ? n
                      : void 0,
                  float_with_margin:
                    (a =
                      e == null || (i = e.image_overlay_spec) == null
                        ? void 0
                        : i.float_with_margin) != null
                      ? a
                      : void 0,
                  overlay_template:
                    e != null &&
                    (l = e.image_overlay_spec) != null &&
                    l.overlay_template &&
                    (s = o("enumUtils").coerceFromKey(
                      e.image_overlay_spec.overlay_template,
                      r("DynamicAdsImageOverlayTemplates"),
                    )) != null
                      ? s
                      : void 0,
                  position:
                    e != null &&
                    (u = e.image_overlay_spec) != null &&
                    u.position &&
                    (c = o("enumUtils").coerceFromKey(
                      e.image_overlay_spec.position,
                      r("DynamicAdsImageOverlayPositions"),
                    )) != null
                      ? c
                      : void 0,
                  text_font:
                    e != null &&
                    (d = e.image_overlay_spec) != null &&
                    d.text_font &&
                    (m = o("enumUtils").coerceFromKey(
                      e.image_overlay_spec.text_font,
                      r("DynamicAdsImageOverlayTextFonts"),
                    )) != null
                      ? m
                      : void 0,
                  text_template_tags:
                    e != null &&
                    (p = e.image_overlay_spec) != null &&
                    p.text_template_tags &&
                    (_ = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      e.image_overlay_spec.text_template_tags,
                    )) != null
                      ? _
                      : void 0,
                  text_type:
                    e != null &&
                    (f = e.image_overlay_spec) != null &&
                    f.text_type &&
                    (g = o("enumUtils").coerceFromKey(
                      e.image_overlay_spec.text_type,
                      r("DynamicAdsImageOverlayTextTypes"),
                    )) != null
                      ? g
                      : void 0,
                  theme_color:
                    e != null &&
                    (h = e.image_overlay_spec) != null &&
                    h.theme_color &&
                    (y = o("enumUtils").coerceFromKey(
                      e.image_overlay_spec.theme_color,
                      r("DynamicAdsImageOverlayThemeColors"),
                    )) != null
                      ? y
                      : void 0,
                }
              : void 0,
            post_click_item_description:
              e == null ? void 0 : e.post_click_item_description,
            post_click_item_headline:
              e == null ? void 0 : e.post_click_item_headline,
          }
        : void 0;
    }
    function p(e) {
      var t = {};
      return (
        e == null ||
          e.forEach(function (e) {
            if (e.source != null && e.codes.length > 0) {
              var n = e.source,
                r = e.codes;
              switch (n) {
                case "AD_CREATIVE_DESCRIPTION":
                  t.ad_creative_description != null
                    ? (t = babelHelpers.extends({}, t, {
                        ad_creative_description:
                          t.ad_creative_description.concat(r),
                      }))
                    : (t = babelHelpers.extends({}, t, {
                        ad_creative_description: [].concat(r),
                      }));
                  break;
                case "AD_CREATIVE_HEADLINE":
                  t.ad_creative_headline != null
                    ? (t = babelHelpers.extends({}, t, {
                        ad_creative_headline: t.ad_creative_headline.concat(r),
                      }))
                    : (t = babelHelpers.extends({}, t, {
                        ad_creative_headline: [].concat(r),
                      }));
                  break;
                case "AD_CREATIVE_MANUAL_COUPON_CODES":
                  t.ad_creative_manual_coupon_codes != null
                    ? (t = babelHelpers.extends({}, t, {
                        ad_creative_manual_coupon_codes:
                          t.ad_creative_manual_coupon_codes.concat(r),
                      }))
                    : (t = babelHelpers.extends({}, t, {
                        ad_creative_manual_coupon_codes: [].concat(r),
                      }));
                  break;
                case "AD_CREATIVE_PRIMARY_TEXT":
                  t.ad_creative_primary_text != null
                    ? (t = babelHelpers.extends({}, t, {
                        ad_creative_primary_text:
                          t.ad_creative_primary_text.concat(r),
                      }))
                    : (t = babelHelpers.extends({}, t, {
                        ad_creative_primary_text: [].concat(r),
                      }));
                  break;
                case "DETECTED_FROM_MERCHANT_WEBSITE":
                  t.detected_from_merchant_website != null
                    ? (t = babelHelpers.extends({}, t, {
                        detected_from_merchant_website:
                          t.detected_from_merchant_website.concat(r),
                      }))
                    : (t = babelHelpers.extends({}, t, {
                        detected_from_merchant_website: [].concat(r),
                      }));
                  break;
                case "DETECTED_FROM_MERCHANT_WEBSITE_URL":
                  t.detected_from_merchant_website_url != null
                    ? (t = babelHelpers.extends({}, t, {
                        detected_from_merchant_website_url:
                          t.detected_from_merchant_website_url.concat(r),
                      }))
                    : (t = babelHelpers.extends({}, t, {
                        detected_from_merchant_website_url: [].concat(r),
                      }));
                  break;
                default:
                  break;
              }
            }
          }),
        t
      );
    }
    function _(e) {
      var t, n;
      return e
        ? {
            carousel_delivery_mode:
              (t = o("enumUtils").coerceFromKey(
                e == null ? void 0 : e.carousel_delivery_mode,
                r("ApiCarouselDeliveryMode"),
              )) != null
                ? t
                : void 0,
            specifications:
              (n = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                o("TypeCoercionUtils")
                  .coerceNonMaybeValue(
                    e == null ? void 0 : e.specifications,
                    "portrait_customizations.specifications",
                    i.id,
                  )
                  .map(function (e) {
                    var t, n, r, o;
                    return {
                      background_color: e.background_color
                        ? {
                            bottom_color:
                              (t =
                                (n = e.background_color) == null
                                  ? void 0
                                  : n.bottom_color) != null
                                ? t
                                : void 0,
                            top_color:
                              (r =
                                (o = e.background_color) == null
                                  ? void 0
                                  : o.top_color) != null
                                ? r
                                : void 0,
                          }
                        : void 0,
                    };
                  }),
              )) != null
                ? n
                : void 0,
          }
        : void 0;
    }
    function f(e) {
      var t;
      return (t = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        e.map(function (e) {
          return {
            adlabels: o("TypeCoercionUtils").coerceIDNamePairArray(e.adlabels),
            child_attachments: o(
              "TypeCoercionUtils",
            ).coerceEmptyArrayToUndefined(
              e.child_attachments.map(function (e) {
                var t, n, r, a, i, l, s;
                return {
                  body_label:
                    (t = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                      e.body_label,
                    )) != null
                      ? t
                      : void 0,
                  call_to_action_type_label:
                    (n = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                      e.call_to_action_type_label,
                    )) != null
                      ? n
                      : void 0,
                  description_label:
                    (r = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                      e.description_label,
                    )) != null
                      ? r
                      : void 0,
                  image_label:
                    (a = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                      e.image_label,
                    )) != null
                      ? a
                      : void 0,
                  link_url_label:
                    (i = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                      e.link_url_label,
                    )) != null
                      ? i
                      : void 0,
                  title_label:
                    (l = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                      e.title_label,
                    )) != null
                      ? l
                      : void 0,
                  video_label:
                    (s = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                      e.video_label,
                    )) != null
                      ? s
                      : void 0,
                };
              }),
            ),
            multi_share_end_card: e.multi_share_end_card,
            multi_share_optimized: e.multi_share_optimized,
          };
        }),
      )) != null
        ? t
        : void 0;
    }
    function g(e) {
      var t;
      return (t = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        e.map(function (e) {
          var t, n, a, l, s, u, c, d;
          return {
            app_highlights_from_profile: e.app_highlights_from_profile
              ? {
                  selected_app_highlights_info_options:
                    e.app_highlights_from_profile.selected_app_highlights_info_options.map(
                      function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerceFromKey(
                            e,
                            r(
                              "AdsCreativeBadgeAppHighlightsFromProfileOptions",
                            ),
                          ),
                          "badge_set[].app_highlights_from_profile.selected_app_highlights_info_options[].option",
                          i.id,
                        );
                      },
                    ),
                }
              : void 0,
            brand_highlights_from_profile: e.brand_highlights_from_profile
              ? {
                  selected_brand_highlights_info_options:
                    e.brand_highlights_from_profile.selected_brand_highlights_info_options.map(
                      function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerceFromKey(
                            e,
                            r(
                              "AdsCreativeBadgeBrandHighlightsFromProfileOptions",
                            ),
                          ),
                          "badge_sets[].brand_highlights_from_profile.selected_brand_highlights_info_options[]",
                          i.id,
                        );
                      },
                    ),
                }
              : void 0,
            business_info_from_profile: e.business_info_from_profile
              ? {
                  selected_business_info_options:
                    e.business_info_from_profile.selected_business_info_options.map(
                      function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerceFromKey(
                            e,
                            r("AdsCreativeBadgeBusinessInfoFromProfileOptions"),
                          ),
                          "badge_sets[].business_info_from_profile.selected_business_info_options[]",
                          i.id,
                        );
                      },
                    ),
                }
              : void 0,
            payment_options: e.payment_options
              ? {
                  payment_methods_accepted:
                    e.payment_options.payment_methods_accepted.map(
                      function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerceFromKey(
                            e,
                            r("AdsCreativeBadgePaymentOptions"),
                          ),
                          "badge_sets[].payment_options.payment_methods_accepted[]",
                          i.id,
                        );
                      },
                    ),
                }
              : void 0,
            return_policy: e.return_policy
              ? {
                  is_return_free: e.return_policy.is_return_free,
                  return_window_unit: e.return_policy.return_window_unit
                    ? o("enumUtils").coerceFromKey(
                        e.return_policy.return_window_unit,
                        r("AdsCreativeBadgeReturnPolicyWindowUnits"),
                      )
                    : void 0,
                  return_window_value:
                    (t =
                      (n = e.return_policy) == null
                        ? void 0
                        : n.return_window_value) != null
                      ? t
                      : void 0,
                }
              : void 0,
            shipping_policy: e.shipping_policy
              ? {
                  is_shipping_free:
                    (a =
                      (l = e.shipping_policy) == null
                        ? void 0
                        : l.is_shipping_free) != null
                      ? a
                      : void 0,
                  shipping_min_amount_unit:
                    (s = e.shipping_policy) == null
                      ? void 0
                      : s.shipping_min_amount_unit,
                  shipping_min_amount_value:
                    e.shipping_policy.shipping_min_amount_value,
                  shipping_time_frame_unit:
                    (u = e.shipping_policy) != null &&
                    u.shipping_time_frame_unit
                      ? o("enumUtils").coerceFromKey(
                          e.shipping_policy.shipping_time_frame_unit,
                          r("AdsCreativeBadgeShippingPolicyWindowUnits"),
                        )
                      : void 0,
                  shipping_time_frame_value:
                    (c =
                      (d = e.shipping_policy) == null
                        ? void 0
                        : d.shipping_time_frame_value) != null
                      ? c
                      : void 0,
                }
              : void 0,
            social_cues_from_profile: e.social_cues_from_profile
              ? {
                  selected_social_cues_options:
                    e.social_cues_from_profile.selected_social_cues_options.map(
                      function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          o("enumUtils").coerceFromKey(
                            e,
                            r("AdsCreativeBadgeSocialCuesFromProfileOptions"),
                          ),
                          "badge_sets[].social_cues_from_profile.selected_social_cues_options[]",
                          i.id,
                        );
                      },
                    ),
                }
              : void 0,
          };
        }),
      )) != null
        ? t
        : void 0;
    }
    function h(e) {
      return o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        e.map(function (e) {
          var t,
            n,
            a,
            l,
            u,
            c,
            d,
            m,
            p,
            _,
            f,
            g,
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
            $,
            P;
          return {
            body_label:
              (t = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                e.body_adlabel,
              )) != null
                ? t
                : void 0,
            call_to_action_type_label:
              (n = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                e.call_to_action_type_adlabel,
              )) != null
                ? n
                : void 0,
            caption_label:
              (a = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                e.caption_adlabel,
              )) != null
                ? a
                : void 0,
            description_label:
              (l = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                e.description_adlabel,
              )) != null
                ? l
                : void 0,
            image_label:
              (u = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                e.image_adlabel,
              )) != null
                ? u
                : void 0,
            link_url_label:
              (c = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                e.link_url_adlabel,
              )) != null
                ? c
                : void 0,
            targeting: e.targeting
              ? o("TypeCoercionUtils").coerceObjectToUndefined({
                  age_max: (d = e.targeting.age_max) != null ? d : void 0,
                  age_min: (m = e.targeting.age_min) != null ? m : void 0,
                  audience_network_positions:
                    (p = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      (_ = e.targeting) == null
                        ? void 0
                        : _.audience_network_positions.map(function (e) {
                            return o("TypeCoercionUtils").coerceNonMaybeValue(
                              o("enumUtils").coerceFromKey(
                                e,
                                r("AdsAPIAudienceNetworkPosition"),
                              ),
                              "target_rules[].targeting.audience_network_positions[]",
                              i.id,
                            );
                          }),
                    )) != null
                      ? p
                      : void 0,
                  behaviors: s,
                  custom_audiences: s,
                  device_platforms:
                    (f = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      (g = e.targeting) == null
                        ? void 0
                        : g.device_platforms.map(function (e) {
                            return o("TypeCoercionUtils").coerceNonMaybeValue(
                              o("enumUtils").coerceFromKey(
                                e,
                                r("AdsAPIDevicePlatform"),
                              ),
                              "target_rules[].targeting.device_platforms[]",
                              i.id,
                            );
                          }),
                    )) != null
                      ? f
                      : void 0,
                  education_statuses: s,
                  facebook_positions:
                    (h = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      (y = e.targeting) == null
                        ? void 0
                        : y.facebook_positions.map(function (e) {
                            return o("TypeCoercionUtils").coerceNonMaybeValue(
                              o("enumUtils").coerceFromKey(
                                e,
                                r("AdsAPIFacebookPosition"),
                              ),
                              "target_rules[].targeting.facebook_positions[]",
                              i.id,
                            );
                          }),
                    )) != null
                      ? h
                      : void 0,
                  genders: s,
                  geo_locations:
                    (C =
                      (b = e.targeting) == null || (b = b.geo_locations) == null
                        ? void 0
                        : b.geo_locations) != null
                      ? C
                      : void 0,
                  instagram_positions:
                    (v = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      (S = e.targeting) == null
                        ? void 0
                        : S.instagram_positions.map(function (e) {
                            return o("TypeCoercionUtils").coerceNonMaybeValue(
                              o("enumUtils").coerceFromKey(
                                e,
                                r("AdsAPIInstagramPosition"),
                              ),
                              "target_rules[].targeting.instagram_positions[]",
                              i.id,
                            );
                          }),
                    )) != null
                      ? v
                      : void 0,
                  interests: s,
                  messenger_positions:
                    (R = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      (L = e.targeting) == null
                        ? void 0
                        : L.messenger_positions.map(function (e) {
                            return o("TypeCoercionUtils").coerceNonMaybeValue(
                              o("enumUtils").coerceFromKey(
                                e,
                                r("AdsAPIMessengerPosition"),
                              ),
                              "target_rules[].targeting.messenger_positions[]",
                              i.id,
                            );
                          }),
                    )) != null
                      ? R
                      : void 0,
                  publisher_platforms:
                    (E = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      (k = e.targeting) == null
                        ? void 0
                        : k.publisher_platforms.map(function (e) {
                            return o("TypeCoercionUtils").coerceNonMaybeValue(
                              o("enumUtils").coerceFromKey(
                                e,
                                r("AdsAPIPublisherPlatform"),
                              ),
                              "target_rules[].targeting.publisher_platforms[]",
                              i.id,
                            );
                          }),
                    )) != null
                      ? E
                      : void 0,
                  relationship_statuses: s,
                  threads_positions:
                    (I = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      (T = e.targeting) == null
                        ? void 0
                        : T.threads_positions.map(function (e) {
                            return o("TypeCoercionUtils").coerceNonMaybeValue(
                              o("enumUtils").coerceFromKey(
                                e,
                                r("AdsAPIThreadsPosition"),
                              ),
                              "target_rules[].targeting.threads_positions[]",
                              i.id,
                            );
                          }),
                    )) != null
                      ? I
                      : void 0,
                  whatsapp_positions:
                    (D = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                      (x = e.targeting) == null
                        ? void 0
                        : x.whatsapp_positions.map(function (e) {
                            return o("TypeCoercionUtils").coerceNonMaybeValue(
                              o("enumUtils").coerceFromKey(
                                e,
                                r("AdsAPIWhatsAppPosition"),
                              ),
                              "target_rules[].targeting.whatsapp_positions[]",
                              i.id,
                            );
                          }),
                    )) != null
                      ? D
                      : void 0,
                })
              : void 0,
            title_label:
              ($ = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                e.title_adlabel,
              )) != null
                ? $
                : void 0,
            video_label:
              (P = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                e.video_adlabel,
              )) != null
                ? P
                : void 0,
          };
        }),
      );
    }
    function y(t) {
      return o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
        t
          .map(function (t) {
            var n,
              a,
              l,
              u,
              c,
              d,
              m,
              p,
              _,
              f,
              g,
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
              $,
              P,
              N,
              M,
              w = t.customization_spec;
            return {
              body_label:
                (n = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  t.body_adlabel,
                )) != null
                  ? n
                  : void 0,
              body_labels: void 0,
              call_to_action_label:
                (a = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  t.call_to_action_adlabel,
                )) != null
                  ? a
                  : void 0,
              call_to_action_type_label:
                (l = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  t.call_to_action_type_adlabel,
                )) != null
                  ? l
                  : void 0,
              caption_label:
                (u = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  t.caption_adlabel,
                )) != null
                  ? u
                  : void 0,
              caption_labels: void 0,
              carousel_label:
                (c = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  t.carousel_adlabel,
                )) != null
                  ? c
                  : void 0,
              customization_spec: w
                ? {
                    age_max: (d = w.age_max) != null ? d : void 0,
                    age_min: (m = w.age_min) != null ? m : void 0,
                    audience_network_positions:
                      (p = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        w.audience_network_positions.map(function (e) {
                          return o("TypeCoercionUtils").coerceNonMaybeValue(
                            o("enumUtils").coerceFromKey(
                              e,
                              r("AdsAPIAudienceNetworkPosition"),
                            ),
                            "asset_customization_rules[].customization_spec.audience_network_positions[]",
                            i.id,
                          );
                        }),
                      )) != null
                        ? p
                        : void 0,
                    behaviors: s,
                    custom_audiences: s,
                    device_platforms:
                      (_ = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        w.device_platforms.map(function (e) {
                          return o("TypeCoercionUtils").coerceNonMaybeValue(
                            o("enumUtils").coerceFromKey(
                              e,
                              r("AdsAPIDevicePlatform"),
                            ),
                            "asset_customization_rules[].customization_spec.device_platforms[]",
                            i.id,
                          );
                        }),
                      )) != null
                        ? _
                        : void 0,
                    education_statuses: s,
                    facebook_positions:
                      (f = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        w.facebook_positions.map(function (e) {
                          return o("TypeCoercionUtils").coerceNonMaybeValue(
                            o("enumUtils").coerceFromKey(
                              e,
                              r("AdsAPIFacebookPosition"),
                            ),
                            "asset_customization_rules[].customization_spec.facebook_positions[]",
                            i.id,
                          );
                        }),
                      )) != null
                        ? f
                        : void 0,
                    genders: s,
                    geo_locations:
                      (g =
                        (h = w.geo_locations) == null
                          ? void 0
                          : h.geo_locations) != null
                        ? g
                        : void 0,
                    instagram_positions:
                      (y = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        w.instagram_positions.map(function (e) {
                          return o("TypeCoercionUtils").coerceNonMaybeValue(
                            o("enumUtils").coerceFromKey(
                              e,
                              r("AdsAPIInstagramPosition"),
                            ),
                            "asset_customization_rules[].customization_spec.instagram_positions[]",
                            i.id,
                          );
                        }),
                      )) != null
                        ? y
                        : void 0,
                    interests: s,
                    locales:
                      (C = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        w.locales,
                      )) != null
                        ? C
                        : void 0,
                    messenger_positions:
                      (b = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        w.messenger_positions.map(function (e) {
                          return o("TypeCoercionUtils").coerceNonMaybeValue(
                            o("enumUtils").coerceFromKey(
                              e,
                              r("AdsAPIMessengerPosition"),
                            ),
                            "asset_customization_rules[].customization_spec.messenger_positions[]",
                            i.id,
                          );
                        }),
                      )) != null
                        ? b
                        : void 0,
                    oculus_positions:
                      (v = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        w.oculus_positions.map(function (e) {
                          return o("TypeCoercionUtils").coerceNonMaybeValue(
                            o("enumUtils").coerceFromKey(
                              e,
                              r("AdsAPIOculusPosition"),
                            ),
                            "asset_customization_rules[].customization_spec.oculus_positions[]",
                            i.id,
                          );
                        }),
                      )) != null
                        ? v
                        : void 0,
                    publisher_platforms:
                      (S = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        w.publisher_platforms.map(function (e) {
                          return o("TypeCoercionUtils").coerceNonMaybeValue(
                            o("enumUtils").coerceFromKey(
                              e,
                              r("AdsAPIPublisherPlatform"),
                            ),
                            "asset_customization_rules[].customization_spec.publisher_platforms[]",
                            i.id,
                          );
                        }),
                      )) != null
                        ? S
                        : void 0,
                    relationship_statuses: s,
                    threads_positions:
                      (R = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        w.threads_positions.map(function (e) {
                          return o("TypeCoercionUtils").coerceNonMaybeValue(
                            o("enumUtils").coerceFromKey(
                              e,
                              r("AdsAPIThreadsPosition"),
                            ),
                            "asset_customization_rules[].customization_spec.threads_positions[]",
                            i.id,
                          );
                        }),
                      )) != null
                        ? R
                        : void 0,
                    whatsapp_positions:
                      (L = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        w.whatsapp_positions.map(function (e) {
                          return o("TypeCoercionUtils").coerceNonMaybeValue(
                            o("enumUtils").coerceFromKey(
                              e,
                              r("AdsAPIWhatsAppPosition"),
                            ),
                            "asset_customization_rules[].customization_spec.whatsapp_positions[]",
                            i.id,
                          );
                        }),
                      )) != null
                        ? L
                        : void 0,
                  }
                : void 0,
              description_label:
                (E = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  t.description_adlabel,
                )) != null
                  ? E
                  : void 0,
              description_labels: e,
              image_label:
                (k = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  t.image_adlabel,
                )) != null
                  ? k
                  : void 0,
              is_default: (I = t.is_default) != null ? I : void 0,
              link_url_label:
                (T = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  t.link_url_adlabel,
                )) != null
                  ? T
                  : void 0,
              post_label:
                (D = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  t.post_adlabel,
                )) != null
                  ? D
                  : void 0,
              priority: (x = t.priority) != null ? x : void 0,
              targeting: s,
              title_label:
                ($ = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  t.title_adlabel,
                )) != null
                  ? $
                  : void 0,
              title_labels: e,
              use_existing_post: (P = t.use_existing_post) != null ? P : void 0,
              use_ig_existing_post:
                (N = t.use_ig_existing_post) != null ? N : void 0,
              video_label:
                (M = o("TypeCoercionUtils").coerceMaybeIDNamePair(
                  t.video_adlabel,
                )) != null
                  ? M
                  : void 0,
            };
          })
          .map(function (e) {
            return (
              Object.keys(e).forEach(function (t) {
                return e[t] === void 0 && delete e[t];
              }),
              e
            );
          }),
      );
    }
    l.coerceGraphQLSpecToGraphAPI = u;
  },
  98,
);
