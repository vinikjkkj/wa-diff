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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(19),
        n = e.onBack,
        a = e.onClickNewCall,
        i = e.ref,
        l = d(),
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s._(/*BTDS*/ "Calls")), (t[0] = u))
        : (u = t[0]);
      var p = u,
        f;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Calls drawer")), (t[1] = f))
        : (f = t[1]);
      var g = f,
        h;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = o("WAWebVoipGatingUtils").usernameSearchEnabledOnCallsTab()),
          (t[2] = h))
        : (h = t[2]);
      var y = h,
        C;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = c.jsx(r("WAWebDrawerSection.react"), {
            theme: "full-height",
            animation: !1,
            xstyle: m.container,
            children: c.jsx(
              o("WAWebChatlistPanelFunctional.react").ChatlistPanelFunctional,
              {
                showArchiveV2: !1,
                mode: r("WAWebChatlistPanelMode").CallsTab,
                unknownContactPhoneSearchEnabled: y,
                unknownContactUsernameSearchEnabled: y,
              },
              "callsTab",
            ),
          })),
          (t[3] = C))
        : (C = t[3]);
      var b = C,
        v;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
            icon: c.jsx(r("WDSIconIcLink.react"), { testid: void 0 }),
            title: s._(/*BTDS*/ "Create call link"),
            onClick: _,
          })),
          (t[4] = v))
        : (v = t[4]);
      var S = v,
        R = !o("useWAWebABPropConfigValue").useABPropConfigValue(
          "web_calls_tab_empty_state_buttons",
        ),
        L;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "New call")), (t[5] = L))
        : (L = t[5]);
      var E;
      t[6] !== a
        ? ((E = c.jsx(r("WDSMenuBarItem.react"), {
            icon: o("WAWebCallNewRefreshedIcon.react").CallNewRefreshedIcon,
            title: L,
            onClick: a,
          })),
          (t[6] = a),
          (t[7] = E))
        : (E = t[7]);
      var k = E,
        I = R ? S : null,
        T;
      t[8] !== k || t[9] !== I
        ? ((T = [I, k].filter(Boolean)), (t[8] = k), (t[9] = I), (t[10] = T))
        : (T = t[10]);
      var D = T,
        x;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = { surface: "status" }), (t[11] = x))
        : (x = t[11]);
      var $;
      t[12] !== D || t[13] !== n
        ? (($ = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: p,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
            onBack: n,
            menu: D,
          })),
          (t[12] = D),
          (t[13] = n),
          (t[14] = $))
        : ($ = t[14]);
      var P;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = c.jsx(r("WAWebDrawerBody.react"), { children: b })),
          (t[15] = P))
        : (P = t[15]);
      var N;
      return (
        t[16] !== i || t[17] !== $
          ? ((N = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: l,
              "aria-label": g,
              "data-testid": void 0,
              children: c.jsxs(r("WAWebDrawer.react"), {
                ref: i,
                theme: "striped",
                testid: void 0,
                tsNavigationData: x,
                children: [$, P],
              }),
            })),
            (t[16] = i),
            (t[17] = $),
            (t[18] = N))
          : (N = t[18]),
        N
      );
    }
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
