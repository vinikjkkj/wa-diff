__d(
  "WASmaxPreKeysFetchMissingPreKeysRPC",
  [
    "WAComms",
    "WASmaxInPreKeysFetchMissingPreKeysResponseRequestError",
    "WASmaxInPreKeysFetchMissingPreKeysResponseServerError",
    "WASmaxInPreKeysFetchMissingPreKeysResponseSuccess",
    "WASmaxOutPreKeysFetchMissingPreKeysRequest",
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
              "WASmaxOutPreKeysFetchMissingPreKeysRequest",
            ).makeFetchMissingPreKeysRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInPreKeysFetchMissingPreKeysResponseSuccess",
            ).parseFetchMissingPreKeysResponseSuccess(r, n);
          if (a.success)
            return {
              name: "FetchMissingPreKeysResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInPreKeysFetchMissingPreKeysResponseRequestError",
          ).parseFetchMissingPreKeysResponseRequestError(r, n);
          if (i.success)
            return {
              name: "FetchMissingPreKeysResponseRequestError",
              value: i.value,
            };
          var l = o(
            "WASmaxInPreKeysFetchMissingPreKeysResponseServerError",
          ).parseFetchMissingPreKeysResponseServerError(r, n);
          if (l.success)
            return {
              name: "FetchMissingPreKeysResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("FetchMissingPreKeys", {
              Success: a,
              RequestError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendFetchMissingPreKeysRPC = e;
  },
  98,
);
