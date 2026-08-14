__d(
  "GetLsDatabaseDeferredForDisplay",
  ["asyncToGeneratorRuntime", "requireDeferredForDisplay"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferredForDisplay")("GetLsDatabase").__setRef(
      "GetLsDatabaseDeferredForDisplay",
    );
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield e.load();
          return t.get();
        })),
        u.apply(this, arguments)
      );
    }
    l.get = s;
  },
  98,
);
