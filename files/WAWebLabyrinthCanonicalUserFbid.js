__d(
  "WAWebLabyrinthCanonicalUserFbid",
  ["CurrentUser", "WAWebCanonicalUtils", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("CurrentUser").getPossiblyNonFacebookUserID();
      if (
        !o("WAWebCanonicalUtils").isCanonicalPresent() ||
        e == null ||
        e === ""
      )
        throw r("err")(
          "getWaCanonicalUserFbid: WA canonical user FBID unavailable",
        );
      return String(e);
    }
    l.getWaCanonicalUserFbid = e;
  },
  98,
);
