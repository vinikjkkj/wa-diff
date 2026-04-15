__d(
  "WAWebLocationQuotedMsgThumbnailIcon",
  ["WAWebQuotedMsgQuotedMedia.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.msg,
        r = n.body;
      if (r == null || r === "") return null;
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { className: "xk1v102" }), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== r
          ? ((i = s.jsx(
              "div",
              babelHelpers.extends({}, a, {
                children: s.jsx(
                  o("WAWebQuotedMsgQuotedMedia.react").Base64BackgroundImage,
                  { source: r },
                ),
              }),
            )),
            (t[1] = r),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = u;
  },
  98,
);
