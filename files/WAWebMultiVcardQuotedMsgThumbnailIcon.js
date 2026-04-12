__d(
  "WAWebMultiVcardQuotedMsgThumbnailIcon",
  [
    "WAWebDetailImage.react",
    "WAWebProfileImage.react",
    "WAWebQuotedMsgUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      return s.jsx("div", {
        className: "xk1v102",
        children: s.jsx(r("WAWebProfileImage.react"), {
          size: o("WAWebQuotedMsgUtils").getImageSize(e.theme),
          shape: o("WAWebDetailImage.react").DetailImageShape.Square,
          quoted: !0,
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
