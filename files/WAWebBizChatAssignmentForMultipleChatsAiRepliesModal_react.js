__d(
  "WAWebBizChatAssignmentForMultipleChatsAiRepliesModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("react-compiler-runtime").c(4),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s._(/*BTDS*/ "Assign Chats")), (e[0] = t))
        : (t = e[0]);
      var n = t,
        r;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s._(
            /*BTDS*/ "Turn off AI replies for these chats before you assign them to another agent.",
          )),
          (e[1] = r))
        : (r = e[1]);
      var a = r,
        i;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Dismiss")), (e[2] = i))
        : (i = e[2]);
      var l = i,
        c;
      return (
        e[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: {
                surface: "unknown",
                viewName: "chat-assignment-multi-ai-replies",
              },
              title: n,
              onCancel: o("WAWebModalManager").closeModalManager,
              cancelText: l,
              children: a,
            })),
            (e[3] = c))
          : (c = e[3]),
        c
      );
    }
    l.default = c;
  },
  226,
);
