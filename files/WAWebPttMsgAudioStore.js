__d(
  "WAWebPttMsgAudioStore",
  [
    "invariant",
    "WANullthrows",
    "WAWebMediaInMemoryBlobCache",
    "WAWebPttAudioChannels",
    "WAWebPttAudioManager",
    "WAWebPttAudioPlaybackController",
    "WAWebPttGetDurationFromMediaOrProtobuf",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function () {
      function e() {
        this.$1 = new Map();
      }
      var t = e.prototype;
      return (
        (t.$2 = function (t, n) {
          var e = this,
            a = t.mediaData,
            i = o("WAWebPttAudioManager").AudioManager.createAudioProxy(),
            l = o("WAWebPttAudioChannels").MainAudioChannel.registerMedia(i),
            s = d(a);
          if (s) {
            i.src = s.url;
            var u = o(
              "WAWebPttGetDurationFromMediaOrProtobuf",
            ).getDurationFromMediaOrProtobuf(i, t.mediaData);
            t.lastPlaybackProgress != null &&
              u != null &&
              (i.currentTime = u * t.lastPlaybackProgress);
          }
          var c = new (o(
            "WAWebPttAudioPlaybackController",
          ).AudioPlaybackController)({ msg: t, audio: i });
          return {
            playbackController: c,
            refCount: 1,
            dispose: function () {
              var t = r("WANullthrows")(e.$1.get(n));
              (t.refCount--,
                t.refCount === 0 &&
                  (l(), e.$1.delete(n), s == null || s.dispose(), c.dispose()));
            },
          };
        }),
        (t.acquireAudio = function (t) {
          var e = c(t),
            n = this.$1.get(e);
          n ? n.refCount++ : ((n = this.$2(t, e)), this.$1.set(e, n));
          var r = n,
            o = r.dispose,
            a = r.playbackController;
          return {
            audio: a.audio,
            pttPlaybackLogger: a.pttPlaybackLogger,
            controller: a,
            dispose: u(o),
          };
        }),
        e
      );
    })();
    function u(e) {
      var t = !1;
      return function () {
        (!t || s(0, 56332), (t = !0), e());
      };
    }
    function c(e) {
      return e.id.toString();
    }
    function d(e) {
      var t = e.filehash;
      if (!o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(t))
        return null;
      var n = o(
        "WAWebMediaInMemoryBlobCache",
      ).InMemoryMediaBlobCache.getOrCreateURL(t);
      o(
        "WAWebMediaInMemoryBlobCache",
      ).InMemoryMediaBlobCache.increaseUsageCount(t);
      var r = function () {
        return o(
          "WAWebMediaInMemoryBlobCache",
        ).InMemoryMediaBlobCache.decreaseUsageCount(t);
      };
      return { url: n, dispose: r };
    }
    var m = new e();
    l.MsgAudioStore = m;
  },
  98,
);
