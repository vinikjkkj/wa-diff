__d(
  "getMAIBAPageAdAccountID",
  ["CurrentAdAccount"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("CurrentAdAccount").getID();
      return e === "0" ? null : e;
    }
    l.default = e;
  },
  98,
);
