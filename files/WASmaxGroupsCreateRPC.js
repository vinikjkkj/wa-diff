__d(
  "WASmaxGroupsCreateRPC",
  [
    "WAComms",
    "WASmaxInGroupsCreateResponseClientError",
    "WASmaxInGroupsCreateResponseGroupAlreadyExists",
    "WASmaxInGroupsCreateResponseServerError",
    "WASmaxInGroupsCreateResponseSuccess",
    "WASmaxOutGroupsCreateRequest",
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
          var n = o("WASmaxOutGroupsCreateRequest").makeCreateRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsCreateResponseSuccess",
            ).parseCreateResponseSuccess(r, n);
          if (a.success)
            return { name: "CreateResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInGroupsCreateResponseGroupAlreadyExists",
          ).parseCreateResponseGroupAlreadyExists(r, n);
          if (i.success)
            return { name: "CreateResponseGroupAlreadyExists", value: i.value };
          var l = o(
            "WASmaxInGroupsCreateResponseClientError",
          ).parseCreateResponseClientError(r, n);
          if (l.success)
            return { name: "CreateResponseClientError", value: l.value };
          var s = o(
            "WASmaxInGroupsCreateResponseServerError",
          ).parseCreateResponseServerError(r, n);
          if (s.success)
            return { name: "CreateResponseServerError", value: s.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("Create", {
              Success: a,
              GroupAlreadyExists: i,
              ClientError: l,
              ServerError: s,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendCreateRPC = e;
  },
  98,
);
