__d(
  "WAWebGalaxyFlowBridgeApi",
  ["WAWebGalaxyFlowDownloadTracker"],
  function (t, n, r, o, a, i, l) {
    var e = {
      failGalaxyFlowDownloadRequest: function (t) {
        var e = t.requestId;
        if (e != null) {
          o(
            "WAWebGalaxyFlowDownloadTracker",
          ).GalaxyFlowDownloadTracker.failRequest(e);
          return;
        }
        o(
          "WAWebGalaxyFlowDownloadTracker",
        ).GalaxyFlowDownloadTracker.failAllRequests();
      },
      resolveGalaxyFlowDownloadRequest: function (t) {
        var e = t.requestId;
        o(
          "WAWebGalaxyFlowDownloadTracker",
        ).GalaxyFlowDownloadTracker.resolveRequest(e);
      },
    };
    l.GalaxyFlowBridgeApi = e;
  },
  98,
);
