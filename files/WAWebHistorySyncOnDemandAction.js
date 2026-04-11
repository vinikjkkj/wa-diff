__d(
  "WAWebHistorySyncOnDemandAction",
  ["WAWebHistorySyncOnDemandEvents"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o(
        "WAWebHistorySyncOnDemandEvents",
      ).WAWebHistorySyncOnDemandEvents.triggerSuccessHistorySyncOd(e);
    }
    function s(e) {
      o(
        "WAWebHistorySyncOnDemandEvents",
      ).WAWebHistorySyncOnDemandEvents.triggerErrorHistorySyncOd(e);
    }
    ((l.successHistorySyncOd = e), (l.errorHistorySyncOd = s));
  },
  98,
);
