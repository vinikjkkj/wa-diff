__d(
  "WAWebLabyrinthCanonicalUserFbid",
  ["CurrentUser", "WAWebCanonicalUtils", "WAWebLabyrinthOpaqueTypes", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = s();
      if (e == null)
        throw r("err")(
          "getWaCanonicalUserFbid: WA canonical user FBID unavailable",
        );
      return e;
    }
    function s() {
      var e;
      if (!o("WAWebCanonicalUtils").isCanonicalPresent()) return null;
      var t =
        (e = c(o("WAWebCanonicalUtils").getCanonicalTokenUserId())) != null
          ? e
          : u();
      return t == null ? null : o("WAWebLabyrinthOpaqueTypes").makeUserId(t);
    }
    function u() {
      var e = r("CurrentUser").getPossiblyNonFacebookUserID();
      return e == null ? null : c(String(e));
    }
    function c(e) {
      return e == null || e === "" || e === "0" ? null : e;
    }
    ((l.getWaCanonicalUserFbid = e), (l.getMaybeWaCanonicalUserFbid = s));
  },
  98,
);
