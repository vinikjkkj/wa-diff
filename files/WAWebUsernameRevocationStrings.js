__d(
  "WAWebUsernameRevocationStrings",
  ["fbt", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l, s) {
    var e = "https://www.whatsapp.com/legal/messaging-guidelines";
    function u() {
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
          whatBody: t,
          whatBodyWithoutUsername: t,
        });
      }
      return babelHelpers.extends({}, e, {
        bannerTitle: s._(/*BTDS*/ ""),
        bannerBody: s._(/*BTDS*/ ""),
        detailsSubhead: s._(/*BTDS*/ ""),
        whatBody: s._(/*BTDS*/ ""),
        whatBodyWithoutUsername: null,
      });
    }
    ((l.MESSAGING_GUIDELINES_URL = e), (l.getUsernameRevocationStrings = u));
  },
  226,
);
