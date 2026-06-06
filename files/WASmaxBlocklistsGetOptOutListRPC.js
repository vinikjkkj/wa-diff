__d(
  "WASmaxBlocklistsGetOptOutListRPC",
  [
    "WAComms",
    "WASmaxInBlocklistsGetOptOutListResponseInternalServerError",
    "WASmaxInBlocklistsGetOptOutListResponseInvalidRequest",
    "WASmaxInBlocklistsGetOptOutListResponseSuccessWithMatch",
    "WASmaxInBlocklistsGetOptOutListResponseSuccessWithMismatch",
    "WASmaxOutBlocklistsGetOptOutListRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutBlocklistsGetOptOutListRequest",
        ).makeGetOptOutListRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInBlocklistsGetOptOutListResponseSuccessWithMismatch",
        ).parseGetOptOutListResponseSuccessWithMismatch(r, n);
      if (a.success)
        return {
          name: "GetOptOutListResponseSuccessWithMismatch",
          value: a.value,
        };
      var i = o(
        "WASmaxInBlocklistsGetOptOutListResponseSuccessWithMatch",
      ).parseGetOptOutListResponseSuccessWithMatch(r, n);
      if (i.success)
        return {
          name: "GetOptOutListResponseSuccessWithMatch",
          value: i.value,
        };
      var l = o(
        "WASmaxInBlocklistsGetOptOutListResponseInvalidRequest",
      ).parseGetOptOutListResponseInvalidRequest(r, n);
      if (l.success)
        return { name: "GetOptOutListResponseInvalidRequest", value: l.value };
      var s = o(
        "WASmaxInBlocklistsGetOptOutListResponseInternalServerError",
      ).parseGetOptOutListResponseInternalServerError(r, n);
      if (s.success)
        return {
          name: "GetOptOutListResponseInternalServerError",
          value: s.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetOptOutList", {
          SuccessWithMismatch: a,
          SuccessWithMatch: i,
          InvalidRequest: l,
          InternalServerError: s,
        }),
      );
    }
    l.sendGetOptOutListRPC = e;
  },
  98,
);
