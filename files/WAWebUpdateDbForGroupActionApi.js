__d(
  "WAWebUpdateDbForGroupActionApi",
  [
    "WAFilteredCatch",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebABProps",
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
    "WAWebGroupGatingUtils",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupMembershipApprovalRequestsJob",
    "WAWebGroupParticipantsJob",
    "WAWebGroupQueryBridge",
    "WAWebGroupType",
    "WAWebHandlePushnameUpdate",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebNux",
    "WAWebQueryAndUpdateSubgroupSuggestionsJob",
    "WAWebSubgroupSuggestionsJob",
    "WAWebUpdateDbForCommunityAction",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k;
    async function I(t, n, a) {
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
        k = t.pushname,
        I = t.ts,
        $ = I === void 0 ? Date.now() / 1e3 : I;
      l &&
        !r("isStringNullOrEmpty")(k) &&
        o("WAWebHandlePushnameUpdate")
          .updatePushname(l, k, a)
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
      var P = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i),
        N = (P == null ? void 0 : P.isParentGroup) === !0,
        M = !!t.isLidAddressingMode,
        w = M !== !!(P != null && P.isLidAddressingMode),
        A = [];
      switch (
        (N &&
          w &&
          (A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { isLidAddressingMode: M },
              a,
            ),
          ),
          A.push(
            o("WAWebGroupParticipantsJob")
              .migrateParentGroupToLIDOrFallbackToPNJob(i.toString(), M)
              .catch(function () {
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[parent-group] migrate to LID/PN failed; isLID=",
                      "",
                    ])),
                  M,
                );
              }),
          )),
        n.actionType)
      ) {
        case o("WAWebGroupType").GROUP_ACTIONS.ADD:
          if (
            (A.push(
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
                        D(i, a));
                    },
                  ),
                ),
            ),
            A.push(
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
            A.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(i, {
                groupAdder: l == null ? void 0 : l.toString(),
              }),
            ),
            A.push(
              o(
                "WAWebGroupHistoryParticipantJob",
              ).updateGroupHistoryParticipantMetadataOnJoin(i, n.participants),
            ),
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled())
          ) {
            var F = o(
              "WAWebBotUtils",
            ).participantListIncludOpenOrTeeGroupBotWid(n.participants);
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() &&
              F.includeOpenMetabot &&
              A.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  i,
                  { isOpenBotGroup: !0 },
                  a,
                ),
              ),
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled() &&
                F.includeTeeMetabot &&
                A.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                    i,
                    { isTeeBotGroup: !0 },
                    a,
                  ),
                ));
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.REMOVE: {
          var O = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
          if (O == null) break;
          var B =
              n.reason !==
                o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
              n.participants.some(function (e) {
                var t = e.id;
                return o("WAWebUserPrefsMeUser").isMeAccount(t);
              }) &&
              (await o("WAWebDBCommunity").isLastJoinedSubgroup(O)),
            W = function (r, i) {
              return o("WAWebGroupParticipantsJob")
                .removeParticipantsJob(
                  r,
                  n.participants,
                  $,
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
                        D(r, a));
                    },
                  ),
                );
            };
          if (
            (A.push(W(i, O)), O.defaultSubgroup === !0 && O.parentGroup != null)
          ) {
            var q = o("WAWebWidFactory").createWid(O.parentGroup),
              U = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(q);
            U && A.push(W(q, U));
          }
          if (
            n.participants.find(function (e) {
              var t = e.id;
              return o("WAWebUserPrefsMeUser").isMeAccount(t);
            })
          ) {
            var V = await o(
              "WAWebUpdateDbForCommunityAction",
            ).databaseUpdatesForSelfRemovedFromGroup(
              i,
              O == null ? void 0 : O.parentGroup,
              B,
            );
            A.push.apply(A, V);
          }
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE: {
          var H = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
          if (H == null) break;
          (n.participants.find(function (e) {
            var t = e.id;
            return o("WAWebUserPrefsMeUser").isMeAccount(t);
          }) &&
            (o("WAWebApiParticipantStore").setAdminshipCache(i.toString(), !1),
            A.push(
              o(
                "WAWebApiMembershipApprovalRequestStore",
              ).removeAllMembershipApprovalRequests(i),
            ),
            await T(H, i)),
            A.push(
              o("WAWebGroupParticipantsJob")
                .demoteParticipantsJob(i, n.participants, H, a)
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
                        D(i, a));
                    },
                  ),
                ),
            ));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE: {
          var G = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
          if (G == null) break;
          if (
            n.participants.find(function (e) {
              var t = e.id;
              return o("WAWebUserPrefsMeUser").isMeAccount(t);
            })
          ) {
            if (
              G != null &&
              o("WAWebGroupType").getGroupTypeFromGroupMetadata(G) ===
                o("WAWebGroupType").GroupType.COMMUNITY
            ) {
              var z = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                G.id.toString(),
              );
              x(z);
            }
            (o("WAWebApiParticipantStore").setAdminshipCache(i.toString(), !0),
              await T(G, i));
          }
          A.push(
            o("WAWebGroupParticipantsJob")
              .promoteParticipantsJob(i, n.participants, G, a)
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
                      D(i, a));
                  },
                ),
              ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE: {
          if (!n.jid) break;
          var j = n.jid,
            K = await o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
              j.toString(),
            );
          K ||
            A.push(
              o("WAWebGroupParticipantsJob")
                .promoteCommunityParticipantsJob(j, n.participants, a)
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
                        D(j, a));
                    },
                  ),
                ),
            );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE: {
          if (!n.jid) break;
          var Q = n.jid,
            X = await o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
              Q.toString(),
            );
          X ||
            A.push(
              o("WAWebGroupParticipantsJob")
                .demoteCommunityParticipantsJob(Q, n.participants, a)
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
                        D(Q, a));
                    },
                  ),
                ),
            );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE: {
          var Y = o("WAWebUserPrefsMeUser")
              .getMePnUserOrThrow_DO_NOT_USE()
              .toString(),
            J = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString();
          if (Y == null || J == null) {
            o("WALogger").WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "getMaybeMePnUser returned null, can't process action ",
                  "",
                ])),
              n,
            );
            return;
          }
          var Z = l == null ? void 0 : l.toString();
          if (r("isStringNullOrEmpty")(Z) || l == null) {
            o("WALogger").WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "Received revoke without an admin jid ",
                  "",
                ])),
              n,
            );
            return;
          }
          var ee = o("WAWebUserPrefsMeUser").isMeAccount(l),
            te = [];
          if (ee)
            te = n.participants.map(function (e) {
              return {
                from: Z,
                to: e.id.toString(),
                groupId: i.toString(),
                expiration: e.expiration,
              };
            });
          else {
            var ne,
              re,
              oe = n.participants.find(function (e) {
                return o("WAWebUserPrefsMeUser").isMeAccount(e.id);
              });
            if (!oe) {
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-invites] revoke from ",
                      ", user not in list",
                    ])),
                  Z,
                )
                .sendLogs("bad-revoke");
              return;
            }
            var ae = o("WAWebWidFactory").asUserWidOrThrow(l),
              ie =
                (ne = o("WAWebLidMigrationUtils").toPn(ae)) == null
                  ? void 0
                  : ne.toString(),
              le =
                (re = o("WAWebLidMigrationUtils").toLid(ae)) == null
                  ? void 0
                  : re.toString();
            if (r("isStringNullOrEmpty")(le)) {
              var se = o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated();
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-invites] isLidMigrated=",
                    ", revoke from other user",
                  ])),
                se,
              );
              var ue =
                "[group-invites] failed to get lid mapping for *incoming* group invite *revoke*";
              o("WALogger")
                .ERROR(
                  b || (b = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  ue,
                )
                .sendLogs(ue);
            }
            te = [
              {
                from: ie != null ? ie : "",
                to: Y,
                groupId: i.toString(),
                expiration: oe.expiration,
              },
              {
                from: le != null ? le : "",
                to: J,
                groupId: i.toString(),
                expiration: oe.expiration,
              },
            ];
          }
          await Promise.all(
            te.map(function (e) {
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
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "_handleGroupActionMD: expected 1 participant, got ",
                  "",
                ])),
              n.participants.length,
            );
            break;
          }
          A.push(
            o("WAWebGroupDatabaseJob")
              .modifyGroupParticipantJob(
                i,
                r("WANullthrows")(l),
                n.participants[0].id,
              )
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebDBParticipantTypes").GroupUnSyncedError,
                  function () {
                    (o("WALogger").WARN(
                      S ||
                        (S = babelHelpers.taggedTemplateLiteralLoose([
                          "modifyGroupParticipant: out-of-sync group notification",
                        ])),
                    ),
                      D(i, a));
                  },
                ),
              ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT:
          A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { subject: n.subject },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
          A.push(
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
          A.push(
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
          A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { restrict: !!n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND: {
          var ce = !!n.value;
          A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { suspended: ce },
              a,
            ),
          );
          var de = await o(
            "WAWebUpdateDbForCommunityAction",
          ).maybeUpdateCommunitySuspendedStatus(i, ce, a);
          A.push.apply(A, de);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL: {
          A.push(
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
          A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { announce: !!n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
          A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { noFrequentlyForwarded: !!n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL: {
          var me =
              o("WAWebAfterReadUtils").isAfterReadEnabled() &&
              o("WAWebAfterReadUtils").isAfterReadDuration(n.duration),
            pe = me
              ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration()
              : n.duration,
            _e = me ? n.duration : null;
          if (
            o("WAWebABProps").getABPropConfigValue(
              "dm_initiator_trigger_groups",
            )
          ) {
            var fe = o("WAWebEphemeralityUtils").getDisappearingModeTrigger(
              n.trigger,
            );
            A.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                i,
                {
                  ephemeralDuration: pe,
                  afterReadDuration: _e,
                  disappearingModeTrigger: fe != null ? fe : void 0,
                  disappearingModeInitiatedByMe: n.initiatedByMe,
                },
                a,
              ),
            );
          } else
            A.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                i,
                { ephemeralDuration: pe, afterReadDuration: _e },
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
            var ge = await o(
              "WAWebUpdateDbForCommunityAction",
            ).databaseUpdatesForIntegrityDeactivateCommunity(i, a);
            A.push.apply(A, ge);
          } else if (
            n.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
          ) {
            var he = await o(
              "WAWebUpdateDbForCommunityAction",
            ).databaseUpdatesForDeactivateCommunity(i, a);
            A.push.apply(A, he);
          } else
            A.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                i,
                { terminated: !0 },
                a,
              ),
            );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED:
          A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { growthLockExpiration: void 0, growthLockType: void 0 },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
          n.type === "invite" &&
            A.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                i,
                { growthLockExpiration: n.expiration, growthLockType: n.type },
                a,
              ),
            );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK: {
          var ye = n.groupDatas[0].id;
          A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { parentGroup: ye.toString() },
              a,
            ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
          A.push(
            o("WAWebDBCommunity").persistCommunityLink(
              i,
              n.groupDatas,
              o("WAWebDBCommunityTypes").CommunityLinkOperation.SubGroupLink,
              a,
            ),
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { lastActivityTimestamp: o("WATimeUtils").unixTime() },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK:
          A.push(
            o("WAWebDBCommunity").persistCommunityLink(
              i,
              n.groupDatas,
              o("WAWebDBCommunityTypes").CommunityLinkOperation
                .SiblingGroupLink,
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK:
          A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { parentGroup: void 0 },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
          A.push(
            o("WAWebDBCommunity").persistCommunityLink(
              i,
              n.groupDatas,
              o("WAWebDBCommunityTypes").CommunityLinkOperation.SubGroupUnlink,
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
          A.push(
            o("WAWebDBCommunity").persistCommunityLink(
              i,
              n.groupDatas,
              o("WAWebDBCommunityTypes").CommunityLinkOperation
                .SiblingGroupUnlink,
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
          (A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { membershipApprovalMode: n.value },
              a,
            ),
          ),
            n.value ||
              A.push(
                o(
                  "WAWebApiMembershipApprovalRequestStore",
                ).removeAllMembershipApprovalRequests(i),
              ));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS:
          A.push(
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
        case o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECIEVED:
          A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { lastReportToAdminTimestamp: n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS:
          {
            A.push(
              o(
                "WAWebApiMembershipApprovalRequestStore",
              ).addMembershipApprovalRequests(
                i,
                n.requests.map(function (e) {
                  var t = e.wid;
                  return {
                    id: t,
                    t: $,
                    addedBy: r("WANullthrows")(l),
                    requestMethod: n.requestMethod,
                    parentGroupId: n.parentGroupId,
                  };
                }),
              ),
            );
            var Ce = o("WAWebNux").getMembershipApprovalRequestsBannerNuxKey(
              i.toString(),
            );
            x(Ce);
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
          A.push(
            o(
              "WAWebGroupMembershipApprovalRequestsJob",
            ).removeMembershipApprovalRequestsJob(i, n.requests, a),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { allowNonAdminSubGroupCreation: !!n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION: {
          var be;
          A.push(
            o("WAWebApiSubgroupSuggestionStore").addSubgroupSuggestions(i, [
              {
                id: n.id,
                parentGroupId: n.parentGroupId,
                subject: n.subject,
                desc: n.description,
                owner: n.owner,
                t: n.t,
                isExistingGroup: (be = n.isExistingGroup) != null ? be : !1,
                participantCount: n.participantCount,
                hiddenSubgroup: n.hiddenSubgroup,
              },
            ]),
          );
          var ve = o("WAWebNux").getSubgroupSuggestionsBannerNuxKey(
            i.toString(),
          );
          x(ve);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_SUB_GROUP_SUGGESTIONS:
          A.push(
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
          A.push(
            o(
              "WAWebApiSubgroupSuggestionStore",
            ).updateOwnerInSubgroupSuggestions(
              n.parentGroupId,
              n.subgroupSuggestions,
              n.oldOwner,
              n.newOwner,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE: {
          A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { memberAddMode: n.memberAddMode },
              a,
            ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE: {
          o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsEnabled() &&
            A.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                i,
                { memberLinkMode: n.value },
                a,
              ),
            );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED: {
          A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { generalChatAutoAddDisabled: !0 },
              a,
            ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
          A.push(
            o("WAWebGroupParticipantsJob")
              .setGroupSuperAdminJob(i, n.newOwner)
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebDBParticipantTypes").GroupUnSyncedError,
                  function () {
                    (o("WALogger").WARN(
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
                          "communityOwnerUpdate: out-of-sync group notification",
                        ])),
                    ),
                      D(i, a));
                  },
                ),
              ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP: {
          A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(i, {
              hiddenSubgroup: !!n.value,
            }),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK: {
          A.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(i, {
              groupSafetyCheck: !!n.value,
            }),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS
          .MEMBER_SHARE_GROUP_HISTORY_MODE: {
          o("WAWebGroupHistoryGating").isGroupHistorySettingsEnabled() &&
            A.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                i,
                { memberShareGroupHistoryMode: n.value },
                a,
              ),
            );
          break;
        }
        default:
          o("WALogger")
            .ERROR(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
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
        A.push(
          o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
            i,
            { hasIncompleteParticipantInformation: !0 },
            a,
          ),
        ),
        await Promise.all(A),
        o("WALogger")
          .LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "finished all storageTasks",
              ])),
          )
          .tags("groups"));
    }
    async function T(e, t) {
      if (e.isParentGroup === !0 && e.allowNonAdminSubGroupCreation !== !0) {
        var n = await o("WAWebDBCommunity").getJoinedSubgroups(t);
        n[0] &&
          o(
            "WAWebQueryAndUpdateSubgroupSuggestionsJob",
          ).queryAndUpdateSubgroupSuggestions(t, n[0]);
      }
    }
    async function D(e, t) {
      try {
        t === !0
          ? await o("WAWebGroupDatabaseJob").markGroupParticipantStaleJob(e)
          : await o("WAWebGroupQueryBridge").sendQueryGroup(e);
      } catch (e) {
        o("WALogger").WARN(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "handleGroupUnsyncedError: failed: ",
              "",
            ])),
          e,
        );
      }
    }
    function x(e) {
      o("WAWebBackendApi").frontendFireAndForget("resetNux", { key: e });
    }
    async function $(e, t) {
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
    ((l.updateDBForGroupAction = I), (l.syncDisappearingModeTriggerToDB = $));
  },
  98,
);
