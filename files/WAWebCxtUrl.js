__d(
  "WAWebCxtUrl",
  ["WAWebFaqUrl"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebFaqUrl").getCxtFaqUrl(e);
    }
    function s() {
      return e("invite-via-link-unavailable");
    }
    function u() {
      return e("community-no-longer-available");
    }
    function c() {
      return e("about-group-suspension-appeals");
    }
    function d() {
      return e("about-community-suspension-appeals");
    }
    function m(e) {
      var t = e.isCommunity;
      return t ? d() : c();
    }
    ((l.getGroupInviteGrowthLockedFaqUrl = s),
      (l.getCommunityNotAvailableFaqUrl = u),
      (l.getSuspensionAppealsFaqUrl = m));
  },
  98,
);
