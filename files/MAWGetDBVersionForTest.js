__d(
  "MAWGetDBVersionForTest",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      if (r("justknobx")._("1495")) {
        var e = new URL(document.location.href),
          t = e.searchParams.get("db_version");
        if (t != null) {
          if (t === "current" || t === "latest") return t;
          var n = parseInt(t, 10);
          if (Number.isInteger(n)) return Number(n);
        }
      }
    }
    l.getDbVersionForTest = e;
  },
  98,
);
