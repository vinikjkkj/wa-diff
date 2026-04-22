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
            l = m(t.mediaData),
            s = null;
          l
            ? p(a, t, l)
            : (s = d(t, function (e) {
                ((l = e), p(a, t, e), (s = null));
              }));
          var u = new (o(
            "WAWebPttAudioPlaybackController",
          ).AudioPlaybackController)({ msg: t, audio: a });
          return {
            playbackController: u,
            refCount: 1,
            dispose: function () {
              var t = r("WANullthrows")(e.$1.get(n));
              if ((t.refCount--, t.refCount === 0)) {
                var o;
                (i(),
                  e.$1.delete(n),
                  s == null || s(),
                  (o = l) == null || o.dispose(),
                  u.dispose());
              }
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
    function d(e, t) {
      var n = e.mediaData.filehash,
        r = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.subscribe(
          function () {
            if (
              o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(n)
            ) {
              (r == null || r(), (r = null));
              var a = m(e.mediaData);
              a && t(a);
            }
          },
        );
      return (
        e.forceDownloadMediaEvenIfExpensive(),
        function () {
          (r == null || r(), (r = null));
        }
      );
    }
    function m(e) {
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
    function p(e, t, n) {
      e.src = n.url;
      var r = o(
        "WAWebPttGetDurationFromMediaOrProtobuf",
      ).getDurationFromMediaOrProtobuf(e, t.mediaData);
      t.lastPlaybackProgress != null &&
        r != null &&
        (e.currentTime = r * t.lastPlaybackProgress);
    }
    var _ = new e();
    l.MsgAudioStore = _;
  },
  98,
);
