__d(
  "WAWebSelfBusinessProfileLookup",
  ["WAWebBusinessProfileCollection", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
      );
    }
    l.getSelfBusinessProfile = e;
  },
  98,
);
