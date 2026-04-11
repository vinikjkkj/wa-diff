__d(
  "WAWebOversizedMessage.react",
  [
    "WAWebFormatMsgText",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebUnknownIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.displayAuthor,
        n = e.msg;
      return s.jsxs(r("WAWebMessageTextBubble.react"), {
        msg: n,
        displayAuthor: t,
        children: [
          s.jsx("div", {
            className: "x1rg5ohu x1faq86j x1p8j9ns x1cmudvs",
            children: s.jsx(o("WAWebUnknownIcon.react").UnknownIcon, {}),
          }),
          s.jsx("div", {
            className: "xfl633f x1w9lr8p",
            children: s.jsx(r("WAWebMessageSpacerText.react"), {
              msg: n.unsafe(),
              theme: "placeholder",
              children: r("WAWebFormatMsgText")({ msg: n.unsafe() }),
            }),
          }),
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
