__d(
  "WAWebBotPluginAssociationProcessor",
  [
    "WAWebCreateAssociationProcessor",
    "WAWebMessageAssociation.flow",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebCreateAssociationProcessor").createAssociationMsgProcessor({
        type: o("WAWebMessageAssociation.flow").MessageAssociationType
          .BOT_PLUGIN,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
      }),
      s = e;
    l.default = s;
  },
  98,
);
