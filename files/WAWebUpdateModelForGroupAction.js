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
    var e, s, u, c;
    function d(t, a) {
      var i = t.chatId,
        l = o("WAWebChatCollection").ChatCollection.get(i);
      if (!l) return (c || (c = n("Promise"))).resolve();
      var d = r("nullthrows")(l.groupMetadata),
        m = t.author,
        p = t.ts;
      switch (a.actionType) {
        case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT: {
          var _ = { name: a.subject };
          (l.contact.set(_), d.set("subject", a.subject));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE: {
          if (!a.jid) break;
          var f = r("WAWebGroupMetadataCollection").assertGet(a.jid);
          if (f.participants.iAmAdmin()) {
            var g = a.participants.map(function (e) {
              var t = e.id;
              return { id: t, isAdmin: !1 };
            });
            f.participants.add(g, { merge: !0 });
          } else
            f.participants.remove(
              a.participants.map(function (e) {
                return e.id;
              }),
            );
          if (
            a.participants.find(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(e.id);
            })
          ) {
            var h = f.participants
              .filter(function (e) {
                return !e.isAdmin;
              })
              .map(function (e) {
                return e.id;
              });
            f.participants.remove(h);
          }
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE: {
          if (!a.jid) break;
          var y = r("WAWebGroupMetadataCollection").assertGet(a.jid),
            C = a.participants.map(function (e) {
              var t = e.id;
              return { id: t, isAdmin: !0 };
            });
          y.participants.add(C, { merge: !0 });
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ADD:
        case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE:
        case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE: {
          if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
            d.groupAdder == null && d.set("groupAdder", t.author);
            var b = a.participants.some(function (e) {
                return e.id.isLid();
              }),
              v = d.isCag,
              S = !!d.isLidAddressingMode;
            if (
              o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
              o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
            ) {
              var R = o(
                "WAWebBotUtils",
              ).participantListIncludeOpenOrTeeGroupBotWid(a.participants);
              (o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() &&
                R.includeOpenMetabot &&
                (d.isOpenBotGroup = !0),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                  R.includeTeeMetabot &&
                  (d.isTeeBotGroup = !0));
            }
            if (b && !v && !S) break;
          }
          var L = [],
            E = new Set();
          d.participants.iAmAdmin() ||
          a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD ||
          a.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE
            ? ((L = a.participants.map(function (e) {
                var t = e.id;
                return t;
              })),
              a.participants.forEach(function (e) {
                var t = e.id,
                  n = e.isAdmin,
                  r = e.lid;
                (n && E.add(t.toString()),
                  !(r == null || t.isLid()) && d.participants.remove(r));
              }))
            : a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE &&
              ((L = a.participants.map(function (e) {
                var t = e.id,
                  n = e.lid;
                return n == null || t.isLid() ? t : n;
              })),
              a.participants.forEach(function (e) {
                var t = e.id,
                  n = e.lid;
                n == null || t.isLid() || d.participants.remove(t);
              }));
          var k = new Map(
              a.participants.map(function (e) {
                return [e.id.toString(), e.groupHistorySentState];
              }),
            ),
            I = new Map(
              a.participants.map(function (e) {
                return [e.id.toString(), e.joinTime];
              }),
            ),
            T = L.map(function (e) {
              var t = k.get(e.toString()),
                n = I.get(e.toString()),
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
                        E.has(e.toString())),
                  },
                  r,
                )
              );
            });
          if (
            (d.participants.add(T, { merge: !0 }),
            a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD &&
              (L.forEach(function (e) {
                (d.pastParticipants.remove(e),
                  o("WAWebUserPrefsMeUser").isMeAccount(e) &&
                    d.pastParticipants.reset());
              }),
              d.membershipApprovalMode &&
                L.forEach(function (e) {
                  d.membershipApprovalRequests.remove(e);
                }),
              L.forEach(function (e) {
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
                  timestamp: p != null ? p : o("WATimeUtils").unixTime(),
                })),
            L.find(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(e);
            }))
          )
            if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.PROMOTE) {
              if (d.groupType === o("WAWebGroupType").GroupType.COMMUNITY) {
                var D = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                  d.id.toString(),
                );
                o("WAWebNuxAction").resetNux(D);
              }
              d.membershipApprovalMode &&
                o(
                  "WAWebGroupGetMembershipApprovalRequestsJob",
                ).queryAndUpdateGroupMembershipApprovalRequests(l.id);
            } else
              a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE &&
                d.membershipApprovalRequests.reset();
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REMOVE: {
          var x,
            $ = !1,
            P = [],
            N = [];
          if (
            (a.participants.forEach(function (e) {
              var n = e.id,
                r = e.isAdmin,
                a = e.lid,
                i = o("WAWebUserPrefsMeUser").isMeAccount(n);
              (a != null && i && r === !0 && P.push(a),
                P.push(n),
                N.push({
                  id: n,
                  leaveTs: p,
                  leaveReason: n.equals(t.author)
                    ? o("WAWebLeaveReasonType").LeaveReason.Left
                    : o("WAWebLeaveReasonType").LeaveReason.Removed,
                }),
                i && ($ = !0));
            }),
            d.participants.remove(P),
            d.pastParticipants.add(N),
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled())
          )
            try {
              var M = o(
                "WAWebBotUtils",
              ).participantListIncludeOpenOrTeeGroupBotWid(a.participants);
              if (
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                M.includeOpenMetabot
              ) {
                var w = d.participants.some(function (e) {
                  var t;
                  return (
                    (e == null || (t = e.id) == null ? void 0 : t.isBot()) ===
                    !0
                  );
                });
                w || (d.isOpenBotGroup = !1);
              }
              if (
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                M.includeTeeMetabot
              ) {
                var A = d.participants.some(function (e) {
                  var t;
                  return (
                    (e == null || (t = e.id) == null ? void 0 : t.isBot()) ===
                    !0
                  );
                });
                A || (d.isTeeBotGroup = !1);
              }
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot groups] prev participant state check err ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("bot-groups-error-previous-participant-state");
            }
          (a.reason ===
            o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
            d.participants.add(
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
            $ &&
              (o(
                "WAWebPollsInvalidateChatPollMsgsAction",
              ).invalidateChatPollMsgs(l),
              o("WAWebInvalidateEventsAction").invalidateEventMsgsForChat(l),
              o("WAWebRemoveFromFavoritesAction").removeFromFavoritesAction(
                l.id,
                { suppressToast: !0 },
              )));
          var F =
            (x = d.getParentGroupChat()) == null ? void 0 : x.groupMetadata;
          (d.isCag &&
            (F == null || F.participants.remove(P),
            F == null || F.pastParticipants.add(N)),
            !d.isParentGroupParticipant() &&
              d.parentGroup &&
              (F == null || F.trigger("exitParentGroup"),
              o(
                "WAWebUpdateModelsForCommunityAction",
              ).updateModelsForExitedCommunity(d.parentGroup)));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MODIFY:
          if (m && a.participants && a.participants.length > 0) {
            var O = m,
              B = a.participants[0].id,
              W = d.participants.remove(O),
              q = !1,
              U = !1;
            W.length && W[0] && ((q = W[0].isAdmin), (U = W[0].isSuperAdmin));
            var V = { id: B, isAdmin: q, isSuperAdmin: U };
            d.participants.add(V);
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.INVITE_CODE:
          a.code
            ? (d.inviteCode = a.code)
            : o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "model:chat:handleGroupAction:invalid invite code: ",
                    " for ",
                    "",
                  ])),
                a.code,
                l.id.toString(),
              );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
          d.set({
            desc: a.desc,
            descId: a.descId,
            descTime: a.descTime,
            descOwner: m == null ? void 0 : m.toString(),
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE:
          if (d.descId === a.descId) {
            d.set({
              desc: void 0,
              descId: void 0,
              descTime: void 0,
              descOwner: void 0,
            });
            break;
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.RESTRICT:
          d.restrict = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND: {
          var H = !!a.value;
          (H &&
            !d.suspended &&
            d.groupType === o("WAWebGroupType").GroupType.DEFAULT &&
            d.participants.iAmAdmin() &&
            o(
              "WAWebGroupGatingUtils",
            ).isGroupSuspensionAppealsRedesignEnabled() &&
            ((l.unreadCount = -1),
            o("WAWebChatSeenBridge").markConversationUnseen(i)),
            (d.suspended = H),
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).maybeUpdateModelsForCommunitySuspendedStatus(i, H));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL: {
          ((d.suspendAppealStatus = a.appealStatus),
            (d.suspendAppealUpdateTime = a.appealUpdateTime));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE:
          d.announce = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
          d.noFrequentlyForwarded = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL: {
          var G =
            o("WAWebAfterReadUtils").isAfterReadEnabled() &&
            o("WAWebAfterReadUtils").isAfterReadDuration(a.duration);
          (G
            ? ((d.ephemeralDuration = o(
                "WAWebAfterReadUtils",
              ).getAfterReadFallbackDuration()),
              (d.afterReadDuration = a.duration))
            : ((d.ephemeralDuration = a.duration),
              (d.afterReadDuration = null)),
            (d.disappearingModeTrigger = o(
              "WAWebEphemeralityUtils",
            ).getDisappearingModeTrigger(a.trigger)),
            (d.disappearingModeInitiatedByMe = a.initiatedByMe));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE: {
          var z = [];
          (a.participants.forEach(function (e) {
            var t = e.id;
            d.pendingParticipants.get(t) && z.push(t);
          }),
            d.pendingParticipants.remove(z));
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
              : (d.terminated = !0);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED:
          ((d.growthLockExpiration = void 0), (d.growthLockType = void 0));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
          a.type === "invite" &&
            ((d.growthLockExpiration = a.expiration),
            (d.growthLockType = a.type));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK:
          d.parentGroup = a.groupDatas[0].id;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
          o("WAWebUpdateModelsForCommunityAction").updateModelsForSubgroupLink({
            parentGroupId: l.id,
            subgroups: a.groupDatas,
            timestamp: p,
            author: t.author,
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK:
          d.parentGroup &&
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).updateModelsForSubgroupLink({
              parentGroupId: d.parentGroup,
              subgroups: a.groupDatas,
              timestamp: p,
              author: t.author,
            });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK:
          d.parentGroup = void 0;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
          o(
            "WAWebUpdateModelsForCommunityAction",
          ).updateModelsForSubgroupUnlink(l.id, a.groupDatas);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
          d.parentGroup &&
            o(
              "WAWebUpdateModelsForCommunityAction",
            ).updateModelsForSubgroupUnlink(d.parentGroup, a.groupDatas);
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
          ((d.membershipApprovalMode = !!a.value),
            a.value || d.membershipApprovalRequests.reset());
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS: {
          (d.set("reportToAdminMode", a.value),
            a.value || d.set("lastReportToAdminTimestamp", null));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECEIVED: {
          d.set("lastReportToAdminTimestamp", a.value);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS: {
          var j = a.requests.map(function (e) {
            return {
              id: e.wid,
              t: p,
              addedBy: r("nullthrows")(m),
              requestMethod: a.requestMethod,
              parentGroupId: a.parentGroupId,
            };
          });
          d.membershipApprovalRequests.add(j);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
          a.requests.forEach(function (e) {
            d.membershipApprovalRequests.remove(e);
          });
          break;
        case o("WAWebGroupType").GROUP_ACTIONS
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          d.allowNonAdminSubGroupCreation = !!a.value;
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION:
          d.subgroupSuggestions.add(
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
          d.subgroupSuggestions.remove(
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
          var K = r("compactMap")(a.subgroupSuggestions, function (e) {
            return d.subgroupSuggestions.get(
              o(
                "WAWebCommunitySubgroupSuggestionsUtils",
              ).getSubgroupSuggestionId(e, a.oldOwner),
            );
          });
          (d.subgroupSuggestions.remove(K),
            d.subgroupSuggestions.add(
              K.map(function (e) {
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
          d.memberAddMode = a.memberAddMode;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE: {
          o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsEnabled() &&
            (d.memberLinkMode = a.value);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED: {
          d.generalChatAutoAddDisabled = !0;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
          var Q = a.newOwner,
            X = a.oldOwner,
            Y = new Set([Q.toString()]),
            J = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(Q),
            );
          J != null && Y.add(J.toString());
          var Z = new Set();
          if (X) {
            Z.add(X.toString());
            var ee = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(X),
            );
            if (
              (ee && Z.add(ee.toString()),
              o("WAWebUserPrefsMeUser").isMeAccount(X))
            ) {
              var te = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                d.id.toString(),
              );
              o("WAWebNuxAction").dismissNux(te);
            }
          }
          var ne = [];
          (d.participants.forEach(function (e) {
            var t = e.id.toString();
            Z.has(t)
              ? ne.push({ id: e.id, isAdmin: !0, isSuperAdmin: !1 })
              : Y.has(t) &&
                ne.push({ id: e.id, isAdmin: !0, isSuperAdmin: !0 });
          }),
            (d.owner = Q),
            d.participants.add(ne, { merge: !0 }));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP: {
          d.hiddenSubgroup = !!a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK: {
          d.groupSafetyCheck = !!a.value;
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS
          .MEMBER_SHARE_GROUP_HISTORY_MODE: {
          d.memberShareGroupHistoryMode = a.value;
          break;
        }
        default:
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "unhandled group notif action in handleGroupAction",
                ])),
            )
            .tags("groups");
          break;
      }
      return (c || (c = n("Promise"))).resolve();
    }
    l.updateModelForGroupAction = d;
  },
  98,
);
