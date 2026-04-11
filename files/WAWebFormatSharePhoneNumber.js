__d(
  "WAWebFormatSharePhoneNumber",
  ["fbt", "WAWebContactCollection", "WAWebFrontendContactGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      if (n)
        return s._(
          /*BTDS*/ "You shared your phone number. Click to learn more.",
        );
      var r = o("WAWebContactCollection").ContactCollection.gadd(e),
        a = o("WAWebFrontendContactGetters").getIsMyContact(r)
          ? o("WAWebFrontendContactGetters").getFormattedName(r)
          : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(r);
      return s._(
        /*BTDS*/ "{contact-name} shared their phone number. Click to learn more.",
        [s._param("contact-name", a)],
      );
    }
    l.default = e;
  },
  226,
);
