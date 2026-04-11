__d(
  "VideoPlayerImplementationEngineVideoElementAPI",
  [
    "FBLogger",
    "Promise",
    "VideoPlaybackQuality",
    "VideoPlayerOzWWWGlobalConfig",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return isNaN(e) ? 0 : e;
    }
    function u(e) {
      return s(e.duration);
    }
    function c(e) {
      var t = [];
      try {
        for (var n = e.buffered, r = 0; r < n.length; ++r)
          t.push({ endTime: n.end(r), startTime: n.start(r) });
      } catch (e) {}
      return t;
    }
    function d(e) {
      try {
        var t = e.buffered;
        if (t.length > 0) return t.end(t.length - 1);
      } catch (e) {}
      return 0;
    }
    function m(e) {
      return s(e.currentTime);
    }
    function p(e) {
      try {
        var t = e.buffered;
        if (t.length > 0) return t.start(0);
      } catch (e) {}
      return 0;
    }
    function _(t) {
      return {
        exitPictureInPicture: function () {
          window.document.exitPictureInPicture().catch(function (e) {
            r("FBLogger")("comet_video_player")
              .catching(r("getErrorSafe")(e))
              .mustfix("Failed to exit picture-in-picture mode");
          });
        },
        getBufferedRanges: function () {
          return c(t);
        },
        getCanPlayPromise: function () {
          return new (e || (e = n("Promise")))(function (e, n) {
            t.readyState === 4
              ? e()
              : t.addEventListener("canplay", function () {
                  return e();
                });
          });
        },
        getDOMLoadedMetadataPromise: function () {
          return new (e || (e = n("Promise")))(function (e, n) {
            t.addEventListener("loadedmetadata", function () {
              return e();
            });
          });
        },
        getDroppedFrameCount: function () {
          return o("VideoPlaybackQuality").getDroppedFrames(t);
        },
        getDuration: function () {
          return u(t);
        },
        getEnded: function () {
          return t.ended;
        },
        getError: function () {
          return t.error;
        },
        getLastBufferEndPosition: function () {
          return d(t);
        },
        getMuted: function () {
          return t.muted;
        },
        getNetworkState: function () {
          return t.networkState;
        },
        getPaused: function () {
          return t.paused;
        },
        getPlaybackRate: function () {
          return t.playbackRate;
        },
        getPlayheadPosition: function () {
          return m(t);
        },
        getReadyState: function () {
          return t.readyState;
        },
        getTotalFrameCount: function () {
          return o("VideoPlaybackQuality").getTotalFrames(t);
        },
        getUnderlyingVideoElement: function () {
          return t;
        },
        getVideoPixelsDecodedDimensions: function () {
          var e = t.videoWidth,
            n = t.videoHeight;
          return e <= 0 || n <= 0 ? null : { height: n, width: e };
        },
        getVideoPixelsPaintedDimensions: function () {
          if (t.readyState < t.HAVE_CURRENT_DATA) return null;
          var e = t.videoWidth,
            n = t.videoHeight;
          if (e <= 0 || n <= 0) return null;
          var r = t.offsetWidth,
            o = t.offsetHeight;
          if (r <= 0 || o <= 0) return null;
          var a = e / n,
            i = r / o;
          return (i > a ? (r = o * a) : (o = r / a), { height: o, width: r });
        },
        getVolume: function () {
          return t.volume;
        },
        pause: function () {
          t.pause();
        },
        play: function () {
          var r = t.play(),
            o =
              r instanceof (e || (e = n("Promise")))
                ? (e || (e = n("Promise"))).resolve(r)
                : null;
          return o;
        },
        requestPictureInPicture: function () {
          typeof t.requestPictureInPicture == "function" &&
            t.requestPictureInPicture();
        },
        setDuration: function (n) {
          t.duration = n;
        },
        setMuted: function (n) {
          t.muted = n;
        },
        setPlaybackRate: function (n) {
          t.playbackRate = n;
        },
        setPlayheadPosition: function (n) {
          var e = n;
          if (n === 0) {
            var o = r("VideoPlayerOzWWWGlobalConfig").getNumber(
              "clamp_seek_to_first_buffer_range_epsilon",
              0,
            );
            if (o > 0) {
              var a = p(t);
              a > 0 && a <= o && (e = a);
            }
          }
          t.currentTime = e;
        },
        setVolume: function (n) {
          t.volume = n;
        },
      };
    }
    ((l.getBufferedRangesFromVideoElement = c),
      (l.createVideoPlayerImplementationEngineVideoElementAPI = _));
  },
  98,
);
