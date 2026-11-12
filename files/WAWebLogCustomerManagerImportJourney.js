__d(
  "WAWebLogCustomerManagerImportJourney",
  ["ErrorPubSub", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      try {
        t();
      } catch (t) {
        (e || (e = r("ErrorPubSub"))).reportError(r("getErrorSafe")(t));
      }
    }
    l.default = s;
  },
  98,
);
