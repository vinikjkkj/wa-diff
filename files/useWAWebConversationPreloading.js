__d(
  "useWAWebConversationPreloading",
  ["WAWebCmd", "react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      var t = s(null),
        n = t[0],
        r = t[1],
        a = s(null),
        i = a[0],
        l = a[1],
        u = s(null),
        c = u[0],
        d = u[1],
        m = s(null),
        p = m[0],
        _ = m[1];
      return (
        n != null &&
          e != null &&
          n.id.toString() === e.id.toString() &&
          (r(null), l(null), d(null), _(null)),
        e != null &&
          i != null &&
          (e == null ? void 0 : e.id.toString()) ===
            (i == null ? void 0 : i.id.toString()) &&
          (r(null), l(null), d(null), _(null)),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "warm_conversation",
          function (t) {
            var n = t.chat;
            if ((n == null ? void 0 : n.hasPreloaded) === !0) {
              var o,
                a = (o = n.msgs.last()) != null ? o : null;
              (r(null),
                l(n),
                d(n.msgs),
                _(
                  a != null
                    ? {
                        collection: n.msgs,
                        msg: a,
                        isUnreadDivider: n.shouldShowUnreadDivider(),
                      }
                    : null,
                ));
              return;
            }
            (e == null || n.id.toString() !== e.id.toString()) && r(n);
          },
        ),
        o("useWAWebListener").useListener(n, "msgs:preloaded", function () {
          if (n != null) {
            var e,
              t = n.msgs,
              o = (e = t.last()) != null ? e : null;
            (r(null),
              l(n),
              d(t),
              _(
                o != null
                  ? {
                      collection: t,
                      msg: o,
                      isUnreadDivider: n.shouldShowUnreadDivider(),
                    }
                  : null,
              ));
          }
        }),
        { warmedChat: i, warmedFocusCtx: p, warmedMsgCollection: c }
      );
    }
    l.default = u;
  },
  98,
);
