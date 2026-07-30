__d(
  "WAWebSelfCatalogOwnership",
  ["WAWebUserPrefsMeUser", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebUserPrefsMeUser")
        .getMeUserOrThrow()
        .equals(o("WAWebWidFactory").createWid(e));
    }
    l.isSelfCatalogOwnerJid = e;
  },
  98,
);
