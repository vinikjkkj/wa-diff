__d(
  "WAWebMessageDedupUtils",
  ["WALogger", "WAWebABProps", "WAWebPendingMessageKey"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Map();
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_pending_message_cache_enabled",
      );
    }
    function m(t, n, r) {
      var a,
        i = o("WAWebPendingMessageKey").createPendingMessageKey(t, n, r),
        l = ((a = c.get(i)) != null ? a : 0) + 1;
      return (
        c.set(i, l),
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
    function p(e, t, n) {
      var r = o("WAWebPendingMessageKey").createPendingMessageKey(e, t, n),
        a = c.get(r);
      return a == null
        ? !1
        : (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[message-dedup] message ",
                " is pending, total: ",
                "",
              ])),
            r,
            a,
          ),
          !0);
    }
    function _(e) {
      e === 0 &&
        (c.size > 0 &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[message-dedup] message cache cleared, total: ",
                "",
              ])),
            c.size,
          ),
        c.clear());
    }
    ((l.isPengingMessageCacheEnabled = d),
      (l.addPendingMessage = m),
      (l.hasPendingMessage = p),
      (l.maybeClearPendingMessages = _));
  },
  98,
);
