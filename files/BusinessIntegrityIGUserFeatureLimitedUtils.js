__d(
  "BusinessIntegrityIGUserFeatureLimitedUtils",
  ["errorCode", "fbt", "AdsStackedErrorsCardUtils", "URI", "gkx", "immutable"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e;
    function c() {
      (e || (e = r("URI"))).goURIOnNewWindow(
        new e(
          "https://www.instagram.com/settings/help/account_status/feature_limits/?location=ad_creation_error",
        ),
      );
    }
    var d = u._(/*BTDS*/ "View issues on Instagram");
    function m(e) {
      return e != null && Number(e) === 2207070 && r("gkx")("25352");
    }
    var p = r("immutable").Map([
      [
        2207070,
        {
          cta: d,
          customCTA: c,
          customCTAType: o("AdsStackedErrorsCardUtils").AdsErrorCustomCTAType
            .LINK,
        },
      ],
    ]);
    ((l.openInstagramAccountStatus = c),
      (l.isIGFeatureLimitedError = m),
      (l.AdsErrorCodeToIGFeatureLimited = p));
  },
  226,
);
