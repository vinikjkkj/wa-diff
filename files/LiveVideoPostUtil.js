__d(
  "LiveVideoPostUtil",
  ["AdsPagePostUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        o("AdsPagePostUtils").isNativeVideoPost(e) &&
        (e == null ? void 0 : e.was_fb_live_videos) === !0
      );
    }
    function s(e) {
      return (
        o("AdsPagePostUtils").isNativeVideoPost(e) &&
        (e == null ? void 0 : e.is_live_clip) === !0
      );
    }
    function u(e) {
      var t;
      return (
        o("AdsPagePostUtils").isNativeVideoPost(e) &&
        (e == null ? void 0 : e.is_fb_live_videos) === !0 &&
        (e == null || (t = e.live_video_eligibility) == null
          ? void 0
          : t.includes("ELIGIBLE_FOR_POST_ERROR_MESSAGE_IMPROVEMENT"))
      );
    }
    ((l.isWasLiveVideo = e),
      (l.isLiveClip = s),
      (l.isLiveVideoAndEligibleForUsabilityFix = u));
  },
  98,
);
