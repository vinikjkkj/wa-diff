__d(
  "VideoPlayerBanzaiLogFlusher",
  ["ODS", "VideoPlayerWwwLogger", "emptyFunction", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("emptyFunction"),
      u = !1;
    r("gkx")("5551") &&
      ((u = !0),
      (s = function (t, n) {
        try {
          for (
            var e,
              r = arguments.length,
              o = new Array(r > 2 ? r - 2 : 0),
              a = 2;
            a < r;
            a++
          )
            o[a - 2] = arguments[a];
          (e = window.console).info.apply(
            e,
            ["[" + t + "][VideoPlayerBanzaiLogFlusher]" + n].concat(o),
          );
        } catch (e) {}
      }));
    var c = (function () {
      function t(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var n = t.prototype;
      return (
        (n.flushLogs = function () {
          var t = this,
            n = this.$2.consumeLoggerEvents();
          n.forEach(function (n) {
            var a,
              i = {
                event: n.eventType,
                logData: n.logData,
                routeTracePolicy: n.routeTracePolicy,
                source: n.source_VPL_LOGGING_HACK,
              };
            if (n.source_VPL_LOGGING_HACK === "animated_image_share") {
              u &&
                s(
                  t.$1,
                  "[flushLogs] " + n.eventType + " SKIP ANIMATED_IMAGE_SHARE",
                  { videoPlayerLogData: i },
                );
              return;
            }
            var l = (a = n.logData) == null ? void 0 : a.ad_client_token;
            (u &&
              s(t.$1, "[flushLogs] " + n.eventType, { videoPlayerLogData: i }),
              (e || (e = o("ODS"))).bumpEntityKey(
                2079,
                "comet_video_player.banzai_log_flusher",
                n.eventType,
              ),
              l != null
                ? r("VideoPlayerWwwLogger").logCometImmediately(n)
                : r("VideoPlayerWwwLogger").logComet(n));
          });
        }),
        (n.discardLogsWithoutFlushing = function () {
          var e = this.$2.consumeLoggerEvents();
          u &&
            s(
              this.$1,
              "[discardLogsWithoutFlushing] " +
                e
                  .map(function (e) {
                    return e.eventType;
                  })
                  .join(","),
              e,
            );
        }),
        t
      );
    })();
    l.default = c;
  },
  98,
);
