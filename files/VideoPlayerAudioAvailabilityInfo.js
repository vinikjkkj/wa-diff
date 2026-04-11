__d(
  "VideoPlayerAudioAvailabilityInfo",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.audioAvailability,
        n = e.mutedSegmentsUnsanitized,
        r = n
          .map(function (e) {
            return e.muteStartTimeInSec != null &&
              e.muteEndTimeInSec != null &&
              e.muteEndTimeInSec > e.muteStartTimeInSec
              ? {
                  muteEndTimeInSec: e.muteEndTimeInSec,
                  muteStartTimeInSec: e.muteStartTimeInSec,
                }
              : null;
          })
          .filter(Boolean);
      return { audioAvailability: t, mutedSegments: r };
    }
    function s(e, t) {
      var n = e.audioAvailability,
        o = e.mutedSegments,
        a = t.playheadPosition,
        i,
        l = !1,
        s = !1;
      switch (n) {
        case "AVAILABLE_BUT_MUTED":
          o.length > 0
            ? ((l =
                a != null &&
                o.some(function (e) {
                  return e.muteStartTimeInSec <= a && a <= e.muteEndTimeInSec;
                })),
              l
                ? ((i = "VOLUME_COPYRIGHT_PARTIAL_SILENCED"), (s = !0))
                : (i = "VOLUME_COPYRIGHT_PARTIAL_NOT_SILENCED"))
            : ((i = "VOLUME_COPYRIGHT_FULL"), (s = !0));
          break;
        case "AVAILABLE_BUT_SILENT":
        case "UNAVAILABLE":
          ((i = "VOLUME_SILENT"), (s = !0));
          break;
        case "AVAILABLE":
        case "UNKNOWN":
        case "AVAILABLE_BUT_MISSING_LOUDNESS_DATA":
        case null:
        case void 0:
          i = "VOLUME_DEFAULT";
          break;
        default:
          (r("FBLogger")("comet_video_player").mustfix(
            "Unhandled audio availability: %s",
            n,
          ),
            (i = "VOLUME_DEFAULT"));
          break;
      }
      return {
        isPlayheadWithinMutedSegment: l,
        isSilentAtPlayhead: s,
        volumeControlState: i,
      };
    }
    var u = e({ audioAvailability: null, mutedSegmentsUnsanitized: [] });
    ((l.makeVideoPlayerAudioAvailabilityInfo = e),
      (l.makeVideoPlayerAudioAvailabilityAtPlayheadInfo = s),
      (l.VideoPlayerAudioAvailabilityInfoDefault = u));
  },
  98,
);
