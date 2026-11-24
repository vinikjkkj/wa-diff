__d(
  "WAWebPeerDataServiceWebLive",
  ["WAWebPeerDataService", "WAWebSendNonMessageDataRequest", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebPeerDataService").PeerDataService.make(function* () {
      var e = {
        sendPeerDataOperationRequest: function (t, n, r) {
          return o("WebDi.Async").fromPromise(function () {
            return o(
              "WAWebSendNonMessageDataRequest",
            ).sendPeerDataOperationRequest(t, n, r);
          });
        },
      };
      return e;
    });
    l.PeerDataServiceWebLive = e;
  },
  98,
);
