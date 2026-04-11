__d(
  "WASmaxBizLinkingGetLinkedAccountsRPC",
  [
    "WAComms",
    "WASmaxInBizLinkingGetLinkedAccountsResponseError",
    "WASmaxInBizLinkingGetLinkedAccountsResponseForbidden",
    "WASmaxInBizLinkingGetLinkedAccountsResponseSuccess",
    "WASmaxOutBizLinkingGetLinkedAccountsRequest",
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
              "WASmaxOutBizLinkingGetLinkedAccountsRequest",
            ).makeGetLinkedAccountsRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInBizLinkingGetLinkedAccountsResponseSuccess",
            ).parseGetLinkedAccountsResponseSuccess(r, n);
          if (a.success)
            return { name: "GetLinkedAccountsResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInBizLinkingGetLinkedAccountsResponseForbidden",
          ).parseGetLinkedAccountsResponseForbidden(r, n);
          if (i.success)
            return {
              name: "GetLinkedAccountsResponseForbidden",
              value: i.value,
            };
          var l = o(
            "WASmaxInBizLinkingGetLinkedAccountsResponseError",
          ).parseGetLinkedAccountsResponseError(r, n);
          if (l.success)
            return { name: "GetLinkedAccountsResponseError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetLinkedAccounts", {
              Success: a,
              Forbidden: i,
              Error: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetLinkedAccountsRPC = e;
  },
  98,
);
