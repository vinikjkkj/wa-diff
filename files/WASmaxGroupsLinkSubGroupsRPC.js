__d(
  "WASmaxGroupsLinkSubGroupsRPC",
  [
    "WAComms",
    "WASmaxInGroupsLinkSubGroupsResponseClientError",
    "WASmaxInGroupsLinkSubGroupsResponseServerError",
    "WASmaxInGroupsLinkSubGroupsResponseSuccess",
    "WASmaxOutGroupsLinkSubGroupsRequest",
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
              "WASmaxOutGroupsLinkSubGroupsRequest",
            ).makeLinkSubGroupsRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsLinkSubGroupsResponseSuccess",
            ).parseLinkSubGroupsResponseSuccess(r, n);
          if (a.success)
            return { name: "LinkSubGroupsResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInGroupsLinkSubGroupsResponseClientError",
          ).parseLinkSubGroupsResponseClientError(r, n);
          if (i.success)
            return { name: "LinkSubGroupsResponseClientError", value: i.value };
          var l = o(
            "WASmaxInGroupsLinkSubGroupsResponseServerError",
          ).parseLinkSubGroupsResponseServerError(r, n);
          if (l.success)
            return { name: "LinkSubGroupsResponseServerError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("LinkSubGroups", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendLinkSubGroupsRPC = e;
  },
  98,
);
