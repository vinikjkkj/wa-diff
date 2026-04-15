__d(
  "useWAWebViewAllRepliesReplyCount",
  [
    "WAWebThreadMsgUtils",
    "countWhere",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
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
      var n = o("react-compiler-runtime").c(6),
        r;
      n[0] !== e || n[1] !== t
        ? ((r = function () {
            return e != null && t != null ? d(e, t) : 0;
          }),
          (n[0] = e),
          (n[1] = t),
          (n[2] = r))
        : (r = n[2]);
      var a = r,
        i = c(e),
        l = i[0],
        s = i[1],
        u = c(t),
        m = u[0],
        p = u[1],
        _ = c(a),
        f = _[0],
        g = _[1];
      (e !== l || t !== m) && (s(e), p(t), g(a()));
      var h;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = ["add", "remove", "bulk_add"]), (n[3] = h))
        : (h = n[3]);
      var y;
      return (
        n[4] !== a
          ? ((y = function () {
              g(a());
            }),
            (n[4] = a),
            (n[5] = y))
          : (y = n[5]),
        o("useWAWebListener").useListener(
          e != null && t != null ? e.msgs : null,
          h,
          y,
        ),
        f
      );
    }
    l.default = m;
  },
  98,
);
