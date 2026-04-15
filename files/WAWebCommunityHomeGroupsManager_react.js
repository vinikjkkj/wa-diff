__d(
  "WAWebCommunityHomeGroupsManager.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebAnnouncementSpeakerIcon.react",
    "WAWebCellFrame.react",
    "WAWebChatCollection",
    "WAWebCommunityCells.react",
    "WAWebCommunityGatingUtils",
    "WAWebCommunityGetParticipantInfoText",
    "WAWebCommunityRemoveSubgroup",
    "WAWebCommunitySubgroupComparator",
    "WAWebCommunitySubgroupsLimitReachedPopup.react",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebGroupMetadataCollection",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebNavigableFlatList.react",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebRoundShape.react",
    "WAWebSingleSelection",
    "WAWebSpinner.react",
    "WAWebSquircleIcon.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebVelocityTransitionGroup",
    "WDSTextualLink.react",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebFocusOnMount",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useMemo,
      p = d.useState,
      _ = o("WAWebCommunityCells.react").RemoveButtonFactory(),
      f = {
        icon: {
          height: "x112a4uq",
          width: "x15jighw",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        announcementIcon: { backgroundColor: "xfn3atn", $$css: !0 },
        announcementSpeaker: { color: "xzqyxu6", $$css: !0 },
        communitySettingsSection: { backgroundColor: "x1280gxy", $$css: !0 },
      },
      g = c.jsx(r("WAWebSquircleIcon.react"), {
        xstyle: [f.icon, f.announcementIcon],
        transparent: !0,
        children: c.jsx(
          o("WAWebAnnouncementSpeakerIcon.react").AnnouncementSpeakerIcon,
          {
            directional: !0,
            height: 40,
            width: 40,
            iconXstyle: f.announcementSpeaker,
          },
        ),
      }),
      h = function (t) {
        var e,
          n,
          a = o("WAWebChatCollection").ChatCollection.get(t.toString());
        return (
          a
            ? ((e = r("WANullthrows")(a.groupMetadata)), (n = a.title()))
            : ((e = r("WAWebUnjoinedSubgroupMetadataCollection").assertGet(
                t.toString(),
              )),
              (n = e.subject)),
          [e, n]
        );
      };
    function y(e) {
      var t,
        n = o("react-compiler-runtime").c(25),
        a = e.data,
        i = a.icon,
        l = a.itemKey,
        u = a.name,
        d = a.parentId,
        m = a.secondary,
        f = a.showRemove,
        g = a.subgroupWid,
        h = p(!1),
        y = h[0],
        C = h[1],
        b;
      n[0] !== l
        ? ((b = o("WAWebChatCollection").ChatCollection.get(l)),
          (n[0] = l),
          (n[1] = b))
        : (b = n[1]);
      var v = b,
        S;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = ["formattedTitle"]), (n[2] = S))
        : (S = n[2]);
      var R = o("useWAWebModelValues").useOptionalModelValues(v, S),
        L;
      if (
        n[3] !== (R == null ? void 0 : R.formattedTitle) ||
        n[4] !==
          (v == null || (t = v.groupMetadata) == null ? void 0 : t.groupType) ||
        n[5] !== u
      ) {
        var E, k, I;
        ((L = (E = R == null ? void 0 : R.formattedTitle) != null ? E : u),
          (v == null || (k = v.groupMetadata) == null
            ? void 0
            : k.groupType) ===
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
            (L = s._(/*BTDS*/ "Announcements").toString()),
          (n[3] = R == null ? void 0 : R.formattedTitle),
          (n[4] =
            v == null || (I = v.groupMetadata) == null ? void 0 : I.groupType),
          (n[5] = u),
          (n[6] = L));
      } else L = n[6];
      var T;
      n[7] !== L || n[8] !== d || n[9] !== g
        ? ((T = function () {
            o("WAWebCommunityRemoveSubgroup").handleRemoveSubgroup({
              parentId: d,
              removedSubgroupWid: g,
              removedSubgroupTitle: L,
              setLoading: C,
            });
          }),
          (n[7] = L),
          (n[8] = d),
          (n[9] = g),
          (n[10] = T))
        : (T = n[10]);
      var D = T,
        x;
      n[11] !== L
        ? ((x = c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: L,
            ellipsify: !0,
          })),
          (n[11] = L),
          (n[12] = x))
        : (x = n[12]);
      var $;
      n[13] !== L ||
      n[14] !== D ||
      n[15] !== y ||
      n[16] !== e.active ||
      n[17] !== f ||
      n[18] !== g
        ? (($ =
            f &&
            (y
              ? c.jsx(r("WAWebVelocityTransitionGroup"), {
                  transitionName: "fade",
                  children: c.jsx(o("WAWebSpinner.react").Spinner, {
                    size: 18,
                    stroke: 6,
                    color: "highlight",
                  }),
                })
              : c.jsx(r("WAWebVelocityTransitionGroup"), {
                  transitionName: "fade",
                  children: c.jsx(_, {
                    onClick: D,
                    active: e.active,
                    subgroup: g,
                    groupName: L,
                  }),
                }))),
          (n[13] = L),
          (n[14] = D),
          (n[15] = y),
          (n[16] = e.active),
          (n[17] = f),
          (n[18] = g),
          (n[19] = $))
        : ($ = n[19]);
      var P;
      return (
        n[20] !== i || n[21] !== m || n[22] !== x || n[23] !== $
          ? ((P = c.jsx(r("WAWebCellFrame.react"), {
              primary: x,
              image: i,
              secondary: m,
              detail: $,
            })),
            (n[20] = i),
            (n[21] = m),
            (n[22] = x),
            (n[23] = $),
            (n[24] = P))
          : (P = n[24]),
        P
      );
    }
    function C(t) {
      var n,
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l,
        u,
        l,
        u,
        d = i.currentSubgroupCount,
        p = i.joinedSubgroups,
        _ = i.onBack,
        C = i.onCommunitySettingsClick,
        b = i.onExistingGroupFlow,
        v = i.onNewGroupFlow,
        S = i.parentId,
        R = i.unjoinedSubgroups,
        L = o("WAWebCommunityGatingUtils").getParentGroupLinkLimit(),
        E = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.itemKey;
          });
        }),
        k = r("useWAWebFocusOnMount")(),
        I = o("useWAWebModelValues").useOptionalModelValues(
          r("WAWebGroupMetadataCollection").get(S),
          ["allowNonAdminSubGroupCreation", "participants"],
        ),
        T = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebCommunitySubgroupsLimitReachedPopup.react"), {
              maxSubgroups: L,
            }),
          );
        },
        D = function () {
          d >= L ? T() : b();
        },
        x = function () {
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
          d >= L ? T() : v();
        },
        $ = m(
          function () {
            return []
              .concat(p, R)
              .map(function (e) {
                var t,
                  n = h(e),
                  a = n[0],
                  i = n[1];
                if (a.defaultSubgroup === !0)
                  return {
                    itemKey: e.toString(),
                    subgroupWid: e,
                    parentId: S,
                    name: i,
                    icon: g,
                    secondary: null,
                    announcementGroup: !0,
                    showRemove: !1,
                  };
                var l = c.jsx(o("WAWebDetailImage.react").DetailImage, {
                    size: 40,
                    shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
                    id: e,
                    hiddenSubgroupIcon: "chat-list",
                  }),
                  u;
                return (
                  a.participants.iAmMember()
                    ? a.participants != null
                      ? (u = o(
                          "WAWebCommunityGetParticipantInfoText",
                        ).getParticipantInfoText(a.participants))
                      : (u = s._(/*BTDS*/ "You created group {subject}", [
                          s._param("subject", i),
                        ]))
                    : (u = s._(/*BTDS*/ "You are not a member of this group")),
                  {
                    name: i,
                    subgroupWid: e,
                    parentId: S,
                    itemKey: e.toString(),
                    icon: c.jsx(r("WAWebRoundShape.react"), {
                      xstyle: f.icon,
                      transparent: !0,
                      children: l,
                    }),
                    secondary: u,
                    announcementGroup: !1,
                    showRemove:
                      (t = I == null ? void 0 : I.participants.iAmAdmin()) !=
                      null
                        ? t
                        : !1,
                  }
                );
              })
              .sort(o("WAWebCommunitySubgroupComparator").SubgroupComparator);
          },
          [p, R, S, I == null ? void 0 : I.participants],
        ),
        P = m(
          function () {
            return r("compactMap")($, function (e) {
              var t = e.showRemove,
                n = e.subgroupWid;
              if (t) return { itemKey: "remove-button-" + n.toString() };
            });
          },
          [$],
        );
      E.current.init(P);
      var N =
          (n = I == null ? void 0 : I.participants.iAmAdmin()) != null ? n : !1,
        M = r("WAWebL10N").getNormalizedLocale(),
        w = M === "ar" || M === "fa" ? "rtl" : "ltr",
        A = N
          ? ((l = s._param("groupcount", d, [0])),
            (u = s._param("maxsubgroups", L, [0])),
            s._(/*BTDS*/ '_j{"*":{"*":"Manage groups ({=m1})"}}', [
              l,
              u,
              s._implicitParam(
                "=m1",
                c.jsx("span", {
                  dir: w,
                  children: s._(
                    /*BTDS*/ '_j{"*":{"*":"{groupcount}{=m2}{maxsubgroups}"}}',
                    [
                      l,
                      u,
                      s._implicitParam(
                        "=m2",
                        c.jsx("span", {
                          dir: w,
                          children: s._(/*BTDS*/ '_j{"*":{"*":"\\\/"}}', [
                            l,
                            u,
                          ]),
                        }),
                      ),
                    ],
                  ),
                }),
              ),
            ]))
          : ((l = s._param("groupcount", d, [0])),
            (u = s._param("maxsubgroups", L, [0])),
            s._(/*BTDS*/ '_j{"*":{"*":"Add groups ({=m1})"}}', [
              l,
              u,
              s._implicitParam(
                "=m1",
                c.jsx("span", {
                  dir: w,
                  children: s._(
                    /*BTDS*/ '_j{"*":{"*":"{groupcount}{=m2}{maxsubgroups}"}}',
                    [
                      l,
                      u,
                      s._implicitParam(
                        "=m2",
                        c.jsx("span", {
                          dir: w,
                          children: s._(/*BTDS*/ '_j{"*":{"*":"\\\/"}}', [
                            l,
                            u,
                          ]),
                        }),
                      ),
                    ],
                  ),
                }),
              ),
            ])),
        F = (I == null ? void 0 : I.allowNonAdminSubGroupCreation) === !0,
        O,
        B = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getMemberAddedGroupsUrl(),
          children: r("WAWebFbtCommon")("Learn more"),
        });
      N
        ? (O = F
            ? s._(
                /*BTDS*/ "Members can suggest existing groups for admin approval and add new groups directly. View in {=m2}",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(r("WDSTextualLink.react"), {
                      onClick: C,
                      children: s._(/*BTDS*/ "community settings"),
                    }),
                  ),
                ],
              )
            : s._(
                /*BTDS*/ "Members can suggest groups for admin approval. Admins can add groups directly. View in {=m2}",
                [
                  s._implicitParam(
                    "=m2",
                    c.jsx(r("WDSTextualLink.react"), {
                      onClick: C,
                      children: s._(/*BTDS*/ "community settings"),
                    }),
                  ),
                ],
              ))
        : (O = F
            ? s._(
                /*BTDS*/ "Based on this community's settings, members can add new groups directly and suggest existing groups for admin approval. {learn-more}",
                [s._param("learn-more", B)],
              )
            : s._(
                /*BTDS*/ "Based on this community's settings, members can suggest groups for admin approval. {learn-more}",
                [s._param("learn-more", B)],
              ));
      var W = c.jsx(r("WAWebDrawerSection.react"), {
        xstyle: [
          f.communitySettingsSection,
          o("WAWebUISpacing").uiMargin.all30,
          o("WAWebUISpacing").uiMargin.top0,
        ],
        children: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: O }),
      });
      return c.jsx("div", {
        role: "complementary",
        ref: k,
        tabIndex: -1,
        "aria-label": s._(/*BTDS*/ "Manage community groups drawer"),
        children: c.jsxs(r("WAWebDrawer.react"), {
          ref: a,
          testid: void 0,
          tsNavigationData: {
            surface: "unknown",
            viewName: "community-groups-manager",
          },
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: A,
              titleStr: A,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onBack: _,
            }),
            c.jsxs(r("WAWebDrawerBody.react"), {
              children: [
                c.jsxs(r("WAWebDrawerSection.react"), {
                  children: [
                    c.jsx(o("WAWebCommunityCells.react").CreateNewGroupCell, {
                      onClick: x,
                    }),
                    c.jsx(
                      o("WAWebCommunityCells.react").AddExistingGroupsCell,
                      { onClick: D },
                    ),
                  ],
                }),
                W,
                c.jsx(r("WAWebDrawerSection.react"), {
                  title: s._(/*BTDS*/ "Groups in this community"),
                  testid: void 0,
                  children: c.jsx(r("WAWebNavigableFlatList.react"), {
                    selection: E.current,
                    ariaLabel: s._(/*BTDS*/ "Community subgroups list"),
                    listData: $,
                    onRenderItem: function (t) {
                      return c.jsx(y, { data: t, active: E.current });
                    },
                    rotateList: !0,
                  }),
                }),
              ],
            }),
          ],
        }),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
