__d(
  "WAWebPipVideoRefControls.react",
  ["WAWebPipVideoControls.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o.disableAudioControls,
        i = o.refVideo,
        l = function () {
          i == null || i.play();
        },
        s = function () {
          i == null || i.pause();
        },
        c = function (t) {
          i == null || i.setCurrentTime(t);
        },
        d = function (t) {
          a !== !0 && (i == null || i.setVolume(t));
        },
        m = function (t) {
          a !== !0 && (i == null || i.setMuted(t));
        };
      if (!o.refVideo) return null;
      var p = o.videoMetadata;
      if (!p) return null;
      var _ = a === !0 ? 0 : p.volume,
        f = a === !0 ? !0 : p.muted;
      return u.jsx(r("WAWebPipVideoControls.react"), {
        ref: n,
        duration: p.duration,
        progress: p.currentTime,
        volume: _,
        muted: f,
        bufferedTime: p.bufferedTime,
        onPlay: l,
        onPause: s,
        onProgressChange: o.handleSetCurrentTimeByControls
          ? o.handleSetCurrentTimeByControls
          : c,
        onVolumeValueChange: d,
        onMutedValueChange: m,
        isVideoPlaying: o.isVideoPlaying,
        isFullscreenMode: o.isFullscreenMode,
        className: o.controlsClassName,
        ctwaSourceUrl: o.ctwaSourceUrl,
        newPiPStyle: o.newPiPStyle,
        onFullscreenToggle: o.onFullscreenToggle,
        onClose: o.onClose,
        playbackRate: o.playbackRate,
        onPlaybackRateChange: o.onPlaybackRateChange,
        disableAudioControls: o.disableAudioControls,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"),
      (l.VideoRefControls = c));
  },
  98,
);
