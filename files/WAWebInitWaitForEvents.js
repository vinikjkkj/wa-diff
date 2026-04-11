__d(
  "WAWebInitWaitForEvents",
  ["WAWebEventsWaitForOfflineDeliveryEnd", "WAWebEventsWaitForReadyForOffline"],
  function (t, n, r, o, a, i, l) {
    function e() {
      (o("WAWebEventsWaitForReadyForOffline").initWaitForOfflineProcessReady(),
        o(
          "WAWebEventsWaitForOfflineDeliveryEnd",
        ).initWaitForOfflineDeliveryEnd());
    }
    l.initOfflineResumeWaitForEvents = e;
  },
  98,
);
