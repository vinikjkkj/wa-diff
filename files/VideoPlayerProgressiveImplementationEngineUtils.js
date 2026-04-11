__d(
  "VideoPlayerProgressiveImplementationEngineUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "hd",
      l = "sd",
      s = "mediastream";
    function u(t, n, r) {
      return t ? (n != null ? e : l) : r != null ? l : n != null ? e : l;
    }
    function c(t) {
      var n,
        r = (n = t.mediaStream) != null ? n : null,
        o = [];
      r != null
        ? o.push(s)
        : (t.sdSrc != null && o.push(l), t.hdSrc != null && o.push(e));
      var a = [],
        i = [],
        c = r != null ? s : u(t.hdSrcPreferred, t.hdSrc, t.sdSrc);
      return babelHelpers.extends({}, t, {
        availableAudioTracks: a,
        availableQualities: o,
        availableVideoTracks: i,
        playingAudioTrackID: null,
        playingMediaStream: r,
        playingQuality: null,
        playingSrc: null,
        selectedQuality: c,
        targetQuality: c,
        targetSrc: null,
      });
    }
    function d(t, n) {
      if (t.playingMediaStream != null) return t;
      var r = t.hdSrc,
        o = t.sdSrc,
        a,
        i;
      return (
        n === "notselected" || n === "auto"
          ? ((a = o != null ? l : r != null ? e : l),
            (i = o != null ? o : r != null ? r : null))
          : n === e && r != null
            ? ((a = e), (i = r))
            : n === l && o != null
              ? ((a = l), (i = o))
              : ((a = l), (i = null)),
        i === "" && (i = null),
        babelHelpers.extends({}, t, {
          selectedQuality: n,
          targetQuality: a,
          targetSrc: i,
        })
      );
    }
    ((i.createResolvedVideoInfoProgressive = c),
      (i.updatePlayingVideoInfoProgressiveWithUserSelectedQuality = d));
  },
  66,
);
