__d(
  "WAWebAuthAgentAffiliationUtils",
  ["WAPhoneFindCC", "WAWebWid", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e == null) return null;
      var t = o("WAPhoneFindCC").extractDigits(e);
      if (t === "") return null;
      var n = t + "@c.us";
      return r("WAWebWid").isWid(n)
        ? o("WAWebWidFactory").createUserWidOrThrow(n)
        : null;
    }
    l.getAuthAgentParentWid = e;
  },
  98,
);
