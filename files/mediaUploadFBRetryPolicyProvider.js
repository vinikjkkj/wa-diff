__d(
  "mediaUploadFBRetryPolicyProvider",
  ["MediaUploadTime", "mediaUploadFBRetryPolicyOverride"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        backoff: {
          initial: (e = o("MediaUploadTime")).millisecondsToTime(400),
          jitter: e.millisecondsToTime(100),
          expBase: e.millisecondsToTime(100),
          expMultiplier: 1.5,
          max: e.secondsToTime(8),
        },
        limits: { totalRetryCount: 3e3, totalTime: e.hoursToTime(6) },
      };
    function u() {
      var e;
      return (e = o(
        "mediaUploadFBRetryPolicyOverride",
      ).getMediaUploadFBRetryPolicyOverride()) != null
        ? e
        : s;
    }
    l.default = u;
  },
  98,
);
