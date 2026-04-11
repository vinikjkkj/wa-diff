__d(
  "WAWebChatOpenMetricsStore",
  [
    "WAWebLidMigrationUtils",
    "WAWebQplFlowWrapper",
    "WAWebRenderCursorGetWindowHeight",
    "WAWebUiActionWamEvent",
    "WAWebWamEnumUiActionType",
    "WAWebWebcChatOpenWamEvent",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891425633, "3259"),
      s = new Map();
    function u(t) {
      var n = o("WAWebLidMigrationUtils").chatIsLid(t),
        a = r("WAWebRenderCursorGetWindowHeight")(),
        i = new (o("WAWebUiActionWamEvent").UiActionWamEvent)({
          uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.CHAT_OPEN,
          uiActionPreloaded: !0,
          isLid: n,
        }),
        l = new (o("WAWebWebcChatOpenWamEvent").WebcChatOpenWamEvent)({
          webcUnreadCount: t.unreadCount,
          webcWindowHeightFloat: a,
        }),
        u = o("WAWebQplFlowWrapper").QPL.markerStart(e, {
          annotations: {
            int: { unreadMessageCount: t.unreadCount, windowHeight: a },
          },
          cancelExisting: !0,
          cancelOnUnload: !0,
        }).instanceKey;
      s.set(t.id.toString(), {
        instanceKey: u,
        openEvent: l,
        uiActionEvent: i,
      });
    }
    function c(e) {
      var t = e.id.toString(),
        n = s.get(t);
      return n == null ? null : (s.delete(t), n);
    }
    ((l.startChatOpenMetrics = u), (l.consumeChatOpenMetrics = c));
  },
  98,
);
