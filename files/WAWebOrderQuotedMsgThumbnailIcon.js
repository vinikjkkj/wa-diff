__d(
  "WAWebOrderQuotedMsgThumbnailIcon",
  ["WAWebQuotedMsgQuotedMedia.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg;
      return t.thumbnail
        ? s.jsx("div", {
            className: "xk1v102",
            children: s.jsx(
              o("WAWebQuotedMsgQuotedMedia.react").Base64BackgroundImage,
              { source: t.thumbnail },
            ),
          })
        : null;
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
