__d(
  "WASmaxGroupsGetGroupProfilePicturesRPC",
  [
    "WAComms",
    "WASmaxInGroupsGetGroupProfilePicturesResponseClientError",
    "WASmaxInGroupsGetGroupProfilePicturesResponseServerError",
    "WASmaxInGroupsGetGroupProfilePicturesResponseSuccessGroupPictures",
    "WASmaxOutGroupsGetGroupProfilePicturesRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutGroupsGetGroupProfilePicturesRequest",
        ).makeGetGroupProfilePicturesRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInGroupsGetGroupProfilePicturesResponseSuccessGroupPictures",
        ).parseGetGroupProfilePicturesResponseSuccessGroupPictures(r, n);
      if (a.success)
        return {
          name: "GetGroupProfilePicturesResponseSuccessGroupPictures",
          value: a.value,
        };
      var i = o(
        "WASmaxInGroupsGetGroupProfilePicturesResponseClientError",
      ).parseGetGroupProfilePicturesResponseClientError(r, n);
      if (i.success)
        return {
          name: "GetGroupProfilePicturesResponseClientError",
          value: i.value,
        };
      var l = o(
        "WASmaxInGroupsGetGroupProfilePicturesResponseServerError",
      ).parseGetGroupProfilePicturesResponseServerError(r, n);
      if (l.success)
        return {
          name: "GetGroupProfilePicturesResponseServerError",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetGroupProfilePictures", {
          SuccessGroupPictures: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    l.sendGetGroupProfilePicturesRPC = e;
  },
  98,
);
