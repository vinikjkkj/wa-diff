__d(
  "WAWebDualUploadsAssociationProcessor",
  [
    "WAWebAssociationProcessorConstants",
    "WAWebMessageAssociation.flow",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = {
        type: (e = o("WAWebMessageAssociation.flow")).MessageAssociationType
          .HD_IMAGE_DUAL_UPLOAD,
        viewMode: (s = o("WAWebViewMode.flow")).ViewModeType.HIDDEN,
        processorType: (u = o("WAWebAssociationProcessorConstants"))
          .AssociationProcessorType.Regular,
      },
      d = {
        type: e.MessageAssociationType.HD_VIDEO_DUAL_UPLOAD,
        viewMode: s.ViewModeType.HIDDEN,
        processorType: u.AssociationProcessorType.Regular,
      },
      m = {
        type: e.MessageAssociationType.HEVC_VIDEO_DUAL_UPLOAD,
        viewMode: s.ViewModeType.HIDDEN,
        processorType: u.AssociationProcessorType.Regular,
      },
      p = {
        type: e.MessageAssociationType.AV1_VIDEO_DUAL_UPLOAD,
        viewMode: s.ViewModeType.HIDDEN,
        processorType: u.AssociationProcessorType.Regular,
      };
    ((l.ImageDualUploadsAssociationProcessor = c),
      (l.VideoDualUploadsAssociationProcessor = d),
      (l.HevcDualUploadsAssociationProcessor = m),
      (l.Av1DualUploadsAssociationProcessor = p));
  },
  98,
);
