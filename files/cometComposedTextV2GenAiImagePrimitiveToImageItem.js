__d(
  "cometComposedTextV2GenAiImagePrimitiveToImageItem",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e != null && e !== "" ? e : null;
    }
    function l(t) {
      var n,
        r,
        o,
        a =
          (n =
            (r =
              (o = e(t.full_image.url)) != null
                ? o
                : e(t.full_image.url_fallback)) != null
              ? r
              : e(t.preview_image.url)) != null
            ? n
            : e(t.preview_image.url_fallback);
      return a == null ? null : { url: a };
    }
    i.default = l;
  },
  66,
);
