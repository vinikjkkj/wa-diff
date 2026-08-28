__d(
  "adsManagerGetAdObjectsNameFromObjectType",
  ["fbt", "AdFLEXConfig", "AdsObjectTypes", "FBLogger"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n) {
      n === void 0 && (n = {});
      var o = n,
        a = o.capitalize,
        i = a === void 0 ? !0 : a,
        l = o.tool,
        c =
          l != null
            ? r("AdFLEXConfig") == null
              ? void 0
              : r("AdFLEXConfig").getForTool(l)
            : r("AdFLEXConfig") == null
              ? void 0
              : r("AdFLEXConfig").get(),
        d =
          c == null || c.getObjectName == null
            ? void 0
            : c.getObjectName(e, t, n);
      if (d != null) return d;
      var m = !i;
      switch (e) {
        case r("AdsObjectTypes").ACCOUNT:
          return u(t, m, {
            pluralCapitalized: s._(/*BTDS*/ "Accounts"),
            pluralLowercase: s._(/*BTDS*/ "accounts"),
            singularCapitalized: s._(/*BTDS*/ "Account"),
            singularLowercase: s._(/*BTDS*/ "account"),
          });
        case r("AdsObjectTypes").OPPORTUNITIES:
          return (
            r("FBLogger")("nes").warn(
              "Opportunites should not be used as ad object types",
            ),
            m ? s._(/*BTDS*/ "opportunities") : s._(/*BTDS*/ "Opportunities")
          );
        case r("AdsObjectTypes").PRIVACY_INFO_CENTER:
          return m
            ? s._(/*BTDS*/ "resource center")
            : s._(/*BTDS*/ "Resource Center");
        case r("AdsObjectTypes").CAMPAIGN_GROUP:
          return u(t, m, {
            pluralCapitalized: s._(/*BTDS*/ "Campaigns"),
            pluralLowercase: s._(/*BTDS*/ "campaigns"),
            singularCapitalized: s._(/*BTDS*/ "Campaign"),
            singularLowercase: s._(/*BTDS*/ "campaign"),
          });
        case r("AdsObjectTypes").CAMPAIGN:
          return u(t, m, {
            pluralCapitalized: s._(/*BTDS*/ "Ad sets"),
            pluralLowercase: s._(/*BTDS*/ "ad sets"),
            singularCapitalized: s._(/*BTDS*/ "Ad set"),
            singularLowercase: s._(/*BTDS*/ "ad set"),
          });
        case r("AdsObjectTypes").CREATIVE:
          return u(t, m, {
            pluralCapitalized: s._(/*BTDS*/ "Creatives"),
            pluralLowercase: s._(/*BTDS*/ "creatives"),
            singularCapitalized: s._(/*BTDS*/ "Creative"),
            singularLowercase: s._(/*BTDS*/ "creative"),
          });
        case r("AdsObjectTypes").ADGROUP:
          return u(t, m, {
            pluralCapitalized: s._(/*BTDS*/ "Ads"),
            pluralLowercase: s._(/*BTDS*/ "ads"),
            singularCapitalized: s._(/*BTDS*/ "Ad"),
            singularLowercase: s._(/*BTDS*/ "ad"),
          });
        case r("AdsObjectTypes").AUDIENCE:
          return u(t, m, {
            pluralCapitalized: s._(/*BTDS*/ "Audiences"),
            pluralLowercase: s._(/*BTDS*/ "audiences"),
            singularCapitalized: s._(/*BTDS*/ "Audience"),
            singularLowercase: s._(/*BTDS*/ "audience"),
          });
        default:
          throw r("FBLogger")("ads").mustfixThrow("Invalid Object Type: %s", e);
      }
    }
    function u(e, t, n) {
      return e !== 1
        ? t
          ? n.pluralLowercase
          : n.pluralCapitalized
        : t
          ? n.singularLowercase
          : n.singularCapitalized;
    }
    l.default = e;
  },
  226,
);
