__d(
  "WASmaxGroupsUnlinkGroupsRPC",
  [
    "WAComms",
    "WASmaxInGroupsUnlinkGroupsResponseClientError",
    "WASmaxInGroupsUnlinkGroupsResponseServerError",
    "WASmaxInGroupsUnlinkGroupsResponseSuccess",
    "WASmaxOutGroupsUnlinkGroupsRequest",
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
              "WASmaxOutGroupsUnlinkGroupsRequest",
            ).makeUnlinkGroupsRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsUnlinkGroupsResponseSuccess",
            ).parseUnlinkGroupsResponseSuccess(r, n);
          if (a.success)
            return { name: "UnlinkGroupsResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInGroupsUnlinkGroupsResponseClientError",
          ).parseUnlinkGroupsResponseClientError(r, n);
          if (i.success)
            return { name: "UnlinkGroupsResponseClientError", value: i.value };
          var l = o(
            "WASmaxInGroupsUnlinkGroupsResponseServerError",
          ).parseUnlinkGroupsResponseServerError(r, n);
          if (l.success)
            return { name: "UnlinkGroupsResponseServerError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("UnlinkGroups", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendUnlinkGroupsRPC = e;
  },
  98,
);
