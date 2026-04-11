__d(
  "WASmaxPsaResetSmbLastQpPrefetchTimestampRPC",
  [
    "WASmaxInPsaResetSmbLastQpPrefetchTimestampRequest",
    "WASmaxOutPsaResetSmbLastQpPrefetchTimestampResponseAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPsaResetSmbLastQpPrefetchTimestampRequest",
      ).parseResetSmbLastQpPrefetchTimestampRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "ResetSmbLastQpPrefetchTimestamp",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeResetSmbLastQpPrefetchTimestampResponseAck: function () {
          return o(
            "WASmaxOutPsaResetSmbLastQpPrefetchTimestampResponseAck",
          ).makeResetSmbLastQpPrefetchTimestampResponseAck(e);
        },
      };
    }
    l.receiveResetSmbLastQpPrefetchTimestampRPC = e;
  },
  98,
);
