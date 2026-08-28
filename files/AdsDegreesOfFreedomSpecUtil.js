__d(
  "AdsDegreesOfFreedomSpecUtil",
  [
    "AdCreativeFeatureActionType",
    "AdCreativeFeatureCustomizationsImageCropStyle",
    "AdCreativeFeatureCustomizationsShowcaseCardDisplay",
    "AdCreativeFeatureCustomizationsTextStyle",
    "AdCreativeFeatureCustomizationsVideoCropStyle",
    "AdCreativeFeatureEnrollStatus",
    "AdsAPICreativeFeatureName",
    "DynamicCreativeOptimiationDoFImageTransformationType",
    "DynamicCreativeOptimiationDoFStoriesTransformationType",
    "DynamicCreativeOptimizationDoFType",
    "DynamicHandleAdOptimizationType",
    "MultimediaTransformationType",
    "TextTransformationType",
    "TypeCoercionUtils",
    "VideoTransformationType",
    "enumUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      return {
        ad_handle_type:
          e.ad_handle_type &&
          (t = r("getJSEnumSafe")(
            r("DynamicHandleAdOptimizationType"),
            e.ad_handle_type,
          )) != null
            ? t
            : void 0,
        creative_features_spec:
          (n = c(e.creative_features_spec)) != null ? n : void 0,
        degrees_of_freedom_type:
          e != null && e.degrees_of_freedom_type
            ? r("getJSEnumSafe")(
                r("DynamicCreativeOptimizationDoFType"),
                e.degrees_of_freedom_type,
              )
            : void 0,
        image_transformation_types:
          e != null && e.image_transformation_types
            ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                e.image_transformation_types.map(function (e) {
                  return o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumSafe")(
                      r("DynamicCreativeOptimiationDoFImageTransformationType"),
                      e,
                    ),
                    "image_transformation_types[]",
                    i.id,
                  );
                }),
              )
            : void 0,
        multi_media_transformation_type:
          e != null && e.multi_media_transformation_type
            ? r("getJSEnumSafe")(
                r("MultimediaTransformationType"),
                e.multi_media_transformation_type,
              )
            : void 0,
        stories_transformation_types:
          e != null && e.stories_transformation_types
            ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                e.stories_transformation_types.map(function (e) {
                  return o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumSafe")(
                      r(
                        "DynamicCreativeOptimiationDoFStoriesTransformationType",
                      ),
                      e,
                    ),
                    "stories_transformation_types[]",
                    i.id,
                  );
                }),
              )
            : void 0,
        text_transformation_types:
          e != null && e.text_transformation_types
            ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                e.text_transformation_types.map(function (e) {
                  return o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumSafe")(r("TextTransformationType"), e),
                    "text_transformation_types[]",
                    i.id,
                  );
                }),
              )
            : void 0,
        video_transformation_types:
          e != null && e.video_transformation_types
            ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                e.video_transformation_types.map(function (e) {
                  return o("TypeCoercionUtils").coerceNonMaybeValue(
                    r("getJSEnumSafe")(r("VideoTransformationType"), e),
                    "video_transformation_types[]",
                    i.id,
                  );
                }),
              )
            : void 0,
      };
    }
    function s(e) {
      if (e != null)
        switch (e) {
          case "RECOMPOSITION_MODEL":
            return "recomposition_model";
          case "SMART_CROP":
            return "smart_crop";
          case "SMART_PADDING":
            return "smart_padding";
          default:
            return;
        }
    }
    function u(e) {
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
        de,
        me,
        pe,
        _e,
        fe,
        ge;
      if (e == null) return null;
      var he =
          (t = e.action_metadata) != null &&
          t.type &&
          (n = r("getJSEnumSafe")(
            r("AdCreativeFeatureActionType"),
            e.action_metadata.type,
          )) != null
            ? n
            : null,
        ye =
          (a = e.customizations) != null &&
          (a = a.text_extraction) != null &&
          (a = a.action_metadata) != null &&
          a.type &&
          (l = r("getJSEnumSafe")(
            r("AdCreativeFeatureActionType"),
            e.customizations.text_extraction.action_metadata.type,
          )) != null
            ? l
            : null,
        Ce =
          (u = e.customizations) != null &&
          (u = u.pe_carousel) != null &&
          (u = u.action_metadata) != null &&
          u.type &&
          (c = r("getJSEnumSafe")(
            r("AdCreativeFeatureActionType"),
            e.customizations.pe_carousel.action_metadata.type,
          )) != null
            ? c
            : null,
        be =
          (d = e.customizations) != null &&
          (d = d.placement_groups) != null &&
          (d = d.vertical) != null &&
          (d = d.action_metadata) != null &&
          d.type &&
          (m = r("getJSEnumSafe")(
            r("AdCreativeFeatureActionType"),
            e.customizations.placement_groups.vertical.action_metadata.type,
          )) != null
            ? m
            : null,
        ve =
          (p = e.customizations) != null &&
          (p = p.placement_groups) != null &&
          (p = p.square) != null &&
          (p = p.action_metadata) != null &&
          p.type &&
          (_ = r("getJSEnumSafe")(
            r("AdCreativeFeatureActionType"),
            e.customizations.placement_groups.square.action_metadata.type,
          )) != null
            ? _
            : null,
        Se =
          (f = e.customizations) != null &&
          (f = f.placement_groups) != null &&
          (f = f.horizontal) != null &&
          (f = f.action_metadata) != null &&
          f.type &&
          (g = r("getJSEnumSafe")(
            r("AdCreativeFeatureActionType"),
            e.customizations.placement_groups.horizontal.action_metadata.type,
          )) != null
            ? g
            : null,
        Re =
          (h = e.customizations) != null &&
          (h = h.aspect_ratio_config) != null &&
          (h = h.ar_4_5) != null &&
          (h = h.adapt) != null &&
          (h = h.action_metadata) != null &&
          h.type &&
          (y = r("getJSEnumSafe")(
            r("AdCreativeFeatureActionType"),
            e.customizations.aspect_ratio_config.ar_4_5.adapt.action_metadata
              .type,
          )) != null
            ? y
            : null,
        Le =
          (C = e.customizations) != null &&
          (C = C.aspect_ratio_config) != null &&
          (C = C.ar_9_16) != null &&
          (C = C.adapt) != null &&
          (C = C.action_metadata) != null &&
          C.type &&
          (b = r("getJSEnumSafe")(
            r("AdCreativeFeatureActionType"),
            e.customizations.aspect_ratio_config.ar_9_16.adapt.action_metadata
              .type,
          )) != null
            ? b
            : null,
        Ee = (v = e.customizations) == null ? void 0 : v.recomposition_type;
      return {
        action_metadata: he ? { type: he } : void 0,
        customizations: e.customizations
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              aspect_ratio_config:
                (S = e.customizations) != null && S.aspect_ratio_config
                  ? {
                      ar_4_5:
                        (R = e.customizations) != null &&
                        (R = R.aspect_ratio_config) != null &&
                        (R = R.ar_4_5) != null &&
                        (R = R.adapt) != null &&
                        R.enroll_status
                          ? {
                              adapt: {
                                action_metadata: Re ? { type: Re } : void 0,
                                enroll_status:
                                  e.customizations.aspect_ratio_config.ar_4_5
                                    .adapt.enroll_status &&
                                  (L = r("getJSEnumSafe")(
                                    r("AdCreativeFeatureEnrollStatus"),
                                    o("TypeCoercionUtils").coerceNonMaybeValue(
                                      e.customizations.aspect_ratio_config
                                        .ar_4_5.adapt.enroll_status,
                                      "feature.customizations.aspect_ratio_config.ar_4_5.adapt.enroll_status",
                                      i.id,
                                    ),
                                  )) != null
                                    ? L
                                    : void 0,
                              },
                            }
                          : void 0,
                      ar_9_16:
                        (E = e.customizations) != null &&
                        (E = E.aspect_ratio_config) != null &&
                        (E = E.ar_9_16) != null &&
                        (E = E.adapt) != null &&
                        E.enroll_status
                          ? {
                              adapt: {
                                action_metadata: Le ? { type: Le } : void 0,
                                enroll_status:
                                  e.customizations.aspect_ratio_config.ar_9_16
                                    .adapt.enroll_status &&
                                  (k = r("getJSEnumSafe")(
                                    r("AdCreativeFeatureEnrollStatus"),
                                    o("TypeCoercionUtils").coerceNonMaybeValue(
                                      e.customizations.aspect_ratio_config
                                        .ar_9_16.adapt.enroll_status,
                                      "feature.customizations.aspect_ratio_config.ar_9_16.adapt.enroll_status",
                                      i.id,
                                    ),
                                  )) != null
                                    ? k
                                    : void 0,
                              },
                            }
                          : void 0,
                    }
                  : void 0,
              background_color:
                (I =
                  (T = e.customizations) == null
                    ? void 0
                    : T.background_color) != null
                  ? I
                  : void 0,
              catalog_feed_tag_name:
                (D =
                  (x = e.customizations) == null
                    ? void 0
                    : x.catalog_feed_tag_name) != null
                  ? D
                  : void 0,
              creative_stickers:
                e != null &&
                ($ = e.customizations) != null &&
                $.creative_stickers
                  ? {
                      generated_sticker_ids:
                        (P = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                          e == null ||
                            (N = e.customizations) == null ||
                            (N = N.creative_stickers) == null
                            ? void 0
                            : N.generated_sticker_ids,
                        )) != null
                          ? P
                          : [],
                      uploaded_sticker_ids:
                        (M = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                          e == null ||
                            (w = e.customizations) == null ||
                            (w = w.creative_stickers) == null
                            ? void 0
                            : w.uploaded_sticker_ids,
                        )) != null
                          ? M
                          : [],
                    }
                  : void 0,
              font_name:
                (A = (F = e.customizations) == null ? void 0 : F.font_name) !=
                null
                  ? A
                  : void 0,
              hero_asset:
                ((O =
                  e == null ||
                  (B = e.customizations) == null ||
                  (B = B.hero_asset) == null ||
                  (B = B.selected_adgroup_ids) == null
                    ? void 0
                    : B.length) != null
                  ? O
                  : 0) > 0
                  ? {
                      selected_adgroup_ids: o(
                        "TypeCoercionUtils",
                      ).coerceEmptyArrayToUndefined(
                        e == null ||
                          (W = e.customizations) == null ||
                          (W = W.hero_asset) == null
                          ? void 0
                          : W.selected_adgroup_ids,
                      ),
                    }
                  : void 0,
              image_crop_style:
                (q = r("getJSEnumSafe")(
                  r("AdCreativeFeatureCustomizationsImageCropStyle"),
                  (U = e.customizations) == null ? void 0 : U.image_crop_style,
                )) != null
                  ? q
                  : void 0,
              is_shopping_links:
                (V =
                  (H = e.customizations) == null
                    ? void 0
                    : H.is_shopping_links) != null
                  ? V
                  : void 0,
              pe_carousel:
                (G = e.customizations) != null &&
                (G = G.pe_carousel) != null &&
                G.enroll_status
                  ? {
                      action_metadata: Ce ? { type: Ce } : void 0,
                      enroll_status:
                        e.customizations.pe_carousel.enroll_status &&
                        (z = r("getJSEnumSafe")(
                          r("AdCreativeFeatureEnrollStatus"),
                          o("TypeCoercionUtils").coerceNonMaybeValue(
                            e.customizations.pe_carousel.enroll_status,
                            "feature.customizations.pe_carousel.enroll_status",
                            i.id,
                          ),
                        )) != null
                          ? z
                          : void 0,
                    }
                  : void 0,
              placement_groups:
                (j = e.customizations) != null && j.placement_groups
                  ? {
                      horizontal:
                        (K = e.customizations) != null &&
                        (K = K.placement_groups) != null &&
                        (K = K.horizontal) != null &&
                        K.enroll_status
                          ? {
                              action_metadata: Se ? { type: Se } : void 0,
                              enroll_status:
                                e.customizations.placement_groups.horizontal
                                  .enroll_status &&
                                (Q = r("getJSEnumSafe")(
                                  r("AdCreativeFeatureEnrollStatus"),
                                  o("TypeCoercionUtils").coerceNonMaybeValue(
                                    e.customizations.placement_groups.horizontal
                                      .enroll_status,
                                    "feature.customizations.placement_groups.horizontal.enroll_status",
                                    i.id,
                                  ),
                                )) != null
                                  ? Q
                                  : void 0,
                            }
                          : void 0,
                      square:
                        (X = e.customizations) != null &&
                        (X = X.placement_groups) != null &&
                        (X = X.square) != null &&
                        X.enroll_status
                          ? {
                              action_metadata: ve ? { type: ve } : void 0,
                              enroll_status:
                                e.customizations.placement_groups.square
                                  .enroll_status &&
                                (Y = r("getJSEnumSafe")(
                                  r("AdCreativeFeatureEnrollStatus"),
                                  o("TypeCoercionUtils").coerceNonMaybeValue(
                                    e.customizations.placement_groups.square
                                      .enroll_status,
                                    "feature.customizations.placement_groups.square.enroll_status",
                                    i.id,
                                  ),
                                )) != null
                                  ? Y
                                  : void 0,
                            }
                          : void 0,
                      vertical:
                        (J = e.customizations) != null &&
                        (J = J.placement_groups) != null &&
                        (J = J.vertical) != null &&
                        J.enroll_status
                          ? {
                              action_metadata: be ? { type: be } : void 0,
                              enroll_status:
                                e.customizations.placement_groups.vertical
                                  .enroll_status &&
                                (Z = r("getJSEnumSafe")(
                                  r("AdCreativeFeatureEnrollStatus"),
                                  o("TypeCoercionUtils").coerceNonMaybeValue(
                                    e.customizations.placement_groups.vertical
                                      .enroll_status,
                                    "feature.customizations.placement_groups.vertical.enroll_status",
                                    i.id,
                                  ),
                                )) != null
                                  ? Z
                                  : void 0,
                            }
                          : void 0,
                    }
                  : void 0,
              recomposition_type: Ee
                ? {
                    horizontal: s(Ee.horizontal),
                    square: s(Ee.square),
                    vertical: s(Ee.vertical),
                  }
                : void 0,
              shopping_links_randomized_order:
                (ee =
                  (te = e.customizations) == null
                    ? void 0
                    : te.shopping_links_randomized_order) != null
                  ? ee
                  : void 0,
              showcase_card_display:
                (ne = r("getJSEnumSafe")(
                  r("AdCreativeFeatureCustomizationsShowcaseCardDisplay"),
                  (re = e.customizations) == null
                    ? void 0
                    : re.showcase_card_display,
                )) != null
                  ? ne
                  : void 0,
              text_extraction:
                (oe = e.customizations) != null &&
                (oe = oe.text_extraction) != null &&
                oe.enroll_status
                  ? {
                      action_metadata: ye ? { type: ye } : void 0,
                      enroll_status:
                        e.customizations.text_extraction.enroll_status &&
                        (ae = r("getJSEnumSafe")(
                          r("AdCreativeFeatureEnrollStatus"),
                          o("TypeCoercionUtils").coerceNonMaybeValue(
                            e.customizations.text_extraction.enroll_status,
                            "feature.customizations.text_extraction.enroll_status",
                            i.id,
                          ),
                        )) != null
                          ? ae
                          : void 0,
                    }
                  : void 0,
              text_style:
                (ie = e.customizations) != null &&
                ie.text_style &&
                (le = r("getJSEnumSafe")(
                  r("AdCreativeFeatureCustomizationsTextStyle"),
                  e.customizations.text_style,
                )) != null
                  ? le
                  : void 0,
              text_translation_opt_out_languages:
                ((se =
                  e == null ||
                  (ue = e.customizations) == null ||
                  (ue = ue.text_translation_opt_out_languages) == null ||
                  (ue = ue.opt_out_languages) == null
                    ? void 0
                    : ue.length) != null
                  ? se
                  : 0) > 0
                  ? {
                      opt_out_languages: o(
                        "TypeCoercionUtils",
                      ).coerceEmptyArrayToUndefined(
                        e == null ||
                          (ce = e.customizations) == null ||
                          (ce = ce.text_translation_opt_out_languages) == null
                          ? void 0
                          : ce.opt_out_languages,
                      ),
                    }
                  : void 0,
              translate_voiceover_opt_out_languages:
                ((de =
                  e == null ||
                  (me = e.customizations) == null ||
                  (me = me.translate_voiceover_opt_out_languages) == null ||
                  (me = me.opt_out_languages) == null
                    ? void 0
                    : me.length) != null
                  ? de
                  : 0) > 0
                  ? {
                      opt_out_languages: o(
                        "TypeCoercionUtils",
                      ).coerceEmptyArrayToUndefined(
                        e == null ||
                          (pe = e.customizations) == null ||
                          (pe = pe.translate_voiceover_opt_out_languages) ==
                            null
                          ? void 0
                          : pe.opt_out_languages,
                      ),
                    }
                  : void 0,
              video_crop_style:
                (_e = r("getJSEnumSafe")(
                  r("AdCreativeFeatureCustomizationsVideoCropStyle"),
                  (fe = e.customizations) == null
                    ? void 0
                    : fe.video_crop_style,
                )) != null
                  ? _e
                  : void 0,
            })
          : void 0,
        enroll_status:
          e.enroll_status &&
          (ge = r("getJSEnumSafe")(
            r("AdCreativeFeatureEnrollStatus"),
            o("TypeCoercionUtils").coerceNonMaybeValue(
              e.enroll_status,
              "feature.enroll_status",
              i.id,
            ),
          )) != null
            ? ge
            : void 0,
      };
    }
    function c(e) {
      var t = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(e);
      if (t == null) return null;
      var n = null,
        a = null,
        i = null,
        l = null,
        s = null,
        c = null,
        d = null,
        m = null,
        p = null,
        _ = null,
        f = null,
        g = null,
        h = null,
        y = null,
        C = null,
        b = null,
        v = null,
        S = null,
        R = null,
        L = null,
        E = null,
        k = null,
        I = null,
        T = null,
        D = null,
        x = null,
        $ = null,
        P = null,
        N = null,
        M = null,
        w = null,
        A = null,
        F = null,
        O = null,
        B = null,
        W = null,
        q = null,
        U = null,
        V = null,
        H = null,
        G = null,
        z = null,
        j = null,
        K = null,
        Q = null,
        X = null,
        Y = null,
        J = null,
        Z = null,
        ee = null,
        te = null,
        ne = null,
        re = null,
        oe = null,
        ae = null,
        ie = null,
        le = null,
        se = null,
        ue = null,
        ce = null;
      return (
        t.forEach(function (e) {
          switch (
            o("enumUtils").coerceFromKey(e.name, r("AdsAPICreativeFeatureName"))
          ) {
            case "image_enhancement":
              a = u(e.spec);
              break;
            case "media_order":
              i = u(e.spec);
              break;
            case "media_liquidity_animated_image":
              l = u(e.spec);
              break;
            case "video_auto_crop":
              s = u(e.spec);
              break;
            case "video_uncrop":
              c = u(e.spec);
              break;
            case "video_highlight":
              d = u(e.spec);
              break;
            case "video_highlights":
              m = u(e.spec);
              break;
            case "translate_voiceover":
              B = u(e.spec);
              break;
            case "video_voiceover":
              W = u(e.spec);
              break;
            case "inline_comment":
              p = u(e.spec);
              break;
            case "cv_transformation":
              _ = u(e.spec);
              break;
            case "image_animation":
              f = u(e.spec);
              break;
            case "image_auto_crop":
              g = u(e.spec);
              break;
            case "ig_glados_feed":
              h = u(e.spec);
              break;
            case "ig_video_native_subtitle":
              y = u(e.spec);
              break;
            case "standard_enhancements":
              C = u(e.spec);
              break;
            case "audio":
              b = u(e.spec);
              break;
            case "dha_optimization":
              v = u(e.spec);
              break;
            case "description_automation":
              S = u(e.spec);
              break;
            case "hide_price":
              R = u(e.spec);
              break;
            case "carousel_to_video":
              L = u(e.spec);
              break;
            case "media_type_automation":
              E = u(e.spec);
              break;
            case "profile_card":
              k = u(e.spec);
              break;
            case "product_extensions":
              I = u(e.spec);
              break;
            case "standard_enhancements_catalog":
              T = u(e.spec);
              break;
            case "advantage_plus_creative":
              D = u(e.spec);
              break;
            case "image_background_gen":
              x = u(e.spec);
              break;
            case "image_templates":
              P = u(e.spec);
              break;
            case "image_touchups":
              N = u(e.spec);
              break;
            case "image_uncrop":
              M = u(e.spec);
              break;
            case "text_optimizations":
              A = u(e.spec);
              break;
            case "text_translation":
              F = u(e.spec);
              break;
            case "image_text_translation":
              O = u(e.spec);
              break;
            case "show_destination_blurbs":
              w = u(e.spec);
              break;
            case "replace_media_text":
              q = u(e.spec);
              break;
            case "reveal_details_over_time":
              U = u(e.spec);
              break;
            case "product_browsing":
              ce = u(e.spec);
              break;
            case "show_summary":
              V = u(e.spec);
              break;
            case "product_metadata_automation":
              H = u(e.spec);
              break;
            case "app_highlights":
              G = u(e.spec);
              break;
            case "site_extensions":
              z = u(e.spec);
              break;
            case "image_brightness_and_contrast":
              $ = u(e.spec);
              break;
            case "feed_caption_optimization":
              j = u(e.spec);
              break;
            case "ads_with_benefits":
              K = u(e.spec);
              break;
            case "adapt_to_placement":
              Q = u(e.spec);
              break;
            case "video_filtering":
              X = u(e.spec);
              break;
            case "add_text_overlay":
              n = u(e.spec);
              break;
            case "local_store_extension":
              Y = u(e.spec);
              break;
            case "enable_ncs_testimonials":
              ue = u(e.spec);
              break;
            case "enhance_cta":
              J = u(e.spec);
              break;
            case "dynamic_partner_content":
              Z = u(e.spec);
              break;
            case "catalog_feed_tag":
              ee = u(e.spec);
              break;
            case "pac_recomposition":
              te = u(e.spec);
              break;
            case "pac_relaxation":
              ne = u(e.spec);
              break;
            case "wa_mm_image_filtering":
              oe = u(e.spec);
              break;
            case "multi_photo_to_video":
              re = u(e.spec);
              break;
            case "biz_ai":
              ae = u(e.spec);
              break;
            case "creative_stickers":
              ie = u(e.spec);
              break;
            case "video_to_image":
              le = u(e.spec);
              break;
            case "generate_cta":
              se = u(e.spec);
              break;
          }
        }),
        {
          adapt_to_placement: Q != null ? Q : void 0,
          add_text_overlay: n != null ? n : void 0,
          ads_with_benefits: K != null ? K : void 0,
          advantage_plus_creative: D != null ? D : void 0,
          app_highlights: G != null ? G : void 0,
          audio: b != null ? b : void 0,
          biz_ai: ae != null ? ae : void 0,
          carousel_to_video: L != null ? L : void 0,
          catalog_feed_tag: ee != null ? ee : void 0,
          creative_stickers: ie != null ? ie : void 0,
          cv_transformation: _ != null ? _ : void 0,
          description_automation: S != null ? S : void 0,
          dha_optimization: v != null ? v : void 0,
          dynamic_partner_content: Z != null ? Z : void 0,
          enable_ncs_testimonials: ue != null ? ue : void 0,
          enhance_cta: J != null ? J : void 0,
          feed_caption_optimization: j != null ? j : void 0,
          generate_cta: se != null ? se : void 0,
          hide_price: R != null ? R : void 0,
          ig_glados_feed: h != null ? h : void 0,
          ig_video_native_subtitle: y != null ? y : void 0,
          image_animation: f != null ? f : void 0,
          image_auto_crop: g != null ? g : void 0,
          image_background_gen: x != null ? x : void 0,
          image_brightness_and_contrast: $ != null ? $ : void 0,
          image_enhancement: a != null ? a : void 0,
          image_templates: P != null ? P : void 0,
          image_text_translation: O != null ? O : void 0,
          image_touchups: N != null ? N : void 0,
          image_uncrop: M != null ? M : void 0,
          inline_comment: p != null ? p : void 0,
          local_store_extension: Y != null ? Y : void 0,
          media_liquidity_animated_image: l != null ? l : void 0,
          media_order: i != null ? i : void 0,
          media_type_automation: E != null ? E : void 0,
          multi_photo_to_video: re != null ? re : void 0,
          pac_recomposition: te != null ? te : void 0,
          pac_relaxation: ne != null ? ne : void 0,
          product_browsing: ce != null ? ce : void 0,
          product_extensions: I != null ? I : void 0,
          product_metadata_automation: H != null ? H : void 0,
          profile_card: k != null ? k : void 0,
          replace_media_text: q != null ? q : void 0,
          reveal_details_over_time: U != null ? U : void 0,
          show_destination_blurbs: w != null ? w : void 0,
          show_summary: V != null ? V : void 0,
          site_extensions: z != null ? z : void 0,
          standard_enhancements: C != null ? C : void 0,
          standard_enhancements_catalog: T != null ? T : void 0,
          text_optimizations: A != null ? A : void 0,
          text_translation: F != null ? F : void 0,
          translate_voiceover: B != null ? B : void 0,
          video_auto_crop: s != null ? s : void 0,
          video_filtering: X != null ? X : void 0,
          video_highlight: d != null ? d : void 0,
          video_highlights: m != null ? m : void 0,
          video_to_image: le != null ? le : void 0,
          video_uncrop: c != null ? c : void 0,
          video_voiceover: W != null ? W : void 0,
          wa_mm_image_filtering: oe != null ? oe : void 0,
        }
      );
    }
    l.coerceGraphQLSpecToGraphAPI = e;
  },
  98,
);
