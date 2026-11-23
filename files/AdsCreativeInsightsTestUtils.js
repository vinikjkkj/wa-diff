__d(
  "AdsCreativeInsightsTestUtils",
  ["WebDriverConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        return (
          r("WebDriverConfig").isJestE2ETestRun &&
          r("WebDriverConfig").testPath != null
        );
      },
      s = {
        playable_duration_in_ms: 1e4,
        video: 200,
        height: 400,
        preferred_thumbnail: {
          image: {
            uri: "/intern/images/video_thumbnails/video_1_thumbnail.png",
          },
        },
        publish_time: 1764540880,
      };
    ((l.isVideoE2ETestRun = e), (l.videoDataMock = s));
  },
  98,
);
