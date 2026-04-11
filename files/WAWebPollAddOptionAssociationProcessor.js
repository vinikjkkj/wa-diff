__d(
  "WAWebPollAddOptionAssociationProcessor",
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
          .POLL_ADD_OPTION,
        viewMode: o("WAWebViewMode.flow").ViewModeType.POLL_ADD_OPTION,
      }),
      s = e;
    l.default = s;
  },
  98,
);
