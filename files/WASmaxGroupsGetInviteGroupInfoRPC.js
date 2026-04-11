__d(
  "WASmaxGroupsGetInviteGroupInfoRPC",
  [
    "WAComms",
    "WASmaxInGroupsGetInviteGroupInfoResponseClientError",
    "WASmaxInGroupsGetInviteGroupInfoResponseServerError",
    "WASmaxInGroupsGetInviteGroupInfoResponseSuccess",
    "WASmaxOutGroupsGetInviteGroupInfoRequest",
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
              "WASmaxOutGroupsGetInviteGroupInfoRequest",
            ).makeGetInviteGroupInfoRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsGetInviteGroupInfoResponseSuccess",
            ).parseGetInviteGroupInfoResponseSuccess(r, n);
          if (a.success)
            return {
              name: "GetInviteGroupInfoResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInGroupsGetInviteGroupInfoResponseClientError",
          ).parseGetInviteGroupInfoResponseClientError(r, n);
          if (i.success)
            return {
              name: "GetInviteGroupInfoResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInGroupsGetInviteGroupInfoResponseServerError",
          ).parseGetInviteGroupInfoResponseServerError(r, n);
          if (l.success)
            return {
              name: "GetInviteGroupInfoResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetInviteGroupInfo", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetInviteGroupInfoRPC = e;
  },
  98,
);
