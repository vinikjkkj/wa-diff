__d(
  "WAWebFormatSharePhoneNumber",
  ["fbt", "WAWebContactCollection", "WAWebFrontendContactGetters"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      var r;
      if (n) return s._(/*BTDS*/ "");
      var a = o("WAWebContactCollection").ContactCollection.gadd(e),
        i =
          (r = o("WAWebFrontendContactGetters").getShownMemberName(a)) != null
            ? r
            : o("WAWebFrontendContactGetters").getIsMyContact(a)
              ? o("WAWebFrontendContactGetters").getFormattedName(a)
              : o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(a);
      return s._(/*BTDS*/ "", [s._param("contact-name", i)]);
    }
    l.default = e;
  },
  226,
);
