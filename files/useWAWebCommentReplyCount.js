__d(
  "useWAWebCommentReplyCount",
  ["useWAWebEventTargetValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("useWAWebEventTargetValue")(
        e,
        "add remove change:replyCount",
        function () {
          var t = 0;
          for (var n of e) {
            var r;
            t += (r = n.replyCount) != null ? r : 0;
          }
          return t;
        },
      );
    }
    l.useWAWebCommentReplyCount = e;
  },
  98,
);
