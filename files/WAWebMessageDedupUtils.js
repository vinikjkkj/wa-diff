__d(
  "WAWebMessageDedupUtils",
  ["WALogger", "WAWebPendingMessageKey"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Map();
    function c(t, n, r) {
      var a,
        i = o("WAWebPendingMessageKey").createPendingMessageKey(t, n, r),
        l = ((a = u.get(i)) != null ? a : 0) + 1;
      return (
        u.set(i, l),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[message-dedup] add message: ",
              ", total: ",
              "",
            ])),
          i,
          l,
        ),
        l
      );
    }
    function d(e) {
      e === 0 &&
        (u.size > 0 &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[message-dedup] message cache cleared, total: ",
                "",
              ])),
            u.size,
          ),
        u.clear());
    }
    ((l.addPendingMessage = c), (l.maybeClearPendingMessages = d));
  },
  98,
);
