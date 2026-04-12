__d(
  "WAWebMessageUnread.react",
  [
    "fbt",
    "WAWebThemeContext",
    "WAWebUISpacing",
    "WDSText.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        msgUnreadRefresh: {
          width: "xh8yej3",
          marginInlineStart: "x1b1opl3",
          textAlign: "x2b8uid",
          backgroundColor: "x1bu39yj",
          paddingTop: "x1tiyuxx",
          paddingBottom: "x1nbhmlj",
          maxWidth: "xquzyny",
          $$css: !0,
        },
        msgUnreadDark: {
          borderTopWidth: null,
          borderBottomWidth: null,
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.count,
        a = t.textContainerRef,
        i = o("WAWebThemeContext").useIsDarkTheme(),
        l = s._(
          /*BTDS*/ '_j{"*":"{count} unread messages","_1":"1 unread message"}',
          [s._plural(n, "count")],
        ),
        u = [
          i && d.msgUnreadDark,
          d.msgUnreadRefresh,
          o("WAWebUISpacing").uiMargin.horizAuto,
          o("WAWebUISpacing").uiMargin.bottom12,
        ],
        m = c.jsx(r("WDSText.react"), {
          type: "Body3Emphasized",
          colorName: "contentDefault",
          children: l,
        });
      return c.jsx(
        "div",
        babelHelpers.extends({}, (e || (e = r("stylex"))).props(u), {
          ref: a,
          children: c.jsx("span", {
            className:
              "x9f619 x1rg5ohu xq8v1hd xojvqvm x6ikm8r x10wlt62 xlyipyv xuxw1ft x1k43qru x1g83kfv x3qq2k7 x2x8art x1qor8vf x1iw51ew xde1mab xhsao0n",
            "aria-live": "polite",
            children: m,
          }),
        }),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
