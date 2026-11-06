__d(
  "WAWebDualUploadsAssociationTypes",
  ["WAWebMessageAssociation.flow"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        (e = o("WAWebMessageAssociation.flow")).MessageAssociationType
          .HD_IMAGE_DUAL_UPLOAD,
        e.MessageAssociationType.HD_VIDEO_DUAL_UPLOAD,
        e.MessageAssociationType.HEVC_VIDEO_DUAL_UPLOAD,
        e.MessageAssociationType.AV1_VIDEO_DUAL_UPLOAD,
        e.MessageAssociationType.ORIGINAL_VIDEO_DUAL_UPLOAD,
        e.MessageAssociationType.ORIGINAL_IMAGE_DUAL_UPLOAD,
      ]);
    function u(e) {
      return e != null ? s.has(e) : !1;
    }
    l.isDualUploadAssociationType = u;
  },
  98,
);
