__d(
  "WAWebDebugNewsletterSimilar",
  [
    "WAJids",
    "WAWebMexFetchSimilarNewslettersJob",
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a;
          (t === void 0 && (t = 10),
            n === void 0 && (n = ["US"]),
            r("vulture")("tKvzdT7tV_RF_q-HHwd6JEe5J9g="));
          var i =
            e != null
              ? e
              : (a = window.chat) == null
                ? void 0
                : a.id.toString();
          if (i != null)
            var l = o("WAJids").toNewsletterJid(i),
              s = yield o(
                "WAWebMexFetchSimilarNewslettersJob",
              ).mexFetchSimilarNewsletters({
                newsletterId: l,
                limit: t,
                countryCodes: n,
              });
        })),
        s.apply(this, arguments)
      );
    }
    var u = { fetchSimilarNewsletters: e };
    l.default = u;
  },
  98,
);
