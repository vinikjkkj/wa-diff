__d(
  "WAWebUpdateDbForGroupActionApi",
  [
    "JSResourceForInteraction",
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
    "asyncToGeneratorRuntime",
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
      T,
      D = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormAnswersJob",
      ).__setRef("WAWebUpdateDbForGroupActionApi");
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
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
            I = t.author,
            x = t.pushname,
            $ = t.ts,
            N = $ === void 0 ? Date.now() / 1e3 : $;
          I &&
            !r("isStringNullOrEmpty")(x) &&
            o("WAWebHandlePushnameUpdate")
              .updatePushname(I, x, i)
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
          var w = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l),
            F = (w == null ? void 0 : w.isParentGroup) === !0,
            B = !!t.isLidAddressingMode,
            W = B !== !!(w != null && w.isLidAddressingMode),
            q = [];
          switch (
            (F &&
              W &&
              (q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { isLidAddressingMode: B },
                  i,
                ),
              ),
              q.push(
                o("WAWebGroupParticipantsJob")
                  .migrateParentGroupToLIDOrFallbackToPNJob(l.toString(), B)
                  .catch(function () {
                    o("WALogger").ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[parent-group] migrate to LID/PN failed; isLID=",
                          "",
                        ])),
                      B,
                    );
                  }),
              )),
            a.actionType)
          ) {
            case o("WAWebGroupType").GROUP_ACTIONS.ADD:
              if (
                (q.push(
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
                            A(l, i));
                        },
                      ),
                    ),
                ),
                q.push(
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
                q.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(l, {
                    groupAdder: I == null ? void 0 : I.toString(),
                  }),
                ),
                q.push(
                  o(
                    "WAWebGroupHistoryParticipantJob",
                  ).updateGroupHistoryParticipantMetadataOnJoin(
                    l,
                    a.participants,
                  ),
                ),
                o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() ||
                  o(
                    "WAWebBotGroupGatingUtils",
                  ).isTEEGroupBotParticipantAddEnabled())
              ) {
                var U = o(
                  "WAWebBotUtils",
                ).participantListIncludeOpenOrTeeGroupBotWid(a.participants);
                (o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                  U.includeOpenMetabot &&
                  q.push(
                    o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                      l,
                      { isOpenBotGroup: !0 },
                      i,
                    ),
                  ),
                  o(
                    "WAWebBotGroupGatingUtils",
                  ).isTEEGroupBotParticipantAddEnabled() &&
                    U.includeTeeMetabot &&
                    q.push(
                      o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                        l,
                        { isTeeBotGroup: !0 },
                        i,
                      ),
                    ));
              }
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.REMOVE: {
              var V = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l);
              if (V == null) break;
              var H =
                  a.reason !==
                    o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
                  a.participants.some(function (e) {
                    var t = e.id;
                    return o("WAWebUserUtils").isMeAccount(t);
                  }) &&
                  (yield o("WAWebDBCommunity").isLastJoinedSubgroup(V)),
                G = function (n, r) {
                  return o("WAWebGroupParticipantsJob")
                    .removeParticipantsJob(
                      n,
                      a.participants,
                      N,
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
                            A(n, i));
                        },
                      ),
                    );
                };
              if (
                (q.push(G(l, V)),
                a.reason !==
                  o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
                  q.push(
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
                o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
                  o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(
                    a.participants,
                  ).includeOpenMetabot &&
                  q.push(
                    o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                      l,
                      { isOpenBotGroup: !1 },
                      i,
                    ),
                  ),
                q.push(
                  o(
                    "WAWebGroupHistoryParticipantJob",
                  ).clearGroupHistoryParticipantStateOnRemove(
                    l,
                    a.participants,
                  ),
                ),
                V.defaultSubgroup === !0 && V.parentGroup != null)
              ) {
                var z = o("WAWebWidFactory").createWid(V.parentGroup),
                  j = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(z);
                j && q.push(G(z, j));
              }
              if (
                a.participants.find(function (e) {
                  var t = e.id;
                  return o("WAWebUserUtils").isMeAccount(t);
                })
              ) {
                var K = yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForSelfRemovedFromGroup(
                  l,
                  V == null ? void 0 : V.parentGroup,
                  H,
                );
                q.push.apply(q, K);
              }
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE: {
              var Q = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l);
              if (Q == null) break;
              (a.participants.find(function (e) {
                var t = e.id;
                return o("WAWebUserUtils").isMeAccount(t);
              }) &&
                (o("WAWebApiParticipantStore").setAdminshipCache(
                  l.toString(),
                  !1,
                ),
                q.push(
                  o(
                    "WAWebApiMembershipApprovalRequestStore",
                  ).removeAllMembershipApprovalRequests(l),
                ),
                q.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                    l,
                    { membershipForm: null, membershipFormKeyId: null },
                    i,
                  ),
                ),
                yield M(Q, l)),
                q.push(
                  o("WAWebGroupParticipantsJob")
                    .demoteParticipantsJob({
                      group: l,
                      groupMetadata: Q,
                      isOffline: i,
                      participants: a.participants,
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
                            A(l, i));
                        },
                      ),
                    ),
                ));
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE: {
              var X = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l);
              if (X == null) break;
              if (
                a.participants.find(function (e) {
                  var t = e.id;
                  return o("WAWebUserUtils").isMeAccount(t);
                })
              ) {
                if (
                  X != null &&
                  o("WAWebGroupMetadataGetters").getGroupType(X) ===
                    o("WAWebGroupType").GroupType.COMMUNITY
                ) {
                  var Y = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                    X.id.toString(),
                  );
                  O(Y);
                }
                (o("WAWebApiParticipantStore").setAdminshipCache(
                  l.toString(),
                  !0,
                ),
                  yield M(X, l));
              }
              q.push(
                o("WAWebGroupParticipantsJob")
                  .promoteParticipantsJob(l, a.participants, X, i)
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
                          A(l, i));
                      },
                    ),
                  ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE: {
              if (!a.jid) break;
              var J = a.jid,
                Z = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
                  J.toString(),
                );
              Z ||
                q.push(
                  o("WAWebGroupParticipantsJob")
                    .promoteCommunityParticipantsJob(J, a.participants, i)
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
                            A(J, i));
                        },
                      ),
                    ),
                );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE: {
              if (!a.jid) break;
              var ee = a.jid,
                te = yield o(
                  "WAWebApiParticipantStore",
                ).isCurrentUserGroupAdmin(ee.toString());
              te ||
                q.push(
                  o("WAWebGroupParticipantsJob")
                    .demoteCommunityParticipantsJob({
                      group: ee,
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
                            A(ee, i));
                        },
                      ),
                    ),
                );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE: {
              var ne = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                re = o("WAWebUserUtils").getMeLidUserOrThrow().toString(),
                oe = I == null ? void 0 : I.toString();
              if (r("isStringNullOrEmpty")(oe) || I == null) {
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
              var ae = o("WAWebUserUtils").isMeAccount(I),
                ie = [];
              if (ae)
                ie = a.participants.map(function (e) {
                  return {
                    from: oe,
                    to: e.id.toString(),
                    groupId: l.toString(),
                    expiration: e.expiration,
                  };
                });
              else {
                var le,
                  se,
                  ue = a.participants.find(function (e) {
                    return o("WAWebUserUtils").isMeAccount(e.id);
                  });
                if (!ue) {
                  o("WALogger")
                    .ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-invites] revoke from ",
                          ", user not in list",
                        ])),
                      oe,
                    )
                    .sendLogs("bad-revoke");
                  return;
                }
                var ce = o("WAWebWidFactory").asUserWidOrThrow(I),
                  de =
                    (le = o("WAWebLidMigrationUtils").toPn(ce)) == null
                      ? void 0
                      : le.toString(),
                  me =
                    (se = o("WAWebLidMigrationUtils").toLid(ce)) == null
                      ? void 0
                      : se.toString();
                if (r("isStringNullOrEmpty")(me)) {
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-invites] revoke from other user",
                      ])),
                  );
                  var pe =
                    "[group-invites] failed to get lid mapping for *incoming* group invite *revoke*";
                  o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      pe,
                    )
                    .sendLogs(pe);
                }
                ((ie = [
                  {
                    from: me != null ? me : "",
                    to: re,
                    groupId: l.toString(),
                    expiration: ue.expiration,
                  },
                ]),
                  ne != null &&
                    ie.push({
                      from: de != null ? de : "",
                      to: ne.toString(),
                      groupId: l.toString(),
                      expiration: ue.expiration,
                    }));
              }
              yield (T || (T = n("Promise"))).all(
                ie.map(function (e) {
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
              q.push(
                o("WAWebGroupDatabaseJob")
                  .modifyGroupParticipantJob(
                    l,
                    r("nullthrows")(I),
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
                          A(l, i));
                      },
                    ),
                  ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT:
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { subject: a.subject },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  {
                    desc: a.desc,
                    descId: a.descId,
                    descTime: a.descTime,
                    descOwner: I == null ? void 0 : I.toString(),
                  },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE:
              q.push(
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
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { restrict: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND: {
              var _e = !!a.value;
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  babelHelpers.extends(
                    { suspended: _e },
                    _e ? { suspendAppealApprovedSeen: !1 } : null,
                  ),
                  i,
                ),
              );
              var fe = yield o(
                "WAWebUpdateDbForCommunityAction",
              ).maybeUpdateCommunitySuspendedStatus(l, _e, i);
              q.push.apply(q, fe);
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND_APPEAL: {
              q.push(
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
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { announce: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { noFrequentlyForwarded: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL: {
              var ge =
                  o("WAWebAfterReadUtils").isAfterReadEnabled() &&
                  o("WAWebAfterReadUtils").isAfterReadDuration(a.duration),
                he = ge
                  ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration()
                  : a.duration,
                ye = ge ? a.duration : null,
                Ce = o("WAWebEphemeralityUtils").getDisappearingModeTrigger(
                  a.trigger,
                );
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  {
                    ephemeralDuration: he,
                    afterReadDuration: ye,
                    disappearingModeTrigger: Ce != null ? Ce : void 0,
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
                var be = yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForIntegrityDeactivateCommunity(l, i);
                q.push.apply(q, be);
              } else if (
                a.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
              ) {
                var ve = yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForDeactivateCommunity(l, i);
                q.push.apply(q, ve);
              } else
                q.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                    l,
                    { terminated: !0 },
                    i,
                  ),
                );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED:
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { growthLockExpiration: void 0, growthLockType: void 0 },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
              a.type === "invite" &&
                q.push(
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
              var Se = a.groupDatas[0].id;
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { parentGroup: Se.toString() },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
              q.push(
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
              q.push(
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
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { parentGroup: void 0 },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
              q.push(
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
              q.push(
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
              (q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { membershipApprovalMode: a.value },
                  i,
                ),
              ),
                a.value ||
                  q.push(
                    o(
                      "WAWebApiMembershipApprovalRequestStore",
                    ).removeAllMembershipApprovalRequests(l),
                  ));
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS:
              q.push(
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
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { lastReportToAdminTimestamp: a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS:
              {
                q.push(
                  o(
                    "WAWebApiMembershipApprovalRequestStore",
                  ).addMembershipApprovalRequests(
                    l,
                    a.requests.map(function (e) {
                      var t = e.wid;
                      return {
                        id: t,
                        t: N,
                        addedBy: r("nullthrows")(I),
                        requestMethod: a.requestMethod,
                        parentGroupId: a.parentGroupId,
                      };
                    }),
                  ),
                );
                var Re = o(
                  "WAWebNux",
                ).getMembershipApprovalRequestsBannerNuxKey(l.toString());
                O(Re);
              }
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
              q.push(
                o(
                  "WAWebGroupMembershipApprovalRequestsJob",
                ).removeMembershipApprovalRequestsJob(l, a.requests, i),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS
              .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { allowNonAdminSubGroupCreation: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS
              .CREATED_SUBGROUP_SUGGESTION: {
              var Le;
              q.push(
                o("WAWebApiSubgroupSuggestionStore").addSubgroupSuggestions(l, [
                  {
                    id: a.id,
                    parentGroupId: a.parentGroupId,
                    subject: a.subject,
                    desc: a.description,
                    owner: a.owner,
                    t: a.t,
                    isExistingGroup: (Le = a.isExistingGroup) != null ? Le : !1,
                    participantCount: a.participantCount,
                    hiddenSubgroup: a.hiddenSubgroup,
                  },
                ]),
              );
              var Ee = o("WAWebNux").getSubgroupSuggestionsBannerNuxKey(
                l.toString(),
              );
              O(Ee);
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS
              .REVOKED_SUB_GROUP_SUGGESTIONS:
              q.push(
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
              q.push(
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
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { memberAddMode: a.memberAddMode },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE: {
              q.push(
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
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { generalChatAutoAddDisabled: !0 },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
              q.push(
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
                          A(l, i));
                      },
                    ),
                  ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP: {
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(l, {
                  hiddenSubgroup: !!a.value,
                }),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK: {
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(l, {
                  groupSafetyCheck: !!a.value,
                }),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.GROUP_REACTION_SETTINGS: {
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { groupReactionSettings: a.value },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS
              .MEMBER_SHARE_GROUP_HISTORY_MODE: {
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { memberShareGroupHistoryMode: a.value },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_FORM: {
              q.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  a.membershipFormKeyId !== void 0
                    ? {
                        membershipForm: a.membershipForm,
                        membershipFormKeyId: a.membershipFormKeyId,
                      }
                    : { membershipForm: a.membershipForm },
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
            q.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                l,
                { hasIncompleteParticipantInformation: !0 },
                i,
              ),
            ),
            yield (T || (T = n("Promise"))).all(q),
            a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD &&
              (P(l, a.participants)
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
              o(
                "WAWebIncompatibleAgentRequestsRejectTriggers",
              ).startIncompatibleAgentRequestRejectsAfterAddNotification(
                l,
                a.participants.map(function (e) {
                  var t = e.id;
                  return t;
                }),
              )),
            a.actionType ===
              o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS &&
              D.load()
                .then(function (e) {
                  return e.scheduleGroupMembershipFormAnswersRefetch(l, {
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
          var n,
            r = t.map(function (e) {
              var t = e.id;
              return t;
            });
          if (!r.some(o("WAWebUserUtils").isMeAccount)) return r;
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
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            t === !0
              ? yield o("WAWebGroupDatabaseJob").markGroupParticipantStaleJob(e)
              : yield o("WAWebGroupQueryBridge").sendQueryGroup(e);
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
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      o("WAWebBackendApi").frontendFireAndForget("resetNux", { key: e });
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          return (
            r != null &&
              ((r.disappearingModeTrigger = t),
              yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e, {
                disappearingModeTrigger: t,
              })),
            (T || (T = n("Promise"))).resolve()
          );
        })),
        W.apply(this, arguments)
      );
    }
    ((l.updateDBForGroupAction = x), (l.syncDisappearingModeTriggerToDB = B));
  },
  98,
);
