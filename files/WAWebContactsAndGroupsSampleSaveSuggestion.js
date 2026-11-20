__d(
  "WAWebContactsAndGroupsSampleSaveSuggestion",
  ["WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    var e = "999999999000001@lid",
      s = "Dario",
      u = 42,
      c = null;
    function d() {
      return (
        c != null ||
          (c = {
            id: o("WAWebWidFactory").createUserLidOrThrow(e),
            messageCount: u,
            name: s,
          }),
        c
      );
    }
    l.getSampleSaveSuggestion = d;
  },
  98,
);
