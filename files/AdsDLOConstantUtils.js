__d(
  "AdsDLOConstantUtils",
  ["AdsAPIObjectives"],
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
      return e != null ? "ads_dlo_" + e : "ads_dlo";
    }
    function d(e) {
      return s.includes(e);
    }
    function m(e) {
      return u.includes(e);
    }
    function p(e) {
      return e + "TranslationConfidence";
    }
    ((l.getSlideshowEntrypoint = c),
      (l.isSupportedOptionalLinksObjective = d),
      (l.isSupportedAutotranslatedPreviewFormat = m),
      (l.getTranslatedConfidenceFieldName = p));
  },
  98,
);
