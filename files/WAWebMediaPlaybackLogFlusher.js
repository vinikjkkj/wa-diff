__d(
  "WAWebMediaPlaybackLogFlusher",
  [
    "WAWebCrashlog",
    "WAWebMediaPlaybackEventLogger",
    "WAWebNewsletterGatingUtils",
    "WAWebPsChannelsSnaplEventWamEvent",
    "WAWebStatusGatingUtils",
    "WAWebWamEnumMessageType",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.flushLogs = function (t) {
          var e = this.$1.consumeLoggerEvents(),
            n = e;
          if (
            ((o("WAWebNewsletterGatingUtils").isCometVideoPlayerEnabled() ||
              o("WAWebStatusGatingUtils").isStatusCometVideoPlayerEnabled()) &&
              (n = e.filter(function (e) {
                return e.required_metadata.persistent_id != null;
              })),
            n.length !== 0)
          )
            switch (this.$2) {
              case o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL:
                n.forEach(function (e) {
                  new (o(
                    "WAWebPsChannelsSnaplEventWamEvent",
                  ).PsChannelsSnaplEventWamEvent)({
                    appId: 0x97e965c4439a,
                    videoEventJson: JSON.stringify({
                      events: e.events,
                      required_metadata: e.required_metadata,
                    }),
                  }).commit();
                });
                break;
              case o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS:
                n.forEach(function (e) {
                  o(
                    "WAWebMediaPlaybackEventLogger",
                  ).MediaPlaybackEventLogger.log(e);
                });
                break;
              default:
                throw (
                  o("WAWebCrashlog").upload({ reason: "invalid video origin" }),
                  r("err")("Invalid video origin")
                );
            }
        }),
        (t.discardLogsWithoutFlushing = function () {
          var e = this.$1.consumeLoggerEvents();
        }),
        e
      );
    })();
    l.WhatsAppMediaPlaybackLogFlusher = e;
  },
  98,
);
