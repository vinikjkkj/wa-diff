__d(
  "WAWebMessageCommunityEmptySubgroupWelcome.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAddUserIcon.react",
    "WAWebChatCollection",
    "WAWebCommunitySubgroupImage.react",
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
      n[2] !== g || n[3] !== a
        ? ((v = g
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
          (n[2] = g),
          (n[3] = a),
          (n[4] = v))
        : (v = n[4]);
      var S = v,
        R = r("useWAWebAddParticipantsSelectedContacts")(),
        L = R.handleClearSelectedContacts,
        E = R.selectedContactsMap,
        k = R.updateSelectedContactsState,
        I;
      n[5] !== L || n[6] !== h || n[7] !== E || n[8] !== a || n[9] !== k
        ? ((I = function () {
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
              return I();
            };
            o("WAWebOpenAddParticipantModalFlow").openAddParticipantModalFlow({
              groupMetadata: r("WANullthrows")(a.groupMetadata),
              chat: a,
              communityName: h,
              selectedContactsMap: E,
              updateSelectedContactsState: k,
              reopenAddGroupFlowCallback: e,
              handleClearSelectedContacts: L,
            });
          }),
          (n[5] = L),
          (n[6] = h),
          (n[7] = E),
          (n[8] = a),
          (n[9] = k),
          (n[10] = I))
        : (I = n[10]);
      var T;
      n[11] !== a
        ? ((T = function () {
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
          (n[11] = a),
          (n[12] = T))
        : (T = n[12]);
      var D = T,
        x;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = s._(/*BTDS*/ "It was added to the community")), (n[13] = x))
        : (x = n[13]);
      var $ = x;
      if (h)
        if (b === !0) {
          var P;
          (n[14] !== h
            ? ((P = s._(
                /*BTDS*/ 'It was added to the community "{community_name}". Only people in the community who have been invited can see and join this group.',
                [s._param("community_name", h)],
              )),
              (n[14] = h),
              (n[15] = P))
            : (P = n[15]),
            ($ = P));
        } else {
          var N;
          (n[16] !== C || n[17] !== h
            ? ((N =
                C === !0
                  ? s._(
                      /*BTDS*/ 'It was added to the community "{community_name}". Anyone in the community can request to join this group.',
                      [s._param("community_name", h)],
                    )
                  : s._(
                      /*BTDS*/ 'It was added to the community "{community_name}". Anyone in the community can join this group.',
                      [s._param("community_name", h)],
                    )),
              (n[16] = C),
              (n[17] = h),
              (n[18] = N))
            : (N = n[18]),
            ($ = N));
        }
      var M;
      n[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = {
            className:
              "x1iw51ew xde1mab x1xrf6ya xscbp6u xso031l x1q0q8m5 x120ee7l",
          }),
          (n[19] = M))
        : (M = n[19]);
      var w;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = "x1380le5 x4tpdpg"), (n[20] = w))
        : (w = n[20]);
      var A;
      n[21] !== y
        ? ((A = u.jsx(o("WAWebFlex.react").FlexRow, {
            className: w,
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
          (n[21] = y),
          (n[22] = A))
        : (A = n[22]);
      var F;
      n[23] !== $
        ? ((F = u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "center",
            children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
              children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: $ }),
            }),
          })),
          (n[23] = $),
          (n[24] = F))
        : (F = n[24]);
      var O;
      n[25] !== S || n[26] !== A || n[27] !== F
        ? ((O = u.jsxs(
            "div",
            babelHelpers.extends({}, M, { children: [S, A, F] }),
          )),
          (n[25] = S),
          (n[26] = A),
          (n[27] = F),
          (n[28] = O))
        : (O = n[28]);
      var B;
      n[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = [c.button, c.marginVert20]), (n[29] = B))
        : (B = n[29]);
      var W, q;
      n[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "end",
            xstyle: c.marginEnd8,
            children: u.jsx(o("WAWebAddUserIcon.react").AddUserIcon, {
              iconXstyle: c.tealLighterColor,
              height: 20,
            }),
          })),
          (q = u.jsx("span", {
            className: "x1v5yvga xeuugli x1u7k74 x1f6kntn",
            children: s._(/*BTDS*/ "Add members"),
          })),
          (n[30] = W),
          (n[31] = q))
        : ((W = n[30]), (q = n[31]));
      var U;
      n[32] !== I
        ? ((U = u.jsxs(r("WAWebUnstyledButton.react"), {
            onClick: I,
            xstyle: B,
            children: [W, q],
          })),
          (n[32] = I),
          (n[33] = U))
        : (U = n[33]);
      var V;
      n[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = [c.button, c.marginVert20]), (n[34] = V))
        : (V = n[34]);
      var H, G;
      n[35] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "end",
            xstyle: c.marginEnd8,
            children: u.jsx(r("WDSIconIcLink.react"), {
              testid: void 0,
              iconXstyle: c.tealLighterColor,
              height: 20,
            }),
          })),
          (G = u.jsx("span", {
            className: "x1v5yvga xeuugli x1u7k74 x1f6kntn",
            children: s._(/*BTDS*/ "Invite to group via link"),
          })),
          (n[35] = H),
          (n[36] = G))
        : ((H = n[35]), (G = n[36]));
      var z;
      n[37] !== D
        ? ((z = u.jsxs(r("WAWebUnstyledButton.react"), {
            onClick: D,
            xstyle: V,
            children: [H, G],
          })),
          (n[37] = D),
          (n[38] = z))
        : (z = n[38]);
      var j;
      return (
        n[39] !== U || n[40] !== z || n[41] !== O
          ? ((j = u.jsxs(u.Fragment, { children: [O, U, z] })),
            (n[39] = U),
            (n[40] = z),
            (n[41] = O),
            (n[42] = j))
          : (j = n[42]),
        j
      );
    }
    l.default = d;
  },
  226,
);
