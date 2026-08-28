__d(
  "AdsManagerIGLoginUtils",
  [
    "AdsAPIObjectives",
    "AdsPromotedObjectTypes",
    "AudienceManagerCreateAudienceFlatDialogConstants",
    "adsIsIGLoginUtils",
    "igAccessAdsManagerUtils",
    "isUPVEnabledForIGLoginUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = o("AudienceManagerCreateAudienceFlatDialogConstants"))
          .AUDIENCE_TYPE.CATALOG,
        e.AUDIENCE_TYPE.OFFLINE_EVENT_SET,
        e.AUDIENCE_TYPE.MOBILE_APP,
        e.AUDIENCE_TYPE.FB_EVENT_ENGAGEMENT_AUDIENCE,
        e.AUDIENCE_TYPE.PAGE_ENGAGEMENT_AUDIENCE,
        e.AUDIENCE_TYPE.MARKETPLACE_LISTINGS,
        e.AUDIENCE_TYPE.SHOPPING,
        e.AUDIENCE_TYPE.AUGMENTED_REALITY,
      ],
      u = ["lead", "canvas"];
    function c(e) {
      return o("adsIsIGLoginUtils").getIsIGLogin(e);
    }
    function d() {
      return ["phone_call", "external", "instant_experience"];
    }
    function m() {
      return ["none", "phone_call", "instant_form"];
    }
    function p(e) {
      return o("igAccessAdsManagerUtils").isIGAccessParityEnabled()
        ? e
        : e.filter(function (e) {
            return !s.includes(e.id);
          });
    }
    function _(e) {
      switch (e) {
        case r("AdsAPIObjectives").OUTCOME_SALES:
          return [
            r("AdsPromotedObjectTypes").PIXEL,
            r("AdsPromotedObjectTypes").MESSENGER,
            r("AdsPromotedObjectTypes").INSTAGRAM,
            r("AdsPromotedObjectTypes").PHONE_CALL,
          ];
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          return [
            r("AdsPromotedObjectTypes").PIXEL,
            r("AdsPromotedObjectTypes").ON_AD,
            r("AdsPromotedObjectTypes").LEAD_FROM_IG_DIRECT,
            r("AdsPromotedObjectTypes").PHONE_CALL,
          ];
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT: {
          var t,
            n = [
              (t = r("AdsPromotedObjectTypes")).MESSENGER,
              t.INSTAGRAM,
              t.POST,
              t.VIDEO,
              t.PHONE_CALL,
              t.PIXEL,
            ];
          return (
            r("isUPVEnabledForIGLoginUser")() &&
              n.push(r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE),
            n
          );
        }
        case r("AdsAPIObjectives").LINK_CLICKS: {
          var t,
            o = [
              (t = r("AdsPromotedObjectTypes")).WEBSITE,
              t.PIXEL,
              t.INSTAGRAM,
              t.MESSENGER,
              t.INSTAGRAM_PROFILE,
              t.PHONE_CALL,
            ];
          return (
            r("isUPVEnabledForIGLoginUser")() &&
              o.push(r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE),
            o
          );
        }
      }
      return [];
    }
    function f(e, t, n, r) {
      var o =
        c(e) &&
        u.includes(t) &&
        n.every(function (e) {
          return e.is_instagram_account_backed_page === !0;
        });
      return (o && n.length > 0 && r(n[0].id), o);
    }
    ((l.getIsIGLogin = c),
      (l.getIgLoginAdLinkTypes = d),
      (l.getIgLoginWebsiteExtensionTypes = m),
      (l.filterCustomAudienceOptionsForIGLogin = p),
      (l.getIgLoginSupportedAdsPromotedObjects = _),
      (l.getHideAudienceManagerPageSelector = f));
  },
  98,
);
