__d(
  "WAWebUpdateMeLidUtils",
  ["WAWebUserPrefsMeUser", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
      if (!(t == null && e == null)) {
        if (t == null && e != null) {
          o("WAWebUserPrefsMeUser").setMeLid(e);
          return;
        }
        (t != null && e == null) ||
          r("nullthrows")(t).equals(e) ||
          o("WAWebUserPrefsMeUser").setMeLid(r("nullthrows")(e));
      }
    }
    l.updateMeLid = e;
  },
  98,
);
