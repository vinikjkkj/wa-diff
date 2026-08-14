__d(
  "WASmaxStatusPublishPostBroadcastStatusRPC",
  [
    "WAComms",
    "WASmaxInStatusPublishPostBroadcastStatusResponseNegative",
    "WASmaxInStatusPublishPostBroadcastStatusResponseSuccess",
    "WASmaxOutStatusPublishPostBroadcastStatusRequest",
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
              "WASmaxOutStatusPublishPostBroadcastStatusRequest",
            ).makePostBroadcastStatusRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInStatusPublishPostBroadcastStatusResponseNegative",
            ).parsePostBroadcastStatusResponseNegative(r, n);
          if (a.success)
            return {
              name: "PostBroadcastStatusResponseNegative",
              value: a.value,
            };
          var i = o(
            "WASmaxInStatusPublishPostBroadcastStatusResponseSuccess",
          ).parsePostBroadcastStatusResponseSuccess(r, n);
          if (i.success)
            return {
              name: "PostBroadcastStatusResponseSuccess",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("PostBroadcastStatus", {
              Negative: a,
              Success: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendPostBroadcastStatusRPC = e;
  },
  98,
);
