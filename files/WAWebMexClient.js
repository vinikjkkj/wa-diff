__d(
  "WAWebMexClient",
  ["WAWebMexNativeClient", "WAWebRelayClient"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      return o("WAWebMexNativeClient").fetchQuery(e, t);
    }
    ((l.graphql = o("WAWebRelayClient").graphql), (l.fetchQuery = e));
  },
  98,
);
