__d(
  "WAWebBizCtwaContextSourceButton.react",
  ["WAWebBizCtwaContextPreviewIcon.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        icon: {
          position: "x10l6tqk",
          bottom: "xqo3gd",
          insetInlineEnd: "x11dcrhx",
          left: null,
          right: null,
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.hostname,
        a = e.onClick,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            className:
              "x10l6tqk x1vjfegm x1dmp6jm x1peatla x1ey2m1c xtijo5x x1tmnsyt x1ypdohk",
          }),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== n
        ? ((l = s.jsx(r("WAWebBizCtwaContextPreviewIcon.react"), {
            hostname: n,
            xstyle: u.icon,
          })),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var c;
      return (
        t[3] !== a || t[4] !== l
          ? ((c = s.jsx(
              "div",
              babelHelpers.extends({}, i, { onClick: a, children: l }),
            )),
            (t[3] = a),
            (t[4] = l),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    l.default = c;
  },
  98,
);
