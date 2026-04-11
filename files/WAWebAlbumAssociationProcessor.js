__d(
  "WAWebAlbumAssociationProcessor",
  [
    "WAWebCreateAssociationProcessor",
    "WAWebMessageAssociation.flow",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o(
        "WAWebCreateAssociationProcessor",
      ).createAssociationMsgProcessorWithDetachedMessages({
        type: o("WAWebMessageAssociation.flow").MessageAssociationType
          .MEDIA_ALBUM,
        viewMode: o("WAWebViewMode.flow").ViewModeType.MEDIA_ALBUM,
      }),
      s = e;
    l.default = s;
  },
  98,
);
