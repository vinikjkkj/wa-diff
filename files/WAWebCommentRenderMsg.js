__d(
  "WAWebCommentRenderMsg",
  ["WAWebUnsupportedMessage", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.displayAuthor,
        n = e.msg;
      return s.jsx(r("WAWebUnsupportedMessage"), {
        msg: n.safe(),
        displayAuthor: t,
        hideUpdateButton: !0,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
