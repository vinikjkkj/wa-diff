__d(
  "WAWebWaUlCookieUtils",
  ["WAWebUserPrefsMeUser", "WAWebWaUlCookie"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
      return e != null ? null : r("WAWebWaUlCookie").waul_cookie;
    }
    l.getWaUlCookieIfLoggedOut = e;
  },
  98,
);
