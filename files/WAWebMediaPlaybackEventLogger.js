__d(
  "WAWebMediaPlaybackEventLogger",
  [
    "WALogger",
    "WAWebMediaPlaybackEventLoggerCache",
    "WAWebMediaPlaybackEventPersistentQueue",
    "WAWebMediaPlaybackEventUploader",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          this.$1 = e;
        }
        var n = t.prototype;
        return (
          (n.log = function (t) {
            (this.$1.write(t), this.$2());
          }),
          (n.$2 = function () {
            o("WAWebMediaPlaybackEventPersistentQueue")
              .addToQueue(this.$1)
              .then(o("WAWebMediaPlaybackEventUploader").requestUpload)
              .catch(function (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[MediaPlaybackEventLogger] Failed to flush logs",
                      ])),
                  )
                  .sendLogs("media-playback-event-logger-flush-failed");
              });
          }),
          t
        );
      })(),
      u = new s(
        new (o(
          "WAWebMediaPlaybackEventLoggerCache",
        ).MediaPlaybackEventLoggerCache)(),
      );
    ((l.MediaPlaybackEventLoggerImpl = s), (l.MediaPlaybackEventLogger = u));
  },
  98,
);
