__d(
  "WAWebUpdateModelForGroupAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAfterReadUtils",
    "WAWebApiContact",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatSeenBridge",
    "WAWebCommunityActivityCollection",
    "WAWebCommunityActivityModel",
    "WAWebCommunitySubgroupSuggestionsUtils",
    "WAWebEphemeralityUtils",
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
    var e, s, u, c, d, m;
    function p(t, a) {
      var i = t.chatId,
        l = o("WAWebChatCollection").ChatCollection.get(i);
      if (!l) return (m || (m = n("Promise"))).resolve();
      var p = r("nullthrows")(l.groupMetadata),
        _ = t.author,
        f = t.ts;
      switch (a.actionType) {
        case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT: {
          var g = { name: a.subject };
          (l.contact.set(g), p.set("subject", a.subject));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE: {
          if (!a.jid) break;
          var h = r("WAWebGroupMetadataCollection").assertGet(a.jid);
          if (h.participants.iAmAdmin()) {
            var y = a.participants.map(function (e) {
              var t = e.id;
              return { id: t, isAdmin: !1 };
            });
            h.participants.add(y, { merge: !0 });
          } else
            h.participants.remove(
              a.participants.map(function (e) {
                return e.id;
              }),
            );
          if (
            a.participants.find(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(e.id);
            })
          ) {
            var C = h.participants
              .filter(function (e) {
                return !e.isAdmin;
              })
              .map(function (e) {
                return e.id;
              });
            h.participants.remove(C);
          }
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE: {
          if (!a.jid) break;
          var b = r("WAWebGroupMetadataCollection").assertGet(a.jid),
            v = a.participants.map(function (e) {
              var t = e.id;
              return { id: t, isAdmin: !0 };
            });
          b.participants.add(v, { merge: !0 });
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ADD:
        case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE:
        case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE: {
          if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
            p.groupAdder == null && p.set("groupAdder", t.author);
            var S = a.participants.some(function (e) {
                return e.id.isLid();
              }),
              R = o("WAWebGroupMetadataGetters").getIsCag(p),
              L = !!p.isLidAddressingMode;
            if (
              o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
              o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
            ) {
              var E = o(
                "WAWebBotUtils",
              ).participantListIncludeOpenOrTeeGroupBotWid(a.participants);
              (o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() &&
                E.includeOpenMetabot &&
                (p.isOpenBotGroup = !0),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                  E.includeTeeMetabot &&
                  (p.isTeeBotGroup = !0));
            }
            if (S && !R && !L) break;
          }
          var k = [],
            I = new Set();
          p.participants.iAmAdmin() ||
          a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD ||
          a.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE
            ? ((k = a.participants.map(function (e) {
                var t = e.id;
                return t;
              })),
              a.participants.forEach(function (e) {
                var t = e.id,
                  n = e.isAdmin,
                  r = e.lid;
                (n && I.add(t.toString()),
                  !(r == null || t.isLid()) && p.participants.remove(r));
              }))
            : a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE &&
              ((k = a.participants.map(function (e) {
                var t = e.id,
                  n = e.lid;
                return n == null || t.isLid() ? t : n;
              })),
              a.participants.forEach(function (e) {
                var t = e.id,
                  n = e.lid;
                n == null || t.isLid() || p.participants.remove(t);
              }));
          var T = new Map(
              a.participants.map(function (e) {
                return [e.id.toString(), e.groupHistorySentState];
              }),
            ),
            D = new Map(
              a.participants.map(function (e) {
                return [e.id.toString(), e.joinTime];
              }),
            ),
            x = k.map(function (e) {
              var t = T.get(e.toString()),
                n = D.get(e.toString()),
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
                        I.has(e.toString())),
                  },
                  r,
                )
              );
            });
          if (
            (p.participants.add(x, { merge: !0 }),
            a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD &&
              (k.forEach(function (e) {
                (p.pastParticipants.remove(e),
                  o("WAWebUserPrefsMeUser").isMeAccount(e) &&
                    p.pastParticipants.reset());
              }),
              p.membershipApprovalMode &&
                k.forEach(function (e) {
                  p.membershipApprovalRequests.remove(e);
                }),
              k.forEach(function (e) {
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
                  timestamp: f != null ? f : o("WATimeUtils").unixTime(),
                })),
            k.find(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(e);
            }))
          )
            if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE) {
              if (
                o("WAWebGroupMetadataGetters").getGroupType(p) ===
                o("WAWebGroupType").GroupType.COMMUNITY
              ) {
                var $ = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                  p.id.toString(),
                );
                o("WAWebNuxAction")
                  .resetNux($)
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
              p.membershipApprovalMode &&
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
                p.membershipApprovalRequests.reset();
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REMOVE: {
          var P,
            N = !1,
            M = [],
            w = [];
          if (
            (a.participants.forEach(function (e) {
              var n = e.id,
                r = e.isAdmin,
                a = e.lid,
                i = o("WAWebUserPrefsMeUser").isMeAccount(n);
              (a != null && i && r === !0 && M.push(a),
                M.push(n),
                w.push({
                  id: n,
                  leaveTs: f,
                  leaveReason: n.equals(t.author)
                    ? o("WAWebLeaveReasonType").LeaveReason.Left
                    : o("WAWebLeaveReasonType").LeaveReason.Removed,
                }),
                i && (N = !0));
            }),
            p.participants.remove(M),
            p.pastParticipants.add(w),
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled())
          )
            try {
              var A = o(
                "WAWebBotUtils",
              ).participantListIncludeOpenOrTeeGroupBotWid(a.participants);
              if (
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                A.includeOpenMetabot
              ) {
                var F = p.participants.some(function (e) {
                  var t;
                  return (
                    (e == null || (t = e.id) == null ? void 0 : t.isBot()) ===
                    !0
                  );
                });
                F || (p.isOpenBotGroup = !1);
              }
              if (
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                A.includeTeeMetabot
              ) {
                var O = p.participants.some(function (e) {
                  var t;
                  return (
                    (e == null || (t = e.id) == null ? void 0 : t.isBot()) ===
                    !0
                  );
                });
                O || (p.isTeeBotGroup = !1);
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot groups] prev participant state check err ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("bot-groups-error-previous-participant-state");
            }
          (a.reason ===
            o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
            p.participants.add(
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
            N &&
              (o(
                "WAWebPollsInvalidateChatPollMsgsAction",
              ).invalidateChatPollMsgs(l),
              o("WAWebInvalidateEventsAction").invalidateEventMsgsForChat(l),
              o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(
                l.id,
                { suppressToast: !0 },
              )));
          var B =
            (P = p.getParentGroupChat()) == null ? void 0 : P.groupMetadata;
          (o("WAWebGroupMetadataGetters").getIsCag(p) &&
            (B == null || B.participants.remove(M),
            B == null || B.pastParticipants.add(w)),
            !p.isParentGroupParticipant() &&
              p.parentGroup &&
              (B == null || B.trigger("exitParentGroup"),
              o(
                "WAWebUpdateModelsForCommunityAction",
              ).updateModelsForExitedCommunity(p.parentGroup)));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MODIFY:
          if (_ && a.participants && a.participants.length > 0) {
            var W = _,
              q = a.participants[0].id,
              U = p.participants.remove(W),
              V = !1,
              H = !1;
            U.length && U[0] && ((V = U[0].isAdmin), (H = U[0].isSuperAdmin));
            var G = { id: q, isAdmin: V, isSuperAdmin: H };
            p.participants.add(G);
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.INVITE_CODE:
          a.code
            ? (p.inviteCode = a.code)
            : o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "model:chat:handleGroupAction:invalid invite code: ",
                    " for ",
                    "",
                  ])),
                a.code,
                l.id.toString(),
              );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
          p.set({
            desc: a.desc,
            descId: a.descId,
            descTime: a.descTime,
            descOwner: _ == null ? void 0 : _.toString(),
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE:
          if (p.descId === a.descId) {
            p.set({
              desc: void 0,
              descId: void 0,
              descTime: void 0,
              descOwner: void 0,
            });
            break;
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.RESTRICT:
          p.restrict = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND: {
          var z = !!a.value;
          (z &&
            !p.suspended &&
            o("WAWebGroupMetadataGetters").getGroupType(p) ===
              o("WAWebGroupType").GroupType.DEFAULT &&
            p.participants.iAmAdmin() &&
            o(
              "WAWebGroupGatingUtils",
            ).isGroupSuspensionAppealsRedesignEnabled() &&
            ((l.unreadCount = -1),
            o("WAWebChatSeenBridge").markConversationUnseen(i)),
            (p.suspended = z),
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).maybeUpdateModelsForCommunitySuspendedStatus(i, z));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL: {
          ((p.suspendAppealStatus = a.appealStatus),
            (p.suspendAppealUpdateTime = a.appealUpdateTime));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE:
          p.announce = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
          p.noFrequentlyForwarded = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL: {
          var j =
            o("WAWebAfterReadUtils").isAfterReadEnabled() &&
            o("WAWebAfterReadUtils").isAfterReadDuration(a.duration);
          (j
            ? ((p.ephemeralDuration = o(
                "WAWebAfterReadUtils",
              ).getAfterReadFallbackDuration()),
              (p.afterReadDuration = a.duration))
            : ((p.ephemeralDuration = a.duration),
              (p.afterReadDuration = null)),
            (p.disappearingModeTrigger = o(
              "WAWebEphemeralityUtils",
            ).getDisappearingModeTrigger(a.trigger)),
            (p.disappearingModeInitiatedByMe = a.initiatedByMe));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE: {
          var K = [];
          (a.participants.forEach(function (e) {
            var t = e.id;
            p.pendingParticipants.get(t) && K.push(t);
          }),
            p.pendingParticipants.remove(K));
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
              : (p.terminated = !0);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED:
          ((p.growthLockExpiration = void 0), (p.growthLockType = void 0));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
          a.type === "invite" &&
            ((p.growthLockExpiration = a.expiration),
            (p.growthLockType = a.type));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK:
          p.parentGroup = a.groupDatas[0].id;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
          o("WAWebUpdateModelsForCommunityAction").updateModelsForSubgroupLink({
            parentGroupId: l.id,
            subgroups: a.groupDatas,
            timestamp: f,
            author: t.author,
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK:
          p.parentGroup &&
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).updateModelsForSubgroupLink({
              parentGroupId: p.parentGroup,
              subgroups: a.groupDatas,
              timestamp: f,
              author: t.author,
            });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK:
          p.parentGroup = void 0;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
          o(
            "WAWebUpdateModelsForCommunityAction",
          ).updateModelsForSubgroupUnlink(l.id, a.groupDatas);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
          p.parentGroup &&
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).updateModelsForSubgroupUnlink(p.parentGroup, a.groupDatas);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
          ((p.membershipApprovalMode = !!a.value),
            a.value || p.membershipApprovalRequests.reset());
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS: {
          (p.set("reportToAdminMode", a.value),
            a.value || p.set("lastReportToAdminTimestamp", null));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECEIVED: {
          p.set("lastReportToAdminTimestamp", a.value);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS: {
          var Q = a.requests.map(function (e) {
            return {
              id: e.wid,
              t: f,
              addedBy: r("nullthrows")(_),
              requestMethod: a.requestMethod,
              parentGroupId: a.parentGroupId,
            };
          });
          p.membershipApprovalRequests.add(Q);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
          a.requests.forEach(function (e) {
            p.membershipApprovalRequests.remove(e);
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          p.allowNonAdminSubGroupCreation = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION:
          p.subgroupSuggestions.add(
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
          p.subgroupSuggestions.remove(
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
          var X = r("compactMap")(a.subgroupSuggestions, function (e) {
            return p.subgroupSuggestions.get(
              o(
                "WAWebCommunitySubgroupSuggestionsUtils",
              ).getSubgroupSuggestionId(e, a.oldOwner),
            );
          });
          (p.subgroupSuggestions.remove(X),
            p.subgroupSuggestions.add(
              X.map(function (e) {
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
          p.memberAddMode = a.memberAddMode;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE: {
          p.memberLinkMode = a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED: {
          p.generalChatAutoAddDisabled = !0;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
          var Y = a.newOwner,
            J = a.oldOwner,
            Z = new Set([Y.toString()]),
            ee = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(Y),
            );
          ee != null && Z.add(ee.toString());
          var te = new Set();
          if (J) {
            te.add(J.toString());
            var ne = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(J),
            );
            if (
              (ne && te.add(ne.toString()),
              o("WAWebUserPrefsMeUser").isMeAccount(J))
            ) {
              var re = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                p.id.toString(),
              );
              o("WAWebNuxAction").dismissNux(re);
            }
          }
          var oe = [];
          (p.participants.forEach(function (e) {
            var t = e.id.toString();
            te.has(t)
              ? oe.push({ id: e.id, isAdmin: !0, isSuperAdmin: !1 })
              : Z.has(t) &&
                oe.push({ id: e.id, isAdmin: !0, isSuperAdmin: !0 });
          }),
            (p.owner = Y),
            p.participants.add(oe, { merge: !0 }));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP: {
          p.hiddenSubgroup = !!a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK: {
          p.groupSafetyCheck = !!a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS
          .MEMBER_SHARE_GROUP_HISTORY_MODE: {
          p.memberShareGroupHistoryMode = a.value;
          break;
        }
        default:
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "unhandled group notif action in handleGroupAction",
                ])),
            )
            .tags("groups");
          break;
      }
      return (m || (m = n("Promise"))).resolve();
    }
    l.updateModelForGroupAction = p;
  },
  98,
);
