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
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E;
    async function k(t, n, a) {
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
        E = t.pushname,
        k = t.ts,
        x = k === void 0 ? Date.now() / 1e3 : k;
      l &&
        !r("isStringNullOrEmpty")(E) &&
        o("WAWebHandlePushnameUpdate")
          .updatePushname(l, E, a)
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
      var $ = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i),
        P = ($ == null ? void 0 : $.isParentGroup) === !0,
        N = !!t.isLidAddressingMode,
        M = N !== !!($ != null && $.isLidAddressingMode),
        w = [];
      switch (
        (P &&
          M &&
          (w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { isLidAddressingMode: N },
              a,
            ),
          ),
          w.push(
            o("WAWebGroupParticipantsJob")
              .migrateParentGroupToLIDOrFallbackToPNJob(i.toString(), N)
              .catch(function () {
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[parent-group] migrate to LID/PN failed; isLID=",
                      "",
                    ])),
                  N,
                );
              }),
          )),
        n.actionType)
      ) {
        case o("WAWebGroupType").GROUP_ACTIONS.ADD:
          if (
            (w.push(
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
                        T(i, a));
                    },
                  ),
                ),
            ),
            w.push(
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
            w.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(i, {
                groupAdder: l == null ? void 0 : l.toString(),
              }),
            ),
            w.push(
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
            var A = o(
              "WAWebBotUtils",
            ).participantListIncludOpenOrTeeGroupBotWid(n.participants);
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() &&
              A.includeOpenMetabot &&
              w.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  i,
                  { isOpenBotGroup: !0 },
                  a,
                ),
              ),
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled() &&
                A.includeTeeMetabot &&
                w.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                    i,
                    { isTeeBotGroup: !0 },
                    a,
                  ),
                ));
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.REMOVE: {
          var F = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
          if (F == null) break;
          var O =
              n.reason !==
                o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
              n.participants.some(function (e) {
                var t = e.id;
                return o("WAWebUserPrefsMeUser").isMeAccount(t);
              }) &&
              (await o("WAWebDBCommunity").isLastJoinedSubgroup(F)),
            B = function (r, i) {
              return o("WAWebGroupParticipantsJob")
                .removeParticipantsJob(
                  r,
                  n.participants,
                  x,
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
                        T(r, a));
                    },
                  ),
                );
            };
          if (
            (w.push(B(i, F)), F.defaultSubgroup === !0 && F.parentGroup != null)
          ) {
            var W = o("WAWebWidFactory").createWid(F.parentGroup),
              q = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(W);
            q && w.push(B(W, q));
          }
          if (
            n.participants.find(function (e) {
              var t = e.id;
              return o("WAWebUserPrefsMeUser").isMeAccount(t);
            })
          ) {
            var U = await o(
              "WAWebUpdateDbForCommunityAction",
            ).databaseUpdatesForSelfRemovedFromGroup(
              i,
              F == null ? void 0 : F.parentGroup,
              O,
            );
            w.push.apply(w, U);
          }
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE: {
          var V = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
          if (V == null) break;
          (n.participants.find(function (e) {
            var t = e.id;
            return o("WAWebUserPrefsMeUser").isMeAccount(t);
          }) &&
            (o("WAWebApiParticipantStore").setAdminshipCache(i.toString(), !1),
            w.push(
              o(
                "WAWebApiMembershipApprovalRequestStore",
              ).removeAllMembershipApprovalRequests(i),
            ),
            await I(V, i)),
            w.push(
              o("WAWebGroupParticipantsJob")
                .demoteParticipantsJob(i, n.participants, V, a)
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
                        T(i, a));
                    },
                  ),
                ),
            ));
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE: {
          var H = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(i);
          if (H == null) break;
          if (
            n.participants.find(function (e) {
              var t = e.id;
              return o("WAWebUserPrefsMeUser").isMeAccount(t);
            })
          ) {
            if (
              H != null &&
              o("WAWebGroupType").getGroupTypeFromGroupMetadata(H) ===
                o("WAWebGroupType").GroupType.COMMUNITY
            ) {
              var G = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                H.id.toString(),
              );
              D(G);
            }
            (o("WAWebApiParticipantStore").setAdminshipCache(i.toString(), !0),
              await I(H, i));
          }
          w.push(
            o("WAWebGroupParticipantsJob")
              .promoteParticipantsJob(i, n.participants, H, a)
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
                      T(i, a));
                  },
                ),
              ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE: {
          if (!n.jid) break;
          var z = n.jid,
            j = await o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
              z.toString(),
            );
          j ||
            w.push(
              o("WAWebGroupParticipantsJob")
                .promoteCommunityParticipantsJob(z, n.participants, a)
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
                        T(z, a));
                    },
                  ),
                ),
            );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE: {
          if (!n.jid) break;
          var K = n.jid,
            Q = await o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
              K.toString(),
            );
          Q ||
            w.push(
              o("WAWebGroupParticipantsJob")
                .demoteCommunityParticipantsJob(K, n.participants, a)
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
                        T(K, a));
                    },
                  ),
                ),
            );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE: {
          var X = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
            Y = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString(),
            J = l == null ? void 0 : l.toString();
          if (r("isStringNullOrEmpty")(J) || l == null) {
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
          var Z = o("WAWebUserPrefsMeUser").isMeAccount(l),
            ee = [];
          if (Z)
            ee = n.participants.map(function (e) {
              return {
                from: J,
                to: e.id.toString(),
                groupId: i.toString(),
                expiration: e.expiration,
              };
            });
          else {
            var te,
              ne,
              re = n.participants.find(function (e) {
                return o("WAWebUserPrefsMeUser").isMeAccount(e.id);
              });
            if (!re) {
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-invites] revoke from ",
                      ", user not in list",
                    ])),
                  J,
                )
                .sendLogs("bad-revoke");
              return;
            }
            var oe = o("WAWebWidFactory").asUserWidOrThrow(l),
              ae =
                (te = o("WAWebLidMigrationUtils").toPn(oe)) == null
                  ? void 0
                  : te.toString(),
              ie =
                (ne = o("WAWebLidMigrationUtils").toLid(oe)) == null
                  ? void 0
                  : ne.toString();
            if (r("isStringNullOrEmpty")(ie)) {
              var le = o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated();
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-invites] isLidMigrated=",
                    ", revoke from other user",
                  ])),
                le,
              );
              var se =
                "[group-invites] failed to get lid mapping for *incoming* group invite *revoke*";
              o("WALogger")
                .ERROR(
                  C || (C = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  se,
                )
                .sendLogs(se);
            }
            ((ee = [
              {
                from: ie != null ? ie : "",
                to: Y,
                groupId: i.toString(),
                expiration: re.expiration,
              },
            ]),
              X != null &&
                ee.push({
                  from: ae != null ? ae : "",
                  to: X.toString(),
                  groupId: i.toString(),
                  expiration: re.expiration,
                }));
          }
          await Promise.all(
            ee.map(function (e) {
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
          w.push(
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
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "modifyGroupParticipant: out-of-sync group notification",
                        ])),
                    ),
                      T(i, a));
                  },
                ),
              ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT:
          w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { subject: n.subject },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
          w.push(
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
          w.push(
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
          w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { restrict: !!n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND: {
          var ue = !!n.value;
          w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { suspended: ue },
              a,
            ),
          );
          var ce = await o(
            "WAWebUpdateDbForCommunityAction",
          ).maybeUpdateCommunitySuspendedStatus(i, ue, a);
          w.push.apply(w, ce);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL: {
          w.push(
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
          w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { announce: !!n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
          w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { noFrequentlyForwarded: !!n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL: {
          var de =
              o("WAWebAfterReadUtils").isAfterReadEnabled() &&
              o("WAWebAfterReadUtils").isAfterReadDuration(n.duration),
            me = de
              ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration()
              : n.duration,
            pe = de ? n.duration : null;
          if (
            o("WAWebABProps").getABPropConfigValue(
              "dm_initiator_trigger_groups",
            )
          ) {
            var _e = o("WAWebEphemeralityUtils").getDisappearingModeTrigger(
              n.trigger,
            );
            w.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                i,
                {
                  ephemeralDuration: me,
                  afterReadDuration: pe,
                  disappearingModeTrigger: _e != null ? _e : void 0,
                  disappearingModeInitiatedByMe: n.initiatedByMe,
                },
                a,
              ),
            );
          } else
            w.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                i,
                { ephemeralDuration: me, afterReadDuration: pe },
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
            var fe = await o(
              "WAWebUpdateDbForCommunityAction",
            ).databaseUpdatesForIntegrityDeactivateCommunity(i, a);
            w.push.apply(w, fe);
          } else if (
            n.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
          ) {
            var ge = await o(
              "WAWebUpdateDbForCommunityAction",
            ).databaseUpdatesForDeactivateCommunity(i, a);
            w.push.apply(w, ge);
          } else
            w.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                i,
                { terminated: !0 },
                a,
              ),
            );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED:
          w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { growthLockExpiration: void 0, growthLockType: void 0 },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
          n.type === "invite" &&
            w.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                i,
                { growthLockExpiration: n.expiration, growthLockType: n.type },
                a,
              ),
            );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK: {
          var he = n.groupDatas[0].id;
          w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { parentGroup: he.toString() },
              a,
            ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
          w.push(
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
          w.push(
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
          w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { parentGroup: void 0 },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
          w.push(
            o("WAWebDBCommunity").persistCommunityLink(
              i,
              n.groupDatas,
              o("WAWebDBCommunityTypes").CommunityLinkOperation.SubGroupUnlink,
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
          w.push(
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
          (w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { membershipApprovalMode: n.value },
              a,
            ),
          ),
            n.value ||
              w.push(
                o(
                  "WAWebApiMembershipApprovalRequestStore",
                ).removeAllMembershipApprovalRequests(i),
              ));
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS:
          w.push(
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
          w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { lastReportToAdminTimestamp: n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS:
          {
            w.push(
              o(
                "WAWebApiMembershipApprovalRequestStore",
              ).addMembershipApprovalRequests(
                i,
                n.requests.map(function (e) {
                  var t = e.wid;
                  return {
                    id: t,
                    t: x,
                    addedBy: r("WANullthrows")(l),
                    requestMethod: n.requestMethod,
                    parentGroupId: n.parentGroupId,
                  };
                }),
              ),
            );
            var ye = o("WAWebNux").getMembershipApprovalRequestsBannerNuxKey(
              i.toString(),
            );
            D(ye);
          }
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
          w.push(
            o(
              "WAWebGroupMembershipApprovalRequestsJob",
            ).removeMembershipApprovalRequestsJob(i, n.requests, a),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS
          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { allowNonAdminSubGroupCreation: !!n.value },
              a,
            ),
          );
          break;
        case o("WAWebGroupType").GROUP_ACTIONS.CREATED_SUBGROUP_SUGGESTION: {
          var Ce;
          w.push(
            o("WAWebApiSubgroupSuggestionStore").addSubgroupSuggestions(i, [
              {
                id: n.id,
                parentGroupId: n.parentGroupId,
                subject: n.subject,
                desc: n.description,
                owner: n.owner,
                t: n.t,
                isExistingGroup: (Ce = n.isExistingGroup) != null ? Ce : !1,
                participantCount: n.participantCount,
                hiddenSubgroup: n.hiddenSubgroup,
              },
            ]),
          );
          var be = o("WAWebNux").getSubgroupSuggestionsBannerNuxKey(
            i.toString(),
          );
          D(be);
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_SUB_GROUP_SUGGESTIONS:
          w.push(
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
          w.push(
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
          w.push(
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
            w.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                i,
                { memberLinkMode: n.value },
                a,
              ),
            );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GENERAL_CHAT_AUTO_ADD_DISABLED: {
          w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
              i,
              { generalChatAutoAddDisabled: !0 },
              a,
            ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
          w.push(
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
                      T(i, a));
                  },
                ),
              ),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP: {
          w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(i, {
              hiddenSubgroup: !!n.value,
            }),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK: {
          w.push(
            o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(i, {
              groupSafetyCheck: !!n.value,
            }),
          );
          break;
        }
        case o("WAWebGroupType").GROUP_ACTIONS
          .MEMBER_SHARE_GROUP_HISTORY_MODE: {
          o("WAWebGroupHistoryGating").isGroupHistorySettingsEnabled() &&
            w.push(
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
        w.push(
          o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
            i,
            { hasIncompleteParticipantInformation: !0 },
            a,
          ),
        ),
        await Promise.all(w),
        o("WALogger")
          .LOG(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "finished all storageTasks",
              ])),
          )
          .tags("groups"));
    }
    async function I(e, t) {
      if (e.isParentGroup === !0 && e.allowNonAdminSubGroupCreation !== !0) {
        var n = await o("WAWebDBCommunity").getJoinedSubgroups(t);
        n[0] &&
          o(
            "WAWebQueryAndUpdateSubgroupSuggestionsJob",
          ).queryAndUpdateSubgroupSuggestions(t, n[0]);
      }
    }
    async function T(e, t) {
      try {
        t === !0
          ? await o("WAWebGroupDatabaseJob").markGroupParticipantStaleJob(e)
          : await o("WAWebGroupQueryBridge").sendQueryGroup(e);
      } catch (e) {
        o("WALogger").WARN(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "handleGroupUnsyncedError: failed: ",
              "",
            ])),
          e,
        );
      }
    }
    function D(e) {
      o("WAWebBackendApi").frontendFireAndForget("resetNux", { key: e });
    }
    async function x(e, t) {
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
    ((l.updateDBForGroupAction = k), (l.syncDisappearingModeTriggerToDB = x));
  },
  98,
);
