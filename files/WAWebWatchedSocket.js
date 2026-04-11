__d(
  "WAWebWatchedSocket",
  [
    "WAAbortError",
    "WABinary",
    "WASocketTransport",
    "WAWebEventsWaitForOffline",
    "WAWebNoop",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t) || this),
          (n.dataToSend = new (o("WABinary").Binary)()),
          (n.wsUrl = t.url),
          (n.$WatchedSocket$p_2 = new AbortController()),
          (n.$WatchedSocket$p_1 = r("WAWebEventsWaitForOffline")(
            n.$WatchedSocket$p_2.signal,
          )
            .then(function () {
              return n.close();
            })
            .catch(o("WAAbortError").catchAbort(r("WAWebNoop")))),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WASocketTransport").WebSocketTransport);
    l.WatchedSocket = e;
  },
  98,
);
