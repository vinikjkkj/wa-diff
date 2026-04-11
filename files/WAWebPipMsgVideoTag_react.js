__d(
  "WAWebPipMsgVideoTag.react",
  [
    "WAWebCometVideoPlayerUtils",
    "WAWebMsgGetters",
    "WAWebPipUrlVideoTagLoadable.react",
    "WAWebSNAPLLoggingConfig",
    "WAWebUserPrefsGeneral",
    "WAWebVideoUtils",
    "WAWebWamMsgUtils",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebCanPlaybackAudio",
    "useWAWebCometVideoPlayerStateMachine",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebOnUnmount",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef;
    function _(t) {
      var n = o("react-compiler-runtime").c(43),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.onLoadedMetadata,
        c;
      (n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [o("WAWebMsgGetters").getId]), (n[3] = c))
        : (c = n[3]),
        o("useWAWebMsgValues").useMsgValues(a.msg.id, c));
      var d;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = ["mediaBlob", "streamable", "aspectRatio"]), (n[4] = d))
        : (d = n[4]);
      var _ = o("useWAWebModelValues").useModelValues(a.mediaData, d),
        f = p(null),
        g = r("useMergeRefs")(i, f),
        h = o("WAWebCometVideoPlayerUtils").getChannelMediaMetadataForSNAPL(
          a.msg,
        ),
        y = h.mediaId,
        C = h.mediaIdString,
        b = !o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(a.msg),
        v = {
          isCopyrightMuted: b,
          mediaId: y,
          mediaIdString: C,
          videoOrigin: o("WAWebWamMsgUtils").getWamMessageType(a.msg),
        },
        S = o("WAWebSNAPLLoggingConfig").createWAWebSNAPLLoggingProps(v),
        R = r("useWAWebCometVideoPlayerStateMachine")(v),
        L = R.callbacks,
        E = R.handleReactEffectCleanup,
        k = R.handleReactEffectInit,
        I = R.videoElementRefCallback,
        T,
        D;
      (n[5] !== k
        ? ((T = function () {
            k();
          }),
          (D = [k]),
          (n[5] = k),
          (n[6] = T),
          (n[7] = D))
        : ((T = n[6]), (D = n[7])),
        m(T, D));
      var x;
      (n[8] !== E
        ? ((x = function () {
            E();
          }),
          (n[8] = E),
          (n[9] = x))
        : (x = n[9]),
        r("useWAWebOnUnmount")(x));
      var $;
      n[10] !== g || n[11] !== I
        ? (($ = function (t) {
            if (f.current !== t) {
              var e = t == null ? void 0 : t.underlyingVideo();
              if ((e != null && I(e), g(t), t)) {
                var n = o("WAWebUserPrefsGeneral").getMediaVolumeSettings(),
                  r = n.muted,
                  a = n.volume;
                (a != null && t.setVolume(a), t.setMuted(r));
              }
            }
          }),
          (n[10] = g),
          (n[11] = I),
          (n[12] = $))
        : ($ = n[12]);
      var P = r("useWAWebStableCallback")($),
        N;
      n[13] !== _ || n[14] !== s
        ? ((N = function (t) {
            var e = _.aspectRatio,
              n =
                t.videoWidth !== 0 && t.videoHeight !== 0
                  ? t.videoWidth / t.videoHeight
                  : void 0;
            (((!e && n != null && n !== 0) ||
              (e && n != null && n !== 0 && Math.abs(n - e) > 0.01)) &&
              _.set({ aspectRatio: n }),
              s(t));
          }),
          (n[13] = _),
          (n[14] = s),
          (n[15] = N))
        : (N = n[15]);
      var M = N,
        w;
      n[16] !== _ || n[17] !== a.msg
        ? ((w = o("WAWebVideoUtils").getVideoUrl(a.msg, _)),
          (n[16] = _),
          (n[17] = a.msg),
          (n[18] = w))
        : (w = n[18]);
      var A = w,
        F;
      return (
        n[19] !== L ||
        n[20] !== M ||
        n[21] !== y ||
        n[22] !== a.autoPlay ||
        n[23] !== a.children ||
        n[24] !== a.className ||
        n[25] !== a.msg ||
        n[26] !== a.onBufferUpdate ||
        n[27] !== a.onCanPlay ||
        n[28] !== a.onEnded ||
        n[29] !== a.onError ||
        n[30] !== a.onLoadedData ||
        n[31] !== a.onPause ||
        n[32] !== a.onPlaying ||
        n[33] !== a.onTimeUpdate ||
        n[34] !== a.onVolumeChange ||
        n[35] !== a.onWaiting ||
        n[36] !== a.poster ||
        n[37] !== a.startTime ||
        n[38] !== P ||
        n[39] !== S.loggingConfig ||
        n[40] !== S.loggingToSNAPLAdditionalData ||
        n[41] !== A
          ? ((F = u.jsx(
              o("WAWebPipUrlVideoTagLoadable.react").UrlVideoTagLoadable,
              {
                msg: a.msg,
                ref: P,
                url: A,
                startTime: a.startTime,
                poster: a.poster,
                className: a.className,
                onVolumeChange: a.onVolumeChange,
                onEnded: a.onEnded,
                onError: a.onError,
                onPause: a.onPause,
                onPlaying: a.onPlaying,
                onBufferUpdate: a.onBufferUpdate,
                onTimeUpdate: a.onTimeUpdate,
                onLoadedMetadata: M,
                autoPlay: a.autoPlay,
                onCanPlay: a.onCanPlay,
                onLoadedData: a.onLoadedData,
                onWaiting: a.onWaiting,
                callbacks: L,
                loggingConfig: S.loggingConfig,
                loggingToSNAPLAdditionalData: S.loggingToSNAPLAdditionalData,
                mediaId: y,
                children: a.children,
              },
            )),
            (n[19] = L),
            (n[20] = M),
            (n[21] = y),
            (n[22] = a.autoPlay),
            (n[23] = a.children),
            (n[24] = a.className),
            (n[25] = a.msg),
            (n[26] = a.onBufferUpdate),
            (n[27] = a.onCanPlay),
            (n[28] = a.onEnded),
            (n[29] = a.onError),
            (n[30] = a.onLoadedData),
            (n[31] = a.onPause),
            (n[32] = a.onPlaying),
            (n[33] = a.onTimeUpdate),
            (n[34] = a.onVolumeChange),
            (n[35] = a.onWaiting),
            (n[36] = a.poster),
            (n[37] = a.startTime),
            (n[38] = P),
            (n[39] = S.loggingConfig),
            (n[40] = S.loggingToSNAPLAdditionalData),
            (n[41] = A),
            (n[42] = F))
          : (F = n[42]),
        F
      );
    }
    l.default = _;
  },
  98,
);
