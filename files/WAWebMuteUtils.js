__d(
  "WAWebMuteUtils",
  [
    "WAWebGroupMetadataCollection",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterMetadataCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = !1;
      if (o("WAWebUserPrefsMeUser").isMeAccount(e.id)) return !1;
      if (r("WAWebWid").isGroup(e.id)) {
        var n = r("WAWebGroupMetadataCollection").get(e.id);
        n && (t = n.participants.iAmMember());
      }
      if (
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
        r("WAWebWid").isNewsletter(e.id)
      ) {
        var a = r("WAWebNewsletterMetadataCollection").get(e.id);
        a != null && (t = a.canBeMuted);
      }
      return t || r("WAWebWid").isUser(e.id) || r("WAWebWid").isBroadcast(e.id);
    }
    l.canMute = e;
  },
  98,
);
