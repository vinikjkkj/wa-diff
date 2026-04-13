__d(
  "WAWebCommunityHomeJoinedSubgroups.react",
  [
    "fbt",
    "WANullthrows",
    "WAWebABProps",
    "WAWebChat.react",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebChatComparatorCommunity",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChatLockUtils",
    "WAWebCmd",
    "WAWebCommunityCells.react",
    "WAWebCommunityDailyUtils",
    "WAWebCommunityGroupJourneyEventImpl",
    "WAWebComposeBoxActions",
    "WAWebGroupType",
    "WAWebKeyboardHotKeys.react",
    "WAWebNavigableFlatList.react",
    "WAWebSingleSelection",
    "WAWebUISpacing",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumSurfaceType",
    "react",
    "react-compiler-runtime",
    "useWAWebActiveSelection",
    "useWAWebCommunitySubgroups",
    "useWAWebEventTargetValue",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e, t) {
      var n,
        a = r("WANullthrows")(
          (n = e.groupMetadata) == null ? void 0 : n.parentGroup,
        );
      o("WAWebCommunityDailyUtils").incrementCommunityHomeEvent(
        a,
        o("WAWebCommunityDailyUtils").CommunityDailyHomeMetricsType
          .HOME_GROUP_NAVIGATIONS,
      );
      var i;
      (t === "navigation"
        ? (i = o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_NAV)
        : (i = o("WAWebWamEnumSurfaceType").SURFACE_TYPE.COMMUNITY_HOME),
        new (o(
          "WAWebCommunityGroupJourneyEventImpl",
        ).CommunityGroupJourneyEvent)({
          action: o("WAWebWamEnumChatFilterActionTypes")
            .CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
          surface: i,
          chat: e,
        }).commit(),
        o("WAWebCmd")
          .Cmd.openChatFromUnread({ chat: e })
          .then(function (t) {
            t && o("WAWebComposeBoxActions").ComposeBoxActions.focus(e);
          }));
    }
    function m(e) {
      "use no forget";
      var t = e.chat,
        n = e.mini,
        a = n === void 0 ? !1 : n,
        i = e.onAddNewGroupClick,
        l = e.onPendingGroupsClick,
        d = e.type,
        m = d === void 0 ? "home" : d,
        _ = c(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.itemKey;
          });
        }, []),
        f = r("useWAWebEventTargetValue")(
          t.groupMetadata,
          ["change:allowNonAdminSubGroupCreation", "change:suspended"],
          function () {
            return o("WAWebChatCommunityUtils").canAddGroupToCommunity(t);
          },
        ),
        g =
          f && a
            ? u.jsx(o("WAWebCommunityCells.react").AddGroupCell, { onClick: i })
            : null,
        h = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        ["sort"],
        h,
      );
      var y = r("useWAWebCommunitySubgroups")(t.groupMetadata),
        C = y.joinedSubgroups,
        b = y.subgroupCount,
        v = s._(
          /*BTDS*/ '_j{"*":"Your groups: {other-groups} groups","_1":"Your groups: 1 group"}',
          [s._plural(C.length, "other-groups")],
        ),
        S = function () {
          var e = C.map(function (e) {
              return e.toString();
            }),
            t = e
              .map(function (e) {
                return o("WAWebChatCollection").ChatCollection.assertGet(e);
              })
              .filter(function (e) {
                return o("WAWebChatLockUtils").chatIsAccessible(e);
              })
              .sort(r("WAWebChatComparatorCommunity"));
          return t.reduce(function (e, t) {
            var n,
              r = (n = t.groupMetadata) == null ? void 0 : n.groupType;
            return (
              r &&
                !(
                  a &&
                  r === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
                ) &&
                e.push({
                  itemKey: t.id.toString(),
                  subChat: t,
                  groupType: r,
                  height: 65,
                }),
              e
            );
          }, []);
        };
      if ((_.init(S()), g == null && C.length < 1)) return null;
      var R = null;
      return (
        a
          ? b === 1
            ? (R = s._(/*BTDS*/ "Groups"))
            : (R = s._(/*BTDS*/ "Groups you're in"))
          : (R = s._(/*BTDS*/ "Your groups")),
        u.jsxs(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerListSection,
          {
            testid: void 0,
            title: R,
            xstyle: a && o("WAWebUISpacing").uiMargin.bottom0,
            children: [
              !a &&
                u.jsx(o("WAWebCommunityCells.react").SubgroupSuggestionsRow, {
                  chat: t,
                  onClick: l,
                }),
              g,
              u.jsx(r("WAWebNavigableFlatList.react"), {
                ariaLabel: v.toString(),
                listData: S(),
                onRenderItem: function (t) {
                  return u.jsx(p, { data: t, active: _, mini: a, type: m });
                },
                selection: _,
                rotateList: !0,
              }),
            ],
          },
        )
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.data,
        a = n.groupType,
        i = n.subChat,
        l = e.mini,
        c = e.active,
        m;
      t[0] !== i.id
        ? ((m = i.id.toString()), (t[0] = i.id), (t[1] = m))
        : (m = t[1]);
      var p = r("useWAWebActiveSelection")(c, m),
        _ = p[0],
        f = p[1],
        g;
      t[2] !== i.formattedTitle
        ? ((g = s._(/*BTDS*/ "{subgroup-name}", [
            s._param("subgroup-name", i.formattedTitle),
          ])),
          (t[2] = i.formattedTitle),
          (t[3] = g))
        : (g = t[3]);
      var h = g,
        y;
      t[4] !== e.type || t[5] !== i
        ? ((y = function (n) {
            (n.preventDefault(), d(i, e.type));
          }),
          (t[4] = e.type),
          (t[5] = i),
          (t[6] = y))
        : (y = t[6]);
      var C = y,
        b;
      t[7] !== C
        ? ((b = o("WAWebCommunityCells.react").mapHandlers(C)),
          (t[7] = C),
          (t[8] = b))
        : (b = t[8]);
      var v;
      t[9] !== h ? ((v = h.toString()), (t[9] = h), (t[10] = v)) : (v = t[10]);
      var S;
      t[11] !== i.id
        ? ((S = i.id.toString()), (t[11] = i.id), (t[12] = S))
        : (S = t[12]);
      var R = !l,
        L = a === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
        E;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = o("WAWebABProps").getABPropConfigValue(
            "wa_web_show_status_ring_for_no_unread",
          )),
          (t[13] = E))
        : (E = t[13]);
      var k;
      t[14] !== f ||
      t[15] !== C ||
      t[16] !== i ||
      t[17] !== S ||
      t[18] !== R ||
      t[19] !== L
        ? ((k = u.jsx(
            o("WAWebChat.react").Chat,
            {
              chat: i,
              theme: "subgroup",
              mode: o("WAWebChat.react").Mode.LAST,
              ephemeralIcon: "chat-list",
              hiddenSubgroupIcon: "chat-list",
              onClick: C,
              noContext: !0,
              smallUnread: R,
              hidePin: !0,
              fakePin: L,
              hideArchivedIcon: !0,
              forceActive: f,
              overrideCommunityAnnouncementGroupName: !0,
              showSpeakerForCag: !0,
              showStatusRingAroundProfilePhoto: E,
            },
            S,
          )),
          (t[14] = f),
          (t[15] = C),
          (t[16] = i),
          (t[17] = S),
          (t[18] = R),
          (t[19] = L),
          (t[20] = k))
        : (k = t[20]);
      var I;
      return (
        t[21] !== _ || t[22] !== k || t[23] !== b || t[24] !== v
          ? ((I = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: _,
              handlers: b,
              "aria-label": v,
              role: "button",
              children: k,
            })),
            (t[21] = _),
            (t[22] = k),
            (t[23] = b),
            (t[24] = v),
            (t[25] = I))
          : (I = t[25]),
        I
      );
    }
    ((l.handleJoinedSubgroupClick = d), (l.CommunityHomeJoinedSubgroups = m));
  },
  226,
);
