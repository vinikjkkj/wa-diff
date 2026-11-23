__d(
  "WAWebSharableEventReportJob",
  ["WASmaxSpamEventReportRPC", "err"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o("WASmaxSpamEventReportRPC").sendEventReportRPC({
        spamListEventId: e,
        spamListSpamFlow: "event_info_report",
      });
      if (t.name !== "EventReportResponseSuccess")
        throw r("err")("Event report was not accepted");
    }
    l.reportSharableEvent = e;
  },
  98,
);
