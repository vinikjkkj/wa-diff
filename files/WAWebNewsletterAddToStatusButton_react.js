__d(
  "WAWebNewsletterAddToStatusButton.react",
  [
    "fbt",
    "WAWebMenuBar.react",
    "WAWebStatusPostingDropdown.react",
    "WAWebTabOrder",
    "WDSIconWdsIcAddToStatus.react",
    "react",
    "react-compiler-runtime",
    "useWDSMenu",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef;
    function p(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.newsletterWid,
        a = m(null),
        i;
      t[0] !== n
        ? ((i = {
            targetRef: a,
            menu: u.jsx(o("WAWebStatusPostingDropdown.react").AddStatusMenu, {
              isNewsletterStatus: !0,
              newsletterWid: n,
            }),
            dismissable: !0,
          }),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l = r("useWDSMenu")(i),
        c = l.menuPortal,
        d = l.openMenu,
        p;
      t[2] !== d
        ? ((p = function () {
            d();
          }),
          (t[2] = d),
          (t[3] = p))
        : (p = t[3]);
      var _ = p,
        f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsx(r("WDSIconWdsIcAddToStatus.react"), { testid: void 0 })),
          (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Add to status")), (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] !== _
        ? ((h = u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
            ref: a,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
            testid: void 0,
            icon: f,
            onClick: _,
            title: g,
          })),
          (t[6] = _),
          (t[7] = h))
        : (h = t[7]);
      var y;
      return (
        t[8] !== c || t[9] !== h
          ? ((y = u.jsxs(u.Fragment, { children: [h, c] })),
            (t[8] = c),
            (t[9] = h),
            (t[10] = y))
          : (y = t[10]),
        y
      );
    }
    l.default = p;
  },
  226,
);
