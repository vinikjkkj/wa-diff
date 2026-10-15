__d(
  "WAWebCxtUrl",
  ["WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return m("invite-via-link-unavailable");
    }
    function s() {
      return m("community-no-longer-available");
    }
    function u() {
      return m("about-group-suspension-appeals");
    }
    function c() {
      return m("about-community-suspension-appeals");
    }
    function d(e) {
      var t = e.isCommunity;
      return t ? c() : u();
    }
    function m(e) {
      return (
        "https://faq.whatsapp.com/cxt/?entrypointid=" +
        encodeURIComponent(e) +
        "&platform=web&lang=" +
        r("WAWebL10N").getNormalizedLocale()
      );
    }
    ((l.getGroupInviteGrowthLockedFaqUrl = e),
      (l.getCommunityNotAvailableFaqUrl = s),
      (l.getSuspensionAppealsFaqUrl = d));
  },
  98,
);
