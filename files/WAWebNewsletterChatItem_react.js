__d(
  "WAWebNewsletterChatItem.react",
  [
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 92,
      c = 72,
      d = 64,
      m = 20,
      p = {
        container: {
          width: "xni59qk",
          minHeight: "x1aes4zu",
          cursor: "x1ypdohk",
          $$css: !0,
        },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.newsletter,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = ["name", "inviteCode", "verified"]), (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebModelValues").useOptionalModelValues(
        n.newsletterMetadata,
        r,
      );
      if (a == null) return null;
      var i = (a == null ? void 0 : a.verified) === !0 ? "chat-list" : null,
        l;
      t[1] !== n.id || t[2] !== i
        ? ((l = s.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: n.id,
            size: d,
            checkmarkIcon: i,
            showOutline: !0,
          })),
          (t[1] = n.id),
          (t[2] = i),
          (t[3] = l))
        : (l = t[3]);
      var u;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = {
            className:
              "xni59qk xisnujt x2b8uid x6ikm8r x10wlt62 x9hmgtc x9wz5kn x1380le5 xefnzgg",
          }),
          (t[4] = u))
        : (u = t[4]);
      var c = a == null ? void 0 : a.name,
        m;
      t[5] !== c
        ? ((m = s.jsx(
            "div",
            babelHelpers.extends({}, u, {
              children: s.jsx(o("WAWebText.react").WAWebTextSmall, {
                color: "primary",
                textWrap: "ellipsis",
                children: c,
              }),
            }),
          )),
          (t[5] = c),
          (t[6] = m))
        : (m = t[6]);
      var _;
      return (
        t[7] !== l || t[8] !== m
          ? ((_ = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: p.container,
              children: [l, m],
            })),
            (t[7] = l),
            (t[8] = m),
            (t[9] = _))
          : (_ = t[9]),
        _
      );
    }
    l.default = _;
  },
  98,
);
