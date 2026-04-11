__d(
  "WAWebMediaPlaybackEventPersistentQueue",
  [
    "WALogger",
    "WAWebCRUDOperationsMediaPlaybackEvent",
    "WAWebPromiseQueue",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (o("WAWebPromiseQueue").PromiseQueue)(),
      u = 200,
      c = r("lodash").throttle(function (e) {
        return d(e);
      }, u);
    function d(t) {
      return s.enqueue(function () {
        var n = t.consume();
        if (n.length !== 0)
          return o("WAWebCRUDOperationsMediaPlaybackEvent")
            .addEvents(n)
            .then(function () {})
            .catch(function (r) {
              (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[MediaPlaybackEventPersistentQueue] write failed",
                    ])),
                )
                .sendLogs("media-playback-event-persistent-queue-write-failed"),
                t.write(n));
            });
      });
    }
    ((l.writePromiseQueue = s),
      (l.WRITE_THROTTLE_INTERVAL = u),
      (l.addToQueue = c));
  },
  98,
);
