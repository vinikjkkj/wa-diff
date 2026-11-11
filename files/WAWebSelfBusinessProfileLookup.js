__d(
  "WAWebSelfBusinessProfileLookup",
  ["WAWebBusinessProfileCollection", "WAWebUserUtils"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserUtils").getMeUserOrThrow(),
      );
    }
    l.getSelfBusinessProfile = e;
  },
  98,
);
