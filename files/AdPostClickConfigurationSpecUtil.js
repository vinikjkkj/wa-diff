__d(
  "AdPostClickConfigurationSpecUtil",
  [
    "AdsImageOverlayCustomTextTypes",
    "DynamicAdsImageOverlayPositions",
    "DynamicAdsImageOverlayTemplates",
    "DynamicAdsImageOverlayTextFonts",
    "DynamicAdsImageOverlayTextTypes",
    "DynamicAdsImageOverlayThemeColors",
    "TypeCoercionUtils",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C;
      return {
        image_overlay_spec: e.image_overlay_spec
          ? o("TypeCoercionUtils").coerceObjectToUndefined({
              custom_text_type:
                (t = r("getJSEnumSafe")(
                  r("AdsImageOverlayCustomTextTypes"),
                  (n = e.image_overlay_spec) == null
                    ? void 0
                    : n.custom_text_type,
                )) != null
                  ? t
                  : void 0,
              float_with_margin:
                (a =
                  e == null || (i = e.image_overlay_spec) == null
                    ? void 0
                    : i.float_with_margin) != null
                  ? a
                  : void 0,
              overlay_template:
                (l = r("getJSEnumSafe")(
                  r("DynamicAdsImageOverlayTemplates"),
                  (s = e.image_overlay_spec) == null
                    ? void 0
                    : s.overlay_template,
                )) != null
                  ? l
                  : void 0,
              position:
                (u = r("getJSEnumSafe")(
                  r("DynamicAdsImageOverlayPositions"),
                  (c = e.image_overlay_spec) == null ? void 0 : c.position,
                )) != null
                  ? u
                  : void 0,
              text_font:
                (d = r("getJSEnumSafe")(
                  r("DynamicAdsImageOverlayTextFonts"),
                  (m = e.image_overlay_spec) == null ? void 0 : m.text_font,
                )) != null
                  ? d
                  : void 0,
              text_template_tags: o(
                "TypeCoercionUtils",
              ).coerceEmptyArrayToUndefined(
                e == null || (p = e.image_overlay_spec) == null
                  ? void 0
                  : p.text_template_tags,
              ),
              text_type:
                (_ = r("getJSEnumSafe")(
                  r("DynamicAdsImageOverlayTextTypes"),
                  (f = e.image_overlay_spec) == null ? void 0 : f.text_type,
                )) != null
                  ? _
                  : void 0,
              theme_color:
                (g = r("getJSEnumSafe")(
                  r("DynamicAdsImageOverlayThemeColors"),
                  (h = e.image_overlay_spec) == null ? void 0 : h.theme_color,
                )) != null
                  ? g
                  : void 0,
            })
          : void 0,
        post_click_item_description:
          (y = e.post_click_item_description) != null ? y : void 0,
        post_click_item_headline:
          (C = e.post_click_item_headline) != null ? C : void 0,
      };
    }
    l.coerceGraphQLSpecToGraphAPI = e;
  },
  98,
);
