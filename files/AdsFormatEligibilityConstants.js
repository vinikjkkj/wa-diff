__d(
  "AdsFormatEligibilityConstants",
  ["AdsAPIObjectives", "AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [
        (e = r("AdsAPIObjectives")).LINK_CLICKS,
        e.CONVERSIONS,
        e.PRODUCT_CATALOG_SALES,
      ],
      c = [e.VIDEO_VIEWS, e.LEAD_GENERATION],
      d = [e.VIDEO_VIEWS, e.PAGE_LIKES, e.POST_ENGAGEMENT, e.EVENT_RESPONSES],
      m = [
        (s = r("AdsPromotedObjectTypes")).PIXEL,
        s.MESSENGER,
        s.INSTAGRAM,
        s.WHATSAPP,
        s.PHONE_CALL,
      ],
      p = [s.MESSENGER, s.INSTAGRAM, s.WHATSAPP, s.PHONE_CALL];
    ((l.OBJECTIVES_WITH_PRODUCT_CATALOG_SUPPORT = u),
      (l.OBJECTIVES_INCOMPATIBLE_WITH_DC_CAROUSEL = c),
      (l.OBJECTIVES_INCOMPATIBLE_WITH_CAROUSEL = d),
      (l.CONVERSION_LOCATIONS_WITH_FLEXIBLE_FORMAT_IN_ENGAGEMENT = m),
      (l.CONVERSION_LOCATIONS_WITH_FLEXIBLE_FORMAT_IN_TRAFFIC = p));
  },
  98,
);
