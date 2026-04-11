__d(
  "WASmaxSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckoutRPC",
  [
    "WAComms",
    "WASmaxInSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckoutResponseError",
    "WASmaxInSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckoutResponseSuccess",
    "WASmaxOutSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckoutRequest",
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
              "WASmaxOutSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckoutRequest",
            ).makeGetSMBMeteredMessagingCheckoutRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckoutResponseSuccess",
            ).parseGetSMBMeteredMessagingCheckoutResponseSuccess(r, n);
          if (a.success)
            return {
              name: "GetSMBMeteredMessagingCheckoutResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInSmbMeteredMessagingAccountGetSMBMeteredMessagingCheckoutResponseError",
          ).parseGetSMBMeteredMessagingCheckoutResponseError(r, n);
          if (i.success)
            return {
              name: "GetSMBMeteredMessagingCheckoutResponseError",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetSMBMeteredMessagingCheckout",
              { Success: a, Error: i },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetSMBMeteredMessagingCheckoutRPC = e;
  },
  98,
);
