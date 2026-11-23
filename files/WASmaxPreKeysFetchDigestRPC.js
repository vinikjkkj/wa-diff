__d(
  "WASmaxPreKeysFetchDigestRPC",
  [
    "WAComms",
    "WASmaxInPreKeysFetchDigestResponseRequestError",
    "WASmaxInPreKeysFetchDigestResponseServerError",
    "WASmaxInPreKeysFetchDigestResponseSuccess",
    "WASmaxOutPreKeysFetchDigestRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WASmaxOutPreKeysFetchDigestRequest").makeFetchDigestRequest(),
        n = await o("WAComms").sendSmaxStanza(t, e),
        r = o(
          "WASmaxInPreKeysFetchDigestResponseSuccess",
        ).parseFetchDigestResponseSuccess(n, t);
      if (r.success)
        return { name: "FetchDigestResponseSuccess", value: r.value };
      var a = o(
        "WASmaxInPreKeysFetchDigestResponseRequestError",
      ).parseFetchDigestResponseRequestError(n, t);
      if (a.success)
        return { name: "FetchDigestResponseRequestError", value: a.value };
      var i = o(
        "WASmaxInPreKeysFetchDigestResponseServerError",
      ).parseFetchDigestResponseServerError(n, t);
      if (i.success)
        return { name: "FetchDigestResponseServerError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("FetchDigest", {
          Success: r,
          RequestError: a,
          ServerError: i,
        }),
      );
    }
    l.sendFetchDigestRPC = e;
  },
  98,
);
