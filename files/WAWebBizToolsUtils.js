__d(
  "WAWebBizToolsUtils",
  [
    "WAWebBizToolsSessionModel",
    "WAWebBusinessToolsClickWamEvent",
    "WAWebBusinessToolsEntryWamEvent",
    "WAWebBusinessToolsImpressionWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        new (o("WAWebBusinessToolsEntryWamEvent").BusinessToolsEntryWamEvent)({
          businessToolsEntryPoint: t,
          businessToolsSequenceNumber: o(
            "WAWebBizToolsSessionModel",
          ).getSequence(),
          businessToolsSessionId: o("WAWebBizToolsSessionModel").getSession(),
        }).commit();
      },
      s = function (t) {
        new (o(
          "WAWebBusinessToolsImpressionWamEvent",
        ).BusinessToolsImpressionWamEvent)({
          businessToolsEntryPoint: t,
          businessToolsSequenceNumber: o(
            "WAWebBizToolsSessionModel",
          ).getSequence(),
          businessToolsSessionId: o("WAWebBizToolsSessionModel").getSession(),
        }).commit();
      },
      u = function (t, n) {
        new (o("WAWebBusinessToolsClickWamEvent").BusinessToolsClickWamEvent)({
          businessToolsEntryPoint: t,
          businessToolsItem: n,
          businessToolsSequenceNumber: o(
            "WAWebBizToolsSessionModel",
          ).getSequence(),
          businessToolsSessionId: o("WAWebBizToolsSessionModel").getSession(),
        }).commit();
      };
    ((l.logBizToolsEntry = e),
      (l.logBizToolsImpression = s),
      (l.logBizToolsClick = u));
  },
  98,
);
