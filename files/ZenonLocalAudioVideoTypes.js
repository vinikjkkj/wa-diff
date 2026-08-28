__d(
  "ZenonLocalAudioVideoTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        MUTE_DETECTION_AUDIO: "muteDetectionAudio",
        PREVIEW_AUDIO: "previewAudio",
        PRIMARY_AUDIO: "audio",
      },
      l = { PREVIEW_VIDEO: "previewVideo", PRIMARY_VIDEO: "video" },
      s = { SCREEN: "screen", SCREEN_AUDIO: "screenAudio" },
      u = babelHelpers.extends({}, e, l, s),
      c = n("$InternalEnum").Mirrored(["None", "RelaxConstraints"]),
      d = n("$InternalEnum").Mirrored(["Strong", "Weak"]);
    ((i.TrackType = u),
      (i.ZenonLocalMediaFallbackStrategy = c),
      (i.ZenonLocalMediaOwnershipType = d));
  },
  66,
);
