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
              var y,
                b,
                S = babelHelpers.extends({}, t.groupInfo, {
                  id: l.chatId,
                  isLidAddressingMode: l.isLidAddressingMode,
                }),
                L = I(l, t, S),
                k = yield C(S.id),
                T = L == null || (t.isNewGroup === !0 && !k),
                D = T
                  ? (y =
                      (b = yield o(
                        "WAWebGroupsParticipantsApi",
                      ).getParticipants(l.chatId)) == null
                        ? void 0
                        : b.participants) != null
                    ? y
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
                  S.id,
                  k,
                )
                .tags("groups");
              var x = yield o(
                "WAWebGroupAgentPrivacyNotice",
              ).genGroupAgentNoticeMsgsForCreate({
                meta: l,
                participants: S.participants,
              });
              if (
                (yield E(l, S, i, L, t.reason === "invite", x.length > 0),
                o("WALogger")
                  .LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "handleGroupCreation done for group id ",
                        "",
                      ])),
                    S.id,
                  )
                  .tags("groups"),
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() ||
                  o(
                    "WAWebBotGroupGatingUtils",
                  ).isTEEGroupBotParticipantAddEnabled())
              ) {
                var $ = o(
                  "WAWebBotUtils",
                ).participantListIncludeOpenOrTeeGroupBotWid(S.participants);
                ($.includeOpenMetabot || $.includeTeeMetabot) &&
                  o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                    id: l.chatId,
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                  });
              }
              var N = yield o("WAWebGroupSystemMsg").genMsgsForGroupCreation(
                  l,
                  S,
                  k,
                  L,
                ),
                M = T
                  ? yield o(
                      "WAWebGroupAgentAddSystemMsgs",
                    ).genGroupCreateAgentAddMsgs({
                      meta: l,
                      participants: S.participants,
                      prevParticipantIds: D,
                      reason: t.reason,
                    })
                  : [];
              s.push.apply(
                s,
                (k
                  ? [].concat(N.filter(Boolean), x)
                  : [].concat(x, N.filter(Boolean))
                ).concat(M),
              );
            } else if (t.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
              if (!r("gkx")("26258")) {
                var w,
                  A =
                    (w =
                      n("cr:4533") == null
                        ? void 0
                        : n("cr:4533").getDebugIgnoreParticipantAdd()) != null
                      ? w
                      : 0;
                if (A > 0)
                  return (
                    n("cr:4533") == null ||
                      n("cr:4533").setDebugIgnoreParticipantAdd(A - 1),
                    !1
                  );
              }
              var F = yield o(
                  "WAWebHandleGroupNotificationConst",
                ).notAlreadyInGroup(l.chatId, t.participants),
                O = yield o(
                  "WAWebShouldTriggerQueryGroupInfo",
                ).shouldTriggerQueryGroupInfo({
                  groupWid: l.chatId,
                  action: t,
                });
              if (
                (O
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
                F.length || t.reason)
              ) {
                var B = yield v({
                  meta: l,
                  action: t,
                  actionShouldBeHiddenFromNonAdmins: !0,
                });
                if (B.length > 0) {
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[system message] eligible participants = ",
                        " - ADD",
                      ])),
                    B.length,
                  );
                  var W = O
                      ? []
                      : yield o(
                          "WAWebGroupAgentPrivacyNotice",
                        ).genGroupAgentPrivacyNoticeMsgsForAdd({
                          chatId: l.chatId,
                          addedParticipantIds: B.filter(function (e) {
                            var t = e.id;
                            return F.some(function (e) {
                              return e.id.equals(t);
                            });
                          }).map(function (e) {
                            var t = e.id;
                            return t;
                          }),
                          meta: l,
                        }),
                    q = yield o(
                      "WAWebGroupAgentAddSystemMsgs",
                    ).genGroupAddNotificationMsgs({
                      meta: l,
                      action: babelHelpers.extends({}, t, { participants: B }),
                      dbIsStale: !1,
                    });
                  if (
                    (s.push.apply(
                      s,
                      o(
                        "WAWebGroupAgentPrivacyNotice",
                      ).orderGroupAgentNoticesAndRows(
                        [].concat(
                          W,
                          yield o(
                            "WAWebGroupAgentPrivacyNotice",
                          ).genMetaAiGroupNoticeMsgsForAdd({
                            addedParticipants: B,
                            meta: l,
                          }),
                        ),
                        q,
                      ),
                    ),
                    o(
                      "WAWebBotGroupGatingUtils",
                    ).isOpenGroupBotParticipantAddEnabled() ||
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isTEEGroupBotParticipantAddEnabled())
                  ) {
                    var U =
                      o(
                        "WAWebBotUtils",
                      ).participantListIncludeOpenOrTeeGroupBotWid(B);
                    !O &&
                      (U.includeOpenMetabot || U.includeTeeMetabot) &&
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
                    var V = yield o(
                      "WAWebApiParticipantStore",
                    ).isCurrentUserGroupAdmin(l.chatId.toString());
                    if (V)
                      try {
                        var H = yield o(
                            "WAWebDBGroupsGroupMetadata",
                          ).getGroupMetadata(l.chatId),
                          G = yield o(
                            "WAWebGroupLinkJoinUtils",
                          ).maybeGenerateLinkJoinNotifications(l, H, B);
                        G.forEach(function (e) {
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
                  var z = yield o(
                    "WAWebGroupSystemMsg",
                  ).genIntegrityDeleteParentNotificationMsgs(l, t);
                  (z.forEach(function (e) {
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
                  var j = yield o(
                    "WAWebGroupSystemMsg",
                  ).generateDeleteParentNotificationMessages(l);
                  if (j.length === 0) return !1;
                  (j.forEach(function (e) {
                    s.push(e);
                  }),
                    yield o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(l, t, i),
                    R(l, t));
                } else {
                  var K = !1;
                  if (
                    t.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                  ) {
                    var Q = yield o(
                      "WAWebShouldTriggerQueryGroupInfo",
                    ).shouldTriggerQueryGroupInfo({
                      groupWid: l.chatId,
                      action: t,
                      disableForCAGs: !0,
                    });
                    Q &&
                      ((K = !0),
                      o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                        id: l.chatId,
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                      }));
                  }
                  if (!K) {
                    var X = yield o(
                      "WAWebHandleGroupNotificationConst",
                    ).shouldSkipGenMsg(l, t);
                    if (
                      (yield o(
                        "WAWebUpdateDbForGroupActionApi",
                      ).updateDBForGroupAction(l, t, i),
                      R(l, t),
                      !X)
                    ) {
                      var Y = yield o(
                        "WAWebApiParticipantStore",
                      ).isCurrentUserGroupAdmin(l.chatId.toString());
                      if (
                        t.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                      ) {
                        var J = yield v({
                          meta: l,
                          action: t,
                          actionShouldBeHiddenFromNonAdmins: !0,
                        });
                        if (J.length > 0) {
                          o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[system message] eligible participants = ",
                                " - REMOVE",
                              ])),
                            J.length,
                          );
                          var Z = babelHelpers.extends({}, t, {
                              participants: J,
                            }),
                            ee = yield o(
                              "WAWebGroupAgentRemovalSystemMsgs",
                            ).genGroupAgentRemovalMsgs({
                              meta: l,
                              action: Z,
                              dbIsStale: K,
                              isAdmin: Y,
                            });
                          if (
                            (s.push.apply(
                              s,
                              ee != null
                                ? ee
                                : [
                                    yield o(
                                      "WAWebGroupSystemMsg",
                                    ).genGroupNotificationMsg({
                                      meta: babelHelpers.extends({}, l, {
                                        isAdmin: Y,
                                      }),
                                      action: Z,
                                      dbIsStale: K,
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
                            var te =
                              o(
                                "WAWebBotUtils",
                              ).participantListIncludeOpenOrTeeGroupBotWid(J);
                            (te.includeOpenMetabot || te.includeTeeMetabot) &&
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
                        var ne = yield o(
                          "WAWebGroupSystemMsg",
                        ).genCreatedSubgroupSuggestionNotificationMsg(l, t);
                        ne && s.push(ne);
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
                            meta: l,
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
                          s.push(
                            yield o(
                              "WAWebGroupSystemMsg",
                            ).genGroupNotificationMsg({
                              meta: babelHelpers.extends({}, l, { isAdmin: Y }),
                              action: babelHelpers.extends({}, t, {
                                participants: oe,
                              }),
                              dbIsStale: K,
                            }),
                          ));
                      } else if (
                        t.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS
                          .ALLOW_NON_ADMIN_SUB_GROUP_CREATION
                      ) {
                        var ae = yield o(
                          "WAWebGroupSystemMsg",
                        ).genAllowNonAdminSubGroupCreationNotificationMsg(l, t);
                        ae && s.push(ae);
                      } else if (
                        t.actionType ===
                        o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE
                      ) {
                        var ie = yield o(
                          "WAWebGroupSystemMsg",
                        ).genCommunityOwnerUpdateNotificationMsg(l, t);
                        ie && s.push(ie);
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
                              meta: babelHelpers.extends({}, l, { isAdmin: Y }),
                              action: t,
                              dbIsStale: K,
                            }),
                          ));
                    }
                  }
                }
            }
            var le = s.filter(Boolean);
            return (
              yield P(le, i),
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
