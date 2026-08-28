__d(
  "resolveMAIBAAdImageSrc",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "[image]";
    function l(t) {
      var n =
          t.ad_image_alt_text != null && t.ad_image_alt_text !== ""
            ? t.ad_image_alt_text
            : e,
        r = t.ad_image_url;
      return (
        r != null && !/^(https?|data):/.test(r) && (r = null),
        { alt: n, url: r }
      );
    }
    i.default = l;
  },
  66,
);
