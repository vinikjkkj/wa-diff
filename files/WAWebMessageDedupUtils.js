__d(
  "WAWebMessageDedupUtils",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map();
    function u(t) {
      t === 0 &&
        (s.size > 0 &&
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[message-dedup] message cache cleared, total: ",
                "",
              ])),
            s.size,
          ),
        s.clear());
    }
    l.maybeClearPendingMessages = u;
  },
  98,
);
