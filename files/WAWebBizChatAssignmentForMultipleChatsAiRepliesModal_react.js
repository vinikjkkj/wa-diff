__d(
  "WAWebBizChatAssignmentForMultipleChatsAiRepliesModal.react",
  ["fbt", "WAWebConfirmPopup.react", "WAWebModalManager", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = s._(/*BTDS*/ "Assign Chats"),
        t = s._(
          /*BTDS*/ "Turn off AI replies for these chats before you assign them to another agent.",
        ),
        n = s._(/*BTDS*/ "Dismiss");
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "chat-assignment-multi-ai-replies",
        },
        title: e,
        onCancel: o("WAWebModalManager").closeModalManager,
        cancelText: n,
        children: t,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
