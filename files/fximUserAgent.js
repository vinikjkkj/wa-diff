__d(
  "fximUserAgent",
  ["UserAgent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("UserAgent").isBrowser("Oculus Browser");
    }
    function s() {
      return e() && window.matchMedia("(display-mode: standalone)").matches;
    }
    function u() {
      return r("UserAgent").isPlatform("iOS");
    }
    function c() {
      return r("UserAgent").isPlatform("Android");
    }
    ((l.isOculusBrowser = e),
      (l.isOculusPWA = s),
      (l.isIOS = u),
      (l.isAndroid = c));
  },
  98,
);
