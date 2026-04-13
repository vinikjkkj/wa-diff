__d(
  "WAWebListQuotedMsgThumbnailIcon",
  [
    "WAWebMediaUtils",
    "WAWebMsgGetters",
    "WAWebQuotedMsgQuotedMedia.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.msg,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [o("WAWebMsgGetters").getProductListHeaderImage]), (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(n.id, r),
        i = a[0];
      if (!i) return null;
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "xk1v102" }), (t[1] = l))
        : (l = t[1]);
      var u;
      t[2] !== i
        ? ((u = o("WAWebMediaUtils").convertToBase64(i)),
          (t[2] = i),
          (t[3] = u))
        : (u = t[3]);
      var c;
      return (
        t[4] !== u
          ? ((c = s.jsx(
              "div",
              babelHelpers.extends({}, l, {
                children: s.jsx(
                  o("WAWebQuotedMsgQuotedMedia.react").Base64BackgroundImage,
                  { source: u },
                ),
              }),
            )),
            (t[4] = u),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    l.default = u;
  },
  98,
);
