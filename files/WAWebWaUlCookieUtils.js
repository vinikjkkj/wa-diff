__d(
  "WAWebWaUlCookieUtils",
  ["WAWebUserPrefsMeUser", "WAWebWaUlCookie"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebUserPrefsMeUser").hasLoggedIn()
        ? null
        : r("WAWebWaUlCookie").waul_cookie;
    }
    l.getWaUlCookieIfLoggedOut = e;
  },
  98,
);
