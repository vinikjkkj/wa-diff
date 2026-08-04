__d(
  "WAWebVoipReportCallJob",
  [
    "WASmaxSpamIndividualReportRPC",
    "WAStanzaUtils",
    "WAWebParseReportResponse",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = [
          {
            callTo: o("WAWebWidToJid").widToUserJid(e.reporterWid),
            callFrom: o("WAWebWidToJid").widToUserJid(e.callFromWid),
            callId: o("WAStanzaUtils").toStanzaId(e.callId),
            callInfoDuration: e.callDurationSeconds * 1e3,
            callInfoMediatype: e.mediaType,
            callInfoStartTime: e.callStartTimeSeconds,
          },
        ],
        n = {
          spamListSpamFlow: e.spamFlow,
          spamListJid: o("WAWebWidToJid").widToUserJid(e.reportedWid),
          callArgs: t,
          messageArgs: [],
        };
      return o("WASmaxSpamIndividualReportRPC")
        .sendIndividualReportRPC(n)
        .then(o("WAWebParseReportResponse").parseIndividualReportResponse);
    }
    l.reportVoipCall = e;
  },
  98,
);
