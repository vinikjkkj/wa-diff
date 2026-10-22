__d(
  "WAWebFormatSharePhoneNumber",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebOrgMemberContactName",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      var r;
      if (n)
        return s._(
          /*BTDS*/ "You shared your phone number. Click to learn more.",
        );
      var a = o("WAWebContactCollection").ContactCollection.gadd(e),
        i =
          (r = o("WAWebOrgMemberContactName").getOrgMemberDisplayName(a)) !=
          null
            ? r
            : o("WAWebFrontendContactGetters").getIsMyContact(a)
              ? o("WAWebFrontendContactGetters").getFormattedName(a)
              : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(a);
      return s._(
        /*BTDS*/ "{contact-name} shared their phone number. Click to learn more.",
        [s._param("contact-name", i)],
      );
    }
    l.default = e;
  },
  226,
);
