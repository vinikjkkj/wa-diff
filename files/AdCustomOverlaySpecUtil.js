__d(
  "AdCustomOverlaySpecUtil",
  [
    "CustomOverlayBackgroundColors",
    "CustomOverlayFonts",
    "CustomOverlayImagePositions",
    "CustomOverlayImageTemplates",
    "CustomOverlayOptions",
    "CustomOverlayTextColors",
    "getJSEnumSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n, o, a, i, l, s, u;
      return {
        background_color:
          (t = r("getJSEnumSafe")(
            r("CustomOverlayBackgroundColors"),
            e == null ? void 0 : e.background_color,
          )) != null
            ? t
            : void 0,
        float_with_margin:
          (n = e == null ? void 0 : e.float_with_margin) != null ? n : void 0,
        font:
          (o = r("getJSEnumSafe")(
            r("CustomOverlayFonts"),
            e == null ? void 0 : e.font,
          )) != null
            ? o
            : void 0,
        option:
          (a = r("getJSEnumSafe")(
            r("CustomOverlayOptions"),
            e == null ? void 0 : e.option,
          )) != null
            ? a
            : void 0,
        position:
          (i = r("getJSEnumSafe")(
            r("CustomOverlayImagePositions"),
            e == null ? void 0 : e.position,
          )) != null
            ? i
            : void 0,
        render_with_icon:
          (l = e == null ? void 0 : e.render_with_icon) != null ? l : void 0,
        template:
          (s = r("getJSEnumSafe")(
            r("CustomOverlayImageTemplates"),
            e == null ? void 0 : e.template,
          )) != null
            ? s
            : void 0,
        text_color:
          (u = r("getJSEnumSafe")(
            r("CustomOverlayTextColors"),
            e == null ? void 0 : e.text_color,
          )) != null
            ? u
            : void 0,
      };
    }
    l.coerceGraphQLSpecToGraphAPI = e;
  },
  98,
);
