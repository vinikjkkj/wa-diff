__d(
  "WAWebListQuotedMsgThumbnailIcon",
  [
    "WAWebMediaUtils",
    "WAWebMsgGetters",
    "WAWebQuotedMsgQuotedMedia.react",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getProductListHeaderImage,
        ]),
        r = n[0];
      return r
        ? s.jsx("div", {
            className: "xk1v102",
            children: s.jsx(
              o("WAWebQuotedMsgQuotedMedia.react").Base64BackgroundImage,
              { source: o("WAWebMediaUtils").convertToBase64(r) },
            ),
          })
        : null;
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
