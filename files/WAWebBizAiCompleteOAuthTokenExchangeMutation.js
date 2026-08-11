__d(
  "WAWebBizAiCompleteOAuthTokenExchangeMutation",
  ["WAWebBizAiCompleteOAuthTokenExchangeMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAiCompleteOAuthTokenExchangeMutation.graphql")),
      u = 108;
    function c(e) {
      var t;
      return (
        (e == null || (t = e.complete_oauth_token_exchange) == null
          ? void 0
          : t.success) === !0
      );
    }
    function d(e) {
      var t,
        n = e == null ? void 0 : e.complete_oauth_token_exchange;
      return (
        (n == null ? void 0 : n.success) !== !0 &&
        (n == null || (t = n.data) == null || (t = t.status) == null
          ? void 0
          : t.failure_code) === u
      );
    }
    ((l.COMPLETE_OAUTH_TOKEN_EXCHANGE_MUTATION = s),
      (l.didExchangeSucceed = c),
      (l.hasInsufficientScopes = d));
  },
  98,
);
