__d(
  "WAWebMessageAssociation.flow",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "UNKNOWN",
      "MEDIA_ALBUM",
      "BOT_PLUGIN",
      "MEDIA_POLL",
      "HD_VIDEO_DUAL_UPLOAD",
      "HD_IMAGE_DUAL_UPLOAD",
      "HEVC_VIDEO_DUAL_UPLOAD",
      "POLL_ADD_OPTION",
    ]);
    function l(e) {
      return e.associationType != null;
    }
    ((i.MessageAssociationType = e), (i.isAssociatedMsg = l));
  },
  66,
);
