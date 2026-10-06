__d(
  "WAWebUpdateModelForGroupAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAfterReadUtils",
    "WAWebApiContact",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatSeenBridge",
    "WAWebCommunityActivityCollection",
    "WAWebCommunityActivityModel",
    "WAWebCommunitySubgroupSuggestionsUtils",
    "WAWebEphemeralityUtils",
    "WAWebGroupAgentMembershipRequests",
    "WAWebGroupGatingUtils",
    "WAWebGroupGetMembershipApprovalRequestsJob",
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
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "compactMap",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(t, a) {
      var i = t.chatId,
        l = o("WAWebChatCollection").ChatCollection.get(i);
      if (!l) return (p || (p = n("Promise"))).resolve();
      var _ = r("nullthrows")(l.groupMetadata),
        f = t.author,
        g = t.ts;
      switch (a.actionType) {
        case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT: {
          var h = { name: a.subject };
          (l.contact.set(h), _.set("subject", a.subject));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE: {
          if (!a.jid) break;
          var y = r("WAWebGroupMetadataCollection").assertGet(a.jid);
          if (y.participants.iAmAdmin()) {
            var C = a.participants.map(function (e) {
              var t = e.id;
              return { id: t, isAdmin: !1 };
            });
            y.participants.add(C, { merge: !0 });
          } else
            y.participants.remove(
              a.participants.map(function (e) {
                return e.id;
              }),
            );
          if (
            a.participants.find(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(e.id);
            })
          ) {
            var b = y.participants
              .filter(function (e) {
                return !e.isAdmin;
              })
              .map(function (e) {
                return e.id;
              });
            y.participants.remove(b);
          }
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE: {
          if (!a.jid) break;
          var v = r("WAWebGroupMetadataCollection").assertGet(a.jid),
            S = a.participants.map(function (e) {
              var t = e.id;
              return { id: t, isAdmin: !0 };
            });
          v.participants.add(S, { merge: !0 });
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ADD:
        case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE:
        case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE: {
          if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
            _.groupAdder == null && _.set("groupAdder", t.author);
            var R = a.participants.some(function (e) {
                return e.id.isLid();
              }),
              L = o("WAWebGroupMetadataGetters").getIsCag(_),
              E = !!_.isLidAddressingMode;
            if (
              o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
              o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
            ) {
              var k = o(
                "WAWebBotUtils",
              ).participantListIncludeOpenOrTeeGroupBotWid(a.participants);
              (o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() &&
                k.includeOpenMetabot &&
                (_.isOpenBotGroup = !0),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                  k.includeTeeMetabot &&
                  (_.isTeeBotGroup = !0));
            }
            if (R && !L && !E) break;
          }
          var I = [],
            T = new Set();
          _.participants.iAmAdmin() ||
          a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD ||
          a.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE
            ? ((I = a.participants.map(function (e) {
                var t = e.id;
                return t;
              })),
              a.participants.forEach(function (e) {
                var t = e.id,
                  n = e.isAdmin,
                  r = e.lid;
                (n && T.add(t.toString()),
                  !(r == null || t.isLid()) && _.participants.remove(r));
              }))
            : a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE &&
              ((I = a.participants.map(function (e) {
                var t = e.id,
                  n = e.lid;
                return n == null || t.isLid() ? t : n;
              })),
              a.participants.forEach(function (e) {
                var t = e.id,
                  n = e.lid;
                n == null || t.isLid() || _.participants.remove(t);
              }));
          var D = new Map(
              a.participants.map(function (e) {
                return [e.id.toString(), e.groupHistorySentState];
              }),
            ),
            x = new Map(
              a.participants.map(function (e) {
                return [e.id.toString(), e.joinTime];
              }),
            ),
            $ = I.map(function (e) {
              var t = D.get(e.toString()),
                n = x.get(e.toString()),
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
                        T.has(e.toString())),
                  },
                  r,
                )
              );
            });
          if (
            (_.participants.add($, { merge: !0 }),
            a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD &&
              (I.forEach(function (e) {
                (_.pastParticipants.remove(e),
                  o("WAWebUserPrefsMeUser").isMeAccount(e) &&
                    _.pastParticipants.reset());
              }),
              _.membershipApprovalMode &&
                I.forEach(function (e) {
                  _.membershipApprovalRequests.remove(e);
                }),
              I.forEach(function (e) {
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
                  timestamp: g != null ? g : o("WATimeUtils").unixTime(),
                })),
            I.find(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(e);
            }))
          )
            if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE) {
              if (
                o("WAWebGroupMetadataGetters").getGroupType(_) ===
                o("WAWebGroupType").GroupType.COMMUNITY
              ) {
                var P = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                  _.id.toString(),
                );
                o("WAWebNuxAction")
                  .resetNux(P)
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
              _.membershipApprovalMode &&
                o("WAWebGroupGetMembershipApprovalRequestsJob")
                  .queryAndUpdateGroupMembershipApprovalRequests(l.id)
                  .catch(function (e) {
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
              a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE &&
                _.membershipApprovalRequests.reset();
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REMOVE: {
          var N,
            M = !1,
            w = [],
            A = [];
          if (
            (a.participants.forEach(function (e) {
              var n = e.id,
                r = e.isAdmin,
                a = e.lid,
                i = o("WAWebUserPrefsMeUser").isMeAccount(n);
              (a != null && i && r === !0 && w.push(a),
                w.push(n),
                A.push({
                  id: n,
                  leaveTs: g,
                  leaveReason: n.equals(t.author)
                    ? o("WAWebLeaveReasonType").LeaveReason.Left
                    : o("WAWebLeaveReasonType").LeaveReason.Removed,
                }),
                i && (M = !0));
            }),
            _.participants.remove(w),
            _.pastParticipants.add(A),
            a.reason !==
              o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE)
          )
            try {
              _.membershipApprovalRequests.remove(
                o(
                  "WAWebGroupAgentMembershipRequests",
                ).selectMuseAgentRequestsOfRemovedMembers(
                  _.membershipApprovalRequests.toArray(),
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[groups] remove Muse agent requests of removed members err ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("group-action-remove-muse-agent-requests-failed");
            }
          if (
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
            o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
          )
            try {
              var F = o(
                "WAWebBotUtils",
              ).participantListIncludeOpenOrTeeGroupBotWid(a.participants);
              if (
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                F.includeOpenMetabot
              ) {
                var O = _.participants.some(function (e) {
                  var t;
                  return (
                    (e == null || (t = e.id) == null ? void 0 : t.isBot()) ===
                    !0
                  );
                });
                O || (_.isOpenBotGroup = !1);
              }
              if (
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                F.includeTeeMetabot
              ) {
                var B = _.participants.some(function (e) {
                  var t;
                  return (
                    (e == null || (t = e.id) == null ? void 0 : t.isBot()) ===
                    !0
                  );
                });
                B || (_.isTeeBotGroup = !1);
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot groups] prev participant state check err ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("bot-groups-error-previous-participant-state");
            }
          (a.reason ===
            o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
            _.participants.add(
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
            M &&
              (o(
                "WAWebPollsInvalidateChatPollMsgsAction",
              ).invalidateChatPollMsgs(l),
              o("WAWebInvalidateEventsAction").invalidateEventMsgsForChat(l),
              o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(
                l.id,
                { suppressToast: !0 },
              )));
          var W =
            (N = _.getParentGroupChat()) == null ? void 0 : N.groupMetadata;
          (o("WAWebGroupMetadataGetters").getIsCag(_) &&
            (W == null || W.participants.remove(w),
            W == null || W.pastParticipants.add(A)),
            !_.isParentGroupParticipant() &&
              _.parentGroup &&
              (W == null || W.trigger("exitParentGroup"),
              o(
                "WAWebUpdateModelsForCommunityAction",
              ).updateModelsForExitedCommunity(_.parentGroup)));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MODIFY:
          if (f && a.participants && a.participants.length > 0) {
            var q = f,
              U = a.participants[0].id,
              V = _.participants.remove(q),
              H = !1,
              G = !1;
            V.length && V[0] && ((H = V[0].isAdmin), (G = V[0].isSuperAdmin));
            var z = { id: U, isAdmin: H, isSuperAdmin: G };
            _.participants.add(z);
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.INVITE_CODE:
          a.code
            ? (_.inviteCode = a.code)
            : o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "model:chat:handleGroupAction:invalid invite code: ",
                    " for ",
                    "",
                  ])),
                a.code,
                l.id.toString(),
              );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
          _.set({
            desc: a.desc,
            descId: a.descId,
            descTime: a.descTime,
            descOwner: f == null ? void 0 : f.toString(),
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE:
          if (_.descId === a.descId) {
            _.set({
              desc: void 0,
              descId: void 0,
              descTime: void 0,
              descOwner: void 0,
            });
            break;
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.RESTRICT:
          _.restrict = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND: {
          var j = !!a.value;
          (j &&
            !_.suspended &&
            o("WAWebGroupMetadataGetters").getGroupType(_) ===
              o("WAWebGroupType").GroupType.DEFAULT &&
            _.participants.iAmAdmin() &&
            o(
              "WAWebGroupGatingUtils",
            ).isGroupSuspensionAppealsRedesignEnabled() &&
            ((l.unreadCount = -1),
            o("WAWebChatSeenBridge").markConversationUnseen(i)),
            (_.suspended = j),
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).maybeUpdateModelsForCommunitySuspendedStatus(i, j));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL: {
          ((_.suspendAppealStatus = a.appealStatus),
            (_.suspendAppealUpdateTime = a.appealUpdateTime));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE:
          _.announce = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
          _.noFrequentlyForwarded = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL: {
          var K =
            o("WAWebAfterReadUtils").isAfterReadEnabled() &&
            o("WAWebAfterReadUtils").isAfterReadDuration(a.duration);
          (K
            ? ((_.ephemeralDuration = o(
                "WAWebAfterReadUtils",
              ).getAfterReadFallbackDuration()),
              (_.afterReadDuration = a.duration))
            : ((_.ephemeralDuration = a.duration),
              (_.afterReadDuration = null)),
            (_.disappearingModeTrigger = o(
              "WAWebEphemeralityUtils",
            ).getDisappearingModeTrigger(a.trigger)),
            (_.disappearingModeInitiatedByMe = a.initiatedByMe));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE: {
          var Q = [];
          (a.participants.forEach(function (e) {
            var t = e.id;
            _.pendingParticipants.get(t) && Q.push(t);
          }),
            _.pendingParticipants.remove(Q));
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
              : (_.terminated = !0);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED:
          ((_.growthLockExpiration = void 0), (_.growthLockType = void 0));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
          a.type === "invite" &&
            ((_.growthLockExpiration = a.expiration),
            (_.growthLockType = a.type));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK:
          _.parentGroup = a.groupDatas[0].id;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
          o("WAWebUpdateModelsForCommunityAction").updateModelsForSubgroupLink({
            parentGroupId: l.id,
            subgroups: a.groupDatas,
            timestamp: g,
            author: t.author,
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK:
          _.parentGroup &&
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).updateModelsForSubgroupLink({
              parentGroupId: _.parentGroup,
              subgroups: a.groupDatas,
              timestamp: g,
              author: t.author,
            });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK:
          _.parentGroup = void 0;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
          o(
            "WAWebUpdateModelsForCommunityAction",
          ).updateModelsForSubgroupUnlink(l.id, a.groupDatas);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
          _.parentGroup &&
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).updateModelsForSubgroupUnlink(_.parentGroup, a.groupDatas);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
          ((_.membershipApprovalMode = !!a.value),
            a.value || _.membershipApprovalRequests.reset());
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS: {
          (_.set("reportToAdminMode", a.value),
            a.value || _.set("lastReportToAdminTimestamp", null));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECEIVED: {
          _.set("lastReportToAdminTimestamp", a.value);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS: {
          var X = a.requests.map(function (e) {
            return {
              id: e.wid,
              t: g,
              addedBy: r("nullthrows")(f),
              requestMethod: a.requestMethod,
              parentGroupId: a.parentGroupId,
            };
          });
          _.membershipApprovalRequests.add(X);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
          a.requests.forEach(function (e) {
            _.membershipApprovalRequests.remove(e);
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          _.allowNonAdminSubGroupCreation = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION:
          _.subgroupSuggestions.add(
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
          _.subgroupSuggestions.remove(
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
          var Y = r("compactMap")(a.subgroupSuggestions, function (e) {
            return _.subgroupSuggestions.get(
              o(
                "WAWebCommunitySubgroupSuggestionsUtils",
              ).getSubgroupSuggestionId(e, a.oldOwner),
            );
          });
          (_.subgroupSuggestions.remove(Y),
            _.subgroupSuggestions.add(
              Y.map(function (e) {
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
          _.memberAddMode = a.memberAddMode;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE: {
          _.memberLinkMode = a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED: {
          _.generalChatAutoAddDisabled = !0;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
          var J = a.newOwner,
            Z = a.oldOwner,
            ee = new Set([J.toString()]),
            te = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(J),
            );
          te != null && ee.add(te.toString());
          var ne = new Set();
          if (Z) {
            ne.add(Z.toString());
            var re = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(Z),
            );
            if (
              (re && ne.add(re.toString()),
              o("WAWebUserPrefsMeUser").isMeAccount(Z))
            ) {
              var oe = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                _.id.toString(),
              );
              o("WAWebNuxAction").dismissNux(oe);
            }
          }
          var ae = [];
          (_.participants.forEach(function (e) {
            var t = e.id.toString();
            ne.has(t)
              ? ae.push({ id: e.id, isAdmin: !0, isSuperAdmin: !1 })
              : ee.has(t) &&
                ae.push({ id: e.id, isAdmin: !0, isSuperAdmin: !0 });
          }),
            (_.owner = J),
            _.participants.add(ae, { merge: !0 }));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP: {
          _.hiddenSubgroup = !!a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK: {
          _.groupSafetyCheck = !!a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS
          .MEMBER_SHARE_GROUP_HISTORY_MODE: {
          _.memberShareGroupHistoryMode = a.value;
          break;
        }
        default:
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "unhandled group notif action in handleGroupAction",
                ])),
            )
            .tags("groups");
          break;
      }
      return (p || (p = n("Promise"))).resolve();
    }
    l.updateModelForGroupAction = _;
  },
  98,
);
