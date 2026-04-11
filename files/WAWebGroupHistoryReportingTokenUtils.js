__d(
  "WAWebGroupHistoryReportingTokenUtils",
  ["WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e.length === 0) return null;
      var t = e.map(function (e) {
        if (e.reportingToken != null && e.version != null) {
          var t;
          return (t = o("WAWap")).wap(
            "message",
            { id: t.CUSTOM_STRING(e.stanzaId) },
            t.wap(
              "reporting_token",
              { v: t.CUSTOM_STRING(String(e.version)) },
              e.reportingToken,
            ),
          );
        }
        return o("WAWap").wap("message", {
          id: o("WAWap").CUSTOM_STRING(e.stanzaId),
        });
      });
      return o("WAWap").wap("reporting", null, t);
    }
    l.buildGroupHistoryReportingMessageStanza = e;
  },
  98,
);
