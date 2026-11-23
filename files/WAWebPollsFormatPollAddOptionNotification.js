__d(
  "WAWebPollsFormatPollAddOptionNotification",
  ["fbt", "WAWebPollAddOptionContributor"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = o("WAWebPollAddOptionContributor").getPollAddOptionContributor(e);
      return t == null
        ? s._(/*BTDS*/ "")
        : t.kind === "me"
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ "", [s._param("sender-name", t.name)]);
    }
    l.formatPollAddOptionNotification = e;
  },
  226,
);
