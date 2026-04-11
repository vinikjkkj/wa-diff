__d(
  "WAWebManageCommunityGroupsFlow.react",
  [
    "$InternalEnum",
    "WANullthrows",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebCmd",
    "WAWebCommunityExistingGroupsConfirmationDrawer.react",
    "WAWebCommunityExistingGroupsDrawer.react",
    "WAWebCommunityHomeGroupsManager.react",
    "WAWebCommunitySettingsDrawer.react",
    "WAWebComposeBoxActions",
    "WAWebCreateSubgroupSuggestionAction",
    "WAWebDrawerManager",
    "WAWebExistingGroupPermissionsDrawer.react",
    "WAWebFindChatAction",
    "WAWebLinkSubgroupsAction",
    "WAWebNewGroupFlow.react",
    "WAWebNewGroupFlowLoadable",
    "WAWebNewGroupPermissionsDrawer.react",
    "WAWebNewSubgroupSuggestionFlowLoadable",
    "WAWebUiActionWamEvent",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumUiActionType",
    "WAWebWamPrivateStatsUtils",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebCallbackOnce",
    "useWAWebCommunitySubgroups",
    "useWAWebFlow",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = n("$InternalEnum").Mirrored([
        "GROUPS_MANAGER",
        "NEW_GROUP",
        "EXISTING_GROUP",
        "COMMUNITY_SETTINGS",
        "GROUP_PERMISSIONS_DRAWER",
        "NEW_GROUP_PERMISSIONS_DRAWER",
        "EXISTING_GROUPS_CONFIRMATION_DRAWER",
      ]);
    function m(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.parentGroupMetadata,
        s = i.fromInfo,
        m = s === void 0 ? !1 : s,
        p = i.onBack,
        _ = i.existingGroupsToBeLinked,
        f = _ === void 0 ? [] : _,
        g = r("useWAWebCommunitySubgroups")(l),
        h = g.joinedSubgroups,
        y = g.subgroupCount,
        C = g.unjoinedSubgroups,
        b = o("WAWebChatCommunityUtils").isSubgroupSuggestionCreation(l.id),
        v = r("useWAWebUnmountSignal")(),
        S = r("useWAWebCallbackOnce")(function () {
          p ? p() : o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
        }),
        R = c(!0),
        L = R[0],
        E = R[1],
        k = c(!0),
        I = k[0],
        T = k[1],
        D = c(!0),
        x = D[0],
        $ = D[1],
        P = c(!1),
        N = P[0],
        M = P[1],
        w = c(!0),
        A = w[0],
        F = w[1],
        O = c(!1),
        B = O[0],
        W = O[1],
        q = c(f),
        U = q[0],
        V = q[1],
        H = c(),
        G = H[0],
        z = H[1],
        j = f.length > 0,
        K = o("useWAWebFlow").useFlow(
          j ? d.EXISTING_GROUPS_CONFIRMATION_DRAWER : d.GROUPS_MANAGER,
          {
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
            onEnd: S,
          },
        ),
        Q = K[0],
        X = K[1];
      function Y(e) {
        return J.apply(this, arguments);
      }
      function J() {
        return (
          (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = yield e;
            (X.pop(),
              t != null &&
                !v.aborted &&
                o("WAWebFindChatAction")
                  .findOrCreateLatestChat(t, "communityGroupsFlow")
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
          J.apply(this, arguments)
        );
      }
      function Z(e) {
        return ee.apply(this, arguments);
      }
      function ee() {
        return (
          (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = new Set([].concat(C, h)),
              n = e
                .filter(function (e) {
                  return !t.has(e.id);
                })
                .map(function (e) {
                  return e.id;
                });
            if (n.length)
              if (!l.participants.iAmAdmin())
                yield o(
                  "WAWebCreateSubgroupSuggestionAction",
                ).createExistingGroupsSubgroupSuggestionsAction(l.id, n, S, S);
              else {
                var a = !!l.isLidAddressingMode,
                  i = new (o("WAWebUiActionWamEvent").UiActionWamEvent)({
                    uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE
                      .COMMUNITY_LINK,
                    uiActionPreloaded: !1,
                    isLid: a,
                  });
                (yield r("WAWebLinkSubgroupsAction")(l.id, n).then(function () {
                  (i.markUiActionT(),
                    i.commit(),
                    o(
                      "WAWebWamPrivateStatsUtils",
                    ).logUiActionShadowPrivateStatsTestEvents());
                }),
                  S(),
                  j && o("WAWebCmd").Cmd.openCommunityHome(l.id));
              }
            V([]);
          })),
          ee.apply(this, arguments)
        );
      }
      if (X.step == null) return null;
      var te;
      switch (X.step) {
        case d.GROUPS_MANAGER:
          te = u.jsx(r("WAWebCommunityHomeGroupsManager.react"), {
            joinedSubgroups: h,
            unjoinedSubgroups: C,
            currentSubgroupCount: y,
            fromInfo: m,
            onBack: S,
            onNewGroupFlow: function () {
              return X.push(d.NEW_GROUP);
            },
            onExistingGroupFlow: function () {
              return X.push(d.EXISTING_GROUP);
            },
            onCommunitySettingsClick: function () {
              return X.push(d.COMMUNITY_SETTINGS);
            },
            parentId: l.id,
          });
          break;
        case d.NEW_GROUP: {
          b
            ? (te = u.jsx(
                o("WAWebNewSubgroupSuggestionFlowLoadable")
                  .NewSubgroupSuggestionFlowLoadable,
                {
                  parentGroup: l.id,
                  onBack: function () {
                    return X.pop();
                  },
                  onEnd: S,
                },
              ))
            : (te = u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
                onCreateGroup: Y,
                onEnd: function () {
                  return X.pop();
                },
                parentGroupWid: l.id,
                initialStep: o("WAWebNewGroupFlow.react").NewGroupFlowStep
                  .SET_GROUP_INFO_DRAWER,
                shortenedCreationFlow: !0,
              }));
          break;
        }
        case d.EXISTING_GROUP: {
          var ne = l.isParentGroupClosed === !0,
            re =
              l == null
                ? void 0
                : l.getSubgroupSuggestions().reduce(function (e, t) {
                    return (
                      o("WAWebUserPrefsMeUser").isMeAccount(t.owner) &&
                        e.push(t.groupId),
                      e
                    );
                  }, []);
          te = u.jsx(r("WAWebCommunityExistingGroupsDrawer.react"), {
            onBack: function () {
              return X.pop();
            },
            fromInfo: m,
            onSubmit: Z,
            communityName: l.subject,
            isCommunityAdmin: l.participants.iAmAdmin(),
            onContinue: function () {
              return X.push(d.EXISTING_GROUPS_CONFIRMATION_DRAWER);
            },
            onCreateNewGroup: function () {
              return X.push(d.NEW_GROUP);
            },
            currentSubgroupCount: y,
            isParentGroupClosed: ne,
            groupsSuggestedByMeToCommunity: re,
            flowSelectedGroups: U,
            setFlowSelectedGroups: V,
          });
          break;
        }
        case d.COMMUNITY_SETTINGS: {
          var oe = o("WAWebChatCollection").ChatCollection.assertGet(l.id);
          te = u.jsx(r("WAWebCommunitySettingsDrawer.react"), {
            chat: oe,
            onBack: function () {
              return X.pop();
            },
          });
          break;
        }
        case d.GROUP_PERMISSIONS_DRAWER: {
          var ae = o("WAWebChatCollection").ChatCollection.assertGet(
            r("WANullthrows")(G),
          );
          te = u.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
            chat: ae,
            groupLinkingFlow: !0,
            groupMetadata: r("WANullthrows")(ae.groupMetadata),
            onClose: function () {
              return X.pop();
            },
          });
          break;
        }
        case d.NEW_GROUP_PERMISSIONS_DRAWER: {
          te = u.jsx(r("WAWebNewGroupPermissionsDrawer.react"), {
            onBack: function () {
              return X.pop();
            },
            restrict: L,
            setRestrict: E,
            announce: I,
            setAnnounce: T,
            membershipApprovalMode: B,
            setMembershipApprovalMode: W,
            memberAddMode: x,
            setMemberAddMode: $,
            memberLinkMode: N,
            setMemberLinkMode: M,
            memberShareGroupHistoryMode: A,
            setMemberShareGroupHistoryMode: F,
          });
          break;
        }
        case d.EXISTING_GROUPS_CONFIRMATION_DRAWER: {
          var ie = l.isParentGroupClosed === !0;
          te = u.jsx(
            r("WAWebCommunityExistingGroupsConfirmationDrawer.react"),
            {
              onBack: function () {
                return X.pop();
              },
              onGroupPermissions: function (t) {
                (z(t), X.push(d.GROUP_PERMISSIONS_DRAWER));
              },
              isParentGroupClosed: ie,
              isCommunityAdmin: l.participants.iAmAdmin(),
              onSubmit: Z,
              selectedGroups: U,
              communityName: l.subject,
              parentGroupId: l.id,
            },
          );
        }
      }
      return u.jsx(Q, { flow: X, ref: a, children: te });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
