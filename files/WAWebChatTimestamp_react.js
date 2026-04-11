__d(
  "WAWebChatTimestamp.react",
  [
    "WAWeb-moment",
    "WAWebChatGetters",
    "WAWebClock",
    "WAWebCmd",
    "WAWebFrontendChatGetters",
    "WAWebMsgGetters",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebForceUpdate",
    "useWAWebListener",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo;
    function m(e) {
      "use no forget";
      var t = e.t,
        n = e.timestampColor,
        a = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        i = o("useWAWebMsgValues").useOptionalMsgValues(e.msg.id, [
          o("WAWebMsgGetters").getT,
        ]),
        l = i != null ? i[0] : 0;
      o("useWAWebListener").useListener(
        o("WAWebClock").Clock,
        o("WAWebClock").HOUR24_FORMAT_CHANGE_EVENT,
        a,
      );
      var u = c(
          function () {
            return t != null ? Math.max(t, l) : l;
          },
          [l, t],
        ),
        m = d(
          function () {
            var e = r("WAWeb-moment")().startOf("day").subtract(7, "day");
            return u() >= e.unix();
          },
          [u],
        );
      return (
        o("useWAWebListener").useListener(
          m ? o("WAWebCmd").Cmd : null,
          "midnight",
          a,
        ),
        i == null
          ? null
          : s.jsx(r("WDSText.react"), {
              type: n === "accent" ? "Body3Emphasized" : "Body3",
              colorName: n != null ? n : "contentDeemphasized",
              children: o("WAWebClock").Clock.relativeStr(u()),
            })
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.chat,
        r = e.timestampColor,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebFrontendChatGetters").getPreviewMessage,
            o("WAWebChatGetters").getT,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebChatValues").useChatValues(n.id, a),
        l = i[0],
        u = i[1];
      if (!l) return null;
      var c;
      return (
        t[1] !== u || t[2] !== l || t[3] !== r
          ? ((c = s.jsx(m, { msg: l, t: u, timestampColor: r })),
            (t[1] = u),
            (t[2] = l),
            (t[3] = r),
            (t[4] = c))
          : (c = t[4]),
        c
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.chat,
        r = e.msg,
        a = e.timestampColor;
      if (n) {
        var i;
        return (
          t[0] !== n || t[1] !== a
            ? ((i = s.jsx(p, { chat: n, timestampColor: a })),
              (t[0] = n),
              (t[1] = a),
              (t[2] = i))
            : (i = t[2]),
          i
        );
      }
      if (r) {
        var l;
        return (
          t[3] !== r || t[4] !== a
            ? ((l = s.jsx(m, { msg: r, timestampColor: a })),
              (t[3] = r),
              (t[4] = a),
              (t[5] = l))
            : (l = t[5]),
          l
        );
      }
      return null;
    }
    l.default = _;
  },
  98,
);
