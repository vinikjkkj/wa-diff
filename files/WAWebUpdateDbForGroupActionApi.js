__d(
  "WAWebUpdateDbForGroupActionApi",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
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
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "updateDBForGroupAction: updatePushname failed: ",
                      "",
                    ])),
                  e,
                );
              });
          var N = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l),
            w = (N == null ? void 0 : N.isParentGroup) === !0,
            A = !!t.isLidAddressingMode,
            F = A !== !!(N != null && N.isLidAddressingMode),
            O = [];
          switch (
            (w &&
              F &&
              (O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { isLidAddressingMode: A },
                  i,
                ),
              ),
              O.push(
                o("WAWebGroupParticipantsJob")
                  .migrateParentGroupToLIDOrFallbackToPNJob(l.toString(), A)
                  .catch(function () {
                    o("WALogger").ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[parent-group] migrate to LID/PN failed; isLID=",
                          "",
                        ])),
                      A,
                    );
                  }),
              )),
            a.actionType)
          ) {
            case o("WAWebGroupType").GROUP_ACTIONS.ADD:
              if (
                (O.push(
                  o("WAWebGroupParticipantsJob")
                    .addParticipantsJob(l, a.participants, i, a.reason)
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
                            P(l, i));
                        },
                      ),
                    ),
                ),
                O.push(
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
                O.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(l, {
                    groupAdder: k == null ? void 0 : k.toString(),
                  }),
                ),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() ||
                  o(
                    "WAWebBotGroupGatingUtils",
                  ).isTEEGroupBotParticipantAddEnabled())
              ) {
                var B = o(
                  "WAWebBotUtils",
                ).participantListIncludOpenOrTeeGroupBotWid(a.participants);
                (o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                  B.includeOpenMetabot &&
                  O.push(
                    o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                      l,
                      { isOpenBotGroup: !0 },
                      i,
                    ),
                  ),
                  o(
                    "WAWebBotGroupGatingUtils",
                  ).isTEEGroupBotParticipantAddEnabled() &&
                    B.includeTeeMetabot &&
                    O.push(
                      o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                        l,
                        { isTeeBotGroup: !0 },
                        i,
                      ),
                    ));
              }
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.REMOVE: {
              var W = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l);
              if (W == null) break;
              var q =
                  a.reason !==
                    o("WAWebGroupType").REMOVE_REASON.DEFAULT_SUBGROUP_DEMOTE &&
                  a.participants.some(function (e) {
                    var t = e.id;
                    return o("WAWebUserPrefsMeUser").isMeAccount(t);
                  }) &&
                  (yield o("WAWebDBCommunity").isLastJoinedSubgroup(W)),
                U = function (n, r) {
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
                            P(n, i));
                        },
                      ),
                    );
                };
              if (
                (O.push(U(l, W)),
                W.defaultSubgroup === !0 && W.parentGroup != null)
              ) {
                var V = o("WAWebWidFactory").createWid(W.parentGroup),
                  H = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(V);
                H && O.push(U(V, H));
              }
              if (
                a.participants.find(function (e) {
                  var t = e.id;
                  return o("WAWebUserPrefsMeUser").isMeAccount(t);
                })
              ) {
                var G = yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForSelfRemovedFromGroup(
                  l,
                  W == null ? void 0 : W.parentGroup,
                  q,
                );
                O.push.apply(O, G);
              }
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.DEMOTE: {
              var z = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l);
              if (z == null) break;
              (a.participants.find(function (e) {
                var t = e.id;
                return o("WAWebUserPrefsMeUser").isMeAccount(t);
              }) &&
                (o("WAWebApiParticipantStore").setAdminshipCache(
                  l.toString(),
                  !1,
                ),
                O.push(
                  o(
                    "WAWebApiMembershipApprovalRequestStore",
                  ).removeAllMembershipApprovalRequests(l),
                ),
                yield x(z, l)),
                O.push(
                  o("WAWebGroupParticipantsJob")
                    .demoteParticipantsJob(l, a.participants, z, i)
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
                            P(l, i));
                        },
                      ),
                    ),
                ));
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.PROMOTE: {
              var j = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(l);
              if (j == null) break;
              if (
                a.participants.find(function (e) {
                  var t = e.id;
                  return o("WAWebUserPrefsMeUser").isMeAccount(t);
                })
              ) {
                if (
                  j != null &&
                  o("WAWebGroupType").getGroupTypeFromGroupMetadata(j) ===
                    o("WAWebGroupType").GroupType.COMMUNITY
                ) {
                  var K = o("WAWebNux").getCommunityAdminPromotionNuxKey(
                    j.id.toString(),
                  );
                  M(K);
                }
                (o("WAWebApiParticipantStore").setAdminshipCache(
                  l.toString(),
                  !0,
                ),
                  yield x(j, l));
              }
              O.push(
                o("WAWebGroupParticipantsJob")
                  .promoteParticipantsJob(l, a.participants, j, i)
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
                          P(l, i));
                      },
                    ),
                  ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE: {
              if (!a.jid) break;
              var Q = a.jid,
                X = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
                  Q.toString(),
                );
              X ||
                O.push(
                  o("WAWebGroupParticipantsJob")
                    .promoteCommunityParticipantsJob(Q, a.participants, i)
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
                            P(Q, i));
                        },
                      ),
                    ),
                );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE: {
              if (!a.jid) break;
              var Y = a.jid,
                J = yield o("WAWebApiParticipantStore").isCurrentUserGroupAdmin(
                  Y.toString(),
                );
              J ||
                O.push(
                  o("WAWebGroupParticipantsJob")
                    .demoteCommunityParticipantsJob(Y, a.participants, i)
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
                            P(Y, i));
                        },
                      ),
                    ),
                );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.REVOKE_INVITE: {
              var Z = o("WAWebUserPrefsMeUser")
                  .getMePnUserOrThrow_DO_NOT_USE()
                  .toString(),
                ee = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().toString();
              if (Z == null || ee == null) {
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "getMaybeMePnUser returned null, can't process action ",
                      "",
                    ])),
                  a,
                );
                return;
              }
              var te = k == null ? void 0 : k.toString();
              if (r("isStringNullOrEmpty")(te) || k == null) {
                o("WALogger").WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "Received revoke without an admin jid ",
                      "",
                    ])),
                  a,
                );
                return;
              }
              var ne = o("WAWebUserPrefsMeUser").isMeAccount(k),
                re = [];
              if (ne)
                re = a.participants.map(function (e) {
                  return {
                    from: te,
                    to: e.id.toString(),
                    groupId: l.toString(),
                    expiration: e.expiration,
                  };
                });
              else {
                var oe,
                  ae,
                  ie = a.participants.find(function (e) {
                    return o("WAWebUserPrefsMeUser").isMeAccount(e.id);
                  });
                if (!ie) {
                  o("WALogger")
                    .ERROR(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[group-invites] revoke from ",
                          ", user not in list",
                        ])),
                      te,
                    )
                    .sendLogs("bad-revoke");
                  return;
                }
                var le = o("WAWebWidFactory").asUserWidOrThrow(k),
                  se =
                    (oe = o("WAWebLidMigrationUtils").toPn(le)) == null
                      ? void 0
                      : oe.toString(),
                  ue =
                    (ae = o("WAWebLidMigrationUtils").toLid(le)) == null
                      ? void 0
                      : ae.toString();
                if (r("isStringNullOrEmpty")(ue)) {
                  var ce = o(
                    "WAWebLid1X1MigrationGating",
                  ).Lid1X1MigrationUtils.isLidMigrated();
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-invites] isLidMigrated=",
                        ", revoke from other user",
                      ])),
                    ce,
                  );
                  var de =
                    "[group-invites] failed to get lid mapping for *incoming* group invite *revoke*";
                  o("WALogger")
                    .ERROR(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      de,
                    )
                    .sendLogs(de);
                }
                re = [
                  {
                    from: se != null ? se : "",
                    to: Z,
                    groupId: l.toString(),
                    expiration: ie.expiration,
                  },
                  {
                    from: ue != null ? ue : "",
                    to: ee,
                    groupId: l.toString(),
                    expiration: ie.expiration,
                  },
                ];
              }
              yield (I || (I = n("Promise"))).all(
                re.map(function (e) {
                  return o("WAWebDBRevokeInviteV4").revokeGroupInviteV4(
                    e.from,
                    e.to,
                    e.groupId,
                    e.expiration,
                  );
                }),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.MODIFY:
              if (a.participants.length !== 1) {
                o("WALogger").WARN(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "_handleGroupActionMD: expected 1 participant, got ",
                      "",
                    ])),
                  a.participants.length,
                );
                break;
              }
              O.push(
                o("WAWebGroupDatabaseJob")
                  .modifyGroupParticipantJob(
                    l,
                    r("WANullthrows")(k),
                    a.participants[0].id,
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
                          P(l, i));
                      },
                    ),
                  ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUBJECT:
              O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { subject: a.subject },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD:
              O.push(
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
              O.push(
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
              O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { restrict: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUSPEND: {
              var me = !!a.value;
              O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { suspended: me },
                  i,
                ),
              );
              var pe = yield o(
                "WAWebUpdateDbForCommunityAction",
              ).maybeUpdateCommunitySuspendedStatus(l, me, i);
              O.push.apply(O, pe);
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.ANNOUNCE:
              O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { announce: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.NO_FORWARD:
              O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { noFrequentlyForwarded: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.EPHEMERAL: {
              var _e =
                  o("WAWebAfterReadUtils").isAfterReadEnabled() &&
                  o("WAWebAfterReadUtils").isAfterReadDuration(a.duration),
                fe = _e
                  ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration()
                  : a.duration,
                ge = _e ? a.duration : null;
              if (
                o("WAWebABProps").getABPropConfigValue(
                  "dm_initiator_trigger_groups",
                )
              ) {
                var he = o("WAWebEphemeralityUtils").getDisappearingModeTrigger(
                  a.trigger,
                );
                O.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                    l,
                    {
                      ephemeralDuration: fe,
                      afterReadDuration: ge,
                      disappearingModeTrigger: he != null ? he : void 0,
                      disappearingModeInitiatedByMe: a.initiatedByMe,
                    },
                    i,
                  ),
                );
              } else
                O.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                    l,
                    { ephemeralDuration: fe, afterReadDuration: ge },
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
                var ye = yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForIntegrityDeactivateCommunity(l, i);
                O.push.apply(O, ye);
              } else if (
                a.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
              ) {
                var Ce = yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForDeactivateCommunity(l, i);
                O.push.apply(O, Ce);
              } else
                O.push(
                  o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                    l,
                    { terminated: !0 },
                    i,
                  ),
                );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_UNLOCKED:
              O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { growthLockExpiration: void 0, growthLockType: void 0 },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.GROWTH_LOCKED:
              a.type === "invite" &&
                O.push(
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
              var be = a.groupDatas[0].id;
              O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { parentGroup: be.toString() },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_LINK:
              O.push(
                o("WAWebDBCommunity").persistCommunityLink(
                  l,
                  a.groupDatas,
                  o("WAWebDBCommunityTypes").CommunityLinkOperation
                    .SubGroupLink,
                  i,
                ),
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { lastActivityTimestamp: o("WATimeUtils").unixTime() },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_LINK:
              O.push(
                o("WAWebDBCommunity").persistCommunityLink(
                  l,
                  a.groupDatas,
                  o("WAWebDBCommunityTypes").CommunityLinkOperation
                    .SiblingGroupLink,
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.PARENT_GROUP_UNLINK:
              O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { parentGroup: void 0 },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SUB_GROUP_UNLINK:
              O.push(
                o("WAWebDBCommunity").persistCommunityLink(
                  l,
                  a.groupDatas,
                  o("WAWebDBCommunityTypes").CommunityLinkOperation
                    .SubGroupUnlink,
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.SIBLING_GROUP_UNLINK:
              O.push(
                o("WAWebDBCommunity").persistCommunityLink(
                  l,
                  a.groupDatas,
                  o("WAWebDBCommunityTypes").CommunityLinkOperation
                    .SiblingGroupUnlink,
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_MODE:
              (O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { membershipApprovalMode: a.value },
                  i,
                ),
              ),
                a.value ||
                  O.push(
                    o(
                      "WAWebApiMembershipApprovalRequestStore",
                    ).removeAllMembershipApprovalRequests(l),
                  ));
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBERSHIP_APPROVAL_REQUEST:
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.ALLOW_ADMIN_REPORTS:
              O.push(
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
            case o("WAWebGroupType").GROUP_ACTIONS.ADMIN_REPORT_RECIEVED:
              O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { lastReportToAdminTimestamp: a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.CREATED_MEMBERSHIP_REQUESTS:
              {
                O.push(
                  o(
                    "WAWebApiMembershipApprovalRequestStore",
                  ).addMembershipApprovalRequests(
                    l,
                    a.requests.map(function (e) {
                      var t = e.wid;
                      return {
                        id: t,
                        t: $,
                        addedBy: r("WANullthrows")(k),
                        requestMethod: a.requestMethod,
                        parentGroupId: a.parentGroupId,
                      };
                    }),
                  ),
                );
                var ve = o(
                  "WAWebNux",
                ).getMembershipApprovalRequestsBannerNuxKey(l.toString());
                M(ve);
              }
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.REVOKED_MEMBERSHIP_REQUESTS:
              O.push(
                o(
                  "WAWebGroupMembershipApprovalRequestsJob",
                ).removeMembershipApprovalRequestsJob(l, a.requests, i),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS
              .ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
              O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { allowNonAdminSubGroupCreation: !!a.value },
                  i,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS
              .CREATED_SUBGROUP_SUGGESTION: {
              var Se;
              O.push(
                o("WAWebApiSubgroupSuggestionStore").addSubgroupSuggestions(l, [
                  {
                    id: a.id,
                    parentGroupId: a.parentGroupId,
                    subject: a.subject,
                    desc: a.description,
                    owner: a.owner,
                    t: a.t,
                    isExistingGroup: (Se = a.isExistingGroup) != null ? Se : !1,
                    participantCount: a.participantCount,
                    hiddenSubgroup: a.hiddenSubgroup,
                  },
                ]),
              );
              var Re = o("WAWebNux").getSubgroupSuggestionsBannerNuxKey(
                l.toString(),
              );
              M(Re);
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS
              .REVOKED_SUB_GROUP_SUGGESTIONS:
              O.push(
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
              O.push(
                o(
                  "WAWebApiSubgroupSuggestionStore",
                ).updateOwnerInSubgroupSuggestions(
                  a.parentGroupId,
                  a.subgroupSuggestions,
                  a.oldOwner,
                  a.newOwner,
                ),
              );
              break;
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_ADD_MODE: {
              O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { memberAddMode: a.memberAddMode },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.MEMBER_LINK_MODE: {
              o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsEnabled() &&
                O.push(
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
              O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                  l,
                  { generalChatAutoAddDisabled: !0 },
                  i,
                ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE: {
              O.push(
                o("WAWebGroupParticipantsJob")
                  .setGroupSuperAdminJob(l, a.newOwner)
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
                          P(l, i));
                      },
                    ),
                  ),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.HIDDEN_GROUP: {
              O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(l, {
                  hiddenSubgroup: !!a.value,
                }),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS.GROUP_SAFETY_CHECK: {
              O.push(
                o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(l, {
                  groupSafetyCheck: !!a.value,
                }),
              );
              break;
            }
            case o("WAWebGroupType").GROUP_ACTIONS
              .MEMBER_SHARE_GROUP_HISTORY_MODE: {
              o("WAWebGroupHistoryGating").isGroupHistorySettingsEnabled() &&
                O.push(
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
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
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
            O.push(
              o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                l,
                { hasIncompleteParticipantInformation: !0 },
                i,
              ),
            ),
            yield (I || (I = n("Promise"))).all(O),
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
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        N.apply(this, arguments)
      );
    }
    function M(e) {
      o("WAWebBackendApi").frontendFireAndForget("resetNux", { key: e });
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        A.apply(this, arguments)
      );
    }
    ((l.updateDBForGroupAction = T), (l.syncDisappearingModeTriggerToDB = w));
  },
  98,
);
