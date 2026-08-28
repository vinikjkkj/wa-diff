__d(
  "AdsUEditorWebsiteUtils",
  [
    "AdsAPIObjectives",
    "AdsObjectTypeUtils",
    "ApiAdObjectTypes",
    "gkx",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      if (
        (n === void 0 && (n = null),
        o === void 0 && (o = null),
        a === void 0 && (a = !1),
        !t)
      )
        return null;
      if (n != null)
        switch (n) {
          case "most_frequent":
            return r("isTruthy")(o) ? o : null;
          case "last_created":
            return r("isTruthy")(t.last_website_link)
              ? t.last_website_link
              : null;
          case "bio":
            return r("isTruthy")(t.link_in_bio) && r("gkx")("7283")
              ? t.link_in_bio
              : null;
          default:
            return null;
        }
      if (!r("gkx")("1870") && r("isTruthy")(t.last_website_link))
        return t.last_website_link;
      if (!r("isTruthy")(t.link_in_bio) || !r("gkx")("7283")) return null;
      switch (e) {
        case r("AdsAPIObjectives").LINK_CLICKS:
          return t.link_in_bio;
        case r("AdsAPIObjectives").OUTCOME_LEADS:
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
        case r("AdsAPIObjectives").BRAND_AWARENESS:
          return a ? t.link_in_bio : null;
        default:
          return null;
      }
    }
    function s(e, t) {
      var n,
        a = o("AdsObjectTypeUtils").getObjectTypeFromCreativeSpecType(e);
      if (a !== r("ApiAdObjectTypes").VIDEO) return null;
      var i =
        (n = e.creative) == null ||
        (n = n.object_story_spec) == null ||
        (n = n.video_data) == null ||
        (n = n.call_to_action) == null ||
        (n = n.value) == null
          ? void 0
          : n.link;
      if (i == null || i === "") return null;
      switch (t) {
        case r("AdsAPIObjectives").LINK_CLICKS:
        case r("AdsAPIObjectives").WEBSITE_CONVERSIONS:
        case r("AdsAPIObjectives").VIDEO_VIEWS:
        case r("AdsAPIObjectives").BRAND_AWARENESS:
        case r("AdsAPIObjectives").POST_ENGAGEMENT:
        case r("AdsAPIObjectives").REACH:
        case r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY:
          return "VIDEO_LPP";
      }
      return null;
    }
    ((l.getDefaultWebsiteUrl = e), (l.getVideoLPPFormat = s));
  },
  98,
);
