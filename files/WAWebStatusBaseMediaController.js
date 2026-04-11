__d(
  "WAWebStatusBaseMediaController",
  ["WAWebABProps", "WAWebStatusEventHandlersMap", "WAWebStatusSetupController"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.$2 = !0),
          (this.addListeners = function (e) {
            t.$3.bulkSet(e);
          }),
          (this.removeListener = function (e, n) {
            t.$3.remove(e, n);
          }),
          (this.setMedia = function (e, n) {
            t.$1 !== e &&
              (t.$5(),
              (t.$1 = e),
              e != null &&
                (e.addEventListener("playing", t.$6),
                e.addEventListener("pause", t.$7),
                e.addEventListener("ended", t.$8),
                e.addEventListener("timeupdate", t.$9),
                e.addEventListener("loadeddata", t.$10),
                e.addEventListener("loadedmetadata", t.$11),
                t.$4 === o("WAWebStatusSetupController").MediaType.Audio &&
                  e.load()));
          }),
          (this.$5 = function () {
            var e = t.$1;
            e &&
              (t.stop(),
              e.removeEventListener("playing", t.$6),
              e.removeEventListener("pause", t.$7),
              e.removeEventListener("ended", t.$8),
              e.removeEventListener("timeupdate", t.$9),
              e.removeEventListener("loadeddata", t.$10),
              e.removeEventListener("loadedmetadata", t.$11));
          }),
          (this.play = function () {
            var e;
            (e = t.$1) == null || e.play();
          }),
          (this.pause = function () {
            t.$1 && !t.$1.paused && t.$1.pause();
          }),
          (this.resume = function () {
            t.$1 && !t.$2 && t.$1.play();
          }),
          (this.stop = function () {
            t.$1 && !t.$1.paused && t.$1.pause();
          }),
          (this.$12 = function (e) {
            t.$1 &&
              ((t.$1.muted = e),
              t.$3.execute(
                e
                  ? o("WAWebStatusEventHandlersMap").MediaEvents.OnMute
                  : o("WAWebStatusEventHandlersMap").MediaEvents.OnUnmute,
              ));
          }),
          (this.mute = function () {
            t.$12(!0);
          }),
          (this.unmute = function () {
            t.$12(!1);
          }),
          (this.$6 = function () {
            t.$2 = !0;
            var e = t.$1;
            if (e != null) {
              var n = s(e.duration, t.$4),
                r = (n - e.currentTime) * 1e3,
                a = n * 1e3;
              t.$3.execute(
                o("WAWebStatusEventHandlersMap").MediaEvents.OnPlay,
                r,
                a,
              );
            }
          }),
          (this.$7 = function () {
            ((t.$2 = !1),
              t.$3.execute(
                o("WAWebStatusEventHandlersMap").MediaEvents.OnPause,
              ));
          }),
          (this.$8 = function () {
            t.$3.execute(o("WAWebStatusEventHandlersMap").MediaEvents.OnEnd);
          }),
          (this.$9 = function () {
            var e,
              n = (e = t.$1) == null ? void 0 : e.currentTime;
            if (n != null) {
              t.$3.execute(
                o("WAWebStatusEventHandlersMap").MediaEvents.OnTimeUpdate,
                n,
              );
              var r = o("WAWebABProps").getABPropConfigValue(
                "status_video_max_duration",
              );
              if (
                t.$4 === o("WAWebStatusSetupController").MediaType.Video &&
                n >= r
              ) {
                (t.stop(), t.$8());
                var a = t.$1;
                a &&
                  (a.removeEventListener("timeupdate", t.$9),
                  a.removeEventListener("ended", t.$8));
              }
            }
          }),
          (this.$10 = function () {
            var e = t.$1;
            if (e) {
              var n =
                  t.$4 === o("WAWebStatusSetupController").MediaType.Audio
                    ? !0
                    : (e.audioTracks && e.audioTracks.length > 0) ||
                      e.mozHasAudio === !0 ||
                      e.webkitAudioDecodedByteCount > 0,
                r = e.muted;
              t.$3.execute(
                o("WAWebStatusEventHandlersMap").MediaEvents.OnLoad,
                n,
                r,
              );
            }
          }),
          (this.$11 = function () {
            t.$3.execute(
              o("WAWebStatusEventHandlersMap").MediaEvents.OnMetadataLoad,
            );
          }),
          (this.removeListeners = function () {
            (t.stop(), t.$3.clear());
          }),
          (this.$4 = e),
          (this.$3 = o("WAWebStatusEventHandlersMap").createHandlersMap()));
      }
      return babelHelpers.createClass(e, [
        {
          key: "duration",
          get: function () {
            return this.$1 == null ? 0 : s(this.$1.duration, this.$4) * 1e3;
          },
        },
        {
          key: "currentTime",
          get: function () {
            return this.$1 == null ? 0 : this.$1.currentTime;
          },
        },
        {
          key: "isPlaying",
          get: function () {
            return !!this.$1 && !this.$1.paused;
          },
        },
      ]);
    })();
    function s(e, t) {
      if (t === o("WAWebStatusSetupController").MediaType.Video) {
        var n = o("WAWebABProps").getABPropConfigValue(
          "status_video_max_duration",
        );
        return Math.min(e, n);
      }
      return e;
    }
    l.default = e;
  },
  98,
);
