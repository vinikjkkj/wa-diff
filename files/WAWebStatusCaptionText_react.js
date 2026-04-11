__d(
  "WAWebStatusCaptionText.react",
  [
    "fbt",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebMsgLinks",
    "WAWebUnstyledButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        captionLink: {
          color: "x17t9dm2",
          pointerEvents: "x3gnuav",
          textDecoration: "x1bvjpef",
          $$css: !0,
        },
      },
      d = 120;
    function m(e) {
      var t = e.isExpandedCaptionText,
        n = e.msg,
        a = e.onExpandCaptionText,
        i = e.withHostedDisclosurePadding,
        l = d,
        m = n.caption || "",
        p = m.length > l,
        _ = o("WAWebMsgLinks").getLinksFromMsg(n),
        f = c.captionLink,
        g =
          !p || t
            ? u.jsx(o("WAWebEmojiText.react").EmojiText, {
                formatters: o("WAWebFormatConfiguration").StatusCaption({
                  links: _,
                  linkXstyle: f,
                }),
                text: m,
              })
            : u.jsxs(u.Fragment, {
                children: [
                  u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    formatters: o("WAWebFormatConfiguration").StatusCaption({
                      links: _,
                      linkXstyle: f,
                    }),
                    text: Array.from(m)
                      .slice(0, l - 1)
                      .join(""),
                  }),
                  s._(/*BTDS*/ "\u2026"),
                  u.jsxs("strong", {
                    children: [" ", s._(/*BTDS*/ "Read more")],
                  }),
                ],
              });
      return u.jsx("div", {
        className: "x1n2onr6 xh8yej3 x5yr21d",
        children: u.jsx("div", {
          className:
            "x10l6tqk xh8yej3 x1ey2m1c x1vjfegm x11t971q xvc5jky x17t9dm2 x2b8uid x1c8ul09 x1ypdohk x1c3i2sq xwn7fz2",
          children: u.jsx(r("WAWebUnstyledButton.react"), {
            onClick: a,
            children: u.jsxs(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className:
                      "x1p57kb1 xkxsfb x1x727zr xti11r0 xuix1fa x1mzt3pk",
                  },
                  1: {
                    className:
                      "x1p57kb1 x1x727zr xti11r0 xuix1fa x1mzt3pk xvpt6g3",
                  },
                }[(i === !0) << 0],
                { children: [" ", g, " "] },
              ),
            ),
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
