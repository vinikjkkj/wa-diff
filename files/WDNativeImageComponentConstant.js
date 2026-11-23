__d(
  "WDNativeImageComponentConstant",
  ["WDSNativeNavigationListConstants", "WDSNativeSelectListOptionConstant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 400,
      c = 300,
      d = "contain",
      m = 100,
      p = "https://mmg.whatsapp.net",
      _ = ".cdn.whatsapp.net",
      f = Object.freeze({ REGULAR: "regular", LARGE: "large" }),
      g = Object.freeze(
        ((e = {}),
        (e[f.REGULAR] = o(
          "WDSNativeNavigationListConstants",
        ).NAVIGATION_LIST_OPTION_IMAGE_DEFAULT_SIZE),
        (e[f.LARGE] = o(
          "WDSNativeNavigationListConstants",
        ).NAVIGATION_LIST_OPTION_IMAGE_LARGE_SIZE),
        e),
      ),
      h = Object.freeze(
        ((s = {}),
        (s[f.REGULAR] = o(
          "WDSNativeSelectListOptionConstant",
        ).SELECT_LIST_OPTION_IMAGE_DEFAULT_SIZE),
        (s[f.LARGE] = o(
          "WDSNativeSelectListOptionConstant",
        ).SELECT_LIST_OPTION_LARGE_IMAGE_DEFAULT_SIZE),
        s),
      );
    ((l.IMAGE_DEFAULT_HEIGHT = u),
      (l.IMAGE_MAX_SIZE = c),
      (l.IMAGE_DEFAULT_SCALE_TYPE = d),
      (l.LIST_IMAGE_MAX_SIZE = m),
      (l.IMAGE_CDN_ORIGIN_META_CATALOG = p),
      (l.IMAGE_CDN_ORIGIN_WA_WEB = _),
      (l.WDSNativeImageMediaSizeType = f),
      (l.WDSNativeNavListMediaSizeToContainerSize = g),
      (l.WDSNativePickerMediaSizeToContainerSize = h));
  },
  98,
);
