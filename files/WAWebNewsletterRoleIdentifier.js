__d(
  "WAWebNewsletterRoleIdentifier",
  ["WAWebNewsletterMetadataCollection", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      if (r("WAWebWid").isNewsletter(e)) {
        var n;
        return (n = r("WAWebNewsletterMetadataCollection").get(e)) == null
          ? void 0
          : n.membershipType;
      }
      return (t = r("WAWebNewsletterMetadataCollection").filter(function (t) {
        return t.inviteCode === e;
      })[0]) == null
        ? void 0
        : t.membershipType;
    }
    l.getRoleByIdentifier = e;
  },
  98,
);
