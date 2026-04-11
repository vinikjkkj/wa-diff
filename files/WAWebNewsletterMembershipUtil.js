__d(
  "WAWebNewsletterMembershipUtil",
  ["WAWebCommonNewsletterEnums"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        (e == null ? void 0 : e.membershipType) ===
        o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber
      );
    }
    function s(e) {
      return u(e) || c(e);
    }
    function u(e) {
      return (
        (e == null ? void 0 : e.membershipType) ===
        o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner
      );
    }
    function c(e) {
      return (
        (e == null ? void 0 : e.membershipType) ===
        o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin
      );
    }
    function d(e) {
      return (
        (e == null ? void 0 : e.membershipType) ===
        o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Guest
      );
    }
    ((l.iAmSubscriber = e),
      (l.iAmAdminOrOwner = s),
      (l.iAmOwner = u),
      (l.iAmAdmin = c),
      (l.iAmGuest = d));
  },
  98,
);
