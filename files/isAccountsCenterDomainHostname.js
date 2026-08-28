__d(
  "isAccountsCenterDomainHostname",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null || e === "") return !1;
      var t = e.split(".");
      return t[0] !== "accountscenter"
        ? !1
        : e.endsWith(".facebook.com") ||
            e.endsWith(".instagram.com") ||
            e.endsWith(".meta.com") ||
            e.endsWith(".threads.com");
    }
    i.default = e;
  },
  66,
);
