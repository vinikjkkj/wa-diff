__d(
  "loadMAIBADevImageFixtureURL",
  ["asyncToGeneratorRuntime", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("MAIBADevImageFixtureURL").__setRef(
      "loadMAIBADevImageFixtureURL",
    );
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield e.load();
          return t.MAIBA_DEV_IMAGE_FIXTURE_DATA_URL;
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
