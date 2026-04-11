__d(
  "WAWebCommunityInfoSection.react",
  [
    "fbt",
    "WAWebChatCommunityUtils",
    "WAWebChatInfoDrawerSection.react",
    "WAWebCommunityCells.react",
    "WAWebCommunityHomeActionsSection.react",
    "WAWebCommunityHomeDescriptionSection.react",
    "WAWebCommunityInfoMembersSection.react",
    "WAWebCommunitySubgroupSwitcher.react",
    "WAWebModalManager",
    "WAWebPeopleIcon.react",
    "WAWebSettingsIcon.react",
    "WAWebUISpacing",
    "WDSIconIcGroupAdd.react",
    "react",
    "react-compiler-runtime",
    "useWAWebCommunitySubgroups",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = [
        "callbacks",
        "isAdmin",
        "onAddMembersClick",
        "parentChat",
        "scrollToMemberList",
        "showFullDescription",
      ],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(44),
        a,
        i,
        l,
        u,
        d,
        m,
        p;
      n[0] !== t
        ? ((a = t.callbacks),
          (l = t.isAdmin),
          (u = t.onAddMembersClick),
          (d = t.parentChat),
          (m = t.scrollToMemberList),
          (p = t.showFullDescription),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = d),
          (n[6] = m),
          (n[7] = p))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (u = n[4]),
          (d = n[5]),
          (m = n[6]),
          (p = n[7]));
      var _ = r("useWAWebCommunitySubgroups")(d.groupMetadata),
        f = _.subgroupCount,
        g;
      n[8] !== d || n[9] !== p
        ? ((g = d
            ? c.jsx(r("WAWebCommunityHomeDescriptionSection.react"), {
                chat: d,
                showFullDescription: p,
              })
            : null),
          (n[8] = d),
          (n[9] = p),
          (n[10] = g))
        : (g = n[10]);
      var h = g,
        y,
        C;
      if (!o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(d)) {
        if (!o("WAWebChatCommunityUtils").isSuspendedCommunity(d) && l) {
          var b;
          n[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = [
                o("WAWebUISpacing").uiMargin.vert10,
                o("WAWebUISpacing").uiPadding.all0,
              ]),
              (n[11] = b))
            : (b = n[11]);
          var v;
          n[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = s._(/*BTDS*/ "Manage groups")), (n[12] = v))
            : (v = n[12]);
          var S;
          n[13] !== a.onManageCommunityGroupsClick
            ? ((S = c.jsx(o("WAWebCommunityCells.react").CommunityMenuButton, {
                testid: void 0,
                Icon: r("WDSIconIcGroupAdd.react"),
                onClick: a.onManageCommunityGroupsClick,
                title: v,
              })),
              (n[13] = a.onManageCommunityGroupsClick),
              (n[14] = S))
            : (S = n[14]);
          var R;
          n[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = s._(/*BTDS*/ "Community settings")), (n[15] = R))
            : (R = n[15]);
          var L;
          n[16] !== a.onCommunitySettingsClick
            ? ((L = c.jsx(o("WAWebCommunityCells.react").CommunityMenuButton, {
                testid: void 0,
                Icon: o("WAWebSettingsIcon.react").SettingsIcon,
                iconHeight: 20,
                onClick: a.onCommunitySettingsClick,
                title: R,
              })),
              (n[16] = a.onCommunitySettingsClick),
              (n[17] = L))
            : (L = n[17]);
          var E;
          (n[18] !== S || n[19] !== L
            ? ((E = c.jsxs(
                o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
                { testid: void 0, xstyle: b, children: [S, L] },
              )),
              (n[18] = S),
              (n[19] = L),
              (n[20] = E))
            : (E = n[20]),
            (y = E));
        }
        var k;
        n[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = [
              o("WAWebUISpacing").uiMargin.vert10,
              o("WAWebUISpacing").uiPadding.all0,
            ]),
            (n[21] = k))
          : (k = n[21]);
        var I;
        n[22] !== d
          ? ((I = function () {
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebCommunitySubgroupSwitcher.react"), {
                  parentChat: d,
                }),
              );
            }),
            (n[22] = d),
            (n[23] = I))
          : (I = n[23]);
        var T;
        n[24] !== f
          ? ((T = s._(/*BTDS*/ '_j{"*":"View groups ({subgroup-count})"}', [
              s._param("subgroup-count", f, [0]),
            ])),
            (n[24] = f),
            (n[25] = T))
          : (T = n[25]);
        var D;
        (n[26] !== I || n[27] !== T
          ? ((D = c.jsx(
              o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
              {
                testid: void 0,
                xstyle: k,
                children: c.jsx(
                  o("WAWebCommunityCells.react").CommunityMenuButton,
                  {
                    testid: void 0,
                    Icon: o("WAWebPeopleIcon.react").PeopleIcon,
                    onClick: I,
                    title: T,
                  },
                ),
              },
            )),
            (n[26] = I),
            (n[27] = T),
            (n[28] = D))
          : (D = n[28]),
          (C = D));
      }
      var x;
      n[29] !== a || n[30] !== i || n[31] !== u || n[32] !== d || n[33] !== m
        ? ((x = o("WAWebChatCommunityUtils").isSuspendedCommunity(d)
            ? null
            : c.jsx(
                r("WAWebCommunityInfoMembersSection.react"),
                babelHelpers.extends(
                  {
                    parentChat: d,
                    onInviteMembersClick: a.onInviteMembersClick,
                    onAddMembersClick: u,
                    scrollToMemberList: m,
                  },
                  i,
                ),
              )),
          (n[29] = a),
          (n[30] = i),
          (n[31] = u),
          (n[32] = d),
          (n[33] = m),
          (n[34] = x))
        : (x = n[34]);
      var $ = x,
        P;
      n[35] !== a || n[36] !== d
        ? ((P = d
            ? c.jsx(r("WAWebCommunityHomeActionsSection.react"), {
                chat: d,
                onBack: a.onBack,
                onDeactivateCommunity: a.onDeactivateCommunity,
                onTransferOwnership: a.onTransferOwnership,
              })
            : null),
          (n[35] = a),
          (n[36] = d),
          (n[37] = P))
        : (P = n[37]);
      var N = P,
        M;
      return (
        n[38] !== N || n[39] !== h || n[40] !== $ || n[41] !== y || n[42] !== C
          ? ((M = c.jsxs(c.Fragment, { children: [h, y, C, $, N] })),
            (n[38] = N),
            (n[39] = h),
            (n[40] = $),
            (n[41] = y),
            (n[42] = C),
            (n[43] = M))
          : (M = n[43]),
        M
      );
    }
    l.default = d;
  },
  226,
);
