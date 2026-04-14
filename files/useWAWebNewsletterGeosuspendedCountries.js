__d(
  "useWAWebNewsletterGeosuspendedCountries",
  [
    "Promise",
    "WAWebCountriesUtils",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useState;
    function m(t) {
      var a = d(null),
        i = a[0],
        l = a[1],
        s = o("useWAWebModelValues").useModelValues(t, ["newsletterMetadata"]),
        u = o("useWAWebModelValues").useOptionalModelValues(
          s.newsletterMetadata,
          ["geosuspendedCountries"],
        ),
        m = r("useWAWebEventTargetValue")(
          u == null ? void 0 : u.geosuspendedCountries,
          ["add", "remove", "reset", "change"],
          function () {
            return u == null ? void 0 : u.geosuspendedCountries.toArray();
          },
        );
      return (
        c(
          function () {
            function t() {
              return r.apply(this, arguments);
            }
            function r() {
              return (
                (r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    if (m != null) {
                      var t = yield (e || (e = n("Promise"))).all(
                        m.map(
                          (function () {
                            var e = n(
                              "asyncToGeneratorRuntime",
                            ).asyncToGenerator(function* (e) {
                              var t;
                              return {
                                countryCode: e.id,
                                countryName:
                                  (t = yield o(
                                    "WAWebCountriesUtils",
                                  ).getCountryNameFromCountryCode(e.id)) != null
                                    ? t
                                    : "",
                              };
                            });
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })(),
                        ),
                      );
                      l(t);
                    }
                  },
                )),
                r.apply(this, arguments)
              );
            }
            t();
          },
          [m],
        ),
        i
      );
    }
    l.useNewsletterGeosuspendedCountries = m;
  },
  98,
);
