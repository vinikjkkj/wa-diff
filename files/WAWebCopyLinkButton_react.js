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
      var t = e.divider,
        n = e.elementId,
        r = e.onClick;
      if (!document.queryCommandSupported("copy")) return null;
      var a = o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon;
      return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
        testid: void 0,
        icon: u.jsx(a, { xstyle: c.icon }),
        onClick: function () {
          return d(n, r);
        },
        divider: t,
        children: s._(/*BTDS*/ "Copy link"),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
