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
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onLoadedMetadata,
        l = o("useWAWebMsgValues").useMsgValues(a.msg.id, [
          o("WAWebMsgGetters").getId,
        ]),
        s = l[0],
        c = o("useWAWebModelValues").useModelValues(a.mediaData, [
          "mediaBlob",
          "streamable",
          "aspectRatio",
        ]),
        _ = p(null),
        f = r("useMergeRefs")(n, _),
        g = o("WAWebCometVideoPlayerUtils").getChannelMediaMetadataForSNAPL(
          a.msg,
        ),
        h = g.mediaId,
        y = g.mediaIdString,
        C = !o("useWAWebCanPlaybackAudio").useCanPlaybackAudio(a.msg),
        b = {
          isCopyrightMuted: C,
          mediaId: h,
          mediaIdString: y,
          videoOrigin: o("WAWebWamMsgUtils").getWamMessageType(a.msg),
        },
        v = o("WAWebSNAPLLoggingConfig").createWAWebSNAPLLoggingProps(b),
        S = r("useWAWebCometVideoPlayerStateMachine")(b),
        R = S.callbacks,
        L = S.handleReactEffectCleanup,
        E = S.handleReactEffectInit,
        k = S.videoElementRefCallback;
      (m(
        function () {
          E();
        },
        [E],
      ),
        r("useWAWebOnUnmount")(function () {
          L();
        }));
      var I = r("useWAWebStableCallback")(function (e) {
          if (_.current !== e) {
            var t = e == null ? void 0 : e.underlyingVideo();
            if ((t != null && k(t), f(e), e)) {
              var n = o("WAWebUserPrefsGeneral").getMediaVolumeSettings(),
                r = n.muted,
                a = n.volume;
              (a != null && e.setVolume(a), e.setMuted(r));
            }
          }
        }),
        T = d(
          function (e) {
            var t = c.aspectRatio,
              n =
                e.videoWidth !== 0 && e.videoHeight !== 0
                  ? e.videoWidth / e.videoHeight
                  : void 0;
            (((!t && n != null && n !== 0) ||
              (t && n != null && n !== 0 && Math.abs(n - t) > 0.01)) &&
              c.set({ aspectRatio: n }),
              i(e));
          },
          [c, i],
        ),
        D = o("WAWebVideoUtils").getVideoUrl(a.msg, c);
      return u.jsx(o("WAWebPipUrlVideoTagLoadable.react").UrlVideoTagLoadable, {
        msg: a.msg,
        ref: I,
        url: D,
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
        onLoadedMetadata: T,
        autoPlay: a.autoPlay,
        onCanPlay: a.onCanPlay,
        onLoadedData: a.onLoadedData,
        onWaiting: a.onWaiting,
        callbacks: R,
        loggingConfig: v.loggingConfig,
        loggingToSNAPLAdditionalData: v.loggingToSNAPLAdditionalData,
        mediaId: h,
        children: a.children,
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
