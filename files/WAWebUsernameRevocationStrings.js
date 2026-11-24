__d(
  "WAWebUsernameRevocationStrings",
  ["fbt", "WAWebFaqUrl", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      var e = {
        bannerAction: s._(/*BTDS*/ ""),
        whyTitle: s._(/*BTDS*/ ""),
        whyBody: s._(/*BTDS*/ ""),
        learnMore: s._(/*BTDS*/ ""),
        whatTitle: s._(/*BTDS*/ ""),
      };
      if (o("WAWebMobilePlatforms").isSMB()) {
        var t = s._(/*BTDS*/ "");
        return babelHelpers.extends({}, e, {
          bannerTitle: s._(/*BTDS*/ ""),
          bannerBody: s._(/*BTDS*/ ""),
          detailsSubhead: null,
          learnMoreUrl: o("WAWebFaqUrl").getSmbUsernameRevocationFaqUrl(),
          whatBody: t,
          whatBodyWithoutUsername: t,
        });
      }
      return babelHelpers.extends({}, e, {
        bannerTitle: s._(/*BTDS*/ ""),
        bannerBody: s._(/*BTDS*/ ""),
        learnMoreUrl: o("WAWebFaqUrl").getUsernameRevocationFaqUrl(),
        detailsSubhead: s._(/*BTDS*/ ""),
        whatBody: s._(/*BTDS*/ ""),
        whatBodyWithoutUsername: null,
      });
    }
    l.getUsernameRevocationStrings = e;
  },
  226,
);
