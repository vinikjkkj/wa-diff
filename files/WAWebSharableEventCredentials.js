__d(
  "WAWebSharableEventCredentials",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !(
              !o("WAWebCanonicalGating").isCanonicalEnabled() ||
              o("WAWebCanonicalUtils").isCanonicalPresent()
            )
          ) {
            var n = o("WATimeUtils").monotonicTime();
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][",
                  "] waiting for credentials",
                ])),
              t,
            ),
              yield o("WAWebCanonicalUtils").waitForCanonicalPresent(),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][",
                    "] credentials ready after ",
                    "ms",
                  ])),
                t,
                o("WATimeUtils").monotonicTimeSince(n),
              ));
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.waitForSharableEventCredentials = u;
  },
  98,
);
