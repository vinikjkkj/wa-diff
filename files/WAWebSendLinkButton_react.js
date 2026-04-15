__d(
  "WAWebSendLinkButton.react",
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
      var t = o("react-compiler-runtime").c(5),
        n = e.divider,
        r = e.onClick,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon, {
            xstyle: c.icon,
          })),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Send link via WhatsApp")), (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== n || t[3] !== r
          ? ((l = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              testid: void 0,
              icon: a,
              onClick: r,
              divider: n,
              children: i,
            })),
            (t[2] = n),
            (t[3] = r),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    l.default = d;
  },
  226,
);
