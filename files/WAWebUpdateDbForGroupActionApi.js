__d(
  "WAWebUpdateDbForGroupActionApi",
  [
    "JSResourceForInteraction",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebAfterReadUtils",
    "WAWebApiMembershipApprovalRequestStore",
    "WAWebApiParticipantStore",
    "WAWebApiSubgroupSuggestionStore",
    "WAWebBackendApi",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebDBCommunity",
    "WAWebDBCommunityTypes",
    "WAWebDBGroupsGroupMetadata",
    "WAWebDBParticipantTypes",
    "WAWebDBRevokeInviteV4",
    "WAWebEphemeralityUtils",
    "WAWebGroupDatabaseJob",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupMembershipApprovalRequestsJob",
    "WAWebGroupMetadataGetters",
    "WAWebGroupParticipantsJob",
    "WAWebGroupQueryBridge",
    "WAWebGroupType",
    "WAWebGroupsParticipantsApi",
    "WAWebHandlePushnameUpdate",
    "WAWebIncompatibleAgentRequestsRejectTriggers",
    "WAWebLidMigrationUtils",
    "WAWebNux",
    "WAWebQueryAndUpdateSubgroupSuggestionsJob",
    "WAWebRemoveStoredMuseAgentRequests",
    "WAWebSubgroupSuggestionsJob",
    "WAWebSyncGroupBotSupportFields",
    "WAWebUpdateDbForCommunityAction",
    "WAWebUserPrefsMeUser",
    "WAWebUserUtils",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "getErrorSafe",
    "isStringNullOrEmpty",
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
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormAnswersJob",
      ).__setRef("WAWebUpdateDbForGroupActionApi");
    async function D(t, n, a) {
      (a === void 0 && (a = !1),
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "inside _handleGroupActionMD",
              ])),
          )
          .tags("groups"));
      var i = t.chatId,
        l = t.author,
        I = t.pushname,
        D = t.ts,
        M = D === void 0 ? Date.now() / 1e3 : D;
      l &&
        !r("isStringNullOrEmpty")(I) &&
        o("WAWebHandlePushnameUpdate")
          .updatePushname(l, I, a)
          .catch(function (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "updateDBForGroupAction: updatePushname failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          });
      var w = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i),
        A = (w == null ? void 0 : w.isParentGroup) === !0,
        F = !!t.isLidAddressingMode,
        O = F !== !!(w != null && w.isLidAddressingMode),
        B = [];
      switch (
        (A &&
          O &&
          (B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { isLidAddressingMode: F },
              a,
            ),
          ),
          B.push(
            o("WAWebGroupParticipantsJob")
              .migrateParentGroupToLIDOrFallbackToPNJob(i.toString(), F)
              .catch(function () {
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[parent-group] migrate to LID/PN failed; isLID=",
                      "",
                    ])),
                  F,
                );
              }),
          )),
        n.actionType)
      ) {
        case o("WAWebGroupType").GROUP_ACTIONS.ADD:
          if (
            (B.push(
              o("WAWebGroupParticipantsJob")
                .addParticipantsJob({
                  group: i,
                  isOffline: a,
                  participants: n.participants,
                  reason: n.reason,
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebDBParticipantTypes").GroupUnSyncedError,
                    function () {
                      (o("WALogger").WARN(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "addParticipants: out-of-sync group notification",
                          ])),
                      ),
                        P(i, a));
                    },
                  ),
                ),
            ),
            B.push(
              o(
                "WAWebGroupMembershipApprovalRequestsJob",
              ).removeMembershipApprovalRequestsJob(
                i,
                n.participants.map(function (e) {
                  return e.id;
                }),
                a,
              ),
            ),
            B.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(i, {
                groupAdder: l == null ? void 0 : l.toString(),
              }),
            ),
            B.push(
              o(
                "WAWebGroupHistoryParticipantJob",
              ).updateGroupHistoryParticipantMetadataOnJoin(i, n.participants),
            ),
            o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled())
          ) {
            var W = o(
              "WAWebBotUtils",
            ).participantListIncludeOpenOrTeeGroupBotWid(n.participants);
            (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
              W.includeOpenMetabot &&
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  i,
                  { isOpenBotGroup: !0 },
                  a,
                ),
              ),
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled() &&
                W.includeTeeMetabot &&
                B.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                    i,
                    { isTeeBotGroup: !0 },
                    a,
                  ),
                ));
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.REMOVE: {
          var q = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
          if (q == null) break;
          var U =
              n.reason !==
                o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
              n.participants.some(function (e) {
                var t = e.id;
                return o("WAWebUserUtils").isMeAccount(t);
              }) &&
              (await o("WAWebDBCommunity").isLastJoinedSubgroup(q)),
            V = function (r, i) {
              return o("WAWebGroupParticipantsJob")
                .removeParticipantsJob(
                  r,
                  n.participants,
                  M,
                  t.author,
                  n.reason,
                  i,
                  a,
                )
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebDBParticipantTypes").GroupUnSyncedError,
                    function () {
                      (o("WALogger").WARN(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "removeParticipants: out-of-sync group notification",
                          ])),
                      ),
                        P(r, a));
                    },
                  ),
                );
            };
          if (
            (B.push(V(i, q)),
            n.reason !==
              o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
              B.push(
                o(
                  "WAWebRemoveStoredMuseAgentRequests",
                ).removeStoredMuseAgentRequestsOfRemovedMembers(
                  i,
                  n.participants.flatMap(function (e) {
                    var t = e.id,
                      n = e.lid;
                    return n == null ? [t] : [t, n];
                  }),
                  a,
                ),
              ),
            o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
              o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(
                n.participants,
              ).includeOpenMetabot &&
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  i,
                  { isOpenBotGroup: !1 },
                  a,
                ),
              ),
            B.push(
              o(
                "WAWebGroupHistoryParticipantJob",
              ).clearGroupHistoryParticipantStateOnRemove(i, n.participants),
            ),
            q.defaultSubgroup === !0 && q.parentGroup != null)
          ) {
            var H = o("WAWebWidFactory").createWid(q.parentGroup),
              G = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(H);
            G && B.push(V(H, G));
          }
          if (
            n.participants.find(function (e) {
              var t = e.id;
              return o("WAWebUserUtils").isMeAccount(t);
            })
          ) {
            var z = await o(
              "WAWebUpdateDbForCommunityAction",
            ).databaseUpdatesForSelfRemovedFromGroup(
              i,
              q == null ? void 0 : q.parentGroup,
              U,
            );
            B.push.apply(B, z);
          }
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE: {
          var j = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
          if (j == null) break;
          (n.participants.find(function (e) {
            var t = e.id;
            return o("WAWebUserUtils").isMeAccount(t);
          }) &&
            (o("WAWebApiParticipantStore").setAdminshipCache(i.toString(), !1),
            B.push(
              o(
                "WAWebApiMembershipApprovalRequestStore",
              ).removeAllMembershipApprovalRequests(i),
            ),
            B.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                i,
                { membershipForm: null, membershipFormKeyId: null },
                a,
              ),
            ),
            await $(j, i)),
            B.push(
              o("WAWebGroupParticipantsJob")
                .demoteParticipantsJob({
                  group: i,
                  groupMetadata: j,
                  isOffline: a,
                  participants: n.participants,
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebDBParticipantTypes").GroupUnSyncedError,
                    function () {
                      (o("WALogger").WARN(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "removeParticipants: out-of-sync group notification",
                          ])),
                      ),
                        P(i, a));
                    },
                  ),
                ),
            ));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE: {
          var K = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
          if (K == null) break;
          if (
            n.participants.find(function (e) {
              var t = e.id;
              return o("WAWebUserUtils").isMeAccount(t);
            })
          ) {
            if (
              K != null &&
              o("WAWebGroupMetadataGetters").getGroupType(K) ===
                o("WAWebGroupType").GroupType.COMMUNITY
            ) {
              var Q = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                K.id.toString(),
              );
              N(Q);
            }
            (o("WAWebApiParticipantStore").setAdminshipCache(i.toString(), !0),
              await $(K, i));
          }
          B.push(
            o("WAWebGroupParticipantsJob")
              .promoteParticipantsJob(i, n.participants, K, a)
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebDBParticipantTypes").GroupUnSyncedError,
                  function () {
                    (o("WALogger").WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "removeParticipants: out-of-sync group notification",
                        ])),
                    ),
                      P(i, a));
                  },
                ),
              ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE: {
          if (!n.jid) break;
          var X = n.jid,
            Y = await o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
              X.toString(),
            );
          Y ||
            B.push(
              o("WAWebGroupParticipantsJob")
                .promoteCommunityParticipantsJob(X, n.participants, a)
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebDBParticipantTypes").GroupUnSyncedError,
                    function () {
                      (o("WALogger").WARN(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "linkedGroupPromote: out-of-sync group notification",
                          ])),
                      ),
                        P(X, a));
                    },
                  ),
                ),
            );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE: {
          if (!n.jid) break;
          var J = n.jid,
            Z = await o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
              J.toString(),
            );
          Z ||
            B.push(
              o("WAWebGroupParticipantsJob")
                .demoteCommunityParticipantsJob({
                  group: J,
                  isOffline: a,
                  participants: n.participants,
                })
                .catch(
                  o("WAFilteredCatch").filteredCatch(
                    o("WAWebDBParticipantTypes").GroupUnSyncedError,
                    function () {
                      (o("WALogger").WARN(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "linkedGroupDemote: out-of-sync group notification",
                          ])),
                      ),
                        P(J, a));
                    },
                  ),
                ),
            );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE: {
          var ee = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
            te = o("WAWebUserUtils").getMeLidUserOrThrow().toString(),
            ne = l == null ? void 0 : l.toString();
          if (r("isStringNullOrEmpty")(ne) || l == null) {
            o("WALogger").WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "Received revoke without an admin jid ",
                  "",
                ])),
              n,
            );
            return;
          }
          var re = o("WAWebUserUtils").isMeAccount(l),
            oe = [];
          if (re)
            oe = n.participants.map(function (e) {
              return {
                from: ne,
                to: e.id.toString(),
                groupId: i.toString(),
                expiration: e.expiration,
              };
            });
          else {
            var ae,
              ie,
              le = n.participants.find(function (e) {
                return o("WAWebUserUtils").isMeAccount(e.id);
              });
            if (!le) {
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-invites] revoke from ",
                      ", user not in list",
                    ])),
                  ne,
                )
                .sendLogs("bad-revoke");
              return;
            }
            var se = o("WAWebWidFactory").asUserWidOrThrow(l),
              ue =
                (ae = o("WAWebLidMigrationUtils").toPn(se)) == null
                  ? void 0
                  : ae.toString(),
              ce =
                (ie = o("WAWebLidMigrationUtils").toLid(se)) == null
                  ? void 0
                  : ie.toString();
            if (r("isStringNullOrEmpty")(ce)) {
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-invites] revoke from other user",
                  ])),
              );
              var de =
                "[group-invites] failed to get lid mapping for *incoming* group invite *revoke*";
              o("WALogger")
                .ERROR(
                  C || (C = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  de,
                )
                .sendLogs(de);
            }
            ((oe = [
              {
                from: ce != null ? ce : "",
                to: te,
                groupId: i.toString(),
                expiration: le.expiration,
              },
            ]),
              ee != null &&
                oe.push({
                  from: ue != null ? ue : "",
                  to: ee.toString(),
                  groupId: i.toString(),
                  expiration: le.expiration,
                }));
          }
          await Promise.all(
            oe.map(function (e) {
              return o("WAWebDBRevokeInviteV4").revokeGroupInviteV4({
                expiration: e.expiration,
                from: e.from,
                groupId: e.groupId,
                to: e.to,
              });
            }),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MODIFY:
          if (n.participants.length !== 1) {
            o("WALogger").WARN(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "_handleGroupActionMD: expected 1 participant, got ",
                  "",
                ])),
              n.participants.length,
            );
            break;
          }
          B.push(
            o("WAWebGroupDatabaseJob")
              .modifyGroupParticipantJob(
                i,
                r("nullthrows")(l),
                n.participants[0].id,
              )
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebDBParticipantTypes").GroupUnSyncedError,
                  function () {
                    (o("WALogger").WARN(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "modifyGroupParticipant: out-of-sync group notification",
                        ])),
                    ),
                      P(i, a));
                  },
                ),
              ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT:
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { subject: n.subject },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              {
                desc: n.desc,
                descId: n.descId,
                descTime: n.descTime,
                descOwner: l == null ? void 0 : l.toString(),
              },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE:
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              {
                desc: void 0,
                descId: void 0,
                descTime: void 0,
                descOwner: void 0,
              },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.RESTRICT:
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { restrict: !!n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND: {
          var me = !!n.value;
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              babelHelpers.extends(
                { suspended: me },
                me ? { suspendAppealApprovedSeen: !1 } : null,
              ),
              a,
            ),
          );
          var pe = await o(
            "WAWebUpdateDbForCommunityAction",
          ).maybeUpdateCommunitySuspendedStatus(i, me, a);
          B.push.apply(B, pe);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL: {
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              {
                suspendAppealStatus: n.appealStatus,
                suspendAppealUpdateTime: n.appealUpdateTime,
              },
              a,
            ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE:
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { announce: !!n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { noFrequentlyForwarded: !!n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL: {
          var _e =
              o("WAWebAfterReadUtils").isAfterReadEnabled() &&
              o("WAWebAfterReadUtils").isAfterReadDuration(n.duration),
            fe = _e
              ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration()
              : n.duration,
            ge = _e ? n.duration : null,
            he = o("WAWebEphemeralityUtils").getDisappearingModeTrigger(
              n.trigger,
            );
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              {
                ephemeralDuration: fe,
                afterReadDuration: ge,
                disappearingModeTrigger: he != null ? he : void 0,
                disappearingModeInitiatedByMe: n.initiatedByMe,
              },
              a,
            ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.INVITE_CODE:
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK:
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DELETE:
          if (
            n.reason ===
            o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT
          ) {
            var ye = await o(
              "WAWebUpdateDbForCommunityAction",
            ).databaseUpdatesForIntegrityDeactivateCommunity(i, a);
            B.push.apply(B, ye);
          } else if (
            n.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
          ) {
            var Ce = await o(
              "WAWebUpdateDbForCommunityAction",
            ).databaseUpdatesForDeactivateCommunity(i, a);
            B.push.apply(B, Ce);
          } else
            B.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                i,
                { terminated: !0 },
                a,
              ),
            );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED:
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { growthLockExpiration: void 0, growthLockType: void 0 },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
          n.type === "invite" &&
            B.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                i,
                { growthLockExpiration: n.expiration, growthLockType: n.type },
                a,
              ),
            );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK: {
          var be = n.groupDatas[0].id;
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { parentGroup: be.toString() },
              a,
            ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
          B.push(
            o("WAWebDBCommunity").persistCommunityLink({
              action: o("WAWebDBCommunityTypes").CommunityLinkOperation
                .SubGroupLink,
              chatId: i,
              isOffline: a,
              subgroups: n.groupDatas,
            }),
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { lastActivityTimestamp: o("WATimeUtils").unixTime() },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK:
          B.push(
            o("WAWebDBCommunity").persistCommunityLink({
              action: o("WAWebDBCommunityTypes").CommunityLinkOperation
                .SiblingGroupLink,
              chatId: i,
              isOffline: a,
              subgroups: n.groupDatas,
            }),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK:
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { parentGroup: void 0 },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
          B.push(
            o("WAWebDBCommunity").persistCommunityLink({
              action: o("WAWebDBCommunityTypes").CommunityLinkOperation
                .SubGroupUnlink,
              chatId: i,
              isOffline: a,
              subgroups: n.groupDatas,
            }),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
          B.push(
            o("WAWebDBCommunity").persistCommunityLink({
              action: o("WAWebDBCommunityTypes").CommunityLinkOperation
                .SiblingGroupUnlink,
              chatId: i,
              isOffline: a,
              subgroups: n.groupDatas,
            }),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
          (B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { membershipApprovalMode: n.value },
              a,
            ),
          ),
            n.value ||
              B.push(
                o(
                  "WAWebApiMembershipApprovalRequestStore",
                ).removeAllMembershipApprovalRequests(i),
              ));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS:
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              babelHelpers.extends(
                { reportToAdminMode: n.value },
                !n.value && { lastReportToAdminTimestamp: null },
              ),
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECEIVED:
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { lastReportToAdminTimestamp: n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS:
          {
            B.push(
              o(
                "WAWebApiMembershipApprovalRequestStore",
              ).addMembershipApprovalRequests(
                i,
                n.requests.map(function (e) {
                  var t = e.wid;
                  return {
                    id: t,
                    t: M,
                    addedBy: r("nullthrows")(l),
                    requestMethod: n.requestMethod,
                    parentGroupId: n.parentGroupId,
                  };
                }),
              ),
            );
            var ve = o("WAWebNux").getMembershipApprovalRequestsBannerNuxKey(
              i.toString(),
            );
            N(ve);
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
          B.push(
            o(
              "WAWebGroupMembershipApprovalRequestsJob",
            ).removeMembershipApprovalRequestsJob(i, n.requests, a),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { allowNonAdminSubGroupCreation: !!n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION: {
          var Se;
          B.push(
            o("WAWebApiSubgroupSuggestionStore").addSubgroupSuggestions(i, [
              {
                id: n.id,
                parentGroupId: n.parentGroupId,
                subject: n.subject,
                desc: n.description,
                owner: n.owner,
                t: n.t,
                isExistingGroup: (Se = n.isExistingGroup) != null ? Se : !1,
                participantCount: n.participantCount,
                hiddenSubgroup: n.hiddenSubgroup,
              },
            ]),
          );
          var Re = o("WAWebNux").getSubgroupSuggestionsBannerNuxKey(
            i.toString(),
          );
          N(Re);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_SUB_GROUP_SUGGESTIONS:
          B.push(
            o("WAWebSubgroupSuggestionsJob").removeSubgroupSuggestionsJob(
              n.subgroupSuggestions.map(function (e) {
                var t = e.id,
                  r = e.owner;
                return { parentGroupId: n.parentGroupId, id: t, owner: r };
              }),
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS
          .SUBGROUP_SUGGESTIONS_CHANGE_NUMBER:
          B.push(
            o(
              "WAWebApiSubgroupSuggestionStore",
            ).updateOwnerInSubgroupSuggestions({
              newOwner: n.newOwner,
              oldOwner: n.oldOwner,
              parentGroupId: n.parentGroupId,
              subgroupSuggestions: n.subgroupSuggestions,
            }),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE: {
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { memberAddMode: n.memberAddMode },
              a,
            ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE: {
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { memberLinkMode: n.value },
              a,
            ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED: {
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { generalChatAutoAddDisabled: !0 },
              a,
            ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
          B.push(
            o("WAWebGroupParticipantsJob")
              .setGroupSuperAdminJob(i, n.newOwner)
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebDBParticipantTypes").GroupUnSyncedError,
                  function () {
                    (o("WALogger").WARN(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "communityOwnerUpdate: out-of-sync group notification",
                        ])),
                    ),
                      P(i, a));
                  },
                ),
              ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP: {
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(i, {
              hiddenSubgroup: !!n.value,
            }),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK: {
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(i, {
              groupSafetyCheck: !!n.value,
            }),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GROUP_REACTION_SETTINGS: {
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { groupReactionSettings: n.value },
              a,
            ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS
          .MEMBER_SHARE_GROUP_HISTORY_MODE: {
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { memberShareGroupHistoryMode: n.value },
              a,
            ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_FORM: {
          B.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              n.membershipFormKeyId !== void 0
                ? {
                    membershipForm: n.membershipForm,
                    membershipFormKeyId: n.membershipFormKeyId,
                  }
                : { membershipForm: n.membershipForm },
              a,
            ),
          );
          break;
        }
        default:
          o("WALogger")
            .ERROR(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleGroupActionMD] unhandled action ",
                  "",
                ])),
              JSON.stringify(n),
            )
            .tags("groups");
          break;
      }
      (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
        t.hasIncompleteParticipantInformation === !0 &&
        B.push(
          o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
            i,
            { hasIncompleteParticipantInformation: !0 },
            a,
          ),
        ),
        await Promise.all(B),
        n.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD &&
          (x(i, n.participants)
            .then(function (e) {
              return o(
                "WAWebSyncGroupBotSupportFields",
              ).maybeLazySyncGroupBotSupportFields(e, [], {
                endFetchPause: !0,
                sourceGroupWid: i,
              });
            })
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "updateDBForGroupAction: failed to refresh added agent profiles",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("group-action-refresh-agent-profiles-error");
            }),
          o(
            "WAWebIncompatibleAgentRequestsRejectTriggers",
          ).startIncompatibleAgentRequestRejectsAfterAddNotification(
            i,
            n.participants.map(function (e) {
              var t = e.id;
              return t;
            }),
          )),
        n.actionType ===
          o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS &&
          T.load()
            .then(function (e) {
              return e.scheduleGroupMembershipFormAnswersRefetch(i, {
                debounced: !0,
              });
            })
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[GMF] membership form answers refetch failed to start",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("gmf-answers-refetch-load-failed");
            }),
        o("WALogger")
          .LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "finished all storageTasks",
              ])),
          )
          .tags("groups"));
    }
    async function x(e, t) {
      var n,
        r = t.map(function (e) {
          var t = e.id;
          return t;
        });
      if (!r.some(o("WAWebUserUtils").isMeAccount)) return r;
      var a = await o("WAWebGroupsParticipantsApi").getParticipants(e),
        i = ((n = a == null ? void 0 : a.participants) != null ? n : [])
          .map(function (e) {
            return o("WAWebWidFactory").createWid(e);
          })
          .filter(function (e) {
            return !r.some(function (t) {
              return t.equals(e);
            });
          });
      return [].concat(r, i);
    }
    async function $(e, t) {
      if (e.isParentGroup === !0 && e.allowNonAdminSubGroupCreation !== !0) {
        var n = await o("WAWebDBCommunity").getJoinedSubgroups(t);
        n[0] &&
          o(
            "WAWebQueryAndUpdateSubgroupSuggestionsJob",
          ).queryAndUpdateSubgroupSuggestions(t, n[0]);
      }
    }
    async function P(e, t) {
      try {
        t === !0
          ? await o("WAWebGroupDatabaseJob").markGroupParticipantStaleJob(e)
          : await o("WAWebGroupQueryBridge").sendQueryGroup(e);
      } catch (e) {
        o("WALogger").WARN(
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
              "handleGroupUnsyncedError: failed: ",
              "",
            ])),
          e,
        );
      }
    }
    function N(e) {
      o("WAWebBackendApi").frontendFireAndForget("resetNux", { key: e });
    }
    async function M(e, t) {
      var n = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
      return (
        n != null &&
          ((n.disappearingModeTrigger = t),
          await o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e, {
            disappearingModeTrigger: t,
          })),
        Promise.resolve()
      );
    }
    ((l.updateDBForGroupAction = D), (l.syncDisappearingModeTriggerToDB = M));
  },
  98,
);
