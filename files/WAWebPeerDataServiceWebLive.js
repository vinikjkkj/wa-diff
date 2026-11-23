__d(
  "WAWebPeerDataServiceWebLive",
  ["JSResourceForInteraction", "WAWebPeerDataService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebSendNonMessageDataRequest",
      ).__setRef("WAWebPeerDataServiceWebLive"),
      s = o("WAWebPeerDataService").PeerDataService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return e.load();
          }),
          n = t.sendPeerDataOperationRequest,
          r = {
            sendPeerDataOperationRequest: function (t, r, a) {
              return o("WebDi.Async").fromPromise(function () {
                return n(t, r, a);
              });
            },
          };
        return r;
      });
    l.PeerDataServiceWebLive = s;
  },
  98,
);
