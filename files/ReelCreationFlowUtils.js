__d(
  "ReelCreationFlowUtils",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("$InternalEnum")).Mirrored([
        "PUBLISH_NOW",
        "SCHEDULE",
        "DRAFT",
      ]),
      s = e.Mirrored(["AUDIO", "VIDEO"]),
      u = e.Mirrored(["CREATE", "EDIT", "AB_TESTING"]),
      c = e.Mirrored(["CREATOR_STUDIO", "MBS", "REELS_BULK_UPLOAD"]),
      d = e.Mirrored(["ENABLED", "DISABLED"]);
    ((i.ReelPublishType = l),
      (i.ReelEnhancementType = s),
      (i.ReelComposerMode = u),
      (i.ReelsComposerEntrypoint = c),
      (i.ReelsComposerOriginalAudioReuseMode = d));
  },
  66,
);
