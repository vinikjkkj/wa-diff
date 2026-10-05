__d(
  "WAWebHandleGroupNotificationAction",
  [
    "Promise",
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebBackendApi",
    "WAWebBotGroupBackendUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGetMessageCache",
    "WAWebGroupAgentAddSystemMsgs",
    "WAWebGroupAgentDeletedChat",
    "WAWebGroupAgentPrivacyNotice",
    "WAWebGroupAgentRemovalSystemMsgs",
    "WAWebGroupGatingUtils",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (y || (y = n("Promise"))).all([
              o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e),
              o("WAWebSchemaChat").getChatTable().get(e.toString(), !1),
            ]),
            r = t[0],
            a = t[1];
          return !!r || (!!a && !!a.t);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebGroupHistoryParticipantJob",
          ).enrichGroupActionWithStoredHistoryState(e.chatId, t);
          return o("WAWebBackendApi").frontendSendAndReceive(
            "updateModelForGroupAction",
            { groupMeta: e, groupAction: n },
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n, r, o, a) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                R(e, r)));
          },
        )),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
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
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
          var c = yield (y || (y = n("Promise"))).all(
            i.actions.map(function (e) {
              return x({
                action: e,
                agentChangeInDeletedChat: l,
                isOffline: a,
                meta: i,
              });
            }),
          );
          if (!(!c.includes(!0) || u == null))
            try {
              yield A([u], a);
            } catch (e) {
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "handleGroupNotification: end-to-end encryption notice write failed with ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("group-notification-e2ee-notice-write-error");
            }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.action,
            a = e.agentChangeInDeletedChat,
            i = e.isOffline,
            l = i === void 0 ? !1 : i,
            s = e.meta;
          if (!t) return !1;
          var y =
            a != null
              ? a
              : yield o(
                  "WAWebGroupAgentDeletedChat",
                ).isAgentChangeInDeletedGroupChatForActions(s.chatId, [t]);
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
                T = I(s, t, k),
                D = yield C(k.id),
                x = T == null || (t.isNewGroup === !0 && !D),
                $ = x
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "group id ",
                      " exists in storage = ",
                      "",
                    ])),
                  k.id,
                  D,
                )
                .tags("groups");
              var N = yield o(
                "WAWebGroupAgentPrivacyNotice",
              ).genGroupAgentNoticeMsgsForCreate({
                meta: s,
                participants: k.participants,
              });
              if (
                (yield E(s, k, l, T, t.reason === "invite", N.length > 0),
                o("WALogger")
                  .LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
                    id: s.chatId,
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                  });
              }
              var F = yield o("WAWebGroupSystemMsg").genMsgsForGroupCreation(
                  s,
                  k,
                  D,
                  T,
                ),
                O = x
                  ? yield o(
                      "WAWebGroupAgentAddSystemMsgs",
                    ).genGroupCreateAgentAddMsgs({
                      meta: s,
                      participants: k.participants,
                      prevParticipantIds: $,
                      reason: t.reason,
                    })
                  : [];
              b.push.apply(
                b,
                (D
                  ? [].concat(F.filter(Boolean), N)
                  : [].concat(N, F.filter(Boolean))
                ).concat(O),
              );
            } else if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
              if (!r("gkx")("26258")) {
                var B,
                  W =
                    (B =
                      n("cr:4533") == null
                        ? void 0
                        : n("cr:4533").getDebugIgnoreParticipantAdd()) != null
                      ? B
                      : 0;
                if (W > 0)
                  return (
                    n("cr:4533") == null ||
                      n("cr:4533").setDebugIgnoreParticipantAdd(W - 1),
                    !1
                  );
              }
              var q = yield o(
                  "WAWebHandleGroupNotificationConst",
                ).notAlreadyInGroup(s.chatId, t.participants),
                U = yield o(
                  "WAWebShouldTriggerQueryGroupInfo",
                ).shouldTriggerQueryGroupInfo({
                  groupWid: s.chatId,
                  action: t,
                });
              if (
                (U
                  ? yield o(
                      "WAWebGroupQueryJob",
                    ).queryAndUpdateGroupMetadataById({
                      id: s.chatId,
                      actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                    })
                  : (yield o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(s, t, l),
                    R(s, t)),
                q.length || t.reason)
              ) {
                var V = yield v({
                  meta: s,
                  action: t,
                  actionShouldBeHiddenFromNonAdmins: !0,
                });
                if (V.length > 0) {
                  if (
                    (o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[system message] eligible participants = ",
                          " - ADD",
                        ])),
                      V.length,
                    ),
                    b.push.apply(
                      b,
                      yield P({
                        action: t,
                        meta: s,
                        newParticipants: q,
                        rowParticipants: V,
                        skipPrivacyNotices: U,
                      }),
                    ),
                    o(
                      "WAWebBotGroupGatingUtils",
                    ).isOpenGroupBotParticipantAddEnabled() ||
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isTEEGroupBotParticipantAddEnabled())
                  ) {
                    var H =
                      o(
                        "WAWebBotUtils",
                      ).participantListIncludeOpenOrTeeGroupBotWid(V);
                    !U &&
                      (H.includeOpenMetabot || H.includeTeeMetabot) &&
                      o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                        id: s.chatId,
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                      });
                  }
                  if (
                    t.reason === o("WAWebGroupType").ADD_REASON.INVITE &&
                    o(
                      "WAWebGroupGatingUtils",
                    ).isAnyoneCanLinkToGroupsM2Enabled()
                  ) {
                    var G = yield o(
                      "WAWebApiParticipantStore",
                    ).isCurrentUserGroupAdmin(s.chatId.toString());
                    if (G)
                      try {
                        var z = yield o(
                            "WAWebDBGroupsGroupMetadata",
                          ).getGroupMetadata(s.chatId),
                          j = yield o(
                            "WAWebGroupLinkJoinUtils",
                          ).maybeGenerateLinkJoinNotifications(s, z, V);
                        j.forEach(function (e) {
                          b.push(e);
                        });
                      } catch (e) {
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  var K = yield o(
                    "WAWebGroupSystemMsg",
                  ).genIntegrityDeleteParentNotificationMsgs(s, t);
                  (K.forEach(function (e) {
                    b.push(e);
                  }),
                    yield o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(s, t, l),
                    R(s, t));
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
                    R(s, t));
                else if (
                  t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE &&
                  t.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
                ) {
                  var Q = yield o(
                    "WAWebGroupSystemMsg",
                  ).generateDeleteParentNotificationMessages(s);
                  if (Q.length === 0) return !1;
                  (Q.forEach(function (e) {
                    b.push(e);
                  }),
                    yield o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(s, t, l),
                    R(s, t));
                } else {
                  var X = !1;
                  if (
                    t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                  ) {
                    var Y = yield o(
                      "WAWebShouldTriggerQueryGroupInfo",
                    ).shouldTriggerQueryGroupInfo({
                      groupWid: s.chatId,
                      action: t,
                      disableForCAGs: !0,
                    });
                    Y &&
                      ((X = !0),
                      o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                        id: s.chatId,
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                      }));
                  }
                  if (!X) {
                    var J = yield o(
                      "WAWebHandleGroupNotificationConst",
                    ).shouldSkipGenMsg(s, t);
                    if (
                      (yield o(
                        "WAWebUpdateDbForGroupActionApi",
                      ).updateDBForGroupAction(s, t, l),
                      R(s, t),
                      !J)
                    ) {
                      var Z = yield o(
                        "WAWebApiParticipantStore",
                      ).isCurrentUserGroupAdmin(s.chatId.toString());
                      if (
                        t.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                      ) {
                        var ee = yield v({
                          meta: s,
                          action: t,
                          actionShouldBeHiddenFromNonAdmins: !0,
                        });
                        if (
                          ee.length > 0 &&
                          (o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[system message] eligible participants = ",
                                " - REMOVE",
                              ])),
                            ee.length,
                          ),
                          b.push.apply(
                            b,
                            yield M({
                              action: babelHelpers.extends({}, t, {
                                participants: ee,
                              }),
                              dbIsStale: X,
                              isAdmin: Z,
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
                          var te =
                            o(
                              "WAWebBotUtils",
                            ).participantListIncludeOpenOrTeeGroupBotWid(ee);
                          (te.includeOpenMetabot || te.includeTeeMetabot) &&
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
                        var ne = yield o(
                          "WAWebGroupSystemMsg",
                        ).genCreatedSubgroupSuggestionNotificationMsg(s, t);
                        ne && b.push(ne);
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
                        var re =
                            t.actionType ===
                              o("WAWebGroupType").GROUP_ACTIONS.DEMOTE ||
                            t.actionType ===
                              o("WAWebGroupType").GROUP_ACTIONS
                                .LINKED_GROUP_DEMOTE,
                          oe = yield v({
                            meta: s,
                            action: t,
                            actionShouldBeHiddenFromNonAdmins: re,
                          });
                        oe.length > 0 &&
                          (o("WALogger").LOG(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "[system message] eligible participants = ",
                                " - actionType = ",
                                "",
                              ])),
                            oe.length,
                            t.actionType,
                          ),
                          b.push(
                            yield o(
                              "WAWebGroupSystemMsg",
                            ).genGroupNotificationMsg({
                              meta: babelHelpers.extends({}, s, { isAdmin: Z }),
                              action: babelHelpers.extends({}, t, {
                                participants: oe,
                              }),
                              dbIsStale: X,
                            }),
                          ));
                      } else if (
                        t.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS
                          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION
                      ) {
                        var ae = yield o(
                          "WAWebGroupSystemMsg",
                        ).genAllowNonAdminSubGroupCreationNotificationMsg(s, t);
                        ae && b.push(ae);
                      } else if (
                        t.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE
                      ) {
                        var ie = yield o(
                          "WAWebGroupSystemMsg",
                        ).genCommunityOwnerUpdateNotificationMsg(s, t);
                        ie && b.push(ie);
                      } else
                        (o("WALogger").LOG(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "[system message] another action => ",
                              "",
                            ])),
                          t.actionType,
                        ),
                          b.push(
                            yield o(
                              "WAWebGroupSystemMsg",
                            ).genGroupNotificationMsg({
                              meta: babelHelpers.extends({}, s, { isAdmin: Z }),
                              action: t,
                              dbIsStale: X,
                            }),
                          ));
                    }
                  }
                }
            }
            var le = y ? [] : b.filter(Boolean);
            return (
              yield A(le, l),
              t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE &&
                le.length > 0
            );
          } catch (e) {
            return (
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "handleGroupNotification: failed with ",
                    "",
                  ])),
                e,
              ),
              !1
            );
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t) {
            yield o("WAWebGetMessageCache")
              .getMessageCache()
              .addMessages(
                e.map(function (e) {
                  return { msg: e };
                }),
                !1,
              );
            return;
          }
          yield (y || (y = n("Promise"))).all(
            e.map(function (e) {
              return o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: e.from,
                newMsg: e,
                handleSingleMsgOrigin: "handleGroupNotification",
              });
            }),
          );
        })),
        F.apply(this, arguments)
      );
    }
    ((l.handleActions = T),
      (l.handleAction = x),
      (l.writeSystemNotifications = A));
  },
  98,
);
