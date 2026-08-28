__d(
  "AdCreativeSpecUtil",
  [
    "AdActorTypes",
    "AdCreativeAuthorizationCategory",
    "AdCreativeDestinationGuidancesApplied",
    "AdCreativeDestinationOptimizationType",
    "AdCreativeDestinationType",
    "AdCreativeFeatureActionType",
    "AdCreativeFeatureEnrollStatus",
    "AdCreativeFormatTransformationCustomizationConfigName",
    "AdCreativeFormatTransformationDataSourceType",
    "AdCreativeFormatTransformationFormatType",
    "AdCreativeMediaType",
    "AdCreativeSEConsentScope",
    "AdCreativeSourceActionType",
    "AdCreativeSourceCatalogTagSource",
    "AdCreativeSourceEnrollStatus",
    "AdInstantCheckoutSetting",
    "AdsAPIAdCreativeShopSpecLandingViews",
    "AdsAPIAssetFeedTextActionType",
    "AdsAPIPublisherPlatform",
    "AdsApplinkTreatments",
    "AdsAspectRatioTypes",
    "AdsCreativeFlexSpecUtils",
    "AdsDynamicAdVoices",
    "AdsPixelConversionEventsEnum",
    "AdsSEConsentScopeRolloutUtils",
    "AdsTargetingGender",
    "ApiAdCreativeAdDisclaimerTitles",
    "ApiAdCreativeDestinationOptimizationEnrollmentStatus",
    "ApiAdObjectTypes",
    "ApiCarouselDeliveryMode",
    "BrandedContentBoostingType",
    "CallToActionTypes",
    "ContextualMultiAdsActionMetadataType",
    "CreativeMetadataSubfeature",
    "CreativeMultiMediaSource",
    "CreatorAdsPermissionType",
    "DynamicCategorizationCriteria",
    "DynamicCategoryAdMediaSource",
    "DynamicImageLayerCroppingOptions",
    "DynamicImageLayerFrameOverlayBlendingModes",
    "DynamicImageLayerFrameSources",
    "DynamicImageLayerImageSources",
    "DynamicImageLayerOverlayPositions",
    "DynamicImageLayerPaddingOptions",
    "DynamicImageLayerTextFonts",
    "DynamicImageLayerTextOverlayContentTypes",
    "DynamicImageLayerTextOverlayShapes",
    "DynamicImageLayerTypes",
    "HSMAvailableLanguagesType",
    "IGBrandedContentAdRenderFormat",
    "MarketingMessageButtonType",
    "MarketingMessageButtonUtils",
    "MultiMediaCropType",
    "PCAFormatType",
    "PartnershipAdsRankingIdentityType",
    "ProductSetPartnerSelectionStatusEnum",
    "TypeCoercionUtils",
    "VideoThumbnailSource",
    "XFBCTMSMCProductDataDecisionUtils.facebook",
    "XFBCTMSMCProductDataSourceUtils.facebook",
    "enumUtils",
    "filterNulls",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["creative_audience_pairing_persona", "variant_types"],
      s = ["creative_audience_pairing_persona"],
      u = void 0;
    function c(e) {
      var t = new Map();
      for (var n of e) {
        var r,
          o = []
            .concat((r = n.scope) != null ? r : [])
            .sort()
            .join(",");
        t.set(n.name + "|" + o, n);
      }
      var a = Array.from(t.values());
      return a.length > 0 ? a : void 0;
    }
    function d(e) {
      var t;
      if (e != null) {
        var n,
          a = (t = e.website_summary) == null ? void 0 : t.selling_points;
        if ((a == null ? void 0 : a.enroll_status) != null) {
          var l = o("TypeCoercionUtils").coerceNonMaybeValue(
            r("getJSEnumSafe")(
              r("AdCreativeSourceEnrollStatus"),
              a.enroll_status,
            ),
            "app_experience_spec.website_summary.selling_points.enroll_status",
            i.id,
          );
          if (l != null) {
            var s;
            n = {
              selling_points: {
                action_metadata:
                  (s = a.action_metadata) != null && s.type
                    ? {
                        type: o("TypeCoercionUtils").coerceNonMaybeValue(
                          r("getJSEnumSafe")(
                            r("AdCreativeSourceActionType"),
                            a.action_metadata.type,
                          ),
                          "app_experience_spec.website_summary.selling_points.action_metadata.type",
                          i.id,
                        ),
                      }
                    : void 0,
                enroll_status: l,
              },
            };
          }
        }
        var u = function (t) {
            var e = t == null ? void 0 : t.data_sources;
            if (e != null) {
              var n = r("filterNulls")(
                e.map(function (e) {
                  var t,
                    n,
                    o = e.feature_name,
                    a = r("getJSEnumSafe")(
                      r("AdCreativeSourceEnrollStatus"),
                      e.enroll_status,
                    );
                  return o == null || a == null
                    ? null
                    : {
                        action_metadata:
                          (t = e.action_metadata) != null && t.type
                            ? {
                                type:
                                  (n = r("getJSEnumSafe")(
                                    r("AdCreativeSourceActionType"),
                                    e.action_metadata.type,
                                  )) != null
                                    ? n
                                    : void 0,
                              }
                            : void 0,
                        enroll_status: a,
                        feature_name: o,
                      };
                }),
              );
              return n.length > 0 ? { data_sources: n } : void 0;
            }
          },
          c = u(e.reveal_details),
          d = u(e.show_spotlights);
        if (!(n == null && c == null && d == null))
          return { reveal_details: c, show_spotlights: d, website_summary: n };
      }
    }
    function m(e) {
      var t, n, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L;
      if (e != null)
        return {
          capabilities:
            e != null && e.capabilities
              ? {
                  allow_generated_pills:
                    (t = e.capabilities) != null && t.allow_generated_pills
                      ? o("TypeCoercionUtils").coerceObjectToUndefined({
                          action_metadata:
                            ((n = e.capabilities.allow_generated_pills) == null
                              ? void 0
                              : n.action_metadata) != null &&
                            (a = r("getJSEnumSafe")(
                              r("ContextualMultiAdsActionMetadataType"),
                              (i = e.capabilities.allow_generated_pills) == null
                                ? void 0
                                : i.action_metadata,
                            )) != null
                              ? a
                              : void 0,
                          enroll_status:
                            (e == null ||
                            (l = e.capabilities) == null ||
                            (l = l.allow_generated_pills) == null
                              ? void 0
                              : l.enroll_status) != null &&
                            (s = r("getJSEnumSafe")(
                              r("AdCreativeFeatureEnrollStatus"),
                              e == null ||
                                (u = e.capabilities) == null ||
                                (u = u.allow_generated_pills) == null
                                ? void 0
                                : u.enroll_status,
                            )) != null
                              ? s
                              : void 0,
                        })
                      : void 0,
                  prompts:
                    e != null && (c = e.capabilities) != null && c.prompts
                      ? o("TypeCoercionUtils").coerceObjectToUndefined({
                          action_metadata:
                            e != null &&
                            (d = e.capabilities) != null &&
                            (d = d.prompts) != null &&
                            d.action_metadata &&
                            (m = r("getJSEnumSafe")(
                              r("ContextualMultiAdsActionMetadataType"),
                              (p = e.capabilities.prompts) == null
                                ? void 0
                                : p.action_metadata,
                            )) != null
                              ? m
                              : void 0,
                          enroll_status:
                            e != null &&
                            (_ = e.capabilities) != null &&
                            (_ = _.prompts) != null &&
                            _.enroll_status &&
                            (f = r("getJSEnumSafe")(
                              r("AdCreativeFeatureEnrollStatus"),
                              e == null ||
                                (g = e.capabilities) == null ||
                                (g = g.prompts) == null
                                ? void 0
                                : g.enroll_status,
                            )) != null
                              ? f
                              : void 0,
                        })
                      : void 0,
                  skills:
                    e != null && (h = e.capabilities) != null && h.skills
                      ? o("TypeCoercionUtils").coerceObjectToUndefined({
                          action_metadata:
                            e != null &&
                            (y = e.capabilities) != null &&
                            (y = y.skills) != null &&
                            y.action_metadata &&
                            (C = r("getJSEnumSafe")(
                              r("ContextualMultiAdsActionMetadataType"),
                              (b = e.capabilities.skills) == null
                                ? void 0
                                : b.action_metadata,
                            )) != null
                              ? C
                              : void 0,
                          enroll_status:
                            e != null &&
                            (v = e.capabilities) != null &&
                            (v = v.skills) != null &&
                            v.enroll_status &&
                            (S = r("getJSEnumSafe")(
                              r("AdCreativeFeatureEnrollStatus"),
                              (R = e.capabilities.skills) == null
                                ? void 0
                                : R.enroll_status,
                            )) != null
                              ? S
                              : void 0,
                        })
                      : void 0,
                }
              : void 0,
          pills: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            ((L = e == null ? void 0 : e.pills) != null ? L : []).flatMap(
              function (e) {
                var t = e.pill_id;
                return t == null ? [] : [{ pill_id: t }];
              },
            ),
          ),
        };
    }
    function p(t) {
      var n,
        a,
        l,
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
        ge,
        he,
        ye,
        Ce,
        be,
        ve,
        Se,
        Re,
        Le,
        Ee,
        ke,
        Ie,
        Te,
        De,
        xe,
        $e,
        Pe,
        Ne,
        Me,
        we,
        Ae,
        Fe,
        Oe,
        Be,
        We,
        qe,
        Ue,
        Ve,
        He,
        Ge,
        ze,
        je,
        Ke,
        Qe,
        Xe,
        Ye,
        Je,
        Ze,
        et,
        tt,
        nt,
        rt,
        ot,
        at,
        it,
        lt,
        st,
        ut,
        ct,
        dt,
        mt,
        pt,
        _t,
        ft,
        gt,
        ht,
        yt,
        Ct,
        bt,
        vt,
        St,
        Rt,
        Lt,
        Et,
        kt,
        It,
        Tt,
        Dt,
        xt,
        $t,
        Pt,
        Nt,
        Mt,
        wt,
        At,
        Ft,
        Ot,
        Bt,
        Wt,
        qt,
        Ut,
        Vt,
        Ht,
        Gt,
        zt,
        jt,
        Kt,
        Qt,
        Xt,
        Yt,
        Jt,
        Zt,
        en,
        tn,
        nn,
        rn,
        on,
        an,
        ln,
        sn,
        un,
        cn,
        dn,
        mn,
        pn,
        _n,
        fn,
        gn,
        hn,
        yn,
        Cn,
        bn,
        vn,
        Sn,
        Rn,
        Ln,
        En,
        kn,
        In,
        Tn,
        Dn,
        xn,
        $n,
        Pn,
        Nn,
        Mn,
        wn,
        An,
        Fn,
        On,
        Bn,
        Wn,
        qn,
        Un,
        Vn,
        Hn,
        Gn,
        zn,
        jn,
        Kn,
        Qn,
        Xn,
        Yn,
        Jn,
        Zn,
        er,
        tr,
        nr,
        rr,
        or,
        ar,
        ir,
        lr,
        sr,
        ur,
        cr,
        dr,
        mr,
        pr,
        _r,
        fr,
        gr,
        hr,
        yr,
        Cr,
        br,
        vr,
        Sr,
        Rr,
        Lr,
        Er,
        kr,
        Ir,
        Tr,
        Dr,
        xr,
        $r,
        Pr,
        Nr,
        Mr,
        wr,
        Ar,
        Fr,
        Or,
        Br,
        Wr,
        qr,
        Ur,
        Vr,
        Hr,
        Gr,
        zr,
        jr,
        Kr,
        Qr,
        Xr,
        Yr,
        Jr,
        Zr,
        eo,
        to,
        no,
        ro,
        oo,
        ao,
        io,
        lo,
        so,
        uo,
        co,
        mo,
        po,
        _o,
        fo,
        go,
        ho,
        yo,
        Co,
        bo,
        vo,
        So,
        Ro,
        Lo,
        Eo,
        ko,
        Io,
        To,
        Do,
        xo,
        $o,
        Po,
        No,
        Mo,
        wo,
        Ao,
        Fo,
        Oo,
        Bo,
        Wo,
        qo,
        Uo,
        Vo,
        Ho,
        Go,
        zo,
        jo,
        Ko,
        Qo,
        Xo,
        Yo,
        Jo,
        Zo,
        ea,
        ta,
        na,
        ra,
        oa,
        aa,
        ia,
        la,
        sa,
        ua,
        ca,
        da,
        ma,
        pa,
        _a,
        fa,
        ga,
        ha,
        ya,
        Ca,
        ba,
        va,
        Sa,
        Ra,
        La,
        Ea,
        ka,
        Ia,
        Ta,
        Da,
        xa,
        $a,
        Pa,
        Na,
        Ma,
        wa,
        Aa,
        Fa,
        Oa,
        Ba,
        Wa,
        qa,
        Ua,
        Va,
        Ha,
        Ga,
        za,
        ja,
        Ka,
        Qa,
        Xa,
        Ya,
        Ja,
        Za,
        ei,
        ti,
        ni,
        ri,
        oi,
        ai,
        ii,
        li,
        si,
        ui,
        ci,
        di,
        mi,
        pi,
        _i,
        fi,
        gi,
        hi,
        yi,
        Ci,
        bi =
          (n = t.dynamic_ad_creative_attachment) == null
            ? void 0
            : n.recommender_settings,
        vi =
          (a = t.dynamic_ad_creative_attachment) == null
            ? void 0
            : a.template_url_spec;
      return (
        vi == null && (vi = t.template_url_spec),
        {
          actor_type:
            (l = r("getJSEnumSafe")(r("AdActorTypes"), t.actor_type)) != null
              ? l
              : void 0,
          ad_disclaimer_spec: t.ad_disclaimer_spec
            ? {
                text:
                  (p = (_ = t.ad_disclaimer_spec) == null ? void 0 : _.text) !=
                  null
                    ? p
                    : void 0,
                title: o("TypeCoercionUtils").coerceNonMaybeValue(
                  o("enumUtils").coerceFromKey(
                    o("TypeCoercionUtils").coerceNonMaybeValue(
                      t.ad_disclaimer_spec.title,
                      "ad_disclaimer_spec.title",
                      i.id,
                    ),
                    r("ApiAdCreativeAdDisclaimerTitles"),
                  ),
                  "ad_disclaimer_spec.title",
                  i.id,
                ),
                url:
                  (f = (g = t.ad_disclaimer_spec) == null ? void 0 : g.url) !=
                  null
                    ? f
                    : void 0,
              }
            : void 0,
          app_experience_spec: d(t.app_experience_spec),
          applink_treatment:
            (h = r("getJSEnumSafe")(
              r("AdsApplinkTreatments"),
              t.applink_treatment,
            )) != null
              ? h
              : void 0,
          asset_feed_id: void 0,
          asset_feed_spec:
            (y = t.asset_feed_spec) != null && y.ad_creative_asset_feed_spec
              ? o("TypeCoercionUtils").coerceObjectToUndefined(
                  (C = t.asset_feed_spec) == null
                    ? void 0
                    : C.ad_creative_asset_feed_spec,
                )
              : void 0,
          authorization_category:
            (b = r("getJSEnumSafe")(
              r("AdCreativeAuthorizationCategory"),
              (v = t.authorization_attachment) == null
                ? void 0
                : v.authorization_category,
            )) != null
              ? b
              : void 0,
          biz_ai: m(t.biz_ai),
          body: (S = t.body_content) != null ? S : void 0,
          branded_content: t.branded_content
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                acting_business_id:
                  (R =
                    (L = t.branded_content) == null
                      ? void 0
                      : L.acting_business_id) != null
                    ? R
                    : void 0,
                ad_format:
                  (E = t.branded_content) != null &&
                  E.ad_format &&
                  (k = o("enumUtils").coerceFromKey(
                    t.branded_content.ad_format,
                    r("IGBrandedContentAdRenderFormat"),
                  )) != null
                    ? k
                    : void 0,
                automated_adgroup_creation:
                  (I =
                    t == null || (T = t.branded_content) == null
                      ? void 0
                      : T.automated_adgroup_creation) != null
                    ? I
                    : void 0,
                content_list:
                  (D = t.branded_content) != null && D.content_list
                    ? {
                        id:
                          (x = t.branded_content.content_list.id) != null
                            ? x
                            : void 0,
                        import_time:
                          ($ = t.branded_content.content_list.import_time) !=
                          null
                            ? $
                            : void 0,
                      }
                    : void 0,
                content_search_input:
                  (P =
                    (N = t.branded_content) == null
                      ? void 0
                      : N.content_search_input) != null
                    ? P
                    : void 0,
                creator_ad_permission_type:
                  (M = r("getJSEnumSafe")(
                    r("CreatorAdsPermissionType"),
                    (w = t.branded_content) == null
                      ? void 0
                      : w.creator_ad_permission_type,
                  )) != null
                    ? M
                    : void 0,
                deliver_dynamic_partner_content:
                  (A =
                    t == null || (F = t.branded_content) == null
                      ? void 0
                      : F.deliver_dynamic_partner_content) != null
                    ? A
                    : void 0,
                facebook_boost_post_access_token:
                  (O =
                    (B = t.branded_content) == null
                      ? void 0
                      : B.facebook_boost_post_access_token) != null
                    ? O
                    : void 0,
                instagram_boost_post_access_token:
                  (W =
                    (q = t.branded_content) == null
                      ? void 0
                      : q.instagram_boost_post_access_token) != null
                    ? W
                    : void 0,
                parent_source_facebook_post_id:
                  (U =
                    (V = t.branded_content) == null
                      ? void 0
                      : V.parent_source_facebook_post_id) != null
                    ? U
                    : void 0,
                parent_source_instagram_media_id:
                  (H =
                    (G = t.branded_content) == null
                      ? void 0
                      : G.parent_source_instagram_media_id) != null
                    ? H
                    : void 0,
                partners: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  (z = t.branded_content) == null
                    ? void 0
                    : z.partners.map(function (e) {
                        var t, n, o, a;
                        return {
                          fb_page_id: (t = e.fb_page_id) != null ? t : void 0,
                          identity_type:
                            (n = r("PartnershipAdsRankingIdentityType").cast(
                              e.identity_type,
                            )) != null
                              ? n
                              : void 0,
                          ig_asset_id: (o = e.ig_asset_id) != null ? o : void 0,
                          ig_user_id: (a = e.ig_user_id) != null ? a : void 0,
                        };
                      }),
                ),
                permission_type: u,
                product_set_partner_selection_status:
                  (j = r("getJSEnumSafe")(
                    r("ProductSetPartnerSelectionStatusEnum"),
                    (K = t.branded_content) == null
                      ? void 0
                      : K.product_set_partner_selection_status,
                  )) != null
                    ? j
                    : void 0,
                promoted_page_id:
                  (Q = o("TypeCoercionUtils").coerceZeroToUndefined(
                    (X = t.branded_content) == null
                      ? void 0
                      : X.promoted_page_id,
                  )) != null
                    ? Q
                    : void 0,
                testimonial:
                  (Y =
                    (J = t.branded_content) == null ? void 0 : J.testimonial) !=
                  null
                    ? Y
                    : void 0,
                ui_version:
                  (Z =
                    (ee = t.branded_content) == null
                      ? void 0
                      : ee.ui_version) != null
                    ? Z
                    : void 0,
              })
            : void 0,
          branded_content_boosting_type:
            (te = r("getJSEnumSafe")(
              r("BrandedContentBoostingType"),
              t.branded_content_boosting_type,
            )) != null
              ? te
              : void 0,
          branded_content_sponsor_page_id: t.branded_content_sponsor_page_id,
          call_to_action:
            (ne =
              (re = t.call_to_action) == null
                ? void 0
                : re.call_to_action_spec) != null
              ? ne
              : void 0,
          call_to_action_type:
            (oe = r("getJSEnumSafe")(
              r("CallToActionTypes"),
              t.call_to_action_type,
            )) != null
              ? oe
              : void 0,
          categorization_criteria:
            (ae = t.dynamic_category_ad_attachment) != null &&
            ae.categorization_criteria &&
            (ie = o("enumUtils").coerceFromKey(
              (le = t.dynamic_category_ad_attachment) == null
                ? void 0
                : le.categorization_criteria,
              r("DynamicCategorizationCriteria"),
            )) != null
              ? ie
              : void 0,
          category_media_source:
            (se = r("getJSEnumSafe")(
              r("DynamicCategoryAdMediaSource"),
              (ue = t.dynamic_category_ad_attachment) == null
                ? void 0
                : ue.category_media_source,
            )) != null
              ? se
              : void 0,
          collaborative_ads_lsb_image_bank_id: void 0,
          contextual_multi_ads: t.contextual_multi_ads
            ? {
                action_metadata:
                  (ce = t.contextual_multi_ads) != null &&
                  (ce = ce.action_metadata) != null &&
                  ce.type
                    ? {
                        type: o("TypeCoercionUtils").coerceNonMaybeValue(
                          r("getJSEnumSafe")(
                            r("ContextualMultiAdsActionMetadataType"),
                            t.contextual_multi_ads.action_metadata.type,
                          ),
                          "contextual_multi_ads.action_metadata.type",
                          i.id,
                        ),
                      }
                    : void 0,
                eligibility:
                  (de = t.contextual_multi_ads) != null &&
                  de.eligibility &&
                  (me = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                    t.contextual_multi_ads.eligibility,
                  )) != null
                    ? me
                    : void 0,
                enroll_status:
                  (pe =
                    (_e = t.contextual_multi_ads) == null
                      ? void 0
                      : _e.enroll_status) != null
                    ? pe
                    : void 0,
              }
            : void 0,
          creative_id: void 0,
          creative_optional: void 0,
          creative_sourcing_spec: t.creative_sourcing_spec
            ? o(
                "TypeCoercionUtils",
              ).coerceObjectWithNullAndEmptyArraysToUndefined({
                ad_extensions_relevancy_spec:
                  (fe = t.creative_sourcing_spec) != null &&
                  fe.ad_extensions_relevancy_spec
                    ? {
                        ai_relevancy_ent_id:
                          (ge = t.creative_sourcing_spec) == null ||
                          (ge = ge.ad_extensions_relevancy_spec) == null
                            ? void 0
                            : ge.ai_relevancy_ent_id,
                        extension_specs:
                          (he = t.creative_sourcing_spec) == null ||
                          (he = he.ad_extensions_relevancy_spec) == null ||
                          (he = he.extension_specs) == null
                            ? void 0
                            : he.map(function (e) {
                                return {
                                  extension_type: e.extension_type,
                                  selected_strategy_id: e.selected_strategy_id,
                                  virtual_pset_id: e.virtual_pset_id,
                                };
                              }),
                      }
                    : void 0,
                app_info_spec: (function (
                  e,
                  n,
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
                ) {
                  var D =
                    (e = t.creative_sourcing_spec) == null
                      ? void 0
                      : e.app_info_spec;
                  if (D) {
                    var x = D.ratings_and_reviews;
                    return {
                      action_metadata:
                        (n = D.action_metadata) != null && n.type
                          ? {
                              type: o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceActionType"),
                                  D.action_metadata.type,
                                ),
                                "creative_sourcing_spec.app_info_spec.action_metadata.type",
                                i.id,
                              ),
                            }
                          : void 0,
                      app_information: D.app_information
                        ? {
                            action_metadata:
                              (a = D.app_information) != null &&
                              (a = a.action_metadata) != null &&
                              a.type
                                ? {
                                    type: o(
                                      "TypeCoercionUtils",
                                    ).coerceNonMaybeValue(
                                      r("getJSEnumSafe")(
                                        r("AdCreativeSourceActionType"),
                                        D.app_information.action_metadata.type,
                                      ),
                                      "creative_sourcing_spec.app_info_spec.action_metadata.type",
                                      i.id,
                                    ),
                                  }
                                : void 0,
                            app_author:
                              (l =
                                (s = D.app_information) == null
                                  ? void 0
                                  : s.app_author) != null
                                ? l
                                : void 0,
                            app_category:
                              (u =
                                (c = D.app_information) == null
                                  ? void 0
                                  : c.app_category) != null
                                ? u
                                : void 0,
                            app_description:
                              (d =
                                (m = D.app_information) == null
                                  ? void 0
                                  : m.app_description) != null
                                ? d
                                : void 0,
                            app_name:
                              (p =
                                (_ = D.app_information) == null
                                  ? void 0
                                  : _.app_name) != null
                                ? p
                                : void 0,
                            app_price:
                              (f =
                                (g = D.app_information) == null
                                  ? void 0
                                  : g.app_price) != null
                                ? f
                                : void 0,
                            app_subtitle:
                              (h =
                                (y = D.app_information) == null
                                  ? void 0
                                  : y.app_subtitle) != null
                                ? h
                                : void 0,
                            enroll_status:
                              (C = D.app_information) != null && C.enroll_status
                                ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                    r("getJSEnumSafe")(
                                      r("AdCreativeSourceEnrollStatus"),
                                      D.app_information.enroll_status,
                                    ),
                                    "creative_sourcing_spec.app_info_spec.app_information.enroll_status",
                                    i.id,
                                  )
                                : void 0,
                          }
                        : void 0,
                      application_id: void 0,
                      enroll_status: D.enroll_status
                        ? o("TypeCoercionUtils").coerceNonMaybeValue(
                            r("getJSEnumSafe")(
                              r("AdCreativeSourceEnrollStatus"),
                              D.enroll_status,
                            ),
                            "creative_sourcing_spec.app_info_spec.enroll_status",
                            i.id,
                          )
                        : void 0,
                      media: D.media
                        ? {
                            action_metadata:
                              (b = D.media) != null &&
                              (b = b.action_metadata) != null &&
                              b.type
                                ? {
                                    type: o(
                                      "TypeCoercionUtils",
                                    ).coerceNonMaybeValue(
                                      r("getJSEnumSafe")(
                                        r("AdCreativeSourceActionType"),
                                        D.media.action_metadata.type,
                                      ),
                                      "creative_sourcing_spec.app_info_spec.media.action_metadata.type",
                                      i.id,
                                    ),
                                  }
                                : void 0,
                            enroll_status:
                              (v = D.media) != null && v.enroll_status
                                ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                    r("getJSEnumSafe")(
                                      r("AdCreativeSourceEnrollStatus"),
                                      D.media.enroll_status,
                                    ),
                                    "creative_sourcing_spec.app_info_spec.media.enroll_status",
                                    i.id,
                                  )
                                : void 0,
                            icon_image_url:
                              (S =
                                (R = D.media) == null
                                  ? void 0
                                  : R.icon_image_url) != null
                                ? S
                                : void 0,
                            screenshot_urls: o(
                              "TypeCoercionUtils",
                            ).coerceEmptyArrayToUndefined(
                              (L =
                                (E = D.media) == null
                                  ? void 0
                                  : E.screenshot_urls) != null
                                ? L
                                : [],
                            ),
                          }
                        : void 0,
                      object_store_url: void 0,
                      ratings_and_reviews: x
                        ? {
                            action_metadata:
                              (k = x.action_metadata) != null && k.type
                                ? {
                                    type: o(
                                      "TypeCoercionUtils",
                                    ).coerceNonMaybeValue(
                                      r("getJSEnumSafe")(
                                        r("AdCreativeSourceActionType"),
                                        x.action_metadata.type,
                                      ),
                                      "creative_sourcing_spec.app_info_spec.ratings_and_reviews.action_metadata.type",
                                      i.id,
                                    ),
                                  }
                                : void 0,
                            enroll_status: x.enroll_status
                              ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                  r("getJSEnumSafe")(
                                    r("AdCreativeSourceEnrollStatus"),
                                    x.enroll_status,
                                  ),
                                  "creative_sourcing_spec.app_info_spec.ratings_and_reviews.enroll_status",
                                  i.id,
                                )
                              : void 0,
                            ratings: (I = x.ratings) != null ? I : void 0,
                            star_reviews:
                              (T = x.star_reviews) != null ? T : void 0,
                            summary_rating: Array.isArray(x.summary_rating)
                              ? [].concat(x.summary_rating)
                              : void 0,
                            top_reviews: x.top_reviews
                              ? o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyArrayToUndefined(
                                  x.top_reviews.map(function (e) {
                                    var t, n, r;
                                    return {
                                      is_checked:
                                        (t = e.is_checked) != null ? t : void 0,
                                      is_featured:
                                        (n = e.is_featured) != null
                                          ? n
                                          : void 0,
                                      review_text:
                                        (r = e.review_text) != null ? r : "",
                                    };
                                  }),
                                )
                              : [],
                          }
                        : void 0,
                    };
                  }
                })(),
                associated_product_set_id:
                  (ye =
                    (Ce = t.creative_sourcing_spec) == null
                      ? void 0
                      : Ce.associated_product_set_id) != null
                    ? ye
                    : void 0,
                brand:
                  (be = t.creative_sourcing_spec) != null && be.brand
                    ? {
                        action_metadata:
                          (ve = t.creative_sourcing_spec) != null &&
                          (ve = ve.brand) != null &&
                          (ve = ve.action_metadata) != null &&
                          ve.type
                            ? {
                                type: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  r("getJSEnumSafe")(
                                    r("AdCreativeSourceActionType"),
                                    t.creative_sourcing_spec.brand
                                      .action_metadata.type,
                                  ),
                                  "creative_sourcing_spec.brand.action_metadata.type",
                                  i.id,
                                ),
                              }
                            : void 0,
                        enroll_status:
                          (Se = t.creative_sourcing_spec) != null &&
                          (Se = Se.brand) != null &&
                          Se.enroll_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  t.creative_sourcing_spec.brand.enroll_status,
                                ),
                                "creative_sourcing_spec.brand.enroll_status",
                                i.id,
                              )
                            : void 0,
                        preset_id:
                          (Re = t.creative_sourcing_spec) == null ||
                          (Re = Re.brand) == null
                            ? void 0
                            : Re.preset_id,
                      }
                    : void 0,
                catalog:
                  (Le = t.creative_sourcing_spec) != null && Le.catalog
                    ? {
                        action_metadata:
                          (Ee = t.creative_sourcing_spec) != null &&
                          (Ee = Ee.catalog) != null &&
                          (Ee = Ee.action_metadata) != null &&
                          Ee.type
                            ? {
                                type: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  r("getJSEnumSafe")(
                                    r("AdCreativeSourceActionType"),
                                    t.creative_sourcing_spec.catalog
                                      .action_metadata.type,
                                  ),
                                  "creative_sourcing_spec.catalog.action_metadata.type",
                                  i.id,
                                ),
                              }
                            : void 0,
                        enroll_status:
                          (ke = t.creative_sourcing_spec) != null &&
                          (ke = ke.catalog) != null &&
                          ke.enroll_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  t.creative_sourcing_spec.catalog
                                    .enroll_status,
                                ),
                                "creative_sourcing_spec.catalog.enroll_status",
                                i.id,
                              )
                            : void 0,
                        selection_enhancement_tag_source:
                          (Ie = t.creative_sourcing_spec) != null &&
                          (Ie = Ie.catalog) != null &&
                          Ie.selection_enhancement_tag_source
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceCatalogTagSource"),
                                  t.creative_sourcing_spec.catalog
                                    .selection_enhancement_tag_source,
                                ),
                                "creative_sourcing_spec.catalog.selection_enhancement_tag_source",
                                i.id,
                              )
                            : void 0,
                      }
                    : void 0,
                destination_screenshot_spec:
                  (Te = t.creative_sourcing_spec) != null &&
                  Te.destination_screenshot_spec
                    ? {
                        enroll_status:
                          (De = t.creative_sourcing_spec) != null &&
                          (De = De.destination_screenshot_spec) != null &&
                          De.enroll_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  t.creative_sourcing_spec
                                    .destination_screenshot_spec.enroll_status,
                                ),
                                "creative_sourcing_spec.destination_screenshot_spec.enroll_status",
                                i.id,
                              )
                            : void 0,
                        screenshot_image_hash:
                          (xe =
                            ($e = t.creative_sourcing_spec) == null ||
                            ($e = $e.destination_screenshot_spec) == null
                              ? void 0
                              : $e.screenshot_image_hash) != null
                            ? xe
                            : void 0,
                      }
                    : void 0,
                dynamic_site_links_spec:
                  (Pe = t.creative_sourcing_spec) != null &&
                  Pe.dynamic_site_links_spec
                    ? {
                        action_metadata:
                          (Ne = t.creative_sourcing_spec) != null &&
                          (Ne = Ne.dynamic_site_links_spec) != null &&
                          (Ne = Ne.action_metadata) != null &&
                          Ne.type
                            ? {
                                type: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  r("getJSEnumSafe")(
                                    r("AdCreativeSourceActionType"),
                                    t.creative_sourcing_spec
                                      .dynamic_site_links_spec.action_metadata
                                      .type,
                                  ),
                                  "creative_sourcing_spec.dynamic_site_links_spec.action_metadata.type",
                                  i.id,
                                ),
                              }
                            : void 0,
                        enroll_status:
                          (Me = t.creative_sourcing_spec) != null &&
                          (Me = Me.dynamic_site_links_spec) != null &&
                          Me.enroll_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  t.creative_sourcing_spec
                                    .dynamic_site_links_spec.enroll_status,
                                ),
                                "creative_sourcing_spec.dynamic_site_links_spec.enroll_status",
                                i.id,
                              )
                            : void 0,
                      }
                    : void 0,
                enable_social_feedback_preservation:
                  (we =
                    (Ae = t.creative_sourcing_spec) == null
                      ? void 0
                      : Ae.enable_social_feedback_preservation) != null
                    ? we
                    : void 0,
                featured_offering_spec:
                  (Fe = t.creative_sourcing_spec) != null &&
                  Fe.featured_offering_spec
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        action_metadata:
                          (Oe = t.creative_sourcing_spec) != null &&
                          (Oe = Oe.featured_offering_spec) != null &&
                          Oe.action_metadata
                            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                                type:
                                  (Be = t.creative_sourcing_spec) != null &&
                                  (Be = Be.featured_offering_spec) != null &&
                                  (Be = Be.action_metadata) != null &&
                                  Be.type
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        r("getJSEnumSafe")(
                                          r("AdCreativeSourceActionType"),
                                          (We = t.creative_sourcing_spec) ==
                                            null ||
                                            (We = We.featured_offering_spec) ==
                                              null ||
                                            (We = We.action_metadata) == null
                                            ? void 0
                                            : We.type,
                                        ),
                                        "creative_sourcing_spec.featured_offering_spec.action_metadata.type",
                                        i.id,
                                      )
                                    : void 0,
                              })
                            : void 0,
                        adex_had_data:
                          (qe =
                            (Ue = t.creative_sourcing_spec) == null ||
                            (Ue = Ue.featured_offering_spec) == null
                              ? void 0
                              : Ue.adex_had_data) != null
                            ? qe
                            : void 0,
                        adex_had_impression:
                          (Ve =
                            (He = t.creative_sourcing_spec) == null ||
                            (He = He.featured_offering_spec) == null
                              ? void 0
                              : He.adex_had_impression) != null
                            ? Ve
                            : void 0,
                        default_status:
                          (Ge = t.creative_sourcing_spec) != null &&
                          (Ge = Ge.featured_offering_spec) != null &&
                          Ge.default_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  (ze = t.creative_sourcing_spec) == null ||
                                    (ze = ze.featured_offering_spec) == null
                                    ? void 0
                                    : ze.default_status,
                                ),
                                "creative_sourcing_spec.featured_offering_spec.default_status",
                                i.id,
                              )
                            : void 0,
                        enroll_status:
                          (je = t.creative_sourcing_spec) != null &&
                          (je = je.featured_offering_spec) != null &&
                          je.enroll_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  (Ke = t.creative_sourcing_spec) == null ||
                                    (Ke = Ke.featured_offering_spec) == null
                                    ? void 0
                                    : Ke.enroll_status,
                                ),
                                "creative_sourcing_spec.featured_offering_spec.enroll_status",
                                i.id,
                              )
                            : void 0,
                        media:
                          (Qe = t.creative_sourcing_spec) != null &&
                          (Qe = Qe.featured_offering_spec) != null &&
                          Qe.media
                            ? t.creative_sourcing_spec.featured_offering_spec.media.map(
                                function (e) {
                                  var t, n, r, o, a;
                                  return {
                                    description:
                                      (t =
                                        e == null ? void 0 : e.description) !=
                                      null
                                        ? t
                                        : void 0,
                                    image_hash:
                                      (n = e == null ? void 0 : e.image_hash) !=
                                      null
                                        ? n
                                        : void 0,
                                    image_url:
                                      (r = e == null ? void 0 : e.image_url) !=
                                      null
                                        ? r
                                        : void 0,
                                    title:
                                      (o = e == null ? void 0 : e.title) != null
                                        ? o
                                        : void 0,
                                    url:
                                      (a = e == null ? void 0 : e.url) != null
                                        ? a
                                        : void 0,
                                  };
                                },
                              )
                            : void 0,
                      })
                    : void 0,
                ncs_testimonial:
                  (Xe = t.creative_sourcing_spec) != null && Xe.ncs_testimonial
                    ? {
                        auto_linked_with_campaign_group_id:
                          (Ye =
                            (Je = t.creative_sourcing_spec) == null ||
                            (Je = Je.ncs_testimonial) == null
                              ? void 0
                              : Je.auto_linked_with_campaign_group_id) != null
                            ? Ye
                            : void 0,
                        brief_id:
                          (Ze =
                            (et = t.creative_sourcing_spec) == null ||
                            (et = et.ncs_testimonial) == null
                              ? void 0
                              : et.brief_id) != null
                            ? Ze
                            : void 0,
                      }
                    : void 0,
                pca_spec:
                  ((tt = t.creative_sourcing_spec) == null ||
                  (tt = tt.pca_spec) == null
                    ? void 0
                    : tt.pca_use_case) != null
                    ? {
                        pca_use_case:
                          typeof t.creative_sourcing_spec.pca_spec
                            .pca_use_case == "number"
                            ? t.creative_sourcing_spec.pca_spec.pca_use_case
                            : o("TypeCoercionUtils").coerceNonMaybeValue(
                                o("enumUtils").coerceFromKey(
                                  t.creative_sourcing_spec.pca_spec
                                    .pca_use_case,
                                  r("PCAFormatType"),
                                ),
                                "creative_sourcing_spec.pca_spec.pca_use_case",
                                i.id,
                              ),
                      }
                    : void 0,
                product_media_metadata_spec:
                  (nt = t.creative_sourcing_spec) != null &&
                  nt.product_media_metadata_spec
                    ? {
                        description:
                          (rt =
                            (ot = t.creative_sourcing_spec) == null ||
                            (ot = ot.product_media_metadata_spec) == null
                              ? void 0
                              : ot.description) != null
                            ? rt
                            : void 0,
                        format_option:
                          (at =
                            (it = t.creative_sourcing_spec) == null ||
                            (it = it.product_media_metadata_spec) == null
                              ? void 0
                              : it.format_option) != null
                            ? at
                            : void 0,
                        headline:
                          (lt =
                            (st = t.creative_sourcing_spec) == null ||
                            (st = st.product_media_metadata_spec) == null
                              ? void 0
                              : st.headline) != null
                            ? lt
                            : void 0,
                        image_layer_specs: o(
                          "TypeCoercionUtils",
                        ).coerceEmptyArrayToUndefined(
                          (ut = t.creative_sourcing_spec) == null ||
                            (ut = ut.product_media_metadata_spec) == null ||
                            (ut = ut.image_layer_specs) == null
                            ? void 0
                            : ut.map(function (e) {
                                var t,
                                  n,
                                  a,
                                  i,
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
                                  I;
                                return {
                                  blending_mode:
                                    (t = r("getJSEnumSafe")(
                                      r(
                                        "DynamicImageLayerFrameOverlayBlendingModes",
                                      ),
                                      e == null ? void 0 : e.blending_mode,
                                    )) != null
                                      ? t
                                      : void 0,
                                  content:
                                    (e == null ? void 0 : e.content) != null
                                      ? {
                                          auto_show_enroll_status:
                                            (n =
                                              e == null ||
                                              (a = e.content) == null
                                                ? void 0
                                                : a.auto_show_enroll_status) !=
                                            null
                                              ? n
                                              : void 0,
                                          high_price:
                                            (i =
                                              e == null ||
                                              (l = e.content) == null
                                                ? void 0
                                                : l.high_price) != null
                                              ? i
                                              : void 0,
                                          low_price:
                                            (s =
                                              e == null ||
                                              (u = e.content) == null
                                                ? void 0
                                                : u.low_price) != null
                                              ? s
                                              : void 0,
                                          price:
                                            (c =
                                              e == null ||
                                              (d = e.content) == null
                                                ? void 0
                                                : d.price) != null
                                              ? c
                                              : void 0,
                                          type:
                                            (m = r("getJSEnumSafe")(
                                              r(
                                                "DynamicImageLayerTextOverlayContentTypes",
                                              ),
                                              e == null ||
                                                (p = e.content) == null
                                                ? void 0
                                                : p.type,
                                            )) != null
                                              ? m
                                              : void 0,
                                        }
                                      : void 0,
                                  crop_image:
                                    (_ = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.crop_image,
                                      r("DynamicImageLayerCroppingOptions"),
                                    )) != null
                                      ? _
                                      : void 0,
                                  frame_auto_show_enroll_status:
                                    (f =
                                      e == null
                                        ? void 0
                                        : e.frame_auto_show_enroll_status) !=
                                    null
                                      ? f
                                      : void 0,
                                  frame_image_hash:
                                    (g =
                                      e == null
                                        ? void 0
                                        : e.frame_image_hash) != null
                                      ? g
                                      : void 0,
                                  frame_source:
                                    (h = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.frame_source,
                                      r("DynamicImageLayerFrameSources"),
                                    )) != null
                                      ? h
                                      : void 0,
                                  image_source:
                                    (y = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.image_source,
                                      r("DynamicImageLayerImageSources"),
                                    )) != null
                                      ? y
                                      : void 0,
                                  layer_type:
                                    (C = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.layer_type,
                                      r("DynamicImageLayerTypes"),
                                    )) != null
                                      ? C
                                      : void 0,
                                  opacity:
                                    (b = e == null ? void 0 : e.opacity) != null
                                      ? b
                                      : void 0,
                                  overlay_position:
                                    (v = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.overlay_position,
                                      r("DynamicImageLayerOverlayPositions"),
                                    )) != null
                                      ? v
                                      : void 0,
                                  overlay_shape:
                                    (S = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.overlay_shape,
                                      r("DynamicImageLayerTextOverlayShapes"),
                                    )) != null
                                      ? S
                                      : void 0,
                                  pad_image:
                                    (R = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.pad_image,
                                      r("DynamicImageLayerPaddingOptions"),
                                    )) != null
                                      ? R
                                      : void 0,
                                  scale:
                                    (L = e == null ? void 0 : e.scale) != null
                                      ? L
                                      : void 0,
                                  shape_color:
                                    (E = e == null ? void 0 : e.shape_color) !=
                                    null
                                      ? E
                                      : void 0,
                                  text_color:
                                    (k = e == null ? void 0 : e.text_color) !=
                                    null
                                      ? k
                                      : void 0,
                                  text_font:
                                    (I = o("enumUtils").coerceFromKey(
                                      e == null ? void 0 : e.text_font,
                                      r("DynamicImageLayerTextFonts"),
                                    )) != null
                                      ? I
                                      : void 0,
                                };
                              }),
                        ),
                        image_template_id:
                          (ct =
                            (dt = t.creative_sourcing_spec) == null ||
                            (dt = dt.product_media_metadata_spec) == null
                              ? void 0
                              : dt.image_template_id) != null
                            ? ct
                            : void 0,
                        message:
                          (mt =
                            (pt = t.creative_sourcing_spec) == null ||
                            (pt = pt.product_media_metadata_spec) == null
                              ? void 0
                              : pt.message) != null
                            ? mt
                            : void 0,
                        multi_share_end_card:
                          (_t =
                            (ft = t.creative_sourcing_spec) == null ||
                            (ft = ft.product_media_metadata_spec) == null
                              ? void 0
                              : ft.multi_share_end_card) != null
                            ? _t
                            : void 0,
                        pinned_product_ids:
                          (gt =
                            (ht = t.creative_sourcing_spec) == null ||
                            (ht = ht.product_media_metadata_spec) == null
                              ? void 0
                              : ht.pinned_product_ids) != null
                            ? gt
                            : void 0,
                        prioritize_video:
                          (yt =
                            (Ct = t.creative_sourcing_spec) == null ||
                            (Ct = Ct.product_media_metadata_spec) == null
                              ? void 0
                              : Ct.prioritize_video) != null
                            ? yt
                            : void 0,
                      }
                    : void 0,
                promotion_metadata_spec: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (bt = t.creative_sourcing_spec) != null &&
                    bt.promotion_metadata_spec
                    ? t.creative_sourcing_spec.promotion_metadata_spec.map(
                        function (e) {
                          return {
                            end_date: e.end_date,
                            id: e.id,
                            promotion_source: e.promotion_source,
                            promotion_type: o(
                              "TypeCoercionUtils",
                            ).coerceNonMaybeValue(
                              e.promotion_type,
                              "creative_sourcing_spec.promotion_metadata_spec[].promotion_type",
                              i.id,
                            ),
                            promotion_value: o(
                              "TypeCoercionUtils",
                            ).coerceNonMaybeValue(
                              e.promotion_value,
                              "creative_sourcing_spec.promotion_metadata_spec[].promotion_value",
                              i.id,
                            ),
                            required_code: e.required_code,
                            start_date: e.start_date,
                          };
                        },
                      )
                    : [],
                ),
                site_links_data_consented:
                  (vt = t.creative_sourcing_spec) != null &&
                  vt.site_links_data_consented
                    ? babelHelpers.extends(
                        {
                          action_metadata:
                            (St = t.creative_sourcing_spec) != null &&
                            (St = St.site_links_data_consented) != null &&
                            (St = St.action_metadata) != null &&
                            St.type
                              ? {
                                  type: o(
                                    "TypeCoercionUtils",
                                  ).coerceNonMaybeValue(
                                    r("getJSEnumSafe")(
                                      r("AdCreativeSourceActionType"),
                                      t.creative_sourcing_spec
                                        .site_links_data_consented
                                        .action_metadata.type,
                                    ),
                                    "creative_sourcing_spec.site_links_data_consented.action_metadata.type",
                                    i.id,
                                  ),
                                }
                              : void 0,
                          enroll_status:
                            (Rt = t.creative_sourcing_spec) != null &&
                            (Rt = Rt.site_links_data_consented) != null &&
                            Rt.enroll_status
                              ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                  r("getJSEnumSafe")(
                                    r("AdCreativeSourceEnrollStatus"),
                                    t.creative_sourcing_spec
                                      .site_links_data_consented.enroll_status,
                                  ),
                                  "creative_sourcing_spec.site_links_data_consented.enroll_status",
                                  i.id,
                                )
                              : void 0,
                        },
                        o(
                          "AdsSEConsentScopeRolloutUtils",
                        ).isInSEConsentScopeRollout() &&
                          (Lt = t.creative_sourcing_spec) != null &&
                          (Lt = Lt.site_links_data_consented) != null &&
                          Lt.scope
                          ? {
                              scope: r("getJSEnumSafe")(
                                r("AdCreativeSEConsentScope"),
                                t.creative_sourcing_spec
                                  .site_links_data_consented.scope,
                              ),
                            }
                          : {},
                      )
                    : void 0,
                site_links_spec: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (Et = t.creative_sourcing_spec) != null && Et.site_links_spec
                    ? t.creative_sourcing_spec.site_links_spec.map(
                        function (e) {
                          return {
                            is_site_link_sticky: e.is_site_link_sticky,
                            site_link_extra_metadata:
                              e.site_link_extra_metadata,
                            site_link_hash: e.site_link_hash,
                            site_link_id: e.site_link_id,
                            site_link_image_hash: e.site_link_image_hash,
                            site_link_image_url: e.site_link_image_url,
                            site_link_language: e.site_link_language,
                            site_link_onsite_destination_id:
                              e.site_link_onsite_destination_id,
                            site_link_onsite_destination_type:
                              e.site_link_onsite_destination_type,
                            site_link_recommendation_type:
                              e.site_link_recommendation_type,
                            site_link_title: e.site_link_title,
                            site_link_url: e.site_link_url,
                            site_link_url_anchor: e.site_link_url_anchor,
                          };
                        },
                      )
                    : [],
                ),
                source_url:
                  (kt =
                    (It = t.creative_sourcing_spec) == null
                      ? void 0
                      : It.source_url) != null
                    ? kt
                    : void 0,
                website_media_spec:
                  (Tt = t.creative_sourcing_spec) != null &&
                  Tt.website_media_spec
                    ? {
                        action_metadata:
                          (Dt = t.creative_sourcing_spec) != null &&
                          (Dt = Dt.website_media_spec) != null &&
                          (Dt = Dt.action_metadata) != null &&
                          Dt.type
                            ? {
                                type: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  r("getJSEnumSafe")(
                                    r("AdCreativeSourceActionType"),
                                    t.creative_sourcing_spec.website_media_spec
                                      .action_metadata.type,
                                  ),
                                  "creative_sourcing_spec.website_media_spec.action_metadata.type",
                                  i.id,
                                ),
                              }
                            : void 0,
                        adex_had_data:
                          (xt =
                            ($t = t.creative_sourcing_spec) == null ||
                            ($t = $t.website_media_spec) == null
                              ? void 0
                              : $t.adex_had_data) != null
                            ? xt
                            : void 0,
                        adex_had_impression:
                          (Pt =
                            (Nt = t.creative_sourcing_spec) == null ||
                            (Nt = Nt.website_media_spec) == null
                              ? void 0
                              : Nt.adex_had_impression) != null
                            ? Pt
                            : void 0,
                        enroll_status:
                          (Mt = t.creative_sourcing_spec) != null &&
                          (Mt = Mt.website_media_spec) != null &&
                          Mt.enroll_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  t.creative_sourcing_spec.website_media_spec
                                    .enroll_status,
                                ),
                                "creative_sourcing_spec.website_media_spec.enroll_status",
                                i.id,
                              )
                            : void 0,
                        image_clusters: void 0,
                        media: o(
                          "TypeCoercionUtils",
                        ).coerceEmptyArrayToUndefined(
                          (wt = t.creative_sourcing_spec) != null &&
                            (wt = wt.website_media_spec) != null &&
                            wt.media
                            ? t.creative_sourcing_spec.website_media_spec.media.map(
                                function (e) {
                                  var t,
                                    n,
                                    r,
                                    o,
                                    a,
                                    i,
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
                                    $,
                                    P,
                                    N,
                                    M;
                                  return {
                                    aesthetic_relevance:
                                      (t = e.aesthetic_relevance) != null
                                        ? t
                                        : void 0,
                                    background_cleanliness:
                                      (n = e.background_cleanliness) != null
                                        ? n
                                        : void 0,
                                    background_color:
                                      (r = e.background_color) != null
                                        ? r
                                        : void 0,
                                    description:
                                      (o = e.description) != null ? o : void 0,
                                    human_face_detection:
                                      (a = e.human_face_detection) != null
                                        ? a
                                        : void 0,
                                    image_asset_fbid:
                                      (i = e.image_asset_fbid) != null
                                        ? i
                                        : void 0,
                                    image_blurry:
                                      (l = e.image_blurry) != null ? l : void 0,
                                    image_hash:
                                      (s = e.image_hash) != null ? s : void 0,
                                    image_height:
                                      (u = e.image_height) != null ? u : void 0,
                                    image_sources:
                                      (c = e.image_sources) != null
                                        ? c
                                        : void 0,
                                    image_url:
                                      (d = e.image_url) != null ? d : void 0,
                                    image_width:
                                      (m = e.image_width) != null ? m : void 0,
                                    is_duplicate:
                                      (p = e.is_duplicate) != null ? p : void 0,
                                    is_guardrail_pass:
                                      (_ = e.is_guardrail_pass) != null
                                        ? _
                                        : void 0,
                                    is_human_and_product:
                                      (f = e.is_human_and_product) != null
                                        ? f
                                        : void 0,
                                    is_human_and_service:
                                      (g = e.is_human_and_service) != null
                                        ? g
                                        : void 0,
                                    is_icon:
                                      (h = e.is_icon) != null ? h : void 0,
                                    is_illustration:
                                      (y = e.is_illustration) != null
                                        ? y
                                        : void 0,
                                    is_immersive_product:
                                      (C = e.is_immersive_product) != null
                                        ? C
                                        : void 0,
                                    is_landscape:
                                      (b = e.is_landscape) != null ? b : void 0,
                                    is_logo:
                                      (v = e.is_logo) != null ? v : void 0,
                                    is_og_image:
                                      (S = e.is_og_image) != null ? S : void 0,
                                    is_photo_collage:
                                      (R = e.is_photo_collage) != null
                                        ? R
                                        : void 0,
                                    is_poster:
                                      (L = e.is_poster) != null ? L : void 0,
                                    is_text_wall:
                                      (E = e.is_text_wall) != null ? E : void 0,
                                    logo_icon_detection:
                                      (k = e.logo_icon_detection) != null
                                        ? k
                                        : void 0,
                                    message_relevance:
                                      (I = e.message_relevance) != null
                                        ? I
                                        : void 0,
                                    overall_relevance:
                                      (T = e.overall_relevance) != null
                                        ? T
                                        : void 0,
                                    product_focus:
                                      (D = e.product_focus) != null
                                        ? D
                                        : void 0,
                                    product_relevance:
                                      (x = e.product_relevance) != null
                                        ? x
                                        : void 0,
                                    similarity_score:
                                      ($ = e.similarity_score) != null
                                        ? $
                                        : void 0,
                                    text: (P = e.text) != null ? P : void 0,
                                    text_heavy:
                                      (N = e.text_heavy) != null ? N : void 0,
                                    user_sentiment:
                                      (M = e.user_sentiment) != null
                                        ? M
                                        : void 0,
                                  };
                                },
                              )
                            : [],
                        ),
                      }
                    : void 0,
                website_summary_spec:
                  (At = t.creative_sourcing_spec) != null &&
                  At.website_summary_spec
                    ? {
                        action_metadata:
                          (Ft = t.creative_sourcing_spec) != null &&
                          (Ft = Ft.website_summary_spec) != null &&
                          (Ft = Ft.action_metadata) != null &&
                          Ft.type
                            ? {
                                type: o(
                                  "TypeCoercionUtils",
                                ).coerceNonMaybeValue(
                                  r("getJSEnumSafe")(
                                    r("AdCreativeSourceActionType"),
                                    t.creative_sourcing_spec
                                      .website_summary_spec.action_metadata
                                      .type,
                                  ),
                                  "creative_sourcing_spec.website_summary_spec.action_metadata.type",
                                  i.id,
                                ),
                              }
                            : void 0,
                        enroll_status:
                          (Ot = t.creative_sourcing_spec) != null &&
                          (Ot = Ot.website_summary_spec) != null &&
                          Ot.enroll_status
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                r("getJSEnumSafe")(
                                  r("AdCreativeSourceEnrollStatus"),
                                  t.creative_sourcing_spec.website_summary_spec
                                    .enroll_status,
                                ),
                                "creative_sourcing_spec.website_summary_spec.enroll_status",
                                i.id,
                              )
                            : void 0,
                        is_selling_points_available:
                          (Bt =
                            (Wt = t.creative_sourcing_spec) == null ||
                            (Wt = Wt.website_summary_spec) == null
                              ? void 0
                              : Wt.is_selling_points_available) != null
                            ? Bt
                            : void 0,
                        is_summary_text_available:
                          (qt =
                            (Ut = t.creative_sourcing_spec) == null ||
                            (Ut = Ut.website_summary_spec) == null
                              ? void 0
                              : Ut.is_summary_text_available) != null
                            ? qt
                            : void 0,
                        mgenai_website_entity_id:
                          (Vt =
                            (Ht = t.creative_sourcing_spec) == null ||
                            (Ht = Ht.website_summary_spec) == null
                              ? void 0
                              : Ht.mgenai_website_entity_id) != null
                            ? Vt
                            : void 0,
                        page_text_signals_asset_id:
                          (Gt =
                            (zt = t.creative_sourcing_spec) == null ||
                            (zt = zt.website_summary_spec) == null
                              ? void 0
                              : zt.page_text_signals_asset_id) != null
                            ? Gt
                            : void 0,
                        selling_points:
                          (jt = t.creative_sourcing_spec) != null &&
                          (jt = jt.website_summary_spec) != null &&
                          jt.selling_points
                            ? o(
                                "TypeCoercionUtils",
                              ).coerceEmptyArrayToUndefined(
                                (Kt = t.creative_sourcing_spec) == null ||
                                  (Kt = Kt.website_summary_spec) == null
                                  ? void 0
                                  : Kt.selling_points.map(function (e) {
                                      var t, n, r, o, a;
                                      return {
                                        anchor_text:
                                          (t =
                                            e == null
                                              ? void 0
                                              : e.anchor_text) != null
                                            ? t
                                            : void 0,
                                        category:
                                          (n =
                                            e == null ? void 0 : e.category) !=
                                          null
                                            ? n
                                            : void 0,
                                        is_verbatim:
                                          (r =
                                            e == null
                                              ? void 0
                                              : e.is_verbatim) != null
                                            ? r
                                            : void 0,
                                        text:
                                          (o = e == null ? void 0 : e.text) !=
                                          null
                                            ? o
                                            : "",
                                        text_format:
                                          (a =
                                            e == null
                                              ? void 0
                                              : e.text_format) != null
                                            ? a
                                            : void 0,
                                      };
                                    }),
                              )
                            : [],
                        subfeatures: o(
                          "TypeCoercionUtils",
                        ).coerceEmptyArrayToUndefined(
                          (Qt = t.creative_sourcing_spec) != null &&
                            (Qt = Qt.website_summary_spec) != null &&
                            Qt.subfeatures
                            ? t.creative_sourcing_spec.website_summary_spec.subfeatures.map(
                                function (e) {
                                  var t, n;
                                  return {
                                    action_metadata:
                                      (t = e.action_metadata) != null && t.type
                                        ? {
                                            type: o(
                                              "TypeCoercionUtils",
                                            ).coerceNonMaybeValue(
                                              r("getJSEnumSafe")(
                                                r("AdCreativeSourceActionType"),
                                                (n = e.action_metadata) == null
                                                  ? void 0
                                                  : n.type,
                                              ),
                                              "creative_sourcing_spec.website_summary_spec.subfeatures[].action_metadata.type",
                                              i.id,
                                            ),
                                          }
                                        : void 0,
                                    enroll_status: e.enroll_status
                                      ? o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          r("getJSEnumSafe")(
                                            r("AdCreativeSourceEnrollStatus"),
                                            e.enroll_status,
                                          ),
                                          "creative_sourcing_spec.website_summary_spec.subfeatures[].enroll_status",
                                          i.id,
                                        )
                                      : void 0,
                                    feature_name: e.feature_name
                                      ? o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          r("getJSEnumSafe")(
                                            r("CreativeMetadataSubfeature"),
                                            e.feature_name,
                                          ),
                                          "creative_sourcing_spec.website_summary_spec.subfeatures[].feature_name",
                                          i.id,
                                        )
                                      : void 0,
                                  };
                                },
                              )
                            : [],
                        ),
                        summary_text:
                          (Xt =
                            (Yt = t.creative_sourcing_spec) == null ||
                            (Yt = Yt.website_summary_spec) == null
                              ? void 0
                              : Yt.summary_text) != null
                            ? Xt
                            : void 0,
                      }
                    : void 0,
              })
            : void 0,
          degrees_of_freedom_spec:
            (Jt = t.degrees_of_freedom_spec) != null &&
            Jt.ads_degrees_of_freedom_spec
              ? o("TypeCoercionUtils").coerceObjectToUndefined(
                  (Zt = t.degrees_of_freedom_spec) == null
                    ? void 0
                    : Zt.ads_degrees_of_freedom_spec,
                )
              : void 0,
          destination_spec: t.destination_spec
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                destination_type:
                  (en = t.destination_spec) != null && en.destination_type
                    ? o("TypeCoercionUtils").coerceNonMaybeValue(
                        r("getJSEnumSafe")(
                          r("AdCreativeDestinationType"),
                          (tn = t.destination_spec) == null
                            ? void 0
                            : tn.destination_type,
                        ),
                        "destination_spec.destination_type",
                        i.id,
                      )
                    : void 0,
                guidance_metadata:
                  (nn = t.destination_spec) != null && nn.guidance_metadata
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        guidances_applied:
                          (rn = t.destination_spec.guidance_metadata) != null &&
                          rn.guidances_applied
                            ? o(
                                "TypeCoercionUtils",
                              ).coerceEmptyArrayToUndefined(
                                t.destination_spec.guidance_metadata.guidances_applied.map(
                                  function (e) {
                                    return r("getJSEnumSafe")(
                                      r(
                                        "AdCreativeDestinationGuidancesApplied",
                                      ),
                                      e,
                                    );
                                  },
                                ),
                              )
                            : void 0,
                      })
                    : void 0,
                live_video_destination:
                  (on = t.destination_spec) != null && on.live_video_destination
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        live_video_id:
                          ((an = t.destination_spec) == null ||
                          (an = an.live_video_destination) == null
                            ? void 0
                            : an.live_video_id) != null
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                (ln = t.destination_spec) == null ||
                                  (ln = ln.live_video_destination) == null
                                  ? void 0
                                  : ln.live_video_id,
                                "destination_spec.live_video_destination.live_video_id",
                                i.id,
                              )
                            : void 0,
                      })
                    : void 0,
                message_destination:
                  (sn = t.destination_spec) != null && sn.message_destination
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        template_id:
                          ((un = t.destination_spec) == null ||
                          (un = un.message_destination) == null
                            ? void 0
                            : un.template_id) != null
                            ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                (cn = t.destination_spec) == null ||
                                  (cn = cn.message_destination) == null
                                  ? void 0
                                  : cn.template_id,
                                "destination_spec.message_destination.template_id",
                                i.id,
                              )
                            : void 0,
                      })
                    : void 0,
                native_commerce_experience:
                  (dn = t.destination_spec) != null &&
                  dn.native_commerce_experience
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        product_browsing:
                          (mn = t.destination_spec) != null &&
                          (mn = mn.native_commerce_experience) != null &&
                          mn.product_browsing
                            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                                action_metadata:
                                  (pn = t.destination_spec) != null &&
                                  (pn = pn.native_commerce_experience) !=
                                    null &&
                                  (pn = pn.product_browsing) != null &&
                                  pn.action_metadata
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceObjectToUndefined({
                                        type:
                                          (_n = t.destination_spec) != null &&
                                          (_n =
                                            _n.native_commerce_experience) !=
                                            null &&
                                          (_n = _n.product_browsing) != null &&
                                          (_n = _n.action_metadata) != null &&
                                          _n.type
                                            ? o(
                                                "TypeCoercionUtils",
                                              ).coerceNonMaybeValue(
                                                r("getJSEnumSafe")(
                                                  r(
                                                    "AdCreativeFeatureActionType",
                                                  ),
                                                  (fn = t.destination_spec) ==
                                                    null ||
                                                    (fn =
                                                      fn.native_commerce_experience) ==
                                                      null ||
                                                    (fn =
                                                      fn.product_browsing) ==
                                                      null ||
                                                    (fn = fn.action_metadata) ==
                                                      null
                                                    ? void 0
                                                    : fn.type,
                                                ),
                                                "destination_spec.native_commerce_experience.product_browsing.action_metadata.type",
                                                i.id,
                                              )
                                            : void 0,
                                      })
                                    : void 0,
                                enroll_status:
                                  (gn = t.destination_spec) != null &&
                                  (gn = gn.native_commerce_experience) !=
                                    null &&
                                  (gn = gn.product_browsing) != null &&
                                  gn.enroll_status
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        r("getJSEnumSafe")(
                                          r("AdCreativeFeatureEnrollStatus"),
                                          (hn = t.destination_spec) == null ||
                                            (hn =
                                              hn.native_commerce_experience) ==
                                              null ||
                                            (hn = hn.product_browsing) == null
                                            ? void 0
                                            : hn.enroll_status,
                                        ),
                                        "destination_spec.native_commerce_experience.product_browsing.enroll_status",
                                        i.id,
                                      )
                                    : void 0,
                              })
                            : void 0,
                        shop:
                          (yn = t.destination_spec) != null &&
                          (yn = yn.native_commerce_experience) != null &&
                          yn.shop
                            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                                action_metadata:
                                  (Cn = t.destination_spec) != null &&
                                  (Cn = Cn.native_commerce_experience) !=
                                    null &&
                                  (Cn = Cn.shop) != null &&
                                  Cn.action_metadata
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceObjectToUndefined({
                                        type:
                                          (bn = t.destination_spec) != null &&
                                          (bn =
                                            bn.native_commerce_experience) !=
                                            null &&
                                          (bn = bn.shop) != null &&
                                          (bn = bn.action_metadata) != null &&
                                          bn.type
                                            ? o(
                                                "TypeCoercionUtils",
                                              ).coerceNonMaybeValue(
                                                r("getJSEnumSafe")(
                                                  r(
                                                    "AdCreativeFeatureActionType",
                                                  ),
                                                  (vn = t.destination_spec) ==
                                                    null ||
                                                    (vn =
                                                      vn.native_commerce_experience) ==
                                                      null ||
                                                    (vn = vn.shop) == null ||
                                                    (vn = vn.action_metadata) ==
                                                      null
                                                    ? void 0
                                                    : vn.type,
                                                ),
                                                "destination_spec.native_commerce_experience.shop.action_metadata.type",
                                                i.id,
                                              )
                                            : void 0,
                                      })
                                    : void 0,
                                enroll_status:
                                  (Sn = t.destination_spec) != null &&
                                  (Sn = Sn.native_commerce_experience) !=
                                    null &&
                                  (Sn = Sn.shop) != null &&
                                  Sn.enroll_status
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        r("getJSEnumSafe")(
                                          r("AdCreativeFeatureEnrollStatus"),
                                          (Rn = t.destination_spec) == null ||
                                            (Rn =
                                              Rn.native_commerce_experience) ==
                                              null ||
                                            (Rn = Rn.shop) == null
                                            ? void 0
                                            : Rn.enroll_status,
                                        ),
                                        "destination_spec.native_commerce_experience.shop.enroll_status",
                                        i.id,
                                      )
                                    : void 0,
                              })
                            : void 0,
                      })
                    : void 0,
                website:
                  (Ln = t.destination_spec) != null && Ln.website
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        optimization:
                          (En = t.destination_spec) != null &&
                          (En = En.website) != null &&
                          En.optimization
                            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                                status:
                                  (kn = t.destination_spec) != null &&
                                  (kn = kn.website) != null &&
                                  (kn = kn.optimization) != null &&
                                  kn.status
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        r("getJSEnumSafe")(
                                          r(
                                            "ApiAdCreativeDestinationOptimizationEnrollmentStatus",
                                          ),
                                          (In = t.destination_spec) == null ||
                                            (In = In.website) == null ||
                                            (In = In.optimization) == null
                                            ? void 0
                                            : In.status,
                                        ),
                                        "destination_spec.website.optimization.status",
                                        i.id,
                                      )
                                    : void 0,
                                type:
                                  (Tn = t.destination_spec) != null &&
                                  (Tn = Tn.website) != null &&
                                  (Tn = Tn.optimization) != null &&
                                  Tn.type
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceNonMaybeValue(
                                        r("getJSEnumSafe")(
                                          r(
                                            "AdCreativeDestinationOptimizationType",
                                          ),
                                          (Dn = t.destination_spec) == null ||
                                            (Dn = Dn.website) == null ||
                                            (Dn = Dn.optimization) == null
                                            ? void 0
                                            : Dn.type,
                                        ),
                                        "destination_spec.website.optimization.type",
                                        i.id,
                                      )
                                    : void 0,
                              })
                            : void 0,
                      })
                    : void 0,
              })
            : void 0,
          dynamic_ad_voice:
            (xn = t.dynamic_local_ad_creative_attachment) != null &&
            xn.dynamic_ad_voice
              ? o("TypeCoercionUtils").coerceNonMaybeValue(
                  r("getJSEnumSafe")(
                    r("AdsDynamicAdVoices"),
                    t.dynamic_local_ad_creative_attachment.dynamic_ad_voice,
                  ),
                  "dynamic_local_ad_creative_attachment.dynamic_ad_voice",
                  i.id,
                )
              : void 0,
          effective_authorization_category: void 0,
          effective_instagram_media_id: void 0,
          effective_instagram_story_id: void 0,
          effective_object_story_id:
            ($n = t.effective_object_story_id) != null ? $n : void 0,
          enable_direct_install:
            (Pn =
              (Nn = t.mobile_app_install_attachment) == null
                ? void 0
                : Nn.enable_direct_install) != null
              ? Pn
              : !1,
          existing_post_title:
            (Mn = t.existing_post_title) != null ? Mn : void 0,
          facebook_branded_content: t.facebook_branded_content
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                sponsor_page_id:
                  (wn =
                    (An = t.facebook_branded_content) == null
                      ? void 0
                      : An.sponsor_page_id) != null
                    ? wn
                    : void 0,
              })
            : void 0,
          format_transformation_spec: o(
            "TypeCoercionUtils",
          ).coerceEmptyArrayToUndefined(
            t.format_transformation_spec.map(function (e) {
              var t,
                n =
                  (t = r("getJSEnumSafe")(
                    r("AdCreativeFormatTransformationFormatType"),
                    e.format,
                  )) != null
                    ? t
                    : void 0;
              if (n == null || n === void 0) return null;
              var o = r("filterNulls")(
                  e.data_source.map(function (e) {
                    var t;
                    return (t = r("getJSEnumSafe")(
                      r("AdCreativeFormatTransformationDataSourceType"),
                      e,
                    )) != null
                      ? t
                      : null;
                  }),
                ),
                a =
                  e.customizations != null && e.customizations.length > 0
                    ? r("filterNulls")(
                        e.customizations.map(function (e) {
                          var t = r("getJSEnumSafe")(
                              r(
                                "AdCreativeFormatTransformationCustomizationConfigName",
                              ),
                              e.name,
                            ),
                            n = r("getJSEnumSafe")(
                              r("AdCreativeFeatureEnrollStatus"),
                              e.enroll_status,
                            );
                          if (t == null || n == null) return null;
                          var o =
                            e.scope != null
                              ? r("filterNulls")(
                                  e.scope.map(function (e) {
                                    var t;
                                    return (t = r("getJSEnumSafe")(
                                      r(
                                        "AdCreativeFormatTransformationDataSourceType",
                                      ),
                                      e,
                                    )) != null
                                      ? t
                                      : null;
                                  }),
                                )
                              : void 0;
                          return { enroll_status: n, name: t, scope: o };
                        }),
                      )
                    : void 0,
                i = a != null ? c(a) : void 0;
              return babelHelpers.extends(
                {},
                i != null ? { customizations: i } : void 0,
                { data_source: o, format: n },
              );
            }),
          ),
          generative_asset_spec:
            t.generative_asset_spec != null
              ? o(
                  "TypeCoercionUtils",
                ).coerceObjectWithNullAndEmptyArraysToUndefined(
                  babelHelpers.extends({}, t.generative_asset_spec, {
                    images:
                      ((Fn = t.generative_asset_spec) == null
                        ? void 0
                        : Fn.images) != null
                        ? o(
                            "TypeCoercionUtils",
                          ).coerceObjectWithNullAndEmptyArraysToUndefined(
                            babelHelpers.extends(
                              {},
                              (On = t.generative_asset_spec) == null
                                ? void 0
                                : On.images,
                              {
                                enroll_status: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyStringToUndefined(
                                  (Bn = t.generative_asset_spec) == null ||
                                    (Bn = Bn.images) == null
                                    ? void 0
                                    : Bn.enroll_status,
                                ),
                                hero_image: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyStringToUndefined(
                                  (Wn = t.generative_asset_spec) == null ||
                                    (Wn = Wn.images) == null
                                    ? void 0
                                    : Wn.hero_image,
                                ),
                                variations:
                                  ((qn = t.generative_asset_spec) == null ||
                                  (qn = qn.images) == null
                                    ? void 0
                                    : qn.variations) != null
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceEmptyArrayToUndefined(
                                        (Un = t.generative_asset_spec) ==
                                          null || (Un = Un.images) == null
                                          ? void 0
                                          : Un.variations.map(function (e) {
                                              var t, n;
                                              return babelHelpers.extends(
                                                {},
                                                e,
                                                {
                                                  action_metadata:
                                                    e != null &&
                                                    e.action_metadata &&
                                                    (t = r("getJSEnumSafe")(
                                                      r(
                                                        "AdCreativeFeatureActionType",
                                                      ),
                                                      e == null
                                                        ? void 0
                                                        : e.action_metadata,
                                                    )) != null
                                                      ? t
                                                      : void 0,
                                                  enroll_status:
                                                    e != null &&
                                                    e.enroll_status &&
                                                    (n = r("getJSEnumSafe")(
                                                      r(
                                                        "AdCreativeFeatureEnrollStatus",
                                                      ),
                                                      e == null
                                                        ? void 0
                                                        : e.enroll_status,
                                                    )) != null
                                                      ? n
                                                      : void 0,
                                                  hash: o(
                                                    "TypeCoercionUtils",
                                                  ).coerceNonMaybeValue(
                                                    e.hash,
                                                    "generative_asset_spec.images.variations[].hash",
                                                    i.id,
                                                  ),
                                                },
                                              );
                                            }),
                                      )
                                    : void 0,
                              },
                            ),
                          )
                        : void 0,
                    logo_overlay:
                      ((Vn = t.generative_asset_spec) == null
                        ? void 0
                        : Vn.logo_overlay) != null
                        ? o(
                            "TypeCoercionUtils",
                          ).coerceObjectWithNullAndEmptyArraysToUndefined(
                            babelHelpers.extends(
                              {},
                              t.generative_asset_spec.logo_overlay,
                              {
                                enroll_status:
                                  t.generative_asset_spec.logo_overlay
                                    .enroll_status &&
                                  (Hn = r("getJSEnumSafe")(
                                    r("AdCreativeFeatureEnrollStatus"),
                                    t.generative_asset_spec.logo_overlay
                                      .enroll_status,
                                  )) != null
                                    ? Hn
                                    : void 0,
                                logos: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyArrayToUndefined(
                                  (Gn =
                                    (zn = t.generative_asset_spec) == null ||
                                    (zn = zn.logo_overlay) == null
                                      ? void 0
                                      : zn.logos.map(function (e) {
                                          return babelHelpers.extends({}, e, {
                                            hash: o(
                                              "TypeCoercionUtils",
                                            ).coerceNonMaybeValue(
                                              e.hash,
                                              "generative_asset_spec.logo_overlay.logos[].hash",
                                              i.id,
                                            ),
                                            selected: o(
                                              "TypeCoercionUtils",
                                            ).coerceNonMaybeValue(
                                              e.selected,
                                              "generative_asset_spec.logo_overlay.logos[].selected",
                                              i.id,
                                            ),
                                            source: o(
                                              "TypeCoercionUtils",
                                            ).coerceEmptyStringToUndefined(
                                              e.source,
                                            ),
                                          });
                                        })) != null
                                    ? Gn
                                    : [],
                                ),
                              },
                            ),
                          )
                        : void 0,
                    text_overlay:
                      ((jn = t.generative_asset_spec) == null
                        ? void 0
                        : jn.text_overlay) != null
                        ? o(
                            "TypeCoercionUtils",
                          ).coerceObjectWithNullAndEmptyArraysToUndefined(
                            babelHelpers.extends(
                              {},
                              t.generative_asset_spec.text_overlay,
                              {
                                action_metadata:
                                  (Kn = t.generative_asset_spec) != null &&
                                  (Kn = Kn.text_overlay) != null &&
                                  Kn.action_metadata &&
                                  (Qn = r("getJSEnumSafe")(
                                    r("AdCreativeFeatureActionType"),
                                    (Xn =
                                      t.generative_asset_spec.text_overlay) ==
                                      null
                                      ? void 0
                                      : Xn.action_metadata,
                                  )) != null
                                    ? Qn
                                    : void 0,
                                enroll_status:
                                  (Yn = t.generative_asset_spec) != null &&
                                  (Yn = Yn.text_overlay) != null &&
                                  Yn.enroll_status &&
                                  (Jn = r("getJSEnumSafe")(
                                    r("AdCreativeFeatureEnrollStatus"),
                                    t.generative_asset_spec.text_overlay
                                      .enroll_status,
                                  )) != null
                                    ? Jn
                                    : void 0,
                                font_name: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyStringToUndefined(
                                  (Zn = t.generative_asset_spec) == null ||
                                    (Zn = Zn.text_overlay) == null
                                    ? void 0
                                    : Zn.font_name,
                                ),
                                font_style: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyStringToUndefined(
                                  (er = t.generative_asset_spec) == null ||
                                    (er = er.text_overlay) == null
                                    ? void 0
                                    : er.font_style,
                                ),
                                texts: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyArrayToUndefined(
                                  (tr =
                                    (nr = t.generative_asset_spec) == null ||
                                    (nr = nr.text_overlay) == null ||
                                    (nr = nr.texts) == null
                                      ? void 0
                                      : nr.map(function (e) {
                                          return babelHelpers.extends({}, e, {
                                            source: o(
                                              "TypeCoercionUtils",
                                            ).coerceEmptyStringToUndefined(
                                              e.source,
                                            ),
                                            text: o(
                                              "TypeCoercionUtils",
                                            ).coerceNonMaybeValue(
                                              e.text,
                                              "generative_asset_spec.text_overlay.texts[].text",
                                              i.id,
                                            ),
                                          });
                                        })) != null
                                    ? tr
                                    : [],
                                ),
                              },
                            ),
                          )
                        : void 0,
                    transparency_metadata:
                      ((rr = t.generative_asset_spec) == null
                        ? void 0
                        : rr.transparency_metadata) != null
                        ? o(
                            "TypeCoercionUtils",
                          ).coerceObjectWithNullAndEmptyArraysToUndefined(
                            babelHelpers.extends(
                              {},
                              t.generative_asset_spec.transparency_metadata,
                              {
                                self_disclosure:
                                  (or = t.generative_asset_spec) != null &&
                                  (or = or.transparency_metadata) != null &&
                                  or.self_disclosure
                                    ? o(
                                        "TypeCoercionUtils",
                                      ).coerceObjectToUndefined({
                                        enroll_status:
                                          (ar = t.generative_asset_spec) !=
                                            null &&
                                          (ar = ar.transparency_metadata) !=
                                            null &&
                                          (ar = ar.self_disclosure) != null &&
                                          ar.enroll_status &&
                                          (ir = r("getJSEnumSafe")(
                                            r("AdCreativeFeatureEnrollStatus"),
                                            (lr =
                                              t.generative_asset_spec
                                                .transparency_metadata) ==
                                              null ||
                                              (lr = lr.self_disclosure) == null
                                              ? void 0
                                              : lr.enroll_status,
                                          )) != null
                                            ? ir
                                            : void 0,
                                      })
                                    : void 0,
                              },
                            ),
                          )
                        : void 0,
                    videos:
                      ((sr = t.generative_asset_spec) == null
                        ? void 0
                        : sr.videos) != null
                        ? o(
                            "TypeCoercionUtils",
                          ).coerceObjectWithNullAndEmptyArraysToUndefined(
                            babelHelpers.extends(
                              {},
                              t.generative_asset_spec.videos,
                              {
                                ad_sourced_asset:
                                  (ur =
                                    t.generative_asset_spec.videos
                                      .ad_sourced_asset) != null
                                    ? ur
                                    : void 0,
                                enroll_status:
                                  t.generative_asset_spec.videos
                                    .enroll_status &&
                                  (cr = r("getJSEnumSafe")(
                                    r("AdCreativeFeatureEnrollStatus"),
                                    t.generative_asset_spec.videos
                                      .enroll_status,
                                  )) != null
                                    ? cr
                                    : void 0,
                                request_id:
                                  (dr =
                                    (mr = t.generative_asset_spec) == null ||
                                    (mr = mr.videos) == null
                                      ? void 0
                                      : mr.request_id) != null
                                    ? dr
                                    : void 0,
                                variations: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyArrayToUndefined(
                                  (pr =
                                    (_r = t.generative_asset_spec) == null ||
                                    (_r = _r.videos) == null ||
                                    (_r = _r.variations) == null
                                      ? void 0
                                      : _r.map(function (e) {
                                          return babelHelpers.extends({}, e, {
                                            source_hash: o(
                                              "TypeCoercionUtils",
                                            ).coerceEmptyStringToUndefined(
                                              e.source_hash,
                                            ),
                                            video_id: o(
                                              "TypeCoercionUtils",
                                            ).coerceNonMaybeValue(
                                              e.video_id,
                                              "generative_asset_spec.videos.variations[].video_id",
                                              i.id,
                                            ),
                                          });
                                        })) != null
                                    ? pr
                                    : [],
                                ),
                                video_generation_status_list: o(
                                  "TypeCoercionUtils",
                                ).coerceEmptyArrayToUndefined(
                                  (fr = t.generative_asset_spec) == null ||
                                    (fr = fr.videos) == null
                                    ? void 0
                                    : fr.video_generation_status_list,
                                ),
                              },
                            ),
                          )
                        : void 0,
                  }),
                )
              : void 0,
          id: (gr = t.id) != null ? gr : void 0,
          image_crops:
            (hr =
              (yr = t.image_crops) == null
                ? void 0
                : yr.ad_image_crops_per_dimension_spec) != null
              ? hr
              : void 0,
          image_hash: (Cr = t.image_hash_api) != null ? Cr : void 0,
          image_url: (br = t.image_url) != null ? br : void 0,
          instagram_actor_id: (vr = t.instagram_actor_id) != null ? vr : void 0,
          instagram_branded_content: t.instagram_branded_content_attachment
            ? {
                sponsor_id:
                  (Sr =
                    (Rr = t.instagram_branded_content_attachment) == null
                      ? void 0
                      : Rr.sponsor_id) != null
                    ? Sr
                    : void 0,
              }
            : void 0,
          instagram_permalink_url: void 0,
          instagram_story_id: (Lr = t.instagram_story_id) != null ? Lr : void 0,
          instant_checkout_setting:
            (Er = o("enumUtils").coerceFromKey(
              t.instant_checkout_setting,
              r("AdInstantCheckoutSetting"),
            )) != null
              ? Er
              : void 0,
          interactive_components_spec:
            (kr = t.interactive_components_spec) != null &&
            kr.ad_creative_interactive_component_spec
              ? babelHelpers.extends(
                  {},
                  t.interactive_components_spec
                    .ad_creative_interactive_component_spec,
                  {
                    child_attachments: t.interactive_components_spec
                      .ad_creative_interactive_component_spec.child_attachments
                      ? t.interactive_components_spec.ad_creative_interactive_component_spec.child_attachments.map(
                          function (e) {
                            var t;
                            return {
                              components: (t = e.components) != null ? t : [],
                            };
                          },
                        )
                      : void 0,
                  },
                )
              : void 0,
          link_og_id: void 0,
          link_url: (Ir = t.link_url_from_api) != null ? Ir : void 0,
          live_video_reminder:
            t.live_video_reminder != null
              ? o("TypeCoercionUtils").coerceObjectToUndefined({
                  enroll_status:
                    (Tr = t.live_video_reminder) != null &&
                    Tr.enroll_status &&
                    (Dr = r("getJSEnumSafe")(
                      r("AdCreativeFeatureEnrollStatus"),
                      t.live_video_reminder.enroll_status,
                    )) != null
                      ? Dr
                      : void 0,
                  start_time:
                    (xr =
                      ($r = t.live_video_reminder) == null
                        ? void 0
                        : $r.start_time) != null
                      ? xr
                      : void 0,
                })
              : void 0,
          marketing_message_spec: o(
            "TypeCoercionUtils",
          ).coerceEmptyStringToUndefined(
            (Pr = t.marketing_message_attachment) == null
              ? void 0
              : Pr.message_json,
          ),
          marketing_message_structured_spec: t.marketing_message_attachment
            ? {
                asset_customization:
                  ((Nr = t.marketing_message_attachment) == null
                    ? void 0
                    : Nr.asset_customization) != null
                    ? {
                        body:
                          (Mr =
                            (wr = t.marketing_message_attachment) == null ||
                            (wr = wr.asset_customization) == null
                              ? void 0
                              : wr.body) != null
                            ? Mr
                            : "",
                      }
                    : void 0,
                automation_config:
                  ((Ar = t.marketing_message_attachment) == null ||
                  (Ar = Ar.automation_config) == null
                    ? void 0
                    : Ar.config_id) != null
                    ? {
                        config_id:
                          (Fr = t.marketing_message_attachment) == null ||
                          (Fr = Fr.automation_config) == null
                            ? void 0
                            : Fr.config_id,
                      }
                    : void 0,
                autoreply:
                  ((Or = t.marketing_message_attachment) == null
                    ? void 0
                    : Or.auto_reply) != null
                    ? {
                        buttons: o(
                          "TypeCoercionUtils",
                        ).coerceEmptyArrayToUndefined(
                          (Br = t.marketing_message_attachment) == null
                            ? void 0
                            : Br.auto_reply.buttons.map(function (e) {
                                var t, n;
                                return {
                                  coupon_code: e.coupon_code,
                                  phone_number: e.phone_number,
                                  preconfigured_response:
                                    e.preconfigured_response,
                                  text: (t = e.text) != null ? t : "",
                                  type:
                                    (n = r("getJSEnumSafe")(
                                      r("MarketingMessageButtonType"),
                                      e.type,
                                    )) != null
                                      ? n
                                      : "URL",
                                  url: e.url,
                                };
                              }),
                        ),
                        image_hash:
                          (Wr = t.marketing_message_attachment) == null ||
                          (Wr = Wr.auto_reply) == null
                            ? void 0
                            : Wr.image_hash,
                        is_optimized_auto_reply:
                          (qr = t.marketing_message_attachment) == null ||
                          (qr = qr.auto_reply) == null
                            ? void 0
                            : qr.is_optimized_auto_reply,
                        save_template:
                          (Ur = t.marketing_message_attachment) == null ||
                          (Ur = Ur.auto_reply) == null
                            ? void 0
                            : Ur.save_template,
                        template_name:
                          (Vr = t.marketing_message_attachment) == null ||
                          (Vr = Vr.auto_reply) == null
                            ? void 0
                            : Vr.template_name,
                        text:
                          (Hr = t.marketing_message_attachment) == null ||
                          (Hr = Hr.auto_reply) == null
                            ? void 0
                            : Hr.text,
                        video_id:
                          (Gr = t.marketing_message_attachment) == null ||
                          (Gr = Gr.auto_reply) == null
                            ? void 0
                            : Gr.video_id,
                        video_thumbnail_url:
                          (zr = t.marketing_message_attachment) == null ||
                          (zr = zr.auto_reply) == null
                            ? void 0
                            : zr.video_thumbnail_url,
                      }
                    : void 0,
                buttons: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  (jr = t.marketing_message_attachment) == null
                    ? void 0
                    : jr.buttons.map(function (e) {
                        var t, n, a, i, l, s, u, c, d, m, p;
                        return e.is_derived_from_cta !== !0
                          ? {
                              android_app_metadata:
                                e.android_app_metadata != null
                                  ? {
                                      app_store_url:
                                        (t = e.android_app_metadata) == null
                                          ? void 0
                                          : t.app_store_url,
                                      deep_link_url:
                                        (n =
                                          (a = e.android_app_metadata) == null
                                            ? void 0
                                            : a.deep_link_url) != null
                                          ? n
                                          : "",
                                      type: o(
                                        "MarketingMessageButtonUtils",
                                      ).getWhatsAppAppLinkTreatmentTypeFromGraphQLType(
                                        (i = e.android_app_metadata.type) !=
                                          null
                                          ? i
                                          : "DEEPLINK_WITH_WEB_FALLBACK",
                                      ),
                                    }
                                  : void 0,
                              app_id: e.app_id,
                              coupon_code: e.coupon_code,
                              ios_app_metadata:
                                e.ios_app_metadata != null
                                  ? {
                                      app_store_url:
                                        (l = e.ios_app_metadata) == null
                                          ? void 0
                                          : l.app_store_url,
                                      deep_link_url:
                                        (s =
                                          (u = e.ios_app_metadata) == null
                                            ? void 0
                                            : u.deep_link_url) != null
                                          ? s
                                          : "",
                                      type: o(
                                        "MarketingMessageButtonUtils",
                                      ).getWhatsAppAppLinkTreatmentTypeFromGraphQLType(
                                        (c =
                                          (d = e.ios_app_metadata) == null
                                            ? void 0
                                            : d.type) != null
                                          ? c
                                          : "DEEPLINK_WITH_WEB_FALLBACK",
                                      ),
                                    }
                                  : void 0,
                              phone_number: e.phone_number,
                              preconfigured_response: e.preconfigured_response,
                              quick_reply_payload: e.quick_reply_payload,
                              text: (m = e.text) != null ? m : "",
                              type:
                                (p = r("getJSEnumSafe")(
                                  r("MarketingMessageButtonType"),
                                  e.type,
                                )) != null
                                  ? p
                                  : "URL",
                              url: e.url,
                            }
                          : null;
                      }),
                ),
                conversation_template_id:
                  (Kr =
                    (Qr = t.marketing_message_attachment) == null
                      ? void 0
                      : Qr.conversation_template_id) != null
                    ? Kr
                    : void 0,
                dynamic_product_message_spec:
                  ((Xr = t.marketing_message_attachment) == null
                    ? void 0
                    : Xr.dynamic_product_message_spec) != null
                    ? {
                        description:
                          (Yr =
                            (Jr = t.marketing_message_attachment) == null ||
                            (Jr = Jr.dynamic_product_message_spec) == null
                              ? void 0
                              : Jr.description) != null
                            ? Yr
                            : "",
                        headline:
                          (Zr =
                            (eo = t.marketing_message_attachment) == null ||
                            (eo = eo.dynamic_product_message_spec) == null
                              ? void 0
                              : eo.headline) != null
                            ? Zr
                            : "",
                        text:
                          (to =
                            (no = t.marketing_message_attachment) == null ||
                            (no = no.dynamic_product_message_spec) == null
                              ? void 0
                              : no.text) != null
                            ? to
                            : "",
                      }
                    : void 0,
                footer:
                  (ro =
                    (oo = t.marketing_message_attachment) == null
                      ? void 0
                      : oo.footer) != null
                    ? ro
                    : void 0,
                greeting:
                  (ao =
                    (io = t.marketing_message_attachment) == null
                      ? void 0
                      : io.greeting) != null
                    ? ao
                    : void 0,
                is_optimized_text:
                  (lo =
                    (so = t.marketing_message_attachment) == null
                      ? void 0
                      : so.is_optimized_text) != null
                    ? lo
                    : void 0,
                language:
                  (uo = Object.keys(r("HSMAvailableLanguagesType")).find(
                    function (e) {
                      var n;
                      return (
                        e ===
                        ((n = t.marketing_message_attachment) == null
                          ? void 0
                          : n.language)
                      );
                    },
                  )) != null
                    ? uo
                    : void 0,
                offer:
                  ((co = t.marketing_message_attachment) == null
                    ? void 0
                    : co.offer) != null
                    ? {
                        expiration_time:
                          (mo = t.marketing_message_attachment) == null ||
                          (mo = mo.offer) == null
                            ? void 0
                            : mo.expiration_time_iso_string,
                        is_offer_code_personalized:
                          (po =
                            (_o = t.marketing_message_attachment) == null ||
                            (_o = _o.offer) == null
                              ? void 0
                              : _o.is_offer_code_personalized) != null
                            ? po
                            : !1,
                        text:
                          (fo = t.marketing_message_attachment) == null ||
                          (fo = fo.offer) == null
                            ? void 0
                            : fo.text,
                      }
                    : void 0,
              }
            : void 0,
          media_sourcing_spec: t.media_sourcing_spec
            ? o(
                "TypeCoercionUtils",
              ).coerceObjectWithNullAndEmptyArraysToUndefined(
                babelHelpers.extends({}, t.media_sourcing_spec, {
                  bodies: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                    (go = t.media_sourcing_spec) == null ||
                      (go = go.bodies) == null
                      ? void 0
                      : go.map(function (e) {
                          var t, n, a, l, s, u, c;
                          return {
                            action_type:
                              (t = o("enumUtils").coerceFromKey(
                                e.action_type,
                                r("AdsAPIAssetFeedTextActionType"),
                              )) != null
                                ? t
                                : void 0,
                            asset_source:
                              (n = e.asset_source) != null ? n : void 0,
                            language: (a = e.language) != null ? a : void 0,
                            target_audience:
                              (l = e.target_audience) != null ? l : void 0,
                            text:
                              e.text != null
                                ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                    e.text,
                                    "media_sourcing_spec.bodies[].text",
                                    i.id,
                                  )
                                : void 0,
                            text_gen_input_text:
                              (s = e.text_gen_input_text) != null ? s : void 0,
                            text_gen_original_text:
                              (u = e.text_gen_original_text) != null
                                ? u
                                : void 0,
                            uuid: (c = e.uuid) != null ? c : void 0,
                          };
                        }),
                  ),
                  descriptions: o(
                    "TypeCoercionUtils",
                  ).coerceEmptyArrayToUndefined(
                    (ho = t.media_sourcing_spec) == null ||
                      (ho = ho.descriptions) == null
                      ? void 0
                      : ho.map(function (e) {
                          return {
                            text:
                              e.text != null
                                ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                    e.text,
                                    "media_sourcing_spec.descriptions[].text",
                                    i.id,
                                  )
                                : void 0,
                          };
                        }),
                  ),
                  destinations: o(
                    "TypeCoercionUtils",
                  ).coerceEmptyArrayToUndefined(
                    (yo = t.media_sourcing_spec) == null ||
                      (yo = yo.destinations) == null
                      ? void 0
                      : yo.map(function (e) {
                          return {
                            display_url:
                              e.display_url != null
                                ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                    e.display_url,
                                    "media_sourcing_spec.destinations[].display_url",
                                    i.id,
                                  )
                                : void 0,
                            url:
                              e.url != null
                                ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                    e.url,
                                    "media_sourcing_spec.destinations[].url",
                                    i.id,
                                  )
                                : "",
                          };
                        }),
                  ),
                  images:
                    (Co = t.media_sourcing_spec) != null && Co.images
                      ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                          (bo = t.media_sourcing_spec) == null ||
                            (bo = bo.images) == null
                            ? void 0
                            : bo.map(function (t) {
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
                                  S = t.creative_audience_pairing_persona,
                                  R = t.variant_types,
                                  L = babelHelpers.objectWithoutPropertiesLoose(
                                    t,
                                    e,
                                  );
                                return babelHelpers.extends({}, L, {
                                  action_metadata:
                                    (n = r("getJSEnumSafe")(
                                      r("AdCreativeFeatureActionType"),
                                      L.action_metadata,
                                    )) != null
                                      ? n
                                      : void 0,
                                  creation_source:
                                    L.creation_source != null
                                      ? L.creation_source
                                      : void 0,
                                  creative_audience_pairing_persona:
                                    S != null
                                      ? {
                                          age_max:
                                            (a = S.age_max) != null
                                              ? a
                                              : void 0,
                                          age_min:
                                            (l = S.age_min) != null
                                              ? l
                                              : void 0,
                                          genders: r("filterNulls")(
                                            S.genders.map(function (e) {
                                              var t;
                                              return (t = o("enumUtils").coerce(
                                                e,
                                                r("AdsTargetingGender"),
                                              )) != null
                                                ? t
                                                : null;
                                            }),
                                          ),
                                        }
                                      : void 0,
                                  destination_customizations:
                                    (s = L.destination_customizations) == null
                                      ? void 0
                                      : s.map(function (e) {
                                          return {
                                            display_url:
                                              e.display_url != null
                                                ? o(
                                                    "TypeCoercionUtils",
                                                  ).coerceNonMaybeValue(
                                                    e.display_url,
                                                    "media_sourcing_spec.images[].destination_customizations[].display_url",
                                                    i.id,
                                                  )
                                                : void 0,
                                            url:
                                              e.url != null
                                                ? o(
                                                    "TypeCoercionUtils",
                                                  ).coerceNonMaybeValue(
                                                    e.url,
                                                    "media_sourcing_spec.images[].destination_customizations[].url",
                                                    i.id,
                                                  )
                                                : "",
                                          };
                                        }),
                                  group_id:
                                    L.group_id != null
                                      ? o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          L.group_id,
                                          "media_sourcing_spec.images[].group_id",
                                          i.id,
                                        )
                                      : void 0,
                                  hash:
                                    L.hash != null
                                      ? o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          L.hash,
                                          "media_sourcing_spec.images[].hash",
                                          i.id,
                                        )
                                      : void 0,
                                  image_crops:
                                    (u = o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (c = L.image_crops) == null
                                        ? void 0
                                        : c.map(function (e) {
                                            var t, n, a;
                                            return {
                                              crop_spec:
                                                e != null &&
                                                (t = e.crop_spec) != null &&
                                                t.ad_image_crops_per_dimension_spec
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceObjectToUndefined(
                                                      e == null ||
                                                        (n = e.crop_spec) ==
                                                          null
                                                        ? void 0
                                                        : n.ad_image_crops_per_dimension_spec,
                                                    )
                                                  : void 0,
                                              type:
                                                (a = r("getJSEnumSafe")(
                                                  r("MultiMediaCropType"),
                                                  e == null ? void 0 : e.type,
                                                )) != null
                                                  ? a
                                                  : void 0,
                                            };
                                          }),
                                    )) != null
                                      ? u
                                      : void 0,
                                  opt_in_status: o(
                                    "AdsCreativeFlexSpecUtils",
                                  ).convertSpecStringToRelatedMediaSelection(
                                    L.opt_in_status,
                                  ),
                                  organic_media_source:
                                    L.organic_media_source != null
                                      ? {
                                          original_ig_account_fbid:
                                            (d =
                                              L.organic_media_source
                                                .original_ig_account_fbid) !=
                                            null
                                              ? d
                                              : void 0,
                                          original_ig_media_fbid:
                                            (m =
                                              L.organic_media_source
                                                .original_ig_media_fbid) != null
                                              ? m
                                              : void 0,
                                          original_ig_media_permalink:
                                            (p =
                                              L.organic_media_source
                                                .original_ig_media_permalink) !=
                                            null
                                              ? p
                                              : void 0,
                                        }
                                      : void 0,
                                  placement_customizations:
                                    (_ = o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (f = L.placement_customizations) == null
                                        ? void 0
                                        : f.map(function (e) {
                                            var t, n;
                                            return babelHelpers.extends({}, e, {
                                              placement_exclusions:
                                                (t = o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  e.placement_exclusions,
                                                )) != null
                                                  ? t
                                                  : void 0,
                                              publisher_platform:
                                                (n = r("getJSEnumSafe")(
                                                  r("AdsAPIPublisherPlatform"),
                                                  e.publisher_platform,
                                                )) != null
                                                  ? n
                                                  : void 0,
                                            });
                                          }),
                                    )) != null
                                      ? _
                                      : void 0,
                                  retriever_sources:
                                    (g =
                                      (h = L.retriever_sources) == null
                                        ? void 0
                                        : h
                                            .map(
                                              o("AdsCreativeFlexSpecUtils")
                                                .convertSpecStringToRetrieverSource,
                                            )
                                            .filter(Boolean)) != null
                                      ? g
                                      : void 0,
                                  source:
                                    (y = r("getJSEnumSafe")(
                                      r("CreativeMultiMediaSource"),
                                      L == null ? void 0 : L.source,
                                    )) != null
                                      ? y
                                      : void 0,
                                  text_customizations: {
                                    bodies: o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (C = L.text_customizations) == null ||
                                        (C = C.bodies) == null
                                        ? void 0
                                        : C.map(function (e) {
                                            return {
                                              text:
                                                e.text != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.text,
                                                      "media_sourcing_spec.images[].text_customizations.bodies[].text",
                                                      i.id,
                                                    )
                                                  : void 0,
                                            };
                                          }),
                                    ),
                                    descriptions: o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (b = L.text_customizations) == null ||
                                        (b = b.descriptions) == null
                                        ? void 0
                                        : b.map(function (e) {
                                            return {
                                              text:
                                                e.text != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.text,
                                                      "media_sourcing_spec.images[].text_customizations.descriptions[].text",
                                                      i.id,
                                                    )
                                                  : void 0,
                                            };
                                          }),
                                    ),
                                    titles: o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (v = L.text_customizations) == null ||
                                        (v = v.titles) == null
                                        ? void 0
                                        : v.map(function (e) {
                                            return {
                                              text:
                                                e.text != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.text,
                                                      "media_sourcing_spec.images[].text_customizations.titles[].text",
                                                      i.id,
                                                    )
                                                  : void 0,
                                            };
                                          }),
                                    ),
                                  },
                                  url:
                                    L.url != null
                                      ? o(
                                          "TypeCoercionUtils",
                                        ).coerceNonMaybeValue(
                                          L.url,
                                          "media_sourcing_spec.images[].url",
                                          i.id,
                                        )
                                      : void 0,
                                  variant_types:
                                    R != null
                                      ? o(
                                          "TypeCoercionUtils",
                                        ).coerceEmptyArrayToUndefined(
                                          r("filterNulls")(
                                            R.map(function (e) {
                                              var t;
                                              return (t = r("getJSEnumSafe")(
                                                r("AdsAspectRatioTypes"),
                                                e,
                                              )) != null
                                                ? t
                                                : null;
                                            }),
                                          ),
                                        )
                                      : void 0,
                                });
                              }),
                        )
                      : void 0,
                  push_metadata_ids: o(
                    "TypeCoercionUtils",
                  ).coerceEmptyArrayToUndefined(
                    (vo = t.media_sourcing_spec) == null ||
                      (vo = vo.push_metadata_ids) == null
                      ? void 0
                      : vo.map(function (e) {
                          return o(
                            "TypeCoercionUtils",
                          ).coerceMaybeNumberToString(e);
                        }),
                  ),
                  related_media:
                    (So = t.media_sourcing_spec) != null && So.related_media
                      ? o(
                          "TypeCoercionUtils",
                        ).coerceObjectWithNullAndEmptyArraysToUndefined(
                          babelHelpers.extends(
                            {},
                            (Ro = t.media_sourcing_spec) == null
                              ? void 0
                              : Ro.related_media,
                            {
                              images:
                                (Lo = t.media_sourcing_spec) != null &&
                                (Lo = Lo.related_media) != null &&
                                Lo.images
                                  ? o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (Eo = t.media_sourcing_spec) == null ||
                                        (Eo = Eo.related_media) == null
                                        ? void 0
                                        : Eo.images.map(function (e) {
                                            var t,
                                              n,
                                              a,
                                              l,
                                              s,
                                              u,
                                              c,
                                              d,
                                              m,
                                              p,
                                              _,
                                              f;
                                            return babelHelpers.extends({}, e, {
                                              action_metadata:
                                                e.action_metadata &&
                                                (t = r("getJSEnumSafe")(
                                                  r(
                                                    "AdCreativeFeatureActionType",
                                                  ),
                                                  e.action_metadata,
                                                )) != null
                                                  ? t
                                                  : void 0,
                                              creation_source:
                                                e.creation_source != null
                                                  ? e.creation_source
                                                  : void 0,
                                              destination_customizations:
                                                (n =
                                                  e.destination_customizations) ==
                                                null
                                                  ? void 0
                                                  : n.map(function (e) {
                                                      return {
                                                        display_url:
                                                          e.display_url != null
                                                            ? o(
                                                                "TypeCoercionUtils",
                                                              ).coerceNonMaybeValue(
                                                                e.display_url,
                                                                "media_sourcing_spec.related_media.images[].destination_customizations[].display_url",
                                                                i.id,
                                                              )
                                                            : void 0,
                                                        url:
                                                          e.url != null
                                                            ? o(
                                                                "TypeCoercionUtils",
                                                              ).coerceNonMaybeValue(
                                                                e.url,
                                                                "media_sourcing_spec.related_media.images[].destination_customizations[].url",
                                                                i.id,
                                                              )
                                                            : "",
                                                      };
                                                    }),
                                              hash:
                                                e.hash != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.hash,
                                                      "media_sourcing_spec.related_media.images[].hash",
                                                      i.id,
                                                    )
                                                  : void 0,
                                              image_crops:
                                                (a = e.image_crops) != null &&
                                                a.ad_image_crops_per_dimension_spec
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceObjectToUndefined(
                                                      (l = e.image_crops) ==
                                                        null
                                                        ? void 0
                                                        : l.ad_image_crops_per_dimension_spec,
                                                    )
                                                  : void 0,
                                              opt_in_status: o(
                                                "AdsCreativeFlexSpecUtils",
                                              ).convertSpecStringToRelatedMediaSelection(
                                                e.opt_in_status,
                                              ),
                                              organic_media_source:
                                                e.organic_media_source != null
                                                  ? {
                                                      original_ig_account_fbid:
                                                        (s =
                                                          e.organic_media_source
                                                            .original_ig_account_fbid) !=
                                                        null
                                                          ? s
                                                          : void 0,
                                                      original_ig_media_fbid:
                                                        (u =
                                                          e.organic_media_source
                                                            .original_ig_media_fbid) !=
                                                        null
                                                          ? u
                                                          : void 0,
                                                      original_ig_media_permalink:
                                                        (c =
                                                          e.organic_media_source
                                                            .original_ig_media_permalink) !=
                                                        null
                                                          ? c
                                                          : void 0,
                                                    }
                                                  : void 0,
                                              retriever_sources:
                                                (d =
                                                  (m = e.retriever_sources) ==
                                                  null
                                                    ? void 0
                                                    : m
                                                        .map(
                                                          o(
                                                            "AdsCreativeFlexSpecUtils",
                                                          )
                                                            .convertSpecStringToRetrieverSource,
                                                        )
                                                        .filter(Boolean)) !=
                                                null
                                                  ? d
                                                  : void 0,
                                              text_customizations: {
                                                bodies: o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  (p = e.text_customizations) ==
                                                    null ||
                                                    (p = p.bodies) == null
                                                    ? void 0
                                                    : p.map(function (e) {
                                                        return {
                                                          text:
                                                            e.text != null
                                                              ? o(
                                                                  "TypeCoercionUtils",
                                                                ).coerceNonMaybeValue(
                                                                  e.text,
                                                                  "media_sourcing_spec.related_media.images[].text_customizations.bodies[].text",
                                                                  i.id,
                                                                )
                                                              : void 0,
                                                        };
                                                      }),
                                                ),
                                                descriptions: o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  (_ = e.text_customizations) ==
                                                    null ||
                                                    (_ = _.descriptions) == null
                                                    ? void 0
                                                    : _.map(function (e) {
                                                        return {
                                                          text:
                                                            e.text != null
                                                              ? o(
                                                                  "TypeCoercionUtils",
                                                                ).coerceNonMaybeValue(
                                                                  e.text,
                                                                  "media_sourcing_spec.related_media.images[].text_customizations.descriptions[].text",
                                                                  i.id,
                                                                )
                                                              : void 0,
                                                        };
                                                      }),
                                                ),
                                                titles: o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  (f = e.text_customizations) ==
                                                    null ||
                                                    (f = f.titles) == null
                                                    ? void 0
                                                    : f.map(function (e) {
                                                        return {
                                                          text:
                                                            e.text != null
                                                              ? o(
                                                                  "TypeCoercionUtils",
                                                                ).coerceNonMaybeValue(
                                                                  e.text,
                                                                  "media_sourcing_spec.related_media.images[].text_customizations.titles[].text",
                                                                  i.id,
                                                                )
                                                              : void 0,
                                                        };
                                                      }),
                                                ),
                                              },
                                              url:
                                                e.url != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.url,
                                                      "media_sourcing_spec.related_media.images[].url",
                                                      i.id,
                                                    )
                                                  : void 0,
                                            });
                                          }),
                                    )
                                  : void 0,
                              videos:
                                (ko = t.media_sourcing_spec) != null &&
                                (ko = ko.related_media) != null &&
                                ko.videos
                                  ? o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (Io = t.media_sourcing_spec) == null ||
                                        (Io = Io.related_media) == null
                                        ? void 0
                                        : Io.videos.map(function (e) {
                                            var t, n, a, l, s, u, c, d, m, p;
                                            return babelHelpers.extends({}, e, {
                                              action_metadata:
                                                e.action_metadata &&
                                                (t = r("getJSEnumSafe")(
                                                  r(
                                                    "AdCreativeFeatureActionType",
                                                  ),
                                                  e.action_metadata,
                                                )) != null
                                                  ? t
                                                  : void 0,
                                              creation_source:
                                                e.creation_source != null
                                                  ? e.creation_source
                                                  : void 0,
                                              destination_customizations:
                                                (n =
                                                  e.destination_customizations) ==
                                                null
                                                  ? void 0
                                                  : n.map(function (e) {
                                                      return {
                                                        display_url:
                                                          e.display_url != null
                                                            ? o(
                                                                "TypeCoercionUtils",
                                                              ).coerceNonMaybeValue(
                                                                e.display_url,
                                                                "media_sourcing_spec.related_media.videos[].destination_customizations[].display_url",
                                                                i.id,
                                                              )
                                                            : void 0,
                                                        url:
                                                          e.url != null
                                                            ? o(
                                                                "TypeCoercionUtils",
                                                              ).coerceNonMaybeValue(
                                                                e.url,
                                                                "media_sourcing_spec.related_media.videos[].destination_customizations[].url",
                                                                i.id,
                                                              )
                                                            : "",
                                                      };
                                                    }),
                                              opt_in_status: o(
                                                "AdsCreativeFlexSpecUtils",
                                              ).convertSpecStringToRelatedMediaSelection(
                                                e.opt_in_status,
                                              ),
                                              organic_media_source:
                                                e.organic_media_source != null
                                                  ? {
                                                      original_ig_account_fbid:
                                                        (a =
                                                          e.organic_media_source
                                                            .original_ig_account_fbid) !=
                                                        null
                                                          ? a
                                                          : void 0,
                                                      original_ig_media_fbid:
                                                        (l =
                                                          e.organic_media_source
                                                            .original_ig_media_fbid) !=
                                                        null
                                                          ? l
                                                          : void 0,
                                                      original_ig_media_permalink:
                                                        (s =
                                                          e.organic_media_source
                                                            .original_ig_media_permalink) !=
                                                        null
                                                          ? s
                                                          : void 0,
                                                    }
                                                  : void 0,
                                              retriever_sources:
                                                (u =
                                                  (c = e.retriever_sources) ==
                                                  null
                                                    ? void 0
                                                    : c
                                                        .map(
                                                          o(
                                                            "AdsCreativeFlexSpecUtils",
                                                          )
                                                            .convertSpecStringToRetrieverSource,
                                                        )
                                                        .filter(Boolean)) !=
                                                null
                                                  ? u
                                                  : void 0,
                                              text_customizations: {
                                                bodies: o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  (d = e.text_customizations) ==
                                                    null ||
                                                    (d = d.bodies) == null
                                                    ? void 0
                                                    : d.map(function (e) {
                                                        return {
                                                          text:
                                                            e.text != null
                                                              ? o(
                                                                  "TypeCoercionUtils",
                                                                ).coerceNonMaybeValue(
                                                                  e.text,
                                                                  "media_sourcing_spec.related_media.videos[].text_customizations.bodies[].text",
                                                                  i.id,
                                                                )
                                                              : void 0,
                                                        };
                                                      }),
                                                ),
                                                descriptions: o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  (m = e.text_customizations) ==
                                                    null ||
                                                    (m = m.descriptions) == null
                                                    ? void 0
                                                    : m.map(function (e) {
                                                        return {
                                                          text:
                                                            e.text != null
                                                              ? o(
                                                                  "TypeCoercionUtils",
                                                                ).coerceNonMaybeValue(
                                                                  e.text,
                                                                  "media_sourcing_spec.related_media.videos[].text_customizations.descriptions[].text",
                                                                  i.id,
                                                                )
                                                              : void 0,
                                                        };
                                                      }),
                                                ),
                                                titles: o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  (p = e.text_customizations) ==
                                                    null ||
                                                    (p = p.titles) == null
                                                    ? void 0
                                                    : p.map(function (e) {
                                                        return {
                                                          text:
                                                            e.text != null
                                                              ? o(
                                                                  "TypeCoercionUtils",
                                                                ).coerceNonMaybeValue(
                                                                  e.text,
                                                                  "media_sourcing_spec.related_media.videos[].text_customizations.titles[].text",
                                                                  i.id,
                                                                )
                                                              : void 0,
                                                        };
                                                      }),
                                                ),
                                              },
                                              video_id: o(
                                                "TypeCoercionUtils",
                                              ).coerceNonMaybeValue(
                                                e.video_id,
                                                "media_sourcing_spec.related_media.videos[].video_id",
                                                i.id,
                                              ),
                                            });
                                          }),
                                    )
                                  : void 0,
                            },
                          ),
                        )
                      : void 0,
                  titles: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                    (To = t.media_sourcing_spec) == null ||
                      (To = To.titles) == null
                      ? void 0
                      : To.map(function (e) {
                          var t, n, a, l, s, u, c;
                          return {
                            action_type:
                              (t = o("enumUtils").coerceFromKey(
                                e.action_type,
                                r("AdsAPIAssetFeedTextActionType"),
                              )) != null
                                ? t
                                : void 0,
                            asset_source:
                              (n = e.asset_source) != null ? n : void 0,
                            language: (a = e.language) != null ? a : void 0,
                            target_audience:
                              (l = e.target_audience) != null ? l : void 0,
                            text:
                              e.text != null
                                ? o("TypeCoercionUtils").coerceNonMaybeValue(
                                    e.text,
                                    "media_sourcing_spec.titles[].text",
                                    i.id,
                                  )
                                : void 0,
                            text_gen_input_text:
                              (s = e.text_gen_input_text) != null ? s : void 0,
                            text_gen_original_text:
                              (u = e.text_gen_original_text) != null
                                ? u
                                : void 0,
                            uuid: (c = e.uuid) != null ? c : void 0,
                          };
                        }),
                  ),
                  videos:
                    (Do = t.media_sourcing_spec) != null && Do.videos
                      ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                          (xo = t.media_sourcing_spec) == null ||
                            (xo = xo.videos) == null
                            ? void 0
                            : xo.map(function (e) {
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
                                  v = e.creative_audience_pairing_persona,
                                  S = babelHelpers.objectWithoutPropertiesLoose(
                                    e,
                                    s,
                                  );
                                return babelHelpers.extends({}, S, {
                                  creation_source:
                                    S.creation_source != null
                                      ? S.creation_source
                                      : void 0,
                                  creative_audience_pairing_persona:
                                    v != null
                                      ? {
                                          age_max:
                                            (t = v.age_max) != null
                                              ? t
                                              : void 0,
                                          age_min:
                                            (n = v.age_min) != null
                                              ? n
                                              : void 0,
                                          genders: r("filterNulls")(
                                            v.genders.map(function (e) {
                                              var t;
                                              return (t = o("enumUtils").coerce(
                                                e,
                                                r("AdsTargetingGender"),
                                              )) != null
                                                ? t
                                                : null;
                                            }),
                                          ),
                                        }
                                      : void 0,
                                  destination_customizations:
                                    (a = S.destination_customizations) == null
                                      ? void 0
                                      : a.map(function (e) {
                                          return {
                                            display_url:
                                              e.display_url != null
                                                ? o(
                                                    "TypeCoercionUtils",
                                                  ).coerceNonMaybeValue(
                                                    e.display_url,
                                                    "media_sourcing_spec.videos[].destination_customizations[].display_url",
                                                    i.id,
                                                  )
                                                : void 0,
                                            url:
                                              e.url != null
                                                ? o(
                                                    "TypeCoercionUtils",
                                                  ).coerceNonMaybeValue(
                                                    e.url,
                                                    "media_sourcing_spec.videos[].destination_customizations[].url",
                                                    i.id,
                                                  )
                                                : "",
                                          };
                                        }),
                                  opt_in_status: o(
                                    "AdsCreativeFlexSpecUtils",
                                  ).convertSpecStringToRelatedMediaSelection(
                                    S.opt_in_status,
                                  ),
                                  organic_media_source:
                                    S.organic_media_source != null
                                      ? {
                                          original_ig_account_fbid:
                                            (l =
                                              S.organic_media_source
                                                .original_ig_account_fbid) !=
                                            null
                                              ? l
                                              : void 0,
                                          original_ig_media_fbid:
                                            (u =
                                              S.organic_media_source
                                                .original_ig_media_fbid) != null
                                              ? u
                                              : void 0,
                                          original_ig_media_permalink:
                                            (c =
                                              S.organic_media_source
                                                .original_ig_media_permalink) !=
                                            null
                                              ? c
                                              : void 0,
                                        }
                                      : void 0,
                                  original_video_id: o(
                                    "TypeCoercionUtils",
                                  ).coerceMaybeNumberToString(
                                    S.original_video_id,
                                  ),
                                  placement_customizations:
                                    (d = o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (m = S.placement_customizations) == null
                                        ? void 0
                                        : m.map(function (e) {
                                            var t, n;
                                            return babelHelpers.extends({}, e, {
                                              placement_exclusions:
                                                (t = o(
                                                  "TypeCoercionUtils",
                                                ).coerceEmptyArrayToUndefined(
                                                  e.placement_exclusions,
                                                )) != null
                                                  ? t
                                                  : void 0,
                                              publisher_platform:
                                                (n = r("getJSEnumSafe")(
                                                  r("AdsAPIPublisherPlatform"),
                                                  e.publisher_platform,
                                                )) != null
                                                  ? n
                                                  : void 0,
                                            });
                                          }),
                                    )) != null
                                      ? d
                                      : void 0,
                                  retriever_sources:
                                    (p =
                                      (_ = S.retriever_sources) == null
                                        ? void 0
                                        : _.map(
                                            o("AdsCreativeFlexSpecUtils")
                                              .convertSpecStringToRetrieverSource,
                                          ).filter(Boolean)) != null
                                      ? p
                                      : void 0,
                                  source:
                                    (f = r("getJSEnumSafe")(
                                      r("CreativeMultiMediaSource"),
                                      S == null ? void 0 : S.source,
                                    )) != null
                                      ? f
                                      : void 0,
                                  text_customizations: {
                                    bodies: o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (g = S.text_customizations) == null ||
                                        (g = g.bodies) == null
                                        ? void 0
                                        : g.map(function (e) {
                                            return {
                                              text:
                                                e.text != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.text,
                                                      "media_sourcing_spec.videos[].text_customizations.bodies[].text",
                                                      i.id,
                                                    )
                                                  : void 0,
                                            };
                                          }),
                                    ),
                                    descriptions: o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (h = S.text_customizations) == null ||
                                        (h = h.descriptions) == null
                                        ? void 0
                                        : h.map(function (e) {
                                            return {
                                              text:
                                                e.text != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.text,
                                                      "media_sourcing_spec.videos[].text_customizations.descriptions[].text",
                                                      i.id,
                                                    )
                                                  : void 0,
                                            };
                                          }),
                                    ),
                                    titles: o(
                                      "TypeCoercionUtils",
                                    ).coerceEmptyArrayToUndefined(
                                      (y = S.text_customizations) == null ||
                                        (y = y.titles) == null
                                        ? void 0
                                        : y.map(function (e) {
                                            return {
                                              text:
                                                e.text != null
                                                  ? o(
                                                      "TypeCoercionUtils",
                                                    ).coerceNonMaybeValue(
                                                      e.text,
                                                      "media_sourcing_spec.videos[].text_customizations.titles[].text",
                                                      i.id,
                                                    )
                                                  : void 0,
                                            };
                                          }),
                                    ),
                                  },
                                  thumbnail_id: o(
                                    "TypeCoercionUtils",
                                  ).coerceMaybeNumberToString(S.thumbnail_id),
                                  thumbnail_source:
                                    (C = r("getJSEnumSafe")(
                                      r("VideoThumbnailSource"),
                                      S.thumbnail_source,
                                    )) != null
                                      ? C
                                      : void 0,
                                  thumbnail_url:
                                    (b = S.thumbnail_url) != null ? b : void 0,
                                  video_id: o(
                                    "TypeCoercionUtils",
                                  ).coerceNonMaybeValue(
                                    S.video_id,
                                    "media_sourcing_spec.videos[].video_id",
                                    i.id,
                                  ),
                                });
                              }),
                        )
                      : void 0,
                }),
              )
            : void 0,
          media_type:
            ($o = r("getJSEnumSafe")(
              r("AdCreativeMediaType"),
              t == null ? void 0 : t.media_type,
            )) != null
              ? $o
              : void 0,
          mockup_id: (Po = t.mockup_id) != null ? Po : void 0,
          object_id: (No = t.object_id) != null ? No : void 0,
          object_story_id: (Mo = t.object_story_id) != null ? Mo : void 0,
          object_story_spec:
            (wo = t.object_story_specification) != null ? wo : void 0,
          object_type:
            (Ao = r("getJSEnumSafe")(r("ApiAdObjectTypes"), t.object_type)) !=
            null
              ? Ao
              : void 0,
          object_url: (Fo = t.object_url) != null ? Fo : void 0,
          omnichannel_link_spec:
            (Oo = t.omnichannel_link_spec) != null &&
            Oo.omnichannel_link_spec_ad_object_spec
              ? o("TypeCoercionUtils").coerceObjectToUndefined(
                  (Bo = t.omnichannel_link_spec) == null
                    ? void 0
                    : Bo.omnichannel_link_spec_ad_object_spec,
                )
              : void 0,
          page_welcome_message:
            (Wo = t.page_welcome_message) != null ? Wo : void 0,
          page_whatsapp_number_id:
            (qo = t.page_whatsapp_number_id) != null ? qo : void 0,
          place_page_set_id:
            (Uo =
              (Vo = t.dynamic_local_ad_creative_attachment) == null
                ? void 0
                : Vo.place_page_set_id) != null
              ? Uo
              : void 0,
          platform_customizations: t.platform_customizations
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                instagram:
                  (Ho = t.platform_customizations) != null && Ho.instagram
                    ? o("TypeCoercionUtils").coerceObjectToUndefined({
                        caption_ids:
                          (Go = o(
                            "TypeCoercionUtils",
                          ).coerceEmptyArrayToUndefined(
                            (zo = t.platform_customizations) == null
                              ? void 0
                              : zo.instagram.caption_ids,
                          )) != null
                            ? Go
                            : void 0,
                        image_crops:
                          (jo = t.platform_customizations) != null &&
                          (jo = jo.instagram) != null &&
                          (jo = jo.image_crops) != null &&
                          jo.ad_image_crops_per_dimension_spec
                            ? o("TypeCoercionUtils").coerceObjectToUndefined(
                                t.platform_customizations.instagram.image_crops
                                  .ad_image_crops_per_dimension_spec,
                              )
                            : void 0,
                        image_hash:
                          (Ko =
                            (Qo = t.platform_customizations) == null ||
                            (Qo = Qo.instagram) == null
                              ? void 0
                              : Qo.image_hash) != null
                            ? Ko
                            : void 0,
                        image_url:
                          (Xo =
                            (Yo = t.platform_customizations) == null ||
                            (Yo = Yo.instagram) == null
                              ? void 0
                              : Yo.image_url) != null
                            ? Xo
                            : void 0,
                        thumbnail_source: u,
                        video_id:
                          (Jo =
                            (Zo = t.platform_customizations) == null ||
                            (Zo = Zo.instagram) == null
                              ? void 0
                              : Zo.video_id) != null
                            ? Jo
                            : void 0,
                      })
                    : void 0,
              })
            : void 0,
          playable_asset_id: (ea = t.playable_asset_id) != null ? ea : void 0,
          portrait_customizations: t.portrait_customizations_attachment
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                carousel_delivery_mode:
                  (ta = o("enumUtils").coerceFromKey(
                    (na = t.portrait_customizations_attachment) == null
                      ? void 0
                      : na.carousel_delivery_mode,
                    r("ApiCarouselDeliveryMode"),
                  )) != null
                    ? ta
                    : void 0,
                specifications: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  (ra = t.portrait_customizations_attachment) == null
                    ? void 0
                    : ra.specifications.map(function (e) {
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
                ),
              })
            : void 0,
          product_data: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t != null && t.product_data
              ? t.product_data.map(function (e) {
                  var t;
                  return {
                    product_decision: o(
                      "XFBCTMSMCProductDataDecisionUtils.facebook",
                    ).toJSEnum(e.product_decision),
                    product_id: (t = e.product_id) != null ? t : "0",
                    product_source: o(
                      "XFBCTMSMCProductDataSourceUtils.facebook",
                    ).toJSEnum(e.product_source),
                  };
                })
              : [],
          ),
          product_set_id: (oa = t.product_set_id) != null ? oa : void 0,
          product_suggestion_settings: t.product_suggestion_settings
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                enabled:
                  (aa =
                    (ia = t.product_suggestion_settings) == null
                      ? void 0
                      : ia.enabled) != null
                    ? aa
                    : void 0,
              })
            : void 0,
          recommender_settings: bi
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                preferred_events: o(
                  "TypeCoercionUtils",
                ).coerceEmptyArrayToUndefined(
                  bi.preferred_events.map(function (e) {
                    return o("TypeCoercionUtils").coerceNonMaybeValue(
                      o("enumUtils").coerceFromKey(
                        e,
                        r("AdsPixelConversionEventsEnum"),
                      ),
                      "dynamic_ad_creative_attachment.recommender_settings.preferred_events[].event",
                      i.id,
                    );
                  }),
                ),
                product_sales_channel:
                  (la = bi.product_sales_channel) != null ? la : void 0,
              })
            : void 0,
          shop_spec: t.shop_spec
            ? {
                collection_id:
                  (sa =
                    (ua = t.shop_spec) == null ? void 0 : ua.collection_id) !=
                  null
                    ? sa
                    : void 0,
                landing_view:
                  (ca = r("getJSEnumSafe")(
                    r("AdsAPIAdCreativeShopSpecLandingViews"),
                    (da = t.shop_spec) == null ? void 0 : da.landing_view,
                  )) != null
                    ? ca
                    : void 0,
                shop_id:
                  (ma = (pa = t.shop_spec) == null ? void 0 : pa.shop_id) !=
                  null
                    ? ma
                    : void 0,
              }
            : void 0,
          source_facebook_post_id:
            (_a = t.source_facebook_post_id) != null ? _a : void 0,
          source_instagram_media_id:
            (fa = t.source_instagram_media_id) != null ? fa : void 0,
          template_url:
            (ga =
              (ha = t.dynamic_ad_creative_attachment) == null
                ? void 0
                : ha.template_url) != null
              ? ga
              : void 0,
          template_url_spec: vi
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                android: o("TypeCoercionUtils").coerceObjectToUndefined({
                  app_name:
                    (ya = (Ca = vi.android) == null ? void 0 : Ca.app_name) !=
                    null
                      ? ya
                      : void 0,
                  package:
                    (ba = (va = vi.android) == null ? void 0 : va.package) !=
                    null
                      ? ba
                      : void 0,
                  url:
                    (Sa = (Ra = vi.android) == null ? void 0 : Ra.url) != null
                      ? Sa
                      : void 0,
                }),
                config: o("TypeCoercionUtils").coerceObjectToUndefined({
                  app_id:
                    (La = (Ea = vi.config) == null ? void 0 : Ea.app_id) != null
                      ? La
                      : void 0,
                  enable_third_party_deeplink:
                    (ka =
                      (Ia = vi.config) == null
                        ? void 0
                        : Ia.enable_third_party_deeplink) != null
                      ? ka
                      : void 0,
                }),
                ios: o("TypeCoercionUtils").coerceObjectToUndefined({
                  app_name:
                    (Ta = (Da = vi.ios) == null ? void 0 : Da.app_name) != null
                      ? Ta
                      : void 0,
                  app_store_id:
                    (xa = ($a = vi.ios) == null ? void 0 : $a.app_store_id) !=
                    null
                      ? xa
                      : void 0,
                  url:
                    (Pa = (Na = vi.ios) == null ? void 0 : Na.url) != null
                      ? Pa
                      : void 0,
                }),
                ipad: o("TypeCoercionUtils").coerceObjectToUndefined({
                  app_name:
                    (Ma = (wa = vi.ipad) == null ? void 0 : wa.app_name) != null
                      ? Ma
                      : void 0,
                  app_store_id:
                    (Aa = (Fa = vi.ipad) == null ? void 0 : Fa.app_store_id) !=
                    null
                      ? Aa
                      : void 0,
                  url:
                    (Oa = (Ba = vi.ipad) == null ? void 0 : Ba.url) != null
                      ? Oa
                      : void 0,
                }),
                iphone: o("TypeCoercionUtils").coerceObjectToUndefined({
                  app_name:
                    (Wa = (qa = vi.iphone) == null ? void 0 : qa.app_name) !=
                    null
                      ? Wa
                      : void 0,
                  app_store_id:
                    (Ua =
                      (Va = vi.iphone) == null ? void 0 : Va.app_store_id) !=
                    null
                      ? Ua
                      : void 0,
                  url:
                    (Ha = (Ga = vi.iphone) == null ? void 0 : Ga.url) != null
                      ? Ha
                      : void 0,
                }),
                web: o("TypeCoercionUtils").coerceObjectToUndefined({
                  should_fallback:
                    (za =
                      (ja = vi.web) == null ? void 0 : ja.should_fallback) !=
                    null
                      ? za
                      : void 0,
                  url:
                    (Ka = (Qa = vi.web) == null ? void 0 : Qa.url) != null
                      ? Ka
                      : void 0,
                }),
                windows_phone: o("TypeCoercionUtils").coerceObjectToUndefined({
                  app_id:
                    (Xa =
                      (Ya = vi.windows_phone) == null ? void 0 : Ya.app_id) !=
                    null
                      ? Xa
                      : void 0,
                  app_name:
                    (Ja =
                      (Za = vi.windows_phone) == null ? void 0 : Za.app_name) !=
                    null
                      ? Ja
                      : void 0,
                  url:
                    (ei = (ti = vi.windows_phone) == null ? void 0 : ti.url) !=
                    null
                      ? ei
                      : void 0,
                }),
              })
            : void 0,
          text_type: void 0,
          threads_user_id: (ni = t.threads_user_id) != null ? ni : void 0,
          thumbnail_height: void 0,
          thumbnail_url: (ri = t.thumbnail_url) != null ? ri : void 0,
          thumbnail_width: void 0,
          title: (oi = t.title_content) != null ? oi : void 0,
          uca_draft_version: (ai = t.uca_draft_version) != null ? ai : void 0,
          url_tags: (ii = t.url_tags) != null ? ii : void 0,
          use_page_actor_override:
            (li =
              (si = t.mobile_app_install_attachment) == null
                ? void 0
                : si.use_page_actor_override) != null
              ? li
              : !1,
          video_id: (ui = t.video_id) != null ? ui : void 0,
          wamo_whatsapp_identity_spec: t.wamo_whatsapp_identity_attachment
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                wamo_whatsapp_identity_id:
                  (ci =
                    (di = t.wamo_whatsapp_identity_attachment) == null
                      ? void 0
                      : di.wamo_whatsapp_identity_id) != null
                    ? ci
                    : void 0,
              })
            : void 0,
          whats_app_business_asset_id:
            (mi = t.whats_app_business_asset_id) != null ? mi : void 0,
          whatsapp_business_phone_number_id:
            (pi = t.whatsapp_business_phone_number_id) != null ? pi : void 0,
          whatsapp_business_profile_id:
            (_i = t.whatsapp_business_profile_id) != null ? _i : void 0,
          whatsapp_channel_spec: t.whatsapp_channel_attachment
            ? o("TypeCoercionUtils").coerceObjectToUndefined({
                channel_id:
                  (fi =
                    (gi = t.whatsapp_channel_attachment) == null
                      ? void 0
                      : gi.channel_id) != null
                    ? fi
                    : void 0,
                channel_url:
                  (hi =
                    (yi = t.whatsapp_channel_attachment) == null
                      ? void 0
                      : yi.channel_url) != null
                    ? hi
                    : void 0,
              })
            : void 0,
          whatsapp_mm_business_phone_number_id:
            (Ci = t.whatsapp_mm_business_phone_number_id) != null ? Ci : void 0,
        }
      );
    }
    l.coerceGraphQLSpecToGraphAPI = p;
  },
  98,
);
