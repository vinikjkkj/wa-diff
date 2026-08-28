__d(
  "ReelCreationFlowUtils",
  ["$InternalEnum", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = n("$InternalEnum")).Mirrored([
        "PUBLISH_NOW",
        "SCHEDULE",
        "DRAFT",
      ]),
      u = e.Mirrored(["AUDIO", "VIDEO"]),
      c = e.Mirrored(["CREATE", "EDIT", "AB_TESTING"]),
      d = e.Mirrored(["CREATOR_STUDIO", "MBS", "REELS_BULK_UPLOAD"]),
      m = e.Mirrored(["ENABLED", "DISABLED"]),
      p = function (t) {
        switch ((r("vulture")("Zy_DFT_d9vEB43MOHwvCR9PVUGA="), t)) {
          case s.PUBLISH_NOW:
            return "published";
          case s.DRAFT:
            return "draft";
          case s.SCHEDULE:
            return "scheduled";
        }
      };
    ((l.ReelPublishType = s),
      (l.ReelEnhancementType = u),
      (l.ReelComposerMode = c),
      (l.ReelsComposerEntrypoint = d),
      (l.ReelsComposerOriginalAudioReuseMode = m),
      (l.getReelPostStatusFromReelPublishType = p));
  },
  98,
);
