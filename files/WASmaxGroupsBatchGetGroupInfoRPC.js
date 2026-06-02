__d(
  "WASmaxGroupsBatchGetGroupInfoRPC",
  [
    "WAComms",
    "WASmaxInGroupsBatchGetGroupInfoResponseClientError",
    "WASmaxInGroupsBatchGetGroupInfoResponseServerError",
    "WASmaxInGroupsBatchGetGroupInfoResponseSuccess",
    "WASmaxOutGroupsBatchGetGroupInfoRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutGroupsBatchGetGroupInfoRequest",
        ).makeBatchGetGroupInfoRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInGroupsBatchGetGroupInfoResponseSuccess",
        ).parseBatchGetGroupInfoResponseSuccess(r, n);
      if (a.success)
        return { name: "BatchGetGroupInfoResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInGroupsBatchGetGroupInfoResponseClientError",
      ).parseBatchGetGroupInfoResponseClientError(r, n);
      if (i.success)
        return { name: "BatchGetGroupInfoResponseClientError", value: i.value };
      var l = o(
        "WASmaxInGroupsBatchGetGroupInfoResponseServerError",
      ).parseBatchGetGroupInfoResponseServerError(r, n);
      if (l.success)
        return { name: "BatchGetGroupInfoResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("BatchGetGroupInfo", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendBatchGetGroupInfoRPC = e;
  },
  98,
);
