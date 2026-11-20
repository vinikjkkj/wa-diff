__d(
  "WAWebUsernameRevocationStrings",
  ["fbt", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l, s) {
    var e = "https://www.whatsapp.com/legal/messaging-guidelines";
    function u() {
      var e = {
        bannerAction: s._(/*BTDS*/ "Show details"),
        whyTitle: s._(/*BTDS*/ "Why this happened"),
        whyBody: s._(/*BTDS*/ "Your username didn't follow our guidelines."),
        learnMore: s._(/*BTDS*/ "Learn more"),
        whatTitle: s._(/*BTDS*/ "What you need to know"),
      };
      if (o("WAWebMobilePlatforms").isSMB()) {
        var t = s._(
          /*BTDS*/ "People can no longer find your business using your prior username or wa.me link.",
        );
        return babelHelpers.extends({}, e, {
          bannerTitle: s._(/*BTDS*/ "Your username has been removed"),
          bannerBody: s._(
            /*BTDS*/ "Your username didn't follow our guidelines.",
          ),
          detailsSubhead: null,
          whatBody: t,
          whatBodyWithoutUsername: t,
        });
      }
      return babelHelpers.extends({}, e, {
        bannerTitle: s._(/*BTDS*/ "Your username has changed"),
        bannerBody: s._(/*BTDS*/ "WhatsApp has assigned you a new username."),
        detailsSubhead: s._(/*BTDS*/ "You have been assigned a new username:"),
        whatBody: s._(
          /*BTDS*/ "People in your conversations will see your assigned username until you change it.",
        ),
        whatBodyWithoutUsername: null,
      });
    }
    ((l.MESSAGING_GUIDELINES_URL = e), (l.getUsernameRevocationStrings = u));
  },
  226,
);
