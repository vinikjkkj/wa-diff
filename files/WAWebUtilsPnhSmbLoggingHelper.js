__d(
  "WAWebUtilsPnhSmbLoggingHelper",
  ["WAWebContactCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e != null) {
        if (!e.isLid()) return e.user;
        var t = o("WAWebContactCollection").ContactCollection.get(e);
        if ((t == null ? void 0 : t.phoneNumber) != null)
          return t.phoneNumber.user;
      }
      return "-1";
    }
    l.jidToPnString = e;
  },
  98,
);
