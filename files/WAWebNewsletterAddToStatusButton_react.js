__d(
  "WAWebNewsletterAddToStatusButton.react",
  [
    "fbt",
    "WAWebMenuBar.react",
    "WAWebStatusPostingDropdown.react",
    "WAWebTabOrder",
    "WDSIconWdsIcAddToStatus.react",
    "react",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef;
    function p(e) {
      var t = e.newsletterWid,
        n = m(null),
        a = r("useWDSMenu")({
          targetRef: n,
          menu: u.jsx(o("WAWebStatusPostingDropdown.react").AddStatusMenu, {
            isNewsletterStatus: !0,
            newsletterWid: t,
          }),
          dismissable: !0,
        }),
        i = a.menuPortal,
        l = a.openMenu,
        c = d(
          function () {
            l();
          },
          [l],
        );
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
            ref: n,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
            testid: void 0,
            icon: u.jsx(r("WDSIconWdsIcAddToStatus.react"), { testid: void 0 }),
            onClick: c,
            title: s._(/*BTDS*/ "Add to status"),
          }),
          i,
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
