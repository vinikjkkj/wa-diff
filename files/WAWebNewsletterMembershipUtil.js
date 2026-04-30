__d(
  "WAWebNewsletterMembershipUtil",
  ["WAWebCommonNewsletterEnums"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        s(e) ||
        (e == null ? void 0 : e.membershipType) ===
          o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin
      );
    }
    function s(e) {
      return (
        (e == null ? void 0 : e.membershipType) ===
        o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner
      );
    }
    ((l.iAmAdminOrOwner = e), (l.iAmOwner = s));
  },
  98,
);
