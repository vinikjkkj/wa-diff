__d(
  "WAWebDebugNewsletterSimilar",
  ["WAJids", "WAWebMexFetchSimilarNewslettersJob", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r;
          (t === void 0 && (t = 10), n === void 0 && (n = ["US"]));
          var a =
            e != null
              ? e
              : (r = window.chat) == null
                ? void 0
                : r.id.toString();
          if (a != null)
            var i = o("WAJids").toNewsletterJid(a),
              l = yield o(
                "WAWebMexFetchSimilarNewslettersJob",
              ).mexFetchSimilarNewsletters({
                newsletterId: i,
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
