__d(
  "WAWebFetchWithAdAccountToken",
  ["WAWebFetchAdAccountToken"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n =
            e.call(this, "Failed to fetch ad account token: " + t.type) ||
            this),
          (n.tokenResult = t),
          (n.name = "FetchAdAccountTokenError"),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    async function s(t) {
      var n = await o("WAWebFetchAdAccountToken").fetchToken();
      if (n.type !== "success") throw new e(n);
      try {
        return await t(n.token);
      } catch (n) {
        if (
          !(n instanceof Error) ||
          !o("WAWebFetchAdAccountToken").hasGraphQLAuthError(n)
        )
          throw n;
        o("WAWebFetchAdAccountToken").markTokenAsInvalid();
        var r = await o("WAWebFetchAdAccountToken").fetchToken(!0);
        if (r.type !== "success") throw new e(r);
        return t(r.token);
      }
    }
    ((l.FetchAdAccountTokenError = e), (l.fetchWithAdAccountToken = s));
  },
  98,
);
