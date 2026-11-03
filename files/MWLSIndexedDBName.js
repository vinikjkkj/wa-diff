__d(
  "MWLSIndexedDBName",
  ["MAWCurrentUser", "MWLSDatabaseNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("MAWCurrentUser").getID();
      return o("MWLSDatabaseNames").lightspeedPrefix + e;
    }
    l.dbName = e;
  },
  98,
);
