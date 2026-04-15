__d(
  "useWAWebAssociatedMessages",
  [
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebViewMode.flow",
    "react-compiler-runtime",
    "useWAWebAggregatedView",
    "useWAWebEqualModelMemo",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("react-compiler-runtime").c(4),
        a = t === void 0 ? o("WAWebViewMode.flow").ViewModeSurface.CHAT : t,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [o("WAWebMsgGetters").getId]), (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebMsgValues").useMsgValues(e.id, i),
        s = l[0],
        u = o("useWAWebAggregatedView").useAggregatedView(
          o("WAWebMsgCollection").MsgCollection.byParentMessage,
          s,
        ),
        c;
      n[1] !== u || n[2] !== a
        ? ((c = o(
            "WAWebMessageAssociationUIUtils",
          ).filterOutVisibleAssociatedMessages(u, a)),
          (n[1] = u),
          (n[2] = a),
          (n[3] = c))
        : (c = n[3]);
      var d = c;
      return r("useWAWebEqualModelMemo")(d);
    }
    l.useHiddenAssociatedMessages = e;
  },
  98,
);
