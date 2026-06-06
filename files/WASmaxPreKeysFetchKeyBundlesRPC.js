__d(
  "WASmaxPreKeysFetchKeyBundlesRPC",
  [
    "WAComms",
    "WASmaxInPreKeysFetchKeyBundlesResponseRequestError",
    "WASmaxInPreKeysFetchKeyBundlesResponseServerError",
    "WASmaxInPreKeysFetchKeyBundlesResponseSuccess",
    "WASmaxOutPreKeysFetchKeyBundlesRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WASmaxOutPreKeysFetchKeyBundlesRequest",
            ).makeFetchKeyBundlesRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInPreKeysFetchKeyBundlesResponseSuccess",
            ).parseFetchKeyBundlesResponseSuccess(r, n);
          if (a.success)
            return { name: "FetchKeyBundlesResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInPreKeysFetchKeyBundlesResponseRequestError",
          ).parseFetchKeyBundlesResponseRequestError(r, n);
          if (i.success)
            return {
              name: "FetchKeyBundlesResponseRequestError",
              value: i.value,
            };
          var l = o(
            "WASmaxInPreKeysFetchKeyBundlesResponseServerError",
          ).parseFetchKeyBundlesResponseServerError(r, n);
          if (l.success)
            return {
              name: "FetchKeyBundlesResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("FetchKeyBundles", {
              Success: a,
              RequestError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendFetchKeyBundlesRPC = e;
  },
  98,
);
