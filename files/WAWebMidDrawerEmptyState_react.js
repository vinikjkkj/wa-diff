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
      var t = e.type,
        a,
        i,
        l,
        s;
      switch (t) {
        case o("WAWebNavBarTypes").NavBarItems.Status: {
          ((a = c.jsx(
            o("WAWebStatusFilledRefreshedIcon.react").StatusFilledRefreshedIcon,
            { height: 64, width: 64, iconXstyle: d.heroIcon },
          )),
            (i = u._(/*BTDS*/ "Share status updates")),
            (l = u._(
              /*BTDS*/ "Share photos, videos and text that disappear after 24 hours.",
            )),
            (s = c.jsxs("div", {
              className: "_al_x",
              children: [
                c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
                  height: 20,
                  width: 20,
                }),
                " ",
                u._(/*BTDS*/ "Your status updates are end-to-end encrypted"),
              ],
            })));
          break;
        }
        case o("WAWebNavBarTypes").NavBarItems.Newsletters: {
          ((a = c.jsx(o("WAWebNewsletterIcon.react").NewsletterIcon, {
            height: 64,
            width: 64,
            iconXstyle: d.heroIcon,
          })),
            (i = u._(/*BTDS*/ "Discover channels")),
            (l = u._(
              /*BTDS*/ "Entertainment, sports, news, lifestyle, people and more. Follow the channels that interest you",
            )));
          break;
        }
        case o("WAWebNavBarTypes").NavBarItems.Updates: {
          ((a = c.jsx(r("WDSIconWdsIcUpdatesFilled.react"), {
            height: 64,
            width: 64,
            iconXstyle: d.heroIcon,
          })),
            (i = u._(/*BTDS*/ "Updates")),
            (l = u._(
              /*BTDS*/ "Updates from people and topics you care about.",
            )));
          break;
        }
        case o("WAWebNavBarTypes").NavBarItems.Settings: {
          ((a = c.jsx(
            o("WAWebSettingsFilledRefreshedIcon.react")
              .SettingsFilledRefreshedIcon,
            { height: 64, width: 64, iconXstyle: d.heroIcon },
          )),
            (i = u._(/*BTDS*/ "Settings")));
          break;
        }
        case o("WAWebNavBarTypes").NavBarItems.Profile: {
          ((a = c.jsx(o("WAWebAccountCircleIcon.react").AccountCircleIcon, {
            height: 64,
            width: 64,
            iconXstyle: d.heroIcon,
          })),
            (i = u._(/*BTDS*/ "Profile")));
          break;
        }
        case o("WAWebNavBarTypes").NavBarItems.Communities: {
          ((a = c.jsx(
            o("WAWebCommunityFilledRefreshedIcon.react")
              .CommunityFilledRefreshedIcon,
            { height: 64, width: 64, iconXstyle: d.heroIcon },
          )),
            (i = u._(/*BTDS*/ "Create communities")),
            (l = u._(
              /*BTDS*/ "Bring members together in topic-based groups and easily send them admin announcements.",
            )),
            (s = c.jsxs("div", {
              className: "_al_x",
              children: [
                c.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
                  height: 20,
                  width: 20,
                }),
                " ",
                u._(
                  /*BTDS*/ "Your personal messages in communities are end-to-end encrypted",
                ),
              ],
            })));
          break;
        }
        case o("WAWebNavBarTypes").NavBarItems.Calls:
          return c.jsx(
            o("WAWebVoipCallsTabEmptyStateLoadable.react")
              .VoipCallsTabEmptyStateLoadable,
            {},
          );
        case o("WAWebNavBarTypes").NavBarItems.Contacts:
          return n("cr:21286") != null ? c.jsx(n("cr:21286"), {}) : null;
        case o("WAWebNavBarTypes").NavBarItems.MetaAI:
          return o("WAWebBotBaseGating").isMetaAIHomeEnabled()
            ? c.jsx(
                o("WAWebMetaAILandingLoadable").WAWebMetaAILandingLoadable,
                {},
              )
            : null;
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
      var m = c.jsx(r("WDSText.react"), {
          type: "LargeTitle1",
          colorName: "contentDefault",
          testid: void 0,
          isPrimaryHeading: !0,
          xstyle: [d.spacingSingleBottom, d.spacingTripleTop],
          children: i,
        }),
        p = c.jsx(r("WDSText.react"), {
          type: "Body1",
          testid: void 0,
          colorName: "contentDeemphasized",
          xstyle: d.spacingTripleBottom,
          children: l,
        });
      return c.jsx(r("WAWebDrawer.react"), {
        theme: "white-bg",
        testid: void 0,
        disableNavigationLogging: !0,
        children: c.jsx(r("WAWebDrawerBody.react"), {
          children: c.jsx("div", {
            className: "_al_c",
            children: c.jsxs("div", {
              className: "_al_d",
              children: [c.jsx("div", { children: a }), m, p, s],
            }),
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MidDrawerEmptyState = m));
  },
  226,
);
