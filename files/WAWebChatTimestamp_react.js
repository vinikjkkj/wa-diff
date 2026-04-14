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
      var t = e.chat,
        n = e.timestampColor,
        r = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebFrontendChatGetters").getPreviewMessage,
          o("WAWebChatGetters").getT,
        ]),
        a = r[0],
        i = r[1];
      return a ? s.jsx(m, { msg: a, t: i, timestampColor: n }) : null;
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.chat,
        n = e.msg,
        r = e.timestampColor;
      return t
        ? s.jsx(p, { chat: t, timestampColor: r })
        : n
          ? s.jsx(m, { msg: n, timestampColor: r })
          : null;
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
