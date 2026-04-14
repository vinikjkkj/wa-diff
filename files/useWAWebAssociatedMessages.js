__d(
  "useWAWebAssociatedMessages",
  [
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebViewMode.flow",
    "useWAWebAggregatedView",
    "useWAWebEqualModelMemo",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = o("WAWebViewMode.flow").ViewModeSurface.CHAT);
      var n = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebMsgGetters").getId,
        ]),
        a = n[0],
        i = o("useWAWebAggregatedView").useAggregatedView(
          o("WAWebMsgCollection").MsgCollection.byParentMessage,
          a,
        ),
        l = o(
          "WAWebMessageAssociationUIUtils",
        ).filterOutVisibleAssociatedMessages(i, t);
      return r("useWAWebEqualModelMemo")(l);
    }
    l.useHiddenAssociatedMessages = e;
  },
  98,
);
