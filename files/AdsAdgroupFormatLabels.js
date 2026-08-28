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
        (e[(u = r("AdsUIMediaFormat")).ACO] = s._(/*BTDS*/ "Dynamic")),
        (e[u.CAROUSEL] = s._(/*BTDS*/ "Carousel")),
        (e[u.COLLECTIONS] = s._(/*BTDS*/ "Collection")),
        (e[u.DCO_IMAGE] = s._(/*BTDS*/ "Image")),
        (e[u.DCO_AUTOMATIC] = s._(/*BTDS*/ "Image and Video")),
        (e[u.SINGLE_IMAGE] = s._(/*BTDS*/ "Single image")),
        (e[u.SINGLE_VIDEO] = s._(/*BTDS*/ "Single video")),
        (e[u.SLIDESHOW] = s._(/*BTDS*/ "Slideshow")),
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
            : s._(/*BTDS*/ "2 or more scrollable images or videos");
        case r("AdsUIMediaFormat").COLLECTIONS:
          return o(
            "AdsCreativeContentSimplificationUtils",
          ).passL1ContentSimplificationExperiment()
            ? ""
            : s._(
                /*BTDS*/ "Group of products that opens into a fullscreen mobile experience",
              );
        case r("AdsUIMediaFormat").SINGLE_IMAGE:
          return s._(/*BTDS*/ "One image");
        case r("AdsUIMediaFormat").SINGLE_VIDEO:
          return s._(/*BTDS*/ "One video or a slideshow with multiple images");
        case r("AdsUIMediaFormat").FLEXIBLE:
          return o(
            "AdsCreativeContentSimplificationUtils",
          ).passL1ContentSimplificationExperiment()
            ? ""
            : t === !0 && r("gkx")("13496")
              ? s._(
                  /*BTDS*/ "We'll show your ad or message in the format we predict may perform best",
                )
              : s._(
                  /*BTDS*/ "We'll show your ad in the format we predict may perform best",
                );
        default:
          return "";
      }
    }
    var m = s._(/*BTDS*/ "Format"),
      p = s._(/*BTDS*/ "Choose how you'd like to structure your ad."),
      _ = s._(/*BTDS*/ "Choose an ad creative layout."),
      f = s._(
        /*BTDS*/ "Dynamic creative is enabled. Multiple ads will be automatically generated using your individual creative assets.",
      ),
      g = s._(
        /*BTDS*/ "Choose how you'd like to structure your ad and marketing message.",
      ),
      h = s._(
        /*BTDS*/ "Choose how you'd like to structure your marketing message.",
      ),
      y = s._(/*BTDS*/ "2 or more scrollable images");
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
