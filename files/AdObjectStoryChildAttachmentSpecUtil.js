__d(
  "AdObjectStoryChildAttachmentSpecUtil",
  [
    "ApiPlaceDataTypes",
    "DynamicCategorizationCriteria",
    "TypeCoercionUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
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
        B;
      return {
        android_url: (t = e.android_url) != null ? t : void 0,
        call_to_action:
          (n =
            (a = e.call_to_action) == null ? void 0 : a.call_to_action_spec) !=
          null
            ? n
            : void 0,
        caption: (l = e.caption) != null ? l : void 0,
        caption_ids:
          (s = o("TypeCoercionUtils").coerceEmptyArrayToUndefined(
            e.caption_ids,
          )) != null
            ? s
            : void 0,
        description: (u = e.description) != null ? u : void 0,
        image_crops:
          ((c = e.image_crops) == null
            ? void 0
            : c.ad_image_crops_per_dimension_spec) != null
            ? o("TypeCoercionUtils").coerceObjectToUndefined(
                (d = e.image_crops) == null
                  ? void 0
                  : d.ad_image_crops_per_dimension_spec,
              )
            : void 0,
        image_hash: (m = e.image_hash) != null ? m : void 0,
        ios_url: (p = e.ios_url) != null ? p : void 0,
        link: (_ = e.link) != null ? _ : void 0,
        marketing_message_buttons: o(
          "TypeCoercionUtils",
        ).coerceEmptyArrayToUndefined(
          (f =
            (g = e.marketing_message_buttons) == null
              ? void 0
              : g.map(function (e) {
                  return new Map()
                    .set("type", e.type)
                    .set("text", e.text)
                    .set("url", e.url)
                    .set("phone_number", e.phone_number)
                    .set("coupon_code", e.coupon_code)
                    .set("preconfigured_response", e.preconfigured_response)
                    .set("quick_reply_payload", e.quick_reply_payload)
                    .set("ios_app_metadata", e.ios_app_metadata)
                    .set("android_app_metadata", e.android_app_metadata)
                    .set("app_id", e.app_id);
                })) != null
            ? f
            : [],
        ),
        marketing_message_spec:
          ((h = e.marketing_message_spec) == null ? void 0 : h.description) !==
          null
            ? {
                description:
                  (y =
                    (C = e.marketing_message_spec) == null
                      ? void 0
                      : C.description) != null
                    ? y
                    : "",
              }
            : void 0,
        name: (b = e.name) != null ? b : void 0,
        phone_data_id: (v = e.phone_data_id) != null ? v : void 0,
        picture: (S = e.picture) != null ? S : void 0,
        place_data:
          e.place_data != null
            ? {
                address_string:
                  (R =
                    (L = e.place_data) == null ? void 0 : L.address_string) !=
                  null
                    ? R
                    : void 0,
                label:
                  (E = (k = e.place_data) == null ? void 0 : k.label) != null
                    ? E
                    : void 0,
                latitude:
                  (I = (T = e.place_data) == null ? void 0 : T.latitude) != null
                    ? I
                    : void 0,
                location_source_id:
                  (D =
                    (x = e.place_data) == null
                      ? void 0
                      : x.location_source_id) != null
                    ? D
                    : void 0,
                longitude:
                  ($ = (P = e.place_data) == null ? void 0 : P.longitude) !=
                  null
                    ? $
                    : void 0,
                type:
                  (N = r("getJSEnumSafe")(
                    r("ApiPlaceDataTypes"),
                    (M = e.place_data) == null ? void 0 : M.type,
                  )) != null
                    ? N
                    : void 0,
              }
            : void 0,
        static_card: (w = e.static_card) != null ? w : void 0,
        template_video_spec:
          e.template_video_spec != null
            ? {
                categorization_criteria: o(
                  "TypeCoercionUtils",
                ).coerceNonMaybeValue(
                  r("getJSEnumSafe")(
                    r("DynamicCategorizationCriteria"),
                    (A = e.template_video_spec) == null
                      ? void 0
                      : A.categorization_criteria,
                  ),
                  "child_attachment.template_video_spec.categorization_criteria",
                  i.id,
                ),
                customization: o("TypeCoercionUtils")
                  .coerceNonMaybeValue(
                    (F = e.template_video_spec) == null
                      ? void 0
                      : F.customization,
                    "child_attachment.template_video_spec.customization",
                    i.id,
                  )
                  .map(function (e) {
                    return {
                      key: o("TypeCoercionUtils").coerceNonMaybeValue(
                        e.key,
                        "child_attachment.template_video_spec.customization[].key",
                        i.id,
                      ),
                      value: o("TypeCoercionUtils").coerceNonMaybeValue(
                        e.value,
                        "child_attachment.template_video_spec.customization[].value",
                        i.id,
                      ),
                    };
                  }),
                template_id: o("TypeCoercionUtils").coerceNonMaybeValue(
                  (O = e.template_video_spec) == null ? void 0 : O.template_id,
                  "child_attachment.template_video_spec.template_id",
                  i.id,
                ),
              }
            : void 0,
        video_id: (B = e.video_id) != null ? B : void 0,
      };
    }
    l.coerceGraphQLSpecToGraphAPI = e;
  },
  98,
);
