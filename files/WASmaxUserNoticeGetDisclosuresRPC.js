__d(
  "WASmaxUserNoticeGetDisclosuresRPC",
  [
    "WAComms",
    "WASmaxInUserNoticeGetDisclosuresResponseClientError",
    "WASmaxInUserNoticeGetDisclosuresResponseClientSuccess",
    "WASmaxInUserNoticeGetDisclosuresResponseServerError",
    "WASmaxOutUserNoticeGetDisclosuresRequest",
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
              "WASmaxOutUserNoticeGetDisclosuresRequest",
            ).makeGetDisclosuresRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInUserNoticeGetDisclosuresResponseClientSuccess",
            ).parseGetDisclosuresResponseClientSuccess(r, n);
          if (a.success)
            return {
              name: "GetDisclosuresResponseClientSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInUserNoticeGetDisclosuresResponseClientError",
          ).parseGetDisclosuresResponseClientError(r, n);
          if (i.success)
            return {
              name: "GetDisclosuresResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInUserNoticeGetDisclosuresResponseServerError",
          ).parseGetDisclosuresResponseServerError(r, n);
          if (l.success)
            return {
              name: "GetDisclosuresResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetDisclosures", {
              ClientSuccess: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetDisclosuresRPC = e;
  },
  98,
);
