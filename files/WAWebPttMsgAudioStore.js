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
            a = o("WAWebPttAudioManager").AudioManager.createAudioProxy(),
            i = o("WAWebPttAudioChannels").MainAudioChannel.registerMedia(a),
            l = d(t.mediaData);
          l && m(a, t, l);
          var s = new (o(
            "WAWebPttAudioPlaybackController",
          ).AudioPlaybackController)({ msg: t, audio: a });
          return {
            playbackController: s,
            refCount: 1,
            dispose: function () {
              var t = r("WANullthrows")(e.$1.get(n));
              (t.refCount--,
                t.refCount === 0 &&
                  (i(), e.$1.delete(n), l == null || l.dispose(), s.dispose()));
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
    function m(e, t, n) {
      e.src = n.url;
      var r = o(
        "WAWebPttGetDurationFromMediaOrProtobuf",
      ).getDurationFromMediaOrProtobuf(e, t.mediaData);
      t.lastPlaybackProgress != null &&
        r != null &&
        (e.currentTime = r * t.lastPlaybackProgress);
    }
    var p = new e();
    l.MsgAudioStore = p;
  },
  98,
);
