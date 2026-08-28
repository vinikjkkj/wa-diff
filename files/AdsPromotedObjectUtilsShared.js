__d(
  "AdsPromotedObjectUtilsShared",
  ["AdsAPIObjectives", "AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case r("AdsAPIObjectives").LINK_CLICKS:
          return r("AdsPromotedObjectTypes").WEBSITE;
        case r("AdsAPIObjectives").CONVERSIONS:
        case r("AdsAPIObjectives").OUTCOME_LEADS:
        case r("AdsAPIObjectives").OUTCOME_SALES:
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return r("AdsPromotedObjectTypes").PIXEL;
        case r("AdsAPIObjectives").APP_INSTALLS:
          return r("AdsPromotedObjectTypes").MOBILE_APP;
        case r("AdsAPIObjectives").MESSAGES:
          return r("AdsPromotedObjectTypes").MESSENGER;
        case r("AdsAPIObjectives").STORE_VISITS:
          return r("AdsPromotedObjectTypes").PLACE_PAGE_SET_ID;
      }
      return r("AdsPromotedObjectTypes").NONE;
    }
    l.getDefaultPromotedObjectType = e;
  },
  98,
);
