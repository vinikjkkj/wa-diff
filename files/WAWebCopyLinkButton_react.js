__d(
  "WAWebCopyLinkButton.react",
  [
    "fbt",
    "WAWebCopyRefreshedIcon.react",
    "WAWebCopyToClipboard",
    "WAWebDrawerButton.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { icon: { color: "xw63xux", $$css: !0 } };
    function d(e, t) {
      var n = document.getElementById(e);
      (n && o("WAWebCopyToClipboard").copyElementContentsToClipboard(n)
        ? o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Link copied to clipboard."),
            }),
          )
        : o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(
                /*BTDS*/ "Couldn't copy to clipboard. Copy using mouse or keyboard.",
              ),
            }),
          ),
        t != null && t());
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.divider,
        r = e.elementId,
        a = e.onClick;
      if (!document.queryCommandSupported("copy")) return null;
      var i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon, {
            xstyle: c.icon,
          })),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== r || t[2] !== a
        ? ((l = function () {
            return d(r, a);
          }),
          (t[1] = r),
          (t[2] = a),
          (t[3] = l))
        : (l = t[3]);
      var m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Copy link")), (t[4] = m))
        : (m = t[4]);
      var p;
      return (
        t[5] !== n || t[6] !== l
          ? ((p = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              testid: void 0,
              icon: i,
              onClick: l,
              divider: n,
              children: m,
            })),
            (t[5] = n),
            (t[6] = l),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    l.default = m;
  },
  226,
);
