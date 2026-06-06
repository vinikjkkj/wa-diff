__d(
  "WASmaxProfilePictureGetRPC",
  [
    "WAComms",
    "WASmaxInProfilePictureGetResponseError",
    "WASmaxInProfilePictureGetResponseSuccessAvatarURLs",
    "WASmaxInProfilePictureGetResponseSuccessNoData",
    "WASmaxInProfilePictureGetResponseSuccessPictureBlob",
    "WASmaxInProfilePictureGetResponseSuccessPictureURL",
    "WASmaxOutProfilePictureGetRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutProfilePictureGetRequest").makeGetRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInProfilePictureGetResponseSuccessPictureURL",
        ).parseGetResponseSuccessPictureURL(r, n);
      if (a.success)
        return { name: "GetResponseSuccessPictureURL", value: a.value };
      var i = o(
        "WASmaxInProfilePictureGetResponseSuccessAvatarURLs",
      ).parseGetResponseSuccessAvatarURLs(r, n);
      if (i.success)
        return { name: "GetResponseSuccessAvatarURLs", value: i.value };
      var l = o(
        "WASmaxInProfilePictureGetResponseSuccessPictureBlob",
      ).parseGetResponseSuccessPictureBlob(r, n);
      if (l.success)
        return { name: "GetResponseSuccessPictureBlob", value: l.value };
      var s = o(
        "WASmaxInProfilePictureGetResponseSuccessNoData",
      ).parseGetResponseSuccessNoData(r, n);
      if (s.success)
        return { name: "GetResponseSuccessNoData", value: s.value };
      var u = o("WASmaxInProfilePictureGetResponseError").parseGetResponseError(
        r,
        n,
      );
      if (u.success) return { name: "GetResponseError", value: u.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Get", {
          SuccessPictureURL: a,
          SuccessAvatarURLs: i,
          SuccessPictureBlob: l,
          SuccessNoData: s,
          Error: u,
        }),
      );
    }
    l.sendGetRPC = e;
  },
  98,
);
