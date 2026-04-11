__d(
  "WAWebCommunityTabbedInfoDrawer.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebChatCollection",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebCommunityAnnouncementsSection.react",
    "WAWebCommunityHomeTopCard.react",
    "WAWebCommunityHomeUnjoinedSubgroups.react",
    "WAWebCommunityInfoSection.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebEmptyState.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebGroupMetadataModel",
    "WAWebModalManager",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebStateUtils",
    "WAWebTabs.react",
    "WAWebUISpacing",
    "WAWebUnjoinedSubgroupMetadataModel",
    "cr:1066",
    "react",
    "stylex",
    "useWAWebAddParticipantsSelectedContacts",
    "useWAWebCommunityMembers",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useMemo,
      f = m.useState,
      g = !1,
      h = n("$InternalEnum").Mirrored(["Community", "Announcements"]),
      y = {
        tabBackground: { backgroundColor: "x1280gxy", $$css: !0 },
        tab: { fontWeight: "xk50ysn", textTransform: "x1gdvv3m", $$css: !0 },
        drawer: { backgroundColor: "x1280gxy", $$css: !0 },
      };
    function C(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.parentChat,
        c = i.isAdmin,
        m = i.showFullDescription,
        C = i.initialTab,
        b = C === void 0 ? h.Community : C,
        v = i.scrollToMemberList,
        S = v === void 0 ? !1 : v,
        R = i.callbacks,
        L = f(b),
        E = L[0],
        k = L[1],
        I = f(S),
        T = I[0],
        D = I[1],
        x = r("useWAWebAddParticipantsSelectedContacts")(),
        $ = x.handleClearSelectedContacts,
        P = x.selectedContactsMap,
        N = x.updateSelectedContactsState,
        M = _(
          function () {
            return o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroup(
              l == null ? void 0 : l.groupMetadata,
            );
          },
          [l == null ? void 0 : l.groupMetadata],
        ),
        w =
          M != null && M.id
            ? o("WAWebChatCollection").ChatCollection.get(M.id)
            : null,
        A = o("useWAWebCommunityMembers").useCommunityMembers(l, M),
        F = p(function (e) {
          var t = h.cast(e);
          if (t != null) {
            var n = function () {
              (D(!1), k(t), R.onTabSwitch(t));
            };
            if (
              t === h.Announcements &&
              M instanceof r("WAWebUnjoinedSubgroupMetadataModel")
            ) {
              o(
                "WAWebCommunityHomeUnjoinedSubgroups.react",
              ).handleOpenSubgroupModal(M, "community_home", n);
              return;
            }
            n();
          }
        }, []),
        O = _(
          function () {
            var e = [
              { id: h.Community, title: s._(/*BTDS*/ "Community") },
              { id: h.Announcements, title: s._(/*BTDS*/ "Announcements") },
            ];
            return d.jsx(r("WAWebDrawerSection.react"), {
              xstyle: o("WAWebUISpacing").uiMargin.bottom0,
              children: d.jsx(r("WAWebTabs.react"), {
                tabConfigs: e,
                selectedId: E,
                onSelect: F,
                xstyle: y.tabBackground,
                tabXstyle: y.tab,
                activateTabOnKeyboardNavigation: !0,
              }),
            });
          },
          [E, F],
        ),
        B = function () {
          if (!(M == null || w == null)) {
            if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
              o("WAWebModalManager").ModalManager.open(
                d.jsx(
                  o("WAWebReachoutTimelockRestrictedModalLoadable")
                    .ReachoutTimelockRestrictedModalLoadable,
                  {},
                ),
              );
              return;
            }
            o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
              groupMetadata: M,
              chat: w,
              communityName: l == null ? void 0 : l.formattedTitle,
              selectedContactsMap: P,
              updateSelectedContactsState: N,
              reopenAddGroupFlowCallback: B,
              handleClearSelectedContacts: $,
            });
          }
        },
        W = l
          ? d.jsx(r("WAWebCommunityHomeTopCard.react"), {
              chat: l,
              isAdmin: c,
              onInviteMembersClick: R.onInviteMembersClick,
              onManageCommunityGroupsClick: R.onManageCommunityGroupsClick,
              onAddMembersClick: B,
            })
          : null,
        q = l
          ? d.jsx(
              r("WAWebCommunityInfoSection.react"),
              babelHelpers.extends(
                {
                  parentChat: l,
                  isAdmin: c,
                  showFullDescription: m,
                  callbacks: R,
                  onAddMembersClick: B,
                  scrollToMemberList: T && E === h.Community,
                },
                A,
              ),
            )
          : null,
        U = w
          ? d.jsx(r("WAWebCommunityAnnouncementsSection.react"), {
              chat: w,
              callbacks: R,
            })
          : null,
        V = E === h.Community ? q : U,
        H = l == null ? void 0 : l.groupMetadata;
      return d.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        xstyle: y.drawer,
        testid: void 0,
        theme: "invite",
        tsNavigationData: { surface: "community-info" },
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Community info"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onCancel: o("WAWebDrawerManager").closeDrawerRight,
            focusBackOrCancel: !0,
          }),
          d.jsx(r("WAWebDrawerBody.react"), {
            children:
              l == null || H == null
                ? d.jsx(o("WAWebEmptyState.react").Loading, {})
                : d.jsxs(
                    "section",
                    babelHelpers.extends(
                      { "data-testid": void 0 },
                      (u || (u = r("stylex"))).props(
                        o("WAWebUISpacing").uiPadding.bottom32,
                      ),
                      {
                        children: [
                          W,
                          d.jsx(r("WAWebGroupInfoSeparator.react"), {}),
                          O,
                          V,
                          g && n("cr:1066")
                            ? d.jsxs(d.Fragment, {
                                children: [
                                  d.jsx(r("WAWebGroupInfoSeparator.react"), {}),
                                  M instanceof r("WAWebGroupMetadataModel")
                                    ? d.jsx(n("cr:1066"), {
                                        groupMetadata:
                                          o("WAWebStateUtils").unproxy(M),
                                      })
                                    : d.jsx(n("cr:1066"), {
                                        groupMetadata:
                                          o("WAWebStateUtils").unproxy(H),
                                        isCommunity: !0,
                                      }),
                                ],
                              })
                            : null,
                        ],
                      },
                    ),
                  ),
          }),
        ],
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.CommunityInfoTabs = h),
      (l.CommunityTabbedInfoDrawer = C));
  },
  226,
);
