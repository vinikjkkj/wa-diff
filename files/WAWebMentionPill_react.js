__d(
  "WAWebMentionPill.react",
  [
    "WAWebClickable.react",
    "WAWebThemeContext",
    "WDSIconIcAlternateEmail.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = 18,
      d = {
        pill: {
          fontWeight: "xo1l8bm",
          display: "x3nfvp2",
          alignItems: "x1pha0wt",
          verticalAlign: "x11njtxf",
          lineHeight: "x1fc57z9",
          rowGap: "x1b73lln",
          columnGap: "x46w9ns",
          borderStartStartRadius: "xfz005n",
          borderStartEndRadius: "x1bdwhfj",
          borderEndEndRadius: "x1d0r7hm",
          borderEndStartRadius: "xn20xpo",
          paddingInlineStart: "x181vq82",
          paddingInlineEnd: "x1uc92m",
          position: "x1n2onr6",
          textIndent: "xzugeeo",
          whiteSpace: "xuxw1ft",
          ":focus-visible_outlineColor": "xtnn1bt",
          ":focus-visible_outlineStyle": "x9v5kkp",
          ":focus-visible_outlineOffset": "xmw7ebm",
          ":focus-visible_outlineWidth": "xrdum7p",
          "::after_content": "x1s928wv",
          "::after_position": "x1j6awrg",
          "::after_top": "x1m1drc7",
          "::after_insetInlineStart": "x1iygr5g",
          "::after_pointerEvents": "x2q1x1w",
          "::after_borderStartStartRadius": "xfijbtm",
          "::after_borderStartEndRadius": "xfenqrj",
          "::after_borderEndEndRadius": "xgy0gl7",
          "::after_borderEndStartRadius": "x19igvu",
          "::after_width": "x4eaejv",
          "::after_height": "x1wsn0xg",
          $$css: !0,
        },
        pillMeUnreadIncoming: {
          fontWeight: "xfjzk2p",
          backgroundColor: "xyp3urf",
          color: "x1pse0pq",
          ":hover::after_backgroundColor": "x1kivvwo",
          $$css: !0,
        },
        pillMeReadIncomingLight: {
          backgroundColor: "xeoh7ku",
          color: "x703958",
          ":hover::after_backgroundColor": "x1wjp2x",
          $$css: !0,
        },
        pillMeReadIncomingDark: {
          backgroundColor: "xkduh88",
          color: "x7lkujm",
          ":hover::after_backgroundColor": "x1wjp2x",
          $$css: !0,
        },
        pillOthersIncoming: {
          backgroundColor: "x4wrhlh",
          color: "x14ug900",
          ":hover::after_backgroundColor": "x1wb366y",
          $$css: !0,
        },
        pillOutgoing: {
          backgroundColor: "x4wrhlh",
          color: "x14ug900",
          ":hover::after_backgroundColor": "x1wb366y",
          $$css: !0,
        },
        pillQuoted: { backgroundColor: "xjbqb8w", color: "xhslqc4", $$css: !0 },
      };
    function m(e, t, n, r, o) {
      return r === !0
        ? d.pillQuoted
        : t
          ? d.pillOutgoing
          : e && n
            ? o
              ? d.pillMeReadIncomingLight
              : d.pillMeReadIncomingDark
            : e
              ? d.pillMeUnreadIncoming
              : d.pillOthersIncoming;
    }
    function p(t) {
      var n = t.children,
        a = t.isMe,
        i = t.isOutgoing,
        l = t.isQuoted,
        s = t.isRead,
        p = t.onClick,
        _ = o("WAWebThemeContext").useTheme(),
        f = _.theme,
        g = m(a, i, s, l, f === "light");
      return u.jsxs(o("WAWebClickable.react").Clickable, {
        className: (e || (e = r("stylex")))([d.pill, g]),
        onClick: l === !0 ? void 0 : p,
        role: "button",
        tabIndex: l === !0 ? -1 : 0,
        children: [
          u.jsx("span", {
            className: "x3nfvp2 x2lah0s xamitd3",
            children: u.jsx(r("WDSIconIcAlternateEmail.react"), {
              width: c,
              height: c,
            }),
          }),
          n,
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
