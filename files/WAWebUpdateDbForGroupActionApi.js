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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k;
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
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
            E = t.author,
            I = t.pushname,
            T = t.ts,
            x = T === void 0 ? Date.now() / 1e3 : T;
          E &&
            !r("isStringNullOrEmpty")(I) &&
            o("WAWebHandlePushnameUpdate")
              .updatePushname(E, I, i)
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
          var P = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l),
            M = (P == null ? void 0 : P.isParentGroup) === !0,
            w = !!t.isLidAddressingMode,
            A = w !== !!(P != null && P.isLidAddressingMode),
            F = [];
          switch (
            (M &&
              A &&
              (F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { isLidAddressingMode: w },
                  i,
                ),
              ),
              F.push(
                o("WAWebGroupParticipantsJob")
                  .migrateParentGroupToLIDOrFallbackToPNJob(l.toString(), w)
                  .catch(function () {
                    o("WALogger").ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[parent-group] migrate to LID/PN failed; isLID=",
                          "",
                        ])),
                      w,
                    );
                  }),
              )),
            a.actionType)
          ) {
            case o("WAWebGroupType").GROUP_ACTIONS.ADD:
              if (
                (F.push(
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
                            $(l, i));
                        },
                      ),
                    ),
                ),
                F.push(
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
                F.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(l, {
                    groupAdder: E == null ? void 0 : E.toString(),
                  }),
                ),
                F.push(
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
                var O = o(
                  "WAWebBotUtils",
                ).participantListIncludeOpenOrTeeGroupBotWid(a.participants);
                (o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                  O.includeOpenMetabot &&
                  F.push(
                    o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                      l,
                      { isOpenBotGroup: !0 },
                      i,
                    ),
                  ),
                  o(
                    "WAWebBotGroupGatingUtils",
                  ).isTEEGroupBotParticipantAddEnabled() &&
                    O.includeTeeMetabot &&
                    F.push(
                      o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                        l,
                        { isTeeBotGroup: !0 },
                        i,
                      ),
                    ));
              }
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.REMOVE: {
              var B = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l);
              if (B == null) break;
              var W =
                  a.reason !==
                    o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
                  a.participants.some(function (e) {
                    var t = e.id;
                    return o("WAWebUserPrefsMeUser").isMeAccount(t);
                  }) &&
                  (yield o("WAWebDBCommunity").isLastJoinedSubgroup(B)),
                q = function (n, r) {
                  return o("WAWebGroupParticipantsJob")
                    .removeParticipantsJob(
                      n,
                      a.participants,
                      x,
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
                            $(n, i));
                        },
                      ),
                    );
                };
              if (
                (F.push(q(l, B)),
                F.push(
                  o(
                    "WAWebGroupHistoryParticipantJob",
                  ).clearGroupHistoryParticipantStateOnRemove(
                    l,
                    a.participants,
                  ),
                ),
                B.defaultSubgroup === !0 && B.parentGroup != null)
              ) {
                var U = o("WAWebWidFactory").createWid(B.parentGroup),
                  V = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(U);
                V && F.push(q(U, V));
              }
              if (
                a.participants.find(function (e) {
                  var t = e.id;
                  return o("WAWebUserPrefsMeUser").isMeAccount(t);
                })
              ) {
                var H = yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForSelfRemovedFromGroup(
                  l,
                  B == null ? void 0 : B.parentGroup,
                  W,
                );
                F.push.apply(F, H);
              }
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE: {
              var G = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l);
              if (G == null) break;
              (a.participants.find(function (e) {
                var t = e.id;
                return o("WAWebUserPrefsMeUser").isMeAccount(t);
              }) &&
                (o("WAWebApiParticipantStore").setAdminshipCache(
                  l.toString(),
                  !1,
                ),
                F.push(
                  o(
                    "WAWebApiMembershipApprovalRequestStore",
                  ).removeAllMembershipApprovalRequests(l),
                ),
                yield D(G, l)),
                F.push(
                  o("WAWebGroupParticipantsJob")
                    .demoteParticipantsJob(l, a.participants, G, i)
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
                            $(l, i));
                        },
                      ),
                    ),
                ));
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE: {
              var z = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l);
              if (z == null) break;
              if (
                a.participants.find(function (e) {
                  var t = e.id;
                  return o("WAWebUserPrefsMeUser").isMeAccount(t);
                })
              ) {
                if (
                  z != null &&
                  o("WAWebGroupMetadataGetters").getGroupType(z) ===
                    o("WAWebGroupType").GroupType.COMMUNITY
                ) {
                  var j = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                    z.id.toString(),
                  );
                  N(j);
                }
                (o("WAWebApiParticipantStore").setAdminshipCache(
                  l.toString(),
                  !0,
                ),
                  yield D(z, l));
              }
              F.push(
                o("WAWebGroupParticipantsJob")
                  .promoteParticipantsJob(l, a.participants, z, i)
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
                          $(l, i));
                      },
                    ),
                  ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE: {
              if (!a.jid) break;
              var K = a.jid,
                Q = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
                  K.toString(),
                );
              Q ||
                F.push(
                  o("WAWebGroupParticipantsJob")
                    .promoteCommunityParticipantsJob(K, a.participants, i)
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
                            $(K, i));
                        },
                      ),
                    ),
                );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE: {
              if (!a.jid) break;
              var X = a.jid,
                Y = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
                  X.toString(),
                );
              Y ||
                F.push(
                  o("WAWebGroupParticipantsJob")
                    .demoteCommunityParticipantsJob({
                      group: X,
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
                            $(X, i));
                        },
                      ),
                    ),
                );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE: {
              var J = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                Z = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString(),
                ee = E == null ? void 0 : E.toString();
              if (r("isStringNullOrEmpty")(ee) || E == null) {
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
              var te = o("WAWebUserPrefsMeUser").isMeAccount(E),
                ne = [];
              if (te)
                ne = a.participants.map(function (e) {
                  return {
                    from: ee,
                    to: e.id.toString(),
                    groupId: l.toString(),
                    expiration: e.expiration,
                  };
                });
              else {
                var re,
                  oe,
                  ae = a.participants.find(function (e) {
                    return o("WAWebUserPrefsMeUser").isMeAccount(e.id);
                  });
                if (!ae) {
                  o("WALogger")
                    .ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-invites] revoke from ",
                          ", user not in list",
                        ])),
                      ee,
                    )
                    .sendLogs("bad-revoke");
                  return;
                }
                var ie = o("WAWebWidFactory").asUserWidOrThrow(E),
                  le =
                    (re = o("WAWebLidMigrationUtils").toPn(ie)) == null
                      ? void 0
                      : re.toString(),
                  se =
                    (oe = o("WAWebLidMigrationUtils").toLid(ie)) == null
                      ? void 0
                      : oe.toString();
                if (r("isStringNullOrEmpty")(se)) {
                  var ue = o(
                    "WAWebLid1X1MigrationGating",
                  ).Lid1X1MigrationUtils.isLidMigrated();
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-invites] isLidMigrated=",
                        ", revoke from other user",
                      ])),
                    ue,
                  );
                  var ce =
                    "[group-invites] failed to get lid mapping for *incoming* group invite *revoke*";
                  o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      ce,
                    )
                    .sendLogs(ce);
                }
                ((ne = [
                  {
                    from: se != null ? se : "",
                    to: Z,
                    groupId: l.toString(),
                    expiration: ae.expiration,
                  },
                ]),
                  J != null &&
                    ne.push({
                      from: le != null ? le : "",
                      to: J.toString(),
                      groupId: l.toString(),
                      expiration: ae.expiration,
                    }));
              }
              yield (k || (k = n("Promise"))).all(
                ne.map(function (e) {
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
              F.push(
                o("WAWebGroupDatabaseJob")
                  .modifyGroupParticipantJob(
                    l,
                    r("nullthrows")(E),
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
                          $(l, i));
                      },
                    ),
                  ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT:
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { subject: a.subject },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  {
                    desc: a.desc,
                    descId: a.descId,
                    descTime: a.descTime,
                    descOwner: E == null ? void 0 : E.toString(),
                  },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE:
              F.push(
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
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { restrict: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND: {
              var de = !!a.value;
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { suspended: de },
                  i,
                ),
              );
              var me = yield o(
                "WAWebUpdateDbForCommunityAction",
              ).maybeUpdateCommunitySuspendedStatus(l, de, i);
              F.push.apply(F, me);
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL: {
              F.push(
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
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { announce: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { noFrequentlyForwarded: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL: {
              var pe =
                  o("WAWebAfterReadUtils").isAfterReadEnabled() &&
                  o("WAWebAfterReadUtils").isAfterReadDuration(a.duration),
                _e = pe
                  ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration()
                  : a.duration,
                fe = pe ? a.duration : null,
                ge = o("WAWebEphemeralityUtils").getDisappearingModeTrigger(
                  a.trigger,
                );
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  {
                    ephemeralDuration: _e,
                    afterReadDuration: fe,
                    disappearingModeTrigger: ge != null ? ge : void 0,
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
                var he = yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForIntegrityDeactivateCommunity(l, i);
                F.push.apply(F, he);
              } else if (
                a.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
              ) {
                var ye = yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForDeactivateCommunity(l, i);
                F.push.apply(F, ye);
              } else
                F.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                    l,
                    { terminated: !0 },
                    i,
                  ),
                );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED:
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { growthLockExpiration: void 0, growthLockType: void 0 },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
              a.type === "invite" &&
                F.push(
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
              var Ce = a.groupDatas[0].id;
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { parentGroup: Ce.toString() },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
              F.push(
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
              F.push(
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
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { parentGroup: void 0 },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
              F.push(
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
              F.push(
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
              (F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { membershipApprovalMode: a.value },
                  i,
                ),
              ),
                a.value ||
                  F.push(
                    o(
                      "WAWebApiMembershipApprovalRequestStore",
                    ).removeAllMembershipApprovalRequests(l),
                  ));
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS:
              F.push(
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
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { lastReportToAdminTimestamp: a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS:
              {
                F.push(
                  o(
                    "WAWebApiMembershipApprovalRequestStore",
                  ).addMembershipApprovalRequests(
                    l,
                    a.requests.map(function (e) {
                      var t = e.wid;
                      return {
                        id: t,
                        t: x,
                        addedBy: r("nullthrows")(E),
                        requestMethod: a.requestMethod,
                        parentGroupId: a.parentGroupId,
                      };
                    }),
                  ),
                );
                var be = o(
                  "WAWebNux",
                ).getMembershipApprovalRequestsBannerNuxKey(l.toString());
                N(be);
              }
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
              F.push(
                o(
                  "WAWebGroupMembershipApprovalRequestsJob",
                ).removeMembershipApprovalRequestsJob(l, a.requests, i),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS
              .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { allowNonAdminSubGroupCreation: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS
              .CREATED_SUBGROUP_SUGGESTION: {
              var ve;
              F.push(
                o("WAWebApiSubgroupSuggestionStore").addSubgroupSuggestions(l, [
                  {
                    id: a.id,
                    parentGroupId: a.parentGroupId,
                    subject: a.subject,
                    desc: a.description,
                    owner: a.owner,
                    t: a.t,
                    isExistingGroup: (ve = a.isExistingGroup) != null ? ve : !1,
                    participantCount: a.participantCount,
                    hiddenSubgroup: a.hiddenSubgroup,
                  },
                ]),
              );
              var Se = o("WAWebNux").getSubgroupSuggestionsBannerNuxKey(
                l.toString(),
              );
              N(Se);
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS
              .REVOKED_SUB_GROUP_SUGGESTIONS:
              F.push(
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
              F.push(
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
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { memberAddMode: a.memberAddMode },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE: {
              F.push(
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
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { generalChatAutoAddDisabled: !0 },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
              F.push(
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
                          $(l, i));
                      },
                    ),
                  ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP: {
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(l, {
                  hiddenSubgroup: !!a.value,
                }),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK: {
              F.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(l, {
                  groupSafetyCheck: !!a.value,
                }),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS
              .MEMBER_SHARE_GROUP_HISTORY_MODE: {
              F.push(
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
            F.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                l,
                { hasIncompleteParticipantInformation: !0 },
                i,
              ),
            ),
            yield (k || (k = n("Promise"))).all(F),
            o("WALogger")
              .LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "finished all storageTasks",
                  ])),
              )
              .tags("groups"));
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            t === !0
              ? yield o("WAWebGroupDatabaseJob").markGroupParticipantStaleJob(e)
              : yield o("WAWebGroupQueryBridge").sendQueryGroup(e);
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
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      o("WAWebBackendApi").frontendFireAndForget("resetNux", { key: e });
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          return (
            r != null &&
              ((r.disappearingModeTrigger = t),
              yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e, {
                disappearingModeTrigger: t,
              })),
            (k || (k = n("Promise"))).resolve()
          );
        })),
        w.apply(this, arguments)
      );
    }
    ((l.updateDBForGroupAction = I), (l.syncDisappearingModeTriggerToDB = M));
  },
  98,
);
