__d(
  "WAWebChatsSettingsDrawer.react",
  [
    "fbt",
    "WAWebAnimatedEmojiGatingUtils",
    "WAWebCappingUsageModalLoadable.react",
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeGatingUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebModalManager",
    "WAWebSettingsFBT",
    "WAWebSettingsHierarchy",
    "WAWebThemeContext",
    "WDSIconIcChevronRight.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
    "useWAWebSettingSync",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useContext,
      d = {
        sectionTitle: {
          paddingTop: "x1cnzs8",
          paddingBottom: "xx6bls6",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.systemThemeMode,
        n = e.theme;
      return t
        ? o("WAWebSettingsFBT").themeSystemLabel()
        : n === "dark"
          ? s._(/*BTDS*/ "Dark mode")
          : s._(/*BTDS*/ "Light mode");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("react-compiler-runtime").c(89),
        n = e.onClickChatTheme,
        a = e.onClickMediaAutoDownload,
        i = e.onClickMediaUploadQuality,
        l = e.onClickTheme,
        p = e.onClickWallpaper,
        f = e.onClose,
        g = e.ref,
        h = c(o("WAWebThemeContext").ThemeContext),
        y,
        C;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = r("WAWebChatPreferenceCollection").getDefault()),
          (C = [
            "spellcheck",
            "transformTextEmoji",
            "enterIsSend",
            "autoplayAnimatedImages",
          ]),
          (t[0] = y),
          (t[1] = C))
        : ((y = t[0]), (C = t[1]));
      var b = o("useWAWebModelValues").useModelValues(y, C),
        v;
      t[2] !== b
        ? ((v = function (t) {
            b.set("transformTextEmoji", t);
          }),
          (t[2] = b),
          (t[3] = v))
        : (v = t[3]);
      var S = o("useWAWebSettingSync").useSettingSync(
          "replaceTextWithEmoji",
          v,
        ),
        R;
      t[4] !== b
        ? ((R = function (t) {
            b.set("spellcheck", t);
          }),
          (t[4] = b),
          (t[5] = R))
        : (R = t[5]);
      var L = o("useWAWebSettingSync").useSettingSync("isSpellCheckEnabled", R),
        E;
      t[6] !== L
        ? ((E = function (t) {
            L(t);
          }),
          (t[6] = L),
          (t[7] = E))
        : (E = t[7]);
      var k = E,
        I;
      t[8] !== S
        ? ((I = function (t) {
            S(t);
          }),
          (t[8] = S),
          (t[9] = I))
        : (I = t[9]);
      var T = I,
        D;
      t[10] !== b
        ? ((D = function (t) {
            b.set("enterIsSend", t);
          }),
          (t[10] = b),
          (t[11] = D))
        : (D = t[11]);
      var x = o("useWAWebSettingSync").useSettingSync(
          "isEnterToSendEnabled",
          D,
        ),
        $;
      t[12] !== x
        ? (($ = function (t) {
            x(t);
          }),
          (t[12] = x),
          (t[13] = $))
        : ($ = t[13]);
      var P = $,
        N;
      t[14] !== b
        ? ((N = function (t) {
            b.set("autoplayAnimatedImages", t);
          }),
          (t[14] = b),
          (t[15] = N))
        : (N = t[15]);
      var M = N,
        w;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = s._(/*BTDS*/ "Spell check")), (t[16] = w))
        : (w = t[16]);
      var A = w,
        F;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = s._(/*BTDS*/ "Check spelling while typing")), (t[17] = F))
        : (F = t[17]);
      var O = F,
        B;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = s._(/*BTDS*/ "Replace text with emoji")), (t[18] = B))
        : (B = t[18]);
      var W = B,
        q;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = s._(/*BTDS*/ "Emoji will replace specific text as you type")),
          (t[19] = q))
        : (q = t[19]);
      var U = q,
        V;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = s._(/*BTDS*/ "Enter is send")), (t[20] = V))
        : (V = t[20]);
      var H = V,
        G;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = s._(/*BTDS*/ "Enter key will send your message")), (t[21] = G))
        : (G = t[21]);
      var z = G,
        j;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = s._(/*BTDS*/ "Autoplay animated images")), (t[22] = j))
        : (j = t[22]);
      var K = j,
        Q;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = s._(/*BTDS*/ "Make emojis and GIFs move automatically")),
          (t[23] = Q))
        : (Q = t[23]);
      var X = Q,
        Y = _,
        J;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = s._(/*BTDS*/ "Wallpaper")), (t[24] = J))
        : (J = t[24]);
      var Z = J,
        ee;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = { surface: "unknown", viewName: "chats-settings" }),
          (t[25] = ee))
        : (ee = t[25]);
      var te;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((te = o("WAWebSettingsFBT").chatsTitle()), (t[26] = te))
        : (te = t[26]);
      var ne;
      t[27] !== f
        ? ((ne = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: te,
            onBack: f,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          })),
          (t[27] = f),
          (t[28] = ne))
        : (ne = t[28]);
      var re;
      t[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = s._(/*BTDS*/ "Display")), (t[29] = re))
        : (re = t[29]);
      var oe;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = o("WAWebSettingsHierarchy").ThemeSettingsItem.title()),
          (t[30] = oe))
        : (oe = t[30]);
      var ae;
      t[31] !== h ? ((ae = m(h)), (t[31] = h), (t[32] = ae)) : (ae = t[32]);
      var ie, le;
      t[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = u.jsx(r("WDSIconIcChevronRight.react"), {
            colorName: "contentDeemphasized",
            directional: !0,
          })),
          (le = o("WAWebSettingsHierarchy")
            .ThemeSettingsItem.title()
            .toString()),
          (t[33] = ie),
          (t[34] = le))
        : ((ie = t[33]), (le = t[34]));
      var se;
      t[35] !== l || t[36] !== ae
        ? ((se = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "theme",
            testid: void 0,
            onSelect: l,
            primary: oe,
            secondary: ae,
            detailRight: ie,
            ariaLabel: le,
          })),
          (t[35] = l),
          (t[36] = ae),
          (t[37] = se))
        : (se = t[37]);
      var ue, ce;
      t[38] === Symbol.for("react.memo_cache_sentinel")
        ? ((ue = u.jsx(r("WDSIconIcChevronRight.react"), {
            colorName: "contentDeemphasized",
            directional: !0,
          })),
          (ce = Z.toString()),
          (t[38] = ue),
          (t[39] = ce))
        : ((ue = t[38]), (ce = t[39]));
      var de;
      t[40] !== p
        ? ((de = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "wallpaper",
            testid: void 0,
            onSelect: p,
            primary: Z,
            detailRight: ue,
            ariaLabel: ce,
          })),
          (t[40] = p),
          (t[41] = de))
        : (de = t[41]);
      var me;
      t[42] !== n
        ? ((me =
            o("WAWebChatThemeGatingUtils").isChatThemesEnabled() &&
            u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
              optionId: "chat-theme",
              testid: void 0,
              onSelect: n,
              primary: o("WAWebSettingsFBT").chatThemeTitle(),
              detailRight: u.jsx(r("WDSIconIcChevronRight.react"), {
                colorName: "contentDeemphasized",
                directional: !0,
              }),
              ariaLabel: o("WAWebSettingsFBT").chatThemeTitle().toString(),
            })),
          (t[42] = n),
          (t[43] = me))
        : (me = t[43]);
      var pe;
      t[44] !== se || t[45] !== de || t[46] !== me
        ? ((pe = u.jsxs(r("WAWebDrawerSection.react"), {
            theme: "no-padding",
            title: re,
            titleXStyle: d.sectionTitle,
            animation: !1,
            children: [se, de, me],
          })),
          (t[44] = se),
          (t[45] = de),
          (t[46] = me),
          (t[47] = pe))
        : (pe = t[47]);
      var _e;
      t[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((_e = s._(/*BTDS*/ "Chat settings")), (t[48] = _e))
        : (_e = t[48]);
      var fe, ge, he;
      t[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((fe = o(
            "WAWebSettingsHierarchy",
          ).MediaUploadQualitySettingsItem.title()),
          (ge = u.jsx(r("WDSIconIcChevronRight.react"), {
            colorName: "contentDeemphasized",
            directional: !0,
          })),
          (he = o("WAWebSettingsHierarchy")
            .MediaUploadQualitySettingsItem.title()
            .toString()),
          (t[49] = fe),
          (t[50] = ge),
          (t[51] = he))
        : ((fe = t[49]), (ge = t[50]), (he = t[51]));
      var ye;
      t[52] !== i
        ? ((ye = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "media-upload-quality",
            testid: void 0,
            onSelect: i,
            primary: fe,
            detailRight: ge,
            ariaLabel: he,
          })),
          (t[52] = i),
          (t[53] = ye))
        : (ye = t[53]);
      var Ce, be, ve;
      t[54] === Symbol.for("react.memo_cache_sentinel")
        ? ((Ce = o(
            "WAWebSettingsHierarchy",
          ).MediaAutoDownloadSettingsItem.title()),
          (be = u.jsx(r("WDSIconIcChevronRight.react"), {
            colorName: "contentDeemphasized",
            directional: !0,
          })),
          (ve = o("WAWebSettingsHierarchy")
            .MediaAutoDownloadSettingsItem.title()
            .toString()),
          (t[54] = Ce),
          (t[55] = be),
          (t[56] = ve))
        : ((Ce = t[54]), (be = t[55]), (ve = t[56]));
      var Se;
      t[57] !== a
        ? ((Se = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "media-auto-download",
            testid: void 0,
            onSelect: a,
            primary: Ce,
            detailRight: be,
            ariaLabel: ve,
          })),
          (t[57] = a),
          (t[58] = Se))
        : (Se = t[58]);
      var Re;
      t[59] === Symbol.for("react.memo_cache_sentinel")
        ? ((Re =
            o(
              "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
            ).isIndividualNewChatMessageCappingEnabled() &&
            u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
              optionId: "new-chats-started",
              testid: void 0,
              onSelect: Y,
              primary: s._(/*BTDS*/ "New chats started"),
              detailRight: u.jsx(r("WDSIconIcChevronRight.react"), {
                colorName: "contentDeemphasized",
                directional: !0,
              }),
              ariaLabel: s._(/*BTDS*/ "New chats started"),
            })),
          (t[59] = Re))
        : (Re = t[59]);
      var Le;
      t[60] === Symbol.for("react.memo_cache_sentinel")
        ? ((Le = s._(/*BTDS*/ "{title}. {description}", [
            s._param("title", A),
            s._param("description", O),
          ])),
          (t[60] = Le))
        : (Le = t[60]);
      var Ee;
      t[61] !== b.spellcheck || t[62] !== k
        ? ((Ee = u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
            optionId: "spellcheck",
            testid: void 0,
            on: b.spellcheck,
            onSelect: k,
            primary: A,
            secondary: O,
            ariaLabel: Le,
          })),
          (t[61] = b.spellcheck),
          (t[62] = k),
          (t[63] = Ee))
        : (Ee = t[63]);
      var ke;
      t[64] === Symbol.for("react.memo_cache_sentinel")
        ? ((ke = s._(/*BTDS*/ "{title}. {description}", [
            s._param("title", W),
            s._param("description", U),
          ])),
          (t[64] = ke))
        : (ke = t[64]);
      var Ie;
      t[65] !== b.transformTextEmoji || t[66] !== T
        ? ((Ie = u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
            optionId: "emoji",
            testid: void 0,
            on: b.transformTextEmoji,
            onSelect: T,
            primary: W,
            secondary: U,
            ariaLabel: ke,
          })),
          (t[65] = b.transformTextEmoji),
          (t[66] = T),
          (t[67] = Ie))
        : (Ie = t[67]);
      var Te;
      t[68] === Symbol.for("react.memo_cache_sentinel")
        ? ((Te = s._(/*BTDS*/ "{title}. {description}", [
            s._param("title", H),
            s._param("description", z),
          ])),
          (t[68] = Te))
        : (Te = t[68]);
      var De;
      t[69] !== b.enterIsSend || t[70] !== P
        ? ((De = u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
            optionId: "enter",
            testid: void 0,
            on: b.enterIsSend,
            onSelect: P,
            primary: H,
            secondary: z,
            ariaLabel: Te,
          })),
          (t[69] = b.enterIsSend),
          (t[70] = P),
          (t[71] = De))
        : (De = t[71]);
      var xe;
      t[72] !== b.autoplayAnimatedImages || t[73] !== M
        ? ((xe =
            o("WAWebAnimatedEmojiGatingUtils").isAnimatedEmojiEnabled() &&
            u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
              optionId: "animated-images",
              testid: void 0,
              on: b.autoplayAnimatedImages,
              onSelect: M,
              primary: K,
              secondary: X,
              ariaLabel: s._(/*BTDS*/ "{title}. {description}", [
                s._param("title", K),
                s._param("description", X),
              ]),
            })),
          (t[72] = b.autoplayAnimatedImages),
          (t[73] = M),
          (t[74] = xe))
        : (xe = t[74]);
      var $e;
      t[75] !== ye ||
      t[76] !== Se ||
      t[77] !== Ee ||
      t[78] !== Ie ||
      t[79] !== De ||
      t[80] !== xe
        ? (($e = u.jsxs(r("WAWebDrawerSection.react"), {
            theme: "no-padding",
            title: _e,
            titleXStyle: d.sectionTitle,
            animation: !1,
            children: [ye, Se, Re, Ee, Ie, De, xe],
          })),
          (t[75] = ye),
          (t[76] = Se),
          (t[77] = Ee),
          (t[78] = Ie),
          (t[79] = De),
          (t[80] = xe),
          (t[81] = $e))
        : ($e = t[81]);
      var Pe;
      t[82] !== pe || t[83] !== $e
        ? ((Pe = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(o("WAWebMenu.react").WAWebMenu, {
              size: "medium",
              border: "bottom-partial",
              allowTabNavigation: !0,
              children: [pe, $e],
            }),
          })),
          (t[82] = pe),
          (t[83] = $e),
          (t[84] = Pe))
        : (Pe = t[84]);
      var Ne;
      return (
        t[85] !== g || t[86] !== ne || t[87] !== Pe
          ? ((Ne = u.jsxs(r("WAWebDrawer.react"), {
              ref: g,
              theme: "striped",
              testid: void 0,
              tsNavigationData: ee,
              children: [ne, Pe],
            })),
            (t[85] = g),
            (t[86] = ne),
            (t[87] = Pe),
            (t[88] = Ne))
          : (Ne = t[88]),
        Ne
      );
    }
    function _() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(
          o("WAWebCappingUsageModalLoadable.react").CappingUsageModalLoadable,
          {},
        ),
      );
    }
    l.default = p;
  },
  226,
);
