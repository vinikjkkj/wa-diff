__d(
  "WAWebChatSubtitleText.react",
  [
    "WAWebEmoji",
    "WAWebEmoji.react",
    "WAWebEmojiText.react",
    "WAWebLockOutlineIcon.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        chatSubtitleText: {
          flexGrow: "x1iyjqo2",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        icon: {
          display: "x1rg5ohu",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          color: "xhslqc4",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(18),
        a = t.ariaLabel,
        i = t.location,
        l = t.showLockIcon,
        s = t.text,
        d = t.textStatusEmoji,
        m;
      if (d != null) {
        var p;
        n[0] !== d
          ? ((p = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(d)),
            (n[0] = d),
            (n[1] = p))
          : (p = n[1]);
        var _ = p;
        if (_ != null) {
          var f;
          n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = (e || (e = r("stylex"))).props(
                o("WAWebUISpacing").uiPadding.end5,
              )),
              (n[2] = f))
            : (f = n[2]);
          var g;
          (n[3] !== _
            ? ((g = u.jsx(
                "div",
                babelHelpers.extends({}, f, {
                  children: u.jsx(
                    r("WAWebEmoji.react"),
                    { emoji: _, size: "small" },
                    "low-res",
                  ),
                }),
              )),
              (n[3] = _),
              (n[4] = g))
            : (g = n[4]),
            (m = g));
        }
      }
      var h;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
            height: 12,
            width: 12,
          })),
          (n[5] = h))
        : (h = n[5]);
      var y = h,
        C;
      n[6] !== i
        ? ((C = {
            0: { className: "x78zum5 x1cy8zhl xeuugli" },
            1: {
              className:
                "x78zum5 x1cy8zhl xeuugli xisnujt x1nxh6w3 xcgms0a xhslqc4",
            },
          }[(i === "title") << 0]),
          (n[6] = i),
          (n[7] = C))
        : (C = n[7]);
      var b;
      n[8] !== l
        ? ((b =
            l === !0 &&
            u.jsx(
              "span",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(
                  c.icon,
                  o("WAWebUISpacing").uiMargin.top4,
                  o("WAWebUISpacing").uiMargin.end4,
                ),
                { children: y },
              ),
            )),
          (n[8] = l),
          (n[9] = b))
        : (b = n[9]);
      var v;
      n[10] !== a || n[11] !== s
        ? ((v = u.jsx(o("WAWebEmojiText.react").EmojiText, {
            titlify: !0,
            xstyle: c.chatSubtitleText,
            direction: "inherit",
            text: s,
            ariaLabel: a,
            selectable: !0,
          })),
          (n[10] = a),
          (n[11] = s),
          (n[12] = v))
        : (v = n[12]);
      var S;
      return (
        n[13] !== m || n[14] !== C || n[15] !== b || n[16] !== v
          ? ((S = u.jsxs(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, C, {
                children: [b, m, v],
              }),
            )),
            (n[13] = m),
            (n[14] = C),
            (n[15] = b),
            (n[16] = v),
            (n[17] = S))
          : (S = n[17]),
        S
      );
    }
    l.default = d;
  },
  98,
);
