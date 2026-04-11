__d(
  "WAWebUpdateMeLidUtils",
  ["WANullthrows", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1);
      if (!(t == null && e == null)) {
        if (t == null && e != null) {
          o("WAWebUserPrefsMeUser").setMeLid(e);
          return;
        }
        (t != null && e == null) ||
          r("WANullthrows")(t).equals(e) ||
          o("WAWebUserPrefsMeUser").setMeLid(r("WANullthrows")(e));
      }
    }
    l.updateMeLid = e;
  },
  98,
);
