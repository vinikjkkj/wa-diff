__d(
  "oz-player/media_source/OzMSESourceBufferImpl",
  [
    "oz-player/shims/OzDOMEventListener",
    "oz-player/utils/OzErrorUtils",
    "oz-player/utils/OzMimeUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r) {
        ((this.$1 = e), (this.$2 = n), (this.$3 = t), (this.$4 = r));
      }
      var t = e.prototype;
      return (
        (t.registerOnUpdateStartListener = function (t) {
          return r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            this.$1,
            "updatestart",
            t,
          );
        }),
        (t.registerOnUpdateEndListener = function (t) {
          return r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            this.$1,
            "updateend",
            t,
          );
        }),
        (t.registerOnUpdateListener = function (t) {
          return r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            this.$1,
            "update",
            t,
          );
        }),
        (t.registerOnErrorListener = function (t) {
          return r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
            this.$1,
            "error",
            t,
          );
        }),
        (t.getIsUpdating = function () {
          return this.$1.updating;
        }),
        (t.getBuffered = function () {
          return this.$1.buffered;
        }),
        (t.setAppendWindowEnd = function (t) {
          this.$1.appendWindowEnd = t;
        }),
        (t.appendBuffer = function (t, n) {
          var e,
            r =
              (e = o("oz-player/utils/OzMimeUtil")).getMimeType(n) !==
              e.getMimeType(this.$3),
            a = e.getContainerType(n) !== e.getContainerType(this.$3),
            i = e.getParsedCodecFamily(n) !== e.getParsedCodecFamily(this.$3);
          if (r || a || i)
            if (this.$4) {
              try {
                this.$1.changeType(n);
              } catch (e) {
                throw o("oz-player/utils/OzErrorUtils").createOzError({
                  description:
                    'SourceBufferChangeTypeError: Failed to changeType("' +
                    n +
                    '"): ' +
                    String(e) +
                    " current MIME Codecs: " +
                    this.$3,
                  type: "OZ_SOURCE_BUFFER_CHANGE_TYPE",
                });
              }
              this.$3 = n;
            } else
              throw o("oz-player/utils/OzErrorUtils").createOzError({
                description:
                  "SourceBufferChangeTypeError: attempted to call changeType() on a SourceBuffer that does not support it.",
                type: "OZ_SOURCE_BUFFER_CHANGE_TYPE_UNAVAILABLE",
              });
          this.$1.appendBuffer(t);
        }),
        (t.abort = function () {
          this.$1.abort();
        }),
        (t.remove = function (t, n) {
          this.$1.remove(t, n);
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
