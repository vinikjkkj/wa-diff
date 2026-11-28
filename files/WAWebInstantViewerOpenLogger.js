__d(
  "WAWebInstantViewerOpenLogger",
  [
    "WAWebFrontendMsgGetters",
    "WAWebMediaTypes",
    "WAWebMsgType",
    "WAWebUiActionWamEvent",
    "WAWebWamEnumUiActionType",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "peek_chat_card",
      s = 3e4;
    function u(t) {
      var n,
        r = o("WAWebFrontendMsgGetters").getChat(t);
      return new (o("WAWebUiActionWamEvent").UiActionWamEvent)({
        uiActionType:
          t.type === o("WAWebMsgType").MSG_TYPE.INSTANT_VIDEO
            ? o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.VIDEO_OPEN
            : o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.IMAGE_OPEN,
        uiActionPreloaded:
          t.mediaData.mediaStage ===
          o("WAWebMediaTypes").MediaDataStage.RESOLVED,
        uiActionPresentationSource: e,
        isLid: o("WAWebWamMsgUtils").msgIsLid(
          t,
          r.id,
          !!((n = r.groupMetadata) != null && n.isLidAddressingMode),
        ),
      });
    }
    function c(e) {
      (e.markUiActionT(), !(e.uiActionT > s) && e.commit());
    }
    ((l.startInstantViewerOpenLog = u), (l.commitInstantViewerOpenLog = c));
  },
  98,
);
