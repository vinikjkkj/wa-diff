__d(
  "WASmaxGroupsDeleteParentGroupRPC",
  [
    "WAComms",
    "WASmaxInGroupsDeleteParentGroupResponseClientError",
    "WASmaxInGroupsDeleteParentGroupResponseServerError",
    "WASmaxInGroupsDeleteParentGroupResponseSuccess",
    "WASmaxOutGroupsDeleteParentGroupRequest",
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
              "WASmaxOutGroupsDeleteParentGroupRequest",
            ).makeDeleteParentGroupRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsDeleteParentGroupResponseSuccess",
            ).parseDeleteParentGroupResponseSuccess(r, n);
          if (a.success)
            return { name: "DeleteParentGroupResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInGroupsDeleteParentGroupResponseClientError",
          ).parseDeleteParentGroupResponseClientError(r, n);
          if (i.success)
            return {
              name: "DeleteParentGroupResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInGroupsDeleteParentGroupResponseServerError",
          ).parseDeleteParentGroupResponseServerError(r, n);
          if (l.success)
            return {
              name: "DeleteParentGroupResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("DeleteParentGroup", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendDeleteParentGroupRPC = e;
  },
  98,
);
