__d(
  "WAWebPttAudioPlaybackController",
  [
    "WAPromiseDelays",
    "WAWebFrontendMsgGetters",
    "WAWebMarkPlayedMsgAction",
    "WAWebPttAudioChannels",
    "WAWebPttCalculateAudioProgress",
    "WAWebPttFindSequentialMsg",
    "WAWebPttMsgAudioStore",
    "WAWebPttPlaybackLogger",
    "WAWebPttPlaybackTone",
    "WAWebPttPrefs",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "playing",
      s = "timeupdate",
      u = "ended",
      c = 400,
      d = (function () {
        function t(t) {
          var n = this;
          ((this.$3 = !1),
            (this.$7 = function () {
              o("WAWebMarkPlayedMsgAction").canMarkPlayed(n.$1.unsafe()) &&
                o("WAWebMarkPlayedMsgAction").markPlayed(n.$1.unsafe());
            }),
            (this.$8 = function () {
              n.$1.updateLastPlaybackProgress(
                o("WAWebPttCalculateAudioProgress").calculateAudioProgress(
                  n.audio,
                  n.$1.mediaData,
                ),
              );
            }),
            (this.$5 = function () {
              n.$2 = o("WAWebPttPrefs").PttPrefs.setPlayingMessage(n.$1);
            }),
            (this.$6 = function () {
              (n.$2 == null || n.$2(),
                (n.$2 = null),
                (n.audio.currentTime = 0),
                n.$1.updateLastPlaybackProgress(0),
                n.$9(),
                n.$3 && (n.$4 == null || n.$4(), (n.$4 = null)));
            }),
            (this.$9 = async function () {
              var e = o("WAWebPttFindSequentialMsg").findSequentialMsg(n.$1),
                t = !1,
                r = o("WAWebPttAudioChannels").MainAudioChannel.claim(
                  n,
                  function () {
                    t = !0;
                  },
                );
              if ((await o("WAPromiseDelays").delayMs(c), r(), !t))
                if (e) {
                  o("WAWebPttPlaybackTone").playMidPttTone();
                  var a = o("WAWebPttMsgAudioStore").MsgAudioStore.acquireAudio(
                    e,
                  );
                  (a.controller.playAsSequential(), a.dispose());
                } else
                  n.$3 &&
                    (o("WAWebPttPlaybackTone").playEndPttTone(),
                    (n.$3 = !1),
                    (n.pttPlaybackLogger.isSequentialPlayback = !1));
            }),
            (this.audio = t.audio),
            (this.pttPlaybackLogger = new (o(
              "WAWebPttPlaybackLogger",
            ).PttPlaybackLogger)(t.msg, t.audio)),
            (this.$1 = t.msg),
            this.audio.addEventListener(e, this.$5),
            this.audio.addEventListener(u, this.$6),
            o("WAWebMarkPlayedMsgAction").canMarkPlayed(this.$1.unsafe()) &&
              this.audio.addEventListener(e, this.$7),
            this.audio.addEventListener(s, this.$8));
        }
        var n = t.prototype;
        return (
          (n.playAsSequential = function () {
            ((o("WAWebPttPrefs").PttPrefs.outOfChatPlayerMessage = this.$1),
              (this.$4 = o("WAWebPttMsgAudioStore").MsgAudioStore.acquireAudio(
                this.$1,
              ).dispose),
              (this.$3 = !0),
              (this.pttPlaybackLogger.isSequentialPlayback = !0));
            var e =
              o("WAWebFrontendMsgGetters").getAsPttLike(this.$1.unsafe()) ==
              null
                ? 1
                : o("WAWebPttPrefs").PttPrefs.playbackRate;
            ((this.audio.playbackRate = e),
              (this.audio.defaultPlaybackRate = e),
              (this.audio.currentTime = 0),
              this.audio.play());
          }),
          (n.dispose = function () {
            var t;
            (o("WAWebMarkPlayedMsgAction").canMarkPlayed(this.$1.unsafe()) &&
              this.audio.removeEventListener(e, this.$7),
              this.audio.removeEventListener(s, this.$8),
              this.audio.removeEventListener(e, this.$5),
              this.audio.removeEventListener(u, this.$6),
              this.pttPlaybackLogger.dispose(),
              (t = this.$2) == null || t.call(this));
          }),
          t
        );
      })();
    l.AudioPlaybackController = d;
  },
  98,
);
