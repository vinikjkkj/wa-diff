__d(
  "WAWebSettingsDrawer.react",
  [
    "fbt",
    "LexicalComposer",
    "WAWebChatStatus",
    "WAWebChatTextStatusWrapper",
    "WAWebConnModel",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEmojiText.react",
    "WAWebEmptyState.react",
    "WAWebFlex.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebHistorySyncSettingItem.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMacBetaUpsellToastbar.react",
    "WAWebMemoizeWithClearUtils",
    "WAWebMenuItems.react",
    "WAWebNoop",
    "WAWebNotificationBanners.react",
    "WAWebSettingSearchModel",
    "WAWebSettings.MenuItem",
    "WAWebSettingsClickWamEvent",
    "WAWebSettingsLoggerUtils",
    "WAWebSettingsSearchTapWamEvent",
    "WAWebTextStatusGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumSettingsClickEntryPoint",
    "WAWebWamEnumSettingsItemType",
    "WAWebWamEnumSettingsPageType",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WDSSearchBar.react",
    "react",
    "react-compiler-runtime",
    "useWAWebExternalBetaOptIn",
    "useWAWebModelValues",
    "useWAWebNavigatableList",
    "useWAWebSearchModel",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useMemo,
      _ = d.useRef,
      f = d.useState,
      g = { surface: "settings-drawer" };
    function h(e, t) {
      new (o("WAWebSettingsClickWamEvent").SettingsClickWamEvent)({
        settingsItem: e,
        settingsClickEntryPoint: t,
      }).commit();
    }
    function y(e, t) {
      new (o("WAWebSettingsSearchTapWamEvent").SettingsSearchTapWamEvent)({
        tapItemName: e,
        topLevelParentSetting: t,
      }).commit();
    }
    function C() {
      o("WAWebSettingsLoggerUtils").logSettingsSearchInitiate({
        settingsPageType: o("WAWebWamEnumSettingsPageType").SETTINGS_PAGE_TYPE
          .SETTINGS,
      });
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.listSelection,
        a = e.onClick,
        i = e.onProfile,
        l = e.profileId,
        s = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(),
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["pushname"]), (t[0] = u))
        : (u = t[0]);
      var d = o("useWAWebModelValues").useModelValues(
          o("WAWebConnModel").Conn,
          u,
        ),
        m;
      t[1] !== l
        ? ((m = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
            ? c.jsx(o("WAWebChatTextStatusWrapper").TextStatus, {
                contactId: l,
              })
            : c.jsx(o("WAWebChatStatus").StatusWrapper, { id: l })),
          (t[1] = l),
          (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      if (t[3] === Symbol.for("react.memo_cache_sentinel")) {
        var f = o("WAWebUserPrefsMeUser").getMeUser();
        ((_ = c.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: f,
          size: 64,
          quality: o("WAWebDetailImage.react").DetailImageQuality.High,
        })),
          (t[3] = _));
      } else _ = t[3];
      var g = _,
        h;
      t[4] !== d.pushname
        ? ((h = c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: d.pushname,
            ellipsify: !0,
            titlify: !0,
          })),
          (t[4] = d.pushname),
          (t[5] = h))
        : (h = t[5]);
      var y = h,
        C;
      t[6] !== n.list || t[7] !== a
        ? ((C = function () {
            var e = n.list.find(S);
            e && a(e);
          }),
          (t[6] = n.list),
          (t[7] = a),
          (t[8] = C))
        : (C = t[8]);
      var b = C,
        R;
      t[9] !== b
        ? ((R = c.jsx(
            o("WAWebNotificationBanners.react").NotificationAwarenessBanner,
            { onNavigateToNotifications: b },
          )),
          (t[9] = b),
          (t[10] = R))
        : (R = t[10]);
      var L;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = { className: "x1nbhmlj" }), (t[11] = L))
        : (L = t[11]);
      var E;
      t[12] !== y || t[13] !== i || t[14] !== p
        ? ((E = c.jsx(
            "span",
            babelHelpers.extends({}, L, {
              children: c.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                optionId: "profile",
                onSelect: i,
                detailLeft: g,
                primary: y,
                secondary: p,
                isRefresh: !0,
              }),
            }),
          )),
          (t[12] = y),
          (t[13] = i),
          (t[14] = p),
          (t[15] = E))
        : (E = t[15]);
      var k, I;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = c.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 })),
          (k = c.jsx(r("WAWebHistorySyncSettingItem.react"), {})),
          (t[16] = k),
          (t[17] = I))
        : ((k = t[16]), (I = t[17]));
      var T;
      if (t[18] !== n.list || t[19] !== a) {
        var D;
        (t[21] !== a
          ? ((D = function (t, n) {
              return t.id === "divider"
                ? c.jsx(
                    r("WAWebGroupInfoSeparator.react"),
                    { animation: !1 },
                    n,
                  )
                : c.jsx(
                    o("WAWebSettings.MenuItem").SettingsMenuItem,
                    {
                      setting: t,
                      onSelect: function () {
                        return a(t);
                      },
                      showIcon: !0,
                      border: "bottom-partial",
                      isRefresh: !0,
                    },
                    t.id,
                  );
            }),
            (t[21] = a),
            (t[22] = D))
          : (D = t[22]),
          (T = n.list.filter(v).map(D)),
          (t[18] = n.list),
          (t[19] = a),
          (t[20] = T));
      } else T = t[20];
      var x;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = c.jsx("div", { className: "x9orja2 xyri2b xbaz6xv x1c1uobl" })),
          (t[23] = x))
        : (x = t[23]);
      var $;
      t[24] !== s
        ? (($ =
            s &&
            c.jsx(r("WAWebMacBetaUpsellToastbar.react"), {
              sourceType: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SETTINGS,
            })),
          (t[24] = s),
          (t[25] = $))
        : ($ = t[25]);
      var P;
      return (
        t[26] !== T || t[27] !== $ || t[28] !== R || t[29] !== E
          ? ((P = c.jsxs(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
              allowTabNavigation: !0,
              colorScheme: "lightest",
              children: [R, E, I, k, T, x, $],
            })),
            (t[26] = T),
            (t[27] = $),
            (t[28] = R),
            (t[29] = E),
            (t[30] = P))
          : (P = t[30]),
        P
      );
    }
    function v(e) {
      return e.parentId == null;
    }
    function S(e) {
      return e.id === "notifications";
    }
    function R(t) {
      var n = o("react-compiler-runtime").c(42),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = f(""),
        u = l[0],
        d = l[1],
        m = o("useWAWebSearchModel").useSearchModel(k),
        p = m.query,
        v = m.results,
        S = m.searchInstance,
        R = _(),
        T;
      e: {
        if (u === "") {
          var D;
          (n[3] !== S.data
            ? ((D = S.data.filter(E)), (n[3] = S.data), (n[4] = D))
            : (D = n[4]),
            (T = D));
          break e;
        } else if (v != null) {
          var x;
          (n[5] !== v.results
            ? ((x = v.results.map(L)), (n[5] = v.results), (n[6] = x))
            : (x = n[6]),
            (T = x));
          break e;
        }
        var $;
        (n[7] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = []), (n[7] = $))
          : ($ = n[7]),
          (T = $));
      }
      var P = T,
        N = o("useWAWebNavigatableList").useNavigatableList(P),
        M = N.activeItem,
        w = N.listSelection,
        A;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = o("WAWebMemoizeWithClearUtils").memoizeWithClear(C)),
          (n[8] = A))
        : (A = n[8]);
      var F = A,
        O = F[0],
        B = F[1],
        W;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = function () {
            var e;
            ((e = R.current) == null ? void 0 : e.scrollTop) != null &&
              (R.current.scrollTop = 0);
          }),
          (n[9] = W))
        : (W = n[9]);
      var q = W,
        U;
      n[10] !== p
        ? ((U = function (t) {
            (O(), p(t), d(t));
          }),
          (n[10] = p),
          (n[11] = U))
        : (U = n[11]);
      var V = U,
        H;
      n[12] !== a || n[13] !== u
        ? ((H = function (t) {
            if (t != null) {
              var e = u.length > 0;
              if (
                (t.wamName != null &&
                  t.parentId == null &&
                  h(
                    t.wamName,
                    e
                      ? o("WAWebWamEnumSettingsClickEntryPoint")
                          .SETTINGS_CLICK_ENTRY_POINT.SETTINGS_SEARCH
                      : o("WAWebWamEnumSettingsClickEntryPoint")
                          .SETTINGS_CLICK_ENTRY_POINT.SETTINGS_SCREEN,
                  ),
                e)
              ) {
                var n = t.id,
                  r;
                if (t.parent != null) {
                  var i;
                  r =
                    (i = t.parent.wamName) != null
                      ? i
                      : o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
                          .UNKNOWN;
                }
                y(n, r);
              }
              a.onSettingClick != null && a.onSettingClick(t.step);
            }
          }),
          (n[12] = a),
          (n[13] = u),
          (n[14] = H))
        : (H = n[14]);
      var G = H,
        z;
      n[15] !== M || n[16] !== G
        ? ((z = function () {
            G(M);
          }),
          (n[15] = M),
          (n[16] = G),
          (n[17] = z))
        : (z = n[17]);
      var j = z,
        K;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = s._(/*BTDS*/ "Search settings")), (n[18] = K))
        : (K = n[18]);
      var Q = K,
        X;
      n[19] !== G ||
      n[20] !== P ||
      n[21] !== w ||
      n[22] !== a.onProfile ||
      n[23] !== a.profileId ||
      n[24] !== u
        ? ((X = c.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            children:
              u === ""
                ? c.jsx(b, {
                    profileId: a.profileId,
                    onProfile: a.onProfile,
                    listSelection: w,
                    onClick: G,
                  })
                : c.jsx(I, { results: P, onSelect: G }),
          })),
          (n[19] = G),
          (n[20] = P),
          (n[21] = w),
          (n[22] = a.onProfile),
          (n[23] = a.profileId),
          (n[24] = u),
          (n[25] = X))
        : (X = n[25]);
      var Y = X,
        J;
      n[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = s._(/*BTDS*/ "Settings")), (n[26] = J))
        : (J = n[26]);
      var Z;
      n[27] !== a.onClose
        ? ((Z = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: J,
            onBack: a.onClose,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
          })),
          (n[27] = a.onClose),
          (n[28] = Z))
        : (Z = n[28]);
      var ee, te;
      n[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = { namespace: "SettingsSearch", onError: r("WAWebNoop") }),
          (te = { className: "x1phvje8 xcldk2z x1gxa6cn xa0aww2" }),
          (n[29] = ee),
          (n[30] = te))
        : ((ee = n[29]), (te = n[30]));
      var ne;
      n[31] !== j || n[32] !== V || n[33] !== u
        ? ((ne = c.jsx(
            "div",
            babelHelpers.extends({}, te, {
              children: c.jsx(r("WDSSearchBar.react"), {
                hintText: Q,
                onValueChange: V,
                onEnter: j,
                onBlur: B,
                onFocus: q,
                value: u,
              }),
            }),
          )),
          (n[31] = j),
          (n[32] = V),
          (n[33] = u),
          (n[34] = ne))
        : (ne = n[34]);
      var re;
      n[35] !== Y || n[36] !== ne
        ? ((re = c.jsx(r("WAWebDrawerBody.react"), {
            ref: R,
            isRefresh: !0,
            backgroundColor: "default",
            children: c.jsxs(o("LexicalComposer").LexicalComposer, {
              initialConfig: ee,
              children: [ne, Y],
            }),
          })),
          (n[35] = Y),
          (n[36] = ne),
          (n[37] = re))
        : (re = n[37]);
      var oe;
      return (
        n[38] !== i || n[39] !== Z || n[40] !== re
          ? ((oe = c.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              theme: "settings",
              testid: void 0,
              tsNavigationData: g,
              children: [Z, re],
            })),
            (n[38] = i),
            (n[39] = Z),
            (n[40] = re),
            (n[41] = oe))
          : (oe = n[41]),
        oe
      );
    }
    function L(e) {
      return e.data;
    }
    function E(e) {
      return e.parentId == null;
    }
    function k() {
      return new (o("WAWebSettingSearchModel").SettingSearch)();
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.onSelect,
        r = e.results,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = r.length
              ? c.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
                  allowTabNavigation: !0,
                  colorScheme: "lightest",
                  children: c.jsx(o("WAWebSettings.MenuItem").SettingsMenu, {
                    settings: r,
                    onSelect: n,
                  }),
                })
              : c.jsx(o("WAWebEmptyState.react").SearchWithoutKeyword, {})),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    l.default = R;
  },
  226,
);
