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
      var t = e.data,
        n = t.groupType,
        a = t.subChat,
        i = e.mini,
        l = r("useWAWebActiveSelection")(e.active, a.id.toString()),
        c = l[0],
        m = l[1],
        p = s._(/*BTDS*/ "{subgroup-name}", [
          s._param("subgroup-name", a.formattedTitle),
        ]),
        _ = function (n) {
          (n.preventDefault(), d(a, e.type));
        };
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: c,
        handlers: o("WAWebCommunityCells.react").mapHandlers(_),
        "aria-label": p.toString(),
        role: "button",
        children: u.jsx(
          o("WAWebChat.react").Chat,
          {
            chat: a,
            theme: "subgroup",
            mode: o("WAWebChat.react").Mode.LAST,
            ephemeralIcon: "chat-list",
            hiddenSubgroupIcon: "chat-list",
            onClick: _,
            noContext: !0,
            smallUnread: !i,
            hidePin: !0,
            fakePin:
              n === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP,
            hideArchivedIcon: !0,
            forceActive: m,
            overrideCommunityAnnouncementGroupName: !0,
            showSpeakerForCag: !0,
            showStatusRingAroundProfilePhoto: o(
              "WAWebABProps",
            ).getABPropConfigValue("wa_web_show_status_ring_for_no_unread"),
          },
          a.id.toString(),
        ),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.handleJoinedSubgroupClick = d),
      (l.CommunityHomeJoinedSubgroups = m));
  },
  226,
);
