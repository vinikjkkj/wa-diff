__d(
  "WAWebNewsletterSubscribersCollection",
  [
    "WAWebBaseCollection",
    "WAWebCommonNewsletterEnums",
    "WAWebFrontendContactGetters",
    "WAWebNewsletterSubscriberModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t, n) {
        if (t.membership === n.membership) {
          if (!o("WAWebFrontendContactGetters").getIsMyContact(t.contact))
            return 1;
          if (!o("WAWebFrontendContactGetters").getIsMyContact(n.contact))
            return -1;
          var e = o("WAWebFrontendContactGetters").getFormattedUser(t.contact),
            r = o("WAWebFrontendContactGetters").getFormattedUser(n.contact);
          return e.localeCompare(r);
        }
        return t.membership ===
          o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner
          ? -1
          : n.membership ===
              o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Owner
            ? 1
            : t.membership ===
                o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin
              ? -1
              : 1;
      },
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebBaseCollection").BaseCollection);
    ((s.model = o("WAWebNewsletterSubscriberModel").NewsletterSubscriber),
      (s.comparator = e),
      (l.default = s));
  },
  98,
);
