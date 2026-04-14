__d(
  "WAWebCommunitySubgroupSwitcher.react",
  [
    "fbt",
    "WAWebChat.react",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebChatComparatorCommunity",
    "WAWebChevronIcon.react",
    "WAWebCmd",
    "WAWebCommunityFeatureUsageWamEvent",
    "WAWebCommunityGatingUtils",
    "WAWebCommunitySubgroupsMaxReached",
    "WAWebComposeBoxActions",
    "WAWebDrawerButton.react",
    "WAWebEmojiText.react",
    "WAWebGroupType",
    "WAWebGroupsModal.react",
    "WAWebModalManager",
    "WAWebRoundShape.react",
    "WAWebText_DONOTUSE.react",
    "WAWebWamEnumCommunityFeatureUiActionTakenType",
    "WAWebWamEnumCommunityUiFeatureType",
    "WDSIconIcGroupAddFilled.react",
    "react",
    "stylex",
    "useWAWebEventTargetValue",
    "useWAWebHandleNewGroupCreated",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = { surface: "community-subgroup-switcher" },
      m = {
        row: { minHeight: "x1qafhyn", $$css: !0 },
        rowRefreshed: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x2vl965",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "xe2zdcy",
          $$css: !0,
        },
        verticalCenter: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
      };
    function p(t) {
      var n,
        a,
        i,
        l = t.chat,
        u = t.parentChat,
        p =
          u != null
            ? u
            : l == null || (n = l.groupMetadata) == null
              ? void 0
              : n.getParentGroupChat(),
        _ = p == null ? void 0 : p.groupMetadata,
        f =
          (a =
            (i = o("useWAWebModelValues").useOptionalModelValues(_, [
              "joinedSubgroups",
            ])) == null
              ? void 0
              : i.joinedSubgroups) != null
            ? a
            : [],
        g = f
          .map(function (e) {
            return o("WAWebChatCollection").ChatCollection.assertGet(e);
          })
          .sort(r("WAWebChatComparatorCommunity")),
        h = r("useWAWebEventTargetValue")(
          p == null ? void 0 : p.groupMetadata,
          ["change:allowNonAdminSubGroupCreation"],
          function () {
            return o("WAWebChatCommunityUtils").canAddGroupToCommunity(p);
          },
        ),
        y = function (t) {
          (new (o(
            "WAWebCommunityFeatureUsageWamEvent",
          ).CommunityFeatureUsageWamEvent)({
            communityId: p == null ? void 0 : p.id.user,
            communityUiAction: o(
              "WAWebWamEnumCommunityFeatureUiActionTakenType",
            ).COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.GROUP_NAV,
            communityUiFeature: o("WAWebWamEnumCommunityUiFeatureType")
              .COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH,
          }).commit(),
            o("WAWebCmd")
              .Cmd.openChatFromUnread({ chat: t })
              .then(function (e) {
                e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
              }),
            o("WAWebModalManager").ModalManager.close());
        },
        C = function () {
          p != null &&
            p.id &&
            (new (o(
              "WAWebCommunityFeatureUsageWamEvent",
            ).CommunityFeatureUsageWamEvent)({
              communityId: p == null ? void 0 : p.id.user,
              communityUiAction: o(
                "WAWebWamEnumCommunityFeatureUiActionTakenType",
              ).COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.COMMUNITY_NAV,
              communityUiFeature: o("WAWebWamEnumCommunityUiFeatureType")
                .COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH,
            }).commit(),
            o("WAWebCmd").Cmd.openCommunityHome(p.id),
            o("WAWebModalManager").ModalManager.close());
        },
        b = s._(/*BTDS*/ "View community"),
        v = (e || (e = r("stylex")))([m.row, m.rowRefreshed]),
        S = c.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
          testid: void 0,
          className: v,
          ariaLabel: b,
          icon: c.jsx("div", {
            className: "x78zum5 x6s0dn4 xl56j7k xhslqc4 x15jighw x112a4uq",
            children: c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
              directional: !0,
            }),
          }),
          onClick: C,
          children: c.jsx(o("WAWebText_DONOTUSE.react").Text, {
            as: "span",
            color: "accent",
            size: "16",
            children: b,
          }),
        }),
        R = r("useWAWebHandleNewGroupCreated")(),
        L = function () {
          if (
            p != null &&
            p.id &&
            (new (o(
              "WAWebCommunityFeatureUsageWamEvent",
            ).CommunityFeatureUsageWamEvent)({
              communityId: p == null ? void 0 : p.id.user,
              communityUiAction: o(
                "WAWebWamEnumCommunityFeatureUiActionTakenType",
              ).COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.GROUP_ADD,
              communityUiFeature: o("WAWebWamEnumCommunityUiFeatureType")
                .COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH,
            }).commit(),
            o("WAWebModalManager").ModalManager.close(),
            !o("WAWebCommunitySubgroupsMaxReached").subgroupsMaxReached(_))
          )
            if (
              (_ != null && _.participants.iAmAdmin()) ||
              o(
                "WAWebCommunityGatingUtils",
              ).memberSuggestedGroupsM3SenderEnabled()
            )
              o("WAWebCmd").Cmd.openCommunityHomeManageGroups(p.id);
            else {
              var e,
                t =
                  (l == null || (e = l.groupMetadata) == null
                    ? void 0
                    : e.groupType) ===
                    o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
                  l == null
                    ? void 0
                    : l.id;
              o("WAWebCmd").Cmd.communityAddNewGroup(p.id, R, t);
            }
        },
        E = s._(/*BTDS*/ "Add group"),
        k = h
          ? c.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              testid: void 0,
              className: v,
              ariaLabel: E,
              icon: c.jsx(r("WAWebRoundShape.react"), {
                theme: "group-modal",
                children: c.jsx(r("WDSIconIcGroupAddFilled.react"), {
                  height: 28,
                }),
              }),
              onClick: L,
              children: c.jsx(o("WAWebText_DONOTUSE.react").Text, {
                as: "span",
                color: "dark",
                size: "16",
                children: E,
              }),
            })
          : null;
      return c.jsx(r("WAWebGroupsModal.react"), {
        chats: g,
        onGroup: y,
        onCancel: o("WAWebModalManager").closeModalManager,
        mode: o("WAWebChat.react").Mode.LAST,
        title: c.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: p == null ? void 0 : p.contact.name,
          xstyle: m.verticalCenter,
          preserveWhitespace: !0,
        }),
        titleStr: p == null ? void 0 : p.contact.name,
        firstRow: k,
        lastRow: S,
        tsNavigationData: d,
        hideSearchBar: !0,
        showSpeakerForCag: !0,
        rotateList: !0,
        type: "subgroup_switcher",
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
