__d(
  "WAWebNavigationBar.react",
  [
    "WAWebABProps",
    "WAWebActiveAccountInfoContext.react",
    "WAWebBetaNavBarItem.react",
    "WAWebBizAdCreationNavBarItem.react",
    "WAWebBizToolsNavBarItem.react",
    "WAWebBotGating",
    "WAWebBugnubNavBarItem.react",
    "WAWebCallsNavBarItemLoadable.react",
    "WAWebChatCollection",
    "WAWebChatLockUtils",
    "WAWebChatsNavBarItem.react",
    "WAWebCommunitiesNavBarItem.react",
    "WAWebCurrentUser",
    "WAWebCustomerManagerNavBarItem.react",
    "WAWebDrawerManager",
    "WAWebEnvironment",
    "WAWebFeedbackNavBarItem.react",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebMeTabNavBarItem.react",
    "WAWebMediaHubNavBarItem.react",
    "WAWebMetaBotNavBarItem.react",
    "WAWebMobilePlatforms",
    "WAWebNewslettersNavBarItem.react",
    "WAWebProfileNavBarItem.react",
    "WAWebSettingGatingUtils",
    "WAWebSettingsNavBarItem.react",
    "WAWebStatusGatingUtils",
    "WAWebStatusNavBarItem.react",
    "WAWebTabOrder",
    "WAWebUISpacing",
    "WAWebUpdatesNavBarItem.react",
    "WAWebUseArrowKeyNavigation",
    "WAWebWindowsArchivedChatsNavBarItem.react",
    "WAWebWindowsLockedChatsNavBarItem.react",
    "cr:13381",
    "cr:21012",
    "cr:21280",
    "cr:2226",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebChatLockSettings",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.memo,
      p = d.useState,
      _ = (e = n("cr:2226")) == null ? void 0 : e.WAWebAppRatingNavBarItem,
      f =
        (s = n("cr:13381")) == null ? void 0 : s.WAWebWindowsFeedbackNavBarItem,
      g = {
        header: {
          zIndex: "x12xzxwr",
          position: "x1n2onr6",
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          minWidth: "xq3y45c",
          width: "xbyj736",
          height: "x5yr21d",
          backgroundColor: "x1h3rtpe",
          $$css: !0,
        },
        fullWidth: { width: "xh8yej3", $$css: !0 },
        fullHeight: { height: "x5yr21d", $$css: !0 },
        wrapper: { ":hover_cursor": "x1277o0a", $$css: !0 },
      };
    function h() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = c.jsx("hr", {
              className:
                "xh8yej3 xjm9jq1 x178xt8z x13fuv20 xx42vgk x18oe1m7 x1sy0etr xstzfhl",
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(78),
        a = e.activeNavBarItem,
        i = e.headerRef,
        l = e.updateActiveNavBarItem,
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = { prefix: "navbar" }), (t[0] = s))
        : (s = t[0]);
      var u = o("WAWebUseArrowKeyNavigation").useArrowKeyNavigation(s),
        d = u.down,
        m = u.focusItemIndex,
        y = u.onFocus,
        b = u.ref,
        v = u.up,
        S = o("WAWebActiveAccountInfoContext.react").useActiveAccountInfo(),
        R;
      t[1] !== m
        ? ((R = function () {
            m(0);
          }),
          (t[1] = m),
          (t[2] = R))
        : (R = t[2]);
      var L = R,
        E;
      t[3] !== d || t[4] !== L || t[5] !== v
        ? ((E = { up: v, down: d, escape: L }),
          (t[3] = d),
          (t[4] = L),
          (t[5] = v),
          (t[6] = E))
        : (E = t[6]);
      var k = E,
        I = r("useMergeRefs")(i, b),
        T = r("WAWebEnvironment").isWindows === !0,
        D;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            return T && o("WAWebChatCollection").ChatCollection.some(C);
          }),
          (t[7] = D))
        : (D = t[7]);
      var x = D,
        $;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = function () {
            return T && o("WAWebChatLockUtils").shouldShowChatLockEntryPoints();
          }),
          (t[8] = $))
        : ($ = t[8]);
      var P = $,
        N;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = x()), (t[9] = N))
        : (N = t[9]);
      var M = p(N),
        w = M[0],
        A = M[1],
        F;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = P()), (t[10] = F))
        : (F = t[10]);
      var O = p(F),
        B = O[0],
        W = O[1],
        q = o("useWAWebChatLockSettings").useChatLockSettings(),
        U = q.hideLockedChats,
        V;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = o(
            "WAWebStatusGatingUtils",
          ).isUpdatesTabInNavigationBarEnabled()),
          (t[11] = V))
        : (V = t[11]);
      var H = V,
        G;
      (t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = function (t) {
            if (T)
              if (t.archive === !0) A(!0);
              else {
                var e = x();
                (e || o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
                  A(e));
              }
          }),
          (t[12] = G))
        : (G = t[12]),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:archive",
          G,
        ));
      var z;
      (t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = function (t) {
            if (T)
              if (t.isLocked === !0) W(!0);
              else {
                var e = P();
                (e || o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
                  W(e));
              }
          }),
          (t[13] = z))
        : (z = t[13]),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change:isLocked",
          z,
        ));
      var j;
      t[14] !== a || t[15] !== l
        ? ((j = { activeNavBarItem: a, updateActiveNavBarItem: l }),
          (t[14] = a),
          (t[15] = l),
          (t[16] = j))
        : (j = t[16]);
      var K = j,
        Q;
      t[17] !== K || t[18] !== w
        ? ((Q =
            w &&
            c.createElement(
              r("WAWebWindowsArchivedChatsNavBarItem.react"),
              babelHelpers.extends({}, K, {
                key: "navbar-item-archived-chats",
              }),
            )),
          (t[17] = K),
          (t[18] = w),
          (t[19] = Q))
        : (Q = t[19]);
      var X = Q,
        Y;
      t[20] !== K || t[21] !== B || t[22] !== U
        ? ((Y =
            B &&
            !U &&
            c.createElement(
              r("WAWebWindowsLockedChatsNavBarItem.react"),
              babelHelpers.extends({}, K, { key: "navbar-item-locked-chats" }),
            )),
          (t[20] = K),
          (t[21] = B),
          (t[22] = U),
          (t[23] = Y))
        : (Y = t[23]);
      var J = Y,
        Z;
      t[24] !== K
        ? ((Z =
            o("WAWebBotGating").isBotShortcutEntryPointEnabled() &&
            c.createElement(
              o("WAWebMetaBotNavBarItem.react").MetaBotNavBarItem,
              babelHelpers.extends({}, K, { key: "navbar-item-metabot" }),
            )),
          (t[24] = K),
          (t[25] = Z))
        : (Z = t[25]);
      var ee = Z,
        te;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = c.jsx(r("WAWebMediaHubNavBarItem.react"), {})), (t[26] = te))
        : (te = t[26]);
      var ne = te,
        re;
      t[27] !== S || t[28] !== K
        ? ((re =
            o("WAWebMobilePlatforms").isSMB() &&
            c.createElement(
              o("WAWebBizToolsNavBarItem.react").BizToolsNavBarItem,
              babelHelpers.extends({}, K, {
                key: "navbar-item-biz-tools",
                activeAccountInfo: S,
              }),
            )),
          (t[27] = S),
          (t[28] = K),
          (t[29] = re))
        : (re = t[29]);
      var oe = re,
        ae;
      t[30] !== K
        ? ((ae =
            o("WAWebMobilePlatforms").isSMB() &&
            c.jsx(
              o("WAWebBizAdCreationNavBarItem.react").BizAdCreationNavBarItem,
              { activeNavBarItem: K.activeNavBarItem },
              "navbar-item-ads-creation",
            )),
          (t[30] = K),
          (t[31] = ae))
        : (ae = t[31]);
      var ie = ae,
        le;
      t[32] !== K
        ? ((le =
            o("WAWebMobilePlatforms").isSMB() &&
            c.createElement(
              r("WAWebCustomerManagerNavBarItem.react"),
              babelHelpers.extends({}, K, {
                key: "navbar-item-customer-manager",
              }),
            )),
          (t[32] = K),
          (t[33] = le))
        : (le = t[33]);
      var se = le,
        ue;
      if (
        t[34] !== X ||
        t[35] !== J ||
        t[36] !== ee ||
        t[37] !== ie ||
        t[38] !== oe ||
        t[39] !== se
      ) {
        if (((ue = [X, J, ee, oe, ie, se]), ue.some(Boolean))) {
          var ce;
          (t[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((ce = c.jsx(h, {}, "separator")), (t[41] = ce))
            : (ce = t[41]),
            ue.unshift(ce));
        }
        ((t[34] = X),
          (t[35] = J),
          (t[36] = ee),
          (t[37] = ie),
          (t[38] = oe),
          (t[39] = se),
          (t[40] = ue));
      } else ue = t[40];
      var de;
      t[42] === Symbol.for("react.memo_cache_sentinel")
        ? ((de = f != null ? c.jsx(f, {}) : null), (t[42] = de))
        : (de = t[42]);
      var me = de,
        pe;
      t[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((pe =
            o("WAWebCurrentUser").isEmployee() &&
            c.jsx(o("WAWebBugnubNavBarItem.react").BugnubNavBarItem, {})),
          (t[43] = pe))
        : (pe = t[43]);
      var _e = pe,
        fe;
      if (t[44] === Symbol.for("react.memo_cache_sentinel")) {
        var ge =
          _ &&
          o("WAWebABProps").getABPropConfigValue(
            "web_rating_and_review_enabled",
          ) &&
          !o("WAWebABProps").getABPropConfigValue(
            "web_rating_and_review_contextual_prompt_enabled",
          )
            ? c.jsx(_, {})
            : null;
        ((fe =
          me || _e || ge
            ? c.jsxs(c.Fragment, { children: [_e, ge, me] })
            : null),
          (t[44] = fe));
      } else fe = t[44];
      var he = fe,
        ye,
        Ce;
      t[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ce = [
            g.header,
            o("WAWebUISpacing").uiPadding.horiz12,
            o("WAWebUISpacing").uiPadding.vert10,
          ]),
          (t[46] = Ce))
        : (Ce = t[46]);
      var be;
      t[47] === Symbol.for("react.memo_cache_sentinel")
        ? ((be = [g.fullWidth, g.fullHeight]), (t[47] = be))
        : (be = t[47]);
      var ve, Se, Re, Le, Ee;
      t[48] !== K
        ? ((ve = c.jsx(
            o("WAWebChatsNavBarItem.react").ChatsNavBarItem,
            babelHelpers.extends({}, K),
          )),
          (Se = c.jsx(
            o("WAWebCallsNavBarItemLoadable.react").CallsNavBarItemLoadable,
            babelHelpers.extends({}, K),
          )),
          (Re = H
            ? c.jsx(
                o("WAWebUpdatesNavBarItem.react").UpdatesNavBarItem,
                babelHelpers.extends({}, K),
              )
            : c.jsxs(c.Fragment, {
                children: [
                  c.jsx(
                    o("WAWebStatusNavBarItem.react").StatusNavBarItem,
                    babelHelpers.extends({}, K),
                  ),
                  c.jsx(
                    o("WAWebNewslettersNavBarItem.react").NewslettersNavBarItem,
                    babelHelpers.extends({}, K),
                  ),
                ],
              })),
          (Le = c.jsx(
            o("WAWebCommunitiesNavBarItem.react").CommunitiesNavBarItem,
            babelHelpers.extends({}, K),
          )),
          (Ee = n("cr:21280")
            ? c.jsx(n("cr:21280"), babelHelpers.extends({}, K))
            : null),
          (t[48] = K),
          (t[49] = ve),
          (t[50] = Se),
          (t[51] = Re),
          (t[52] = Le),
          (t[53] = Ee))
        : ((ve = t[49]),
          (Se = t[50]),
          (Re = t[51]),
          (Le = t[52]),
          (Ee = t[53]));
      var ke;
      t[54] !== ue ||
      t[55] !== ve ||
      t[56] !== Se ||
      t[57] !== Re ||
      t[58] !== Le ||
      t[59] !== Ee
        ? ((ke = c.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 1,
            xstyle: g.fullWidth,
            children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: g.wrapper,
              children: [ve, Se, Re, Le, Ee, ue],
            }),
          })),
          (t[54] = ue),
          (t[55] = ve),
          (t[56] = Se),
          (t[57] = Re),
          (t[58] = Le),
          (t[59] = Ee),
          (t[60] = ke))
        : (ke = t[60]);
      var Ie;
      t[61] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ie = c.jsx(
            o("WAWebFeedbackNavBarItem.react").FeedbackNavBarItem,
            {},
          )),
          (t[61] = Ie))
        : (Ie = t[61]);
      var Te;
      t[62] !== K
        ? ((Te = c.jsx(
            o("WAWebBetaNavBarItem.react").BetaNavBarItem,
            babelHelpers.extends({}, K),
          )),
          (t[62] = K),
          (t[63] = Te))
        : (Te = t[63]);
      var De;
      t[64] === Symbol.for("react.memo_cache_sentinel")
        ? ((De = he == null ? null : c.jsx(h, {})), (t[64] = De))
        : (De = t[64]);
      var xe;
      t[65] !== K
        ? ((xe = o("WAWebSettingGatingUtils").isMeTabEnabled()
            ? c.jsx(
                o("WAWebMeTabNavBarItem.react").MeTabNavBarItem,
                babelHelpers.extends({}, K),
              )
            : c.jsxs(c.Fragment, {
                children: [
                  c.jsx(
                    o("WAWebSettingsNavBarItem.react").SettingsNavBarItem,
                    babelHelpers.extends({}, K),
                  ),
                  c.jsx(
                    o("WAWebProfileNavBarItem.react").ProfileNavBarItem,
                    babelHelpers.extends({}, K),
                  ),
                ],
              })),
          (t[65] = K),
          (t[66] = xe))
        : (xe = t[66]);
      var $e;
      t[67] !== Te || t[68] !== xe
        ? (($e = c.jsx(o("WAWebFlex.react").FlexItem, {
            grow: 0,
            xstyle: g.fullWidth,
            children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: g.wrapper,
              children: [Ie, he, ne, Te, De, xe],
            }),
          })),
          (t[67] = Te),
          (t[68] = xe),
          (t[69] = $e))
        : ($e = t[69]);
      var Pe;
      t[70] !== ke || t[71] !== $e
        ? ((Pe = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: be,
            children: [ke, $e, ye],
          })),
          (t[70] = ke),
          (t[71] = $e),
          (t[72] = Pe))
        : (Pe = t[72]);
      var Ne;
      return (
        t[73] !== k || t[74] !== I || t[75] !== y || t[76] !== Pe
          ? ((Ne = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: I,
              "data-testid": void 0,
              component: "header",
              tabIndex: 0,
              "data-tab": o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
              handlers: k,
              onFocus: y,
              xstyle: Ce,
              children: Pe,
            })),
            (t[73] = k),
            (t[74] = I),
            (t[75] = y),
            (t[76] = Pe),
            (t[77] = Ne))
          : (Ne = t[77]),
        Ne
      );
    }
    function C(e) {
      return (
        e.archive && o("WAWebFrontendChatGetters").getShouldAppearInList(e)
      );
    }
    var b = m(y);
    l.NavigationBar = b;
  },
  98,
);
