__d(
  "WAWebStatusViewerHaventViewedSection.react",
  [
    "fbt",
    "WAWebBoolFunc",
    "WAWebChatCell.react",
    "WAWebContactGetters",
    "WAWebDetailImage.react",
    "WAWebEmojiText.react",
    "WAWebFrontendContactGetters",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.contact,
        n = o("useWAWebContactValues").useContactValues(t.id, [
          o("WAWebContactGetters").getId,
          o("WAWebFrontendContactGetters").getFormattedName,
        ]),
        a = n[0],
        i = n[1];
      return u.jsx(r("WAWebChatCell.react"), {
        contextEnabled: o("WAWebBoolFunc").returnFalse,
        image: u.jsx(o("WAWebDetailImage.react").DetailImage, { id: a }),
        isMuted: !0,
        primary: u.jsx(o("WAWebEmojiText.react").EmojiText, {
          direction: "auto",
          text: i,
          titlify: !0,
          ellipsify: !0,
        }),
        idle: !0,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.contacts;
      return t.length === 0
        ? null
        : u.jsxs(u.Fragment, {
            children: [
              u.jsx("div", {
                className:
                  "xdx6fka xvtqlqk x1xrf6ya x1nbhmlj xhslqc4 x1nxh6w3 xk50ysn",
                children: s._(/*BTDS*/ "Has not viewed"),
              }),
              u.jsx("div", {
                className: "x1380le5",
                children: t.map(function (e) {
                  return u.jsx(c, { contact: e }, e.id.toString());
                }),
              }),
            ],
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
