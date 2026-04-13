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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(20),
        n = e.contactId,
        a = e.isReadOnly,
        i = e.username,
        l = e.usernameKey,
        c;
      t[0] !== n || t[1] !== i
        ? ((c = function () {
            (o(
              "WAWebUsernameCreationActionLogger",
            ).UsernameCreationActionLogger.logBackClicked(
              o("WAWebWamEnumUsernameCreationCurrentScreen")
                .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_MANAGE,
              o("WAWebWamEnumUsernameCreationFlowType")
                .USERNAME_CREATION_FLOW_TYPE.MANAGEMENT,
            ),
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                u.jsx(h, { contactId: n, username: i }),
              ));
          }),
          (t[0] = n),
          (t[1] = i),
          (t[2] = c))
        : (c = t[2]);
      var d = c,
        m;
      t[3] !== n || t[4] !== d || t[5] !== i || t[6] !== l
        ? ((m = function () {
            l != null
              ? o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                  u.jsx(r("WAWebCreateUsernameKeyDrawer.react"), {
                    contactId: n,
                    handleBack: d,
                  }),
                )
              : o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                  u.jsx(r("WAWebUsernameKeyInfoDrawer.react"), {
                    contactId: n,
                    username: i,
                  }),
                );
          }),
          (t[3] = n),
          (t[4] = d),
          (t[5] = i),
          (t[6] = l),
          (t[7] = m))
        : (m = t[7]);
      var _ = m,
        f;
      t[8] !== l
        ? ((f =
            l != null
              ? s._(/*BTDS*/ "{key}", [s._param("key", l)])
              : s._(/*BTDS*/ "Off")),
          (t[8] = l),
          (t[9] = f))
        : (f = t[9]);
      var g = f,
        y;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = u.jsx(o("WAWebFlex.react").FlexItem, {
            align: "center",
            xstyle: p.drawerIcon,
            children: u.jsx(r("WDSIconIcKey.react"), {
              directional: !0,
              iconXstyle: p.secondaryColor,
              height: 21,
            }),
          })),
          (t[10] = y))
        : (y = t[10]);
      var C;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(r("WDSText.react"), {
            colorName: "contentDefault",
            type: "Body2",
            children: s._(/*BTDS*/ "Key"),
          })),
          (t[11] = C))
        : (C = t[11]);
      var b;
      t[12] !== g
        ? ((b = u.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: p.drawerTitleContainer,
            children: [
              C,
              u.jsx(r("WDSText.react"), {
                colorName: "contentDeemphasized",
                type: "Body2",
                children: g,
              }),
            ],
          })),
          (t[12] = g),
          (t[13] = b))
        : (b = t[13]);
      var v;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(r("WDSText.react"), {
              colorName: "contentDeemphasized",
              type: "Body3",
              children: s._(
                /*BTDS*/ "Share your username and key when telling someone how to contact you.",
              ),
            }),
          })),
          (t[14] = v))
        : (v = t[14]);
      var S;
      t[15] !== b
        ? ((S = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: p.sidePadding,
            children: [
              y,
              u.jsxs(o("WAWebFlex.react").FlexColumn, {
                grow: 1,
                children: [b, v],
              }),
            ],
          })),
          (t[15] = b),
          (t[16] = S))
        : (S = t[16]);
      var R = S;
      if (a) return R;
      var L;
      return (
        t[17] !== R || t[18] !== _
          ? ((L = u.jsx(o("WAWebClickable.react").Clickable, {
              onClick: _,
              role: "button",
              children: R,
            })),
            (t[17] = R),
            (t[18] = _),
            (t[19] = L))
          : (L = t[19]),
        L
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.contactId,
        a = e.isReadOnly,
        i = e.username,
        l = e.usernameKey,
        s;
      return (
        t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l
          ? ((s = u.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              xstyle: p.sidePadding,
              children: u.jsx(_, {
                contactId: n,
                isReadOnly: a,
                username: i,
                usernameKey: l,
              }),
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l),
            (t[4] = s))
          : (s = t[4]),
        s
      );
    }
    function g() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [p.tipContainer, p.sidePadding]), (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: p.tipIcon,
            children: u.jsx(r("WDSIconIcLightbulb.react"), {
              height: 32,
              width: 32,
            }),
          })),
          (e[1] = n))
        : (n = e[1]);
      var a;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: t,
              children: [
                n,
                u.jsx(r("WDSText.react"), {
                  colorName: "contentDefault",
                  type: "Body2Emphasized",
                  children: s._(
                    /*BTDS*/ "You can edit your username and key on your primary phone.",
                  ),
                }),
              ],
            })),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(40),
        n = e.contactId,
        a = e.onBack,
        i = e.ref,
        l = e.username,
        c = m(null),
        _ = c[0],
        h = c[1],
        C;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var b = o("WAWebUserPrefsMeUser").getMeUser();
        ((C = o("WAWebContactCollection").ContactCollection.assertGet(b)),
          (t[0] = C));
      } else C = t[0];
      var v = C,
        S;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = [o("WAWebFrontendContactGetters").getUsernameKey]), (t[1] = S))
        : (S = t[1]);
      var R = o("useWAWebContactValues").useContactValues(v.id, S),
        L = R[0],
        E = r("useWAWebIsKeyboardUser")(),
        k = E.isKeyboardUser,
        I = d(null),
        T;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = o("WAWebUserPrefsUsername").getUsernameState()), (t[2] = T))
        : (T = t[2]);
      var D = T,
        x;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((x =
            D === "RESERVED" ||
            (D === "ACTIVE" &&
              o(
                "WAWebUsernameWorkerCompatibleGatingUtils",
              ).usernameAccountLinkingEnabled())),
          (t[3] = x))
        : (x = t[3]);
      var $ = x,
        P;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Username")), (t[4] = P))
        : (P = t[4]);
      var N = P,
        M = y,
        w;
      t[5] !== n || t[6] !== k || t[7] !== l
        ? ((w = function () {
            h({
              DirX: o("WAWebDropdown.react").DirX.CENTER,
              DirY: o("WAWebDropdown.react").DirY.BOTTOM,
              menu: u.jsx(r("WAWebUsernameEditDropdown.react"), {
                contactId: n,
                onBack: M,
                username: l,
              }),
              anchor: I.current,
              autoFocus: k,
            });
          }),
          (t[5] = n),
          (t[6] = k),
          (t[7] = l),
          (t[8] = w))
        : (w = t[8]);
      var A = w,
        F;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = function () {
            h(null);
          }),
          (t[9] = F))
        : (F = t[9]);
      var O = F,
        B;
      t[10] !== A || t[11] !== _
        ? ((B =
            $ !== !0 &&
            u.jsxs(u.Fragment, {
              children: [
                u.jsx(o("WAWebText.react").WAWebClickableText, {
                  color: "green",
                  onClick: A,
                  ref: I,
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
                          requestDismiss: O,
                          children: u.jsx(r("WAWebUimUieMenu.react"), {
                            contextMenu: _,
                          }),
                        }),
                }),
              ],
            })),
          (t[10] = A),
          (t[11] = _),
          (t[12] = B))
        : (B = t[12]);
      var W = B,
        q;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = s._(/*BTDS*/ "More about usernames")), (t[13] = q))
        : (q = t[13]);
      var U = q,
        V;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getFaqUrl(),
            children: U,
          })),
          (t[14] = V))
        : (V = t[14]);
      var H = V,
        G;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = u.jsx(o("WAWebFlex.react").FlexColumn, {
            children: u.jsxs(r("WDSText.react"), {
              colorName: "contentDeemphasized",
              textAlign: "center",
              type: "Body2",
              children: [
                D === "RESERVED"
                  ? s._(
                      /*BTDS*/ "Usernames are coming soon. We'll let you know when yours is ready to use.",
                    )
                  : s._(
                      /*BTDS*/ "People who don't have your number saved will see your username.",
                    ),
                " ",
                H,
              ],
            }),
          })),
          (t[15] = G))
        : (G = t[15]);
      var z = G,
        j;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = { surface: "unknown", viewName: "username-management" }),
          (t[16] = j))
        : (j = t[16]);
      var K = a != null ? a : M,
        Q;
      t[17] !== W || t[18] !== K
        ? ((Q = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            children: W,
            onBack: K,
            title: N,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (t[17] = W),
          (t[18] = K),
          (t[19] = Q))
        : (Q = t[19]);
      var X;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = $ === !0 && u.jsx(g, {})), (t[20] = X))
        : (X = t[20]);
      var Y;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: p.badge,
            children: u.jsx(
              o("WAWebWdsPictoPrivateMentionIcon.react")
                .WdsPictoPrivateMentionIcon,
              { height: 90, width: 90 },
            ),
          })),
          (t[21] = Y))
        : (Y = t[21]);
      var J;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = [p.marginTop8, p.marginBottom8]), (t[22] = J))
        : (J = t[22]);
      var Z;
      t[23] !== l
        ? ((Z = u.jsx(o("WAWebText.react").WAWebTextLarge, {
            textAlign: "center",
            xstyle: J,
            children: l,
          })),
          (t[23] = l),
          (t[24] = Z))
        : (Z = t[24]);
      var ee;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: [p.usernameDescription, p.sidePadding],
            children: z,
          })),
          (t[25] = ee))
        : (ee = t[25]);
      var te;
      t[26] !== Z
        ? ((te = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              children: [Y, Z, ee],
            }),
          })),
          (t[26] = Z),
          (t[27] = te))
        : (te = t[27]);
      var ne;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            xstyle: p.divider,
          })),
          (t[28] = ne))
        : (ne = t[28]);
      var re;
      t[29] !== n || t[30] !== l || t[31] !== L
        ? ((re = u.jsx(f, {
            contactId: n,
            isReadOnly: $,
            username: l,
            usernameKey: L,
          })),
          (t[29] = n),
          (t[30] = l),
          (t[31] = L),
          (t[32] = re))
        : (re = t[32]);
      var oe;
      t[33] !== te || t[34] !== re
        ? ((oe = u.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              X,
              u.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "full-height",
                children: [te, ne, re],
              }),
            ],
          })),
          (t[33] = te),
          (t[34] = re),
          (t[35] = oe))
        : (oe = t[35]);
      var ae;
      return (
        t[36] !== i || t[37] !== Q || t[38] !== oe
          ? ((ae = u.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              testid: void 0,
              tsNavigationData: j,
              children: [Q, oe],
            })),
            (t[36] = i),
            (t[37] = Q),
            (t[38] = oe),
            (t[39] = ae))
          : (ae = t[39]),
        ae
      );
    }
    function y() {
      o(
        "WAWebUsernameCreationActionLogger",
      ).UsernameCreationActionLogger.logBackClicked(
        o("WAWebWamEnumUsernameCreationCurrentScreen")
          .USERNAME_CREATION_CURRENT_SCREEN.USERNAME_MANAGE,
        o("WAWebWamEnumUsernameCreationFlowType").USERNAME_CREATION_FLOW_TYPE
          .MANAGEMENT,
      );
      var e = o("WAWebUserPrefsMeUser").getMeUser(),
        t = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(e),
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
    }
    l.default = h;
  },
  226,
);
