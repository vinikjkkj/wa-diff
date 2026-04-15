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
      return o("WAWebBackendApi").frontendSendAndReceive(
        "updateModelForGroupAction",
        { groupMeta: e, groupAction: t },
      );
    }
    function S(e, t, n, r, o) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            (n === void 0 && (n = !1),
              a === void 0 && (a = !1),
              yield o("WAWebHandleGroupCreation").handleGroupCreation(
                e,
                t,
                n,
                a,
              ),
              r != null &&
                (yield o(
                  "WAWebUpdateDbForGroupActionApi",
                ).updateDBForGroupAction(e, r, n),
                v(e, r)));
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      var r =
        n.defaultSubgroup === !0 || n.isLidAddressingMode === !0
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
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
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          if ((i === void 0 && (i = !1), !!a)) {
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
            var l = [];
            try {
              if (
                (yield o(
                  "WAWebLidMappingUsernameLearnUtils",
                ).processParsedGroupNotificationForLidMappingAndUsernames({
                  notification: t,
                  flushImmediately: !i,
                }),
                a.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE &&
                  (yield o(
                    "WAWebMemberLabelGroupRemoveHandler",
                  ).handleMemberLabelUpdatesOnGroupParticipantRemoval(t, a)),
                a.actionType ===
                  o("WAWebHandleGroupNotificationConst").GROUP_NOTIFICATION_TAG
                    .CREATE)
              ) {
                var y = babelHelpers.extends({}, a.groupInfo, {
                    id: t.chatId,
                    isLidAddressingMode: t.isLidAddressingMode,
                  }),
                  b = L(t, a, y),
                  R = yield h(y.id);
                (o("WALogger")
                  .LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "group id ",
                        " exists in storage = ",
                        "",
                      ])),
                    y.id,
                    R,
                  )
                  .tags("groups"),
                  yield S(t, y, i, b, a.reason === "invite"),
                  o("WALogger")
                    .LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "handleGroupCreation done for group id ",
                          "",
                        ])),
                      y.id,
                    )
                    .tags("groups"));
                var E = yield o("WAWebGroupSystemMsg").genMsgsForGroupCreation(
                  t,
                  y,
                  R,
                  b,
                );
                l.push.apply(l, E.filter(Boolean));
              } else if (
                a.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD
              ) {
                if (!r("gkx")("26258")) {
                  var k,
                    I =
                      (k =
                        n("cr:4533") == null
                          ? void 0
                          : n("cr:4533").getDebugIgnoreParticipantAdd()) != null
                        ? k
                        : 0;
                  if (I > 0) {
                    n("cr:4533") == null ||
                      n("cr:4533").setDebugIgnoreParticipantAdd(I - 1);
                    return;
                  }
                }
                var T = yield o(
                    "WAWebHandleGroupNotificationConst",
                  ).notAlreadyInGroup(t.chatId, a.participants),
                  D = yield o(
                    "WAWebShouldTriggerQueryGroupInfo",
                  ).shouldTriggerQueryGroupInfo({
                    groupWid: t.chatId,
                    action: a,
                  });
                if (
                  (D
                    ? yield o(
                        "WAWebGroupQueryJob",
                      ).queryAndUpdateGroupMetadataById({
                        id: t.chatId,
                        actionType: o("WAWebGroupType").GROUP_ACTIONS.ADD,
                      })
                    : (yield o(
                        "WAWebUpdateDbForGroupActionApi",
                      ).updateDBForGroupAction(t, a, i),
                      v(t, a)),
                  T.length || a.reason)
                ) {
                  var x = yield C({
                    meta: t,
                    action: a,
                    actionShouldBeHiddenFromNonAdmins: !0,
                  });
                  if (x.length > 0) {
                    if (
                      (o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[system message] eligible participants = ",
                            " - ADD",
                          ])),
                        x.length,
                      ),
                      l.push(
                        yield o("WAWebGroupSystemMsg").genGroupNotificationMsg({
                          meta: t,
                          action: babelHelpers.extends({}, a, {
                            participants: x,
                          }),
                          dbIsStale: !1,
                        }),
                      ),
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isOpenGroupBotParticipantAddEnabled() &&
                        o(
                          "WAWebBotUtils",
                        ).participantListIncludOpenOrTeeGroupBotWid(x)
                          .includeOpenMetabot)
                    ) {
                      var $ = yield o(
                        "WAWebGroupSystemMsg",
                      ).genGroupTransitionToBotGroupNotificationMsg(t.chatId);
                      l.push($);
                    }
                    if (
                      o(
                        "WAWebBotGroupGatingUtils",
                      ).isTEEGroupBotParticipantAddEnabled() &&
                      o(
                        "WAWebBotUtils",
                      ).participantListIncludOpenOrTeeGroupBotWid(x)
                        .includeTeeMetabot
                    ) {
                      var P = yield o(
                        "WAWebGroupSystemMsg",
                      ).genGroupTransitionToTeeBotGroupNotificationMsg(
                        t.chatId,
                      );
                      l.push(P);
                    }
                    if (
                      a.reason === o("WAWebGroupType").ADD_REASON.INVITE &&
                      o(
                        "WAWebGroupGatingUtils",
                      ).isAnyoneCanLinkToGroupsM2Enabled()
                    ) {
                      var N = yield o(
                        "WAWebApiParticipantStore",
                      ).isCurrentUserGroupAdmin(t.chatId.toString());
                      if (N)
                        try {
                          var M = yield o(
                              "WAWebDBGroupsGroupMetadata",
                            ).getGroupMetadata(t.chatId),
                            w = yield o(
                              "WAWebGroupLinkJoinUtils",
                            ).maybeGenerateLinkJoinNotifications(t, M, x);
                          w.forEach(function (e) {
                            l.push(e);
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
                    var A = yield o(
                      "WAWebGroupSystemMsg",
                    ).genIntegrityDeleteParentNotificationMsgs(t, a);
                    (A.forEach(function (e) {
                      l.push(e);
                    }),
                      yield o(
                        "WAWebUpdateDbForGroupActionApi",
                      ).updateDBForGroupAction(t, a, i),
                      v(t, a));
                  } else if (
                    a.actionType ===
                      o("WAWebGroupType").GROUP_ACTIONS.DESC_ADD ||
                    a.actionType ===
                      o("WAWebGroupType").GROUP_ACTIONS.DESC_REMOVE
                  )
                    (l.push(
                      yield o(
                        "WAWebGroupSystemMsg",
                      ).genDescriptionNotificationMsg(t, a),
                    ),
                      yield o(
                        "WAWebUpdateDbForGroupActionApi",
                      ).updateDBForGroupAction(t, a, i),
                      v(t, a));
                  else if (
                    a.actionType === o("WAWebGroupType").GROUP_ACTIONS.DELETE &&
                    a.reason === o("WAWebGroupType").DELETE_REASON.DELETE_PARENT
                  ) {
                    var F = yield o(
                      "WAWebGroupSystemMsg",
                    ).generateDeleteParentNotificationMessages(t);
                    if (F.length === 0) return;
                    (F.forEach(function (e) {
                      l.push(e);
                    }),
                      yield o(
                        "WAWebUpdateDbForGroupActionApi",
                      ).updateDBForGroupAction(t, a, i),
                      v(t, a));
                  } else {
                    var O = !1;
                    if (
                      a.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                    ) {
                      var B = yield o(
                        "WAWebShouldTriggerQueryGroupInfo",
                      ).shouldTriggerQueryGroupInfo({
                        groupWid: t.chatId,
                        action: a,
                        disableForCAGs: !0,
                      });
                      B &&
                        ((O = !0),
                        o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById(
                          {
                            id: t.chatId,
                            actionType:
                              o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                          },
                        ));
                    }
                    if (!O) {
                      var W = yield o(
                        "WAWebHandleGroupNotificationConst",
                      ).shouldSkipGenMsg(t, a);
                      if (
                        (yield o(
                          "WAWebUpdateDbForGroupActionApi",
                        ).updateDBForGroupAction(t, a, i),
                        v(t, a),
                        !W)
                      ) {
                        var q = yield o(
                          "WAWebApiParticipantStore",
                        ).isCurrentUserGroupAdmin(t.chatId.toString());
                        if (
                          a.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS.REMOVE
                        ) {
                          var U = yield C({
                            meta: t,
                            action: a,
                            actionShouldBeHiddenFromNonAdmins: !0,
                          });
                          if (
                            U.length > 0 &&
                            (o("WALogger").LOG(
                              m ||
                                (m = babelHelpers.taggedTemplateLiteralLoose([
                                  "[system message] eligible participants = ",
                                  " - REMOVE",
                                ])),
                              U.length,
                            ),
                            l.push(
                              yield o(
                                "WAWebGroupSystemMsg",
                              ).genGroupNotificationMsg({
                                meta: babelHelpers.extends({}, t, {
                                  isAdmin: q,
                                }),
                                action: babelHelpers.extends({}, a, {
                                  participants: U,
                                }),
                                dbIsStale: O,
                              }),
                            ),
                            o(
                              "WAWebBotGroupGatingUtils",
                            ).isOpenGroupBotParticipantAddEnabled() ||
                              o(
                                "WAWebBotGroupGatingUtils",
                              ).isTEEGroupBotParticipantAddEnabled())
                          ) {
                            var V =
                              o(
                                "WAWebBotUtils",
                              ).participantListIncludOpenOrTeeGroupBotWid(U);
                            (V.includeOpenMetabot || V.includeTeeMetabot) &&
                              o(
                                "WAWebGroupQueryJob",
                              ).queryAndUpdateGroupMetadataById({
                                id: t.chatId,
                                actionType:
                                  o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                              });
                          }
                        } else if (
                          a.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS
                            .CREATED_SUBGROUP_SUGGESTION
                        ) {
                          var H = yield o(
                            "WAWebGroupSystemMsg",
                          ).genCreatedSubgroupSuggestionNotificationMsg(t, a);
                          H && l.push(H);
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
                          var G =
                              a.actionType ===
                                o("WAWebGroupType").GROUP_ACTIONS.DEMOTE ||
                              a.actionType ===
                                o("WAWebGroupType").GROUP_ACTIONS
                                  .LINKED_GROUP_DEMOTE,
                            z = yield C({
                              meta: t,
                              action: a,
                              actionShouldBeHiddenFromNonAdmins: G,
                            });
                          z.length > 0 &&
                            (o("WALogger").LOG(
                              p ||
                                (p = babelHelpers.taggedTemplateLiteralLoose([
                                  "[system message] eligible participants = ",
                                  " - actionType = ",
                                  "",
                                ])),
                              z.length,
                              a.actionType,
                            ),
                            l.push(
                              yield o(
                                "WAWebGroupSystemMsg",
                              ).genGroupNotificationMsg({
                                meta: babelHelpers.extends({}, t, {
                                  isAdmin: q,
                                }),
                                action: babelHelpers.extends({}, a, {
                                  participants: z,
                                }),
                                dbIsStale: O,
                              }),
                            ));
                        } else if (
                          a.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS
                            .ALLOW_NON_ADMIN_SUB_GROUP_CREATION
                        ) {
                          var j = yield o(
                            "WAWebGroupSystemMsg",
                          ).genAllowNonAdminSubGroupCreationNotificationMsg(
                            t,
                            a,
                          );
                          j && l.push(j);
                        } else if (
                          a.actionType ===
                          o("WAWebGroupType").GROUP_ACTIONS
                            .COMMUNITY_OWNER_UPDATE
                        ) {
                          var K = yield o(
                            "WAWebGroupSystemMsg",
                          ).genCommunityOwnerUpdateNotificationMsg(t, a);
                          K && l.push(K);
                        } else
                          (o("WALogger").LOG(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[system message] another action => ",
                                "",
                              ])),
                            a.actionType,
                          ),
                            l.push(
                              yield o(
                                "WAWebGroupSystemMsg",
                              ).genGroupNotificationMsg({
                                meta: babelHelpers.extends({}, t, {
                                  isAdmin: q,
                                }),
                                action: a,
                                dbIsStale: O,
                              }),
                            ));
                      }
                    }
                  }
              }
              var Q = l.filter(Boolean);
              i
                ? o("WAWebGetMessageCache")
                    .getMessageCache()
                    .addMessages(
                      Q.map(function (e) {
                        return { msg: e };
                      }),
                      !1,
                    )
                : yield (g || (g = n("Promise"))).all(
                    Q.map(function (e) {
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
        k.apply(this, arguments)
      );
    }
    l.handleAction = E;
  },
  98,
);
