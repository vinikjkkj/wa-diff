__d(
  "WAWebMidDrawerEmptyState.react",
  [
    "cx",
    "fbt",
    "WAWebAccountCircleIcon.react",
    "WAWebBotBaseGating",
    "WAWebCommunityFilledRefreshedIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebLockOutlineIcon.react",
    "WAWebMetaAILandingLoadable",
    "WAWebNavBarTypes",
    "WAWebNewsletterIcon.react",
    "WAWebSettingsFilledRefreshedIcon.react",
    "WAWebStatusFilledRefreshedIcon.react",
    "WAWebVoipCallsTabEmptyStateLoadable.react",
    "WDSIconWdsIcUpdatesFilled.react",
    "WDSText.react",
    "cr:21286",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = o("react")),
      d = {
        heroIcon: { color: "x1vef352", display: "x1rg5ohu", $$css: !0 },
        spacingSingleBottom: { marginBottom: "xcytdqz", $$css: !0 },
        spacingTripleBottom: { marginBottom: "x14mdic9", $$css: !0 },
        spacingTripleTop: { marginTop: "x9u28bd", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(35),
        a = e.type,
        i,
        l,
        s,
        m;
      e: switch (a) {
        case o("WAWebNavBarTypes").NavBarItems.Status: {
          var p;
          (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = c.jsx(
                o("WAWebStatusFilledRefreshedIcon.react")
                  .StatusFilledRefreshedIcon,
                { height: 64, width: 64, iconXstyle: d.heroIcon },
              )),
              (t[0] = p))
            : (p = t[0]),
            (i = p));
          var _;
          (t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = u._(/*BTDS*/ "Share status updates")), (t[1] = _))
            : (_ = t[1]),
            (l = _));
          var f;
          (t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = u._(
                /*BTDS*/ "Share photos, videos and text that disappear after 24 hours.",
              )),
              (t[2] = f))
            : (f = t[2]),
            (s = f));
          var g;
          t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
                height: 20,
                width: 20,
              })),
              (t[3] = g))
            : (g = t[3]);
          var h;
          (t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = c.jsxs("div", {
                className: "_al_x",
                children: [
                  g,
                  " ",
                  u._(/*BTDS*/ "Your status updates are end-to-end encrypted"),
                ],
              })),
              (t[4] = h))
            : (h = t[4]),
            (m = h));
          break e;
        }
        case o("WAWebNavBarTypes").NavBarItems.Newsletters: {
          var y;
          (t[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = c.jsx(o("WAWebNewsletterIcon.react").NewsletterIcon, {
                height: 64,
                width: 64,
                iconXstyle: d.heroIcon,
              })),
              (t[5] = y))
            : (y = t[5]),
            (i = y));
          var C;
          (t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = u._(/*BTDS*/ "Discover channels")), (t[6] = C))
            : (C = t[6]),
            (l = C));
          var b;
          (t[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = u._(
                /*BTDS*/ "Entertainment, sports, news, lifestyle, people and more. Follow the channels that interest you",
              )),
              (t[7] = b))
            : (b = t[7]),
            (s = b));
          break e;
        }
        case o("WAWebNavBarTypes").NavBarItems.Updates: {
          var v;
          (t[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = c.jsx(r("WDSIconWdsIcUpdatesFilled.react"), {
                height: 64,
                width: 64,
                iconXstyle: d.heroIcon,
              })),
              (t[8] = v))
            : (v = t[8]),
            (i = v));
          var S;
          (t[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((S = u._(/*BTDS*/ "Updates")), (t[9] = S))
            : (S = t[9]),
            (l = S));
          var R;
          (t[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = u._(
                /*BTDS*/ "Updates from people and topics you care about.",
              )),
              (t[10] = R))
            : (R = t[10]),
            (s = R));
          break e;
        }
        case o("WAWebNavBarTypes").NavBarItems.Settings: {
          var L;
          (t[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = c.jsx(
                o("WAWebSettingsFilledRefreshedIcon.react")
                  .SettingsFilledRefreshedIcon,
                { height: 64, width: 64, iconXstyle: d.heroIcon },
              )),
              (t[11] = L))
            : (L = t[11]),
            (i = L));
          var E;
          (t[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = u._(/*BTDS*/ "Settings")), (t[12] = E))
            : (E = t[12]),
            (l = E));
          break e;
        }
        case o("WAWebNavBarTypes").NavBarItems.Profile: {
          var k;
          (t[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = c.jsx(o("WAWebAccountCircleIcon.react").AccountCircleIcon, {
                height: 64,
                width: 64,
                iconXstyle: d.heroIcon,
              })),
              (t[13] = k))
            : (k = t[13]),
            (i = k));
          var I;
          (t[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((I = u._(/*BTDS*/ "Profile")), (t[14] = I))
            : (I = t[14]),
            (l = I));
          break e;
        }
        case o("WAWebNavBarTypes").NavBarItems.Communities: {
          var T;
          (t[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((T = c.jsx(
                o("WAWebCommunityFilledRefreshedIcon.react")
                  .CommunityFilledRefreshedIcon,
                { height: 64, width: 64, iconXstyle: d.heroIcon },
              )),
              (t[15] = T))
            : (T = t[15]),
            (i = T));
          var D;
          (t[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((D = u._(/*BTDS*/ "Create communities")), (t[16] = D))
            : (D = t[16]),
            (l = D));
          var x;
          (t[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = u._(
                /*BTDS*/ "Bring members together in topic-based groups and easily send them admin announcements.",
              )),
              (t[17] = x))
            : (x = t[17]),
            (s = x));
          var $;
          t[18] === Symbol.for("react.memo_cache_sentinel")
            ? (($ = c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
                height: 20,
                width: 20,
              })),
              (t[18] = $))
            : ($ = t[18]);
          var P;
          (t[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = c.jsxs("div", {
                className: "_al_x",
                children: [
                  $,
                  " ",
                  u._(
                    /*BTDS*/ "Your personal messages in communities are end-to-end encrypted",
                  ),
                ],
              })),
              (t[19] = P))
            : (P = t[19]),
            (m = P));
          break e;
        }
        case o("WAWebNavBarTypes").NavBarItems.Calls: {
          var N;
          return (
            t[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((N = c.jsx(
                  o("WAWebVoipCallsTabEmptyStateLoadable.react")
                    .VoipCallsTabEmptyStateLoadable,
                  {},
                )),
                (t[20] = N))
              : (N = t[20]),
            N
          );
        }
        case o("WAWebNavBarTypes").NavBarItems.Contacts: {
          if (n("cr:21286") != null) {
            var M;
            return (
              t[21] === Symbol.for("react.memo_cache_sentinel")
                ? ((M = c.jsx(n("cr:21286"), {})), (t[21] = M))
                : (M = t[21]),
              M
            );
          }
          return null;
        }
        case o("WAWebNavBarTypes").NavBarItems.MetaAI: {
          if (o("WAWebBotBaseGating").isMetaAIHomeEnabled()) {
            var w;
            return (
              t[22] === Symbol.for("react.memo_cache_sentinel")
                ? ((w = c.jsx(
                    o("WAWebMetaAILandingLoadable").WAWebMetaAILandingLoadable,
                    {},
                  )),
                  (t[22] = w))
                : (w = t[22]),
              w
            );
          }
          return null;
        }
        case o("WAWebNavBarTypes").NavBarItems.Archived:
        case o("WAWebNavBarTypes").NavBarItems.Chats:
        case o("WAWebNavBarTypes").NavBarItems.Beta:
        case o("WAWebNavBarTypes").NavBarItems.BizTools:
        case o("WAWebNavBarTypes").NavBarItems.AdCreation:
        case o("WAWebNavBarTypes").NavBarItems.Orders:
        case o("WAWebNavBarTypes").NavBarItems.Labels:
        case o("WAWebNavBarTypes").NavBarItems.LockedChats:
        case o("WAWebNavBarTypes").NavBarItems.Starred:
        case o("WAWebNavBarTypes").NavBarItems.MediaHub:
        case o("WAWebNavBarTypes").NavBarItems.MeTab:
        case o("WAWebNavBarTypes").NavBarItems.CustomerManager:
          return null;
      }
      var A;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = [d.spacingSingleBottom, d.spacingTripleTop]), (t[23] = A))
        : (A = t[23]);
      var F;
      t[24] !== l
        ? ((F = c.jsx(r("WDSText.react"), {
            type: "LargeTitle1",
            colorName: "contentDefault",
            testid: void 0,
            isPrimaryHeading: !0,
            xstyle: A,
            children: l,
          })),
          (t[24] = l),
          (t[25] = F))
        : (F = t[25]);
      var O = F,
        B;
      t[26] !== s
        ? ((B = c.jsx(r("WDSText.react"), {
            type: "Body1",
            testid: void 0,
            colorName: "contentDeemphasized",
            xstyle: d.spacingTripleBottom,
            children: s,
          })),
          (t[26] = s),
          (t[27] = B))
        : (B = t[27]);
      var W = B,
        q;
      t[28] !== i
        ? ((q = c.jsx("div", { children: i })), (t[28] = i), (t[29] = q))
        : (q = t[29]);
      var U;
      return (
        t[30] !== W || t[31] !== O || t[32] !== m || t[33] !== q
          ? ((U = c.jsx(r("WAWebDrawer.react"), {
              theme: "white-bg",
              testid: void 0,
              disableNavigationLogging: !0,
              children: c.jsx(r("WAWebDrawerBody.react"), {
                children: c.jsx("div", {
                  className: "_al_c",
                  children: c.jsxs("div", {
                    className: "_al_d",
                    children: [q, O, W, m],
                  }),
                }),
              }),
            })),
            (t[30] = W),
            (t[31] = O),
            (t[32] = m),
            (t[33] = q),
            (t[34] = U))
          : (U = t[34]),
        U
      );
    }
    l.MidDrawerEmptyState = m;
  },
  226,
);
