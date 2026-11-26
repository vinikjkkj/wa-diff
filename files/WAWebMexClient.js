__d(
  "WAWebMexClient",
  ["WAWebMexNativeClient", "WAWebRelayClient"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      return o("WAWebMexNativeClient").fetchQuery(e, t);
    }
    async function s(e, t) {
      return o("WAWebMexNativeClient").fetchQuery(e, t, { withoutRetry: !0 });
    }
    ((l.graphql = o("WAWebRelayClient").graphql),
      (l.fetchQuery = e),
      (l.fetchQueryWithoutRetry = s));
  },
  98,
);
