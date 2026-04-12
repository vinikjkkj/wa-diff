__d(
  "WAWebLocationQuotedMsgThumbnailIcon",
  ["WAWebQuotedMsgQuotedMedia.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg,
        n = t.body;
      return n == null || n === ""
        ? null
        : s.jsx("div", {
            className: "xk1v102",
            children: s.jsx(
              o("WAWebQuotedMsgQuotedMedia.react").Base64BackgroundImage,
              { source: n },
            ),
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
