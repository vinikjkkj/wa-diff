__d(
  "MediaPlaybackLogFlusher",
  ["MediaPlaybackCompoundEventLogger", "emptyFunction", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("emptyFunction"),
      s = !1;
    r("gkx")("494") &&
      ((s = !0),
      (e = function (t, n) {
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
            ["[" + t + "][SNAPL]" + n].concat(o),
          );
        } catch (e) {}
      }));
    var u = (function () {
      function t(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var n = t.prototype;
      return (
        (n.flushLogs = function (n) {
          n === void 0 && (n = !1);
          var t = this.$2.consumeLoggerEvents();
          (s &&
            e(
              this.$1,
              "[flushLogs] " +
                t
                  .map(function (e) {
                    var t, n;
                    return (t =
                      (n = e.events) == null
                        ? void 0
                        : n.map(function (e) {
                            return e.event_name;
                          })) != null
                      ? t
                      : [];
                  })
                  .flat(1)
                  .join(","),
              { loggerEvents: t },
            ),
            t.forEach(function (e) {
              n || e.required_metadata.tracking_type === "paid"
                ? r("MediaPlaybackCompoundEventLogger").logCometImmediately(e)
                : r("MediaPlaybackCompoundEventLogger").logComet(e);
            }));
        }),
        (n.discardLogsWithoutFlushing = function () {
          var t = this.$2.consumeLoggerEvents();
          s &&
            e(
              this.$1,
              "[discardLogsWithoutFlushing] " +
                t
                  .map(function (e) {
                    var t, n;
                    return (t =
                      (n = e.events) == null
                        ? void 0
                        : n.map(function (e) {
                            return e.event_name;
                          })) != null
                      ? t
                      : [];
                  })
                  .flat(1)
                  .join(","),
              { loggerEvents: t },
            );
        }),
        t
      );
    })();
    l.default = u;
  },
  98,
);
