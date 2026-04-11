__d(
  "WAWebPipVideoRefControls.react",
  ["WAWebPipVideoControls.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(37),
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
        s = l.disableAudioControls,
        c = l.refVideo,
        d;
      n[3] !== c
        ? ((d = function () {
            c == null || c.play();
          }),
          (n[3] = c),
          (n[4] = d))
        : (d = n[4]);
      var m = d,
        p;
      n[5] !== c
        ? ((p = function () {
            c == null || c.pause();
          }),
          (n[5] = c),
          (n[6] = p))
        : (p = n[6]);
      var _ = p,
        f;
      n[7] !== c
        ? ((f = function (t) {
            c == null || c.setCurrentTime(t);
          }),
          (n[7] = c),
          (n[8] = f))
        : (f = n[8]);
      var g = f,
        h;
      n[9] !== s || n[10] !== c
        ? ((h = function (t) {
            s !== !0 && (c == null || c.setVolume(t));
          }),
          (n[9] = s),
          (n[10] = c),
          (n[11] = h))
        : (h = n[11]);
      var y = h,
        C;
      n[12] !== s || n[13] !== c
        ? ((C = function (t) {
            s !== !0 && (c == null || c.setMuted(t));
          }),
          (n[12] = s),
          (n[13] = c),
          (n[14] = C))
        : (C = n[14]);
      var b = C;
      if (!a.refVideo) return null;
      var v = a.videoMetadata;
      if (!v) return null;
      var S = s === !0 ? 0 : v.volume,
        R = s === !0 ? !0 : v.muted,
        L = a.handleSetCurrentTimeByControls
          ? a.handleSetCurrentTimeByControls
          : g,
        E;
      return (
        n[15] !== R ||
        n[16] !== S ||
        n[17] !== _ ||
        n[18] !== m ||
        n[19] !== b ||
        n[20] !== y ||
        n[21] !== a.controlsClassName ||
        n[22] !== a.ctwaSourceUrl ||
        n[23] !== a.disableAudioControls ||
        n[24] !== a.isFullscreenMode ||
        n[25] !== a.isVideoPlaying ||
        n[26] !== a.newPiPStyle ||
        n[27] !== a.onClose ||
        n[28] !== a.onFullscreenToggle ||
        n[29] !== a.onPlaybackRateChange ||
        n[30] !== a.playbackRate ||
        n[31] !== i ||
        n[32] !== L ||
        n[33] !== v.bufferedTime ||
        n[34] !== v.currentTime ||
        n[35] !== v.duration
          ? ((E = u.jsx(r("WAWebPipVideoControls.react"), {
              ref: i,
              duration: v.duration,
              progress: v.currentTime,
              volume: S,
              muted: R,
              bufferedTime: v.bufferedTime,
              onPlay: m,
              onPause: _,
              onProgressChange: L,
              onVolumeValueChange: y,
              onMutedValueChange: b,
              isVideoPlaying: a.isVideoPlaying,
              isFullscreenMode: a.isFullscreenMode,
              className: a.controlsClassName,
              ctwaSourceUrl: a.ctwaSourceUrl,
              newPiPStyle: a.newPiPStyle,
              onFullscreenToggle: a.onFullscreenToggle,
              onClose: a.onClose,
              playbackRate: a.playbackRate,
              onPlaybackRateChange: a.onPlaybackRateChange,
              disableAudioControls: a.disableAudioControls,
            })),
            (n[15] = R),
            (n[16] = S),
            (n[17] = _),
            (n[18] = m),
            (n[19] = b),
            (n[20] = y),
            (n[21] = a.controlsClassName),
            (n[22] = a.ctwaSourceUrl),
            (n[23] = a.disableAudioControls),
            (n[24] = a.isFullscreenMode),
            (n[25] = a.isVideoPlaying),
            (n[26] = a.newPiPStyle),
            (n[27] = a.onClose),
            (n[28] = a.onFullscreenToggle),
            (n[29] = a.onPlaybackRateChange),
            (n[30] = a.playbackRate),
            (n[31] = i),
            (n[32] = L),
            (n[33] = v.bufferedTime),
            (n[34] = v.currentTime),
            (n[35] = v.duration),
            (n[36] = E))
          : (E = n[36]),
        E
      );
    }
    l.VideoRefControls = c;
  },
  98,
);
