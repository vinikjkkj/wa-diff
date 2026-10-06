__d(
  "WAWebUpdateDbForGroupActionApi",
  [
    "Promise",
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
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebNux",
    "WAWebQueryAndUpdateSubgroupSuggestionsJob",
    "WAWebRemoveStoredMuseAgentRequests",
    "WAWebSubgroupSuggestionsJob",
    "WAWebSyncGroupBotSupportFields",
    "WAWebUpdateDbForCommunityAction",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I;
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          (i === void 0 && (i = !1),
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "inside _handleGroupActionMD",
                  ])),
              )
              .tags("groups"));
          var l = t.chatId,
            k = t.author,
            T = t.pushname,
            D = t.ts,
            $ = D === void 0 ? Date.now() / 1e3 : D;
          k &&
            !r("isStringNullOrEmpty")(T) &&
            o("WAWebHandlePushnameUpdate")
              .updatePushname(k, T, i)
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
          var N = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l),
            w = (N == null ? void 0 : N.isParentGroup) === !0,
            F = !!t.isLidAddressingMode,
            O = F !== !!(N != null && N.isLidAddressingMode),
            B = [];
          switch (
            (w &&
              O &&
              (B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { isLidAddressingMode: F },
                  i,
                ),
              ),
              B.push(
                o("WAWebGroupParticipantsJob")
                  .migrateParentGroupToLIDOrFallbackToPNJob(l.toString(), F)
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
            a.actionType)
          ) {
            case o("WAWebGroupType").GROUP_ACTIONS.ADD:
              if (
                (B.push(
                  o("WAWebGroupParticipantsJob")
                    .addParticipantsJob({
                      group: l,
                      isOffline: i,
                      participants: a.participants,
                      reason: a.reason,
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
                            M(l, i));
                        },
                      ),
                    ),
                ),
                B.push(
                  o(
                    "WAWebGroupMembershipApprovalRequestsJob",
                  ).removeMembershipApprovalRequestsJob(
                    l,
                    a.participants.map(function (e) {
                      return e.id;
                    }),
                    i,
                  ),
                ),
                B.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(l, {
                    groupAdder: k == null ? void 0 : k.toString(),
                  }),
                ),
                B.push(
                  o(
                    "WAWebGroupHistoryParticipantJob",
                  ).updateGroupHistoryParticipantMetadataOnJoin(
                    l,
                    a.participants,
                  ),
                ),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() ||
                  o(
                    "WAWebBotGroupGatingUtils",
                  ).isTEEGroupBotParticipantAddEnabled())
              ) {
                var W = o(
                  "WAWebBotUtils",
                ).participantListIncludeOpenOrTeeGroupBotWid(a.participants);
                (o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                  W.includeOpenMetabot &&
                  B.push(
                    o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                      l,
                      { isOpenBotGroup: !0 },
                      i,
                    ),
                  ),
                  o(
                    "WAWebBotGroupGatingUtils",
                  ).isTEEGroupBotParticipantAddEnabled() &&
                    W.includeTeeMetabot &&
                    B.push(
                      o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                        l,
                        { isTeeBotGroup: !0 },
                        i,
                      ),
                    ));
              }
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.REMOVE: {
              var q = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l);
              if (q == null) break;
              var U =
                  a.reason !==
                    o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
                  a.participants.some(function (e) {
                    var t = e.id;
                    return o("WAWebUserPrefsMeUser").isMeAccount(t);
                  }) &&
                  (yield o("WAWebDBCommunity").isLastJoinedSubgroup(q)),
                V = function (n, r) {
                  return o("WAWebGroupParticipantsJob")
                    .removeParticipantsJob(
                      n,
                      a.participants,
                      $,
                      t.author,
                      a.reason,
                      r,
                      i,
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
                            M(n, i));
                        },
                      ),
                    );
                };
              if (
                (B.push(V(l, q)),
                a.reason !==
                  o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
                  B.push(
                    o(
                      "WAWebRemoveStoredMuseAgentRequests",
                    ).removeStoredMuseAgentRequestsOfRemovedMembers(
                      l,
                      a.participants.flatMap(function (e) {
                        var t = e.id,
                          n = e.lid;
                        return n == null ? [t] : [t, n];
                      }),
                      i,
                    ),
                  ),
                B.push(
                  o(
                    "WAWebGroupHistoryParticipantJob",
                  ).clearGroupHistoryParticipantStateOnRemove(
                    l,
                    a.participants,
                  ),
                ),
                q.defaultSubgroup === !0 && q.parentGroup != null)
              ) {
                var H = o("WAWebWidFactory").createWid(q.parentGroup),
                  G = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(H);
                G && B.push(V(H, G));
              }
              if (
                a.participants.find(function (e) {
                  var t = e.id;
                  return o("WAWebUserPrefsMeUser").isMeAccount(t);
                })
              ) {
                var z = yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForSelfRemovedFromGroup(
                  l,
                  q == null ? void 0 : q.parentGroup,
                  U,
                );
                B.push.apply(B, z);
              }
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE: {
              var j = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l);
              if (j == null) break;
              (a.participants.find(function (e) {
                var t = e.id;
                return o("WAWebUserPrefsMeUser").isMeAccount(t);
              }) &&
                (o("WAWebApiParticipantStore").setAdminshipCache(
                  l.toString(),
                  !1,
                ),
                B.push(
                  o(
                    "WAWebApiMembershipApprovalRequestStore",
                  ).removeAllMembershipApprovalRequests(l),
                ),
                yield P(j, l)),
                B.push(
                  o("WAWebGroupParticipantsJob")
                    .demoteParticipantsJob(l, a.participants, j, i)
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
                            M(l, i));
                        },
                      ),
                    ),
                ));
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE: {
              var K = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l);
              if (K == null) break;
              if (
                a.participants.find(function (e) {
                  var t = e.id;
                  return o("WAWebUserPrefsMeUser").isMeAccount(t);
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
                  A(Q);
                }
                (o("WAWebApiParticipantStore").setAdminshipCache(
                  l.toString(),
                  !0,
                ),
                  yield P(K, l));
              }
              B.push(
                o("WAWebGroupParticipantsJob")
                  .promoteParticipantsJob(l, a.participants, K, i)
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
                          M(l, i));
                      },
                    ),
                  ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE: {
              if (!a.jid) break;
              var X = a.jid,
                Y = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
                  X.toString(),
                );
              Y ||
                B.push(
                  o("WAWebGroupParticipantsJob")
                    .promoteCommunityParticipantsJob(X, a.participants, i)
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
                            M(X, i));
                        },
                      ),
                    ),
                );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE: {
              if (!a.jid) break;
              var J = a.jid,
                Z = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
                  J.toString(),
                );
              Z ||
                B.push(
                  o("WAWebGroupParticipantsJob")
                    .demoteCommunityParticipantsJob({
                      group: J,
                      isOffline: i,
                      participants: a.participants,
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
                            M(J, i));
                        },
                      ),
                    ),
                );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE: {
              var ee = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                te = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString(),
                ne = k == null ? void 0 : k.toString();
              if (r("isStringNullOrEmpty")(ne) || k == null) {
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "Received revoke without an admin jid ",
                      "",
                    ])),
                  a,
                );
                return;
              }
              var re = o("WAWebUserPrefsMeUser").isMeAccount(k),
                oe = [];
              if (re)
                oe = a.participants.map(function (e) {
                  return {
                    from: ne,
                    to: e.id.toString(),
                    groupId: l.toString(),
                    expiration: e.expiration,
                  };
                });
              else {
                var ae,
                  ie,
                  le = a.participants.find(function (e) {
                    return o("WAWebUserPrefsMeUser").isMeAccount(e.id);
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
                var se = o("WAWebWidFactory").asUserWidOrThrow(k),
                  ue =
                    (ae = o("WAWebLidMigrationUtils").toPn(se)) == null
                      ? void 0
                      : ae.toString(),
                  ce =
                    (ie = o("WAWebLidMigrationUtils").toLid(se)) == null
                      ? void 0
                      : ie.toString();
                if (r("isStringNullOrEmpty")(ce)) {
                  var de = o(
                    "WAWebLid1X1MigrationGating",
                  ).Lid1X1MigrationUtils.isLidMigrated();
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-invites] isLidMigrated=",
                        ", revoke from other user",
                      ])),
                    de,
                  );
                  var me =
                    "[group-invites] failed to get lid mapping for *incoming* group invite *revoke*";
                  o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      me,
                    )
                    .sendLogs(me);
                }
                ((oe = [
                  {
                    from: ce != null ? ce : "",
                    to: te,
                    groupId: l.toString(),
                    expiration: le.expiration,
                  },
                ]),
                  ee != null &&
                    oe.push({
                      from: ue != null ? ue : "",
                      to: ee.toString(),
                      groupId: l.toString(),
                      expiration: le.expiration,
                    }));
              }
              yield (I || (I = n("Promise"))).all(
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
              if (a.participants.length !== 1) {
                o("WALogger").WARN(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "_handleGroupActionMD: expected 1 participant, got ",
                      "",
                    ])),
                  a.participants.length,
                );
                break;
              }
              B.push(
                o("WAWebGroupDatabaseJob")
                  .modifyGroupParticipantJob(
                    l,
                    r("nullthrows")(k),
                    a.participants[0].id,
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
                          M(l, i));
                      },
                    ),
                  ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT:
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { subject: a.subject },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  {
                    desc: a.desc,
                    descId: a.descId,
                    descTime: a.descTime,
                    descOwner: k == null ? void 0 : k.toString(),
                  },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE:
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  {
                    desc: void 0,
                    descId: void 0,
                    descTime: void 0,
                    descOwner: void 0,
                  },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.RESTRICT:
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { restrict: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND: {
              var pe = !!a.value;
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { suspended: pe },
                  i,
                ),
              );
              var _e = yield o(
                "WAWebUpdateDbForCommunityAction",
              ).maybeUpdateCommunitySuspendedStatus(l, pe, i);
              B.push.apply(B, _e);
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL: {
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  {
                    suspendAppealStatus: a.appealStatus,
                    suspendAppealUpdateTime: a.appealUpdateTime,
                  },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE:
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { announce: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { noFrequentlyForwarded: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL: {
              var fe =
                  o("WAWebAfterReadUtils").isAfterReadEnabled() &&
                  o("WAWebAfterReadUtils").isAfterReadDuration(a.duration),
                ge = fe
                  ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration()
                  : a.duration,
                he = fe ? a.duration : null,
                ye = o("WAWebEphemeralityUtils").getDisappearingModeTrigger(
                  a.trigger,
                );
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  {
                    ephemeralDuration: ge,
                    afterReadDuration: he,
                    disappearingModeTrigger: ye != null ? ye : void 0,
                    disappearingModeInitiatedByMe: a.initiatedByMe,
                  },
                  i,
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
                a.reason ===
                o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT
              ) {
                var Ce = yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForIntegrityDeactivateCommunity(l, i);
                B.push.apply(B, Ce);
              } else if (
                a.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
              ) {
                var be = yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForDeactivateCommunity(l, i);
                B.push.apply(B, be);
              } else
                B.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                    l,
                    { terminated: !0 },
                    i,
                  ),
                );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED:
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { growthLockExpiration: void 0, growthLockType: void 0 },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
              a.type === "invite" &&
                B.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                    l,
                    {
                      growthLockExpiration: a.expiration,
                      growthLockType: a.type,
                    },
                    i,
                  ),
                );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_LINK: {
              var ve = a.groupDatas[0].id;
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { parentGroup: ve.toString() },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
              B.push(
                o("WAWebDBCommunity").persistCommunityLink({
                  action: o("WAWebDBCommunityTypes").CommunityLinkOperation
                    .SubGroupLink,
                  chatId: l,
                  isOffline: i,
                  subgroups: a.groupDatas,
                }),
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { lastActivityTimestamp: o("WATimeUtils").unixTime() },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK:
              B.push(
                o("WAWebDBCommunity").persistCommunityLink({
                  action: o("WAWebDBCommunityTypes").CommunityLinkOperation
                    .SiblingGroupLink,
                  chatId: l,
                  isOffline: i,
                  subgroups: a.groupDatas,
                }),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK:
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { parentGroup: void 0 },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
              B.push(
                o("WAWebDBCommunity").persistCommunityLink({
                  action: o("WAWebDBCommunityTypes").CommunityLinkOperation
                    .SubGroupUnlink,
                  chatId: l,
                  isOffline: i,
                  subgroups: a.groupDatas,
                }),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
              B.push(
                o("WAWebDBCommunity").persistCommunityLink({
                  action: o("WAWebDBCommunityTypes").CommunityLinkOperation
                    .SiblingGroupUnlink,
                  chatId: l,
                  isOffline: i,
                  subgroups: a.groupDatas,
                }),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
              (B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { membershipApprovalMode: a.value },
                  i,
                ),
              ),
                a.value ||
                  B.push(
                    o(
                      "WAWebApiMembershipApprovalRequestStore",
                    ).removeAllMembershipApprovalRequests(l),
                  ));
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS:
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  babelHelpers.extends(
                    { reportToAdminMode: a.value },
                    !a.value && { lastReportToAdminTimestamp: null },
                  ),
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECEIVED:
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { lastReportToAdminTimestamp: a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS:
              {
                B.push(
                  o(
                    "WAWebApiMembershipApprovalRequestStore",
                  ).addMembershipApprovalRequests(
                    l,
                    a.requests.map(function (e) {
                      var t = e.wid;
                      return {
                        id: t,
                        t: $,
                        addedBy: r("nullthrows")(k),
                        requestMethod: a.requestMethod,
                        parentGroupId: a.parentGroupId,
                      };
                    }),
                  ),
                );
                var Se = o(
                  "WAWebNux",
                ).getMembershipApprovalRequestsBannerNuxKey(l.toString());
                A(Se);
              }
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
              B.push(
                o(
                  "WAWebGroupMembershipApprovalRequestsJob",
                ).removeMembershipApprovalRequestsJob(l, a.requests, i),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS
              .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { allowNonAdminSubGroupCreation: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS
              .CREATED_SUBGROUP_SUGGESTION: {
              var Re;
              B.push(
                o("WAWebApiSubgroupSuggestionStore").addSubgroupSuggestions(l, [
                  {
                    id: a.id,
                    parentGroupId: a.parentGroupId,
                    subject: a.subject,
                    desc: a.description,
                    owner: a.owner,
                    t: a.t,
                    isExistingGroup: (Re = a.isExistingGroup) != null ? Re : !1,
                    participantCount: a.participantCount,
                    hiddenSubgroup: a.hiddenSubgroup,
                  },
                ]),
              );
              var Le = o("WAWebNux").getSubgroupSuggestionsBannerNuxKey(
                l.toString(),
              );
              A(Le);
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS
              .REVOKED_SUB_GROUP_SUGGESTIONS:
              B.push(
                o("WAWebSubgroupSuggestionsJob").removeSubgroupSuggestionsJob(
                  a.subgroupSuggestions.map(function (e) {
                    var t = e.id,
                      n = e.owner;
                    return { parentGroupId: a.parentGroupId, id: t, owner: n };
                  }),
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS
              .SUBGROUP_SUGGESTIONS_CHANGE_NUMBER:
              B.push(
                o(
                  "WAWebApiSubgroupSuggestionStore",
                ).updateOwnerInSubgroupSuggestions({
                  newOwner: a.newOwner,
                  oldOwner: a.oldOwner,
                  parentGroupId: a.parentGroupId,
                  subgroupSuggestions: a.subgroupSuggestions,
                }),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE: {
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { memberAddMode: a.memberAddMode },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE: {
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { memberLinkMode: a.value },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS
              .GENERAL_CHAT_AUTO_ADD_DISABLED: {
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { generalChatAutoAddDisabled: !0 },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
              B.push(
                o("WAWebGroupParticipantsJob")
                  .setGroupSuperAdminJob(l, a.newOwner)
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
                          M(l, i));
                      },
                    ),
                  ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP: {
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(l, {
                  hiddenSubgroup: !!a.value,
                }),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK: {
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(l, {
                  groupSafetyCheck: !!a.value,
                }),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS
              .MEMBER_SHARE_GROUP_HISTORY_MODE: {
              B.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { memberShareGroupHistoryMode: a.value },
                  i,
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
                  JSON.stringify(a),
                )
                .tags("groups");
              break;
          }
          (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
            t.hasIncompleteParticipantInformation === !0 &&
            B.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                l,
                { hasIncompleteParticipantInformation: !0 },
                i,
              ),
            ),
            yield (I || (I = n("Promise"))).all(B),
            a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD &&
              x(l, a.participants)
                .then(function (e) {
                  return o(
                    "WAWebSyncGroupBotSupportFields",
                  ).maybeLazySyncGroupBotSupportFields(e, [], {
                    endFetchPause: !0,
                    sourceGroupWid: l,
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
            o("WALogger")
              .LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "finished all storageTasks",
                  ])),
              )
              .tags("groups"));
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = t.map(function (e) {
              var t = e.id;
              return t;
            });
          if (!r.some(o("WAWebUserPrefsMeUser").isMeAccount)) return r;
          var a = yield o("WAWebGroupsParticipantsApi").getParticipants(e),
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
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            e.isParentGroup === !0 &&
            e.allowNonAdminSubGroupCreation !== !0
          ) {
            var n = yield o("WAWebDBCommunity").getJoinedSubgroups(t);
            n[0] &&
              o(
                "WAWebQueryAndUpdateSubgroupSuggestionsJob",
              ).queryAndUpdateSubgroupSuggestions(t, n[0]);
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            t === !0
              ? yield o("WAWebGroupDatabaseJob").markGroupParticipantStaleJob(e)
              : yield o("WAWebGroupQueryBridge").sendQueryGroup(e);
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
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      o("WAWebBackendApi").frontendFireAndForget("resetNux", { key: e });
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          return (
            r != null &&
              ((r.disappearingModeTrigger = t),
              yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e, {
                disappearingModeTrigger: t,
              })),
            (I || (I = n("Promise"))).resolve()
          );
        })),
        O.apply(this, arguments)
      );
    }
    ((l.updateDBForGroupAction = T), (l.syncDisappearingModeTriggerToDB = F));
  },
  98,
);
