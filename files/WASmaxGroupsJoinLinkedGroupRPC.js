__d(
  "WASmaxGroupsJoinLinkedGroupRPC",
  [
    "WAComms",
    "WASmaxInGroupsJoinLinkedGroupResponseClientError",
    "WASmaxInGroupsJoinLinkedGroupResponseGroupJoinRequestSuccess",
    "WASmaxInGroupsJoinLinkedGroupResponseServerError",
    "WASmaxInGroupsJoinLinkedGroupResponseSuccess",
    "WASmaxOutGroupsJoinLinkedGroupRequest",
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
              "WASmaxOutGroupsJoinLinkedGroupRequest",
            ).makeJoinLinkedGroupRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsJoinLinkedGroupResponseGroupJoinRequestSuccess",
            ).parseJoinLinkedGroupResponseGroupJoinRequestSuccess(r, n);
          if (a.success)
            return {
              name: "JoinLinkedGroupResponseGroupJoinRequestSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInGroupsJoinLinkedGroupResponseSuccess",
          ).parseJoinLinkedGroupResponseSuccess(r, n);
          if (i.success)
            return { name: "JoinLinkedGroupResponseSuccess", value: i.value };
          var l = o(
            "WASmaxInGroupsJoinLinkedGroupResponseClientError",
          ).parseJoinLinkedGroupResponseClientError(r, n);
          if (l.success)
            return {
              name: "JoinLinkedGroupResponseClientError",
              value: l.value,
            };
          var s = o(
            "WASmaxInGroupsJoinLinkedGroupResponseServerError",
          ).parseJoinLinkedGroupResponseServerError(r, n);
          if (s.success)
            return {
              name: "JoinLinkedGroupResponseServerError",
              value: s.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("JoinLinkedGroup", {
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
    l.sendJoinLinkedGroupRPC = e;
  },
  98,
);
