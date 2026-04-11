__d(
  "useWAWebCommentModalListeners",
  ["WAWebCommentModalActions", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o("useWAWebListener").useListener(
        o("WAWebCommentModalActions").CommentModalActions,
        "scroll_reply_modal_to_bottom",
        e.scrollReplyModalToBottom,
      );
    }
    l.default = e;
  },
  98,
);
