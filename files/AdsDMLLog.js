__d(
  "AdsDMLLog",
  ["MainPageUrl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === void 0 && (e = "debug"),
        o("MainPageUrl").mainPageUrl.searchParams.get("dmllog") === e
      );
    }
    var s = {
      loading: "yellow",
      error: "red",
      loaded: "green",
      pending: "gray",
    };
    function u(e, t) {}
    ((l.isDMLLogEnabled = e), (l.logDMLQuery = u));
  },
  98,
);
