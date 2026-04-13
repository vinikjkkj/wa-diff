__d(
  "WAWebBizSendProductButton.react",
  [
    "fbt",
    "WAWebChatRefreshedIcon.react",
    "WAWebDrawerButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { icon: { color: "xw63xux", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onClick,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = u.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {
            xstyle: c.icon,
          })),
          (t[0] = r))
        : (r = t[0]);
      var a;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(/*BTDS*/ "Send product")), (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== n
          ? ((i = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              testid: void 0,
              icon: r,
              onClick: n,
              children: a,
            })),
            (t[2] = n),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    l.default = d;
  },
  226,
);
