__d(
  "ads-objectives",
  ["AdsAPIObjectives", "AdsDestinationTypes", "keyMirror"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("keyMirror")({
        APP_INSTALLS: null,
        NONE: null,
        BRAND_AWARENESS: null,
        CANVAS_APP_ENGAGEMENT: null,
        CANVAS_APP_INSTALLS: null,
        EVENT_RESPONSES: null,
        LEAD_GENERATION: null,
        MOBILE_APP_ENGAGEMENT: null,
        MOBILE_APP_INSTALLS: null,
        OFFER_CLAIMS: null,
        PAGE_LIKES: null,
        POST_ENGAGEMENT: null,
        PRODUCT_CATALOG_SALES: null,
        VIDEO_VIEWS: null,
        LINK_CLICKS: null,
        CONVERSIONS: null,
        REACH: null,
        STORE_VISITS: null,
        MESSAGES: null,
        OUTCOME_ENGAGEMENT: null,
        OUTCOME_LEADS: null,
        OUTCOME_SALES: null,
        OUTCOME_AWARENESS: null,
        APP_ENGAGEMENT: null,
        SOCIAL_INTERACTION: null,
        MIXED: null,
        PROFILE_FOLLOWERS: null,
      }),
      c = r("keyMirror")({ LARGE: null, MEDIUM: null, SMALL: null }),
      d = r("keyMirror")({ ACTIVE: null, DEFAULT: null, HOVER: null }),
      m = {};
    ((m[(e = r("AdsDestinationTypes")).APP] = [
      u.APP_INSTALLS,
      u.APP_ENGAGEMENT,
      u.CONVERSIONS,
      u.LINK_CLICKS,
    ]),
      (m[e.EVENT] = [u.EVENT_RESPONSES, u.SOCIAL_INTERACTION]),
      (m[e.EXTERNAL_WEBPAGE] = [
        (s = r("AdsAPIObjectives")).LINK_CLICKS,
        s.CONVERSIONS,
        u.PRODUCT_CATALOG_SALES,
      ]),
      (m[e.PAGE] = m[e.PLACE] =
        [
          u.BRAND_AWARENESS,
          u.LEAD_GENERATION,
          u.OFFER_CLAIMS,
          u.PAGE_LIKES,
          u.POST_ENGAGEMENT,
          u.REACH,
          u.SOCIAL_INTERACTION,
          u.STORE_VISITS,
          u.VIDEO_VIEWS,
        ]));
    var p = {};
    ((p[0] = u.NONE),
      (p[6] = u.OFFER_CLAIMS),
      (p[8] = u.PAGE_LIKES),
      (p[11] = u.CANVAS_APP_INSTALLS),
      (p[12] = u.EVENT_RESPONSES),
      (p[13] = u.CANVAS_APP_ENGAGEMENT),
      (p[14] = u.POST_ENGAGEMENT),
      (p[15] = u.CONVERSIONS),
      (p[17] = u.MOBILE_APP_INSTALLS),
      (p[19] = u.LINK_CLICKS),
      (p[20] = u.MOBILE_APP_ENGAGEMENT),
      (p[24] = u.VIDEO_VIEWS),
      (p[29] = u.PRODUCT_CATALOG_SALES),
      (p[31] = u.LEAD_GENERATION),
      (p[32] = u.BRAND_AWARENESS),
      (p[35] = u.STORE_VISITS),
      (p[36] = u.REACH),
      (p[37] = u.APP_INSTALLS),
      (p[39] = u.MESSAGES),
      (p[40] = u.OUTCOME_LEADS),
      (p[42] = u.OUTCOME_ENGAGEMENT),
      (p[43] = u.OUTCOME_SALES),
      (p[44] = u.OUTCOME_AWARENESS),
      (p[122] = u.PROFILE_FOLLOWERS));
    var _ = {};
    ((_[u.PAGE_LIKES] = s.PAGE_LIKES),
      (_[u.POST_ENGAGEMENT] = s.POST_ENGAGEMENT),
      (_[u.REACH] = s.REACH),
      (_[s.LINK_CLICKS] = s.LINK_CLICKS),
      (_[s.CONVERSIONS] = s.CONVERSIONS),
      (_[u.OFFER_CLAIMS] = s.OFFER_CLAIMS),
      (_[u.VIDEO_VIEWS] = s.VIDEO_VIEWS),
      (_[u.EVENT_RESPONSES] = s.EVENT_RESPONSES),
      (_[u.BRAND_AWARENESS] = s.BRAND_AWARENESS),
      (_[u.LEAD_GENERATION] = s.LEAD_GENERATION),
      (_[u.MOBILE_APP_INSTALLS] = s.MOBILE_APP_INSTALLS),
      (_[u.PRODUCT_CATALOG_SALES] = s.PRODUCT_CATALOG_SALES),
      (_[u.STORE_VISITS] = s.STORE_VISITS),
      (_[u.MESSAGES] = s.MESSAGES),
      (_[u.OUTCOME_LEADS] = s.OUTCOME_LEADS),
      (_[u.OUTCOME_ENGAGEMENT] = s.OUTCOME_ENGAGEMENT),
      (_[u.OUTCOME_SALES] = s.OUTCOME_SALES),
      (_[u.OUTCOME_AWARENESS] = s.OUTCOME_AWARENESS),
      (_[u.APP_ENGAGEMENT] = s.CANVAS_APP_ENGAGEMENT),
      (_[u.APP_INSTALLS] = s.APP_INSTALLS),
      (_[u.SOCIAL_INTERACTION] = s.POST_ENGAGEMENT));
    var f = {};
    ((f[s.APP_INSTALLS] = u.APP_INSTALLS),
      (f[s.CANVAS_APP_ENGAGEMENT] = u.APP_ENGAGEMENT),
      (f[s.CANVAS_APP_INSTALLS] = u.APP_INSTALLS),
      (f[s.EVENT_RESPONSES] = u.SOCIAL_INTERACTION),
      (f[s.BRAND_AWARENESS] = u.BRAND_AWARENESS),
      (f[s.MOBILE_APP_ENGAGEMENT] = u.APP_ENGAGEMENT),
      (f[s.MOBILE_APP_INSTALLS] = u.APP_INSTALLS),
      (f[s.OFFER_CLAIMS] = u.SOCIAL_INTERACTION),
      (f[s.VIDEO_VIEWS] = u.VIDEO_VIEWS),
      (f[s.CONVERSIONS] = u.CONVERSIONS),
      (f[s.POST_ENGAGEMENT] = u.SOCIAL_INTERACTION),
      (f[s.REACH] = u.REACH),
      (f[s.PAGE_LIKES] = u.SOCIAL_INTERACTION),
      (f[s.LINK_CLICKS] = s.LINK_CLICKS),
      (f[s.PRODUCT_CATALOG_SALES] = u.PRODUCT_CATALOG_SALES),
      (f[s.LEAD_GENERATION] = u.LEAD_GENERATION),
      (f[s.STORE_VISITS] = u.STORE_VISITS),
      (f[s.MESSAGES] = u.MESSAGES),
      (f[s.OUTCOME_ENGAGEMENT] = u.OUTCOME_ENGAGEMENT),
      (f[s.OUTCOME_LEADS] = u.OUTCOME_LEADS),
      (f[s.OUTCOME_SALES] = u.OUTCOME_SALES),
      (f[s.OUTCOME_AWARENESS] = u.OUTCOME_AWARENESS));
    var g = function (t) {
      return (
        [
          r("AdsAPIObjectives").LINK_CLICKS,
          r("AdsAPIObjectives").CONVERSIONS,
        ].indexOf(t) > -1
      );
    };
    function h(e) {
      return e
        .filter(function (e) {
          return u[String(e)];
        })
        .map(function (e) {
          return e;
        });
    }
    ((l.KPIObjectives = u),
      (l.KPIObjectivesImageSize = c),
      (l.KPIObjectivesImageState = d),
      (l.KPIObjectivesByDestinationType = m),
      (l.EnumtoKPIObjectives = p),
      (l.KPItoAPIObjectives = _),
      (l.APItoKPIObjectives = f),
      (l.isURLCachingEligibileObjective = g),
      (l.filterKPIObjectives = h));
  },
  98,
);
