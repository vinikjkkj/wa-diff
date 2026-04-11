__d(
  "WAWebBaseVideo.react",
  [
    "WAWebMediaGatingUtils",
    "WAWebNoop",
    "WAWebVideoPlayerSurface.react",
    "WAWebVideoPlayerX.react",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(38),
        a,
        i,
        l,
        u,
        c;
      n[0] !== t
        ? ((a = t.autoPlay),
          (i = t.children),
          (l = t.className),
          (c = t.ref),
          (u = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = c))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (u = n[4]), (c = n[5]));
      var p, _;
      if (n[6] !== u) {
        var f = u,
          g = f.onBufferUpdateComet,
          h = f.onErrorComet,
          y = f.onLoadedMetadataComet,
          C = f.onTimeUpdateComet,
          b = f.onVolumeChangeComet,
          v = f.videoCallbacks,
          S = babelHelpers.objectWithoutPropertiesLoose(f, s);
        ((_ = v), (p = S), (n[6] = u), (n[7] = p), (n[8] = _));
      } else ((p = n[7]), (_ = n[8]));
      var R = r("useWAWebBaseVideoCommon")(a, void 0, u.src, p, void 0),
        L = R.getAudioDisabled,
        E = R.getBuffered,
        k = R.getCurrentTime,
        I = R.getDuration,
        T = R.getMuted,
        D = R.getPaused,
        x = R.getPlaybackRate,
        $ = R.getVolume,
        P = R.pause,
        N = R.pauseAndReset,
        M = R.play,
        w = R.setCurrentTime,
        A = R.setDuration,
        F = R.setMuted,
        O = R.setPlaybackRate,
        B = R.setRefVideo,
        W = R.setVolume,
        q = R.underlyingVideo,
        U = R.wrappedProps,
        V,
        H;
      if (
        n[9] !== L ||
        n[10] !== E ||
        n[11] !== k ||
        n[12] !== I ||
        n[13] !== T ||
        n[14] !== D ||
        n[15] !== x ||
        n[16] !== $ ||
        n[17] !== P ||
        n[18] !== N ||
        n[19] !== M ||
        n[20] !== w ||
        n[21] !== A ||
        n[22] !== F ||
        n[23] !== O ||
        n[24] !== W ||
        n[25] !== q
      ) {
        var G;
        ((V = function () {
          var e;
          return {
            play: M,
            pause: P,
            getAudioDisabled: L,
            getPaused: D,
            getCurrentTime: k,
            setCurrentTime: w,
            getDuration: I,
            setDuration: A,
            getVolume: $,
            setVolume: W,
            getMuted: T,
            setMuted: F,
            getPlaybackRate: x,
            setPlaybackRate: O,
            getBuffered: E,
            underlyingVideo: q,
            pauseAndReset: N,
            end: (e = r("WAWebNoop")),
            canPlay: e,
            onError: e,
            onWaiting: e,
          };
        }),
          (H = [
            M,
            P,
            L,
            D,
            k,
            w,
            I,
            A,
            $,
            W,
            T,
            F,
            x,
            O,
            E,
            q,
            N,
            (G = r("WAWebNoop")),
            G,
            G,
            G,
          ]),
          (n[9] = L),
          (n[10] = E),
          (n[11] = k),
          (n[12] = I),
          (n[13] = T),
          (n[14] = D),
          (n[15] = x),
          (n[16] = $),
          (n[17] = P),
          (n[18] = N),
          (n[19] = M),
          (n[20] = w),
          (n[21] = A),
          (n[22] = F),
          (n[23] = O),
          (n[24] = W),
          (n[25] = q),
          (n[26] = V),
          (n[27] = H));
      } else ((V = n[26]), (H = n[27]));
      m(c, V, H);
      var z = u.src != null ? a : void 0,
        j;
      n[28] !== l
        ? ((j = l != null ? l : "x1lliihq xh8yej3 x5yr21d"),
          (n[28] = l),
          (n[29] = j))
        : (j = n[29]);
      var K;
      return (
        n[30] !== i ||
        n[31] !== p ||
        n[32] !== B ||
        n[33] !== z ||
        n[34] !== j ||
        n[35] !== _ ||
        n[36] !== U
          ? ((K = d.jsx(
              "video",
              babelHelpers.extends(
                {},
                _,
                { ref: B, autoPlay: z, className: j },
                p,
                U,
                { children: i },
              ),
            )),
            (n[30] = i),
            (n[31] = p),
            (n[32] = B),
            (n[33] = z),
            (n[34] = j),
            (n[35] = _),
            (n[36] = U),
            (n[37] = K))
          : (K = n[37]),
        K
      );
    }
    var _ = {
      end: r("WAWebNoop"),
      canPlay: r("WAWebNoop"),
      onError: r("WAWebNoop"),
      onWaiting: r("WAWebNoop"),
    };
    function f(e) {
      var t = o("react-compiler-runtime").c(28),
        n,
        a,
        i,
        l;
      if (t[0] !== e) {
        var s = e.autoPlay,
          c = e.children,
          m = e.className,
          p = e.ref,
          f = babelHelpers.objectWithoutPropertiesLoose(e, u);
        ((n = s),
          (a = m),
          (l = p),
          (i = f),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l));
      } else ((n = t[1]), (a = t[2]), (i = t[3]), (l = t[4]));
      var g;
      t[5] !== a
        ? ((g = a != null ? a : "x1lliihq xh8yej3 x5yr21d"),
          (t[5] = a),
          (t[6] = g))
        : (g = t[6]);
      var h = n != null ? n : !1,
        y;
      t[7] !== i.onBufferUpdateComet ||
      t[8] !== i.onCanPlay ||
      t[9] !== i.onEnded ||
      t[10] !== i.onErrorComet ||
      t[11] !== i.onLoadedData ||
      t[12] !== i.onLoadedMetadataComet ||
      t[13] !== i.onPause ||
      t[14] !== i.onPlaying ||
      t[15] !== i.onTimeUpdateComet ||
      t[16] !== i.onVolumeChangeComet ||
      t[17] !== i.onWaiting ||
      t[18] !== l
        ? ((y = d.jsx(r("WAWebVideoPlayerSurface.react"), {
            ref: l,
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
          })),
          (t[7] = i.onBufferUpdateComet),
          (t[8] = i.onCanPlay),
          (t[9] = i.onEnded),
          (t[10] = i.onErrorComet),
          (t[11] = i.onLoadedData),
          (t[12] = i.onLoadedMetadataComet),
          (t[13] = i.onPause),
          (t[14] = i.onPlaying),
          (t[15] = i.onTimeUpdateComet),
          (t[16] = i.onVolumeChangeComet),
          (t[17] = i.onWaiting),
          (t[18] = l),
          (t[19] = y))
        : (y = t[19]);
      var C;
      t[20] !== i.poster || t[21] !== i.src || t[22] !== h || t[23] !== y
        ? ((C = d.jsx(r("WAWebVideoPlayerX.react"), {
            src: i.src,
            poster: i.poster,
            autoplayEnabled: h,
            children: y,
          })),
          (t[20] = i.poster),
          (t[21] = i.src),
          (t[22] = h),
          (t[23] = y),
          (t[24] = C))
        : (C = t[24]);
      var b;
      return (
        t[25] !== g || t[26] !== C
          ? ((b = d.jsx("div", { className: g, children: C })),
            (t[25] = g),
            (t[26] = C),
            (t[27] = b))
          : (b = t[27]),
        b
      );
    }
    var g = o("WAWebMediaGatingUtils").isBaseVideoCometVideoPlayerEnabled()
        ? f
        : p,
      h = g;
    l.default = h;
  },
  98,
);
