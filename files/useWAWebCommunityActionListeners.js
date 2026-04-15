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
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      var e = o("react-compiler-runtime").c(12),
        t = r("useWAWebUIM")(),
        n;
      e[0] !== t
        ? ((n = function (n, r) {
            (o("WAWebCommunityDailyUtils").incrementCommunityHomeEvent(
              n,
              o("WAWebCommunityDailyUtils").CommunityDailyHomeMetricsType
                .HOME_VIEWS,
            ),
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                s.jsx(
                  o("WAWebCommunityFlowLoadable").CommunityFlowLoadable,
                  {
                    jid: n,
                    hasFetchedSubgroups: r,
                    initialStep: o("WAWebCommunityFlow.react").CommunityFlowStep
                      .CommunityHome,
                  },
                  "community-nav-" + n.toString(),
                ),
                {
                  transition: "slide-left",
                  uim: t,
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                },
              ));
          }),
          (e[0] = t),
          (e[1] = n))
        : (n = e[1]);
      var a = n,
        i;
      e[2] !== t
        ? ((i = function (n, r, a, i) {
            var e =
              r === void 0
                ? o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs
                    .Community
                : r;
            (o("WAWebCommunityDailyUtils").incrementCommunityHomeEvent(
              n,
              o("WAWebCommunityDailyUtils").CommunityDailyHomeMetricsType
                .HOME_VIEWS,
            ),
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                s.jsx(
                  o("WAWebCommunityFlowLoadable").CommunityFlowLoadable,
                  {
                    jid: n,
                    initialStep: o("WAWebCommunityFlow.react").CommunityFlowStep
                      .CommunityHome,
                    initialTab: e,
                    homeTheme: o("WAWebCommunityHomeWrapper.react")
                      .CommunityHomeTheme.TabbedInfo,
                    scrollToMemberList: i,
                    showFullDescription: a,
                    onBack: d,
                  },
                  "community-info-" + n.toString(),
                ),
                {
                  transition: "slide-left",
                  uim: t,
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                },
              ));
          }),
          (e[2] = t),
          (e[3] = i))
        : (i = e[3]);
      var l = i,
        u;
      e[4] !== t
        ? ((u = function (n) {
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              s.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {
                jid: n,
                initialStep: o("WAWebCommunityFlow.react").CommunityFlowStep
                  .PendingGroups,
                onBack: function () {
                  o("WAWebCmd").Cmd.openCommunityHome(n);
                },
              }),
              {
                transition: "slide-left",
                uim: t,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            );
          }),
          (e[4] = t),
          (e[5] = u))
        : (u = e[5]);
      var m = u,
        p;
      e[6] !== a
        ? ((p = function (t) {
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
          }),
          (e[6] = a),
          (e[7] = p))
        : (p = e[7]);
      var _ = p,
        f;
      e[8] !== a
        ? ((f = function (t) {
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
          }),
          (e[8] = a),
          (e[9] = f))
        : (f = e[9]);
      var g = f,
        h;
      e[10] !== a
        ? ((h = function (t, n, r) {
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
              : (e = s.jsx(
                  o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable,
                  {
                    onCreateGroup: n,
                    parentGroupWid: t,
                    onEnd: function () {
                      return a(t, !1);
                    },
                    initialSelectedSubgroup: r,
                    initialStep: o("WAWebNewGroupFlow.react").NewGroupFlowStep
                      .SET_GROUP_INFO_DRAWER,
                    shortenedCreationFlow: !0,
                  },
                )),
              o("WAWebDrawerManager").DrawerManager.openDrawerLeft(e, {
                transition: "flow-transition-drawer-push",
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              }));
          }),
          (e[10] = a),
          (e[11] = h))
        : (h = e[11]);
      var y = h,
        C = c;
      (o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "open_subgroup_join_modal",
        C,
      ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_community_home",
          a,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_community_tabbed_info",
          l,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_community_pending_groups_drawer",
          m,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_community_home_manage_groups",
          _,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_community_add_new_group",
          y,
        ),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "open_community_settings_drawer",
          g,
        ));
    }
    function c(e, t) {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(r("WAWebSubgroupJoinModal.react"), {
          subgroupMetadata: e,
          onSuccess: r("WAWebNoop"),
          source: t,
        }),
      );
    }
    function d() {
      o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
    }
    l.default = u;
  },
  98,
);
