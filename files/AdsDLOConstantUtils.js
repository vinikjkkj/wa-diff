__d(
  "AdsDLOConstantUtils",
  ["AdsAPIObjectives", "AdsUIMediaFormat"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdsAPIObjectives")).VIDEO_VIEWS,
        e.BRAND_AWARENESS,
        e.REACH,
        e.OUTCOME_AWARENESS,
        e.POST_ENGAGEMENT,
      ],
      u = [
        "DESKTOP_FEED_STANDARD",
        "FACEBOOK_STORY_MOBILE",
        "INSTAGRAM_STANDARD",
        "INSTAGRAM_STORY",
        "INSTREAM_VIDEO_MOBILE",
        "MOBILE_FEED_STANDARD",
        "MESSENGER_MOBILE_STORY_MEDIA",
      ];
    function c(e) {
      switch (e) {
        case r("AdsUIMediaFormat").SINGLE_IMAGE:
        case r("AdsUIMediaFormat").SINGLE_VIDEO:
        case r("AdsUIMediaFormat").SLIDESHOW:
          return !0;
        default:
          return !1;
      }
    }
    function d(e) {
      return e != null ? "ads_dlo_" + e : "ads_dlo";
    }
    function m(e) {
      return s.includes(e);
    }
    function p(e) {
      return u.includes(e);
    }
    function _(e) {
      return e + "TranslationConfidence";
    }
    ((l.isSupportedUIMediaFormat = c),
      (l.getSlideshowEntrypoint = d),
      (l.isSupportedOptionalLinksObjective = m),
      (l.isSupportedAutotranslatedPreviewFormat = p),
      (l.getTranslatedConfidenceFieldName = _));
  },
  98,
);
