__d(
  "WAWebMaybeGetAppendedViewRepliesThreadId",
  ["WAWebThreadUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (t = e.threadIds) == null
        ? void 0
        : t.filter(function (e) {
            return e.type !== o("WAWebThreadUtils").ThreadType.ViewAllReplies;
          });
    }
    l.maybeGetAppendedViewRepliesThreadId = e;
  },
  98,
);
