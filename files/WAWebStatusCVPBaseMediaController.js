__d(
  "WAWebStatusCVPBaseMediaController",
  ["VideoPlayerStateTransitionHelpers", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e() {
        var e = this;
        ((this.$5 = !1),
          (this.$6 = !1),
          (this.cleanup = function () {
            (e.$7(), (e.$3 = null), (e.$1 = null));
          }),
          (this.setController = function (t) {
            e.$1 !== t && (e.$7(), (e.$1 = t), e.$8());
          }),
          (this.play = function (t) {
            var n;
            (n = e.$1) == null || n.play(t != null ? t : "product_initiated");
          }),
          (this.pause = function (t) {
            var n = e.$1;
            if (n != null) {
              var r = n.getCurrentState();
              r.paused || n.pause(t != null ? t : "product_initiated");
            }
          }),
          (this.resume = function (t) {
            var n = e.$1;
            if (n != null) {
              var r = n.getCurrentState();
              r.paused && n.play(t != null ? t : "product_initiated");
            }
          }),
          (this.stop = function () {
            e.pause();
          }),
          (this.mute = function (t) {
            var n;
            (n = e.$1) == null ||
              n.setMuted(!0, t != null ? t : "product_initiated");
          }),
          (this.unmute = function (t) {
            var n;
            (n = e.$1) == null ||
              n.setMuted(!1, t != null ? t : "product_initiated");
          }),
          (this.setMedia = function () {}));
      }
      var t = e.prototype;
      return (
        (t.addListeners = function (t) {
          this.$3 = t;
        }),
        (t.$9 = function (t) {
          return t == null
            ? !1
            : (t.audioTracks && t.audioTracks.length > 0) ||
                t.mozHasAudio === !0 ||
                t.webkitAudioDecodedByteCount > 0;
        }),
        (t.$8 = function () {
          var e = this,
            t = this.$1;
          t != null &&
            ((this.$4 = t.getCurrentState()),
            (this.$2 = t.subscribe(function () {
              e.$10();
            })));
        }),
        (t.$7 = function () {
          var e;
          ((e = this.$2) == null || e.remove(),
            (this.$2 = null),
            (this.$4 = null));
        }),
        (t.$11 = function (t, n) {
          return n.playerVersion === "comet_progressive"
            ? this.$9(t.internal_getVideoElement())
            : n.availableAudioTracks.length > 0;
        }),
        (t.$10 = function () {
          var e = this.$1,
            t = this.$4;
          if (!(e == null || t == null)) {
            var n = e.getCurrentState(),
              r = e.getPlayheadPosition();
            this.$4 = n;
            var a = o("WAWebABProps").getABPropConfigValue(
                "status_video_max_duration",
              ),
              i = !1;
            if (!this.$5) {
              var l = r >= a,
                s = n.ended && !t.ended;
              ((i = l || s),
                i &&
                  ((this.$5 = !0), n.playing && e.pause("product_initiated")));
            }
            var u = this.$3;
            if (u != null) {
              if (
                o("VideoPlayerStateTransitionHelpers").didStartPlaying(t, n)
              ) {
                var c = Math.min(n.duration, a),
                  d = (c - r) * 1e3,
                  m = c * 1e3;
                u.onPlay == null || u.onPlay(d, m);
              }
              if (!this.$6 && n.playing && r > 0) {
                this.$6 = !0;
                var p = this.$11(e, n);
                u.onDetectHasAudio == null || u.onDetectHasAudio(p, n.muted);
              }
              if (
                (o("VideoPlayerStateTransitionHelpers").didPause(t, n) &&
                  (u.onPause == null || u.onPause()),
                o("VideoPlayerStateTransitionHelpers").didLoadData(t, n))
              ) {
                var _ = this.$11(e, n);
                u.onLoad == null || u.onLoad(_, n.muted);
              }
              i && (u.onEnd == null || u.onEnd());
            }
          }
        }),
        babelHelpers.createClass(e, [
          {
            key: "duration",
            get: function () {
              var e = this.$1;
              if (e == null) return 0;
              var t = e.getCurrentState().duration,
                n = o("WAWebABProps").getABPropConfigValue(
                  "status_video_max_duration",
                );
              return Math.min(t, n) * 1e3;
            },
          },
          {
            key: "currentTime",
            get: function () {
              var e = this.$1;
              return e == null ? 0 : e.getPlayheadPosition();
            },
          },
        ])
      );
    })();
    l.default = e;
  },
  98,
);
