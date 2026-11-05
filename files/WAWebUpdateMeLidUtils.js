__d(
  "WAWebUpdateMeLidUtils",
  [
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebUserPrefsMeUser",
    "cr:18917",
    "nullthrows",
  ],
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
          (o("WAWebUserPrefsMeUser").setMeLid(r("nullthrows")(e)), s());
      }
    }
    function s() {
      if (o("WAWebCanonicalGating").isCanonicalAuthV2Enabled()) {
        var e = o("WAWebCanonicalUtils").getCanonicalIssuance();
        (o("WAWebCanonicalUtils").markCanonicalRejected(e),
          n("cr:18917") != null &&
            n("cr:18917").refreshCanonicalCredentials({
              reason: "rejected",
              seen: e,
            }));
      }
    }
    l.updateMeLid = e;
  },
  98,
);
