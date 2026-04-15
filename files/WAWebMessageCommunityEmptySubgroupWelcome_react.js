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
    "react-compiler-runtime",
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
        n = o("react-compiler-runtime").c(43),
        a = e.subgroupChat,
        i = e.templateParams,
        l = i[0],
        d = i[1],
        m = i[2],
        p = i[3],
        _ = i[4],
        f;
      n[0] !== l
        ? ((f = o("WAWebChatCollection").ChatCollection.get(l)),
          (n[0] = l),
          (n[1] = f))
        : (f = n[1]);
      var g = f,
        h = (t = g == null ? void 0 : g.formattedTitle) != null ? t : d,
        y = m != null ? m : a.formattedTitle,
        C = p === "true",
        b = _ === "true",
        v;
      n[2] !== a.groupMetadata
        ? ((v = o(
            "WAWebCommunitySubgroupInviteLinkRestriction",
          ).isSubgroupInviteLinkRestrictedByParentCommunity(a.groupMetadata)),
          (n[2] = a.groupMetadata),
          (n[3] = v))
        : (v = n[3]);
      var S = v,
        R;
      n[4] !== g || n[5] !== a
        ? ((R = g
            ? u.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                children: u.jsx(r("WAWebCommunitySubgroupImage.react"), {
                  chat: a,
                  parentGroupChat: g,
                  size: 49,
                }),
              })
            : null),
          (n[4] = g),
          (n[5] = a),
          (n[6] = R))
        : (R = n[6]);
      var L = R,
        E = r("useWAWebAddParticipantsSelectedContacts")(),
        k = E.handleClearSelectedContacts,
        I = E.selectedContactsMap,
        T = E.updateSelectedContactsState,
        D;
      n[7] !== k || n[8] !== h || n[9] !== I || n[10] !== a || n[11] !== T
        ? ((D = function () {
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
              return D();
            };
            o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
              groupMetadata: r("WANullthrows")(a.groupMetadata),
              chat: a,
              communityName: h,
              selectedContactsMap: I,
              updateSelectedContactsState: T,
              reopenAddGroupFlowCallback: e,
              handleClearSelectedContacts: k,
            });
          }),
          (n[7] = k),
          (n[8] = h),
          (n[9] = I),
          (n[10] = a),
          (n[11] = T),
          (n[12] = D))
        : (D = n[12]);
      var x;
      n[13] !== a
        ? ((x = function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              u.jsx(
                o("WAWebGroupInviteLinkDrawerLoadable")
                  .GroupInviteLinkDrawerLoadable,
                {
                  chat: a,
                  groupMetadata: r("WANullthrows")(a.groupMetadata),
                  onBack: o("WAWebDrawerManager").closeDrawerRight,
                  onGroupSettings: function () {
                    return o(
                      "WAWebDrawerManager",
                    ).DrawerManager.openDrawerRight(
                      o(
                        "WAWebAdaptiveLayoutGatingUtils",
                      ).shouldUseDrawerDescriptor()
                        ? {
                            descriptorType: "existing_group_permissions",
                            chat: a,
                            groupMetadata: r("WANullthrows")(a.groupMetadata),
                          }
                        : u.jsx(
                            r("WAWebExistingGroupPermissionsDrawer.react"),
                            {
                              chat: a,
                              groupMetadata: r("WANullthrows")(a.groupMetadata),
                              onClose: o("WAWebDrawerManager").closeDrawerRight,
                            },
                          ),
                    );
                  },
                },
              ),
            );
          }),
          (n[13] = a),
          (n[14] = x))
        : (x = n[14]);
      var $ = x,
        P;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "It was added to the community")), (n[15] = P))
        : (P = n[15]);
      var N = P;
      if (h)
        if (b === !0) {
          var M;
          (n[16] !== h
            ? ((M = s._(
                /*BTDS*/ 'It was added to the community "{community_name}". Only people in the community who have been invited can see and join this group.',
                [s._param("community_name", h)],
              )),
              (n[16] = h),
              (n[17] = M))
            : (M = n[17]),
            (N = M));
        } else {
          var w;
          (n[18] !== C || n[19] !== h
            ? ((w =
                C === !0
                  ? s._(
                      /*BTDS*/ 'It was added to the community "{community_name}". Anyone in the community can request to join this group.',
                      [s._param("community_name", h)],
                    )
                  : s._(
                      /*BTDS*/ 'It was added to the community "{community_name}". Anyone in the community can join this group.',
                      [s._param("community_name", h)],
                    )),
              (n[18] = C),
              (n[19] = h),
              (n[20] = w))
            : (w = n[20]),
            (N = w));
        }
      var A;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = {
            className:
              "x1iw51ew xde1mab x1xrf6ya xscbp6u xso031l x1q0q8m5 x120ee7l",
          }),
          (n[21] = A))
        : (A = n[21]);
      var F;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = "x1380le5 x4tpdpg"), (n[22] = F))
        : (F = n[22]);
      var O;
      n[23] !== y
        ? ((O = u.jsx(o("WAWebFlex.react").FlexRow, {
            className: F,
            justify: "center",
            children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
              color: "primary",
              weight: "medium",
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: s._(/*BTDS*/ "You created the group: {subgroup_name}", [
                  s._param("subgroup_name", y),
                ]),
              }),
            }),
          })),
          (n[23] = y),
          (n[24] = O))
        : (O = n[24]);
      var B;
      n[25] !== N
        ? ((B = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: N }),
            }),
          })),
          (n[25] = N),
          (n[26] = B))
        : (B = n[26]);
      var W;
      n[27] !== L || n[28] !== O || n[29] !== B
        ? ((W = u.jsxs(
            "div",
            babelHelpers.extends({}, A, { children: [L, O, B] }),
          )),
          (n[27] = L),
          (n[28] = O),
          (n[29] = B),
          (n[30] = W))
        : (W = n[30]);
      var q;
      n[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = [c.button, c.marginVert20]), (n[31] = q))
        : (q = n[31]);
      var U, V;
      n[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "end",
            xstyle: c.marginEnd8,
            children: u.jsx(o("WAWebAddUserIcon.react").AddUserIcon, {
              iconXstyle: c.tealLighterColor,
              height: 20,
            }),
          })),
          (V = u.jsx("span", {
            className: "x1v5yvga xeuugli x1u7k74 x1f6kntn",
            children: s._(/*BTDS*/ "Add members"),
          })),
          (n[32] = U),
          (n[33] = V))
        : ((U = n[32]), (V = n[33]));
      var H;
      n[34] !== D
        ? ((H = u.jsxs(r("WAWebUnstyledButton.react"), {
            onClick: D,
            xstyle: q,
            children: [U, V],
          })),
          (n[34] = D),
          (n[35] = H))
        : (H = n[35]);
      var G;
      n[36] !== S || n[37] !== $
        ? ((G =
            !S &&
            u.jsxs(r("WAWebUnstyledButton.react"), {
              onClick: $,
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
            })),
          (n[36] = S),
          (n[37] = $),
          (n[38] = G))
        : (G = n[38]);
      var z;
      return (
        n[39] !== H || n[40] !== G || n[41] !== W
          ? ((z = u.jsxs(u.Fragment, { children: [W, H, G] })),
            (n[39] = H),
            (n[40] = G),
            (n[41] = W),
            (n[42] = z))
          : (z = n[42]),
        z
      );
    }
    l.default = d;
  },
  226,
);
