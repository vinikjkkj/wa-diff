__d(
  "WAWebVoipCallsTabDrawerFavorites.react",
  [
    "fbt",
    "WAWebAddToFavoritesModal.react",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebFavoriteCell.react",
    "WAWebFavoriteCollection",
    "WAWebFavoritesUtils",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPlusIcon.react",
    "WAWebRemoveFromFavoritesAction",
    "WAWebSingleSelection",
    "WAWebText.react",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WAWebWdsIllFavoritesIcon.react",
    "WAWebXIcon.react",
    "WDSButton.react",
    "WDSIconIcEdit.react",
    "WDSMenuBarItem.react",
    "react",
    "useWAWebDebouncedCallback",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useRef,
      p = c.useState,
      _ = {
        container: {
          overflowX: "xw2csxc",
          overflowY: "x1odjw0f",
          height: "x5yr21d",
          $$css: !0,
        },
        emptyStateContainer: {
          height: "xt7dq6l",
          paddingTop: "x15uerrv",
          paddingInlineEnd: "xx281p9",
          paddingBottom: "x1j3kn9t",
          paddingInlineStart: "x67w97k",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        favoritesOnboardingTitle: {
          fontSize: "xngnso2",
          fontWeight: "x117nqv4",
          lineHeight: "x1evy7pa",
          color: "x14ug900",
          marginTop: "x9u28bd",
          marginBottom: "xat24cr",
          $$css: !0,
        },
        favoritesOnboardingText: {
          color: "x14ug900",
          marginTop: "x1380le5",
          $$css: !0,
        },
        favoritesContainer: { width: "xh8yej3", $$css: !0 },
        favoriteItem: { width: "xh8yej3", $$css: !0 },
        editModeRow: { width: "xh8yej3", $$css: !0 },
        removeButtonMargin: {
          marginInlineStart: "x13fj5qh",
          marginInlineEnd: "xnqxrjt",
          $$css: !0,
        },
      };
    function f(e) {
      "use no forget";
      var t = e.onBack,
        n = e.ref,
        a = m(),
        i = p(!1),
        l = i[0],
        c = i[1],
        f = d(function () {
          return new (r("WAWebSingleSelection"))([], function () {
            return "";
          });
        }, []),
        g = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        h = r("useWAWebDebouncedCallback")(g, 300, { maxWait: 500 });
      (o("useWAWebListener").useListener(
        o("WAWebFavoriteCollection").FavoriteCollection,
        "add remove change",
        h,
      ),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "add remove",
          h,
        ));
      var y = l
          ? u.jsx(o("WAWebText.react").WAWebTextTitle, {
              weight: "semibold",
              children: s._(/*BTDS*/ "Edit favorites"),
            })
          : u.jsx(o("WAWebText.react").WAWebTextTitle, {
              weight: "semibold",
              children: s._(/*BTDS*/ "Favorites"),
            }),
        C = s._(/*BTDS*/ "Favorites drawer"),
        b = o("WAWebFavoritesUtils").getFavoriteItems(),
        v = function () {
          c(!l);
        },
        S = function (t) {
          t.chat != null
            ? o("WAWebCmd").Cmd.favoriteChat(
                t.chat,
                !1,
                o("WAWebWamEnumFavoritesUpdateEntryPoint")
                  .FAVORITES_UPDATE_ENTRY_POINT.CALLING_TAB_FAVORITE_EDIT,
              )
            : o("WAWebRemoveFromFavoritesAction")
                .removeFromFavoritesAction(t.wid, {
                  entryPoint: o("WAWebWamEnumFavoritesUpdateEntryPoint")
                    .FAVORITES_UPDATE_ENTRY_POINT.CALLING_TAB_FAVORITE_EDIT,
                })
                .catch(r("WAWebNoop"));
        },
        R = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebAddToFavoritesModal.react"), {
              onClose: o("WAWebModalManager").closeModalManager,
            }),
          );
        },
        L = [
          u.jsx(
            r("WDSMenuBarItem.react"),
            {
              icon: r("WDSIconIcEdit.react"),
              title: s._(/*BTDS*/ "Edit"),
              onClick: v,
            },
            "edit-favorites",
          ),
          u.jsx(
            r("WDSMenuBarItem.react"),
            {
              icon: o("WAWebPlusIcon.react").PlusIcon,
              title: s._(/*BTDS*/ "Add"),
              onClick: R,
            },
            "add-favorites",
          ),
        ],
        E =
          b.length > 0
            ? u.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: _.favoritesContainer,
                justify: "stretch",
                children: b.map(function (e) {
                  return u.jsx(
                    o("WAWebFlex.react").FlexItem,
                    {
                      grow: 1,
                      justify: "stretch",
                      xstyle: _.favoriteItem,
                      children: l
                        ? u.jsxs(o("WAWebFlex.react").FlexRow, {
                            align: "center",
                            xstyle: _.editModeRow,
                            justify: "stretch",
                            children: [
                              u.jsx(o("WAWebFlex.react").FlexItem, {
                                grow: 1,
                                children: u.jsx(r("WAWebFavoriteCell.react"), {
                                  active: f,
                                  favoriteItem: e,
                                  onClick: r("WAWebNoop"),
                                  disableHover: !0,
                                  isEditing: l,
                                }),
                              }),
                              u.jsx(r("WDSMenuBarItem.react"), {
                                icon: o("WAWebXIcon.react").XIcon,
                                onClick: function () {
                                  return S(e);
                                },
                                testid: void 0,
                                title: s._(/*BTDS*/ "Remove from Favorites"),
                                marginInlineXstyle: _.removeButtonMargin,
                              }),
                            ],
                          })
                        : u.jsx(r("WAWebFavoriteCell.react"), {
                            active: f,
                            favoriteItem: e,
                            onClick: r("WAWebNoop"),
                          }),
                    },
                    e.wid.toString(),
                  );
                }),
              })
            : u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                justify: "start",
                xstyle: _.emptyStateContainer,
                children: [
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    children: u.jsx(
                      o("WAWebWdsIllFavoritesIcon.react").WdsIllFavoritesIcon,
                      { width: 180 },
                    ),
                  }),
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: _.favoritesOnboardingTitle,
                    children: s._(/*BTDS*/ "Add to Favorites"),
                  }),
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    xstyle: _.favoritesOnboardingText,
                    children: s._(
                      /*BTDS*/ "Make it easy to find the people and groups that matter most across WhatsApp.",
                    ),
                  }),
                  u.jsx(o("WAWebFlex.react").FlexItem, {
                    children: u.jsx(r("WDSButton.react"), {
                      size: "medium",
                      variant: "outline",
                      onPress: R,
                      testid: void 0,
                      label: s._(/*BTDS*/ "Add to Favorites"),
                    }),
                  }),
                ],
              });
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: a,
        "aria-label": C,
        "data-testid": void 0,
        children: u.jsxs(r("WAWebDrawer.react"), {
          ref: n,
          theme: "striped",
          testid: void 0,
          tsNavigationData: { surface: "status" },
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: y,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onBack: l
                ? function () {
                    return c(!1);
                  }
                : t,
              menu: l ? void 0 : L,
            }),
            u.jsx(r("WAWebDrawerBody.react"), {
              children: u.jsx(r("WAWebDrawerSection.react"), {
                theme: "full-height",
                animation: !1,
                xstyle: _.container,
                children: E,
              }),
            }),
          ],
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
