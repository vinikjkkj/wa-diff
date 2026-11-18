__d(
  "WAWebWaUlCookieUtils",
  ["WAWebUserUtils", "WAWebWaUlCookie"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebUserUtils").hasLoggedIn()
        ? null
        : r("WAWebWaUlCookie").waul_cookie;
    }
    l.getWaUlCookieIfLoggedOut = e;
  },
  98,
);
