__d(
  "WAWebMessageCommunityEmptySubgroupWelcome.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAddUserIcon.react",
    "WAWebChatCollection",
    "WAWebCommunitySubgroupImage.react",
    "WAWebCommunitySubgroupInviteLinkRestriction",
    "WAWebDrawerManager",
    "WAWebEmojiText.react",
    "WAWebExistingGroupPermissionsDrawer.react",
    "WAWebFlex.react",
    "WAWebGroupInviteLinkDrawerLoadable",
    "WAWebModalManager",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebText.react",
    "WAWebUnstyledButton.react",
    "WDSIconIcLink.react",
    "react",
    "useWAWebAddParticipantsSelectedContacts",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        button: {
          display: "x78zum5",
          width: "xh8yej3",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        tealLighterColor: { color: "x1v5yvga", $$css: !0 },
        marginVert20: {
          marginTop: "x1nmyh1g",
          marginBottom: "xdqhqc9",
          $$css: !0,
        },
        marginEnd8: { marginInlineEnd: "xqf2s3x", $$css: !0 },
      };
    function d(e) {
      var t,
        n = e.subgroupChat,
        a = e.templateParams,
        i = a[0],
        l = a[1],
        d = a[2],
        m = a[3],
        p = a[4],
        _ = o("WAWebChatCollection").ChatCollection.get(i),
        f = (t = _ == null ? void 0 : _.formattedTitle) != null ? t : l,
        g = d != null ? d : n.formattedTitle,
        h = m === "true",
        y = p === "true",
        C = o(
          "WAWebCommunitySubgroupInviteLinkRestriction",
        ).isSubgroupInviteLinkRestrictedByParentCommunity(n.groupMetadata),
        b = _
          ? u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              children: u.jsx(r("WAWebCommunitySubgroupImage.react"), {
                chat: n,
                parentGroupChat: _,
                size: 49,
              }),
            })
          : null,
        v = r("useWAWebAddParticipantsSelectedContacts")(),
        S = v.handleClearSelectedContacts,
        R = v.selectedContactsMap,
        L = v.updateSelectedContactsState,
        E = function () {
          if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebReachoutTimelockRestrictedModalLoadable")
                  .ReachoutTimelockRestrictedModalLoadable,
                {},
              ),
            );
            return;
          }
          var e = function () {
            return E();
          };
          o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
            groupMetadata: r("WANullthrows")(n.groupMetadata),
            chat: n,
            communityName: f,
            selectedContactsMap: R,
            updateSelectedContactsState: L,
            reopenAddGroupFlowCallback: e,
            handleClearSelectedContacts: S,
          });
        },
        k = function () {
          o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            u.jsx(
              o("WAWebGroupInviteLinkDrawerLoadable")
                .GroupInviteLinkDrawerLoadable,
              {
                chat: n,
                groupMetadata: r("WANullthrows")(n.groupMetadata),
                onBack: o("WAWebDrawerManager").closeDrawerRight,
                onGroupSettings: function () {
                  return o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                    o(
                      "WAWebAdaptiveLayoutGatingUtils",
                    ).shouldUseDrawerDescriptor()
                      ? {
                          descriptorType: "existing_group_permissions",
                          chat: n,
                          groupMetadata: r("WANullthrows")(n.groupMetadata),
                        }
                      : u.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
                          chat: n,
                          groupMetadata: r("WANullthrows")(n.groupMetadata),
                          onClose: o("WAWebDrawerManager").closeDrawerRight,
                        }),
                  );
                },
              },
            ),
          );
        },
        I = s._(/*BTDS*/ "It was added to the community");
      return (
        f &&
          (y === !0
            ? (I = s._(
                /*BTDS*/ 'It was added to the community "{community_name}". Only people in the community who have been invited can see and join this group.',
                [s._param("community_name", f)],
              ))
            : (I =
                h === !0
                  ? s._(
                      /*BTDS*/ 'It was added to the community "{community_name}". Anyone in the community can request to join this group.',
                      [s._param("community_name", f)],
                    )
                  : s._(
                      /*BTDS*/ 'It was added to the community "{community_name}". Anyone in the community can join this group.',
                      [s._param("community_name", f)],
                    ))),
        u.jsxs(u.Fragment, {
          children: [
            u.jsxs("div", {
              className:
                "x1iw51ew xde1mab x1xrf6ya xscbp6u xso031l x1q0q8m5 x120ee7l",
              children: [
                b,
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  className: "x1380le5 x4tpdpg",
                  justify: "center",
                  children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
                    color: "primary",
                    weight: "medium",
                    children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: s._(
                        /*BTDS*/ "You created the group: {subgroup_name}",
                        [s._param("subgroup_name", g)],
                      ),
                    }),
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  justify: "center",
                  children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
                    children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: I,
                    }),
                  }),
                }),
              ],
            }),
            u.jsxs(r("WAWebUnstyledButton.react"), {
              onClick: E,
              xstyle: [c.button, c.marginVert20],
              children: [
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "end",
                  xstyle: c.marginEnd8,
                  children: u.jsx(o("WAWebAddUserIcon.react").AddUserIcon, {
                    iconXstyle: c.tealLighterColor,
                    height: 20,
                  }),
                }),
                u.jsx("span", {
                  className: "x1v5yvga xeuugli x1u7k74 x1f6kntn",
                  children: s._(/*BTDS*/ "Add members"),
                }),
              ],
            }),
            !C &&
              u.jsxs(r("WAWebUnstyledButton.react"), {
                onClick: k,
                xstyle: [c.button, c.marginVert20],
                children: [
                  u.jsx(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    justify: "end",
                    xstyle: c.marginEnd8,
                    children: u.jsx(r("WDSIconIcLink.react"), {
                      testid: void 0,
                      iconXstyle: c.tealLighterColor,
                      height: 20,
                    }),
                  }),
                  u.jsx("span", {
                    className: "x1v5yvga xeuugli x1u7k74 x1f6kntn",
                    children: s._(/*BTDS*/ "Invite to group via link"),
                  }),
                ],
              }),
          ],
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
