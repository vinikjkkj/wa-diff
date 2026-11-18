__d(
  "WAWebSharableEventReportJob",
  ["WASmaxSpamEventReportRPC", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WASmaxSpamEventReportRPC").sendEventReportRPC({
            spamListEventId: e,
            spamListSpamFlow: "event_info_report",
          });
          if (t.name !== "EventReportResponseSuccess")
            throw r("err")("Event report was not accepted");
        })),
        s.apply(this, arguments)
      );
    }
    l.reportSharableEvent = e;
  },
  98,
);
