__d(
  "useWAWebMediaStreamPlaybackMetric",
  [
    "WAWebMediaStreamPlaybackWamEvent",
    "WAWebPipVideoStreaming",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumPlaybackOriginType",
    "WAWebWamEnumPlaybackStateType",
    "react",
    "useLazyRef",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.experimental_useEffectEvent,
      c = s.useEffect,
      d = s.useRef;
    function m(e) {
      return new (o(
        "WAWebMediaStreamPlaybackWamEvent",
      ).MediaStreamPlaybackWamEvent)({
        playbackOrigin: e,
        mediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO,
        didPlay: !1,
        playbackState: o("WAWebWamEnumPlaybackStateType").PLAYBACK_STATE_TYPE
          .IDLE,
      });
    }
    function p(e, t, n, a) {
      a === void 0 &&
        (a = o("WAWebWamEnumPlaybackOriginType").PLAYBACK_ORIGIN_TYPE
          .CONVERSATION);
      var i = d(!0),
        l = r("useLazyRef")(function () {
          return m(a);
        }),
        s = u(function (e) {
          var t = function () {
            (e.commit(),
              (i.current = !0),
              (l.current = m(a)),
              window.removeEventListener("unload", t));
          };
          return t;
        });
      c(
        function () {
          if (
            !(
              e == null ||
              !e.startsWith(o("WAWebPipVideoStreaming").VIDEO_STREAM_URL)
            )
          ) {
            var t = l.current,
              n = s(t);
            return (window.addEventListener("unload", n), n);
          }
        },
        [e, l],
      );
      var p = r("useWAWebStableCallback")(function (e) {
          (t.current &&
            (l.current.videoDuration = Math.floor(t.current.duration)),
            n.onDurationChange == null || n.onDurationChange(e));
        }),
        _ = r("useWAWebStableCallback")(function (e) {
          ((l.current.playbackState = o(
            "WAWebWamEnumPlaybackStateType",
          ).PLAYBACK_STATE_TYPE.READY_PLAY),
            l.current.didPlay || (l.current.didPlay = !0),
            n.onPlaying == null || n.onPlaying());
        }),
        f = r("useWAWebStableCallback")(function (e) {
          (l.current.playbackState ===
            o("WAWebWamEnumPlaybackStateType").PLAYBACK_STATE_TYPE.READY_PLAY &&
            (l.current.playbackState = o(
              "WAWebWamEnumPlaybackStateType",
            ).PLAYBACK_STATE_TYPE.READY_PAUSE),
            n.onPause == null || n.onPause(e));
        }),
        g = r("useWAWebStableCallback")(function (e) {
          ((l.current.playbackState = o(
            "WAWebWamEnumPlaybackStateType",
          ).PLAYBACK_STATE_TYPE.BUFFERING),
            i.current
              ? l.current.startInitialBufferingT()
              : l.current.startTotalRebufferingT(),
            n.onWaiting == null || n.onWaiting(e));
        }),
        h = r("useWAWebStableCallback")(function (e) {
          ((l.current.playbackState = o(
            "WAWebWamEnumPlaybackStateType",
          ).PLAYBACK_STATE_TYPE.READY_PAUSE),
            i.current
              ? (l.current.markInitialBufferingT(), (i.current = !1))
              : l.current.markTotalRebufferingT(),
            n.onCanPlay == null || n.onCanPlay(e));
        }),
        y = r("useWAWebStableCallback")(function (e) {
          ((l.current.playbackState = o(
            "WAWebWamEnumPlaybackStateType",
          ).PLAYBACK_STATE_TYPE.ENDED),
            n.onEnded == null || n.onEnded(e));
        }),
        C = r("useWAWebStableCallback")(function (e) {
          var r, a, i;
          l.current.playbackState = o(
            "WAWebWamEnumPlaybackStateType",
          ).PLAYBACK_STATE_TYPE.ERROR;
          var s =
            (r =
              (a =
                (i = t.current) == null || (i = i.error) == null
                  ? void 0
                  : i.code) != null
                ? a
                : e.code) != null
              ? r
              : null;
          (s != null && (l.current.playbackError = s),
            n.onError == null || n.onError(e));
        });
      return {
        mediaStreamPlaybackMetricRef: l,
        wrappedProps: {
          onDurationChange: p,
          onPlaying: _,
          onWaiting: g,
          onCanPlay: h,
          onEnded: y,
          onError: C,
          onPause: f,
        },
      };
    }
    l.useMediaStreamPlaybackMetric = p;
  },
  98,
);
