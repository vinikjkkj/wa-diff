__d(
  "WAWebUpdateModelForGroupAction",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAfterReadUtils",
    "WAWebApiContact",
    "WAWebBackendRuntime",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatReadService",
    "WAWebChatSeenBridge",
    "WAWebCommunityActivityCollection",
    "WAWebCommunityActivityModel",
    "WAWebCommunitySubgroupSuggestionsUtils",
    "WAWebEphemeralityUtils",
    "WAWebGroupAgentMembershipRequests",
    "WAWebGroupGatingUtils",
    "WAWebGroupGetMembershipApprovalRequestsJob",
    "WAWebGroupMembershipRequestsService",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebInvalidateEventsAction",
    "WAWebLeaveReasonType",
    "WAWebNux",
    "WAWebNuxAction",
    "WAWebPollsInvalidateChatPollMsgsAction",
    "WAWebRemoveFromFavoritesAction",
    "WAWebUpdateModelsForCommunityAction",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "compactMap",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormMemberTagAction",
      ).__setRef("WAWebUpdateModelForGroupAction");
    function g(t, a) {
      var i = t.chatId,
        l = o("WAWebChatCollection").ChatCollection.get(i);
      if (!l) return (_ || (_ = n("Promise"))).resolve();
      var g = r("nullthrows")(l.groupMetadata),
        y = t.author,
        C = t.ts;
      switch (a.actionType) {
        case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT: {
          var b = { name: a.subject };
          (l.contact.set(b), g.set("subject", a.subject));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE: {
          if (!a.jid) break;
          var v = r("WAWebGroupMetadataCollection").assertGet(a.jid);
          if (v.participants.iAmAdmin()) {
            var S = a.participants.map(function (e) {
              var t = e.id;
              return { id: t, isAdmin: !1 };
            });
            v.participants.add(S, { merge: !0 });
          } else
            v.participants.remove(
              a.participants.map(function (e) {
                return e.id;
              }),
            );
          if (
            a.participants.find(function (e) {
              return o("WAWebUserUtils").isMeAccount(e.id);
            })
          ) {
            var R = v.participants
              .filter(function (e) {
                return !e.isAdmin;
              })
              .map(function (e) {
                return e.id;
              });
            v.participants.remove(R);
          }
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE: {
          if (!a.jid) break;
          var L = r("WAWebGroupMetadataCollection").assertGet(a.jid),
            E = a.participants.map(function (e) {
              var t = e.id;
              return { id: t, isAdmin: !0 };
            });
          L.participants.add(E, { merge: !0 });
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ADD:
        case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE:
        case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE: {
          if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
            g.groupAdder == null && g.set("groupAdder", t.author);
            var k = a.participants.some(function (e) {
                return e.id.isLid();
              }),
              I = o("WAWebGroupMetadataGetters").getIsCag(g),
              T = !!g.isLidAddressingMode;
            if (
              o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() ||
              o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
            ) {
              var D = o(
                "WAWebBotUtils",
              ).participantListIncludeOpenOrTeeGroupBotWid(a.participants);
              (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                D.includeOpenMetabot &&
                (g.isOpenBotGroup = !0),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                  D.includeTeeMetabot &&
                  (g.isTeeBotGroup = !0));
            }
            if (k && !I && !T) break;
          }
          var x = [],
            $ = new Set();
          g.participants.iAmAdmin() ||
          a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD ||
          a.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE
            ? ((x = a.participants.map(function (e) {
                var t = e.id;
                return t;
              })),
              a.participants.forEach(function (e) {
                var t = e.id,
                  n = e.isAdmin,
                  r = e.lid;
                (n && $.add(t.toString()),
                  !(r == null || t.isLid()) && g.participants.remove(r));
              }))
            : a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE &&
              ((x = a.participants.map(function (e) {
                var t = e.id,
                  n = e.lid;
                return n == null || t.isLid() ? t : n;
              })),
              a.participants.forEach(function (e) {
                var t = e.id,
                  n = e.lid;
                n == null || t.isLid() || g.participants.remove(t);
              }));
          var P = new Map(
              a.participants.map(function (e) {
                return [e.id.toString(), e.groupHistorySentState];
              }),
            ),
            N = new Map(
              a.participants.map(function (e) {
                return [e.id.toString(), e.joinTime];
              }),
            ),
            M = x.map(function (e) {
              var t = P.get(e.toString()),
                n = N.get(e.toString()),
                r = {};
              return (
                t != null && (r.groupHistorySentState = t),
                n != null && n > 0 && (r.joinTime = n),
                babelHelpers.extends(
                  {
                    id: e,
                    isAdmin:
                      a.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS.PROMOTE ||
                      (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD &&
                        $.has(e.toString())),
                  },
                  r,
                )
              );
            });
          if (
            (g.participants.add(M, { merge: !0 }),
            a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD &&
              (x.forEach(function (e) {
                (g.pastParticipants.remove(e),
                  o("WAWebUserUtils").isMeAccount(e) &&
                    g.pastParticipants.reset());
              }),
              g.membershipApprovalMode &&
                x.forEach(function (e) {
                  g.membershipApprovalRequests.remove(e);
                }),
              x.forEach(function (e) {
                r("WAWebGroupMetadataCollection").trigger(
                  "group_participant_change_" + e.toString(),
                  { gid: l.id, collectionIsStale: !0 },
                );
              }),
              a.isParentGroup === !0 &&
                r("WAWebCommunityActivityCollection").add({
                  id: i.toString(),
                  communityId: i,
                  type: o("WAWebCommunityActivityModel").ActivityTypeType
                    .NEW_COMMUNITY,
                  timestamp: C != null ? C : o("WATimeUtils").unixTime(),
                })),
            x.find(function (e) {
              return o("WAWebUserUtils").isMeAccount(e);
            }))
          )
            if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE) {
              if (
                o("WAWebGroupMetadataGetters").getGroupType(g) ===
                o("WAWebGroupType").GroupType.COMMUNITY
              ) {
                var w = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                  g.id.toString(),
                );
                o("WAWebNuxAction")
                  .resetNux(w)
                  .catch(function (t) {
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[groups] resetNux failed on community admin promote: ",
                            "",
                          ])),
                        t,
                      )
                      .sendLogs("group-action-promote-reset-nux-failed");
                  });
              }
              g.membershipApprovalMode &&
                (o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebGroupMembershipRequestsService")
                        .GroupMembershipRequestsService,
                    ).queryAndUpdateGroupMembershipApprovalRequests
                  : o("WAWebGroupGetMembershipApprovalRequestsJob")
                      .queryAndUpdateGroupMembershipApprovalRequests)(
                  l.id,
                ).catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[groups] queryAndUpdateGroupMembershipApprovalRequests failed on group action promote: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs(
                      "group-action-promote-query-membership-approval-requests-failed",
                    );
                });
            } else
              a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE
                ? (g.membershipApprovalRequests.reset(),
                  (g.membershipForm = null),
                  (g.membershipFormKeyId = null))
                : h(a) &&
                  f
                    .load()
                    .then(function (e) {
                      var t = e.applyStoredGroupMembershipFormMemberTag;
                      return t(l);
                    })
                    .catch(function (e) {
                      o("WALogger")
                        .ERROR(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[groups] applying the membership form member tag failed: ",
                              "",
                            ])),
                          e,
                        )
                        .sendLogs("group-action-add-apply-member-tag-failed");
                    });
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REMOVE: {
          var A,
            F = !1,
            O = [],
            B = [];
          if (
            (a.participants.forEach(function (e) {
              var n = e.id,
                r = e.isAdmin,
                a = e.lid,
                i = o("WAWebUserUtils").isMeAccount(n);
              (a != null && i && r === !0 && O.push(a),
                O.push(n),
                B.push({
                  id: n,
                  leaveTs: C,
                  leaveReason: n.equals(t.author)
                    ? o("WAWebLeaveReasonType").LeaveReason.Left
                    : o("WAWebLeaveReasonType").LeaveReason.Removed,
                }),
                i && (F = !0));
            }),
            g.participants.remove(O),
            g.pastParticipants.add(B),
            a.reason !==
              o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE)
          )
            try {
              g.membershipApprovalRequests.remove(
                o(
                  "WAWebGroupAgentMembershipRequests",
                ).selectMuseAgentRequestsOfRemovedMembers(
                  g.membershipApprovalRequests.toArray(),
                  a.participants.flatMap(function (e) {
                    var t = e.id,
                      n = e.lid;
                    return n == null ? [t] : [t, n];
                  }),
                  {
                    getAgentProfile: function (t) {
                      return o(
                        "WAWebBotProfileCollection",
                      ).BotProfileCollection.get(t);
                    },
                    getAlternateUserWid:
                      o("WAWebApiContact").getAlternateUserWid,
                  },
                ),
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[groups] remove Muse agent requests of removed members err ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("group-action-remove-muse-agent-requests-failed");
            }
          if (
            o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() ||
            o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
          )
            try {
              var W = o(
                "WAWebBotUtils",
              ).participantListIncludeOpenOrTeeGroupBotWid(a.participants);
              if (
                (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                  W.includeOpenMetabot &&
                  !g.participants.some(function (e) {
                    return (
                      (e == null ? void 0 : e.id) != null &&
                      o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e.id)
                    );
                  }) &&
                  (g.isOpenBotGroup = !1),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() && W.includeTeeMetabot)
              ) {
                var q = g.participants.some(function (e) {
                  var t;
                  return (
                    (e == null || (t = e.id) == null ? void 0 : t.isBot()) ===
                    !0
                  );
                });
                q || (g.isTeeBotGroup = !1);
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot groups] prev participant state check err ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("bot-groups-error-previous-participant-state");
            }
          (a.reason ===
            o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
            g.participants.add(
              a.participants.map(function (e) {
                var t = e.id,
                  n = e.lid;
                return n == null || t.isLid() ? { id: t } : { id: n };
              }),
              { merge: !0 },
            ),
            a.participants.forEach(function (e) {
              r("WAWebGroupMetadataCollection").trigger(
                "group_participant_change_" + e.id.toString(),
                { gid: l.id },
              );
            }),
            F &&
              (o(
                "WAWebPollsInvalidateChatPollMsgsAction",
              ).invalidateChatPollMsgs(l),
              o("WAWebInvalidateEventsAction").invalidateEventMsgsForChat(l),
              o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(
                l.id,
                { suppressToast: !0 },
              )));
          var U =
            (A = g.getParentGroupChat()) == null ? void 0 : A.groupMetadata;
          (o("WAWebGroupMetadataGetters").getIsCag(g) &&
            (U == null || U.participants.remove(O),
            U == null || U.pastParticipants.add(B)),
            !g.isParentGroupParticipant() &&
              g.parentGroup &&
              (U == null || U.trigger("exitParentGroup"),
              o(
                "WAWebUpdateModelsForCommunityAction",
              ).updateModelsForExitedCommunity(g.parentGroup)));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MODIFY:
          if (y && a.participants && a.participants.length > 0) {
            var V = y,
              H = a.participants[0].id,
              G = g.participants.remove(V),
              z = !1,
              j = !1;
            G.length && G[0] && ((z = G[0].isAdmin), (j = G[0].isSuperAdmin));
            var K = { id: H, isAdmin: z, isSuperAdmin: j };
            g.participants.add(K);
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.INVITE_CODE:
          a.code
            ? (g.inviteCode = a.code)
            : o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "model:chat:handleGroupAction:invalid invite code: ",
                    " for ",
                    "",
                  ])),
                a.code,
                l.id.toString(),
              );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
          g.set({
            desc: a.desc,
            descId: a.descId,
            descTime: a.descTime,
            descOwner: y == null ? void 0 : y.toString(),
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE:
          if (g.descId === a.descId) {
            g.set({
              desc: void 0,
              descId: void 0,
              descTime: void 0,
              descOwner: void 0,
            });
            break;
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.RESTRICT:
          g.restrict = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND: {
          var Q = !!a.value;
          (Q &&
            !g.suspended &&
            o("WAWebGroupMetadataGetters").getGroupType(g) ===
              o("WAWebGroupType").GroupType.DEFAULT &&
            g.participants.iAmAdmin() &&
            o(
              "WAWebGroupGatingUtils",
            ).isGroupSuspensionAppealsRedesignEnabled() &&
            ((l.unreadCount = -1),
            (o("WAWebBackendRuntime").isWebDiBackendEnabled()
              ? o("WAWebBackendRuntime").runtime(
                  o("WAWebChatReadService").ChatReadService,
                ).markConversationUnseen
              : o("WAWebChatSeenBridge").markConversationUnseen)(i)),
            (g.suspended = Q),
            Q && (g.suspendAppealApprovedSeen = !1),
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).maybeUpdateModelsForCommunitySuspendedStatus(i, Q));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL: {
          ((g.suspendAppealStatus = a.appealStatus),
            (g.suspendAppealUpdateTime = a.appealUpdateTime));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE:
          g.announce = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
          g.noFrequentlyForwarded = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL: {
          var X =
            o("WAWebAfterReadUtils").isAfterReadEnabled() &&
            o("WAWebAfterReadUtils").isAfterReadDuration(a.duration);
          (X
            ? ((g.ephemeralDuration = o(
                "WAWebAfterReadUtils",
              ).getAfterReadFallbackDuration()),
              (g.afterReadDuration = a.duration))
            : ((g.ephemeralDuration = a.duration),
              (g.afterReadDuration = null)),
            (g.disappearingModeTrigger = o(
              "WAWebEphemeralityUtils",
            ).getDisappearingModeTrigger(a.trigger)),
            (g.disappearingModeInitiatedByMe = a.initiatedByMe));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE: {
          var Y = [];
          (a.participants.forEach(function (e) {
            var t = e.id;
            g.pendingParticipants.get(t) && Y.push(t);
          }),
            g.pendingParticipants.remove(Y));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.DELETE:
          a.reason === o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT
            ? o(
                "WAWebUpdateModelsForCommunityAction",
              ).updateModelsForIntegrityDeactivateCommunity(i)
            : a.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
              ? o(
                  "WAWebUpdateModelsForCommunityAction",
                ).updateModelsForDeactivateCommunity(i)
              : (g.terminated = !0);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED:
          ((g.growthLockExpiration = void 0), (g.growthLockType = void 0));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
          a.type === "invite" &&
            ((g.growthLockExpiration = a.expiration),
            (g.growthLockType = a.type));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK:
          g.parentGroup = a.groupDatas[0].id;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
          o("WAWebUpdateModelsForCommunityAction").updateModelsForSubgroupLink({
            parentGroupId: l.id,
            subgroups: a.groupDatas,
            timestamp: C,
            author: t.author,
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK:
          g.parentGroup &&
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).updateModelsForSubgroupLink({
              parentGroupId: g.parentGroup,
              subgroups: a.groupDatas,
              timestamp: C,
              author: t.author,
            });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK:
          g.parentGroup = void 0;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
          o(
            "WAWebUpdateModelsForCommunityAction",
          ).updateModelsForSubgroupUnlink(l.id, a.groupDatas);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
          g.parentGroup &&
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).updateModelsForSubgroupUnlink(g.parentGroup, a.groupDatas);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
          ((g.membershipApprovalMode = !!a.value),
            a.value || g.membershipApprovalRequests.reset());
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS: {
          (g.set("reportToAdminMode", a.value),
            a.value || g.set("lastReportToAdminTimestamp", null));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECEIVED: {
          g.set("lastReportToAdminTimestamp", a.value);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS: {
          var J = a.requests.map(function (e) {
            return {
              id: e.wid,
              t: C,
              addedBy: r("nullthrows")(y),
              requestMethod: a.requestMethod,
              parentGroupId: a.parentGroupId,
            };
          });
          g.membershipApprovalRequests.add(J);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
          a.requests.forEach(function (e) {
            g.membershipApprovalRequests.remove(e);
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          g.allowNonAdminSubGroupCreation = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION:
          g.subgroupSuggestions.add(
            {
              id: o(
                "WAWebCommunitySubgroupSuggestionsUtils",
              ).getSubgroupSuggestionId(a.id, a.owner),
              groupId: a.id,
              parentGroupId: a.parentGroupId,
              subject: a.subject,
              desc: a.description,
              owner: a.owner,
              t: a.t,
              isExistingGroup: a.isExistingGroup,
              participantCount: a.participantCount,
            },
            { merge: !0 },
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_SUB_GROUP_SUGGESTIONS:
          g.subgroupSuggestions.remove(
            a.subgroupSuggestions.map(function (e) {
              var t = e.id,
                n = e.owner;
              return o(
                "WAWebCommunitySubgroupSuggestionsUtils",
              ).getSubgroupSuggestionId(t, n);
            }),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS
          .SUBGROUP_SUGGESTIONS_CHANGE_NUMBER: {
          var Z = r("compactMap")(a.subgroupSuggestions, function (e) {
            return g.subgroupSuggestions.get(
              o(
                "WAWebCommunitySubgroupSuggestionsUtils",
              ).getSubgroupSuggestionId(e, a.oldOwner),
            );
          });
          (g.subgroupSuggestions.remove(Z),
            g.subgroupSuggestions.add(
              Z.map(function (e) {
                return {
                  id: o(
                    "WAWebCommunitySubgroupSuggestionsUtils",
                  ).getSubgroupSuggestionId(e.groupId, a.newOwner),
                  groupId: e.groupId,
                  parentGroupId: e.parentGroupId,
                  subject: e.subject,
                  desc: e.desc,
                  owner: a.newOwner,
                  t: e.t,
                  isExistingGroup: e.isExistingGroup,
                  participantCount: e.participantCount,
                };
              }),
              { merge: !0 },
            ));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE: {
          g.memberAddMode = a.memberAddMode;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE: {
          g.memberLinkMode = a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED: {
          g.generalChatAutoAddDisabled = !0;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
          var ee = a.newOwner,
            te = a.oldOwner,
            ne = new Set([ee.toString()]),
            re = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(ee),
            );
          re != null && ne.add(re.toString());
          var oe = new Set();
          if (te) {
            oe.add(te.toString());
            var ae = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(te),
            );
            if (
              (ae && oe.add(ae.toString()), o("WAWebUserUtils").isMeAccount(te))
            ) {
              var ie = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                g.id.toString(),
              );
              o("WAWebNuxAction").dismissNux(ie);
            }
          }
          var le = [];
          (g.participants.forEach(function (e) {
            var t = e.id.toString();
            oe.has(t)
              ? le.push({ id: e.id, isAdmin: !0, isSuperAdmin: !1 })
              : ne.has(t) &&
                le.push({ id: e.id, isAdmin: !0, isSuperAdmin: !0 });
          }),
            (g.owner = ee),
            g.participants.add(le, { merge: !0 }));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP: {
          g.hiddenSubgroup = !!a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK: {
          g.groupSafetyCheck = !!a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GROUP_REACTION_SETTINGS: {
          g.groupReactionSettings = a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS
          .MEMBER_SHARE_GROUP_HISTORY_MODE: {
          g.memberShareGroupHistoryMode = a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_FORM: {
          ((g.membershipForm = a.membershipForm),
            a.membershipFormKeyId !== void 0 &&
              (g.membershipFormKeyId = a.membershipFormKeyId));
          break;
        }
        default:
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "unhandled group notif action in handleGroupAction",
                ])),
            )
            .tags("groups");
          break;
      }
      return (_ || (_ = n("Promise"))).resolve();
    }
    function h(e) {
      var t = e.actionType;
      return t === o("WAWebGroupType").GROUP_ACTIONS.ADD;
    }
    l.updateModelForGroupAction = g;
  },
  98,
);
