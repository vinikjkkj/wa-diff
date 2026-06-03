__d(
  "WASmaxGroupsGetGroupInfoRPC",
  [
    "WAComms",
    "WASmaxInGroupsGetGroupInfoResponseClientError",
    "WASmaxInGroupsGetGroupInfoResponseServerError",
    "WASmaxInGroupsGetGroupInfoResponseSuccess",
    "WASmaxOutGroupsGetGroupInfoRequest",
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
              "WASmaxOutGroupsGetGroupInfoRequest",
            ).makeGetGroupInfoRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsGetGroupInfoResponseSuccess",
            ).parseGetGroupInfoResponseSuccess(r, n);
          if (a.success)
            return { name: "GetGroupInfoResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInGroupsGetGroupInfoResponseClientError",
          ).parseGetGroupInfoResponseClientError(r, n);
          if (i.success)
            return { name: "GetGroupInfoResponseClientError", value: i.value };
          var l = o(
            "WASmaxInGroupsGetGroupInfoResponseServerError",
          ).parseGetGroupInfoResponseServerError(r, n);
          if (l.success)
            return { name: "GetGroupInfoResponseServerError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetGroupInfo", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetGroupInfoRPC = e;
  },
  98,
);
