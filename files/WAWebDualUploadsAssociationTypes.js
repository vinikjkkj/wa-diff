__d(
  "WAWebDualUploadsAssociationTypes",
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
    function s(t) {
      return t != null ? e.has(t) : !1;
    }
    l.isDualUploadAssociationType = s;
  },
  98,
);
