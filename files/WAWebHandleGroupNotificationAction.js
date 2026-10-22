__d(
  "WAWebHandleGroupNotificationAction",
  [
    "Promise",
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebBotGroupBackendUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGetMessageCache",
    "WAWebGroupAgentAddSystemMsgs",
    "WAWebGroupAgentDeletedChat",
    "WAWebGroupAgentPrivacyNotice",
    "WAWebGroupAgentRemovalSystemMsgs",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupLinkJoinUtils",
    "WAWebGroupQueryJob",
    "WAWebGroupSystemMsg",
    "WAWebGroupType",
    "WAWebGroupUtils",
    "WAWebGroupsParticipantsApi",
    "WAWebHandleGroupCreation",
    "WAWebHandleGroupNotificationConst",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidMappingUsernameLearnUtils",
    "WAWebMemberLabelGroupRemoveHandler",
    "WAWebSchemaChat",
    "WAWebShouldTriggerQueryGroupInfo",
    "WAWebUpdateDbForGroupActionApi",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "cr:4533",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b;
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (b || (b = n("Promise"))).all([
              o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e),
              o("WAWebSchemaChat").getChatTable().get(e.toString(), !1),
            ]),
            r = t[0],
            a = t[1];
          return !!r || (!!a && !!a.t);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.actionShouldBeHiddenFromNonAdmins,
            r = e.meta,
            a =
              (yield o("WAWebHandleGroupNotificationConst").getIsCagById(
                r.chatId,
              )) === !0;
          if (a && n) {
            var i = yield o("WAWebGroupsParticipantsApi").getParticipants(
                r.chatId,
              ),
              l = i ? o("WAWebGroupUtils").amIGroupAdmin(i.admins) : !1;
            return l ? t.participants : [];
          }
          return t.participants;
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebGroupHistoryParticipantJob",
          ).enrichGroupActionWithStoredHistoryState(e.chatId, t);
          return o("WAWebBackendApi").frontendSendAndReceive(
            "updateModelForGroupAction",
            { groupMeta: e, groupAction: n },
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n, r, o, a) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            (n === void 0 && (n = !1),
              a === void 0 && (a = !1),
              i === void 0 && (i = !1),
              yield o("WAWebHandleGroupCreation").handleGroupCreation({
                groupInfo: t,
                isJoinViaInviteLink: a,
                isOffline: n,
                meta: e,
                suppressInitialE2EENotice: i,
              }),
              r != null &&
                (yield o(
                  "WAWebUpdateDbForGroupActionApi",
                ).updateDBForGroupAction(e, r, n),
                E(e, r)));
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
      var r =
        n.defaultSubgroup === !0 || n.isLidAddressingMode === !0
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMeUserOrThrow();
      if (
        (!o("WAWebUserPrefsMeUser").isMeAccount(e.author) ||
          t.reason === o("WAWebGroupType").ADD_REASON.INVITE_AUTO_ADD) &&
        r != null
      ) {
        var a = o("WAWebGroupUtils").amIGroupAdminGivenParticipants(
          n.participants,
        );
        return {
          actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
          participants: [{ id: r, isAdmin: a, isSuperAdmin: !1 }],
          reason: t.reason,
          parentGroupId: n.parentGroup,
          isParentGroup: n.isParentGroup,
          contextGroupId: t.contextGroupId,
          groupName: n.subject,
          defaultSubgroup: n.defaultSubgroup,
          generalSubgroup: n.generalSubgroup,
          hiddenSubgroup: n.hiddenSubgroup,
        };
      }
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield P(e),
            n = t.written;
          yield n;
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.isOffline,
            a = r === void 0 ? !1 : r,
            i = t.meta,
            l = yield o(
              "WAWebGroupAgentDeletedChat",
            ).isAgentChangeInDeletedGroupChatForActions(i.chatId, i.actions),
            u = null;
          try {
            u = l
              ? null
              : yield o(
                  "WAWebBotGroupBackendUtils",
                ).genE2EENoticeMsgAfterLastAgentRemoved({
                  meta: i,
                  actions: i.actions,
                });
          } catch (t) {
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handleGroupNotification: end-to-end encryption notice generation failed with ",
                    "",
                  ])),
                t,
              )
              .sendLogs("group-notification-e2ee-notice-generation-error");
          }
          var c = [],
            d = yield (b || (b = n("Promise"))).all(
              i.actions.map(function (e) {
                return A({
                  action: e,
                  agentChangeInDeletedChat: l,
                  isOffline: a,
                  meta: i,
                  pendingOfflineWrites: c,
                });
              }),
            ),
            m =
              d.includes(!0) && u != null
                ? M(u, a)
                : (b || (b = n("Promise"))).resolve(),
            p = b
              .all(
                [].concat(
                  c.map(function (e) {
                    return e.catch(function (e) {
                      o("WALogger")
                        .LOG(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "handleGroupNotification: offline removal row write failed with ",
                              "",
                            ])),
                          e,
                        )
                        .sendLogs(
                          "group-notification-offline-removal-rows-write-error",
                        );
                    });
                  }),
                  [m],
                ),
              )
              .then(function () {});
          return (a || (yield p), { written: p });
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
            yield U([e], t);
          } catch (e) {
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "handleGroupNotification: end-to-end encryption notice write failed with ",
                    "",
                  ])),
                e,
              )
              .sendLogs("group-notification-e2ee-notice-write-error");
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            a = e.agentChangeInDeletedChat,
            i = e.isOffline,
            l = i === void 0 ? !1 : i,
            s = e.meta,
            u = e.pendingOfflineWrites;
          if (!t) return !1;
          var C =
            a != null
              ? a
              : yield o(
                  "WAWebGroupAgentDeletedChat",
                ).isAgentChangeInDeletedGroupChatForActions(s.chatId, [t]);
          o("WALogger")
            .LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "handle action ",
                  "",
                ])),
              t.actionType,
            )
            .tags("groups");
          var b = [];
          try {
            if (
              (yield o(
                "WAWebLidMappingUsernameLearnUtils",
              ).processParsedGroupNotificationForLidMappingAndUsernames({
                notification: s,
                flushImmediately: !l,
              }),
              t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE &&
                (yield o(
                  "WAWebMemberLabelGroupRemoveHandler",
                ).handleMemberLabelUpdatesOnGroupParticipantRemoval(s, t)),
              t.actionType ===
                o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                  .CREATE)
            ) {
              var S,
                L,
                k = babelHelpers.extends({}, t.groupInfo, {
                  id: s.chatId,
                  isLidAddressingMode: s.isLidAddressingMode,
                }),
                T = D(s, t, k),
                x = yield v(k.id),
                $ = T == null || (t.isNewGroup === !0 && !x),
                P = $
                  ? (S =
                      (L = yield o(
                        "WAWebGroupsParticipantsApi",
                      ).getParticipants(s.chatId)) == null
                        ? void 0
                        : L.participants) != null
                    ? S
                    : []
                  : [];
              o("WALogger")
                .LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "group id ",
                      " exists in storage = ",
                      "",
                    ])),
                  k.id,
                  x,
                )
                .tags("groups");
              var N = yield o(
                "WAWebGroupAgentPrivacyNotice",
              ).genGroupAgentNoticeMsgsForCreate({
                meta: s,
                participants: k.participants,
              });
              if (
                (yield I(s, k, l, T, t.reason === "invite", N.length > 0),
                o("WALogger")
                  .LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "handleGroupCreation done for group id ",
                        "",
                      ])),
                    k.id,
                  )
                  .tags("groups"),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() ||
                  o(
                    "WAWebBotGroupGatingUtils",
                  ).isTEEGroupBotParticipantAddEnabled())
              ) {
                var M = o(
                  "WAWebBotUtils",
                ).participantListIncludeOpenOrTeeGroupBotWid(k.participants);
                (M.includeOpenMetabot || M.includeTeeMetabot) &&
                  o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                    id: s.chatId,
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                  });
              }
              var w = yield o("WAWebGroupSystemMsg").genMsgsForGroupCreation(
                  s,
                  k,
                  x,
                  T,
                ),
                A = $
                  ? yield o(
                      "WAWebGroupAgentAddSystemMsgs",
                    ).genGroupCreateAgentAddMsgs({
                      meta: s,
                      participants: k.participants,
                      prevParticipantIds: P,
                      reason: t.reason,
                    })
                  : [];
              b.push.apply(
                b,
                (x
                  ? [].concat(w.filter(Boolean), N)
                  : [].concat(N, w.filter(Boolean))
                ).concat(A),
              );
            } else if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
              if (!r("gkx")("26258")) {
                var F,
                  B =
                    (F =
                      n("cr:4533") == null
                        ? void 0
                        : n("cr:4533").getDebugIgnoreParticipantAdd()) != null
                      ? F
                      : 0;
                if (B > 0)
                  return (
                    n("cr:4533") == null ||
                      n("cr:4533").setDebugIgnoreParticipantAdd(B - 1),
                    !1
                  );
              }
              var q = yield o(
                  "WAWebHandleGroupNotificationConst",
                ).notAlreadyInGroup(s.chatId, t.participants),
                V = yield o(
                  "WAWebShouldTriggerQueryGroupInfo",
                ).shouldTriggerQueryGroupInfo({
                  groupWid: s.chatId,
                  action: t,
                });
              if (
                (V
                  ? yield o(
                      "WAWebGroupQueryJob",
                    ).queryAndUpdateGroupMetadataById({
                      id: s.chatId,
                      actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                    })
                  : (yield o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(s, t, l),
                    E(s, t)),
                q.length || t.reason)
              ) {
                var H = yield R({
                  meta: s,
                  action: t,
                  actionShouldBeHiddenFromNonAdmins: !0,
                });
                if (H.length > 0) {
                  if (
                    (o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[system message] eligible participants = ",
                          " - ADD",
                        ])),
                      H.length,
                    ),
                    b.push.apply(
                      b,
                      yield O({
                        action: t,
                        meta: s,
                        newParticipants: q,
                        rowParticipants: H,
                        skipPrivacyNotices: V,
                      }),
                    ),
                    o(
                      "WAWebBotGroupGatingUtils",
                    ).isOpenGroupBotParticipantAddEnabled() ||
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isTEEGroupBotParticipantAddEnabled())
                  ) {
                    var G =
                      o(
                        "WAWebBotUtils",
                      ).participantListIncludeOpenOrTeeGroupBotWid(H);
                    !V &&
                      (G.includeOpenMetabot || G.includeTeeMetabot) &&
                      o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                        id: s.chatId,
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                      });
                  }
                  if (t.reason === o("WAWebGroupType").ADD_REASON.INVITE) {
                    var z = yield o(
                      "WAWebApiParticipantStore",
                    ).isCurrentUserGroupAdmin(s.chatId.toString());
                    if (z)
                      try {
                        var j = yield o(
                            "WAWebDBGroupsGroupMetadata",
                          ).getGroupMetadata(s.chatId),
                          K = yield o(
                            "WAWebGroupLinkJoinUtils",
                          ).maybeGenerateLinkJoinNotifications(s, j, H);
                        K.forEach(function (e) {
                          b.push(e);
                        });
                      } catch (e) {
                        o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "[system message] link join notifications failed: ",
                              "",
                            ])),
                          e,
                        );
                      }
                  }
                }
              }
            } else if (
              !(
                t.actionType ===
                  o("WAWebGroupType").GROUP_ACTIONS
                    .INTEGRITY_PARENT_GROUP_UNLINK ||
                t.actionType ===
                  o("WAWebGroupType").GROUP_ACTIONS.INTEGRITY_SUB_GROUP_UNLINK
              )
            ) {
              if (
                !(
                  t.actionType ===
                    o("WAWebGroupType").GROUP_ACTIONS
                      .DELETE_PARENT_GROUP_UNLINK ||
                  t.actionType ===
                    o("WAWebGroupType").GROUP_ACTIONS
                      .DELETE_PARENT_SUB_GROUP_UNLINK
                )
              )
                if (
                  t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE &&
                  t.reason ===
                    o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT
                ) {
                  var Q = yield o(
                    "WAWebGroupSystemMsg",
                  ).genIntegrityDeleteParentNotificationMsgs(s, t);
                  (Q.forEach(function (e) {
                    b.push(e);
                  }),
                    yield o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(s, t, l),
                    E(s, t));
                } else if (
                  t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD ||
                  t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE
                )
                  (b.push(
                    yield o(
                      "WAWebGroupSystemMsg",
                    ).genDescriptionNotificationMsg(s, t),
                  ),
                    yield o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(s, t, l),
                    E(s, t));
                else if (
                  t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE &&
                  t.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
                ) {
                  var X = yield o(
                    "WAWebGroupSystemMsg",
                  ).generateDeleteParentNotificationMessages(s);
                  if (X.length === 0) return !1;
                  (X.forEach(function (e) {
                    b.push(e);
                  }),
                    yield o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(s, t, l),
                    E(s, t));
                } else {
                  var Y = !1;
                  if (
                    t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                  ) {
                    var J = yield o(
                      "WAWebShouldTriggerQueryGroupInfo",
                    ).shouldTriggerQueryGroupInfo({
                      groupWid: s.chatId,
                      action: t,
                      disableForCAGs: !0,
                    });
                    J &&
                      ((Y = !0),
                      o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                        id: s.chatId,
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                      }));
                  }
                  if (!Y) {
                    var Z = yield o(
                      "WAWebHandleGroupNotificationConst",
                    ).shouldSkipGenMsg(s, t);
                    if (
                      (yield o(
                        "WAWebUpdateDbForGroupActionApi",
                      ).updateDBForGroupAction(s, t, l),
                      E(s, t),
                      !Z)
                    ) {
                      var ee = yield o(
                        "WAWebApiParticipantStore",
                      ).isCurrentUserGroupAdmin(s.chatId.toString());
                      if (
                        t.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                      ) {
                        var te = yield R({
                          meta: s,
                          action: t,
                          actionShouldBeHiddenFromNonAdmins: !0,
                        });
                        if (
                          te.length > 0 &&
                          (o("WALogger").LOG(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "[system message] eligible participants = ",
                                " - REMOVE",
                              ])),
                            te.length,
                          ),
                          b.push.apply(
                            b,
                            yield W({
                              action: babelHelpers.extends({}, t, {
                                participants: te,
                              }),
                              dbIsStale: Y,
                              isAdmin: ee,
                              meta: s,
                            }),
                          ),
                          o(
                            "WAWebBotGroupGatingUtils",
                          ).isOpenGroupBotParticipantAddEnabled() ||
                            o(
                              "WAWebBotGroupGatingUtils",
                            ).isTEEGroupBotParticipantAddEnabled())
                        ) {
                          var ne =
                            o(
                              "WAWebBotUtils",
                            ).participantListIncludeOpenOrTeeGroupBotWid(te);
                          (ne.includeOpenMetabot || ne.includeTeeMetabot) &&
                            o(
                              "WAWebGroupQueryJob",
                            ).queryAndUpdateGroupMetadataById({
                              id: s.chatId,
                              actionType:
                                o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                            });
                        }
                      } else if (
                        t.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS
                          .CREATED_SUBGROUP_SUGGESTION
                      ) {
                        var re = yield o(
                          "WAWebGroupSystemMsg",
                        ).genCreatedSubgroupSuggestionNotificationMsg(s, t);
                        re && b.push(re);
                      } else if (
                        t.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS.PROMOTE ||
                        t.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS.DEMOTE ||
                        t.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS.MODIFY ||
                        t.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS
                            .LINKED_GROUP_PROMOTE ||
                        t.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE
                      ) {
                        var oe =
                            t.actionType ===
                              o("WAWebGroupType").GROUP_ACTIONS.DEMOTE ||
                            t.actionType ===
                              o("WAWebGroupType").GROUP_ACTIONS
                                .LINKED_GROUP_DEMOTE,
                          ae = yield R({
                            meta: s,
                            action: t,
                            actionShouldBeHiddenFromNonAdmins: oe,
                          });
                        ae.length > 0 &&
                          (o("WALogger").LOG(
                            g ||
                              (g = babelHelpers.taggedTemplateLiteralLoose([
                                "[system message] eligible participants = ",
                                " - actionType = ",
                                "",
                              ])),
                            ae.length,
                            t.actionType,
                          ),
                          b.push(
                            yield o(
                              "WAWebGroupSystemMsg",
                            ).genGroupNotificationMsg({
                              meta: babelHelpers.extends({}, s, {
                                isAdmin: ee,
                              }),
                              action: babelHelpers.extends({}, t, {
                                participants: ae,
                              }),
                              dbIsStale: Y,
                            }),
                          ));
                      } else if (
                        t.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS
                          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION
                      ) {
                        var ie = yield o(
                          "WAWebGroupSystemMsg",
                        ).genAllowNonAdminSubGroupCreationNotificationMsg(s, t);
                        ie && b.push(ie);
                      } else if (
                        t.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE
                      ) {
                        var le = yield o(
                          "WAWebGroupSystemMsg",
                        ).genCommunityOwnerUpdateNotificationMsg(s, t);
                        le && b.push(le);
                      } else
                        (o("WALogger").LOG(
                          h ||
                            (h = babelHelpers.taggedTemplateLiteralLoose([
                              "[system message] another action => ",
                              "",
                            ])),
                          t.actionType,
                        ),
                          b.push(
                            yield o(
                              "WAWebGroupSystemMsg",
                            ).genGroupNotificationMsg({
                              meta: babelHelpers.extends({}, s, {
                                isAdmin: ee,
                              }),
                              action: t,
                              dbIsStale: Y,
                            }),
                          ));
                    }
                  }
                }
            }
            var se = C ? [] : b.filter(Boolean),
              ue = U(se, l);
            return (
              l && u != null ? u.push(ue) : yield ue,
              t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE &&
                se.length > 0
            );
          } catch (e) {
            return (
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "handleGroupNotification: failed with ",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.meta,
            r = e.newParticipants,
            a = e.rowParticipants,
            i = e.skipPrivacyNotices,
            l = i
              ? []
              : yield o(
                  "WAWebGroupAgentPrivacyNotice",
                ).genGroupAgentPrivacyNoticeMsgsForAdd({
                  chatId: n.chatId,
                  addedParticipantIds: a
                    .filter(function (e) {
                      var t = e.id;
                      return r.some(function (e) {
                        return e.id.equals(t);
                      });
                    })
                    .map(function (e) {
                      var t = e.id;
                      return t;
                    }),
                  meta: n,
                }),
            s = yield o(
              "WAWebGroupAgentAddSystemMsgs",
            ).genGroupAddNotificationMsgs({
              meta: n,
              action: babelHelpers.extends({}, t, { participants: a }),
              dbIsStale: !1,
            });
          return o(
            "WAWebGroupAgentPrivacyNotice",
          ).orderGroupAgentNoticesAndRows(
            [].concat(
              l,
              yield o(
                "WAWebGroupAgentPrivacyNotice",
              ).genMetaAiGroupNoticeMsgsForAdd({
                addedParticipants: a,
                meta: n,
              }),
            ),
            s,
          );
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            n = e.dbIsStale,
            r = e.isAdmin,
            a = e.meta,
            i = yield o(
              "WAWebGroupAgentRemovalSystemMsgs",
            ).genGroupAgentRemovalMsgs({
              meta: a,
              action: t,
              dbIsStale: n,
              isAdmin: r,
            });
          return i != null
            ? i
            : [
                yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                  meta: babelHelpers.extends({}, a, { isAdmin: r }),
                  action: t,
                  dbIsStale: n,
                }),
              ];
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length !== 0) {
            if (t) {
              (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
                o(
                  "WAWebBotGroupGatingUtils",
                ).isStandardBotProfileGroupEnabled() &&
                e.forEach(function (e) {
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateMessageUI",
                    { chatId: e.id.remote, msg: e },
                  );
                }),
                yield o("WAWebGetMessageCache")
                  .getMessageCache()
                  .addMessages(
                    e.map(function (e) {
                      return { msg: e };
                    }),
                    !1,
                  ));
              return;
            }
            if (!r("justknobx")._("6733")) {
              yield (b || (b = n("Promise"))).all(
                e.map(function (e) {
                  return o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: e.from,
                    newMsg: e,
                    handleSingleMsgOrigin: "handleGroupNotification",
                  });
                }),
              );
              return;
            }
            yield H(e);
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebGetMessageCache")
            .getMessageCache()
            .addMessages(
              e.map(function (e) {
                return { msg: e };
              }),
              !0,
            ),
            yield (b || (b = n("Promise"))).all(
              e.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      try {
                        yield o("WAWebBackendApi").frontendSendAndReceive(
                          "updateMessageUI",
                          { chatId: e.id.remote, msg: e },
                        );
                      } catch (t) {
                        o("WALogger").WARN(
                          C ||
                            (C = babelHelpers.taggedTemplateLiteralLoose([
                              "writeOnlineSystemNotifications: updateMessageUI failed for ",
                              ": ",
                              "",
                            ])),
                          e.id.toString(),
                          t,
                        );
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ));
        })),
        G.apply(this, arguments)
      );
    }
    ((l.handleActions = x),
      (l.handleActionsUntilQueued = P),
      (l.handleAction = A),
      (l.writeSystemNotifications = U),
      (l.writeOnlineSystemNotifications = H));
  },
  98,
);
