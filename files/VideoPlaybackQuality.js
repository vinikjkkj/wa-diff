__d(
  "VideoPlaybackQuality",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      if (typeof e.getVideoPlaybackQuality == "function") {
        var t = e.getVideoPlaybackQuality();
        return {
          droppedFrames: t.droppedVideoFrames,
          totalFrames: t.totalVideoFrames,
        };
      }
      var n = e,
        r = n.webkitDroppedFrameCount,
        o = n.webkitDecodedFrameCount;
      return {
        droppedFrames: typeof r == "number" ? r : 0,
        totalFrames: typeof o == "number" ? o : 0,
      };
    }
    function l(t) {
      return e(t).droppedFrames;
    }
    function s(t) {
      return e(t).totalFrames;
    }
    ((i.getFramesSnapshot = e),
      (i.getDroppedFrames = l),
      (i.getTotalFrames = s));
  },
  66,
);
