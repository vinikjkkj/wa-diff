__d(
  "WAWebBizToolsUtils",
  [
    "WAWebBizToolsSessionModel",
    "WAWebBusinessToolsClickWamEvent",
    "WAWebBusinessToolsEntryWamEvent",
    "WAWebBusinessToolsImpressionWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      new (o("WAWebBusinessToolsEntryWamEvent").BusinessToolsEntryWamEvent)({
        businessToolsEntryPoint: e,
        businessToolsSequenceNumber: o(
          "WAWebBizToolsSessionModel",
        ).getSequence(),
        businessToolsSessionId: o("WAWebBizToolsSessionModel").getSession(),
      }).commit();
    }
    function s(e) {
      new (o(
        "WAWebBusinessToolsImpressionWamEvent",
      ).BusinessToolsImpressionWamEvent)({
        businessToolsEntryPoint: e,
        businessToolsSequenceNumber: o(
          "WAWebBizToolsSessionModel",
        ).getSequence(),
        businessToolsSessionId: o("WAWebBizToolsSessionModel").getSession(),
      }).commit();
    }
    function u(e, t) {
      new (o("WAWebBusinessToolsClickWamEvent").BusinessToolsClickWamEvent)({
        businessToolsEntryPoint: e,
        businessToolsItem: t,
        businessToolsSequenceNumber: o(
          "WAWebBizToolsSessionModel",
        ).getSequence(),
        businessToolsSessionId: o("WAWebBizToolsSessionModel").getSession(),
      }).commit();
    }
    ((l.logBizToolsEntry = e),
      (l.logBizToolsImpression = s),
      (l.logBizToolsClick = u));
  },
  98,
);
