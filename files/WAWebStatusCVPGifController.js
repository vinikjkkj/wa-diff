__d(
  "WAWebStatusCVPGifController",
  ["VideoPlayerStateTransitionHelpers", "WAWebStatusCountdownController"],
  function (t, n, r, o, a, i, l) {
    var e = 6e3,
      s = 3,
      u = (function () {
        function t() {
          var t = this;
          ((this.$5 = 0),
            (this.$6 = !1),
            (this.$7 = !1),
            (this.cleanup = function () {
              (t.$10(), (t.$3 = null), t.$8.removeListeners(), (t.$1 = null));
            }),
            (this.setController = function (e) {
              t.$1 !== e && (t.$10(), (t.$1 = e), t.$11());
            }),
            (this.fireOnEndIfApplicable = function () {
              var e;
              return t.$7 && t.$6
                ? ((e = t.$3) == null || e.onEnd == null || e.onEnd(), !0)
                : !1;
            }),
            (this.$13 = function () {
              var e = t.$1;
              if (e != null) {
                (t.$5++, t.$5 >= s && (t.$7 = !0));
                var n = t.fireOnEndIfApplicable();
                n ||
                  (e.seek(0),
                  self.setTimeout(function () {
                    e.play("product_initiated");
                  }, 0));
              }
            }),
            (this.$9 = function () {
              ((t.$6 = !0), t.fireOnEndIfApplicable());
            }),
            (this.play = function (e) {
              var n;
              ((n = t.$1) == null ||
                n.play(e != null ? e : "product_initiated"),
                t.$8.play());
            }),
            (this.stop = function () {
              var e = t.$1;
              if (e != null) {
                var n = e.getCurrentState();
                n.paused || e.pause("product_initiated");
              }
              t.$8.stop();
            }),
            (this.resume = function (e) {
              var n = t.$1;
              if (n != null) {
                var r = n.getCurrentState();
                r.paused && n.play(e != null ? e : "product_initiated");
              }
              t.$8.resume();
            }),
            (this.pause = function (e) {
              var n = t.$1;
              if (n != null) {
                var r = n.getCurrentState();
                r.paused || n.pause(e != null ? e : "product_initiated");
              }
              t.$8.pause();
            }),
            (this.mute = function () {}),
            (this.unmute = function () {}),
            (this.setMedia = function () {}),
            (this.$8 = new (r("WAWebStatusCountdownController"))(e)),
            this.$8.addListeners({ onEnd: this.$9 }));
        }
        var n = t.prototype;
        return (
          (n.addListeners = function (t) {
            this.$3 = t;
          }),
          (n.$11 = function () {
            var e = this,
              t = this.$1;
            t != null &&
              ((this.$4 = t.getCurrentState()),
              (this.$2 = t.subscribe(function () {
                e.$12();
              })));
          }),
          (n.$10 = function () {
            var e;
            ((e = this.$2) == null || e.remove(),
              (this.$2 = null),
              (this.$4 = null));
          }),
          (n.$12 = function () {
            var e = this.$1,
              t = this.$4;
            if (!(e == null || t == null)) {
              var n = e.getCurrentState();
              this.$4 = n;
              var r = n.ended && !t.ended;
              r && this.$13();
              var a = this.$3;
              if (a != null) {
                if (
                  o("VideoPlayerStateTransitionHelpers").didStartPlaying(t, n)
                ) {
                  var i = this.duration,
                    l = (this.$5 * n.duration + e.getPlayheadPosition()) * 1e3,
                    s = Math.max(0, i - l);
                  a.onPlay == null || a.onPlay(s, i);
                }
                (o("VideoPlayerStateTransitionHelpers").didPause(t, n) &&
                  (a.onPause == null || a.onPause()),
                  o("VideoPlayerStateTransitionHelpers").didLoadData(t, n) &&
                    (a.onLoad == null || a.onLoad(!1, !0)));
              }
            }
          }),
          babelHelpers.createClass(t, [
            {
              key: "duration",
              get: function () {
                var t = this.$1;
                if (t == null) return e;
                var n = t.getCurrentState().duration;
                return Math.max(s * n * 1e3, e);
              },
            },
          ])
        );
      })();
    l.default = u;
  },
  98,
);
