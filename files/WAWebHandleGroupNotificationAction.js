__d(
  "WAWebHandleGroupNotificationAction",
  [
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
    "WAWebUserUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    async function b(e) {
      var t = await Promise.all([
          o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e),
          o("WAWebSchemaChat").getChatTable().get(e.toString(), !1),
        ]),
        n = t[0],
        r = t[1];
      return !!n || (!!r && !!r.t);
    }
    async function v(e) {
      var t = e.action,
        n = e.actionShouldBeHiddenFromNonAdmins,
        r = e.meta,
        a =
          (await o("WAWebHandleGroupNotificationConst").getIsCagById(
            r.chatId,
          )) === !0;
      if (a && n) {
        var i = await o("WAWebGroupsParticipantsApi").getParticipants(r.chatId),
          l = i ? o("WAWebGroupUtils").amIGroupAdmin(i.admins) : !1;
        return l ? t.participants : [];
      }
      return t.participants;
    }
    async function S(e, t) {
      var n = await o(
        "WAWebGroupHistoryParticipantJob",
      ).enrichGroupActionWithStoredHistoryState(e.chatId, t);
      return o("WAWebBackendApi").frontendSendAndReceive(
        "updateModelForGroupAction",
        { groupMeta: e, groupAction: n },
      );
    }
    async function R(e, t, n, r, a, i) {
      (n === void 0 && (n = !1),
        a === void 0 && (a = !1),
        i === void 0 && (i = !1),
        await o("WAWebHandleGroupCreation").handleGroupCreation({
          groupInfo: t,
          isJoinViaInviteLink: a,
          isOffline: n,
          meta: e,
          suppressInitialE2EENotice: i,
        }),
        r != null &&
          (await o("WAWebUpdateDbForGroupActionApi").updateDBForGroupAction(
            e,
            r,
            n,
          ),
          S(e, r)));
    }
    function L(e, t, n) {
      var r =
        n.defaultSubgroup === !0 || n.isLidAddressingMode === !0
          ? o("WAWebUserUtils").getMeLidUserOrThrow()
          : o("WAWebUserUtils").getMeUserOrThrow();
      if (
        (!o("WAWebUserUtils").isMeAccount(e.author) ||
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
    async function E(e) {
      var t = await k(e),
        n = t.written;
      await n;
    }
    async function k(t) {
      var n = t.isOffline,
        r = n === void 0 ? !1 : n,
        a = t.meta,
        i = await o(
          "WAWebGroupAgentDeletedChat",
        ).isAgentChangeInDeletedGroupChatForActions(a.chatId, a.actions),
        l = null;
      try {
        l = i
          ? null
          : await o(
              "WAWebBotGroupBackendUtils",
            ).genE2EENoticeMsgAfterLastAgentRemoved({
              meta: a,
              actions: a.actions,
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
      var u = [],
        c = await Promise.all(
          a.actions.map(function (e) {
            return T({
              action: e,
              agentChangeInDeletedChat: i,
              isOffline: r,
              meta: a,
              pendingOfflineWrites: u,
            });
          }),
        ),
        d = c.includes(!0) && l != null ? I(l, r) : Promise.resolve(),
        m = Promise.all(
          [].concat(
            u.map(function (e) {
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
            [d],
          ),
        ).then(function () {});
      return (r || (await m), { written: m });
    }
    async function I(e, t) {
      try {
        await $([e], t);
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
    }
    async function T(e) {
      var t = e.action,
        n = e.agentChangeInDeletedChat,
        r = e.isOffline,
        a = r === void 0 ? !1 : r,
        i = e.meta,
        l = e.pendingOfflineWrites;
      if (!t) return !1;
      var s =
        n != null
          ? n
          : await o(
              "WAWebGroupAgentDeletedChat",
            ).isAgentChangeInDeletedGroupChatForActions(i.chatId, [t]);
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
      var u = [];
      try {
        if (
          (await o(
            "WAWebLidMappingUsernameLearnUtils",
          ).processParsedGroupNotificationForLidMappingAndUsernames({
            notification: i,
            flushImmediately: !a,
          }),
          t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE &&
            (await o(
              "WAWebMemberLabelGroupRemoveHandler",
            ).handleMemberLabelUpdatesOnGroupParticipantRemoval(i, t)),
          t.actionType ===
            o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
              .CREATE)
        ) {
          var C,
            E,
            k = babelHelpers.extends({}, t.groupInfo, {
              id: i.chatId,
              isLidAddressingMode: i.isLidAddressingMode,
            }),
            I = L(i, t, k),
            T = await b(k.id),
            P = I == null || (t.isNewGroup === !0 && !T),
            N = P
              ? (C =
                  (E = await o("WAWebGroupsParticipantsApi").getParticipants(
                    i.chatId,
                  )) == null
                    ? void 0
                    : E.participants) != null
                ? C
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
              T,
            )
            .tags("groups");
          var M = await o(
            "WAWebGroupAgentPrivacyNotice",
          ).genGroupAgentNoticeMsgsForCreate({
            meta: i,
            participants: k.participants,
          });
          if (
            (await R(i, k, a, I, t.reason === "invite", M.length > 0),
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
            var w = o(
              "WAWebBotUtils",
            ).participantListIncludeOpenOrTeeGroupBotWid(k.participants);
            (w.includeOpenMetabot || w.includeTeeMetabot) &&
              o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                id: i.chatId,
                actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
              });
          }
          var A = await o("WAWebGroupSystemMsg").genMsgsForGroupCreation(
              i,
              k,
              T,
              I,
            ),
            F = P
              ? await o(
                  "WAWebGroupAgentAddSystemMsgs",
                ).genGroupCreateAgentAddMsgs({
                  meta: i,
                  participants: k.participants,
                  prevParticipantIds: N,
                  reason: t.reason,
                })
              : [];
          u.push.apply(
            u,
            (T
              ? [].concat(A.filter(Boolean), M)
              : [].concat(M, A.filter(Boolean))
            ).concat(F),
          );
        } else if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
          var O = await o(
              "WAWebHandleGroupNotificationConst",
            ).notAlreadyInGroup(i.chatId, t.participants),
            B = await o(
              "WAWebShouldTriggerQueryGroupInfo",
            ).shouldTriggerQueryGroupInfo({ groupWid: i.chatId, action: t });
          if (
            (B
              ? await o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                  id: i.chatId,
                  actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                })
              : (await o(
                  "WAWebUpdateDbForGroupActionApi",
                ).updateDBForGroupAction(i, t, a),
                S(i, t)),
            O.length || t.reason)
          ) {
            var W = await v({
              meta: i,
              action: t,
              actionShouldBeHiddenFromNonAdmins: !0,
            });
            if (W.length > 0) {
              if (
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[system message] eligible participants = ",
                      " - ADD",
                    ])),
                  W.length,
                ),
                u.push.apply(
                  u,
                  await D({
                    action: t,
                    meta: i,
                    newParticipants: O,
                    rowParticipants: W,
                    skipPrivacyNotices: B,
                  }),
                ),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() ||
                  o(
                    "WAWebBotGroupGatingUtils",
                  ).isTEEGroupBotParticipantAddEnabled())
              ) {
                var q =
                  o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(
                    W,
                  );
                !B &&
                  (q.includeOpenMetabot || q.includeTeeMetabot) &&
                  o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                    id: i.chatId,
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                  });
              }
              if (t.reason === o("WAWebGroupType").ADD_REASON.INVITE) {
                var U = await o(
                  "WAWebApiParticipantStore",
                ).isCurrentUserGroupAdmin(i.chatId.toString());
                if (U)
                  try {
                    var V = await o(
                        "WAWebDBGroupsGroupMetadata",
                      ).getGroupMetadata(i.chatId),
                      H = await o(
                        "WAWebGroupLinkJoinUtils",
                      ).maybeGenerateLinkJoinNotifications(i, V, W);
                    H.forEach(function (e) {
                      u.push(e);
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
              o("WAWebGroupType").GROUP_ACTIONS.INTEGRITY_PARENT_GROUP_UNLINK ||
            t.actionType ===
              o("WAWebGroupType").GROUP_ACTIONS.INTEGRITY_SUB_GROUP_UNLINK
          )
        ) {
          if (
            !(
              t.actionType ===
                o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_GROUP_UNLINK ||
              t.actionType ===
                o("WAWebGroupType").GROUP_ACTIONS.DELETE_PARENT_SUB_GROUP_UNLINK
            )
          )
            if (
              t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE &&
              t.reason ===
                o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT
            ) {
              var G = await o(
                "WAWebGroupSystemMsg",
              ).genIntegrityDeleteParentNotificationMsgs(i, t);
              (G.forEach(function (e) {
                u.push(e);
              }),
                await o(
                  "WAWebUpdateDbForGroupActionApi",
                ).updateDBForGroupAction(i, t, a),
                S(i, t));
            } else if (
              t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD ||
              t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE
            )
              (u.push(
                await o("WAWebGroupSystemMsg").genDescriptionNotificationMsg(
                  i,
                  t,
                ),
              ),
                await o(
                  "WAWebUpdateDbForGroupActionApi",
                ).updateDBForGroupAction(i, t, a),
                S(i, t));
            else if (
              t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE &&
              t.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
            ) {
              var z = await o(
                "WAWebGroupSystemMsg",
              ).generateDeleteParentNotificationMessages(i);
              if (z.length === 0) return !1;
              (z.forEach(function (e) {
                u.push(e);
              }),
                await o(
                  "WAWebUpdateDbForGroupActionApi",
                ).updateDBForGroupAction(i, t, a),
                S(i, t));
            } else {
              var j = !1;
              if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE) {
                var K = await o(
                  "WAWebShouldTriggerQueryGroupInfo",
                ).shouldTriggerQueryGroupInfo({
                  groupWid: i.chatId,
                  action: t,
                  disableForCAGs: !0,
                });
                K &&
                  ((j = !0),
                  o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                    id: i.chatId,
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                  }));
              }
              if (!j) {
                var Q = await o(
                  "WAWebHandleGroupNotificationConst",
                ).shouldSkipGenMsg(i, t);
                if (
                  (await o(
                    "WAWebUpdateDbForGroupActionApi",
                  ).updateDBForGroupAction(i, t, a),
                  S(i, t),
                  !Q)
                ) {
                  var X = await o(
                    "WAWebApiParticipantStore",
                  ).isCurrentUserGroupAdmin(i.chatId.toString());
                  if (
                    t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                  ) {
                    var Y = await v({
                      meta: i,
                      action: t,
                      actionShouldBeHiddenFromNonAdmins: !0,
                    });
                    if (
                      Y.length > 0 &&
                      (o("WALogger").LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[system message] eligible participants = ",
                            " - REMOVE",
                          ])),
                        Y.length,
                      ),
                      u.push.apply(
                        u,
                        await x({
                          action: babelHelpers.extends({}, t, {
                            participants: Y,
                          }),
                          dbIsStale: j,
                          isAdmin: X,
                          meta: i,
                        }),
                      ),
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isOpenGroupBotParticipantAddEnabled() ||
                        o(
                          "WAWebBotGroupGatingUtils",
                        ).isTEEGroupBotParticipantAddEnabled())
                    ) {
                      var J =
                        o(
                          "WAWebBotUtils",
                        ).participantListIncludeOpenOrTeeGroupBotWid(Y);
                      (J.includeOpenMetabot || J.includeTeeMetabot) &&
                        o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById(
                          {
                            id: i.chatId,
                            actionType:
                              o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                          },
                        );
                    }
                  } else if (
                    t.actionType ===
                    o("WAWebGroupType").GROUP_ACTIONS
                      .CREATED_SUBGROUP_SUGGESTION
                  ) {
                    var Z = await o(
                      "WAWebGroupSystemMsg",
                    ).genCreatedSubgroupSuggestionNotificationMsg(i, t);
                    Z && u.push(Z);
                  } else if (
                    t.actionType ===
                      o("WAWebGroupType").GROUP_ACTIONS.PROMOTE ||
                    t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DEMOTE ||
                    t.actionType === o("WAWebGroupType").GROUP_ACTIONS.MODIFY ||
                    t.actionType ===
                      o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_PROMOTE ||
                    t.actionType ===
                      o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE
                  ) {
                    var ee =
                        t.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS.DEMOTE ||
                        t.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE,
                      te = await v({
                        meta: i,
                        action: t,
                        actionShouldBeHiddenFromNonAdmins: ee,
                      });
                    te.length > 0 &&
                      (o("WALogger").LOG(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "[system message] eligible participants = ",
                            " - actionType = ",
                            "",
                          ])),
                        te.length,
                        t.actionType,
                      ),
                      u.push(
                        await o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                          meta: babelHelpers.extends({}, i, { isAdmin: X }),
                          action: babelHelpers.extends({}, t, {
                            participants: te,
                          }),
                          dbIsStale: j,
                        }),
                      ));
                  } else if (
                    t.actionType ===
                    o("WAWebGroupType").GROUP_ACTIONS
                      .ALLOW_NON_ADMIN_SUB_GROUP_CREATION
                  ) {
                    var ne = await o(
                      "WAWebGroupSystemMsg",
                    ).genAllowNonAdminSubGroupCreationNotificationMsg(i, t);
                    ne && u.push(ne);
                  } else if (
                    t.actionType ===
                    o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE
                  ) {
                    var re = await o(
                      "WAWebGroupSystemMsg",
                    ).genCommunityOwnerUpdateNotificationMsg(i, t);
                    re && u.push(re);
                  } else
                    (o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[system message] another action => ",
                          "",
                        ])),
                      t.actionType,
                    ),
                      u.push(
                        await o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                          meta: babelHelpers.extends({}, i, { isAdmin: X }),
                          action: t,
                          dbIsStale: j,
                        }),
                      ));
                }
              }
            }
        }
        var oe = s ? [] : u.filter(Boolean),
          ae = $(oe, a);
        return (
          a && l != null ? l.push(ae) : await ae,
          t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE &&
            oe.length > 0
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
    }
    async function D(e) {
      var t = e.action,
        n = e.meta,
        r = e.newParticipants,
        a = e.rowParticipants,
        i = e.skipPrivacyNotices,
        l = i
          ? []
          : await o(
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
        s = await o("WAWebGroupAgentAddSystemMsgs").genGroupAddNotificationMsgs(
          {
            meta: n,
            action: babelHelpers.extends({}, t, { participants: a }),
            dbIsStale: !1,
          },
        );
      return o("WAWebGroupAgentPrivacyNotice").orderGroupAgentNoticesAndRows(
        [].concat(
          l,
          await o(
            "WAWebGroupAgentPrivacyNotice",
          ).genMetaAiGroupNoticeMsgsForAdd({ addedParticipants: a, meta: n }),
        ),
        s,
      );
    }
    async function x(e) {
      var t = e.action,
        n = e.dbIsStale,
        r = e.isAdmin,
        a = e.meta,
        i = await o(
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
            await o("WAWebGroupSystemMsg").genGroupNotificationMsg({
              meta: babelHelpers.extends({}, a, { isAdmin: r }),
              action: t,
              dbIsStale: n,
            }),
          ];
    }
    async function $(e, t) {
      if (e.length !== 0) {
        if (t) {
          (o("WAWebBackendEventBus").BackendEventBus.isMainStreamReadyMd &&
            o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() &&
            e.forEach(function (e) {
              o("WAWebBackendApi").frontendFireAndForget("updateMessageUI", {
                chatId: e.id.remote,
                msg: e,
              });
            }),
            await o("WAWebGetMessageCache")
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
          await Promise.all(
            e.map(function (e) {
              return o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: e.from,
                newMsg: e,
                handleSingleMsgOrigin: "handleGroupNotification",
              });
            }),
          );
          return;
        }
        await P(e);
      }
    }
    async function P(e) {
      (await o("WAWebGetMessageCache")
        .getMessageCache()
        .addMessages(
          e.map(function (e) {
            return { msg: e };
          }),
          !0,
        ),
        await Promise.all(
          e.map(async function (e) {
            try {
              await o("WAWebBackendApi").frontendSendAndReceive(
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
          }),
        ));
    }
    ((l.handleActions = E),
      (l.handleActionsUntilQueued = k),
      (l.handleAction = T),
      (l.writeSystemNotifications = $),
      (l.writeOnlineSystemNotifications = P));
  },
  98,
);
