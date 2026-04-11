__d(
  "useWAWebCommentReplyCount",
  ["react-compiler-runtime", "useWAWebEventTargetValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = function () {
              var t = 0;
              for (var n of e) {
                var r;
                t = t + ((r = n.replyCount) != null ? r : 0);
              }
              return t;
            }),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        r("useWAWebEventTargetValue")(e, "add remove change:replyCount", n)
      );
    }
    l.useWAWebCommentReplyCount = e;
  },
  98,
);
