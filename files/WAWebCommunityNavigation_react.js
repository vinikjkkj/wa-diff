__d(
  "WAWebCommunityNavigation.react",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebCalendarMonthIcon.react",
    "WAWebCellFrame.react",
    "WAWebChat.react",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebCmd",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebCommunityCells.react",
    "WAWebCommunityGatingUtils",
    "WAWebCommunityHomeJoinedSubgroups.react",
    "WAWebCommunityHomeUnjoinedSubgroups.react",
    "WAWebCommunitySpeakerIcon.react",
    "WAWebCommunitySubgroupsMaxReached",
    "WAWebCurrentUser",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebDropdown.react",
    "WAWebDropdownItem.react",
    "WAWebEmojiText.react",
    "WAWebEmptyState.react",
    "WAWebEventUtils",
    "WAWebExitIcon.react",
    "WAWebFlex.react",
    "WAWebInfoRefreshedIcon.react",
    "WAWebLeaveCommunityModal.react",
    "WAWebMenuBar.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebQueryAndUpdateSubgroupSuggestionsJob",
    "WAWebRestoreSubgroupSuggestionsAction",
    "WAWebSettingsRefreshedIcon.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUnjoinedSubgroupMetadataModel",
    "WAWebViewCommunityMembersModal.react",
    "WDSIconIcGroup.react",
    "WDSIconIcMoreVert.react",
    "react",
    "useWAWebAllEvents",
    "useWAWebCommunitySubgroups",
    "useWAWebEventTargetValue",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c.useEffect,
      p = { surface: "community-navigation" },
      _ = {
        description: { textAlign: "x2b8uid", $$css: !0 },
        eventIconColor: { color: "xhslqc4", $$css: !0 },
      },
      f = 5e3;
    function g(e) {
      var t = e.chat,
        n = e.isAdmin,
        a = e.isSuperAdmin,
        i = e.onCommunitySettingsClick,
        l = e.onInviteMembersClick,
        u = e.onTransferOwnership,
        c = r("useWAWebEventTargetValue")(
          t == null ? void 0 : t.groupMetadata,
          ["change:suspended"],
          function () {
            return o("WAWebChatCommunityUtils").isSuspendedCommunity(t);
          },
        ),
        m = function () {
          t && o("WAWebCmd").Cmd.openCommunityTabbedInfo(t.id);
        },
        p = function () {
          t &&
            o("WAWebModalManager").ModalManager.open(
              d.jsx(
                o("WAWebViewCommunityMembersModal.react")
                  .ViewCommunityMembersModal,
                { parentChat: t, onInviteMembersClick: l },
              ),
            );
        },
        _ = s._(/*BTDS*/ "Community info"),
        f = [
          d.jsx(
            o("WAWebDropdownItem.react").DropdownItem,
            {
              testid: void 0,
              action: m,
              ariaLabel: _,
              icon: d.jsx(
                o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon,
                {},
              ),
              children: _,
            },
            "communityInfo",
          ),
        ];
      if (!c) {
        var g = s._(/*BTDS*/ "View members");
        if (
          (f.push(
            d.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: p,
                ariaLabel: g,
                icon: d.jsx(r("WDSIconIcGroup.react"), {}),
                children: g,
              },
              "viewMembers",
            ),
          ),
          n)
        ) {
          var h = s._(/*BTDS*/ "Community settings");
          f.push(
            d.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: i,
                ariaLabel: h,
                icon: d.jsx(
                  o("WAWebSettingsRefreshedIcon.react").SettingsRefreshedIcon,
                  {},
                ),
                children: h,
              },
              "communitySettings",
            ),
          );
        }
        !a &&
          t != null &&
          f.push(
            d.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: function () {
                  o("WAWebModalManager").ModalManager.open(
                    d.jsx(r("WAWebLeaveCommunityModal.react"), {
                      chat: t,
                      onTransferOwnership: u,
                    }),
                    { transition: "modal-flow" },
                  );
                },
                icon: d.jsx(o("WAWebExitIcon.react").ExitIcon, {
                  directional: !0,
                }),
                children: s._(/*BTDS*/ "Exit community"),
              },
              "exitCommunity",
            ),
          );
      }
      return f;
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, u),
        i = a.callbacks,
        l = a.chat,
        c = a.highlightedSubgroups,
        h = a.isAdmin,
        y = a.isSuperAdmin,
        C = a.onBack,
        b = r("useWAWebCommunitySubgroups")(
          l == null ? void 0 : l.groupMetadata,
        ),
        v = b.subgroupCount;
      m(
        function () {
          var e,
            t =
              l == null || (e = l.groupMetadata) == null
                ? void 0
                : e.joinedSubgroups;
          if (l && t != null && t.length) {
            var n = t[0];
            (o(
              "WAWebRestoreSubgroupSuggestionsAction",
            ).restoreSubgroupSuggestionsFromDb(l),
              o(
                "WAWebQueryAndUpdateSubgroupSuggestionsJob",
              ).queryAndUpdateSubgroupSuggestions(l.id, n));
          }
        },
        [l],
      );
      var S = function () {
          if (l) {
            if (
              h ||
              o(
                "WAWebCommunityGatingUtils",
              ).memberSuggestedGroupsM3SenderEnabled()
            )
              return i.onManageCommunityGroupsClick();
            o("WAWebCommunitySubgroupsMaxReached").subgroupsMaxReached(
              l.groupMetadata,
            ) || i.onAddNewGroupClick();
          }
        },
        R = o("useWAWebAllEvents").useAllEvents(l),
        L = !!R.find(function (e) {
          return !(
            o("WAWebEventUtils").shouldShowEventAsPassed(
              e.msg.eventStartTime,
              e.msg.eventEndTime,
            ) ||
            o("WAWebMsgGetters").getIsEventCanceled(e.msg) ||
            o("WAWebMsgGetters").getEventInvalidated(e.msg)
          );
        }),
        E;
      L &&
        (E = d.jsx(r("WAWebCellFrame.react"), {
          theme: "subgroup",
          primary: s._(/*BTDS*/ "Upcoming events"),
          image: d.jsx("div", {
            className: "x100vrsf x78zum5 xl56j7k x6s0dn4",
            children: d.jsx(
              o("WAWebCalendarMonthIcon.react").CalendarMonthIcon,
              { height: 25, xstyle: _.eventIconColor },
            ),
          }),
          onClick: function () {
            return i.onAllEventsClick(r("WANullthrows")(l));
          },
        }));
      var k,
        I = o(
          "WAWebCommunityAnnouncementGroupUtils",
        ).getCommunityAnnouncementGroup(l == null ? void 0 : l.groupMetadata);
      if (I != null) {
        var T = c.some(function (e) {
          return I.id.equals(e);
        })
          ? "subgroup-new"
          : "subgroup";
        if (I instanceof r("WAWebUnjoinedSubgroupMetadataModel"))
          k = d.jsx(r("WAWebCellFrame.react"), {
            theme: T,
            primary: d.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: s._(/*BTDS*/ "Announcements").toString(),
              ellipsify: !0,
            }),
            secondary: s._(/*BTDS*/ "Announcement group"),
            image: d.jsx(r("WAWebCommunitySpeakerIcon.react"), { size: 40 }),
            onClick: function () {
              return o(
                "WAWebCommunityHomeUnjoinedSubgroups.react",
              ).handleOpenSubgroupModal(I, "community_nav");
            },
            secondaryDetail: o("WAWebCommunityHomeUnjoinedSubgroups.react")
              .pinnedIcon,
            focusable: !0,
          });
        else {
          var D = o("WAWebChatCollection").ChatCollection.assertGet(
            I == null ? void 0 : I.id,
          );
          k = d.jsx(
            o("WAWebChat.react").Chat,
            {
              chat: D,
              theme: "subgroup",
              mode: o("WAWebChat.react").Mode.LAST,
              onClick: function (t) {
                (t.preventDefault(),
                  o(
                    "WAWebCommunityHomeJoinedSubgroups.react",
                  ).handleJoinedSubgroupClick(D, "navigation"));
              },
              overrideCommunityAnnouncementGroupName: !0,
              noContext: !0,
              hidePin: !0,
              fakePin: !0,
              hideArchivedIcon: !0,
              showSpeakerForCag: !0,
            },
            D.id.toString(),
          );
        }
      }
      var x = l
          ? d.jsx(
              o("WAWebCommunityHomeJoinedSubgroups.react")
                .CommunityHomeJoinedSubgroups,
              {
                chat: l,
                onPendingGroupsClick: i.onPendingGroupsClick,
                onAddNewGroupClick: S,
                mini: !0,
                type: "navigation",
              },
            )
          : null,
        $ = l
          ? d.jsx(
              o("WAWebCommunityHomeUnjoinedSubgroups.react")
                .CommunityHomeUnjoinedSubgroups,
              {
                chat: l,
                onAddNewGroupClick: S,
                highlightedSubgroups: c,
                mini: !0,
                type: "community_nav",
              },
            )
          : null,
        P = null;
      if (v === 1) {
        var N = s._(
          /*BTDS*/ "Groups added to the community will appear here. Community members can join these groups.",
        );
        P = d.jsx(r("WAWebDrawerSection.react"), {
          xstyle: [
            _.description,
            o("WAWebUISpacing").uiMargin.vert36,
            o("WAWebUISpacing").uiMargin.horiz30,
          ],
          children: d.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            align: "center",
            children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: N,
            }),
          }),
        });
      }
      var M = d.jsx(o("WAWebMenuBar.react").MenuBarItem, {
        icon: d.jsx(r("WDSIconIcMoreVert.react"), {}),
        title: s._(/*BTDS*/ "Navigation menu"),
        testid: void 0,
        dropdownMenu: {
          menu: d.jsx(g, {
            chat: l,
            isAdmin: h,
            isSuperAdmin: y,
            onInviteMembersClick: i.onInviteMembersClick,
            onCommunitySettingsClick: i.onCommunitySettingsClick,
            onDeactivateCommunity: i.onDeactivateCommunity,
            onTransferOwnership: i.onTransferOwnership,
          }),
          type: o("WAWebDropdown.react").MenuType.Dropdown,
          flipOnRTL: !0,
          dirX: o("WAWebDropdown.react").DirX.RIGHT,
          testid: "community-navigation-menu-dropdown",
        },
      });
      return (
        o("useWAWebTimeout").useTimeout(
          function () {
            if (l == null || l.groupMetadata == null) {
              var t =
                o("WAWebCurrentUser").isEmployee() && l != null
                  ? " chatId: " + l.id.toString()
                  : "";
              o("WALogger")
                .LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose(["", "", ""])),
                  l == null ? "chat is null" : "groupMetadata is null",
                  t,
                )
                .sendLogs("community-navigation-infinite-loading")
                .tags("community");
            }
          },
          f,
          { immediate: !0 },
        ),
        d.jsxs(r("WAWebDrawer.react"), {
          ref: n,
          testid: void 0,
          theme: "invite",
          tsNavigationData: p,
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: d.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: l == null ? void 0 : l.formattedTitle,
              }),
              titleStr: l == null ? void 0 : l.formattedTitle,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onBack: C,
              children: M,
              focusBackOrCancel: !0,
            }),
            d.jsx(r("WAWebDrawerBody.react"), {
              children:
                l == null || l.groupMetadata == null
                  ? d.jsx(o("WAWebEmptyState.react").Loading, {})
                  : d.jsxs(r("WAWebDrawerSection.react"), {
                      children: [
                        d.jsxs(r("WAWebDrawerSection.react"), {
                          xstyle: [
                            o("WAWebUISpacing").uiMargin.bottom0,
                            o("WAWebUISpacing").uiPadding.horiz20,
                          ],
                          children: [
                            E,
                            d.jsx(
                              o("WAWebCommunityCells.react")
                                .SubgroupSuggestionsRow,
                              { chat: l, onClick: i.onPendingGroupsClick },
                            ),
                            k,
                          ],
                        }),
                        x,
                        $,
                        P,
                      ],
                    }),
            }),
          ],
        })
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
