__d(
  "WASmaxGroupsGetReportedMessagesRPC",
  [
    "WAComms",
    "WASmaxInGroupsGetReportedMessagesResponseClientError",
    "WASmaxInGroupsGetReportedMessagesResponseServerError",
    "WASmaxInGroupsGetReportedMessagesResponseSuccess",
    "WASmaxOutGroupsGetReportedMessagesRequest",
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
              "WASmaxOutGroupsGetReportedMessagesRequest",
            ).makeGetReportedMessagesRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInGroupsGetReportedMessagesResponseSuccess",
            ).parseGetReportedMessagesResponseSuccess(r, n);
          if (a.success)
            return {
              name: "GetReportedMessagesResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInGroupsGetReportedMessagesResponseClientError",
          ).parseGetReportedMessagesResponseClientError(r, n);
          if (i.success)
            return {
              name: "GetReportedMessagesResponseClientError",
              value: i.value,
            };
          var l = o(
            "WASmaxInGroupsGetReportedMessagesResponseServerError",
          ).parseGetReportedMessagesResponseServerError(r, n);
          if (l.success)
            return {
              name: "GetReportedMessagesResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetReportedMessages", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetReportedMessagesRPC = e;
  },
  98,
);
