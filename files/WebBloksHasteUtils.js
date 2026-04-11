__d(
  "WebBloksHasteUtils",
  ["CurrentLocale"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("CurrentLocale").get().split("_"),
        t = e[0],
        n = e[1];
      return t + "-" + n.toUpperCase();
    }
    l.getLocaleFromServer = e;
  },
  98,
);
