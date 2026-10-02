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
    function E(e, t, n, r, o) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            (n === void 0 && (n = !1),
              a === void 0 && (a = !1),
              yield o("WAWebHandleGroupCreation").handleGroupCreation({
                groupInfo: t,
                isJoinViaInviteLink: a,
                isOffline: n,
                meta: e,
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
            l = null;
          try {
            l = yield o(
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
          var u = yield (y || (y = n("Promise"))).all(
            i.actions.map(function (e) {
              return x({ action: e, isOffline: a, meta: i });
            }),
          );
          if (!(!u.includes(!0) || l == null))
            try {
              yield P([l], a);
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
            a = e.isOffline,
            i = a === void 0 ? !1 : a,
            l = e.meta;
          if (!t) return !1;
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
          var s = [];
          try {
            if (
              (yield o(
                "WAWebLidMappingUsernameLearnUtils",
              ).processParsedGroupNotificationForLidMappingAndUsernames({
                notification: l,
                flushImmediately: !i,
              }),
              t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE &&
                (yield o(
                  "WAWebMemberLabelGroupRemoveHandler",
                ).handleMemberLabelUpdatesOnGroupParticipantRemoval(l, t)),
              t.actionType ===
                o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                  .CREATE)
            ) {
              var y = babelHelpers.extends({}, t.groupInfo, {
                  id: l.chatId,
                  isLidAddressingMode: l.isLidAddressingMode,
                }),
                b = I(l, t, y),
                S = yield C(y.id);
              if (
                (o("WALogger")
                  .LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "group id ",
                        " exists in storage = ",
                        "",
                      ])),
                    y.id,
                    S,
                  )
                  .tags("groups"),
                yield E(l, y, i, b, t.reason === "invite"),
                o("WALogger")
                  .LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "handleGroupCreation done for group id ",
                        "",
                      ])),
                    y.id,
                  )
                  .tags("groups"),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() ||
                  o(
                    "WAWebBotGroupGatingUtils",
                  ).isTEEGroupBotParticipantAddEnabled())
              ) {
                var L = o(
                  "WAWebBotUtils",
                ).participantListIncludeOpenOrTeeGroupBotWid(y.participants);
                (L.includeOpenMetabot || L.includeTeeMetabot) &&
                  o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                    id: l.chatId,
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                  });
              }
              var k = yield o("WAWebGroupSystemMsg").genMsgsForGroupCreation(
                l,
                y,
                S,
                b,
              );
              s.push.apply(s, k.filter(Boolean));
            } else if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
              if (!r("gkx")("26258")) {
                var T,
                  D =
                    (T =
                      n("cr:4533") == null
                        ? void 0
                        : n("cr:4533").getDebugIgnoreParticipantAdd()) != null
                      ? T
                      : 0;
                if (D > 0)
                  return (
                    n("cr:4533") == null ||
                      n("cr:4533").setDebugIgnoreParticipantAdd(D - 1),
                    !1
                  );
              }
              var x = yield o(
                  "WAWebHandleGroupNotificationConst",
                ).notAlreadyInGroup(l.chatId, t.participants),
                $ = yield o(
                  "WAWebShouldTriggerQueryGroupInfo",
                ).shouldTriggerQueryGroupInfo({
                  groupWid: l.chatId,
                  action: t,
                });
              if (
                ($
                  ? yield o(
                      "WAWebGroupQueryJob",
                    ).queryAndUpdateGroupMetadataById({
                      id: l.chatId,
                      actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                    })
                  : (yield o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(l, t, i),
                    R(l, t)),
                x.length || t.reason)
              ) {
                var N = yield v({
                  meta: l,
                  action: t,
                  actionShouldBeHiddenFromNonAdmins: !0,
                });
                if (N.length > 0) {
                  if (
                    (o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[system message] eligible participants = ",
                          " - ADD",
                        ])),
                      N.length,
                    ),
                    s.push(
                      yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                        meta: l,
                        action: babelHelpers.extends({}, t, {
                          participants: N,
                        }),
                        dbIsStale: !1,
                      }),
                    ),
                    o(
                      "WAWebBotGroupGatingUtils",
                    ).isOpenGroupBotParticipantAddEnabled() ||
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isTEEGroupBotParticipantAddEnabled())
                  ) {
                    var M =
                      o(
                        "WAWebBotUtils",
                      ).participantListIncludeOpenOrTeeGroupBotWid(N);
                    if (
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isOpenGroupBotParticipantAddEnabled() &&
                      M.includeOpenMetabot
                    ) {
                      var w = yield o(
                        "WAWebGroupSystemMsg",
                      ).genGroupTransitionToBotGroupNotificationMsg(l.chatId);
                      s.push(w);
                    }
                    if (
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isTEEGroupBotParticipantAddEnabled() &&
                      M.includeTeeMetabot
                    ) {
                      var A = yield o(
                        "WAWebGroupSystemMsg",
                      ).genGroupTransitionToTeeBotGroupNotificationMsg(
                        l.chatId,
                      );
                      s.push(A);
                    }
                    !$ &&
                      (M.includeOpenMetabot || M.includeTeeMetabot) &&
                      o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                        id: l.chatId,
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                      });
                  }
                  if (
                    t.reason === o("WAWebGroupType").ADD_REASON.INVITE &&
                    o(
                      "WAWebGroupGatingUtils",
                    ).isAnyoneCanLinkToGroupsM2Enabled()
                  ) {
                    var F = yield o(
                      "WAWebApiParticipantStore",
                    ).isCurrentUserGroupAdmin(l.chatId.toString());
                    if (F)
                      try {
                        var O = yield o(
                            "WAWebDBGroupsGroupMetadata",
                          ).getGroupMetadata(l.chatId),
                          B = yield o(
                            "WAWebGroupLinkJoinUtils",
                          ).maybeGenerateLinkJoinNotifications(l, O, N);
                        B.forEach(function (e) {
                          s.push(e);
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
                  var W = yield o(
                    "WAWebGroupSystemMsg",
                  ).genIntegrityDeleteParentNotificationMsgs(l, t);
                  (W.forEach(function (e) {
                    s.push(e);
                  }),
                    yield o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(l, t, i),
                    R(l, t));
                } else if (
                  t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD ||
                  t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE
                )
                  (s.push(
                    yield o(
                      "WAWebGroupSystemMsg",
                    ).genDescriptionNotificationMsg(l, t),
                  ),
                    yield o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(l, t, i),
                    R(l, t));
                else if (
                  t.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE &&
                  t.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
                ) {
                  var q = yield o(
                    "WAWebGroupSystemMsg",
                  ).generateDeleteParentNotificationMessages(l);
                  if (q.length === 0) return !1;
                  (q.forEach(function (e) {
                    s.push(e);
                  }),
                    yield o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(l, t, i),
                    R(l, t));
                } else {
                  var U = !1;
                  if (
                    t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                  ) {
                    var V = yield o(
                      "WAWebShouldTriggerQueryGroupInfo",
                    ).shouldTriggerQueryGroupInfo({
                      groupWid: l.chatId,
                      action: t,
                      disableForCAGs: !0,
                    });
                    V &&
                      ((U = !0),
                      o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                        id: l.chatId,
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                      }));
                  }
                  if (!U) {
                    var H = yield o(
                      "WAWebHandleGroupNotificationConst",
                    ).shouldSkipGenMsg(l, t);
                    if (
                      (yield o(
                        "WAWebUpdateDbForGroupActionApi",
                      ).updateDBForGroupAction(l, t, i),
                      R(l, t),
                      !H)
                    ) {
                      var G = yield o(
                        "WAWebApiParticipantStore",
                      ).isCurrentUserGroupAdmin(l.chatId.toString());
                      if (
                        t.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                      ) {
                        var z = yield v({
                          meta: l,
                          action: t,
                          actionShouldBeHiddenFromNonAdmins: !0,
                        });
                        if (z.length > 0) {
                          o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[system message] eligible participants = ",
                                " - REMOVE",
                              ])),
                            z.length,
                          );
                          var j = babelHelpers.extends({}, t, {
                              participants: z,
                            }),
                            K = yield o(
                              "WAWebGroupAgentRemovalSystemMsgs",
                            ).genGroupAgentRemovalMsgs({
                              meta: l,
                              action: j,
                              dbIsStale: U,
                              isAdmin: G,
                            });
                          if (
                            (s.push.apply(
                              s,
                              K != null
                                ? K
                                : [
                                    yield o(
                                      "WAWebGroupSystemMsg",
                                    ).genGroupNotificationMsg({
                                      meta: babelHelpers.extends({}, l, {
                                        isAdmin: G,
                                      }),
                                      action: j,
                                      dbIsStale: U,
                                    }),
                                  ],
                            ),
                            o(
                              "WAWebBotGroupGatingUtils",
                            ).isOpenGroupBotParticipantAddEnabled() ||
                              o(
                                "WAWebBotGroupGatingUtils",
                              ).isTEEGroupBotParticipantAddEnabled())
                          ) {
                            var Q =
                              o(
                                "WAWebBotUtils",
                              ).participantListIncludeOpenOrTeeGroupBotWid(z);
                            (Q.includeOpenMetabot || Q.includeTeeMetabot) &&
                              o(
                                "WAWebGroupQueryJob",
                              ).queryAndUpdateGroupMetadataById({
                                id: l.chatId,
                                actionType:
                                  o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                              });
                          }
                        }
                      } else if (
                        t.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS
                          .CREATED_SUBGROUP_SUGGESTION
                      ) {
                        var X = yield o(
                          "WAWebGroupSystemMsg",
                        ).genCreatedSubgroupSuggestionNotificationMsg(l, t);
                        X && s.push(X);
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
                        var Y =
                            t.actionType ===
                              o("WAWebGroupType").GROUP_ACTIONS.DEMOTE ||
                            t.actionType ===
                              o("WAWebGroupType").GROUP_ACTIONS
                                .LINKED_GROUP_DEMOTE,
                          J = yield v({
                            meta: l,
                            action: t,
                            actionShouldBeHiddenFromNonAdmins: Y,
                          });
                        J.length > 0 &&
                          (o("WALogger").LOG(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "[system message] eligible participants = ",
                                " - actionType = ",
                                "",
                              ])),
                            J.length,
                            t.actionType,
                          ),
                          s.push(
                            yield o(
                              "WAWebGroupSystemMsg",
                            ).genGroupNotificationMsg({
                              meta: babelHelpers.extends({}, l, { isAdmin: G }),
                              action: babelHelpers.extends({}, t, {
                                participants: J,
                              }),
                              dbIsStale: U,
                            }),
                          ));
                      } else if (
                        t.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS
                          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION
                      ) {
                        var Z = yield o(
                          "WAWebGroupSystemMsg",
                        ).genAllowNonAdminSubGroupCreationNotificationMsg(l, t);
                        Z && s.push(Z);
                      } else if (
                        t.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE
                      ) {
                        var ee = yield o(
                          "WAWebGroupSystemMsg",
                        ).genCommunityOwnerUpdateNotificationMsg(l, t);
                        ee && s.push(ee);
                      } else
                        (o("WALogger").LOG(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "[system message] another action => ",
                              "",
                            ])),
                          t.actionType,
                        ),
                          s.push(
                            yield o(
                              "WAWebGroupSystemMsg",
                            ).genGroupNotificationMsg({
                              meta: babelHelpers.extends({}, l, { isAdmin: G }),
                              action: t,
                              dbIsStale: U,
                            }),
                          ));
                    }
                  }
                }
            }
            var te = s.filter(Boolean);
            return (
              yield P(te, i),
              t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE &&
                te.length > 0
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
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        N.apply(this, arguments)
      );
    }
    ((l.handleActions = T),
      (l.handleAction = x),
      (l.writeSystemNotifications = P));
  },
  98,
);
