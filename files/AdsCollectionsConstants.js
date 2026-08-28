__d(
  "AdsCollectionsConstants",
  ["AdsTokensConstants", "CatalogVertical", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "ads_cf_collection_format_card",
      u = 12,
      c = 4,
      d = 50,
      m = r("immutable").List(["0", "0", "0", "0"]),
      p = 1.91,
      _ = [
        (e = r("CatalogVertical")).COMMERCE,
        e.FLIGHTS,
        e.HOTELS,
        e.VEHICLES,
        e.MEDIA_TITLES,
        e.DESTINATIONS,
        e.LOCAL_SERVICE_BUSINESSES,
      ],
      f = "{{field.hide}}",
      g = "{{product.name}}",
      h =
        "{{product.current_price " +
        o("AdsTokensConstants").NUMBER_OPTIONS.STRIP_ZEROS.PROPERTY +
        "}}",
      y = ["facebook/feed", "facebook/instant_article", "facebook/video_feeds"],
      C = [
        "facebook/right_column",
        "facebook/instant_article",
        "facebook/instream_video",
      ],
      b = ["instagram", "audience_network", "messenger"];
    ((l.ADS_CF_COLLECTION_FORMAT_CARD = s),
      (l.BENTO_MIN_PRODUCT_COUNT = u),
      (l.BENTO_CATEGORIES_MIN_COUNT = c),
      (l.COLLECTION_PRODUCT_MAX_COUNT = d),
      (l.EMPTY_COLLECTIONS_RETAIL_ID = m),
      (l.HERO_IMAGE_DIM_191_100 = p),
      (l.SUPPORTED_VERTICALS = _),
      (l.POST_CLICK_FIELD_HIDE = f),
      (l.POST_CLICK_ITEM_DEFAULT_HEADLINE_TEMPLATE = g),
      (l.POST_CLICK_ITEM_DEFAULT_DESCRIPTION_TEMPLATE = h),
      (l.SUPPORTED_PLACEMENT_GROUPS = y),
      (l.UNSUPPORTED_PLACEMENT_GROUPS = C),
      (l.UNSUPPORTED_PLACEMENT_PLATFORMS = b));
  },
  98,
);
