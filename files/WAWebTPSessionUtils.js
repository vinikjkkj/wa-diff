__d(
  "WAWebTPSessionUtils",
  ["WACryptoSha256", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WACryptoSha256").sha256Base64(e);
          return t;
        })),
        s.apply(this, arguments)
      );
    }
    l.createSessionId = e;
  },
  98,
);
