__d(
  "WAWebSendLinkButton.react",
  ["fbt", "WAWebChatRefreshedIcon.react", "WAWebDrawerButton.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { icon: { color: "xw63xux", $$css: !0 } };
    function d(e) {
      var t = e.divider,
        n = e.onClick,
        r = o("WAWebChatRefreshedIcon.react").ChatRefreshedIcon;
      return u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
        testid: void 0,
        icon: u.jsx(r, { xstyle: c.icon }),
        onClick: n,
        divider: t,
        children: s._(/*BTDS*/ "Send link via WhatsApp"),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
