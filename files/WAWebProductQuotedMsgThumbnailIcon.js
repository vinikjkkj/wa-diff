__d(
  "WAWebProductQuotedMsgThumbnailIcon",
  ["WAWebMediaMsgPreview.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = { className: "xk1v102" }), (t[0] = n))
        : (n = t[0]);
      var r;
      return (
        t[1] !== e.msg.mediaData
          ? ((r = s.jsx(
              "div",
              babelHelpers.extends({}, n, {
                children: s.jsx(
                  o("WAWebMediaMsgPreview.react").MediaMsgPreview,
                  { mediaData: e.msg.mediaData },
                ),
              }),
            )),
            (t[1] = e.msg.mediaData),
            (t[2] = r))
          : (r = t[2]),
        r
      );
    }
    l.default = u;
  },
  98,
);
