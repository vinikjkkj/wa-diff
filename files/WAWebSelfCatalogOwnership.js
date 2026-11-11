__d(
  "WAWebSelfCatalogOwnership",
  ["WAWebUserUtils", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebUserUtils")
        .getMeUserOrThrow()
        .equals(o("WAWebWidFactory").createWid(e));
    }
    l.isSelfCatalogOwnerJid = e;
  },
  98,
);
