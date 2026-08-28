__d(
  "AdsImageSelectorV2Types",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        ((e = {}),
        (e.name = null),
        (e.hash = null),
        (e.height = null),
        (e.width = null),
        (e.url = null),
        (e.url_128 = null),
        (e.url_256 = null),
        (e.url_256_height = null),
        (e.url_256_width = null),
        e),
      u = Object.freeze({
        ACCOUNT_IMAGE: "ACCOUNT_IMAGE",
        ALL_IMAGE: "ALL_IMAGE",
        DESIGN_APP_IMAGE: "DESIGN_APP_IMAGE",
        EXTERNAL_IMAGE: "EXTERNAL_IMAGE",
        GENAI_IMAGE: "GENAI_IMAGE",
        PAGE_IMAGE: "PAGE_IMAGE",
        UPLOAD_IMAGE: "UPLOAD_IMAGE",
        INSTAGRAM_IMAGE: "INSTAGRAM_IMAGE",
        BUSINESS_IMAGE: "BUSINESS_IMAGE",
        RECOMMENDED_IMAGE: "RECOMMENDED_IMAGE",
        SAVED_AI_IMAGE: "SAVED_AI_IMAGE",
      }),
      c = r("immutable").Record({
        minWarningWidth: 0,
        minWarningHeight: 0,
        minWarningAspectRatio: 0,
        maxWarningAspectRatio: 0,
        placement: "",
      }),
      d = r("immutable").OrderedSet(Object.keys(u)),
      m = r("immutable").OrderedSet([u.ACCOUNT_IMAGE, u.UPLOAD_IMAGE]);
    ((l.imageFields = s),
      (l.AdsImageSource = u),
      (l.ImageSourceImageSpec = c),
      (l.ALL_SOURCE_TYPE_LIST = d),
      (l.DEFAULT_SOURCE_TYPE_LIST = m));
  },
  98,
);
