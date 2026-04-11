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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "playing",
      s = "timeupdate",
      u = "ended",
      c = 400,
      d = (function () {
        function t(t) {
          var r = this;
          ((this.$3 = !1),
            (this.$7 = function () {
              o("WAWebMarkPlayedMsgAction").canMarkPlayed(r.$1.unsafe()) &&
                o("WAWebMarkPlayedMsgAction").markPlayed(r.$1.unsafe());
            }),
            (this.$8 = function () {
              r.$1.updateLastPlaybackProgress(
                o("WAWebPttCalculateAudioProgress").calculateAudioProgress(
                  r.audio,
                  r.$1.mediaData,
                ),
              );
            }),
            (this.$5 = function () {
              r.$2 = o("WAWebPttPrefs").PttPrefs.setPlayingMessage(r.$1);
            }),
            (this.$6 = function () {
              (r.$2 == null || r.$2(),
                (r.$2 = null),
                (r.audio.currentTime = 0),
                r.$1.updateLastPlaybackProgress(0),
                r.$9(),
                r.$3 && (r.$4 == null || r.$4(), (r.$4 = null)));
            }),
            (this.$9 = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {
                var e = o("WAWebPttFindSequentialMsg").findSequentialMsg(r.$1),
                  t = !1,
                  n = o("WAWebPttAudioChannels").MainAudioChannel.claim(
                    r,
                    function () {
                      t = !0;
                    },
                  );
                if ((yield o("WAPromiseDelays").delayMs(c), n(), !t))
                  if (e) {
                    o("WAWebPttPlaybackTone").playMidPttTone();
                    var a = o(
                      "WAWebPttMsgAudioStore",
                    ).MsgAudioStore.acquireAudio(e);
                    (a.controller.playAsSequential(), a.dispose());
                  } else
                    r.$3 &&
                      (o("WAWebPttPlaybackTone").playEndPttTone(),
                      (r.$3 = !1),
                      (r.pttPlaybackLogger.isSequentialPlayback = !1));
              },
            )),
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
        var r = t.prototype;
        return (
          (r.playAsSequential = function () {
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
          (r.dispose = function () {
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
