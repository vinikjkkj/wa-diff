__d(
  "WAWebVoipMicrophoneTrackObserver",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 2e3,
      l = (function () {
        function t(t) {
          var n = this;
          ((this.$2 = null),
            (this.$5 = !1),
            (this.$7 = !1),
            (this.$8 = !1),
            (this.$12 = function () {
              !n.$5 &&
                !n.$8 &&
                n.$1.state === "closed" &&
                n.$13("audio-context-closed");
            }),
            (this.$9 = function () {
              !n.$5 && !n.$8 && n.$13("track-ended");
            }),
            (this.$10 = function () {
              n.$5 ||
                n.$8 ||
                n.$2 != null ||
                (n.$2 = window.setTimeout(function () {
                  ((n.$2 = null),
                    !(n.$5 || n.$8 || !n.$16()) &&
                      ((n.$7 = !0), n.$4("track-muted")));
                }, e));
            }),
            (this.$11 = function () {
              (n.$14(), !n.$5 && n.$7 && ((n.$7 = !1), n.$3()));
            }),
            (this.$1 = t.audioContext),
            (this.$3 = t.onRecovered),
            (this.$4 = t.onUnavailable),
            (this.$6 = t.audioTrack));
        }
        var n = t.prototype;
        return (
          (n.start = function () {
            var e, t, n, r, o;
            this.$5 ||
              ((e = this.$6) == null || e.addEventListener("ended", this.$9),
              (t = this.$6) == null || t.addEventListener("mute", this.$10),
              (n = this.$6) == null || n.addEventListener("unmute", this.$11),
              this.$1.addEventListener("statechange", this.$12),
              this.$1.state === "closed"
                ? this.$13("audio-context-closed")
                : ((r = this.$6) == null ? void 0 : r.readyState) === "ended"
                  ? this.$13("track-ended")
                  : ((o = this.$6) == null ? void 0 : o.muted) === !0 &&
                    this.$10());
          }),
          (n.stop = function () {
            this.$5 ||
              ((this.$5 = !0),
              this.$14(),
              this.$1.removeEventListener("statechange", this.$12),
              this.$15("ended", this.$9),
              this.$15("mute", this.$10),
              this.$15("unmute", this.$11));
          }),
          (n.$15 = function (t, n) {
            try {
              var e;
              (e = this.$6) == null || e.removeEventListener(t, n);
            } catch (e) {}
          }),
          (n.$14 = function () {
            this.$2 != null && (window.clearTimeout(this.$2), (this.$2 = null));
          }),
          (n.$13 = function (t) {
            (this.$14(), (this.$7 = !1), (this.$8 = !0), this.$4(t));
          }),
          (n.$16 = function () {
            try {
              var e;
              return (
                ((e = this.$6) == null ? void 0 : e.muted) === !0 &&
                this.$6.readyState === "live"
              );
            } catch (e) {
              return !1;
            }
          }),
          t
        );
      })();
    i.WAWebVoipMicrophoneTrackObserver = l;
  },
  66,
);
