__d(
  "WASmaxGroupsAcceptGroupAddRPC",
  [
    "WAComms",
    "WASmaxInGroupsAcceptGroupAddResponseClientError",
    "WASmaxInGroupsAcceptGroupAddResponseGroupJoinRequestSuccess",
    "WASmaxInGroupsAcceptGroupAddResponseServerError",
    "WASmaxInGroupsAcceptGroupAddResponseSuccess",
    "WASmaxOutGroupsAcceptGroupAddRequest",
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
              "WASmaxOutGroupsAcceptGroupAddRequest",
            ).makeAcceptGroupAddRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsAcceptGroupAddResponseGroupJoinRequestSuccess",
            ).parseAcceptGroupAddResponseGroupJoinRequestSuccess(r, n);
          if (a.success)
            return {
              name: "AcceptGroupAddResponseGroupJoinRequestSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInGroupsAcceptGroupAddResponseSuccess",
          ).parseAcceptGroupAddResponseSuccess(r, n);
          if (i.success)
            return { name: "AcceptGroupAddResponseSuccess", value: i.value };
          var l = o(
            "WASmaxInGroupsAcceptGroupAddResponseClientError",
          ).parseAcceptGroupAddResponseClientError(r, n);
          if (l.success)
            return {
              name: "AcceptGroupAddResponseClientError",
              value: l.value,
            };
          var s = o(
            "WASmaxInGroupsAcceptGroupAddResponseServerError",
          ).parseAcceptGroupAddResponseServerError(r, n);
          if (s.success)
            return {
              name: "AcceptGroupAddResponseServerError",
              value: s.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("AcceptGroupAdd", {
              GroupJoinRequestSuccess: a,
              Success: i,
              ClientError: l,
              ServerError: s,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendAcceptGroupAddRPC = e;
  },
  98,
);
