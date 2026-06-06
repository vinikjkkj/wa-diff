__d(
  "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
  [
    "WAComms",
    "WASmaxInUserNoticeGetDisclosureStageByIdsResponseClientError",
    "WASmaxInUserNoticeGetDisclosureStageByIdsResponseClientSuccess",
    "WASmaxInUserNoticeGetDisclosureStageByIdsResponseServerError",
    "WASmaxOutUserNoticeGetDisclosureStageByIdsRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutUserNoticeGetDisclosureStageByIdsRequest",
        ).makeGetDisclosureStageByIdsRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInUserNoticeGetDisclosureStageByIdsResponseClientSuccess",
        ).parseGetDisclosureStageByIdsResponseClientSuccess(r, n);
      if (a.success)
        return {
          name: "GetDisclosureStageByIdsResponseClientSuccess",
          value: a.value,
        };
      var i = o(
        "WASmaxInUserNoticeGetDisclosureStageByIdsResponseClientError",
      ).parseGetDisclosureStageByIdsResponseClientError(r, n);
      if (i.success)
        return {
          name: "GetDisclosureStageByIdsResponseClientError",
          value: i.value,
        };
      var l = o(
        "WASmaxInUserNoticeGetDisclosureStageByIdsResponseServerError",
      ).parseGetDisclosureStageByIdsResponseServerError(r, n);
      if (l.success)
        return {
          name: "GetDisclosureStageByIdsResponseServerError",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetDisclosureStageByIds", {
          ClientSuccess: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendGetDisclosureStageByIdsRPC = e;
  },
  98,
);
