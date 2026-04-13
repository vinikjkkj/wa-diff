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
    "react-compiler-runtime",
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
        l = o("react-compiler-runtime").c(37),
        u = t.chat,
        p = t.parentChat,
        f;
      if (l[0] !== (u == null ? void 0 : u.groupMetadata) || l[1] !== p) {
        var g;
        ((f =
          p != null
            ? p
            : u == null || (g = u.groupMetadata) == null
              ? void 0
              : g.getParentGroupChat()),
          (l[0] = u == null ? void 0 : u.groupMetadata),
          (l[1] = p),
          (l[2] = f));
      } else f = l[2];
      var h = f,
        y = h == null ? void 0 : h.groupMetadata,
        C =
          (n =
            (a = o("useWAWebModelValues").useOptionalModelValues(y, [
              "joinedSubgroups",
            ])) == null
              ? void 0
              : a.joinedSubgroups) != null
            ? n
            : [],
        b;
      l[3] !== C
        ? ((b = C.map(_).sort(r("WAWebChatComparatorCommunity"))),
          (l[3] = C),
          (l[4] = b))
        : (b = l[4]);
      var v = b,
        S;
      l[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = ["change:allowNonAdminSubGroupCreation"]), (l[5] = S))
        : (S = l[5]);
      var R;
      l[6] !== h
        ? ((R = function () {
            return o("WAWebChatCommunityUtils").canAddGroupToCommunity(h);
          }),
          (l[6] = h),
          (l[7] = R))
        : (R = l[7]);
      var L = r("useWAWebEventTargetValue")(
          h == null ? void 0 : h.groupMetadata,
          S,
          R,
        ),
        E;
      l[8] !== (h == null ? void 0 : h.id.user)
        ? ((E = function (t) {
            (new (o(
              "WAWebCommunityFeatureUsageWamEvent",
            ).CommunityFeatureUsageWamEvent)({
              communityId: h == null ? void 0 : h.id.user,
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
          }),
          (l[8] = h == null ? void 0 : h.id.user),
          (l[9] = E))
        : (E = l[9]);
      var k = E,
        I;
      l[10] !== h
        ? ((I = function () {
            h != null &&
              h.id &&
              (new (o(
                "WAWebCommunityFeatureUsageWamEvent",
              ).CommunityFeatureUsageWamEvent)({
                communityId: h == null ? void 0 : h.id.user,
                communityUiAction: o(
                  "WAWebWamEnumCommunityFeatureUiActionTakenType",
                ).COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.COMMUNITY_NAV,
                communityUiFeature: o("WAWebWamEnumCommunityUiFeatureType")
                  .COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH,
              }).commit(),
              o("WAWebCmd").Cmd.openCommunityHome(h.id),
              o("WAWebModalManager").ModalManager.close());
          }),
          (l[10] = h),
          (l[11] = I))
        : (I = l[11]);
      var T = I,
        D;
      l[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = s._(/*BTDS*/ "View community")), (l[12] = D))
        : (D = l[12]);
      var x = D,
        $;
      l[13] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = (e || (e = r("stylex")))([m.row, m.rowRefreshed])), (l[13] = $))
        : ($ = l[13]);
      var P = $,
        N;
      l[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = c.jsx("div", {
            className: "x78zum5 x6s0dn4 xl56j7k xhslqc4 x15jighw x112a4uq",
            children: c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
              directional: !0,
            }),
          })),
          (l[14] = N))
        : (N = l[14]);
      var M;
      l[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx(o("WAWebText_DONOTUSE.react").Text, {
            as: "span",
            color: "accent",
            size: "16",
            children: x,
          })),
          (l[15] = M))
        : (M = l[15]);
      var w;
      l[16] !== T
        ? ((w = c.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
            testid: void 0,
            className: P,
            ariaLabel: x,
            icon: N,
            onClick: T,
            children: M,
          })),
          (l[16] = T),
          (l[17] = w))
        : (w = l[17]);
      var A = w,
        F = r("useWAWebHandleNewGroupCreated")(),
        O;
      if (
        l[18] !==
          (u == null || (i = u.groupMetadata) == null ? void 0 : i.groupType) ||
        l[19] !== (u == null ? void 0 : u.id) ||
        l[20] !== F ||
        l[21] !== h ||
        l[22] !== y
      ) {
        var B;
        ((O = function () {
          if (
            h != null &&
            h.id &&
            (new (o(
              "WAWebCommunityFeatureUsageWamEvent",
            ).CommunityFeatureUsageWamEvent)({
              communityId: h == null ? void 0 : h.id.user,
              communityUiAction: o(
                "WAWebWamEnumCommunityFeatureUiActionTakenType",
              ).COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.GROUP_ADD,
              communityUiFeature: o("WAWebWamEnumCommunityUiFeatureType")
                .COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH,
            }).commit(),
            o("WAWebModalManager").ModalManager.close(),
            !o("WAWebCommunitySubgroupsMaxReached").subgroupsMaxReached(y))
          )
            if (
              (y != null && y.participants.iAmAdmin()) ||
              o(
                "WAWebCommunityGatingUtils",
              ).memberSuggestedGroupsM3SenderEnabled()
            )
              o("WAWebCmd").Cmd.openCommunityHomeManageGroups(h.id);
            else {
              var e,
                t =
                  (u == null || (e = u.groupMetadata) == null
                    ? void 0
                    : e.groupType) ===
                    o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP ||
                  u == null
                    ? void 0
                    : u.id;
              o("WAWebCmd").Cmd.communityAddNewGroup(h.id, F, t);
            }
        }),
          (l[18] =
            u == null || (B = u.groupMetadata) == null ? void 0 : B.groupType),
          (l[19] = u == null ? void 0 : u.id),
          (l[20] = F),
          (l[21] = h),
          (l[22] = y),
          (l[23] = O));
      } else O = l[23];
      var W = O,
        q;
      l[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = s._(/*BTDS*/ "Add group")), (l[24] = q))
        : (q = l[24]);
      var U = q,
        V;
      l[25] !== W || l[26] !== L
        ? ((V = L
            ? c.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                testid: void 0,
                className: P,
                ariaLabel: U,
                icon: c.jsx(r("WAWebRoundShape.react"), {
                  theme: "group-modal",
                  children: c.jsx(r("WDSIconIcGroupAddFilled.react"), {
                    height: 28,
                  }),
                }),
                onClick: W,
                children: c.jsx(o("WAWebText_DONOTUSE.react").Text, {
                  as: "span",
                  color: "dark",
                  size: "16",
                  children: U,
                }),
              })
            : null),
          (l[25] = W),
          (l[26] = L),
          (l[27] = V))
        : (V = l[27]);
      var H = V,
        G = h == null ? void 0 : h.contact.name,
        z;
      l[28] !== G
        ? ((z = c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: G,
            xstyle: m.verticalCenter,
            preserveWhitespace: !0,
          })),
          (l[28] = G),
          (l[29] = z))
        : (z = l[29]);
      var j = h == null ? void 0 : h.contact.name,
        K;
      return (
        l[30] !== H ||
        l[31] !== k ||
        l[32] !== v ||
        l[33] !== z ||
        l[34] !== j ||
        l[35] !== A
          ? ((K = c.jsx(r("WAWebGroupsModal.react"), {
              chats: v,
              onGroup: k,
              onCancel: o("WAWebModalManager").closeModalManager,
              mode: o("WAWebChat.react").Mode.LAST,
              title: z,
              titleStr: j,
              firstRow: H,
              lastRow: A,
              tsNavigationData: d,
              hideSearchBar: !0,
              showSpeakerForCag: !0,
              rotateList: !0,
              type: "subgroup_switcher",
            })),
            (l[30] = H),
            (l[31] = k),
            (l[32] = v),
            (l[33] = z),
            (l[34] = j),
            (l[35] = A),
            (l[36] = K))
          : (K = l[36]),
        K
      );
    }
    function _(e) {
      return o("WAWebChatCollection").ChatCollection.assertGet(e);
    }
    l.default = p;
  },
  226,
);
