__d(
  "AdsAdgroupFormatLabels",
  [
    "fbt",
    "AdsCreativeContentSimplificationUtils",
    "AdsFlexibleFormatStrings",
    "AdsUIMediaFormat",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c =
        ((e = {}),
        (e[(u = r("AdsUIMediaFormat")).ACO] = s._(/*BTDS*/ "")),
        (e[u.CAROUSEL] = s._(/*BTDS*/ "")),
        (e[u.COLLECTIONS] = s._(/*BTDS*/ "")),
        (e[u.DCO_IMAGE] = s._(/*BTDS*/ "")),
        (e[u.DCO_AUTOMATIC] = s._(/*BTDS*/ "")),
        (e[u.SINGLE_IMAGE] = s._(/*BTDS*/ "")),
        (e[u.SINGLE_VIDEO] = s._(/*BTDS*/ "")),
        (e[u.SLIDESHOW] = s._(/*BTDS*/ "")),
        (e[u.FLEXIBLE] = o(
          "AdsFlexibleFormatStrings",
        ).FLEXIBLE_FORMAT_PLUGIN_TITLE),
        e);
    function d(e, t) {
      switch (e) {
        case r("AdsUIMediaFormat").CAROUSEL:
          return o(
            "AdsCreativeContentSimplificationUtils",
          ).passL1ContentSimplificationExperiment()
            ? ""
            : s._(/*BTDS*/ "");
        case r("AdsUIMediaFormat").COLLECTIONS:
          return o(
            "AdsCreativeContentSimplificationUtils",
          ).passL1ContentSimplificationExperiment()
            ? ""
            : s._(/*BTDS*/ "");
        case r("AdsUIMediaFormat").SINGLE_IMAGE:
          return s._(/*BTDS*/ "");
        case r("AdsUIMediaFormat").SINGLE_VIDEO:
          return s._(/*BTDS*/ "");
        case r("AdsUIMediaFormat").FLEXIBLE:
          return o(
            "AdsCreativeContentSimplificationUtils",
          ).passL1ContentSimplificationExperiment()
            ? ""
            : t === !0 && r("gkx")("13496")
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "");
        default:
          return "";
      }
    }
    var m = s._(/*BTDS*/ ""),
      p = s._(/*BTDS*/ ""),
      _ = s._(/*BTDS*/ ""),
      f = s._(/*BTDS*/ ""),
      g = s._(/*BTDS*/ ""),
      h = s._(/*BTDS*/ ""),
      y = s._(/*BTDS*/ "");
    ((l.titleInCreationFlow = c),
      (l.getDescriptionForMediaFormat = d),
      (l.TITLE = m),
      (l.DESCRIPTION = p),
      (l.SIMPLIFIED_AD_SETUP_FORMAT_DESCRIPTION = _),
      (l.DC_DESCRIPTION = f),
      (l.COMMON_CAMPAIGN_DESCRIPTION = g),
      (l.MARKETING_MESSAGES_ONLY_CAMPAIGN_DESCRIPTION = h),
      (l.CAROUSEL_FORMAT_DCO_DESCRIPTION = y));
  },
  226,
);
