__d(
  "WAWebMentionPill.react",
  [
    "WAWebClickable.react",
    "WAWebThemeContext",
    "WDSIconIcAlternateEmail.react",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(14),
        a = t.children,
        i = t.isMe,
        l = t.isOutgoing,
        s = t.isQuoted,
        p = t.isRead,
        _ = t.onClick,
        f = o("WAWebThemeContext").useTheme(),
        g = f.theme,
        h,
        y;
      if (n[0] !== i || n[1] !== l || n[2] !== s || n[3] !== p || n[4] !== g) {
        var C = m(i, l, p, s, g === "light");
        ((h = o("WAWebClickable.react").Clickable),
          (y = (e || (e = r("stylex")))([d.pill, C])),
          (n[0] = i),
          (n[1] = l),
          (n[2] = s),
          (n[3] = p),
          (n[4] = g),
          (n[5] = h),
          (n[6] = y));
      } else ((h = n[5]), (y = n[6]));
      var b = s === !0 ? void 0 : _,
        v = s === !0 ? -1 : 0,
        S;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx("span", {
            className: "x3nfvp2 x2lah0s xamitd3",
            children: u.jsx(r("WDSIconIcAlternateEmail.react"), {
              width: c,
              height: c,
            }),
          })),
          (n[7] = S))
        : (S = n[7]);
      var R;
      return (
        n[8] !== h || n[9] !== a || n[10] !== y || n[11] !== b || n[12] !== v
          ? ((R = u.jsxs(h, {
              className: y,
              onClick: b,
              role: "button",
              tabIndex: v,
              children: [S, a],
            })),
            (n[8] = h),
            (n[9] = a),
            (n[10] = y),
            (n[11] = b),
            (n[12] = v),
            (n[13] = R))
          : (R = n[13]),
        R
      );
    }
    l.default = p;
  },
  98,
);
