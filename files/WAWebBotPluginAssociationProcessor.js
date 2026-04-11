__d(
  "WAWebBotPluginAssociationProcessor",
  [
    "WAWebAssociationProcessorConstants",
    "WAWebMessageAssociation.flow",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        processorType: o("WAWebAssociationProcessorConstants")
          .AssociationProcessorType.Regular,
        type: o("WAWebMessageAssociation.flow").MessageAssociationType
          .BOT_PLUGIN,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
      },
      s = e;
    l.default = s;
  },
  98,
);
