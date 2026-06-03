__d(
  "WASmaxBlocklistsGetBlockListRPC",
  [
    "WAComms",
    "WASmaxInBlocklistsGetBlockListResponseCAPISuccessWithMismatch",
    "WASmaxInBlocklistsGetBlockListResponseForceMigratedSuccessWithMismatch",
    "WASmaxInBlocklistsGetBlockListResponseInternalServerError",
    "WASmaxInBlocklistsGetBlockListResponseInvalidRequest",
    "WASmaxInBlocklistsGetBlockListResponseMigratedSuccessWithMismatch",
    "WASmaxInBlocklistsGetBlockListResponseSuccessWithMatch",
    "WASmaxInBlocklistsGetBlockListResponseSuccessWithMismatch",
    "WASmaxOutBlocklistsGetBlockListRequest",
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
              "WASmaxOutBlocklistsGetBlockListRequest",
            ).makeGetBlockListRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInBlocklistsGetBlockListResponseSuccessWithMismatch",
            ).parseGetBlockListResponseSuccessWithMismatch(r, n);
          if (a.success)
            return {
              name: "GetBlockListResponseSuccessWithMismatch",
              value: a.value,
            };
          var i = o(
            "WASmaxInBlocklistsGetBlockListResponseMigratedSuccessWithMismatch",
          ).parseGetBlockListResponseMigratedSuccessWithMismatch(r, n);
          if (i.success)
            return {
              name: "GetBlockListResponseMigratedSuccessWithMismatch",
              value: i.value,
            };
          var l = o(
            "WASmaxInBlocklistsGetBlockListResponseForceMigratedSuccessWithMismatch",
          ).parseGetBlockListResponseForceMigratedSuccessWithMismatch(r, n);
          if (l.success)
            return {
              name: "GetBlockListResponseForceMigratedSuccessWithMismatch",
              value: l.value,
            };
          var s = o(
            "WASmaxInBlocklistsGetBlockListResponseCAPISuccessWithMismatch",
          ).parseGetBlockListResponseCAPISuccessWithMismatch(r, n);
          if (s.success)
            return {
              name: "GetBlockListResponseCAPISuccessWithMismatch",
              value: s.value,
            };
          var u = o(
            "WASmaxInBlocklistsGetBlockListResponseSuccessWithMatch",
          ).parseGetBlockListResponseSuccessWithMatch(r, n);
          if (u.success)
            return {
              name: "GetBlockListResponseSuccessWithMatch",
              value: u.value,
            };
          var c = o(
            "WASmaxInBlocklistsGetBlockListResponseInvalidRequest",
          ).parseGetBlockListResponseInvalidRequest(r, n);
          if (c.success)
            return {
              name: "GetBlockListResponseInvalidRequest",
              value: c.value,
            };
          var d = o(
            "WASmaxInBlocklistsGetBlockListResponseInternalServerError",
          ).parseGetBlockListResponseInternalServerError(r, n);
          if (d.success)
            return {
              name: "GetBlockListResponseInternalServerError",
              value: d.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetBlockList", {
              SuccessWithMismatch: a,
              MigratedSuccessWithMismatch: i,
              ForceMigratedSuccessWithMismatch: l,
              CAPISuccessWithMismatch: s,
              SuccessWithMatch: u,
              InvalidRequest: c,
              InternalServerError: d,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetBlockListRPC = e;
  },
  98,
);
