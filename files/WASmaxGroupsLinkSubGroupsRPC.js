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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutGroupsLinkSubGroupsRequest").makeLinkSubGroupsRequest(
          e,
        ),
        r = await o("WAComms").sendSmaxStanza(n, t),
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
    }
    l.sendLinkSubGroupsRPC = e;
  },
  98,
);
