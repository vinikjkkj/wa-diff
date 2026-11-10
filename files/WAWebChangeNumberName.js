__d(
  "WAWebChangeNumberName",
  ["WAWebContactCollection", "WAWebFrontendContactGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r = o("WAWebContactCollection").ContactCollection.gadd(t);
      return o("WAWebFrontendContactGetters").getIsMyContact(r)
        ? o("WAWebFrontendContactGetters").getFormattedName(r)
        : (n = o("WAWebFrontendContactGetters").getShownOrgMemberName(
              e.contact,
            )) != null
          ? n
          : o("WAWebFrontendContactGetters").getFormattedName(r);
    }
    l.getChangeNumberName = e;
  },
  98,
);
