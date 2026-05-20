__d(
  "WAWebForwardAssociationConfig",
  [
    "WAWebMediaGatingUtils",
    "WAWebMessageAssociation.flow",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
      {
        associationType: o("WAWebMessageAssociation.flow")
          .MessageAssociationType.HD_IMAGE_DUAL_UPLOAD,
        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
        isEnabled: o("WAWebMediaGatingUtils")
          .isHdImageDualUploadConsumptionEnabled,
      },
      {
        associationType: o("WAWebMessageAssociation.flow")
          .MessageAssociationType.MEDIA_ALBUM,
        viewMode: o("WAWebViewMode.flow").ViewModeType.MEDIA_ALBUM,
        isEnabled: o("WAWebMediaGatingUtils").isAlbumV2SenderEnabled,
      },
    ];
    function s(t) {
      return e.find(function (e) {
        return e.associationType === t && e.isEnabled();
      });
    }
    l.getForwardAssociationConfig = s;
  },
  98,
);
