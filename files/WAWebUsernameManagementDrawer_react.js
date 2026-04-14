__d(
  "WAWebUsernameManagementDrawer.react",
  [
    "fbt",
    "WAWebClickable.react",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebCreateUsernameKeyDrawer.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebDropdown.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebProfilePicThumbCollection",
    "WAWebText.react",
    "WAWebTextStatusCollection",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsUsername",
    "WAWebUsernameCreationActionLogger",
    "WAWebUsernameEditDropdown.react",
    "WAWebUsernameKeyInfoDrawer.react",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebVelocityTransitionGroup",
    "WAWebWamEnumUsernameCreationCurrentScreen",
    "WAWebWamEnumUsernameCreationFlowType",
    "WAWebWdsPictoPrivateMentionIcon.react",
    "WDSIconIcKey.react",
    "WDSIconIcLightbulb.react",
    "WDSText.react",
    "cr:1923",
    "react",
    "useWAWebContactValues",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useRef,
      m = c.useState,
      p = {
        badge: { marginTop: "x9u28bd", marginBottom: "x14mdic9", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        editText: { fontSize: "x1f6kntn", $$css: !0 },
        drawerTitleContainer: {
          justifyContent: "x1qughib",
          width: "xh8yej3",
          $$css: !0,
        },
        drawerIcon: {
          minWidth: "xg3ba1e",
          marginInlineEnd: "xviac27",
          $$css: !0,
        },
        sidePadding: {
          marginInlineStart: "xlese2p",
          marginInlineEnd: "xviac27",
          $$css: !0,
        },
        divider: {
          marginTop: "x9u28bd",
          marginBottom: "x14mdic9",
          marginInlineStart: "x6pxu1d",
          marginInlineEnd: "xd6izgl",
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
        tipContainer: {
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xde1mab",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x1iw51ew",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopColor: "xnj1f2r",
          borderInlineEndColor: "x2uibgs",
          borderBottomColor: "xkveyfu",
          borderInlineStartColor: "x12llq9",
          marginBottom: "x1ua1l7f",
          $$css: !0,
        },
        tipIcon: { marginInlineEnd: "xviac27", color: "xhslqc4", $$css: !0 },
        usernameDescription: {
          marginTop: "x98l61r",
          marginBottom: "xefnzgg",
          $$css: !0,
        },
        marginTop8: { marginTop: "x1380le5", $$css: !0 },
        marginBottom8: { marginBottom: "xefnzgg", $$css: !0 },
      };
    function _(e) {
      var t = e.contactId,
        n = e.isReadOnly,
        a = e.username,
        i = e.usernameKey,
        l = function () {
          (o(
            "WAWebUsernameCreationActionLogger",
          ).UsernameCreationActionLogger.logBackClicked(
            o("WAWebWamEnumUsernameCreationCurrentScreen")
              .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_MANAGE,
            o("WAWebWamEnumUsernameCreationFlowType")
              .USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
          ),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(h, { contactId: t, username: a }),
            ));
        },
        c = function () {
          i != null
            ? o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                u.jsx(r("WAWebCreateUsernameKeyDrawer.react"), {
                  contactId: t,
                  handleBack: l,
                }),
              )
            : o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                u.jsx(r("WAWebUsernameKeyInfoDrawer.react"), {
                  contactId: t,
                  username: a,
                }),
              );
        },
        d =
          i != null
            ? s._(/*BTDS*/ "{key}", [s._param("key", i)])
            : s._(/*BTDS*/ "Off"),
        m = u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          xstyle: p.sidePadding,
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              xstyle: p.drawerIcon,
              children: u.jsx(r("WDSIconIcKey.react"), {
                directional: !0,
                iconXstyle: p.secondaryColor,
                height: 21,
              }),
            }),
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              grow: 1,
              children: [
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: p.drawerTitleContainer,
                  children: [
                    u.jsx(r("WDSText.react"), {
                      colorName: "contentDefault",
                      type: "Body2",
                      children: s._(/*BTDS*/ "Key"),
                    }),
                    u.jsx(r("WDSText.react"), {
                      colorName: "contentDeemphasized",
                      type: "Body2",
                      children: d,
                    }),
                  ],
                }),
                u.jsx(o("WAWebFlex.react").FlexItem, {
                  children: u.jsx(r("WDSText.react"), {
                    colorName: "contentDeemphasized",
                    type: "Body3",
                    children: s._(
                      /*BTDS*/ "Share your username and key when telling someone how to contact you.",
                    ),
                  }),
                }),
              ],
            }),
          ],
        });
      return n
        ? m
        : u.jsx(o("WAWebClickable.react").Clickable, {
            onClick: c,
            role: "button",
            children: m,
          });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.contactId,
        n = e.isReadOnly,
        o = e.username,
        a = e.usernameKey;
      return u.jsx(r("WAWebDrawerSection.react"), {
        animation: !1,
        xstyle: p.sidePadding,
        children: u.jsx(_, {
          contactId: t,
          isReadOnly: n,
          username: o,
          usernameKey: a,
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: [p.tipContainer, p.sidePadding],
        children: [
          u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: p.tipIcon,
            children: u.jsx(r("WDSIconIcLightbulb.react"), {
              height: 32,
              width: 32,
            }),
          }),
          u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body2Emphasized",
            children: s._(
              /*BTDS*/ "You can edit your username and key on your primary phone.",
            ),
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.contactId,
        a = e.onBack,
        i = e.ref,
        l = e.username,
        c = m(null),
        _ = c[0],
        h = c[1],
        y = o("WAWebUserPrefsMeUser").getMeUser(),
        C = o("WAWebContactCollection").ContactCollection.assertGet(y),
        b = o("useWAWebContactValues").useContactValues(C.id, [
          o("WAWebFrontendContactGetters").getUsernameKey,
        ]),
        v = b[0],
        S = r("useWAWebIsKeyboardUser")(),
        R = S.isKeyboardUser,
        L = d(null),
        E = o("WAWebUserPrefsUsername").getUsernameState(),
        k =
          E === "RESERVED" ||
          (E === "ACTIVE" &&
            o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).usernameAccountLinkingEnabled()),
        I = s._(/*BTDS*/ "Username"),
        T = function () {
          o(
            "WAWebUsernameCreationActionLogger",
          ).UsernameCreationActionLogger.logBackClicked(
            o("WAWebWamEnumUsernameCreationCurrentScreen")
              .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_MANAGE,
            o("WAWebWamEnumUsernameCreationFlowType")
              .USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
          );
          var e = o("WAWebUserPrefsMeUser").getMeUser(),
            t = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(
              e,
            ),
            r = o(
              "WAWebProfilePicThumbCollection",
            ).ProfilePicThumbCollection.assertGet(e),
            a = o("WAWebContactCollection").ContactCollection.assertGet(e);
          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            u.jsx(n("cr:1923"), {
              conn: o("WAWebConnModel").Conn,
              contact: a,
              isInitialStep: !0,
              profilePicThumb: r,
              status: t,
            }),
          );
        },
        D = function () {
          h({
            DirX: o("WAWebDropdown.react").DirX.CENTER,
            DirY: o("WAWebDropdown.react").DirY.BOTTOM,
            menu: u.jsx(r("WAWebUsernameEditDropdown.react"), {
              contactId: t,
              onBack: T,
              username: l,
            }),
            anchor: L.current,
            autoFocus: R,
          });
        },
        x = function () {
          h(null);
        },
        $ =
          k !== !0 &&
          u.jsxs(u.Fragment, {
            children: [
              u.jsx(o("WAWebText.react").WAWebClickableText, {
                color: "green",
                onClick: D,
                ref: L,
                xstyle: [p.editText, p.sidePadding],
                children: s._(/*BTDS*/ "Edit"),
              }),
              u.jsx(r("WAWebVelocityTransitionGroup"), {
                transitionName: "pop-fast",
                children:
                  _ == null
                    ? null
                    : u.jsx(o("WAWebUimUie.react").UIE, {
                        dismissOnWindowResize: !0,
                        displayName: "ContextMenu",
                        escapable: !0,
                        popable: !0,
                        requestDismiss: x,
                        children: u.jsx(r("WAWebUimUieMenu.react"), {
                          contextMenu: _,
                        }),
                      }),
              }),
            ],
          }),
        P = s._(/*BTDS*/ "More about usernames"),
        N = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getFaqUrl(),
          children: P,
        }),
        M = u.jsx(o("WAWebFlex.react").FlexColumn, {
          children: u.jsxs(r("WDSText.react"), {
            colorName: "contentDeemphasized",
            textAlign: "center",
            type: "Body2",
            children: [
              E === "RESERVED"
                ? s._(
                    /*BTDS*/ "Usernames are coming soon. We'll let you know when yours is ready to use.",
                  )
                : s._(
                    /*BTDS*/ "People who don't have your number saved will see your username.",
                  ),
              " ",
              N,
            ],
          }),
        });
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: i,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "username-management",
        },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            children: $,
            onBack: a != null ? a : T,
            title: I,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          u.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              k === !0 && u.jsx(g, {}),
              u.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "full-height",
                children: [
                  u.jsx(o("WAWebFlex.react").FlexColumn, {
                    align: "center",
                    children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                      align: "center",
                      children: [
                        u.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: p.badge,
                          children: u.jsx(
                            o("WAWebWdsPictoPrivateMentionIcon.react")
                              .WdsPictoPrivateMentionIcon,
                            { height: 90, width: 90 },
                          ),
                        }),
                        u.jsx(o("WAWebText.react").WAWebTextLarge, {
                          textAlign: "center",
                          xstyle: [p.marginTop8, p.marginBottom8],
                          children: l,
                        }),
                        u.jsx(o("WAWebFlex.react").FlexItem, {
                          xstyle: [p.usernameDescription, p.sidePadding],
                          children: M,
                        }),
                      ],
                    }),
                  }),
                  u.jsx(o("WAWebFlex.react").FlexColumn, {
                    align: "center",
                    xstyle: p.divider,
                  }),
                  u.jsx(f, {
                    contactId: t,
                    isReadOnly: k,
                    username: l,
                    usernameKey: v,
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
