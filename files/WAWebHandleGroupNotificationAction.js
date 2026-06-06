__d(
  "WAWebHandleGroupNotificationAction",
  [
    "WALogger",
    "WAWebApiParticipantStore",
    "WAWebBackendApi",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGetMessageCache",
    "WAWebGroupGatingUtils",
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
    "cr:4533",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    async function g(e) {
      var t = await Promise.all([
          o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e),
          o("WAWebSchemaChat").getChatTable().get(e.toString(), !1),
        ]),
        n = t[0],
        r = t[1];
      return !!n || (!!r && !!r.t);
    }
    async function h(e) {
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
    function y(e, t) {
      return o("WAWebBackendApi").frontendSendAndReceive(
        "updateModelForGroupAction",
        { groupMeta: e, groupAction: t },
      );
    }
    async function C(e, t, n, r, a) {
      (n === void 0 && (n = !1),
        a === void 0 && (a = !1),
        await o("WAWebHandleGroupCreation").handleGroupCreation({
          groupInfo: t,
          isJoinViaInviteLink: a,
          isOffline: n,
          meta: e,
        }),
        r != null &&
          (await o("WAWebUpdateDbForGroupActionApi").updateDBForGroupAction(
            e,
            r,
            n,
          ),
          y(e, r)));
    }
    function b(e, t, n) {
      var r =
        n.defaultSubgroup === !0 || n.isLidAddressingMode === !0
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMeUser();
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
    async function v(t) {
      var a = t.action,
        i = t.isOffline,
        l = i === void 0 ? !1 : i,
        v = t.meta;
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
        var S = [];
        try {
          if (
            (await o(
              "WAWebLidMappingUsernameLearnUtils",
            ).processParsedGroupNotificationForLidMappingAndUsernames({
              notification: v,
              flushImmediately: !l,
            }),
            a.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE &&
              (await o(
                "WAWebMemberLabelGroupRemoveHandler",
              ).handleMemberLabelUpdatesOnGroupParticipantRemoval(v, a)),
            a.actionType ===
              o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                .CREATE)
          ) {
            var R = babelHelpers.extends({}, a.groupInfo, {
                id: v.chatId,
                isLidAddressingMode: v.isLidAddressingMode,
              }),
              L = b(v, a, R),
              E = await g(R.id);
            if (
              (o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "group id ",
                      " exists in storage = ",
                      "",
                    ])),
                  R.id,
                  E,
                )
                .tags("groups"),
              await C(v, R, l, L, a.reason === "invite"),
              o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "handleGroupCreation done for group id ",
                      "",
                    ])),
                  R.id,
                )
                .tags("groups"),
              o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled())
            ) {
              var k = o(
                "WAWebBotUtils",
              ).participantListIncludOpenOrTeeGroupBotWid(R.participants);
              (k.includeOpenMetabot || k.includeTeeMetabot) &&
                o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                  id: v.chatId,
                  actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                });
            }
            var I = await o("WAWebGroupSystemMsg").genMsgsForGroupCreation(
              v,
              R,
              E,
              L,
            );
            S.push.apply(S, I.filter(Boolean));
          } else if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD) {
            if (!r("gkx")("26258")) {
              var T,
                D =
                  (T =
                    n("cr:4533") == null
                      ? void 0
                      : n("cr:4533").getDebugIgnoreParticipantAdd()) != null
                    ? T
                    : 0;
              if (D > 0) {
                n("cr:4533") == null ||
                  n("cr:4533").setDebugIgnoreParticipantAdd(D - 1);
                return;
              }
            }
            var x = await o(
                "WAWebHandleGroupNotificationConst",
              ).notAlreadyInGroup(v.chatId, a.participants),
              $ = await o(
                "WAWebShouldTriggerQueryGroupInfo",
              ).shouldTriggerQueryGroupInfo({ groupWid: v.chatId, action: a });
            if (
              ($
                ? await o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById(
                    {
                      id: v.chatId,
                      actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                    },
                  )
                : (await o(
                    "WAWebUpdateDbForGroupActionApi",
                  ).updateDBForGroupAction(v, a, l),
                  y(v, a)),
              x.length || a.reason)
            ) {
              var P = await h({
                meta: v,
                action: a,
                actionShouldBeHiddenFromNonAdmins: !0,
              });
              if (P.length > 0) {
                if (
                  (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[system message] eligible participants = ",
                        " - ADD",
                      ])),
                    P.length,
                  ),
                  S.push(
                    await o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                      meta: v,
                      action: babelHelpers.extends({}, a, { participants: P }),
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
                  var N =
                    o(
                      "WAWebBotUtils",
                    ).participantListIncludOpenOrTeeGroupBotWid(P);
                  if (
                    o(
                      "WAWebBotGroupGatingUtils",
                    ).isOpenGroupBotParticipantAddEnabled() &&
                    N.includeOpenMetabot
                  ) {
                    var M = await o(
                      "WAWebGroupSystemMsg",
                    ).genGroupTransitionToBotGroupNotificationMsg(v.chatId);
                    S.push(M);
                  }
                  if (
                    o(
                      "WAWebBotGroupGatingUtils",
                    ).isTEEGroupBotParticipantAddEnabled() &&
                    N.includeTeeMetabot
                  ) {
                    var w = await o(
                      "WAWebGroupSystemMsg",
                    ).genGroupTransitionToTeeBotGroupNotificationMsg(v.chatId);
                    S.push(w);
                  }
                  !$ &&
                    (N.includeOpenMetabot || N.includeTeeMetabot) &&
                    o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                      id: v.chatId,
                      actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                    });
                }
                if (
                  a.reason === o("WAWebGroupType").ADD_REASON.INVITE &&
                  o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled()
                ) {
                  var A = await o(
                    "WAWebApiParticipantStore",
                  ).isCurrentUserGroupAdmin(v.chatId.toString());
                  if (A)
                    try {
                      var F = await o(
                          "WAWebDBGroupsGroupMetadata",
                        ).getGroupMetadata(v.chatId),
                        O = await o(
                          "WAWebGroupLinkJoinUtils",
                        ).maybeGenerateLinkJoinNotifications(v, F, P);
                      O.forEach(function (e) {
                        S.push(e);
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
                var B = await o(
                  "WAWebGroupSystemMsg",
                ).genIntegrityDeleteParentNotificationMsgs(v, a);
                (B.forEach(function (e) {
                  S.push(e);
                }),
                  await o(
                    "WAWebUpdateDbForGroupActionApi",
                  ).updateDBForGroupAction(v, a, l),
                  y(v, a));
              } else if (
                a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD ||
                a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE
              )
                (S.push(
                  await o("WAWebGroupSystemMsg").genDescriptionNotificationMsg(
                    v,
                    a,
                  ),
                ),
                  await o(
                    "WAWebUpdateDbForGroupActionApi",
                  ).updateDBForGroupAction(v, a, l),
                  y(v, a));
              else if (
                a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE &&
                a.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
              ) {
                var W = await o(
                  "WAWebGroupSystemMsg",
                ).generateDeleteParentNotificationMessages(v);
                if (W.length === 0) return;
                (W.forEach(function (e) {
                  S.push(e);
                }),
                  await o(
                    "WAWebUpdateDbForGroupActionApi",
                  ).updateDBForGroupAction(v, a, l),
                  y(v, a));
              } else {
                var q = !1;
                if (a.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE) {
                  var U = await o(
                    "WAWebShouldTriggerQueryGroupInfo",
                  ).shouldTriggerQueryGroupInfo({
                    groupWid: v.chatId,
                    action: a,
                    disableForCAGs: !0,
                  });
                  U &&
                    ((q = !0),
                    o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
                      id: v.chatId,
                      actionType: o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                    }));
                }
                if (!q) {
                  var V = await o(
                    "WAWebHandleGroupNotificationConst",
                  ).shouldSkipGenMsg(v, a);
                  if (
                    (await o(
                      "WAWebUpdateDbForGroupActionApi",
                    ).updateDBForGroupAction(v, a, l),
                    y(v, a),
                    !V)
                  ) {
                    var H = await o(
                      "WAWebApiParticipantStore",
                    ).isCurrentUserGroupAdmin(v.chatId.toString());
                    if (
                      a.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                    ) {
                      var G = await h({
                        meta: v,
                        action: a,
                        actionShouldBeHiddenFromNonAdmins: !0,
                      });
                      if (
                        G.length > 0 &&
                        (o("WALogger").LOG(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "[system message] eligible participants = ",
                              " - REMOVE",
                            ])),
                          G.length,
                        ),
                        S.push(
                          await o(
                            "WAWebGroupSystemMsg",
                          ).genGroupNotificationMsg({
                            meta: babelHelpers.extends({}, v, { isAdmin: H }),
                            action: babelHelpers.extends({}, a, {
                              participants: G,
                            }),
                            dbIsStale: q,
                          }),
                        ),
                        o(
                          "WAWebBotGroupGatingUtils",
                        ).isOpenGroupBotParticipantAddEnabled() ||
                          o(
                            "WAWebBotGroupGatingUtils",
                          ).isTEEGroupBotParticipantAddEnabled())
                      ) {
                        var z =
                          o(
                            "WAWebBotUtils",
                          ).participantListIncludOpenOrTeeGroupBotWid(G);
                        (z.includeOpenMetabot || z.includeTeeMetabot) &&
                          o(
                            "WAWebGroupQueryJob",
                          ).queryAndUpdateGroupMetadataById({
                            id: v.chatId,
                            actionType:
                              o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                          });
                      }
                    } else if (
                      a.actionType ===
                      o("WAWebGroupType").GROUP_ACTIONS
                        .CREATED_SUBGROUP_SUGGESTION
                    ) {
                      var j = await o(
                        "WAWebGroupSystemMsg",
                      ).genCreatedSubgroupSuggestionNotificationMsg(v, a);
                      j && S.push(j);
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
                        o("WAWebGroupType").GROUP_ACTIONS.LINKED_GROUP_DEMOTE
                    ) {
                      var K =
                          a.actionType ===
                            o("WAWebGroupType").GROUP_ACTIONS.DEMOTE ||
                          a.actionType ===
                            o("WAWebGroupType").GROUP_ACTIONS
                              .LINKED_GROUP_DEMOTE,
                        Q = await h({
                          meta: v,
                          action: a,
                          actionShouldBeHiddenFromNonAdmins: K,
                        });
                      Q.length > 0 &&
                        (o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[system message] eligible participants = ",
                              " - actionType = ",
                              "",
                            ])),
                          Q.length,
                          a.actionType,
                        ),
                        S.push(
                          await o(
                            "WAWebGroupSystemMsg",
                          ).genGroupNotificationMsg({
                            meta: babelHelpers.extends({}, v, { isAdmin: H }),
                            action: babelHelpers.extends({}, a, {
                              participants: Q,
                            }),
                            dbIsStale: q,
                          }),
                        ));
                    } else if (
                      a.actionType ===
                      o("WAWebGroupType").GROUP_ACTIONS
                        .ALLOW_NON_ADMIN_SUB_GROUP_CREATION
                    ) {
                      var X = await o(
                        "WAWebGroupSystemMsg",
                      ).genAllowNonAdminSubGroupCreationNotificationMsg(v, a);
                      X && S.push(X);
                    } else if (
                      a.actionType ===
                      o("WAWebGroupType").GROUP_ACTIONS.COMMUNITY_OWNER_UPDATE
                    ) {
                      var Y = await o(
                        "WAWebGroupSystemMsg",
                      ).genCommunityOwnerUpdateNotificationMsg(v, a);
                      Y && S.push(Y);
                    } else
                      (o("WALogger").LOG(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "[system message] another action => ",
                            "",
                          ])),
                        a.actionType,
                      ),
                        S.push(
                          await o(
                            "WAWebGroupSystemMsg",
                          ).genGroupNotificationMsg({
                            meta: babelHelpers.extends({}, v, { isAdmin: H }),
                            action: a,
                            dbIsStale: q,
                          }),
                        ));
                  }
                }
              }
          }
          var J = S.filter(Boolean);
          l
            ? o("WAWebGetMessageCache")
                .getMessageCache()
                .addMessages(
                  J.map(function (e) {
                    return { msg: e };
                  }),
                  !1,
                )
            : await Promise.all(
                J.map(function (e) {
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
    }
    l.handleAction = v;
  },
  98,
);
