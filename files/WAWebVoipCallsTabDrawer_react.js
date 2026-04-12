__d(
  "WAWebVoipCallsTabDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebCallNewRefreshedIcon.react",
    "WAWebChatlistPanelFunctional.react",
    "WAWebChatlistPanelMode",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebMenuBar.react",
    "WAWebVoipCreateCallLinksPopup.react",
    "WAWebVoipGatingUtils",
    "WDSIconIcLink.react",
    "WDSMenuBarItem.react",
    "react",
    "useWAWebABPropConfigValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useRef,
      m = {
        container: { overflowX: "x6ikm8r", overflowY: "x10wlt62", $$css: !0 },
      };
    function p(e) {
      var t = e.onBack,
        n = e.onClickNewCall,
        a = e.ref,
        i = d(),
        l = s._(/*BTDS*/ "Calls"),
        u = s._(/*BTDS*/ "Calls drawer"),
        p = o("WAWebVoipGatingUtils").usernameSearchEnabledOnCallsTab(),
        f = c.jsx(r("WAWebDrawerSection.react"), {
          theme: "full-height",
          animation: !1,
          xstyle: m.container,
          children: c.jsx(
            o("WAWebChatlistPanelFunctional.react").ChatlistPanelFunctional,
            {
              showArchiveV2: !1,
              mode: r("WAWebChatlistPanelMode").CallsTab,
              unknownContactPhoneSearchEnabled: p,
              unknownContactUsernameSearchEnabled: p,
            },
            "callsTab",
          ),
        }),
        g = c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
          icon: c.jsx(r("WDSIconIcLink.react"), { testid: void 0 }),
          title: s._(/*BTDS*/ "Create call link"),
          onClick: _,
        }),
        h = !o("useWAWebABPropConfigValue").useABPropConfigValue(
          "web_calls_tab_empty_state_buttons",
        ),
        y = c.jsx(r("WDSMenuBarItem.react"), {
          icon: o("WAWebCallNewRefreshedIcon.react").CallNewRefreshedIcon,
          title: s._(/*BTDS*/ "New call"),
          onClick: n,
        }),
        C = [h ? g : null, y].filter(Boolean);
      return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: i,
        "aria-label": u,
        "data-testid": void 0,
        children: c.jsxs(r("WAWebDrawer.react"), {
          ref: a,
          theme: "striped",
          testid: void 0,
          tsNavigationData: { surface: "status" },
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: l,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
              onBack: t,
              menu: C,
            }),
            c.jsx(r("WAWebDrawerBody.react"), { children: f }),
          ],
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "CallsTabDrawer: createCallLinkMenuItem clicked",
          ])),
      ),
        o("WAWebVoipCreateCallLinksPopup.react").handleGenerateCallLinkClick());
    }
    l.default = p;
  },
  226,
);
