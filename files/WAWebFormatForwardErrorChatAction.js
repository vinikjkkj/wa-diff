__d(
  "WAWebFormatForwardErrorChatAction",
  ["fbt", "WAWebChatGetters", "WAWebStringsWithMultiplePluralParts"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.canForward,
        n = e.cannotForward,
        r = e.chat,
        a = e.undelivered,
        i = t.length - a.length,
        l = n.length + a.length;
      return i > 0
        ? a.length
          ? n.length
            ? o(
                "WAWebStringsWithMultiplePluralParts",
              ).getCannotForwardFileMissingAndCapabilityContactString(
                l,
                r.formattedTitle,
              )
            : s._(/*BTDS*/ "", [s._plural(l, "count")])
          : o(
              "WAWebStringsWithMultiplePluralParts",
            ).getCannotForwardCapabilityContactString(l, r.formattedTitle)
        : a.length
          ? n.length
            ? o("WAWebChatGetters").getIsUser(r)
              ? s._(/*BTDS*/ "", [s._param("contact", r.formattedTitle)])
              : s._(/*BTDS*/ "", [s._param("contact", r.formattedTitle)])
            : s._(/*BTDS*/ "")
          : o("WAWebChatGetters").getIsUser(r)
            ? s._(/*BTDS*/ "", [s._param("contact", r.formattedTitle)])
            : s._(/*BTDS*/ "", [s._param("contact", r.formattedTitle)]);
    }
    l.default = e;
  },
  226,
);
