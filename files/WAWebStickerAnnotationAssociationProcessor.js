__d(
  "WAWebStickerAnnotationAssociationProcessor",
  [
    "WAWebAssociationProcessorConstants",
    "WAWebMessageAssociation.flow",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        type: o("WAWebMessageAssociation.flow").MessageAssociationType
          .STICKER_ANNOTATION,
        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
        processorType: o("WAWebAssociationProcessorConstants")
          .AssociationProcessorType.Regular,
      },
      s = e;
    l.default = s;
  },
  98,
);
