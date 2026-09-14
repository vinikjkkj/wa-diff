__d(
  "WAWebDualUploadsAutoDownloadPolicy",
  ["WAWebMessageAssociation.flow"],
  function (t, n, r, o, a, i, l) {
    var e = new Set([
      o("WAWebMessageAssociation.flow").MessageAssociationType
        .HD_IMAGE_DUAL_UPLOAD,
      o("WAWebMessageAssociation.flow").MessageAssociationType
        .HD_VIDEO_DUAL_UPLOAD,
      o("WAWebMessageAssociation.flow").MessageAssociationType
        .HEVC_VIDEO_DUAL_UPLOAD,
    ]);
    function s(e) {
      return !u(e);
    }
    function u(t) {
      var n = t.unsafe();
      return (
        n.parentMsgKey != null &&
        n.associationType != null &&
        e.has(n.associationType)
      );
    }
    ((l.shouldAutoDownloadAssociatedChild = s), (l.isDualUploadHdChildMsg = u));
  },
  98,
);
