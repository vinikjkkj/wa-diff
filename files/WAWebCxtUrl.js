__d(
  "WAWebCxtUrl",
  ["WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    var e = "https://faq.whatsapp.com";
    function s(t) {
      return (
        e +
        "/cxt/?entrypointid=" +
        t +
        "&platform=web&lang=" +
        r("WAWebL10N").getNormalizedLocale()
      );
    }
    function u() {
      return s("invite-via-link-unavailable");
    }
    function c() {
      return s("community-no-longer-available");
    }
    ((l.getGroupInviteGrowthLockedFaqUrl = u),
      (l.getCommunityNotAvailableFaqUrl = c));
  },
  98,
);
