__d(
  "WASmaxGroupsGetLinkedGroupRPC",
  [
    "WAComms",
    "WASmaxInGroupsGetLinkedGroupResponseClientError",
    "WASmaxInGroupsGetLinkedGroupResponseServerError",
    "WASmaxInGroupsGetLinkedGroupResponseSuccess",
    "WASmaxOutGroupsGetLinkedGroupRequest",
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
              "WASmaxOutGroupsGetLinkedGroupRequest",
            ).makeGetLinkedGroupRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsGetLinkedGroupResponseSuccess",
            ).parseGetLinkedGroupResponseSuccess(r, n);
          if (a.success)
            return { name: "GetLinkedGroupResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInGroupsGetLinkedGroupResponseClientError",
          ).parseGetLinkedGroupResponseClientError(r, n);
          if (i.success)
            return {
              name: "GetLinkedGroupResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInGroupsGetLinkedGroupResponseServerError",
          ).parseGetLinkedGroupResponseServerError(r, n);
          if (l.success)
            return {
              name: "GetLinkedGroupResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetLinkedGroup", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetLinkedGroupRPC = e;
  },
  98,
);
