__d(
  "WAWebNewsletterChatItem.react",
  [
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "react",
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
      var t = e.newsletter,
        n = o("useWAWebModelValues").useOptionalModelValues(
          t.newsletterMetadata,
          ["name", "inviteCode", "verified"],
        );
      return n == null
        ? null
        : s.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: p.container,
            children: [
              s.jsx(o("WAWebDetailImage.react").DetailImage, {
                id: t.id,
                size: d,
                checkmarkIcon:
                  (n == null ? void 0 : n.verified) === !0 ? "chat-list" : null,
                showOutline: !0,
              }),
              s.jsx("div", {
                className:
                  "xni59qk xisnujt x2b8uid x6ikm8r x10wlt62 x9hmgtc x9wz5kn x1380le5 xefnzgg",
                children: s.jsx(o("WAWebText.react").WAWebTextSmall, {
                  color: "primary",
                  textWrap: "ellipsis",
                  children: n == null ? void 0 : n.name,
                }),
              }),
            ],
          });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
