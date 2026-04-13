__d(
  "useWAWebConversationPreloading",
  ["WAWebCmd", "react", "react-compiler-runtime", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = s(null),
        r = n[0],
        a = n[1],
        i = s(null),
        l = i[0],
        u = i[1],
        c = s(null),
        d = c[0],
        m = c[1],
        p = s(null),
        _ = p[0],
        f = p[1];
      (r != null &&
        e != null &&
        r.id.toString() === e.id.toString() &&
        (a(null), u(null), m(null), f(null)),
        e != null &&
          l != null &&
          (e == null ? void 0 : e.id.toString()) ===
            (l == null ? void 0 : l.id.toString()) &&
          (a(null), u(null), m(null), f(null)));
      var g;
      (t[0] !== e
        ? ((g = function (n) {
            var t = n.chat;
            if ((t == null ? void 0 : t.hasPreloaded) === !0) {
              var r,
                o = (r = t.msgs.last()) != null ? r : null;
              (a(null),
                u(t),
                m(t.msgs),
                f(
                  o != null
                    ? {
                        collection: t.msgs,
                        msg: o,
                        isUnreadDivider: t.shouldShowUnreadDivider(),
                      }
                    : null,
                ));
              return;
            }
            (e == null || t.id.toString() !== e.id.toString()) && a(t);
          }),
          (t[0] = e),
          (t[1] = g))
        : (g = t[1]),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "warm_conversation",
          g,
        ));
      var h;
      (t[2] !== r
        ? ((h = function () {
            if (r != null) {
              var e,
                t = r.msgs,
                n = (e = t.last()) != null ? e : null;
              (a(null),
                u(r),
                m(t),
                f(
                  n != null
                    ? {
                        collection: t,
                        msg: n,
                        isUnreadDivider: r.shouldShowUnreadDivider(),
                      }
                    : null,
                ));
            }
          }),
          (t[2] = r),
          (t[3] = h))
        : (h = t[3]),
        o("useWAWebListener").useListener(r, "msgs:preloaded", h));
      var y;
      return (
        t[4] !== l || t[5] !== _ || t[6] !== d
          ? ((y = { warmedChat: l, warmedFocusCtx: _, warmedMsgCollection: d }),
            (t[4] = l),
            (t[5] = _),
            (t[6] = d),
            (t[7] = y))
          : (y = t[7]),
        y
      );
    }
    l.default = u;
  },
  98,
);
