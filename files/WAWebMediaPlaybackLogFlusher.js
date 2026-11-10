__d(
  "WAWebMediaPlaybackLogFlusher",
  [
    "WAWebCrashlog",
    "WAWebMediaPlaybackEventLogger",
    "WAWebPsChannelsSnaplEventWamEvent",
    "WAWebWamEnumMessageType",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 6e4,
      s = (function () {
        function t(e, t, n) {
          ((this.$1 = e), (this.$2 = t), (this.$3 = n));
        }
        var n = t.prototype;
        return (
          (n.flushLogs = function (t) {
            var e = this,
              n = this.$1.consumeLoggerEvents(),
              a = n
                .filter(function (e) {
                  return e.required_metadata.persistent_id != null;
                })
                .map(function (t) {
                  return babelHelpers.extends({}, t, {
                    events: e.$4(t.events),
                  });
                });
            if (a.length !== 0)
              switch (this.$2) {
                case o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL:
                  a.forEach(function (e) {
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
                case o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL:
                case o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP:
                case o("WAWebWamEnumMessageType").MESSAGE_TYPE.BROADCAST:
                  a.forEach(function (e) {
                    o(
                      "WAWebMediaPlaybackEventLogger",
                    ).MediaPlaybackEventLogger.log(e);
                  });
                  break;
                default:
                  throw (
                    o("WAWebCrashlog").upload({
                      reason: "invalid video origin",
                    }),
                    r("err")("Invalid video origin")
                  );
              }
          }),
          (n.$4 = function (n) {
            var t,
              r = this.$3,
              o = (t = n == null ? void 0 : n.findIndex(u)) != null ? t : -1;
            if (n == null || r == null || o === -1) return n;
            this.$3 = null;
            var a = Number(n[o].client_time_ms),
              i = Math.max(r, a - e);
            return i >= a
              ? n
              : n.map(function (e, t) {
                  return t === o
                    ? babelHelpers.extends({}, e, { client_time_ms: String(i) })
                    : e;
                });
          }),
          (n.discardLogsWithoutFlushing = function () {
            var e = this.$1.consumeLoggerEvents();
          }),
          t
        );
      })();
    function u(e) {
      return (
        e.event_name === "requested_playing" && e.start_state === "started"
      );
    }
    l.WhatsAppMediaPlaybackLogFlusher = s;
  },
  98,
);
