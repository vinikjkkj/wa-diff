__d(
  "WAWebGroupQueryGroupJob",
  [
    "Promise",
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
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      h = 400,
      y = 403;
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebBotGroupGatingUtils",
          ).isOpenGroupBotParticipantAddEnabled();
          if (
            !t &&
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
          )
            return {
              listsAgents: !1,
              response: yield o("WAWebMexFetchGroupInfoJob").mexGetGroupInfo(
                babelHelpers.extends({}, e),
              ),
            };
          try {
            return {
              listsAgents: !0,
              response: yield o(
                "WAWebMexFetchGroupInfoIncludBotsJob",
              ).mexGetGroupInfoIncludBots(babelHelpers.extends({}, e)),
            };
          } catch (n) {
            if (
              !t &&
              n instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              (n.statusCode === h || n.statusCode === y)
            )
              return (
                o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "groupQueryJob: bot-inclusive query unavailable (",
                        "), retrying standard query",
                      ])),
                    n.statusCode,
                  )
                  .sendLogs("group-info-bot-query-fallback"),
                {
                  listsAgents: !1,
                  response: yield o(
                    "WAWebMexFetchGroupInfoJob",
                  ).mexGetGroupInfo(babelHelpers.extends({}, e)),
                }
              );
            throw n;
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(t, a, i) {
      var l = i === void 0 ? {} : i,
        p = l.preserveLocalMembership,
        _ = p === void 0 ? !1 : p,
        f = l.updateGroupStateOnError,
        h = f === void 0 ? !0 : f;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryGroup",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var i,
              l,
              p,
              f = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
            if ((f == null ? void 0 : f.terminated) === !0)
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "groupQueryJob: group ",
                      " does not exist",
                    ])),
                  t,
                ),
                { status: "terminated_local" }
              );
            var y = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
              b = { groupId: t.toString(), queryContext: a };
            if (
              (f == null ? void 0 : f.hasIncompleteParticipantInformation) ===
                !0 &&
              y
            )
              b.queryContext = "missing_participant_identification";
            else if (a === "enter_group_info") {
              var v = yield o(
                "WAWebDBGroupParticipant",
              ).computeGroupParticipantsHash(t);
              v != null && (b.participantsPhash = v);
            }
            var R = Date.now(),
              E = null,
              k = !1;
            try {
              var I = yield C(b);
              ((E = I.response), (k = I.listsAgents));
            } catch (e) {
              if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                if ((h && (yield L(t, e)), e.statusCode === 404))
                  return { status: "terminated" };
                if (e.statusCode === 403) return { status: "not_member" };
              }
              throw (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "groupQueryJob: rethrowing error for ",
                      "",
                    ])),
                  t,
                ),
                e
              );
            }
            var T = (i = E) == null ? void 0 : i.groupInfo;
            if (T == null)
              throw r("err")(
                "groupQueryJob: group " +
                  t.toString() +
                  " returned empty response",
              );
            T = yield S(t, T, _);
            var D = ((l = E) == null ? void 0 : l.participantPhashMatch) === !0,
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
                (p = A.map(function (e) {
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
                  ? p
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
              var V = yield o(
                "WAWebGroupAgentDeletedChat",
              ).isBotGroupStateChangeInDeletedGroupChat({
                chatId: t,
                currentIsOpenBotGroupState: T.isOpenBotGroup,
                currentIsTeeBotGroupState: T.isTeeBotGroup,
                prevIsOpenBotGroupState: f == null ? void 0 : f.isOpenBotGroup,
                prevIsTeeBotGroupState: f == null ? void 0 : f.isTeeBotGroup,
              });
              ((U = yield o(
                "WAWebBotGroupBackendUtils",
              ).addGroupChangedToOpenBotGroupSystemMsgIfRequired({
                currentIsOpenBotGroupState: T.isOpenBotGroup,
                groupWid: t,
                prevIsOpenBotGroupState: f == null ? void 0 : f.isOpenBotGroup,
                skipSystemMsg: V,
              })),
                (U =
                  (yield o(
                    "WAWebBotGroupBackendUtils",
                  ).addGroupChangedToTeeBotGroupSystemMsgIfRequired({
                    currentIsTeeBotGroupState: T.isTeeBotGroup,
                    groupWid: t,
                    prevIsTeeBotGroupState:
                      f == null ? void 0 : f.isTeeBotGroup,
                    skipSystemMsg: V,
                  })) || U));
            }
            var H =
                k && D !== !0
                  ? yield o("WAWebSchemaParticipant")
                      .getParticipantTable()
                      .get(t.toString())
                  : null,
              G = yield o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB([
                T,
              ]),
              z = G[0],
              j = yield (g || (g = n("Promise"))).all([
                D === !0
                  ? o("WAWebDBGroupParticipant").getGroupParticipant({
                      groupWid: t,
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
                y &&
                  q.length > 0 &&
                  o("WAWebSetUsernameJob").setUsernamesJob(q),
              ]),
              K = j[0],
              Q = yield o(
                "WAWebGroupAgentDeletedChat",
              ).getPrevParticipantIdsForMetadataAgentRows({
                chatId: t,
                currentParticipantIds: A.map(function (e) {
                  var t = e.id;
                  return t;
                }),
                prevParticipantIds: H == null ? void 0 : H.participants,
              });
            try {
              var X,
                Y = yield o(
                  "WAWebGroupAgentRemovalSystemMsgs",
                ).genGroupAgentRemovalMsgsForMetadata({
                  currentParticipants: A,
                  groupWid: t,
                  isLidAddressingMode:
                    (X = f == null ? void 0 : f.isLidAddressingMode) != null
                      ? X
                      : T.isLidAddressingMode,
                  previousParticipantIds: Q != null ? Q : [],
                });
              yield (g || (g = n("Promise"))).all(
                Y.map(function (e) {
                  return o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
                    chatId: t,
                    newMsg: e,
                    handleSingleMsgOrigin: "botGroup",
                  });
                }),
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
                  (yield o(
                    "WAWebBotGroupBackendUtils",
                  ).addBotGroupChangedToE2EEFSystemMsgIfRequired({
                    currentIsOpenBotGroupState: T.isOpenBotGroup,
                    currentIsTeeBotGroupState: T.isTeeBotGroup,
                    groupWid: t,
                    prevIsOpenBotGroupState:
                      f == null ? void 0 : f.isOpenBotGroup,
                    prevIsTeeBotGroupState:
                      f == null ? void 0 : f.isTeeBotGroup,
                  })) || U),
                U &&
                  T.isOpenBotGroup != null &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateGroupMetadataModelForAiGroupState",
                    { group: T.id, isOpenBotGroup: T.isOpenBotGroup },
                  )),
              yield o("WAWebGroupAgentPrivacyNotice")
                .insertGroupAgentPrivacyNoticeForMetadataIfRequired({
                  currentParticipantIds: A.map(function (e) {
                    var t = e.id;
                    return t;
                  }),
                  groupWid: t,
                  prevParticipantIds: Q,
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "groupQueryJob: failed to insert the group agent privacy notice",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("group-query-group-agent-privacy-notice-error");
                }),
              yield o("WAWebBotGroupBackendUtils")
                .addE2EESystemMsgAfterLastAgentRemovedIfRequired({
                  currentParticipants: A,
                  groupWid: t,
                  prevParticipantIds: Q,
                  responseListsAgents: k,
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
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
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
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
                chatWID: t,
                sharingLimited: z.limitSharingEnabled,
                acp2Enabled: z.acp2Enabled,
              }),
              o(
                "WAWebLimitSharingModelUtils",
              ).genAcp2SystemMessageOnPersistedChat({
                chatWID: t,
                enabled: z.acp2Enabled,
                snapshotRequestedAtMs: R,
              }),
              { status: "success", groupInfo: T }
            );
          }),
          r("WAWebEnvironment").isWindows
            ? { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH }
            : null,
        )
        .waitUntilCompleted();
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            !n ||
            t.participants.some(function (e) {
              var t = e.id;
              return o("WAWebUserPrefsMeUser").isMeAccount(t);
            })
          )
            return t;
          var r = yield o("WAWebDBGroupParticipant").getGroupParticipant({
              groupWid: e,
            }),
            a =
              r == null
                ? void 0
                : r.participants.find(function (e) {
                    var t = e.id;
                    return o("WAWebUserPrefsMeUser").isMeAccount(t);
                  });
          return a == null
            ? t
            : babelHelpers.extends({}, t, {
                participants: [].concat(t.participants, [a]),
              });
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "queryGroupJob: group ",
                " returned error ",
                "",
              ])),
            e,
            t.statusCode,
          );
          var a = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          if (a == null) {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "queryGroupJob: group ",
                  " does not exist locally",
                ])),
              e,
            );
            return;
          }
          e: {
            if (t.statusCode === 403) {
              var i =
                  a != null &&
                  (yield o("WAWebDBCommunity").isLastJoinedSubgroup(a)),
                l = yield o("WAWebSchemaParticipant")
                  .getParticipantTable()
                  .get(e.toString());
              if ((l == null ? void 0 : l.participants) != null) {
                var s = l.participants.find(function (e) {
                  return o("WAWebUserPrefsMeUser").isMeAccount(
                    o("WAWebWidFactory").createWid(e),
                  );
                });
                if (s != null) {
                  var u = o("WAWebWidFactory").createUserWidOrThrow(s),
                    c = o("WAWebLidMigrationUtils").toLid(u),
                    d = !!(a != null && a.defaultSubgroup),
                    m = d
                      ? o("WAWebDBGroupParticipant").removeParticipantInfoCAG(
                          l,
                          [{ id: u, lid: c, isAdmin: !1, isSuperAdmin: !1 }],
                          Date.now(),
                          null,
                          null,
                        )
                      : o("WAWebDBGroupParticipant").removeParticipantInfo(
                          l,
                          [{ id: u, isAdmin: !1, isSuperAdmin: !1 }],
                          Date.now(),
                          null,
                          null,
                        );
                  yield o("WAWebSchemaParticipant")
                    .getParticipantTable()
                    .createOrReplace(m);
                }
              }
              if (
                a != null &&
                a.defaultSubgroup === !0 &&
                !r("isStringNullOrEmpty")(a.parentGroup)
              ) {
                var p = o("WAWebWidFactory").createWid(a.parentGroup),
                  h = yield o("WAWebSchemaParticipant")
                    .getParticipantTable()
                    .get(p.toString());
                if ((h == null ? void 0 : h.participants) != null) {
                  var y = h.participants.find(function (e) {
                    return o("WAWebUserPrefsMeUser").isMeAccount(
                      o("WAWebWidFactory").createWid(e),
                    );
                  });
                  if (y != null) {
                    var C = o("WAWebWidFactory").createUserWidOrThrow(y),
                      b = o("WAWebLidMigrationUtils").toLid(C),
                      v = o("WAWebDBGroupParticipant").removeParticipantInfoCAG(
                        h,
                        [{ id: C, lid: b, isAdmin: !1, isSuperAdmin: !1 }],
                        Date.now(),
                        null,
                        null,
                      );
                    yield o("WAWebSchemaParticipant")
                      .getParticipantTable()
                      .createOrReplace(v);
                  }
                }
              }
              yield (g || (g = n("Promise"))).all(
                yield o(
                  "WAWebUpdateDbForCommunityAction",
                ).databaseUpdatesForSelfRemovedFromGroup(
                  e,
                  a == null ? void 0 : a.parentGroup,
                  i,
                ),
              );
              break e;
            }
            if (t.statusCode === 404) {
              yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(e, {
                terminated: !0,
              });
              break e;
            }
            throw t;
          }
        })),
        E.apply(this, arguments)
      );
    }
    ((l.fetchGroupInfoWithBotFallback = C),
      (l.queryGroupJob = v),
      (l.handleGroupInfoError = L));
  },
  98,
);
