__d(
  "WASmaxBlocklistsUpdateOptOutListRPC",
  [
    "WAComms",
    "WASmaxInBlocklistsUpdateOptOutListResponseInvalidRequest",
    "WASmaxInBlocklistsUpdateOptOutListResponseServerError",
    "WASmaxInBlocklistsUpdateOptOutListResponseSuccessWithMatch",
    "WASmaxInBlocklistsUpdateOptOutListResponseSuccessWithMismatch",
    "WASmaxOutBlocklistsUpdateOptOutListRequest",
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
              "WASmaxOutBlocklistsUpdateOptOutListRequest",
            ).makeUpdateOptOutListRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInBlocklistsUpdateOptOutListResponseSuccessWithMatch",
            ).parseUpdateOptOutListResponseSuccessWithMatch(r, n);
          if (a.success)
            return {
              name: "UpdateOptOutListResponseSuccessWithMatch",
              value: a.value,
            };
          var i = o(
            "WASmaxInBlocklistsUpdateOptOutListResponseSuccessWithMismatch",
          ).parseUpdateOptOutListResponseSuccessWithMismatch(r, n);
          if (i.success)
            return {
              name: "UpdateOptOutListResponseSuccessWithMismatch",
              value: i.value,
            };
          var l = o(
            "WASmaxInBlocklistsUpdateOptOutListResponseInvalidRequest",
          ).parseUpdateOptOutListResponseInvalidRequest(r, n);
          if (l.success)
            return {
              name: "UpdateOptOutListResponseInvalidRequest",
              value: l.value,
            };
          var s = o(
            "WASmaxInBlocklistsUpdateOptOutListResponseServerError",
          ).parseUpdateOptOutListResponseServerError(r, n);
          if (s.success)
            return {
              name: "UpdateOptOutListResponseServerError",
              value: s.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("UpdateOptOutList", {
              SuccessWithMatch: a,
              SuccessWithMismatch: i,
              InvalidRequest: l,
              ServerError: s,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendUpdateOptOutListRPC = e;
  },
  98,
);
