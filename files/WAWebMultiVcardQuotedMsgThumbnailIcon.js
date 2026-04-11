__d(
  "WAWebMultiVcardQuotedMsgThumbnailIcon",
  [
    "WAWebDetailImage.react",
    "WAWebProfileImage.react",
    "WAWebQuotedMsgUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = { className: "xk1v102" }), (t[0] = n))
        : (n = t[0]);
      var a;
      t[1] !== e.theme
        ? ((a = o("WAWebQuotedMsgUtils").getImageSize(e.theme)),
          (t[1] = e.theme),
          (t[2] = a))
        : (a = t[2]);
      var i;
      return (
        t[3] !== a
          ? ((i = s.jsx(
              "div",
              babelHelpers.extends({}, n, {
                children: s.jsx(r("WAWebProfileImage.react"), {
                  size: a,
                  shape: o("WAWebDetailImage.react").DetailImageShape.Square,
                  quoted: !0,
                }),
              }),
            )),
            (t[3] = a),
            (t[4] = i))
          : (i = t[4]),
        i
      );
    }
    l.default = u;
  },
  98,
);
