__d(
  "WASmaxBlocklistsUpdateBlockListRPC",
  [
    "WAComms",
    "WASmaxInBlocklistsUpdateBlockListResponseCAPISuccessWithMismatch",
    "WASmaxInBlocklistsUpdateBlockListResponseInvalidRequest",
    "WASmaxInBlocklistsUpdateBlockListResponseMigratedSuccessWithMismatch",
    "WASmaxInBlocklistsUpdateBlockListResponseServerError",
    "WASmaxInBlocklistsUpdateBlockListResponseSuccessWithMatch",
    "WASmaxInBlocklistsUpdateBlockListResponseSuccessWithMismatch",
    "WASmaxOutBlocklistsUpdateBlockListRequest",
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
              "WASmaxOutBlocklistsUpdateBlockListRequest",
            ).makeUpdateBlockListRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInBlocklistsUpdateBlockListResponseSuccessWithMatch",
            ).parseUpdateBlockListResponseSuccessWithMatch(r, n);
          if (a.success)
            return {
              name: "UpdateBlockListResponseSuccessWithMatch",
              value: a.value,
            };
          var i = o(
            "WASmaxInBlocklistsUpdateBlockListResponseSuccessWithMismatch",
          ).parseUpdateBlockListResponseSuccessWithMismatch(r, n);
          if (i.success)
            return {
              name: "UpdateBlockListResponseSuccessWithMismatch",
              value: i.value,
            };
          var l = o(
            "WASmaxInBlocklistsUpdateBlockListResponseMigratedSuccessWithMismatch",
          ).parseUpdateBlockListResponseMigratedSuccessWithMismatch(r, n);
          if (l.success)
            return {
              name: "UpdateBlockListResponseMigratedSuccessWithMismatch",
              value: l.value,
            };
          var s = o(
            "WASmaxInBlocklistsUpdateBlockListResponseCAPISuccessWithMismatch",
          ).parseUpdateBlockListResponseCAPISuccessWithMismatch(r, n);
          if (s.success)
            return {
              name: "UpdateBlockListResponseCAPISuccessWithMismatch",
              value: s.value,
            };
          var u = o(
            "WASmaxInBlocklistsUpdateBlockListResponseInvalidRequest",
          ).parseUpdateBlockListResponseInvalidRequest(r, n);
          if (u.success)
            return {
              name: "UpdateBlockListResponseInvalidRequest",
              value: u.value,
            };
          var c = o(
            "WASmaxInBlocklistsUpdateBlockListResponseServerError",
          ).parseUpdateBlockListResponseServerError(r, n);
          if (c.success)
            return {
              name: "UpdateBlockListResponseServerError",
              value: c.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("UpdateBlockList", {
              SuccessWithMatch: a,
              SuccessWithMismatch: i,
              MigratedSuccessWithMismatch: l,
              CAPISuccessWithMismatch: s,
              InvalidRequest: u,
              ServerError: c,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendUpdateBlockListRPC = e;
  },
  98,
);
