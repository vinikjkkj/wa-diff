__d(
  "WASmaxGroupsSetDescriptionRPC",
  [
    "WAComms",
    "WASmaxInGroupsSetDescriptionResponseClientError",
    "WASmaxInGroupsSetDescriptionResponseServerError",
    "WASmaxInGroupsSetDescriptionResponseSuccess",
    "WASmaxOutGroupsSetDescriptionRequest",
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
              "WASmaxOutGroupsSetDescriptionRequest",
            ).makeSetDescriptionRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsSetDescriptionResponseSuccess",
            ).parseSetDescriptionResponseSuccess(r, n);
          if (a.success)
            return { name: "SetDescriptionResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInGroupsSetDescriptionResponseClientError",
          ).parseSetDescriptionResponseClientError(r, n);
          if (i.success)
            return {
              name: "SetDescriptionResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInGroupsSetDescriptionResponseServerError",
          ).parseSetDescriptionResponseServerError(r, n);
          if (l.success)
            return {
              name: "SetDescriptionResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SetDescription", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSetDescriptionRPC = e;
  },
  98,
);
