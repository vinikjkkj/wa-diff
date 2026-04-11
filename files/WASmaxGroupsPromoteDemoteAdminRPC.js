__d(
  "WASmaxGroupsPromoteDemoteAdminRPC",
  [
    "WAComms",
    "WASmaxInGroupsPromoteDemoteAdminResponseClientError",
    "WASmaxInGroupsPromoteDemoteAdminResponseServerError",
    "WASmaxInGroupsPromoteDemoteAdminResponseSuccessMultiAdmin",
    "WASmaxOutGroupsPromoteDemoteAdminRequest",
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
              "WASmaxOutGroupsPromoteDemoteAdminRequest",
            ).makePromoteDemoteAdminRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsPromoteDemoteAdminResponseSuccessMultiAdmin",
            ).parsePromoteDemoteAdminResponseSuccessMultiAdmin(r, n);
          if (a.success)
            return {
              name: "PromoteDemoteAdminResponseSuccessMultiAdmin",
              value: a.value,
            };
          var i = o(
            "WASmaxInGroupsPromoteDemoteAdminResponseClientError",
          ).parsePromoteDemoteAdminResponseClientError(r, n);
          if (i.success)
            return {
              name: "PromoteDemoteAdminResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInGroupsPromoteDemoteAdminResponseServerError",
          ).parsePromoteDemoteAdminResponseServerError(r, n);
          if (l.success)
            return {
              name: "PromoteDemoteAdminResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("PromoteDemoteAdmin", {
              SuccessMultiAdmin: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendPromoteDemoteAdminRPC = e;
  },
  98,
);
