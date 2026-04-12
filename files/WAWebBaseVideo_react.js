__d(
  "WAWebBaseVideo.react",
  [
    "WAWebMediaGatingUtils",
    "WAWebNoop",
    "WAWebVideoPlayerSurface.react",
    "WAWebVideoPlayerX.react",
    "react",
    "useWAWebBaseVideoCommon",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["autoPlay", "children", "className", "ref"],
      s = [
        "onBufferUpdateComet",
        "onErrorComet",
        "onLoadedMetadataComet",
        "onTimeUpdateComet",
        "onVolumeChangeComet",
        "videoCallbacks",
      ],
      u = ["autoPlay", "children", "className", "ref"],
      c,
      d = c || (c = o("react")),
      m = c.useImperativeHandle;
    function p(t) {
      var n,
        o = t.autoPlay,
        a = t.children,
        i = t.className,
        l = t.ref,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e),
        c = u.onBufferUpdateComet,
        p = u.onErrorComet,
        _ = u.onLoadedMetadataComet,
        f = u.onTimeUpdateComet,
        g = u.onVolumeChangeComet,
        h = u.videoCallbacks,
        y = babelHelpers.objectWithoutPropertiesLoose(u, s),
        C = r("useWAWebBaseVideoCommon")(o, void 0, u.src, y, void 0),
        b = C.getAudioDisabled,
        v = C.getBuffered,
        S = C.getCurrentTime,
        R = C.getDuration,
        L = C.getMuted,
        E = C.getPaused,
        k = C.getPlaybackRate,
        I = C.getVolume,
        T = C.pause,
        D = C.pauseAndReset,
        x = C.play,
        $ = C.setCurrentTime,
        P = C.setDuration,
        N = C.setMuted,
        M = C.setPlaybackRate,
        w = C.setRefVideo,
        A = C.setVolume,
        F = C.underlyingVideo,
        O = C.wrappedProps,
        B = (n = r("WAWebNoop")),
        W = n,
        q = n,
        U = n;
      return (
        m(
          l,
          function () {
            return {
              play: x,
              pause: T,
              getAudioDisabled: b,
              getPaused: E,
              getCurrentTime: S,
              setCurrentTime: $,
              getDuration: R,
              setDuration: P,
              getVolume: I,
              setVolume: A,
              getMuted: L,
              setMuted: N,
              getPlaybackRate: k,
              setPlaybackRate: M,
              getBuffered: v,
              underlyingVideo: F,
              pauseAndReset: D,
              end: B,
              canPlay: q,
              onError: U,
              onWaiting: W,
            };
          },
          [x, T, b, E, S, $, R, P, I, A, L, N, k, M, v, F, D, B, q, U, W],
        ),
        d.jsx(
          "video",
          babelHelpers.extends(
            {},
            h,
            {
              ref: w,
              autoPlay: u.src != null ? o : void 0,
              className: i != null ? i : "x1lliihq xh8yej3 x5yr21d",
            },
            y,
            O,
            { children: a },
          ),
        )
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = {
      end: r("WAWebNoop"),
      canPlay: r("WAWebNoop"),
      onError: r("WAWebNoop"),
      onWaiting: r("WAWebNoop"),
    };
    function f(e) {
      var t = e.autoPlay,
        n = e.children,
        o = e.className,
        a = e.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(e, u);
      return d.jsx("div", {
        className: o != null ? o : "x1lliihq xh8yej3 x5yr21d",
        children: d.jsx(r("WAWebVideoPlayerX.react"), {
          src: i.src,
          poster: i.poster,
          autoplayEnabled: t != null ? t : !1,
          children: d.jsx(r("WAWebVideoPlayerSurface.react"), {
            ref: a,
            refOverrides: _,
            onBufferUpdate: i.onBufferUpdateComet,
            onCanPlay: i.onCanPlay,
            onEnded: i.onEnded,
            onError: i.onErrorComet,
            onLoadedData: i.onLoadedData,
            onLoadedMetadata: i.onLoadedMetadataComet,
            onPause: i.onPause,
            onPlaying: i.onPlaying,
            onTimeUpdate: i.onTimeUpdateComet,
            onVolumeChange: i.onVolumeChangeComet,
            onWaiting: i.onWaiting,
          }),
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = o("WAWebMediaGatingUtils").isBaseVideoCometVideoPlayerEnabled()
        ? f
        : p,
      h = g;
    l.default = h;
  },
  98,
);
