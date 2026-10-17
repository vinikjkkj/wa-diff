__d(
  "WAWebPollNameHashMismatchLogger",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[polls/tc] poll-name hash mismatch source=",
              "",
            ])),
          t,
        )
        .tags("polls", "security")
        .sendLogs("poll-name-hash-mismatch", { sampling: 1 });
    }
    l.logPollNameHashMismatch = s;
  },
  98,
);
