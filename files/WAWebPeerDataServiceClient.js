__d(
  "WAWebPeerDataServiceClient",
  ["WAWebPeerDataService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        sendPeerDataOperationRequest: function (n, r, a) {
          return e(o("WAWebPeerDataService").PeerDataService, function (e) {
            return e.sendPeerDataOperationRequest(n, r, a);
          });
        },
      };
    }
    l.peerDataServiceClient = e;
  },
  98,
);
