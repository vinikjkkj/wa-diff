__d(
  "WAWebSuspendedCommunityMsgBar.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebButton.react",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebClickableLink.react",
    "WAWebCxtUrl",
    "WAWebDeactivateCommunityDrawerLoadable",
    "WAWebDeactivateIconIcon.react",
    "WAWebDrawerManager",
    "WAWebExitIcon.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebGroupGatingUtils",
    "WAWebKeyboardTabUtils",
    "WAWebLeaveCommunityModal.react",
    "WAWebModalManager",
    "WAWebSuspendedCommunityUtils",
    "WAWebSuspendedGroupUtils",
    "WDSButton.react",
    "WDSIconIcHelp.react",
    "react",
    "useWAWebUIM",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        deactivate: { color: "x30a034", $$css: !0 },
        suspendedMsgBar: { width: "xh8yej3", $$css: !0 },
      };
    function d(e) {
      var t,
        n = e.chat,
        a = r("useWAWebWindowSize")(),
        i = a.width,
        l = r("useWAWebUIM")(),
        d = (t = n.groupMetadata) == null ? void 0 : t.parentGroup;
      if (d != null) {
        var m = o("WAWebChatCollection").ChatCollection.get(d);
        if (m != null) {
          var p = function () {
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                  ? { descriptorType: "deactivate_community", chat: m }
                  : u.jsx(
                      o("WAWebDeactivateCommunityDrawerLoadable")
                        .DeactivateCommunityDrawerLoadable,
                      {
                        onBack: o("WAWebDrawerManager").closeDrawerRight,
                        chat: m,
                      },
                    ),
                {
                  transition: "slide-left",
                  uim: l,
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                },
              );
            },
            _ = function () {
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebLeaveCommunityModal.react"), { chat: m }),
                { transition: "modal-flow" },
              );
            },
            f = o(
              "WAWebGroupGatingUtils",
            ).isGroupSuspensionAppealsRedesignEnabled(),
            g = f
              ? u.jsx(r("WDSButton.react"), {
                  variant: "borderless",
                  type: "destructive",
                  onPress: p,
                  testid: void 0,
                  Icon: o("WAWebDeactivateIconIcon.react").DeactivateIconIcon,
                  label: s._(/*BTDS*/ "Deactivate community"),
                })
              : u.jsx(o("WAWebButton.react").WAWebButtonSimplified, {
                  onClick: p,
                  testid: void 0,
                  children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                    xstyle: c.deactivate,
                    justify: "center",
                    align: "center",
                    gap: 4,
                    children: [
                      u.jsx(
                        o("WAWebDeactivateIconIcon.react").DeactivateIconIcon,
                        { directional: !0 },
                      ),
                      s._(/*BTDS*/ "Deactivate community"),
                    ],
                  }),
                }),
            h = f
              ? u.jsx(r("WDSButton.react"), {
                  type: "destructive",
                  variant: "borderless",
                  onPress: _,
                  testid: void 0,
                  Icon: o("WAWebExitIcon.react").ExitIcon,
                  label: s._(/*BTDS*/ "Exit community"),
                })
              : u.jsxs(o("WAWebButton.react").WAWebButtonSimplified, {
                  onClick: _,
                  testid: void 0,
                  children: [
                    u.jsx(o("WAWebExitIcon.react").ExitIcon, {
                      directional: !0,
                    }),
                    s._(/*BTDS*/ "Exit community"),
                  ],
                }),
            y =
              i <= o("WAWebSuspendedGroupUtils").STACK_BUTTONS_WIDTH
                ? o("WAWebFlex.react").FlexColumn
                : o("WAWebFlex.react").FlexRow,
            C = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: o("WAWebCxtUrl").getCommunityNotAvailableFaqUrl(),
              testid: void 0,
              children: s._(/*BTDS*/ "Learn more"),
            }),
            b = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(m) ? g : h;
          return u.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.suspendedMsgBar,
            children: u.jsxs(y, {
              alignSelf: "stretch",
              align: "center",
              justify: "all",
              testid: void 0,
              children: [
                u.jsx(o("WAWebFlex.react").FlexColumn, {
                  children: u.jsx("span", {
                    className: "x126k92a",
                    "data-testid": void 0,
                    children: f
                      ? s._(
                          /*BTDS*/ "Community activity suspended. {link to see details}",
                          [
                            s._param(
                              "link to see details",
                              u.jsx(r("WAWebClickableLink.react"), {
                                onClick: function () {
                                  o(
                                    "WAWebSuspendedCommunityUtils",
                                  ).openSuspendedCommunityRedesignModal(n);
                                },
                                testid: void 0,
                                children: s._(/*BTDS*/ "See details"),
                              }),
                            ),
                          ],
                        )
                      : s._(
                          /*BTDS*/ "This community is no longer available. {link to learn more}",
                          [s._param("link to learn more", C)],
                        ),
                  }),
                }),
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  children: [
                    b,
                    f &&
                      o("WAWebChatCommunityUtils").isCommunitySuperAdmin(m) &&
                      u.jsx(r("WDSButton.react"), {
                        variant: "borderless",
                        onPress: function () {
                          o(
                            "WAWebSuspendedGroupUtils",
                          ).openGroupSuspensionAppealModal(m.id);
                        },
                        testid: void 0,
                        Icon: r("WDSIconIcHelp.react"),
                        label: s._(/*BTDS*/ "Request review"),
                      }),
                  ],
                }),
              ],
            }),
          });
        }
      }
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
