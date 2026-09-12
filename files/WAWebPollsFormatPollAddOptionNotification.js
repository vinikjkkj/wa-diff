__d(
  "WAWebPollsFormatPollAddOptionNotification",
  ["fbt", "WAWebPollAddOptionContributor"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = o("WAWebPollAddOptionContributor").getPollAddOptionContributor(e);
      return t == null
        ? s._(/*BTDS*/ "An option was added to the poll")
        : t.kind === "me"
          ? s._(/*BTDS*/ "You added an option to the poll")
          : s._(/*BTDS*/ "{sender-name} added an option to the poll", [
              s._param("sender-name", t.name),
            ]);
    }
    l.formatPollAddOptionNotification = e;
  },
  226,
);
