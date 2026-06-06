__d(
  "WAWebFetchWithAdAccountToken",
  ["WAWebFetchAdAccountToken", "asyncToGeneratorRuntime"],
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
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (n.type !== "success") throw new e(n);
          try {
            return yield t(n.token);
          } catch (n) {
            if (
              !(n instanceof Error) ||
              !o("WAWebFetchAdAccountToken").hasGraphQLAuthError(n)
            )
              throw n;
            o("WAWebFetchAdAccountToken").markTokenAsInvalid();
            var r = yield o("WAWebFetchAdAccountToken").fetchToken(!0);
            if (r.type !== "success") throw new e(r);
            return t(r.token);
          }
        })),
        u.apply(this, arguments)
      );
    }
    ((l.FetchAdAccountTokenError = e), (l.fetchWithAdAccountToken = s));
  },
  98,
);
