__d(
  "WAWebStatusDrawer.react",
  [
    "fbt",
    "WAWebCmd",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebStatusCollection",
    "WAWebStatusList.react",
    "WAWebStatusListHeader.react",
    "WAWebStatusPostingDropdown.react",
    "WAWebTabOrder",
    "WAWebUserPrefsGeneral",
    "WDSIconIcAddCircle.react",
    "WDSIconIcMoreVert.react",
    "WDSMenuBarItem.react",
    "react",
    "useLazyRef",
    "useMergeRefs",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef;
    function p(e) {
      var t = e.onBack,
        n = e.onOpenStatusPrivacySettingDrawer,
        a = e.ref,
        i = m(),
        l = r("useLazyRef")(function () {
          return Math.round(Math.random() * 1e9);
        });
      d(function () {
        (o("WAWebUserPrefsGeneral").setLastStatusUsage(),
          l.current != null &&
            o("WAWebStatusCollection").StatusCollection.logMetrics({
              type: "session",
              sessionId: l.current,
            }),
          o("WAWebCmd").Cmd.onStatusViewerOpen());
      }, []);
      var c = s._(/*BTDS*/ "Status"),
        p = s._(/*BTDS*/ "Status tab drawer"),
        _ = u.jsx(r("WAWebDrawerSection.react"), {
          animation: !1,
          children: u.jsx(r("WAWebStatusListHeader.react"), {
            sessionIdRef: l,
          }),
        }),
        f = u.jsx(r("WAWebDrawerSection.react"), {
          theme: "full-height",
          animation: !1,
          testid: void 0,
          children: u.jsx(r("WAWebStatusList.react"), { sessionIdRef: l }),
        }),
        g = r("useWAWebFocusOnMount")(),
        h = r("useMergeRefs")(i, g);
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: h,
        "aria-label": p,
        "data-testid": void 0,
        children: u.jsxs(r("WAWebDrawer.react"), {
          ref: a,
          theme: "striped",
          testid: void 0,
          tsNavigationData: { surface: "status" },
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: c,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
              menu: u.jsxs("div", {
                className: "x78zum5 x1qvou4u x1s70e7g",
                children: [
                  u.jsx(r("WDSMenuBarItem.react"), {
                    testid: void 0,
                    tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
                    title: s._(/*BTDS*/ "Add Status"),
                    buttonVariant: "borderless",
                    icon: r("WDSIconIcAddCircle.react"),
                    wdsMenuToRender: u.jsx(
                      o("WAWebStatusPostingDropdown.react").AddStatusMenu,
                      {},
                    ),
                  }),
                  u.jsx(r("WDSMenuBarItem.react"), {
                    title: s._(/*BTDS*/ "Status Menu"),
                    buttonVariant: "borderless",
                    icon: r("WDSIconIcMoreVert.react"),
                    wdsMenuToRender: u.jsx(
                      o("WAWebStatusPostingDropdown.react").StatusPrivacyMenu,
                      { onOpenStatusPrivacySettingDrawer: n },
                    ),
                  }),
                ],
              }),
              onBack: t,
            }),
            u.jsxs(r("WAWebDrawerBody.react"), { children: [_, f] }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
