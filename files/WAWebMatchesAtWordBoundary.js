__d(
  "WAWebMatchesAtWordBoundary",
  ["WAWebL10NIsWordSeparator"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = 0,
        r;
      do {
        if (
          ((r = e.indexOf(t, n)),
          r !== -1 &&
            (r === 0 ||
              o("WAWebL10NIsWordSeparator").isWordSeparator(e[r - 1])))
        )
          return r;
        n = r + 1;
      } while (r !== -1);
      return -1;
    }
    l.matchesAtWordBoundary = e;
  },
  98,
);
