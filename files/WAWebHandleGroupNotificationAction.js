__d(
  "WAWebHandleGroupNotificationAction",
  [
    "Promise",
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebBackendApi",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGetMessageCache",
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
    var e, s, u, c, d, m, p, _, f, g;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (g || (g = n("Promise"))).all([
              o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e),
              o("WAWebSchemaChat").getChatTable().get(e.toString(), !1),
            ]),
            r = t[0],
            a = t[1];
          return !!r || (!!a && !!a.t);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebGroupHistoryParticipantJob",
          ).enrichGroupActionWithStoredHistoryState(e.chatId, t);
          return o("WAWebBackendApi").frontendSendAndReceive(
            "updateModelForGroupAction",
            { groupMeta: e, groupAction: n },
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r, o) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                v(e, r)));
          },
        )),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
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
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.action,
            i = t.isOffline,
            l = i === void 0 ? !1 : i,
            y = t.meta;
          if (a) {
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handle action ",
                    "",
                  ])),
                a.actionType,
              )
              .tags("groups");
            var b = [];
            try {
              if (
                (yield o(
                  "WAWebLidMappingUsernameLearnUtils",
                ).processParsedGroupNotificationForLidMappingAndUsernames({
                  notification: y,
                  flushImmediately: !l,
                }),
                a.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE &&
                  (yield o(
                    "WAWebMemberLabelGroupRemoveHandler",
                  ).handleMemberLabelUpdatesOnGroupParticipantRemoval(y, a)),
                a.actionType ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .CREATE)
              ) {
                var S = babelHelpers.extends({}, a.groupInfo, {
                    id: y.chatId,
                    isLidAddressingMode: y.isLidAddressingMode,
                  }),
                  L = E(y, a, S),
                  k = yield h(S.id);
                if (
                  (o("WALogger")
                    .LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "group id ",
                          " exists in storage = ",
                          "",
                        ])),
                      S.id,
                      k,
                    )
                    .tags("groups"),
                  yield R(y, S, l, L, a.reason === "invite"),
                  o("WALogger")
                    .LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
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
                  var I = o(
                    "WAWebBotUtils",
                  ).participantListIncludeOpenOrTeeGroupBotWid(S.participants);
                  (I.includeOpenMetabot || I.includeTeeMetabot) &&
                    o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                      id: y.chatId,
                      actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                    });
                }
                var T = yield o("WAWebGroupSystemMsg").genMsgsForGroupCreation(
                  y,
                  S,
                  k,
                  L,
                );
                b.push.apply(b, T.filter(Boolean));
              } else if (
                a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD
              ) {
                if (!r("gkx")("26258")) {
                  var D,
                    x =
                      (D =
                        n("cr:4533") == null
                          ? void 0
                          : n("cr:4533").getDebugIgnoreParticipantAdd()) != null
                        ? D
                        : 0;
                  if (x > 0) {
                    n("cr:4533") == null ||
                      n("cr:4533").setDebugIgnoreParticipantAdd(x - 1);
                    return;
                  }
                }
                var $ = yield o(
                    "WAWebHandleGroupNotificationConst",
                  ).notAlreadyInGroup(y.chatId, a.participants),
                  P = yield o(
                    "WAWebShouldTriggerQueryGroupInfo",
                  ).shouldTriggerQueryGroupInfo({
                    groupWid: y.chatId,
                    action: a,
                  });
                if (
                  (P
                    ? yield o(
                        "WAWebGroupQueryJob",
                      ).queryAndUpdateGroupMetadataById({
                        id: y.chatId,
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                      })
                    : (yield o(
                        "WAWebUpdateDbForGroupActionApi",
                      ).updateDBForGroupAction(y, a, l),
                      v(y, a)),
                  $.length || a.reason)
                ) {
                  var N = yield C({
                    meta: y,
                    action: a,
                    actionShouldBeHiddenFromNonAdmins: !0,
                  });
                  if (N.length > 0) {
                    if (
                      (o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[system message] eligible participants = ",
                            " - ADD",
                          ])),
                        N.length,
                      ),
                      b.push(
                        yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                          meta: y,
                          action: babelHelpers.extends({}, a, {
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
                        ).genGroupTransitionToBotGroupNotificationMsg(y.chatId);
                        b.push(w);
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
                          y.chatId,
                        );
                        b.push(A);
                      }
                      !P &&
                        (M.includeOpenMetabot || M.includeTeeMetabot) &&
                        o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById(
                          {
                            id: y.chatId,
                            actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                          },
                        );
                    }
                    if (
                      a.reason === o("WAWebGroupType").ADD_REASON.INVITE &&
                      o(
                        "WAWebGroupGatingUtils",
                      ).isAnyoneCanLinkToGroupsM2Enabled()
                    ) {
                      var F = yield o(
                        "WAWebApiParticipantStore",
                      ).isCurrentUserGroupAdmin(y.chatId.toString());
                      if (F)
                        try {
                          var O = yield o(
                              "WAWebDBGroupsGroupMetadata",
                            ).getGroupMetadata(y.chatId),
                            B = yield o(
                              "WAWebGroupLinkJoinUtils",
                            ).maybeGenerateLinkJoinNotifications(y, O, N);
                          B.forEach(function (e) {
                            b.push(e);
                          });
                        } catch (e) {
                          o("WALogger").LOG(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
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
                  a.actionType ===
                    o("WAWebGroupType").GROUP_ACTIONS
                      .INTEGRITY_PARENT_GROUP_UNLINK ||
                  a.actionType ===
                    o("WAWebGroupType").GROUP_ACTIONS.INTEGRITY_SUB_GROUP_UNLINK
                )
              ) {
                if (
                  !(
                    a.actionType ===
                      o("WAWebGroupType").GROUP_ACTIONS
                        .DELETE_PARENT_GROUP_UNLINK ||
                    a.actionType ===
                      o("WAWebGroupType").GROUP_ACTIONS
                        .DELETE_PARENT_SUB_GROUP_UNLINK
                  )
                )
                  if (
                    a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE &&
                    a.reason ===
                      o("WAWebGroupType").DELETE_REASON.INTEGRITY_DELETE_PARENT
                  ) {
                    var W = yield o(
                      "WAWebGroupSystemMsg",
                    ).genIntegrityDeleteParentNotificationMsgs(y, a);
                    (W.forEach(function (e) {
                      b.push(e);
                    }),
                      yield o(
                        "WAWebUpdateDbForGroupActionApi",
                      ).updateDBForGroupAction(y, a, l),
                      v(y, a));
                  } else if (
                    a.actionType ===
                      o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD ||
                    a.actionType ===
                      o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE
                  )
                    (b.push(
                      yield o(
                        "WAWebGroupSystemMsg",
                      ).genDescriptionNotificationMsg(y, a),
                    ),
                      yield o(
                        "WAWebUpdateDbForGroupActionApi",
                      ).updateDBForGroupAction(y, a, l),
                      v(y, a));
                  else if (
                    a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE &&
                    a.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
                  ) {
                    var q = yield o(
                      "WAWebGroupSystemMsg",
                    ).generateDeleteParentNotificationMessages(y);
                    if (q.length === 0) return;
                    (q.forEach(function (e) {
                      b.push(e);
                    }),
                      yield o(
                        "WAWebUpdateDbForGroupActionApi",
                      ).updateDBForGroupAction(y, a, l),
                      v(y, a));
                  } else {
                    var U = !1;
                    if (
                      a.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                    ) {
                      var V = yield o(
                        "WAWebShouldTriggerQueryGroupInfo",
                      ).shouldTriggerQueryGroupInfo({
                        groupWid: y.chatId,
                        action: a,
                        disableForCAGs: !0,
                      });
                      V &&
                        ((U = !0),
                        o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById(
                          {
                            id: y.chatId,
                            actionType:
                              o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                          },
                        ));
                    }
                    if (!U) {
                      var H = yield o(
                        "WAWebHandleGroupNotificationConst",
                      ).shouldSkipGenMsg(y, a);
                      if (
                        (yield o(
                          "WAWebUpdateDbForGroupActionApi",
                        ).updateDBForGroupAction(y, a, l),
                        v(y, a),
                        !H)
                      ) {
                        var G = yield o(
                          "WAWebApiParticipantStore",
                        ).isCurrentUserGroupAdmin(y.chatId.toString());
                        if (
                          a.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                        ) {
                          var z = yield C({
                            meta: y,
                            action: a,
                            actionShouldBeHiddenFromNonAdmins: !0,
                          });
                          if (
                            z.length > 0 &&
                            (o("WALogger").LOG(
                              m ||
                                (m = babelHelpers.taggedTemplateLiteralLoose([
                                  "[system message] eligible participants = ",
                                  " - REMOVE",
                                ])),
                              z.length,
                            ),
                            b.push(
                              yield o(
                                "WAWebGroupSystemMsg",
                              ).genGroupNotificationMsg({
                                meta: babelHelpers.extends({}, y, {
                                  isAdmin: G,
                                }),
                                action: babelHelpers.extends({}, a, {
                                  participants: z,
                                }),
                                dbIsStale: U,
                              }),
                            ),
                            o(
                              "WAWebBotGroupGatingUtils",
                            ).isOpenGroupBotParticipantAddEnabled() ||
                              o(
                                "WAWebBotGroupGatingUtils",
                              ).isTEEGroupBotParticipantAddEnabled())
                          ) {
                            var j =
                              o(
                                "WAWebBotUtils",
                              ).participantListIncludeOpenOrTeeGroupBotWid(z);
                            (j.includeOpenMetabot || j.includeTeeMetabot) &&
                              o(
                                "WAWebGroupQueryJob",
                              ).queryAndUpdateGroupMetadataById({
                                id: y.chatId,
                                actionType:
                                  o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                              });
                          }
                        } else if (
                          a.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS
                            .CREATED_SUBGROUP_SUGGESTION
                        ) {
                          var K = yield o(
                            "WAWebGroupSystemMsg",
                          ).genCreatedSubgroupSuggestionNotificationMsg(y, a);
                          K && b.push(K);
                        } else if (
                          a.actionType ===
                            o("WAWebGroupType").GROUP_ACTIONS.PROMOTE ||
                          a.actionType ===
                            o("WAWebGroupType").GROUP_ACTIONS.DEMOTE ||
                          a.actionType ===
                            o("WAWebGroupType").GROUP_ACTIONS.MODIFY ||
                          a.actionType ===
                            o("WAWebGroupType").GROUP_ACTIONS
                              .LINKED_GROUP_PROMOTE ||
                          a.actionType ===
                            o("WAWebGroupType").GROUP_ACTIONS
                              .LINKED_GROUP_DEMOTE
                        ) {
                          var Q =
                              a.actionType ===
                                o("WAWebGroupType").GROUP_ACTIONS.DEMOTE ||
                              a.actionType ===
                                o("WAWebGroupType").GROUP_ACTIONS
                                  .LINKED_GROUP_DEMOTE,
                            X = yield C({
                              meta: y,
                              action: a,
                              actionShouldBeHiddenFromNonAdmins: Q,
                            });
                          X.length > 0 &&
                            (o("WALogger").LOG(
                              p ||
                                (p = babelHelpers.taggedTemplateLiteralLoose([
                                  "[system message] eligible participants = ",
                                  " - actionType = ",
                                  "",
                                ])),
                              X.length,
                              a.actionType,
                            ),
                            b.push(
                              yield o(
                                "WAWebGroupSystemMsg",
                              ).genGroupNotificationMsg({
                                meta: babelHelpers.extends({}, y, {
                                  isAdmin: G,
                                }),
                                action: babelHelpers.extends({}, a, {
                                  participants: X,
                                }),
                                dbIsStale: U,
                              }),
                            ));
                        } else if (
                          a.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS
                            .ALLOW_NON_ADMIN_SUB_GROUP_CREATION
                        ) {
                          var Y = yield o(
                            "WAWebGroupSystemMsg",
                          ).genAllowNonAdminSubGroupCreationNotificationMsg(
                            y,
                            a,
                          );
                          Y && b.push(Y);
                        } else if (
                          a.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS
                            .COMMUNITY_OWNER_UPDATE
                        ) {
                          var J = yield o(
                            "WAWebGroupSystemMsg",
                          ).genCommunityOwnerUpdateNotificationMsg(y, a);
                          J && b.push(J);
                        } else
                          (o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[system message] another action => ",
                                "",
                              ])),
                            a.actionType,
                          ),
                            b.push(
                              yield o(
                                "WAWebGroupSystemMsg",
                              ).genGroupNotificationMsg({
                                meta: babelHelpers.extends({}, y, {
                                  isAdmin: G,
                                }),
                                action: a,
                                dbIsStale: U,
                              }),
                            ));
                      }
                    }
                  }
              }
              var Z = b.filter(Boolean);
              l
                ? o("WAWebGetMessageCache")
                    .getMessageCache()
                    .addMessages(
                      Z.map(function (e) {
                        return { msg: e };
                      }),
                      !1,
                    )
                : yield (g || (g = n("Promise"))).all(
                    Z.map(function (e) {
                      return o(
                        "WAWebHandleSingleMsgWorkerCompatible",
                      ).handleSingleMsg({
                        chatId: e.from,
                        newMsg: e,
                        handleSingleMsgOrigin: "handleGroupNotification",
                      });
                    }),
                  );
            } catch (e) {
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "handleGroupNotification: failed with ",
                    "",
                  ])),
                e,
              );
            }
          }
        })),
        I.apply(this, arguments)
      );
    }
    l.handleAction = k;
  },
  98,
);
