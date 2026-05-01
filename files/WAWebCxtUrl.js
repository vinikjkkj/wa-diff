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
    function d() {
      return s("about-group-suspension-appeals");
    }
    function m() {
      return s("about-community-suspension-appeals");
    }
    function p(e) {
      var t = e.isCommunity;
      return t ? m() : d();
    }
    ((l.getGroupInviteGrowthLockedFaqUrl = u),
      (l.getCommunityNotAvailableFaqUrl = c),
      (l.getGroupSuspensionAppealsFaqUrl = d),
      (l.getCommunitySuspensionAppealsFaqUrl = m),
      (l.getSuspensionAppealsFaqUrl = p));
  },
  98,
);
