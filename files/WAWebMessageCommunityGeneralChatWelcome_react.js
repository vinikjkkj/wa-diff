__d(
  "WAWebMessageCommunityGeneralChatWelcome.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebCommunityGatingUtils",
    "WAWebFormatParticipantNames",
    "WAWebMessageCommunityCard.react",
    "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
    "WAWebModalManager",
    "WAWebOpenAddParticipantModalFlow",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useWAWebAddParticipantsSelectedContacts",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n,
        a,
        i = t.author,
        l = t.subgroupChat,
        u = t.templateParams,
        d = u[0],
        m = u[1],
        p = r("useWAWebAddParticipantsSelectedContacts")(),
        _ = p.handleClearSelectedContacts,
        f = p.selectedContactsMap,
        g = p.updateSelectedContactsState;
      if (((n = l.groupMetadata) == null ? void 0 : n.parentGroup) == null)
        return c.jsx(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(
              o("WAWebUISpacing").uiPadding.vert6,
              o("WAWebUISpacing").uiPadding.horiz12,
            ),
            {
              children: o(
                "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
              ).communityGeneralChatWelcomeTitle(l.formattedTitle),
            },
          ),
        );
      var h = l.groupMetadata.parentGroup,
        y = o("WAWebChatCollection").ChatCollection.get(h),
        C = y == null ? void 0 : y.formattedTitle,
        b = m != null ? m : l == null ? void 0 : l.formattedTitle,
        v = (a = y == null ? void 0 : y.iAmAdmin()) != null ? a : !1,
        S = function () {
          if (v) {
            if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
              o("WAWebModalManager").ModalManager.open(
                c.jsx(
                  o("WAWebReachoutTimelockRestrictedModalLoadable")
                    .ReachoutTimelockRestrictedModalLoadable,
                  {},
                ),
              );
              return;
            }
            o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
              groupMetadata: r("WANullthrows")(l.groupMetadata),
              chat: l,
              communityName: C,
              selectedContactsMap: f,
              updateSelectedContactsState: g,
              reopenAddGroupFlowCallback: S,
              handleClearSelectedContacts: _,
            });
          } else o("WAWebCmd").Cmd.openCommunityTabbedInfo(h);
        },
        R;
      switch (d) {
        case "created": {
          R =
            !o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() &&
            s._(
              /*BTDS*/ "Any new community members will automatically be added here",
            );
          break;
        }
        case "subtype-general_chat_add": {
          R =
            !o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() &&
            s._(
              /*BTDS*/ "You were added to this group when you joined the community",
            );
          break;
        }
        case "accept":
        case "":
        case null: {
          var L = o("WAWebFormatParticipantNames").getFormattedNames(i);
          L != null && L !== ""
            ? (R = s._(/*BTDS*/ "{admin_name} added you", [
                s._param("admin_name", L),
              ]))
            : (R = s._(/*BTDS*/ "You joined this group"));
          break;
        }
        case "invite":
        case "linked_group_join":
        default: {
          R = s._(/*BTDS*/ "You joined this group");
          break;
        }
      }
      var E = o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled()
          ? s._(
              /*BTDS*/ "All community members can join and use this chat to message each other.",
            )
          : s._(
              /*BTDS*/ "All community members can use this chat to talk with each other",
            ),
        k =
          o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled() && !R
            ? c.jsx(c.Fragment, { children: E })
            : c.jsx(o("WAWebMessageCommunityCard.react").BulletedList, {
                items: [
                  c.jsx(c.Fragment, { children: R }),
                  c.jsx(c.Fragment, { children: E }),
                ],
              }),
        I = v
          ? s._(/*BTDS*/ "Add members")
          : s._(/*BTDS*/ "Explore the community");
      return c.jsx(o("WAWebMessageCommunityCard.react").MessageCommunityCard, {
        communityId: h,
        subgroupId: l.id,
        title: o(
          "WAWebMessageCommunityGeneralChatWelcomeTitle.react",
        ).communityGeneralChatWelcomeTitle(b),
        body: k,
        footer: I,
        onFooterClick: S,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
