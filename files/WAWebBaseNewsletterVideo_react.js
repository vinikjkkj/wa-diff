__d(
  "WAWebBaseNewsletterVideo.react",
  [
    "WAWebFrontendMsgGetters",
    "WAWebNewsletterVideoPlayLoggingContext",
    "react",
    "useWAWebBaseVideoCommon",
    "useWAWebCanPlaybackAudio",
    "useWAWebNewsletterVideoPlayMetric",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["autoPlay", "children", "className", "msg", "ref", "srcObject"],
      s = ["videoCallbacks"],
      u;
    function c(e) {
      if (e == null) throw new TypeError("Cannot destructure " + e);
    }
    var d = u || (u = o("react")),
      m = u,
      p = m.useContext,
      _ = m.useImperativeHandle;
    function f(t) {
      var n,
        a = t.autoPlay,
        i = t.children,
        l = t.className,
        u = t.msg,
        m = t.ref,
        f = t.srcObject,
        g = babelHelpers.objectWithoutPropertiesLoose(t, e),
        h = g.videoCallbacks,
        y = babelHelpers.objectWithoutPropertiesLoose(g, s),
        C = p(r("WAWebNewsletterVideoPlayLoggingContext")),
        b = C.finishCount,
        v = C.setFinishCount,
        S = o("WAWebFrontendMsgGetters")
          .getChat(u)
          .id.toString()
          .replace(/@.*/, ""),
        R = (n = u.serverId) != null ? n : 0,
        L = o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(u),
        E = o(
          "useWAWebNewsletterVideoPlayMetric",
        ).useWAWebNewsletterVideoPlayMetric(u, S, R.toString()),
        k = babelHelpers.extends({}, (c(E.videoProps), E.videoProps)),
        I = r("useWAWebBaseVideoCommon")(a, f, g.src, y, {
          onPlayingExtra: function (t) {
            k.onChannelVideoPlaying == null || k.onChannelVideoPlaying(t);
          },
          onPauseExtra: function (t) {
            k.onChannelVideoPause == null || k.onChannelVideoPause(t);
          },
        }),
        T = I.getAudioDisabled,
        D = I.getBuffered,
        x = I.getCurrentTime,
        $ = I.getDuration,
        P = I.getMuted,
        N = I.getPaused,
        M = I.getPlaybackRate,
        w = I.getVolume,
        A = I.pause,
        F = I.pauseAndReset,
        O = I.play,
        B = I.setCurrentTime,
        W = I.setDuration,
        q = I.setMuted,
        U = I.setPlaybackRate,
        V = I.setRefVideo,
        H = I.setVolume,
        G = I.underlyingVideo,
        z = I.videoRef,
        j = I.wrappedProps,
        K = r("useWAWebStableCallback")(function () {
          return L ? T() : !0;
        }),
        Q = r("useWAWebStableCallback")(function () {
          return L ? P() : !0;
        }),
        X = r("useWAWebStableCallback")(function (e) {
          q(L ? e : !0);
        }),
        Y = r("useWAWebStableCallback")(function () {
          k.onChannelVideoWaiting == null || k.onChannelVideoWaiting();
        }),
        J = r("useWAWebStableCallback")(function () {
          k.onChannelVideoCanPlay == null || k.onChannelVideoCanPlay();
        }),
        Z = r("useWAWebStableCallback")(function () {
          k.onChannelVideoError == null || k.onChannelVideoError(z);
        }),
        ee = r("useWAWebStableCallback")(function () {
          (v(b + 1),
            k.onChannelVideoEnded == null || k.onChannelVideoEnded(z, b));
        });
      return (
        _(
          m,
          function () {
            return {
              getAudioDisabled: K,
              play: O,
              pause: A,
              getPaused: N,
              getCurrentTime: x,
              setCurrentTime: B,
              getDuration: $,
              setDuration: W,
              getVolume: w,
              setVolume: H,
              getMuted: Q,
              setMuted: X,
              getPlaybackRate: M,
              setPlaybackRate: U,
              getBuffered: D,
              underlyingVideo: G,
              pauseAndReset: F,
              onWaiting: Y,
              canPlay: J,
              end: ee,
              onError: Z,
            };
          },
          [K, O, A, N, x, B, $, W, w, H, Q, X, M, U, D, G, F, Y, J, ee, Z],
        ),
        d.jsx(
          "video",
          babelHelpers.extends(
            {},
            h,
            {
              ref: V,
              autoPlay: g.src != null ? a : void 0,
              className: l != null ? l : "x1lliihq xh8yej3 x5yr21d",
            },
            y,
            j,
            { muted: !L || y.muted === !0, children: i },
          ),
        )
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
