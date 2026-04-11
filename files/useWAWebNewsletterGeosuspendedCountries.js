__d(
  "useWAWebNewsletterGeosuspendedCountries",
  [
    "Promise",
    "WAWebCountriesUtils",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(8),
        i = d(null),
        l = i[0],
        s = i[1],
        u;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["newsletterMetadata"]), (a[0] = u))
        : (u = a[0]);
      var m = o("useWAWebModelValues").useModelValues(t, u),
        _;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = ["geosuspendedCountries"]), (a[1] = _))
        : (_ = a[1]);
      var f = o("useWAWebModelValues").useOptionalModelValues(
          m.newsletterMetadata,
          _,
        ),
        g;
      a[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = ["add", "remove", "reset", "change"]), (a[2] = g))
        : (g = a[2]);
      var h;
      a[3] !== (f == null ? void 0 : f.geosuspendedCountries)
        ? ((h = function () {
            return f == null ? void 0 : f.geosuspendedCountries.toArray();
          }),
          (a[3] = f == null ? void 0 : f.geosuspendedCountries),
          (a[4] = h))
        : (h = a[4]);
      var y = r("useWAWebEventTargetValue")(
          f == null ? void 0 : f.geosuspendedCountries,
          g,
          h,
        ),
        C,
        b;
      return (
        a[5] !== y
          ? ((C = function () {
              var t = (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    if (y != null) {
                      var t = yield (e || (e = n("Promise"))).all(y.map(p));
                      s(t);
                    }
                  },
                );
                function r() {
                  return t.apply(this, arguments);
                }
                return r;
              })();
              t();
            }),
            (b = [y]),
            (a[5] = y),
            (a[6] = C),
            (a[7] = b))
          : ((C = a[6]), (b = a[7])),
        c(C, b),
        l
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          return {
            countryCode: e.id,
            countryName:
              (t = yield o("WAWebCountriesUtils").getCountryNameFromCountryCode(
                e.id,
              )) != null
                ? t
                : "",
          };
        })),
        _.apply(this, arguments)
      );
    }
    l.useNewsletterGeosuspendedCountries = m;
  },
  98,
);
