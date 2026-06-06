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
              "WASmaxOutGroupsGetGroupProfilePicturesRequest",
            ).makeGetGroupProfilePicturesRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
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
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetGroupProfilePictures",
              { SuccessGroupPictures: a, ClientError: i, ServerError: l },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetGroupProfilePicturesRPC = e;
  },
  98,
);
