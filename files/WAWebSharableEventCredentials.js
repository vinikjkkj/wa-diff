__d(
  "WAWebSharableEventCredentials",
  ["WALogger", "WATimeUtils", "WAWebCanonicalGating", "WAWebCanonicalUtils"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
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
          await o("WAWebCanonicalUtils").waitForCanonicalPresent(),
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
    }
    l.waitForSharableEventCredentials = u;
  },
  98,
);
