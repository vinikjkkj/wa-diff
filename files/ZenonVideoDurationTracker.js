__d(
  "ZenonVideoDurationTracker",
  ["performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      t.startedAt == null && (t.startedAt = (e || (e = r("performanceNow")))());
    }
    function u(e) {
      e.startedAt != null && ((e.duration = d(e)), (e.startedAt = null));
    }
    function c(e, t) {
      var n = t.filter(function (e) {
        return e.enabled && e.webrtcTrack.readyState !== "ended";
      });
      n.length > 0 ? s(e) : u(e);
    }
    function d(t) {
      var n = t.startedAt;
      return n != null
        ? t.duration + (e || (e = r("performanceNow")))() - n
        : t.duration;
    }
    var m = (function () {
      function e() {
        this.$1 = {
          localScreenShareDuration: { duration: 0, startedAt: null },
          localVideoBlurDuration: { duration: 0, startedAt: null },
          localVideoDuration: { duration: 0, startedAt: null },
          remoteScreenShareDuration: { duration: 0, startedAt: null },
          remoteVideoDuration: { duration: 0, startedAt: null },
        };
      }
      var t = e.prototype;
      return (
        (t.getLocalVideoDuration = function () {
          return d(this.$1.localVideoDuration);
        }),
        (t.getLocalVideoBlurDuration = function () {
          return d(this.$1.localVideoBlurDuration);
        }),
        (t.getLocalScreenShareDuration = function () {
          return d(this.$1.localScreenShareDuration);
        }),
        (t.getRemoteScreenShareDuration = function () {
          return d(this.$1.remoteScreenShareDuration);
        }),
        (t.getRemoteVideoDuration = function () {
          return d(this.$1.remoteVideoDuration);
        }),
        (t.update = function (t) {
          var e = this.$1.localVideoDuration,
            n = Array.from(t.values()).filter(function (e) {
              var t = e.contentType === "video" || e.contentType === "screen";
              return t && !e.remote;
            });
          c(e, n);
          var r = this.$1.localVideoBlurDuration,
            o = Array.from(t.values()).filter(function (e) {
              var t = e.contentType === "video",
                n = "canvas" in e.webrtcTrack;
              return t && n && !e.remote;
            });
          c(r, o);
          var a = this.$1.localScreenShareDuration,
            i = Array.from(t.values()).filter(function (e) {
              var t = e.contentType === "screen";
              return t && !e.remote;
            });
          c(a, i);
          var l = this.$1.remoteVideoDuration,
            s = Array.from(t.values()).filter(function (e) {
              var t = e.contentType === "video" || e.contentType === "screen";
              return t && e.remote;
            });
          c(l, s);
          var u = this.$1.remoteScreenShareDuration,
            d = Array.from(t.values()).filter(function (e) {
              var t = e.contentType === "screen";
              return t && e.remote;
            });
          c(u, d);
        }),
        e
      );
    })();
    l.default = m;
  },
  98,
);
