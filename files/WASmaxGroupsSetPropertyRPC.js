__d(
  "WASmaxGroupsSetPropertyRPC",
  [
    "WAComms",
    "WASmaxInGroupsSetPropertyResponseClientError",
    "WASmaxInGroupsSetPropertyResponseServerError",
    "WASmaxInGroupsSetPropertyResponseSuccess",
    "WASmaxOutGroupsSetPropertyRequest",
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
          var n = o("WASmaxOutGroupsSetPropertyRequest").makeSetPropertyRequest(
              e,
            ),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsSetPropertyResponseSuccess",
            ).parseSetPropertyResponseSuccess(r, n);
          if (a.success)
            return { name: "SetPropertyResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInGroupsSetPropertyResponseClientError",
          ).parseSetPropertyResponseClientError(r, n);
          if (i.success)
            return { name: "SetPropertyResponseClientError", value: i.value };
          var l = o(
            "WASmaxInGroupsSetPropertyResponseServerError",
          ).parseSetPropertyResponseServerError(r, n);
          if (l.success)
            return { name: "SetPropertyResponseServerError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SetProperty", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSetPropertyRPC = e;
  },
  98,
);
