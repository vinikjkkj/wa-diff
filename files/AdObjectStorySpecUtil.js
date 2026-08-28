__d(
  "AdObjectStorySpecUtil",
  [
    "AdsImageOverlayCustomTextTypes",
    "ApiObjectStorySpecFormatOption",
    "BrandedContentSharedToSponsorStatus",
    "BrandedContentSponsorRelationship",
    "CustomOverlayBackgroundOpacity",
    "CustomOverlayOptions",
    "CustomOverlayVideoPositions",
    "CustomOverlayVideoTemplates",
    "DynamicAdsImageOverlayPositions",
    "DynamicAdsImageOverlayTemplates",
    "DynamicAdsImageOverlayTextFonts",
    "DynamicAdsImageOverlayTextTypes",
    "DynamicAdsImageOverlayThemeColors",
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
    "ShareAttachmentStyles",
    "TypeCoercionUtils",
    "VideoThumbnailSource",
    "XFBCTMSMCProductDataSourceUtils.facebook",
    "enumUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e != null)
        return o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
          e.map(function (e) {
            var n, r;
            return {
              element_child_index: o("TypeCoercionUtils").coerceNonMaybeValue(
                e.element_child_index,
                t + ".element_child_index",
                i.id,
              ),
              element_crops:
                (n = e.element_crops) != null &&
                n.ad_image_crops_per_dimension_spec
                  ? o("TypeCoercionUtils").coerceObjectToUndefined(
                      (r = e.element_crops) == null
                        ? void 0
                        : r.ad_image_crops_per_dimension_spec,
                    )
                  : void 0,
              element_id: o("TypeCoercionUtils").coerceNonMaybeValue(
                e.element_id,
                t + ".element_id",
                i.id,
              ),
            };
          }),
        );
    }
    function s(t) {
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
        x;
      if (t != null)
        return o("TypeCoercionUtils").coerceObjectToUndefined({
          additional_image_index:
            (n = t == null ? void 0 : t.additional_image_index) != null
              ? n
              : void 0,
          attachment_style:
            (a = r("getJSEnumSafe")(
              r("ShareAttachmentStyles"),
              t == null ? void 0 : t.attachment_style,
            )) != null
              ? a
              : void 0,
          branded_content_shared_to_sponsor_status: void 0,
          branded_content_sponsor_page_id:
            (l = t == null ? void 0 : t.branded_content_sponsor_page_id) != null
              ? l
              : void 0,
          branded_content_sponsor_relationship:
            (s = t == null ? void 0 : t.branded_content_sponsor_relationship) !=
            null
              ? s
              : void 0,
          call_to_action:
            (u =
              t == null || (c = t.call_to_action) == null
                ? void 0
                : c.call_to_action_spec) != null
              ? u
              : void 0,
          caption: (d = t == null ? void 0 : t.caption) != null ? d : void 0,
          child_attachments:
            t != null && t.child_attachments
              ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  t == null || (m = t.child_attachments) == null
                    ? void 0
                    : m.map(function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          e.child_attachment_spec,
                          "object_story_spec.link_data.child_attachments[].child_attachment_spec",
                          i.id,
                        );
                      }),
                )
              : void 0,
          collection_thumbnails: e(
            t == null ? void 0 : t.collection_thumbnails,
            "object_story_spec.link_data.collection_thumbnails[]",
          ),
          custom_overlay_spec:
            (t == null || (p = t.custom_overlay_spec) == null
              ? void 0
              : p.custom_overlay_specification) != null
              ? o("TypeCoercionUtils").coerceObjectToUndefined(
                  t == null || (_ = t.custom_overlay_spec) == null
                    ? void 0
                    : _.custom_overlay_specification,
                )
              : void 0,
          customization_rules_spec:
            t != null && t.customization_rules_spec
              ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                  t == null || (f = t.customization_rules_spec) == null
                    ? void 0
                    : f.map(function (e) {
                        return o("TypeCoercionUtils").coerceNonMaybeValue(
                          e == null
                            ? void 0
                            : e.customization_rules_specification,
                          "object_story_spec.link_data.customization_rules_spec[].customization_rules_specification",
                          i.id,
                        );
                      }),
                )
              : void 0,
          description:
            (g = t == null ? void 0 : t.description) != null ? g : void 0,
          event_id: (h = t == null ? void 0 : t.event_id) != null ? h : void 0,
          image_crops:
            (t == null || (y = t.image_crops_per_dimension) == null
              ? void 0
              : y.ad_image_crops_per_dimension_spec) != null
              ? o("TypeCoercionUtils").coerceObjectToUndefined(
                  t == null || (C = t.image_crops_per_dimension) == null
                    ? void 0
                    : C.ad_image_crops_per_dimension_spec,
                )
              : void 0,
          image_hash:
            (b = t == null ? void 0 : t.image_hash) != null ? b : void 0,
          link: (v = t == null ? void 0 : t.link) != null ? v : void 0,
          message: (S = t == null ? void 0 : t.message) != null ? S : void 0,
          multi_share_end_card:
            (R = t == null ? void 0 : t.multi_share_end_card) != null
              ? R
              : void 0,
          multi_share_optimized:
            (L = t == null ? void 0 : t.multi_share_optimized) != null
              ? L
              : void 0,
          name: (E = t == null ? void 0 : t.name) != null ? E : void 0,
          offer_id: (k = t == null ? void 0 : t.offer_id) != null ? k : void 0,
          page_welcome_message: t == null ? void 0 : t.page_welcome_message,
          phone_data_id:
            (I = t == null ? void 0 : t.phone_data_id) != null ? I : void 0,
          picture: (T = t == null ? void 0 : t.picture) != null ? T : void 0,
          post_click_configuration:
            t != null &&
            (D = t.post_click_configuration) != null &&
            D.post_click_configuration_specification
              ? o("TypeCoercionUtils").coerceObjectToUndefined(
                  t.post_click_configuration
                    .post_click_configuration_specification,
                )
              : void 0,
          product_discount_id:
            (x = t == null ? void 0 : t.product_discount_id) != null
              ? x
              : void 0,
          retailer_item_ids: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            t == null ? void 0 : t.retailer_item_ids,
          ),
        });
    }
    function u(t) {
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
        pn = t.object_story_spec;
      return pn != null
        ? o("TypeCoercionUtils").coerceObjectToUndefined({
            instagram_actor_id:
              (n = pn == null ? void 0 : pn.instagram_actor_id) != null
                ? n
                : void 0,
            link_data: s(pn == null ? void 0 : pn.link_data),
            page_id:
              (a = pn == null || (l = pn.page) == null ? void 0 : l.node_id) !=
              null
                ? a
                : void 0,
            photo_data:
              (pn == null ? void 0 : pn.photo_data) != null
                ? {
                    branded_content_shared_to_sponsor_status:
                      (u = r("getJSEnumSafe")(
                        r("BrandedContentSharedToSponsorStatus"),
                        pn == null || (c = pn.photo_data) == null
                          ? void 0
                          : c.branded_content_shared_to_sponsor_status,
                      )) != null
                        ? u
                        : void 0,
                    branded_content_sponsor_page_id:
                      (d =
                        pn == null || (m = pn.photo_data) == null
                          ? void 0
                          : m.branded_content_sponsor_page_id) != null
                        ? d
                        : void 0,
                    branded_content_sponsor_relationship:
                      (p = r("getJSEnumSafe")(
                        r("BrandedContentSponsorRelationship"),
                        pn == null || (_ = pn.photo_data) == null
                          ? void 0
                          : _.branded_content_sponsor_relationship,
                      )) != null
                        ? p
                        : void 0,
                    call_to_action:
                      (f =
                        pn == null ||
                        (g = pn.photo_data) == null ||
                        (g = g.call_to_action) == null
                          ? void 0
                          : g.call_to_action_spec) != null
                        ? f
                        : void 0,
                    caption:
                      (h =
                        pn == null || (y = pn.photo_data) == null
                          ? void 0
                          : y.caption) != null
                        ? h
                        : void 0,
                    image_hash:
                      (C =
                        pn == null || (b = pn.photo_data) == null
                          ? void 0
                          : b.image_hash) != null
                        ? C
                        : void 0,
                    page_welcome_message:
                      (v =
                        pn == null || (S = pn.photo_data) == null
                          ? void 0
                          : S.page_welcome_message) != null
                        ? v
                        : void 0,
                    url:
                      (R =
                        pn == null || (L = pn.photo_data) == null
                          ? void 0
                          : L.url) != null
                        ? R
                        : void 0,
                  }
                : void 0,
            product_data: o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
              pn != null && pn.product_data
                ? pn.product_data.map(function (e) {
                    var t;
                    return {
                      product_id: (t = e.product_id) != null ? t : "0",
                      product_source: o(
                        "XFBCTMSMCProductDataSourceUtils.facebook",
                      ).toJSEnum(e.product_source),
                    };
                  })
                : [],
            ),
            template_data:
              (pn == null ? void 0 : pn.template_data) != null
                ? o("TypeCoercionUtils").coerceObjectToUndefined({
                    ad_context:
                      (E =
                        pn == null || (k = pn.template_data) == null
                          ? void 0
                          : k.ad_context) != null
                        ? E
                        : void 0,
                    additional_image_index:
                      (I =
                        pn == null || (T = pn.template_data) == null
                          ? void 0
                          : T.additional_image_index) != null
                        ? I
                        : void 0,
                    attachment_style:
                      (D = r("getJSEnumSafe")(
                        r("ShareAttachmentStyles"),
                        pn == null || (x = pn.template_data) == null
                          ? void 0
                          : x.attachment_style,
                      )) != null
                        ? D
                        : void 0,
                    automated_product_tags:
                      ($ =
                        pn == null || (P = pn.template_data) == null
                          ? void 0
                          : P.automated_product_tags) != null
                        ? $
                        : void 0,
                    boosted_product_set_id:
                      (N =
                        pn == null || (M = pn.template_data) == null
                          ? void 0
                          : M.boosted_product_set_id) != null
                        ? N
                        : void 0,
                    branded_content_shared_to_sponsor_status:
                      (pn == null || (w = pn.template_data) == null
                        ? void 0
                        : w.branded_content_shared_to_sponsor_status) != null
                        ? o("enumUtils").coerceFromKey(
                            pn == null || (A = pn.template_data) == null
                              ? void 0
                              : A.branded_content_shared_to_sponsor_status,
                            r("BrandedContentSharedToSponsorStatus"),
                          )
                        : void 0,
                    branded_content_sponsor_page_id:
                      (F =
                        pn == null || (O = pn.link_data) == null
                          ? void 0
                          : O.branded_content_sponsor_page_id) != null
                        ? F
                        : void 0,
                    branded_content_sponsor_relationship:
                      (pn == null || (B = pn.template_data) == null
                        ? void 0
                        : B.branded_content_sponsor_relationship) != null
                        ? o("enumUtils").coerceFromKey(
                            pn == null || (W = pn.template_data) == null
                              ? void 0
                              : W.branded_content_sponsor_relationship,
                            r("BrandedContentSponsorRelationship"),
                          )
                        : void 0,
                    call_to_action:
                      (q =
                        pn == null ||
                        (U = pn.template_data) == null ||
                        (U = U.call_to_action) == null
                          ? void 0
                          : U.call_to_action_spec) != null
                        ? q
                        : void 0,
                    caption:
                      (V =
                        pn == null || (H = pn.template_data) == null
                          ? void 0
                          : H.caption) != null
                        ? V
                        : void 0,
                    child_attachments:
                      pn != null &&
                      (G = pn.template_data) != null &&
                      G.child_attachments
                        ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                            pn == null ||
                              (z = pn.template_data) == null ||
                              (z = z.child_attachments) == null
                              ? void 0
                              : z.map(function (e) {
                                  return o(
                                    "TypeCoercionUtils",
                                  ).coerceNonMaybeValue(
                                    e.child_attachment_spec,
                                    "object_story_spec.template_data.child_attachments[].child_attachment_spec",
                                    i.id,
                                  );
                                }),
                          )
                        : void 0,
                    collection_thumbnails: e(
                      pn == null || (j = pn.template_data) == null
                        ? void 0
                        : j.collection_thumbnails,
                      "object_story_spec.template_data.collection_thumbnails[]",
                    ),
                    custom_overlay_spec:
                      (pn == null ||
                      (K = pn.template_data) == null ||
                      (K = K.custom_overlay_spec) == null
                        ? void 0
                        : K.custom_overlay_specification) != null
                        ? o("TypeCoercionUtils").coerceObjectToUndefined(
                            pn == null ||
                              (Q = pn.template_data) == null ||
                              (Q = Q.custom_overlay_spec) == null
                              ? void 0
                              : Q.custom_overlay_specification,
                          )
                        : void 0,
                    customization_rules_spec:
                      pn != null &&
                      (X = pn.template_data) != null &&
                      X.customization_rules_spec
                        ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                            pn == null ||
                              (Y = pn.template_data) == null ||
                              (Y = Y.customization_rules_spec) == null
                              ? void 0
                              : Y.map(function (e) {
                                  return o(
                                    "TypeCoercionUtils",
                                  ).coerceNonMaybeValue(
                                    e == null
                                      ? void 0
                                      : e.customization_rules_specification,
                                    "object_story_spec.template_data.customization_rules_spec[].customization_rules_specification",
                                    i.id,
                                  );
                                }),
                          )
                        : void 0,
                    description:
                      (J =
                        pn == null || (Z = pn.template_data) == null
                          ? void 0
                          : Z.description) != null
                        ? J
                        : void 0,
                    disclaimer_text:
                      (ee =
                        pn == null || (te = pn.template_data) == null
                          ? void 0
                          : te.disclaimer_text) != null
                        ? ee
                        : void 0,
                    event_id:
                      (ne =
                        pn == null || (re = pn.template_data) == null
                          ? void 0
                          : re.event_id) != null
                        ? ne
                        : void 0,
                    force_single_link:
                      (oe =
                        pn == null || (ae = pn.template_data) == null
                          ? void 0
                          : ae.force_single_link) != null
                        ? oe
                        : void 0,
                    format_option:
                      (pn == null || (ie = pn.template_data) == null
                        ? void 0
                        : ie.format_option) != null
                        ? o("enumUtils").coerce(
                            pn == null || (le = pn.template_data) == null
                              ? void 0
                              : le.format_option,
                            r("ApiObjectStorySpecFormatOption"),
                          )
                        : void 0,
                    image_crops:
                      (pn == null ||
                      (se = pn.template_data) == null ||
                      (se = se.image_crops_per_dimension) == null
                        ? void 0
                        : se.ad_image_crops_per_dimension_spec) != null
                        ? o("TypeCoercionUtils").coerceObjectToUndefined(
                            pn == null ||
                              (ue = pn.template_data) == null ||
                              (ue = ue.image_crops_per_dimension) == null
                              ? void 0
                              : ue.ad_image_crops_per_dimension_spec,
                          )
                        : void 0,
                    image_hash:
                      (ce =
                        pn == null || (de = pn.template_data) == null
                          ? void 0
                          : de.image_hash) != null
                        ? ce
                        : void 0,
                    image_layer_specs:
                      (pn == null || (me = pn.template_data) == null
                        ? void 0
                        : me.image_layer_specs) != null
                        ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                            pn == null ||
                              (pe = pn.template_data) == null ||
                              (pe = pe.image_layer_specs) == null
                              ? void 0
                              : pe.map(function (e) {
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
                                    I,
                                    T;
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
                                            types: o(
                                              "TypeCoercionUtils",
                                            ).coerceEmptyArrayToUndefined(
                                              e == null ||
                                                (_ = e.content) == null ||
                                                (_ = _.types) == null
                                                ? void 0
                                                : _.map(function (e) {
                                                    var t;
                                                    return (t = r(
                                                      "getJSEnumSafe",
                                                    )(
                                                      r(
                                                        "DynamicImageLayerTextOverlayContentTypes",
                                                      ),
                                                      e,
                                                    )) != null
                                                      ? t
                                                      : void 0;
                                                  }),
                                            ),
                                          }
                                        : void 0,
                                    crop_image:
                                      (f = o("enumUtils").coerceFromKey(
                                        e == null ? void 0 : e.crop_image,
                                        r("DynamicImageLayerCroppingOptions"),
                                      )) != null
                                        ? f
                                        : void 0,
                                    frame_auto_show_enroll_status:
                                      (g =
                                        e == null
                                          ? void 0
                                          : e.frame_auto_show_enroll_status) !=
                                      null
                                        ? g
                                        : void 0,
                                    frame_image_hash:
                                      (h =
                                        e == null
                                          ? void 0
                                          : e.frame_image_hash) != null
                                        ? h
                                        : void 0,
                                    frame_source:
                                      (y = o("enumUtils").coerceFromKey(
                                        e == null ? void 0 : e.frame_source,
                                        r("DynamicImageLayerFrameSources"),
                                      )) != null
                                        ? y
                                        : void 0,
                                    image_source:
                                      (C = o("enumUtils").coerceFromKey(
                                        e == null ? void 0 : e.image_source,
                                        r("DynamicImageLayerImageSources"),
                                      )) != null
                                        ? C
                                        : void 0,
                                    layer_type:
                                      (b = o("enumUtils").coerceFromKey(
                                        e == null ? void 0 : e.layer_type,
                                        r("DynamicImageLayerTypes"),
                                      )) != null
                                        ? b
                                        : void 0,
                                    opacity:
                                      (v = e == null ? void 0 : e.opacity) !=
                                      null
                                        ? v
                                        : void 0,
                                    overlay_position:
                                      (S = o("enumUtils").coerceFromKey(
                                        e == null ? void 0 : e.overlay_position,
                                        r("DynamicImageLayerOverlayPositions"),
                                      )) != null
                                        ? S
                                        : void 0,
                                    overlay_shape:
                                      (R = o("enumUtils").coerceFromKey(
                                        e == null ? void 0 : e.overlay_shape,
                                        r("DynamicImageLayerTextOverlayShapes"),
                                      )) != null
                                        ? R
                                        : void 0,
                                    pad_image:
                                      (L = o("enumUtils").coerceFromKey(
                                        e == null ? void 0 : e.pad_image,
                                        r("DynamicImageLayerPaddingOptions"),
                                      )) != null
                                        ? L
                                        : void 0,
                                    scale:
                                      (E = e == null ? void 0 : e.scale) != null
                                        ? E
                                        : void 0,
                                    shape_color:
                                      (k =
                                        e == null ? void 0 : e.shape_color) !=
                                      null
                                        ? k
                                        : void 0,
                                    text_color:
                                      (I = e == null ? void 0 : e.text_color) !=
                                      null
                                        ? I
                                        : void 0,
                                    text_font:
                                      (T = o("enumUtils").coerceFromKey(
                                        e == null ? void 0 : e.text_font,
                                        r("DynamicImageLayerTextFonts"),
                                      )) != null
                                        ? T
                                        : void 0,
                                  };
                                }),
                          )
                        : void 0,
                    image_overlay_spec:
                      (pn == null || (_e = pn.template_data) == null
                        ? void 0
                        : _e.image_overlay_spec) != null
                        ? {
                            custom_text_type:
                              (fe = r("getJSEnumSafe")(
                                r("AdsImageOverlayCustomTextTypes"),
                                pn == null ||
                                  (ge = pn.template_data) == null ||
                                  (ge = ge.image_overlay_spec) == null
                                  ? void 0
                                  : ge.custom_text_type,
                              )) != null
                                ? fe
                                : void 0,
                            float_with_margin:
                              (he =
                                pn == null ||
                                (ye = pn.template_data) == null ||
                                (ye = ye.image_overlay_spec) == null
                                  ? void 0
                                  : ye.float_with_margin) != null
                                ? he
                                : void 0,
                            overlay_template:
                              (Ce = r("getJSEnumSafe")(
                                r("DynamicAdsImageOverlayTemplates"),
                                pn == null ||
                                  (be = pn.template_data) == null ||
                                  (be = be.image_overlay_spec) == null
                                  ? void 0
                                  : be.overlay_template,
                              )) != null
                                ? Ce
                                : void 0,
                            position:
                              (ve = r("getJSEnumSafe")(
                                r("DynamicAdsImageOverlayPositions"),
                                pn == null ||
                                  (Se = pn.template_data) == null ||
                                  (Se = Se.image_overlay_spec) == null
                                  ? void 0
                                  : Se.position,
                              )) != null
                                ? ve
                                : void 0,
                            text_font:
                              (Re = r("getJSEnumSafe")(
                                r("DynamicAdsImageOverlayTextFonts"),
                                pn == null ||
                                  (Le = pn.template_data) == null ||
                                  (Le = Le.image_overlay_spec) == null
                                  ? void 0
                                  : Le.text_font,
                              )) != null
                                ? Re
                                : void 0,
                            text_template_tags: o(
                              "TypeCoercionUtils",
                            ).coerceEmptyArrayToUndefined(
                              pn == null ||
                                (Ee = pn.template_data) == null ||
                                (Ee = Ee.image_overlay_spec) == null
                                ? void 0
                                : Ee.text_template_tags,
                            ),
                            text_type:
                              (ke = r("getJSEnumSafe")(
                                r("DynamicAdsImageOverlayTextTypes"),
                                pn == null ||
                                  (Ie = pn.template_data) == null ||
                                  (Ie = Ie.image_overlay_spec) == null
                                  ? void 0
                                  : Ie.text_type,
                              )) != null
                                ? ke
                                : void 0,
                            theme_color:
                              (Te = r("getJSEnumSafe")(
                                r("DynamicAdsImageOverlayThemeColors"),
                                pn == null ||
                                  (De = pn.template_data) == null ||
                                  (De = De.image_overlay_spec) == null
                                  ? void 0
                                  : De.theme_color,
                              )) != null
                                ? Te
                                : void 0,
                          }
                        : void 0,
                    is_local_expansion:
                      (xe =
                        pn == null || ($e = pn.template_data) == null
                          ? void 0
                          : $e.is_local_expansion) != null
                        ? xe
                        : void 0,
                    link:
                      (Pe =
                        pn == null || (Ne = pn.template_data) == null
                          ? void 0
                          : Ne.link) != null
                        ? Pe
                        : void 0,
                    message:
                      (Me =
                        pn == null || (we = pn.template_data) == null
                          ? void 0
                          : we.message) != null
                        ? Me
                        : void 0,
                    multi_share_end_card:
                      (Ae =
                        pn == null || (Fe = pn.template_data) == null
                          ? void 0
                          : Fe.multi_share_end_card) != null
                        ? Ae
                        : void 0,
                    multi_share_optimized:
                      (Oe =
                        pn == null || (Be = pn.template_data) == null
                          ? void 0
                          : Be.multi_share_optimized) != null
                        ? Oe
                        : void 0,
                    name:
                      (We =
                        pn == null || (qe = pn.template_data) == null
                          ? void 0
                          : qe.name) != null
                        ? We
                        : void 0,
                    offer_id:
                      (Ue =
                        pn == null || (Ve = pn.template_data) == null
                          ? void 0
                          : Ve.offer_id) != null
                        ? Ue
                        : void 0,
                    page_welcome_message:
                      (He =
                        pn == null || (Ge = pn.template_data) == null
                          ? void 0
                          : Ge.page_welcome_message) != null
                        ? He
                        : void 0,
                    picture:
                      (ze =
                        pn == null || (je = pn.template_data) == null
                          ? void 0
                          : je.picture) != null
                        ? ze
                        : void 0,
                    post_click_configuration:
                      pn != null &&
                      (Ke = pn.template_data) != null &&
                      (Ke = Ke.post_click_configuration) != null &&
                      Ke.post_click_configuration_specification
                        ? o("TypeCoercionUtils").coerceObjectToUndefined(
                            pn.template_data.post_click_configuration
                              .post_click_configuration_specification,
                          )
                        : void 0,
                    preferred_image_tags: o(
                      "TypeCoercionUtils",
                    ).coerceEmptyArrayToUndefined(
                      pn == null || (Qe = pn.template_data) == null
                        ? void 0
                        : Qe.preferred_image_tags,
                    ),
                    preferred_video_tags: o(
                      "TypeCoercionUtils",
                    ).coerceEmptyArrayToUndefined(
                      pn == null || (Xe = pn.template_data) == null
                        ? void 0
                        : Xe.preferred_video_tags,
                    ),
                    product_discount_id:
                      (Ye =
                        pn == null || (Je = pn.template_data) == null
                          ? void 0
                          : Je.product_discount_id) != null
                        ? Ye
                        : void 0,
                    retailer_item_ids: o(
                      "TypeCoercionUtils",
                    ).coerceEmptyArrayToUndefined(
                      pn == null || (Ze = pn.template_data) == null
                        ? void 0
                        : Ze.retailer_item_ids,
                    ),
                    show_multiple_images:
                      (et =
                        pn == null || (tt = pn.template_data) == null
                          ? void 0
                          : tt.show_multiple_images) != null
                        ? et
                        : void 0,
                    smart_pse_enabled:
                      (nt =
                        pn == null || (rt = pn.template_data) == null
                          ? void 0
                          : rt.smart_pse_enabled) != null
                        ? nt
                        : void 0,
                    static_fallback_spec:
                      (pn == null || (ot = pn.template_data) == null
                        ? void 0
                        : ot.static_fallback_spec) != null
                        ? {
                            call_to_action:
                              (at =
                                pn == null ||
                                (it = pn.template_data) == null ||
                                (it = it.static_fallback_spec) == null ||
                                (it = it.call_to_action) == null
                                  ? void 0
                                  : it.call_to_action_spec) != null
                                ? at
                                : void 0,
                            description:
                              (lt =
                                pn == null || (st = pn.template_data) == null
                                  ? void 0
                                  : st.description) != null
                                ? lt
                                : void 0,
                            image_hash:
                              (ut =
                                pn == null || (ct = pn.template_data) == null
                                  ? void 0
                                  : ct.image_hash) != null
                                ? ut
                                : void 0,
                            link:
                              (dt =
                                pn == null || (mt = pn.template_data) == null
                                  ? void 0
                                  : mt.link) != null
                                ? dt
                                : void 0,
                            message:
                              (pt =
                                pn == null || (_t = pn.template_data) == null
                                  ? void 0
                                  : _t.message) != null
                                ? pt
                                : void 0,
                            name:
                              (ft =
                                pn == null || (gt = pn.template_data) == null
                                  ? void 0
                                  : gt.name) != null
                                ? ft
                                : void 0,
                          }
                        : void 0,
                    use_flexible_image_aspect_ratio:
                      (ht =
                        pn == null || (yt = pn.template_data) == null
                          ? void 0
                          : yt.use_flexible_image_aspect_ratio) != null
                        ? ht
                        : void 0,
                  })
                : void 0,
            text_data:
              (pn == null ? void 0 : pn.text_data) != null
                ? {
                    message:
                      (Ct =
                        pn == null || (bt = pn.text_data) == null
                          ? void 0
                          : bt.message) != null
                        ? Ct
                        : void 0,
                  }
                : void 0,
            threads_user_id:
              (vt = pn == null ? void 0 : pn.threads_user_id) != null
                ? vt
                : void 0,
            video_data:
              (pn == null ? void 0 : pn.video_data) != null
                ? o("TypeCoercionUtils").coerceObjectToUndefined({
                    additional_image_index:
                      (St =
                        pn == null || (Rt = pn.video_data) == null
                          ? void 0
                          : Rt.additional_image_index) != null
                        ? St
                        : void 0,
                    branded_content_shared_to_sponsor_status:
                      (Lt =
                        pn == null || (Et = pn.video_data) == null
                          ? void 0
                          : Et.branded_content_shared_to_sponsor_status) != null
                        ? Lt
                        : void 0,
                    branded_content_sponsor_page_id:
                      (kt =
                        pn == null || (It = pn.video_data) == null
                          ? void 0
                          : It.branded_content_sponsor_page_id) != null
                        ? kt
                        : void 0,
                    branded_content_sponsor_relationship:
                      (Tt = r("getJSEnumSafe")(
                        r("BrandedContentSponsorRelationship"),
                        pn == null || (Dt = pn.video_data) == null
                          ? void 0
                          : Dt.branded_content_sponsor_relationship,
                      )) != null
                        ? Tt
                        : void 0,
                    call_to_action:
                      (xt =
                        pn == null ||
                        ($t = pn.video_data) == null ||
                        ($t = $t.call_to_action) == null
                          ? void 0
                          : $t.call_to_action_spec) != null
                        ? xt
                        : void 0,
                    caption_ids:
                      (Pt = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                        pn == null || (Nt = pn.video_data) == null
                          ? void 0
                          : Nt.caption_ids,
                      )) != null
                        ? Pt
                        : void 0,
                    collection_thumbnails: e(
                      pn == null || (Mt = pn.video_data) == null
                        ? void 0
                        : Mt.collection_thumbnails,
                      "object_story_spec.video_data.collection_thumbnails[]",
                    ),
                    custom_overlay_spec:
                      pn != null &&
                      (wt = pn.video_data) != null &&
                      wt.custom_overlay_spec
                        ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                            pn == null || (At = pn.video_data) == null
                              ? void 0
                              : At.custom_overlay_spec.map(function (e) {
                                  var t, n, a, i, l, s, u, c, d, m;
                                  return o(
                                    "TypeCoercionUtils",
                                  ).coerceObjectToUndefined({
                                    background_color:
                                      (t = e.background_color) != null
                                        ? t
                                        : void 0,
                                    background_opacity:
                                      (n = r("getJSEnumSafe")(
                                        r("CustomOverlayBackgroundOpacity"),
                                        e.background_opacity,
                                      )) != null
                                        ? n
                                        : void 0,
                                    duration:
                                      (a = e.duration) != null ? a : void 0,
                                    float_with_margin:
                                      (i = e.float_with_margin) != null
                                        ? i
                                        : void 0,
                                    full_width:
                                      (l = e.full_width) != null ? l : void 0,
                                    option:
                                      (s = r("getJSEnumSafe")(
                                        r("CustomOverlayOptions"),
                                        e.option,
                                      )) != null
                                        ? s
                                        : void 0,
                                    position:
                                      (u = r("getJSEnumSafe")(
                                        r("CustomOverlayVideoPositions"),
                                        e.position,
                                      )) != null
                                        ? u
                                        : void 0,
                                    start: (c = e.start) != null ? c : void 0,
                                    template:
                                      (d = r("getJSEnumSafe")(
                                        r("CustomOverlayVideoTemplates"),
                                        e.template,
                                      )) != null
                                        ? d
                                        : void 0,
                                    text_color:
                                      (m = e.text_color) != null ? m : void 0,
                                  });
                                }),
                          )
                        : void 0,
                    customization_rules_spec:
                      pn != null &&
                      (Ft = pn.video_data) != null &&
                      Ft.customization_rules_spec
                        ? o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
                            pn == null ||
                              (Ot = pn.video_data) == null ||
                              (Ot = Ot.customization_rules_spec) == null
                              ? void 0
                              : Ot.map(function (e) {
                                  return o(
                                    "TypeCoercionUtils",
                                  ).coerceNonMaybeValue(
                                    e == null
                                      ? void 0
                                      : e.customization_rules_specification,
                                    "object_story_spec.video_data.customization_rules_spec[].customization_rules_specification",
                                    i.id,
                                  );
                                }),
                          )
                        : void 0,
                    event_id:
                      (Bt =
                        pn == null || (Wt = pn.link_data) == null
                          ? void 0
                          : Wt.event_id) != null
                        ? Bt
                        : void 0,
                    image_hash:
                      (qt =
                        pn == null || (Ut = pn.video_data) == null
                          ? void 0
                          : Ut.image_hash) != null
                        ? qt
                        : void 0,
                    image_url:
                      (Vt =
                        pn == null || (Ht = pn.video_data) == null
                          ? void 0
                          : Ht.image_url) != null
                        ? Vt
                        : void 0,
                    link_description:
                      (Gt =
                        pn == null || (zt = pn.video_data) == null
                          ? void 0
                          : zt.link_description) != null
                        ? Gt
                        : void 0,
                    message:
                      (jt =
                        pn == null || (Kt = pn.video_data) == null
                          ? void 0
                          : Kt.message) != null
                        ? jt
                        : void 0,
                    offer_id:
                      (Qt =
                        pn == null || (Xt = pn.video_data) == null
                          ? void 0
                          : Xt.offer_id) != null
                        ? Qt
                        : void 0,
                    page_welcome_message:
                      pn == null || (Yt = pn.video_data) == null
                        ? void 0
                        : Yt.page_welcome_message,
                    phone_data_id:
                      (Jt =
                        pn == null || (Zt = pn.video_data) == null
                          ? void 0
                          : Zt.phone_data_id) != null
                        ? Jt
                        : void 0,
                    post_click_configuration:
                      pn != null &&
                      (en = pn.video_data) != null &&
                      (en = en.post_click_configuration) != null &&
                      en.post_click_configuration_specification
                        ? o("TypeCoercionUtils").coerceObjectToUndefined(
                            pn.video_data.post_click_configuration
                              .post_click_configuration_specification,
                          )
                        : void 0,
                    product_discount_id:
                      (tn =
                        pn == null || (nn = pn.video_data) == null
                          ? void 0
                          : nn.product_discount_id) != null
                        ? tn
                        : void 0,
                    retailer_item_ids: o(
                      "TypeCoercionUtils",
                    ).coerceEmptyArrayToUndefined(
                      pn == null || (rn = pn.video_data) == null
                        ? void 0
                        : rn.retailer_item_ids,
                    ),
                    title:
                      (on =
                        pn == null || (an = pn.video_data) == null
                          ? void 0
                          : an.title) != null
                        ? on
                        : void 0,
                    video_id:
                      (ln =
                        pn == null || (sn = pn.video_data) == null
                          ? void 0
                          : sn.video_id) != null
                        ? ln
                        : void 0,
                    video_thumbnail_source:
                      (un = r("getJSEnumSafe")(
                        r("VideoThumbnailSource"),
                        pn == null || (cn = pn.video_data) == null
                          ? void 0
                          : cn.video_thumbnail_source,
                      )) != null
                        ? un
                        : void 0,
                  })
                : void 0,
            whats_app_business_asset_id:
              (dn = pn == null ? void 0 : pn.whats_app_business_asset_id) !=
              null
                ? dn
                : void 0,
            whats_app_business_phone_number_id:
              (mn =
                pn == null ? void 0 : pn.whats_app_business_phone_number_id) !=
              null
                ? mn
                : void 0,
          })
        : void 0;
    }
    l.coerceGraphQLSpecToGraphAPI = u;
  },
  98,
);
