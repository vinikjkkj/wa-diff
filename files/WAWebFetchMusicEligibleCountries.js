__d(
  "WAWebFetchMusicEligibleCountries",
  [
    "WALogger",
    "WAWebACSNetwork",
    "WAWebAsISOCountryCode",
    "WAWebNetworkStatus",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "8360352280687329",
      u = "https://acs.whatsapp.com/graphql";
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var t = new FormData();
            t.append("doc_id", s);
            var n = yield o("WAWebACSNetwork").fetchWithACSCredential({
              project: "WA_StatusMusic",
              url: u,
              data: t,
            });
            if (n == null)
              throw r("err")("Failed to fetch music eligible countries");
            var a = yield n.json(),
              i = a.data.xwa_music_eligible_countries.reduce(function (e, t) {
                if (typeof t != "string") return e;
                var n = o("WAWebAsISOCountryCode").asISOCountryCode(t);
                return (n != null && e.add(n), e);
              }, new Set());
            return i;
          } catch (t) {
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to fetch music eligible countries",
                  ])),
              ),
              t
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.fetchMusicEligibleCountries = c;
  },
  98,
);
