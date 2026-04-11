__d(
  "WAWebMexClient",
  ["WAWebMexNativeClient", "WAWebRelayClient", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebMexNativeClient").fetchQuery(e, t);
        })),
        s.apply(this, arguments)
      );
    }
    ((l.graphql = o("WAWebRelayClient").graphql), (l.fetchQuery = e));
  },
  98,
);
