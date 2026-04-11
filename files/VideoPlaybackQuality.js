__d(
  "VideoPlaybackQuality",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      if (typeof e.getVideoPlaybackQuality == "function")
        return e.getVideoPlaybackQuality().droppedVideoFrames;
      var t = e.webkitDroppedFrameCount;
      return typeof t == "number" ? t : 0;
    }
    function l(e) {
      if (typeof e.getVideoPlaybackQuality == "function")
        return e.getVideoPlaybackQuality().totalVideoFrames;
      var t = e.webkitDecodedFrameCount;
      return typeof t == "number" ? t : 0;
    }
    ((i.getDroppedFrames = e), (i.getTotalFrames = l));
  },
  66,
);
