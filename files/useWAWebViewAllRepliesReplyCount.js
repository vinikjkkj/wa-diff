__d(
  "useWAWebViewAllRepliesReplyCount",
  ["WAWebThreadMsgUtils", "countWhere", "react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState;
    function d(e, t) {
      return r("countWhere")(e.msgs.getModelsArray(), function (e) {
        return o("WAWebThreadMsgUtils").isMsgInThread(e, t);
      });
    }
    function m(e, t) {
      var n = u(
          function () {
            return e != null && t != null ? d(e, t) : 0;
          },
          [e, t],
        ),
        r = c(e),
        a = r[0],
        i = r[1],
        l = c(t),
        s = l[0],
        m = l[1],
        p = c(n),
        _ = p[0],
        f = p[1];
      return (
        (e !== a || t !== s) && (i(e), m(t), f(n())),
        o("useWAWebListener").useListener(
          e != null && t != null ? e.msgs : null,
          ["add", "remove", "bulk_add"],
          function () {
            f(n());
          },
        ),
        _
      );
    }
    l.default = m;
  },
  98,
);
