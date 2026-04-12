__d(
  "useWAWebCommunityActionListeners",
  [
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebCmd",
    "WAWebCommunityDailyUtils",
    "WAWebCommunityFlow.react",
    "WAWebCommunityFlowLoadable",
    "WAWebCommunityHomeWrapper.react",
    "WAWebCommunitySettingsDrawer.react",
    "WAWebCommunityTabbedInfoDrawer.react",
    "WAWebDrawerManager",
    "WAWebGroupMetadataCollection",
    "WAWebKeyboardTabUtils",
    "WAWebManageCommunityGroupsFlowLoadable",
    "WAWebModalManager",
    "WAWebNewGroupFlow.react",
    "WAWebNewGroupFlowLoadable",
    "WAWebNewSubgroupSuggestionFlowLoadable",
    "WAWebNoop",
    "WAWebSubgroupJoinModal.react",
    "react",
    "useWAWebListener",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e,
        t,
        n = r("useWAWebUIM")(),
        a = function (t, r) {
          (o("WAWebCommunityDailyUtils").incrementCommunityHomeEvent(
            t,
            o("WAWebCommunityDailyUtils").CommunityDailyHomeMetricsType
              .HOME_VIEWS,
          ),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              s.jsx(
                o("WAWebCommunityFlowLoadable").CommunityFlowLoadable,
                {
                  jid: t,
                  hasFetchedSubgroups: r,
                  initialStep: o("WAWebCommunityFlow.react").CommunityFlowStep
                    .CommunityHome,
                },
                "community-nav-" + t.toString(),
              ),
              {
                transition: "slide-left",
                uim: n,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            ));
        },
        i = function (t, r, a, i) {
          (r === void 0 &&
            (r = o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs
              .Community),
            o("WAWebCommunityDailyUtils").incrementCommunityHomeEvent(
              t,
              o("WAWebCommunityDailyUtils").CommunityDailyHomeMetricsType
                .HOME_VIEWS,
            ),
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              s.jsx(
                o("WAWebCommunityFlowLoadable").CommunityFlowLoadable,
                {
                  jid: t,
                  initialStep: o("WAWebCommunityFlow.react").CommunityFlowStep
                    .CommunityHome,
                  initialTab: r,
                  homeTheme: o("WAWebCommunityHomeWrapper.react")
                    .CommunityHomeTheme.TabbedInfo,
                  scrollToMemberList: i,
                  showFullDescription: a,
                  onBack: function () {
                    o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
                  },
                },
                "community-info-" + t.toString(),
              ),
              {
                transition: "slide-left",
                uim: n,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            ));
        },
        l = function (t) {
          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            s.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {
              jid: t,
              initialStep: o("WAWebCommunityFlow.react").CommunityFlowStep
                .PendingGroups,
              onBack: function () {
                o("WAWebCmd").Cmd.openCommunityHome(t);
              },
            }),
            {
              transition: "slide-left",
              uim: n,
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            },
          );
        },
        u = function (t) {
          o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
            s.jsx(
              o("WAWebManageCommunityGroupsFlowLoadable")
                .ManageCommunityGroupsFlowLoadable,
              {
                parentGroupMetadata: r(
                  "WAWebGroupMetadataCollection",
                ).assertGet(t),
                onBack: function () {
                  return a(t, !1);
                },
              },
            ),
          );
        },
        c = function (t) {
          var e,
            n = o("WAWebChatCollection").ChatCollection.get(t);
          !n ||
            !((e = n.groupMetadata) != null && e.hasJoined()) ||
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              s.jsx(r("WAWebCommunitySettingsDrawer.react"), {
                chat: n,
                onBack: function () {
                  return a(t, !1);
                },
              }),
              {
                transition: "flow-transition-drawer-push",
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            );
        },
        d = function (t, n, r) {
          var e;
          (o("WAWebChatCommunityUtils").isSubgroupSuggestionCreation(t)
            ? (e = s.jsx(
                o("WAWebNewSubgroupSuggestionFlowLoadable")
                  .NewSubgroupSuggestionFlowLoadable,
                {
                  parentGroup: t,
                  onBack: function () {
                    return a(t, !1);
                  },
                },
              ))
            : (e = s.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
                onCreateGroup: n,
                parentGroupWid: t,
                onEnd: function () {
                  return a(t, !1);
                },
                initialSelectedSubgroup: r,
                initialStep: o("WAWebNewGroupFlow.react").NewGroupFlowStep
                  .SET_GROUP_INFO_DRAWER,
                shortenedCreationFlow: !0,
              })),
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(e, {
              transition: "flow-transition-drawer-push",
              focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
            }));
        },
        m = function (t, n) {
          o("WAWebModalManager").ModalManager.open(
            s.jsx(r("WAWebSubgroupJoinModal.react"), {
              subgroupMetadata: t,
              onSuccess: r("WAWebNoop"),
              source: n,
            }),
          );
        };
      ((e = o("useWAWebListener")).useListener(
        (t = o("WAWebCmd")).Cmd,
        "open_subgroup_join_modal",
        m,
      ),
        e.useListener(t.Cmd, "open_community_home", a),
        e.useListener(t.Cmd, "open_community_tabbed_info", i),
        e.useListener(t.Cmd, "open_community_pending_groups_drawer", l),
        e.useListener(t.Cmd, "open_community_home_manage_groups", u),
        e.useListener(t.Cmd, "open_community_add_new_group", d),
        e.useListener(t.Cmd, "open_community_settings_drawer", c));
    }
    l.default = u;
  },
  98,
);
