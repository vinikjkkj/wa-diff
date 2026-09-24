__d(
  "WAWebForwardContentMsgs",
  [
    "WAWebForwardAssociationConfig",
    "WAWebMessageAssociationUIUtils",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.flatMap(function (e) {
        return o("WAWebForwardAssociationConfig").isForwardContainerMsgType(
          e.type,
        )
          ? o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(
              e.id,
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
            )
          : [e];
      });
    }
    l.getForwardContentMsgs = e;
  },
  98,
);
