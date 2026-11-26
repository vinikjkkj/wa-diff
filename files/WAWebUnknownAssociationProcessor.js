__d(
  "WAWebUnknownAssociationProcessor",
  [
    "WAWebCreateAssociationProcessor",
    "WAWebMessageAssociation.flow",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebCreateAssociationProcessor").createAssociationMsgProcessor({
        type: o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN,
        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
      }),
      s = e;
    l.default = s;
  },
  98,
);
