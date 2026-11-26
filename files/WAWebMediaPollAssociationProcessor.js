__d(
  "WAWebMediaPollAssociationProcessor",
  [
    "WAWebCreateAssociationProcessor",
    "WAWebMessageAssociation.flow",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebCreateAssociationProcessor").createAssociationMsgProcessor({
        type: o("WAWebMessageAssociation.flow").MessageAssociationType
          .MEDIA_POLL,
        viewMode: o("WAWebViewMode.flow").ViewModeType.POLL_MEDIA,
      }),
      s = e;
    l.default = s;
  },
  98,
);
