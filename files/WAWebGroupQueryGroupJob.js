__d(
  "WAWebGroupQueryGroupJob",
  [
    "JSResourceForInteraction",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebApiChat",
    "WAWebApiParticipantStore",
    "WAWebBackendApi",
    "WAWebBackendErrors",
    "WAWebBotGroupBackendUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebDBCommunity",
    "WAWebDBGroupParticipant",
    "WAWebDBGroupParticipantHelpers",
    "WAWebDBGroupsGroupMetadata",
    "WAWebEnvironment",
    "WAWebGroupAgentDeletedChat",
    "WAWebGroupAgentPrivacyNotice",
    "WAWebGroupAgentRemovalSystemMsgs",
    "WAWebGroupsParticipantsApi",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingModelUtils",
    "WAWebMexFetchGroupInfoIncludBotsJob",
    "WAWebMexFetchGroupInfoJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaParticipant",
    "WAWebSetUsernameJob",
    "WAWebSyncGroupBotSupportFields",
    "WAWebUpdateDbForCommunityAction",
    "WAWebUserUtils",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "err",
    "getErrorSafe",
    "isStringNullOrEmpty",
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
      h = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormGating",
      ).__setRef("WAWebGroupQueryGroupJob"),
      y = 400,
      C = 403;
    async function b(t) {
      var n = o(
        "WAWebBotGroupGatingUtils",
      ).isOpenGroupBotParticipantAddEnabled();
      if (
        !n &&
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      )
        return {
          listsAgents: !1,
          response: await o("WAWebMexFetchGroupInfoJob").mexGetGroupInfo(
            babelHelpers.extends({}, t),
          ),
        };
      try {
        return {
          listsAgents: !0,
          response: await o(
            "WAWebMexFetchGroupInfoIncludBotsJob",
          ).mexGetGroupInfoIncludBots(babelHelpers.extends({}, t)),
        };
      } catch (r) {
        if (
          !n &&
          r instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
          (r.statusCode === y || r.statusCode === C)
        )
          return (
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "groupQueryJob: bot-inclusive query unavailable (",
                    "), retrying standard query",
                  ])),
                r.statusCode,
              )
              .sendLogs("group-info-bot-query-fallback"),
            {
              listsAgents: !1,
              response: await o("WAWebMexFetchGroupInfoJob").mexGetGroupInfo(
                babelHelpers.extends({}, t),
              ),
            }
          );
        throw r;
      }
    }
    function v(e, t, n) {
      var a = n === void 0 ? {} : n,
        i = a.preserveLocalMembership,
        l = i === void 0 ? !1 : i,
        _ = a.updateGroupStateOnError,
        f = _ === void 0 ? !0 : _;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryGroup",
          async function () {
            var n,
              a,
              i,
              _,
              g = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
            if ((g == null ? void 0 : g.terminated) === !0)
              return (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "groupQueryJob: group ",
                      " does not exist",
                    ])),
                  e,
                ),
                { status: "terminated_local" }
              );
            var h = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
              y = {
                groupId: e.toString(),
                includeMembershipForm: await R(e, g),
                queryContext: t,
              };
            if (
              (g == null ? void 0 : g.hasIncompleteParticipantInformation) ===
                !0 &&
              h
            )
              y.queryContext = "missing_participant_identification";
            else if (t === "enter_group_info") {
              var C = await o(
                "WAWebDBGroupParticipant",
              ).computeGroupParticipantsHash(e);
              C != null && (y.participantsPhash = C);
            }
            var v = Date.now(),
              E = null,
              k = !1;
            try {
              var I = await b(y);
              ((E = I.response), (k = I.listsAgents));
            } catch (t) {
              if (t instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                if ((f && (await L(e, t)), t.statusCode === 404))
                  return { status: "terminated" };
                if (t.statusCode === 403) return { status: "not_member" };
              }
              throw (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "groupQueryJob: rethrowing error for ",
                      "",
                    ])),
                  e,
                ),
                t
              );
            }
            var T = (n = E) == null ? void 0 : n.groupInfo;
            if (T == null)
              throw r("err")(
                "groupQueryJob: group " +
                  e.toString() +
                  " returned empty response",
              );
            T = await S(e, T, l);
            var D = ((a = E) == null ? void 0 : a.participantPhashMatch) === !0,
              x = T,
              $ = x.creatorPn,
              P = x.creatorUsername,
              N = x.descOwner,
              M = x.descOwnerUsername,
              w = x.owner,
              A = x.participants,
              F = x.subjectOwner,
              O = x.subjectOwnerPn,
              B = x.subjectOwnerUsername,
              W =
                (i = A.map(function (e) {
                  return {
                    id: o("WAWebWidFactory").asUserWidOrThrow(e.id),
                    lid: e.lid
                      ? o("WAWebWidFactory").asUserWidOrThrow(e.lid)
                      : null,
                    displayName: e.displayName,
                    phoneNumber: e.phoneNumber
                      ? o("WAWebWidFactory").asUserWidOrThrow(e.phoneNumber)
                      : null,
                  };
                })) != null
                  ? i
                  : [];
            (w &&
              $ &&
              W.push({
                id: o("WAWebWidFactory").asUserWidOrThrow(w),
                lid: o("WAWebWidFactory").asUserWidOrThrow(w),
                phoneNumber: o("WAWebWidFactory").asUserWidOrThrow($),
              }),
              F &&
                O &&
                W.push({
                  id: o("WAWebWidFactory").asUserWidOrThrow(F),
                  lid: o("WAWebWidFactory").asUserWidOrThrow(F),
                  phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(O),
                }));
            var q = [];
            (w &&
              P != null &&
              q.push({
                userId: o("WAWebWidFactory").asUserWidOrThrow(w),
                username: o("WAWebUsernameTypes").asUsername(P),
              }),
              F &&
                B != null &&
                q.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(F),
                  username: o("WAWebUsernameTypes").asUsername(B),
                }),
              N &&
                M != null &&
                q.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(N),
                  username: o("WAWebUsernameTypes").asUsername(M),
                }),
              A.forEach(function (e) {
                var t = e.id,
                  n = e.username;
                n != null &&
                  q.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(t),
                    username: o("WAWebUsernameTypes").asUsername(n),
                  });
              }));
            var U = !1;
            if (
              o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
              o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
            ) {
              var V = await o(
                "WAWebGroupAgentDeletedChat",
              ).isBotGroupStateChangeInDeletedGroupChat({
                chatId: e,
                currentIsOpenBotGroupState: T.isOpenBotGroup,
                currentIsTeeBotGroupState: T.isTeeBotGroup,
                prevIsOpenBotGroupState: g == null ? void 0 : g.isOpenBotGroup,
                prevIsTeeBotGroupState: g == null ? void 0 : g.isTeeBotGroup,
              });
              ((U = await o(
                "WAWebBotGroupBackendUtils",
              ).addGroupChangedToOpenBotGroupSystemMsgIfRequired({
                currentIsOpenBotGroupState: T.isOpenBotGroup,
                groupWid: e,
                prevIsOpenBotGroupState: g == null ? void 0 : g.isOpenBotGroup,
                skipSystemMsg: V,
              })),
                (U =
                  (await o(
                    "WAWebBotGroupBackendUtils",
                  ).addGroupChangedToTeeBotGroupSystemMsgIfRequired({
                    currentIsTeeBotGroupState: T.isTeeBotGroup,
                    groupWid: e,
                    prevIsTeeBotGroupState:
                      g == null ? void 0 : g.isTeeBotGroup,
                    skipSystemMsg: V,
                  })) || U));
            }
            var H =
                k && D !== !0
                  ? await o("WAWebSchemaParticipant")
                      .getParticipantTable()
                      .get(e.toString())
                  : null,
              G = await o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB([
                T,
              ]),
              z = G[0],
              j = await Promise.all([
                D === !0
                  ? o("WAWebDBGroupParticipant").getGroupParticipant({
                      groupWid: e,
                    })
                  : null,
                o("WAWebDBGroupsGroupMetadata").updateGroupMetadataTable({
                  groupInfos: [z],
                }),
                D !== !0 &&
                  o("WAWebGroupsParticipantsApi").updateParticipants({
                    group: T.id,
                    participants: A,
                    groupInfo: T,
                  }),
                o(
                  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
                ).createOrReplaceDisplayNamesAndLidPnMappings(W, !0),
                h &&
                  q.length > 0 &&
                  o("WAWebSetUsernameJob").setUsernamesJob(q),
              ]),
              K = j[0],
              Q = await o(
                "WAWebGroupAgentDeletedChat",
              ).getPrevParticipantIdsForMetadataAgentRows({
                chatId: e,
                currentParticipantIds: A.map(function (e) {
                  var t = e.id;
                  return t;
                }),
                prevParticipantIds: H == null ? void 0 : H.participants,
              });
            try {
              var X,
                Y = await o(
                  "WAWebGroupAgentRemovalSystemMsgs",
                ).genGroupAgentRemovalMsgsForMetadata({
                  currentParticipants: A,
                  groupWid: e,
                  isLidAddressingMode:
                    (X = g == null ? void 0 : g.isLidAddressingMode) != null
                      ? X
                      : T.isLidAddressingMode,
                  previousParticipantIds: Q != null ? Q : [],
                });
              await Promise.all(
                Y.map(function (t) {
                  return o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: e,
                    newMsg: t,
                    handleSingleMsgOrigin: "botGroup",
                  });
                }),
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "groupQueryJob: failed to insert actorless agent removal rows",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("group-query-agent-removal-rows-error");
            }
            return (
              (o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled()) &&
                ((U =
                  (await o(
                    "WAWebBotGroupBackendUtils",
                  ).addBotGroupChangedToE2EEFSystemMsgIfRequired({
                    currentIsOpenBotGroupState: T.isOpenBotGroup,
                    currentIsTeeBotGroupState: T.isTeeBotGroup,
                    groupWid: e,
                    prevIsOpenBotGroupState:
                      g == null ? void 0 : g.isOpenBotGroup,
                    prevIsTeeBotGroupState:
                      g == null ? void 0 : g.isTeeBotGroup,
                  })) || U),
                U &&
                  T.isOpenBotGroup != null &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateGroupMetadataModelForAiGroupState",
                    { group: T.id, isOpenBotGroup: T.isOpenBotGroup },
                  )),
              await o("WAWebGroupAgentPrivacyNotice")
                .insertGroupAgentPrivacyNoticeForMetadataIfRequired({
                  currentParticipantIds: A.map(function (e) {
                    var t = e.id;
                    return t;
                  }),
                  groupWid: e,
                  prevParticipantIds: Q,
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "groupQueryJob: failed to insert the group agent privacy notice",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("group-query-group-agent-privacy-notice-error");
                }),
              await o("WAWebBotGroupBackendUtils")
                .addE2EESystemMsgAfterLastAgentRemovedIfRequired({
                  currentParticipants: A,
                  groupWid: e,
                  prevParticipantIds: Q,
                  responseListsAgents: k,
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "groupQueryJob: failed to insert the agent removal notice",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("group-query-agent-removal-notice-error");
                }),
              K != null &&
                (T = babelHelpers.extends({}, T, {
                  participants: K.participants,
                })),
              o("WAWebSyncGroupBotSupportFields")
                .maybeLazySyncGroupBotSupportFields(
                  T.participants.map(function (e) {
                    var t = e.id;
                    return t;
                  }),
                  [],
                  { sourceGroupWid: T.id },
                )
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "groupQueryJob: failed to refresh group agent profiles",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("group-query-refresh-agent-profiles-error");
                }),
              o("WAWebApiParticipantStore").clearAdminshipCache(
                T.id.toString(),
              ),
              o(
                "WAWebLimitSharingModelUtils",
              ).genLimitSharingSystemMessageOnPersistedChat({
                chatWID: e,
                sharingLimited: z.limitSharingEnabled,
                acp2Enabled: z.acp2Enabled,
              }),
              o(
                "WAWebLimitSharingModelUtils",
              ).genAcp2SystemMessageOnPersistedChat({
                chatWID: e,
                enabled: z.acp2Enabled,
                snapshotRequestedAtMs: v,
              }),
              {
                status: "success",
                groupInfo: T,
                membershipForm: (_ = E) == null ? void 0 : _.membershipForm,
              }
            );
          },
          r("WAWebEnvironment").isWindows
            ? { priority: o("WAJobOrchestratorTypes").JobPriority.HIGH }
            : null,
        )
        .waitUntilCompleted();
    }
    async function S(e, t, n) {
      if (
        !n ||
        t.participants.some(function (e) {
          var t = e.id;
          return o("WAWebUserUtils").isMeAccount(t);
        })
      )
        return t;
      var r = await o("WAWebDBGroupParticipant").getGroupParticipant({
          groupWid: e,
        }),
        a =
          r == null
            ? void 0
            : r.participants.find(function (e) {
                var t = e.id;
                return o("WAWebUserUtils").isMeAccount(t);
              });
      return a == null
        ? t
        : babelHelpers.extends({}, t, {
            participants: [].concat(t.participants, [a]),
          });
    }
    async function R(e, t) {
      if (t == null || t.isParentGroup === !0 || t.defaultSubgroup === !0)
        return !1;
      try {
        var n,
          a,
          i = await o("WAWebSchemaParticipant")
            .getParticipantTable()
            .get(e.toString()),
          l = []
            .concat(
              (n = i == null ? void 0 : i.admins) != null ? n : [],
              (a = i == null ? void 0 : i.superAdmins) != null ? a : [],
            )
            .some(function (e) {
              return o("WAWebUserUtils").isMeAccount(
                o("WAWebWidFactory").createWid(e),
              );
            });
        if (!l) return !1;
        var s = await h.load(),
          u = s.isGroupMembershipFormSettingEnabled;
        return u();
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "groupQueryJob: membership form gate failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("gmf-group-info-include-gate-failed"),
          !1
        );
      }
    }
    async function L(e, t) {
      o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "queryGroupJob: group ",
            " returned error ",
            "",
          ])),
        e,
        t.statusCode,
      );
      var n = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
      if (n == null) {
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "queryGroupJob: group ",
              " does not exist locally",
            ])),
          e,
        );
        return;
      }
      e: {
        if (t.statusCode === 403) {
          var a =
              n != null &&
              (await o("WAWebDBCommunity").isLastJoinedSubgroup(n)),
            i = await o("WAWebSchemaParticipant")
              .getParticipantTable()
              .get(e.toString());
          if ((i == null ? void 0 : i.participants) != null) {
            var l = i.participants.find(function (e) {
              return o("WAWebUserUtils").isMeAccount(
                o("WAWebWidFactory").createWid(e),
              );
            });
            if (l != null) {
              var s = o("WAWebWidFactory").createUserWidOrThrow(l),
                u = o("WAWebLidMigrationUtils").toLid(s),
                c = !!(n != null && n.defaultSubgroup),
                d = c
                  ? o(
                      "WAWebDBGroupParticipantHelpers",
                    ).removeParticipantInfoCAG(
                      i,
                      [{ id: s, lid: u, isAdmin: !1, isSuperAdmin: !1 }],
                      Date.now(),
                      null,
                      null,
                    )
                  : o("WAWebDBGroupParticipantHelpers").removeParticipantInfo(
                      i,
                      [{ id: s, isAdmin: !1, isSuperAdmin: !1 }],
                      Date.now(),
                      null,
                      null,
                    );
              await o("WAWebSchemaParticipant")
                .getParticipantTable()
                .createOrReplace(d);
            }
          }
          if (
            n != null &&
            n.defaultSubgroup === !0 &&
            !r("isStringNullOrEmpty")(n.parentGroup)
          ) {
            var m = o("WAWebWidFactory").createWid(n.parentGroup),
              p = await o("WAWebSchemaParticipant")
                .getParticipantTable()
                .get(m.toString());
            if ((p == null ? void 0 : p.participants) != null) {
              var _ = p.participants.find(function (e) {
                return o("WAWebUserUtils").isMeAccount(
                  o("WAWebWidFactory").createWid(e),
                );
              });
              if (_ != null) {
                var h = o("WAWebWidFactory").createUserWidOrThrow(_),
                  y = o("WAWebLidMigrationUtils").toLid(h),
                  C = o(
                    "WAWebDBGroupParticipantHelpers",
                  ).removeParticipantInfoCAG(
                    p,
                    [{ id: h, lid: y, isAdmin: !1, isSuperAdmin: !1 }],
                    Date.now(),
                    null,
                    null,
                  );
                await o("WAWebSchemaParticipant")
                  .getParticipantTable()
                  .createOrReplace(C);
              }
            }
          }
          await Promise.all(
            await o(
              "WAWebUpdateDbForCommunityAction",
            ).databaseUpdatesForSelfRemovedFromGroup(
              e,
              n == null ? void 0 : n.parentGroup,
              a,
            ),
          );
          break e;
        }
        if (t.statusCode === 404) {
          await o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e, {
            terminated: !0,
          });
          break e;
        }
        throw t;
      }
    }
    ((l.fetchGroupInfoWithBotFallback = b),
      (l.queryGroupJob = v),
      (l.handleGroupInfoError = L));
  },
  98,
);
