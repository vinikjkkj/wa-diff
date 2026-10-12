__d(
  "VideoPlayerNextgendashDecodeCapabilityMatcher",
  [
    "VideoPlayerSmartPlayerDecodeCapabilityMatcher",
    "VideoPlayerSmartPlayerDecodeCapabilityPolicy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return o(
        "VideoPlayerSmartPlayerDecodeCapabilityMatcher",
      ).getVideoPlayerSmartPlayerDecodeCapability(e, {
        bitrate: t.bandwidth,
        codecFamily: t.mimeCodecsParsed.codecFamily,
        frameRate: t.frameRate,
        height: t.height,
        width: t.width,
      });
    }
    function s(t, n) {
      return (
        t == null ||
        o(
          "VideoPlayerSmartPlayerDecodeCapabilityPolicy",
        ).isVideoPlayerSmartPlayerDecodeCapabilityPlayable(e(t, n))
      );
    }
    function u(t, n) {
      if (n.length === 0)
        return {
          candidateCount: 0,
          matchedCount: 0,
          outcome: "no_candidates",
          representations: n,
        };
      if (t == null)
        return {
          candidateCount: n.length,
          matchedCount: 0,
          outcome: "missing",
          representations: n,
        };
      var r = [],
        a = 0;
      for (var i of n) {
        var l = e(t, i);
        l == null
          ? r.push(i)
          : (a++,
            o(
              "VideoPlayerSmartPlayerDecodeCapabilityPolicy",
            ).isVideoPlayerSmartPlayerDecodeCapabilityPlayable(l) && r.push(i));
      }
      return {
        candidateCount: n.length,
        matchedCount: a,
        outcome:
          r.length < n.length
            ? "filtered"
            : a > 0
              ? "matched_unfiltered"
              : "unmatched",
        representations: r,
      };
    }
    ((l.getVideoPlayerNextgendashDecodeCapability = e),
      (l.isVideoPlayerNextgendashRepresentationPlayable = s),
      (l.filterVideoPlayerNextgendashRepresentationsByDecodeCapabilitiesWithResult =
        u));
  },
  98,
);
