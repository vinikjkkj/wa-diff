__d(
  "WAWebInvisiblePlaceholderViewModeProcessor",
  ["WAWebCreateViewModeProcessor", "WAWebMsgType", "WAWebViewMode.flow"],
  function (t, n, r, o, a, i, l) {
    var e = o(
      "WAWebCreateViewModeProcessor",
    ).createFullyHiddenViewModeProcessor({
      type: o("WAWebViewMode.flow").ViewModeType.INVISIBLE_PLACEHOLDER,
      compatibleMessageTypes: [
        o("WAWebMsgType").MSG_TYPE.ALBUM,
        o("WAWebMsgType").MSG_TYPE.POLL_CREATION,
      ],
    });
    l.InvisiblePlaceholderViewModeProcessor = e;
  },
  98,
);
