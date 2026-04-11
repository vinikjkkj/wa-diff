__d(
  "WAWebCommunityFlow.react",
  [
    "$InternalEnum",
    "WANullthrows",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebCmd",
    "WAWebCommunityActivityCollection",
    "WAWebCommunityActivityModel",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebCommunityCreationFlowMetricUtils",
    "WAWebCommunityDailyUtils",
    "WAWebCommunityHomeWrapper.react",
    "WAWebCommunitySettingsDrawer.react",
    "WAWebCommunitySubgroupSuggestionsDrawer.react",
    "WAWebCommunityTabDrawer.react",
    "WAWebCommunityTabbedInfoDrawer.react",
    "WAWebCommunityTransferOwnershipFlowLoadable.react",
    "WAWebComposeBoxActions",
    "WAWebDeactivateCommunityDrawerLoadable",
    "WAWebDrawerManager",
    "WAWebEventInfoFlowLoadable",
    "WAWebEventsInChatDrawer.react",
    "WAWebFindChatAction",
    "WAWebGroupInviteLinkDrawerLoadable",
    "WAWebGroupMetadataCollection",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebLimitSharingDrawer.react",
    "WAWebManageCommunityGroupsFlowLoadable",
    "WAWebNewCommunityInfoDrawer.react",
    "WAWebNewGroupFlow.react",
    "WAWebNewGroupFlowLoadable",
    "WAWebNewSubgroupSuggestionFlow.react",
    "WAWebUserPrefsMultiDevice",
    "WAWebWallpaperDrawer.react",
    "WAWebWamEnumCommunityCreationCurrentScreenType",
    "WAWebWamEnumCommunityCreationEntrypointType",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebFlow",
    "useWAWebParticipatingCommunities",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = n("$InternalEnum").Mirrored([
        "CommunityTab",
        "CommunityHome",
        "NewCommunityFlow",
        "ManageGroupsFlow",
        "InviteMembersFlow",
        "NewGroupFlow",
        "DeactivateCommunityFlow",
        "CommunitySettings",
        "MediaGallery",
        "StarredMessages",
        "KeptMessages",
        "PendingGroups",
        "Ephemeral",
        "AllEvents",
        "AllCommunityEvents",
        "Wallpaper",
        "EventInfo",
        "TransferOwnershipFlow",
        "LimitSharing",
      ]);
    function f(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.onBack,
        s = i.initialStep,
        c = s === void 0 ? _.CommunityTab : s,
        f = i.jid,
        g = i.hasFetchedSubgroups,
        h = i.homeTheme,
        y = i.scrollToMemberList,
        C = i.showFullDescription,
        b = i.initialTab,
        v =
          b === void 0
            ? o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs
                .Community
            : b,
        S = m(!0),
        R = m(v),
        L = m(0),
        E = function () {
          if (c === _.CommunityTab) {
            S.current &&
              o("WAWebCommunityDailyUtils").incrementCommunityTabEvent(
                o("WAWebCommunityDailyUtils").CommunityDailyTabMetricsType
                  .NO_ACTION_TAB_VIEWS,
              );
            var e = r("WAWebCommunityActivityCollection").filter(function (e) {
              return (
                e.type ===
                o("WAWebCommunityActivityModel").ActivityTypeType.NEW_COMMUNITY
              );
            });
            r("WAWebCommunityActivityCollection").remove(e);
          }
          l ? l() : o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
        },
        k = o("useWAWebFlow").useFlow(c, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: E,
        }),
        I = k[0],
        T = k[1],
        D = p(),
        x = D[0],
        $ = D[1],
        P = p(),
        N = P[0],
        M = P[1],
        w = {
          onBack: function () {
            return T.pop();
          },
          onManageCommunityGroupsClick: function () {
            return T.push(_.ManageGroupsFlow);
          },
          onInviteMembersClick: function () {
            return T.push(_.InviteMembersFlow);
          },
          onDeactivateCommunity: function () {
            return T.push(_.DeactivateCommunityFlow);
          },
          onTransferOwnership: function () {
            return T.push(_.TransferOwnershipFlow);
          },
          onAddNewGroupClick: function () {
            return T.push(_.NewGroupFlow);
          },
          onCommunitySettingsClick: function () {
            return T.push(_.CommunitySettings);
          },
          onMediaGalleryClick: function () {
            return T.push(_.MediaGallery);
          },
          onStarredMessagesClick: function () {
            return T.push(_.StarredMessages);
          },
          onKeptMessagesClick: function () {
            return T.push(_.KeptMessages);
          },
          onTabSwitch: function (t) {
            R.current = t;
          },
          onPendingGroupsClick: function () {
            return T.push(_.PendingGroups);
          },
          onEphemeralClick: function () {
            return T.push(_.Ephemeral);
          },
          onLimitSharingClick: function (t) {
            ($(t), T.push(_.LimitSharing));
          },
          onAllEventsClick: function (t) {
            var e;
            if (
              ((e = t.groupMetadata) == null ? void 0 : e.isParentGroup) === !0
            ) {
              T.push(_.AllCommunityEvents);
              return;
            }
            ($(t), T.push(_.AllEvents));
          },
          onWallpaperClick: function () {
            return T.push(_.Wallpaper);
          },
          onEventInfoClick: function (t, n) {
            (M({ eventMsg: t, eventMsgChat: n }), T.push(_.EventInfo));
          },
        },
        A = r("useWAWebParticipatingCommunities")(),
        F = p(f),
        O = F[0],
        B = F[1],
        W = r("useWAWebUnmountSignal")(),
        q =
          h ===
          o("WAWebCommunityHomeWrapper.react").CommunityHomeTheme.TabbedInfo;
      d(function () {
        c === _.CommunityTab &&
          (o("WAWebUserPrefsMultiDevice").setCommunityTabLastSeenTimestamp(
            o("WATimeUtils").unixTime(),
          ),
          r("WAWebCommunityActivityCollection").trigger("community_tab_view"));
      }, []);
      function U(e) {
        return V.apply(this, arguments);
      }
      function V() {
        return (
          (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield e;
            (T.pop(),
              t != null &&
                !W.aborted &&
                o("WAWebFindChatAction")
                  .findOrCreateLatestChat(t, "communityTabFlow")
                  .then(function (e) {
                    var t = e.chat;
                    o("WAWebCmd")
                      .Cmd.openChatBottom({ chat: t })
                      .then(function (e) {
                        e &&
                          o("WAWebComposeBoxActions").ComposeBoxActions.focus(
                            t,
                          );
                      });
                  }));
          })),
          V.apply(this, arguments)
        );
      }
      function H(e, t) {
        w.onEventInfoClick(e, t);
      }
      if (T.step == null) return null;
      var G;
      switch (T.step) {
        case _.CommunityTab: {
          G = u.jsx(r("WAWebCommunityTabDrawer.react"), {
            parentGroups: A,
            onBack: E,
            onNewCommunity: function () {
              ((S.current = !1),
                T.push(_.NewCommunityFlow),
                o(
                  "WAWebCommunityCreationFlowMetricUtils",
                ).UiCommunityCreationAction.startSession(
                  o("WAWebWamEnumCommunityCreationEntrypointType")
                    .COMMUNITY_CREATION_ENTRYPOINT_TYPE.COMMUNITIES_TAB,
                ),
                o(
                  "WAWebCommunityCreationFlowMetricUtils",
                ).UiCommunityCreationAction.enter(
                  o("WAWebWamEnumCommunityCreationCurrentScreenType")
                    .COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITIES_TAB,
                ));
            },
            onActivityCell: function (t) {
              (B(t), T.push(_.CommunityHome));
            },
            onCommunityHome: function (t) {
              var e;
              ((R.current = o(
                "WAWebCommunityTabbedInfoDrawer.react",
              ).CommunityInfoTabs.Community),
                (S.current = !1),
                (e = o("WAWebCommunityDailyUtils")).incrementCommunityTabEvent(
                  e.CommunityDailyTabMetricsType.TAB_TO_HOME_VIEWS,
                ),
                e.incrementCommunityHomeEvent(
                  t,
                  e.CommunityDailyHomeMetricsType.HOME_VIEWS,
                ),
                B(t),
                T.push(_.CommunityHome));
            },
            initialScrollTop: L.current,
            setScrollTop: function (t) {
              L.current = t;
            },
          });
          break;
        }
        case _.CommunityHome: {
          var z = r("WANullthrows")(O, "selected community is null"),
            j = {};
          (h ===
            o("WAWebCommunityHomeWrapper.react").CommunityHomeTheme
              .TabbedInfo &&
            (j = {
              theme: o("WAWebCommunityHomeWrapper.react").CommunityHomeTheme
                .TabbedInfo,
              initialTab: R.current,
              showFullDescription: C,
              scrollToMemberList: y,
            }),
            (G = u.jsx(
              o("WAWebCommunityHomeWrapper.react").CommunityHomeWrapper,
              babelHelpers.extends(
                {
                  jid: z,
                  callbacks: w,
                  hasFetchedSubgroups: g,
                  theme: o("WAWebCommunityHomeWrapper.react").CommunityHomeTheme
                    .Navigation,
                },
                j,
              ),
            )));
          break;
        }
        case _.NewCommunityFlow: {
          G = u.jsx(r("WAWebNewCommunityInfoDrawer.react"), {
            onBack: function () {
              return T.pop();
            },
          });
          break;
        }
        case _.DeactivateCommunityFlow: {
          var K = r("WANullthrows")(O),
            Q = o("WAWebChatCollection").ChatCollection.get(K);
          if (Q == null) {
            T.end();
            break;
          }
          G = u.jsx(
            o("WAWebDeactivateCommunityDrawerLoadable")
              .DeactivateCommunityDrawerLoadable,
            {
              onBack: function () {
                return T.pop();
              },
              chat: Q,
            },
          );
          break;
        }
        case _.ManageGroupsFlow: {
          var X = r("WANullthrows")(O),
            Y = r("WAWebGroupMetadataCollection").assertGet(X);
          G = u.jsx(
            o("WAWebManageCommunityGroupsFlowLoadable")
              .ManageCommunityGroupsFlowLoadable,
            {
              parentGroupMetadata: Y,
              onBack: function () {
                return T.pop();
              },
              fromInfo: q,
            },
          );
          break;
        }
        case _.InviteMembersFlow: {
          var J = r("WANullthrows")(O),
            Z = o("WAWebChatCollection").ChatCollection.assertGet(J);
          G = u.jsx(
            o("WAWebGroupInviteLinkDrawerLoadable")
              .GroupInviteLinkDrawerLoadable,
            {
              chat: Z,
              groupMetadata: r("WANullthrows")(Z.groupMetadata),
              onBack: function () {
                return T.pop();
              },
              fromInfo: q,
              isCommunity: !0,
            },
          );
          break;
        }
        case _.NewGroupFlow: {
          var ee = r("WANullthrows")(O);
          o("WAWebChatCommunityUtils").isSubgroupSuggestionCreation(ee)
            ? (G = u.jsx(
                o("WAWebNewSubgroupSuggestionFlow.react")
                  .NewSubgroupSuggestionFlow,
                {
                  parentGroup: ee,
                  onBack: function () {
                    return T.pop();
                  },
                  onEnd: E,
                },
              ))
            : (G = u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
                onCreateGroup: U,
                parentGroupWid: ee,
                onEnd: function () {
                  return T.pop();
                },
                initialStep: o("WAWebNewGroupFlow.react").NewGroupFlowStep
                  .SET_GROUP_INFO_DRAWER,
                shortenedCreationFlow: !0,
              }));
          break;
        }
        case _.CommunitySettings: {
          var te = r("WANullthrows")(O),
            ne = o("WAWebChatCollection").ChatCollection.assertGet(te);
          G = u.jsx(r("WAWebCommunitySettingsDrawer.react"), {
            chat: ne,
            onBack: function () {
              return T.pop();
            },
            fromInfo: q,
          });
          break;
        }
        case _.MediaGallery:
        case _.StarredMessages:
        case _.Ephemeral:
        case _.KeptMessages: {
          var re = r("WANullthrows")(O),
            oe = o("WAWebChatCollection").ChatCollection.assertGet(re),
            ae = o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroup(oe.groupMetadata),
            ie = o("WAWebChatCollection").ChatCollection.assertGet(
              r("WANullthrows")(ae == null ? void 0 : ae.id),
            ),
            le;
          (T.step === _.MediaGallery
            ? (le = o("WAWebInfoFlowStep").InfoFlowStep.MediaGallery)
            : T.step === _.StarredMessages
              ? (le = o("WAWebInfoFlowStep").InfoFlowStep.Starred)
              : T.step === _.Ephemeral
                ? (le = o("WAWebInfoFlowStep").InfoFlowStep.Ephemeral)
                : (le = o("WAWebInfoFlowStep").InfoFlowStep.Kept),
            (G = u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
              chat: ie,
              initialStep: le,
              onEnd: function () {
                return T.pop();
              },
            })));
          break;
        }
        case _.PendingGroups: {
          var se = r("WANullthrows")(O),
            ue = o("WAWebChatCollection").ChatCollection.assertGet(se);
          G = u.jsx(r("WAWebCommunitySubgroupSuggestionsDrawer.react"), {
            chat: ue,
            onBack: function () {
              T.pop();
            },
            callbacks: w,
          });
          break;
        }
        case _.AllEvents: {
          var ce = r("WANullthrows")(x);
          G = u.jsx(r("WAWebEventsInChatDrawer.react"), {
            chat: ce,
            onBack: function () {
              return T.pop();
            },
            onEventClick: H,
            onCommunityEventsClick: function () {
              var e = r("WANullthrows")(O);
              w.onAllEventsClick(
                o("WAWebChatCollection").ChatCollection.assertGet(e),
              );
            },
          });
          break;
        }
        case _.AllCommunityEvents: {
          var de = r("WANullthrows")(O),
            me = o("WAWebChatCollection").ChatCollection.assertGet(de);
          G = u.jsx(r("WAWebEventsInChatDrawer.react"), {
            chat: me,
            onBack: function () {
              return T.pop();
            },
            onEventClick: H,
          });
          break;
        }
        case _.Wallpaper: {
          var pe = r("WANullthrows")(O),
            _e = o("WAWebChatCollection").ChatCollection.assertGet(pe),
            fe = o(
              "WAWebCommunityAnnouncementGroupUtils",
            ).getCommunityAnnouncementGroup(_e.groupMetadata),
            ge = o("WAWebChatCollection").ChatCollection.assertGet(
              r("WANullthrows")(fe == null ? void 0 : fe.id),
            );
          G = u.jsx(r("WAWebWallpaperDrawer.react"), {
            chat: ge,
            onClose: function () {
              return T.pop();
            },
          });
          break;
        }
        case _.EventInfo: {
          var he = r("WANullthrows")(N),
            ye = he.eventMsg,
            Ce = he.eventMsgChat;
          G = u.jsx(o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable, {
            chat: Ce,
            msg: ye,
            onBack: function () {
              return T.pop();
            },
          });
          break;
        }
        case _.TransferOwnershipFlow: {
          var be = r("WANullthrows")(O),
            ve = o("WAWebChatCollection").ChatCollection.get(be);
          if (ve == null) {
            T.end();
            break;
          }
          G = u.jsx(
            o("WAWebCommunityTransferOwnershipFlowLoadable.react")
              .CommunityTransferOwnershipFlowLoadable,
            {
              parentGroupChat: ve,
              onEnd: function () {
                return T.pop();
              },
            },
          );
          break;
        }
        case _.LimitSharing: {
          var Se = r("WANullthrows")(x);
          if (Se == null) {
            T.end();
            break;
          }
          G = u.jsx(r("WAWebLimitSharingDrawer.react"), {
            chat: Se,
            onClose: function () {
              return T.pop();
            },
          });
        }
      }
      return u.jsx(I, {
        flow: T,
        ref: a,
        displayName: "CommunityFlow",
        children: G,
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.CommunityFlowStep = _),
      (l.CommunityFlow = f));
  },
  98,
);
