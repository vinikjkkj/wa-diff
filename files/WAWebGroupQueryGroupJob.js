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
      g = 400,
      h = 403;
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              (n.statusCode === g || n.statusCode === h)
            )
              return (
                o("WALogger")
                  .LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
        C.apply(this, arguments)
      );
    }
    function b(t, a, i) {
      var l = i === void 0 ? {} : i,
        m = l.preserveLocalMembership,
        p = m === void 0 ? !1 : m,
        _ = l.updateGroupStateOnError,
        g = _ === void 0 ? !0 : _;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryGroup",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var i,
              l,
              m,
              _ = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
            if ((_ == null ? void 0 : _.terminated) === !0)
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
            var h = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
              C = { groupId: t.toString(), queryContext: a };
            if (
              (_ == null ? void 0 : _.hasIncompleteParticipantInformation) ===
                !0 &&
              h
            )
              C.queryContext = "missing_participant_identification";
            else if (a === "enter_group_info") {
              var b = yield o(
                "WAWebDBGroupParticipant",
              ).computeGroupParticipantsHash(t);
              b != null && (C.participantsPhash = b);
            }
            var S = Date.now(),
              L = null,
              E = !1;
            try {
              var k = yield y(C);
              ((L = k.response), (E = k.listsAgents));
            } catch (e) {
              if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                if ((g && (yield R(t, e)), e.statusCode === 404))
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
            var I = (i = L) == null ? void 0 : i.groupInfo;
            if (I == null)
              throw r("err")(
                "groupQueryJob: group " +
                  t.toString() +
                  " returned empty response",
              );
            I = yield v(t, I, p);
            var T = ((l = L) == null ? void 0 : l.participantPhashMatch) === !0,
              D = I,
              x = D.creatorPn,
              $ = D.creatorUsername,
              P = D.descOwner,
              N = D.descOwnerUsername,
              M = D.owner,
              w = D.participants,
              A = D.subjectOwner,
              F = D.subjectOwnerPn,
              O = D.subjectOwnerUsername,
              B =
                (m = w.map(function (e) {
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
                  ? m
                  : [];
            (M &&
              x &&
              B.push({
                id: o("WAWebWidFactory").asUserWidOrThrow(M),
                lid: o("WAWebWidFactory").asUserWidOrThrow(M),
                phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(x),
              }),
              A &&
                F &&
                B.push({
                  id: o("WAWebWidFactory").asUserWidOrThrow(A),
                  lid: o("WAWebWidFactory").asUserWidOrThrow(A),
                  phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(F),
                }));
            var W = [];
            (M &&
              $ != null &&
              W.push({
                userId: o("WAWebWidFactory").asUserWidOrThrow(M),
                username: o("WAWebUsernameTypes").asUsername($),
              }),
              A &&
                O != null &&
                W.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(A),
                  username: o("WAWebUsernameTypes").asUsername(O),
                }),
              P &&
                N != null &&
                W.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(P),
                  username: o("WAWebUsernameTypes").asUsername(N),
                }),
              w.forEach(function (e) {
                var t = e.id,
                  n = e.username;
                n != null &&
                  W.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(t),
                    username: o("WAWebUsernameTypes").asUsername(n),
                  });
              }));
            var q = !1;
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) &&
              ((q = yield o(
                "WAWebBotGroupBackendUtils",
              ).addGroupChangedToOpenBotGroupSystemMsgIfRequired({
                currentIsOpenBotGroupState: I.isOpenBotGroup,
                groupWid: t,
                prevIsOpenBotGroupState: _ == null ? void 0 : _.isOpenBotGroup,
              })),
              (q =
                (yield o(
                  "WAWebBotGroupBackendUtils",
                ).addGroupChangedToTeeBotGroupSystemMsgIfRequired({
                  currentIsTeeBotGroupState: I.isTeeBotGroup,
                  groupWid: t,
                  prevIsTeeBotGroupState: _ == null ? void 0 : _.isTeeBotGroup,
                })) || q));
            var U =
                E && T !== !0
                  ? yield o("WAWebSchemaParticipant")
                      .getParticipantTable()
                      .get(t.toString())
                  : null,
              V = yield o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB([
                I,
              ]),
              H = V[0],
              G = yield (f || (f = n("Promise"))).all([
                T === !0
                  ? o("WAWebDBGroupParticipant").getGroupParticipant({
                      groupWid: t,
                    })
                  : null,
                o("WAWebDBGroupsGroupMetadata").updateGroupMetadataTable({
                  groupInfos: [H],
                }),
                T !== !0 &&
                  o("WAWebGroupsParticipantsApi").updateParticipants({
                    group: I.id,
                    participants: w,
                    groupInfo: I,
                  }),
                o(
                  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
                ).createOrReplaceDisplayNamesAndLidPnMappings(B, !0),
                h &&
                  W.length > 0 &&
                  o("WAWebSetUsernameJob").setUsernamesJob(W),
              ]),
              z = G[0];
            try {
              var j,
                K,
                Q = yield o(
                  "WAWebGroupAgentRemovalSystemMsgs",
                ).genGroupAgentRemovalMsgsForMetadata({
                  currentParticipants: w,
                  groupWid: t,
                  isLidAddressingMode:
                    (j = _ == null ? void 0 : _.isLidAddressingMode) != null
                      ? j
                      : I.isLidAddressingMode,
                  previousParticipantIds:
                    (K = U == null ? void 0 : U.participants) != null ? K : [],
                });
              yield (f || (f = n("Promise"))).all(
                Q.map(function (e) {
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
                ((q =
                  (yield o(
                    "WAWebBotGroupBackendUtils",
                  ).addBotGroupChangedToE2EEFSystemMsgIfRequired({
                    currentIsOpenBotGroupState: I.isOpenBotGroup,
                    currentIsTeeBotGroupState: I.isTeeBotGroup,
                    groupWid: t,
                    prevIsOpenBotGroupState:
                      _ == null ? void 0 : _.isOpenBotGroup,
                    prevIsTeeBotGroupState:
                      _ == null ? void 0 : _.isTeeBotGroup,
                  })) || q),
                q &&
                  I.isOpenBotGroup != null &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateGroupMetadataModelForAiGroupState",
                    { group: I.id, isOpenBotGroup: I.isOpenBotGroup },
                  )),
              yield o("WAWebBotGroupBackendUtils")
                .addE2EESystemMsgAfterLastAgentRemovedIfRequired({
                  currentParticipants: w,
                  groupWid: t,
                  prevParticipantIds: U == null ? void 0 : U.participants,
                  responseListsAgents: E,
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "groupQueryJob: failed to insert the agent removal notice",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("group-query-agent-removal-notice-error");
                }),
              z != null &&
                (I = babelHelpers.extends({}, I, {
                  participants: z.participants,
                })),
              o("WAWebSyncGroupBotSupportFields")
                .maybeLazySyncGroupBotSupportFields(
                  I.participants.map(function (e) {
                    var t = e.id;
                    return t;
                  }),
                  [],
                  { sourceGroupWid: I.id },
                )
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "groupQueryJob: failed to refresh group agent profiles",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("group-query-refresh-agent-profiles-error");
                }),
              o("WAWebApiParticipantStore").clearAdminshipCache(
                I.id.toString(),
              ),
              o(
                "WAWebLimitSharingModelUtils",
              ).genLimitSharingSystemMessageOnPersistedChat({
                chatWID: t,
                sharingLimited: H.limitSharingEnabled,
                acp2Enabled: H.acp2Enabled,
              }),
              o(
                "WAWebLimitSharingModelUtils",
              ).genAcp2SystemMessageOnPersistedChat({
                chatWID: t,
                enabled: H.acp2Enabled,
                snapshotRequestedAtMs: S,
              }),
              { status: "success", groupInfo: I }
            );
          }),
          r("WAWebEnvironment").isWindows
            ? { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH }
            : null,
        )
        .waitUntilCompleted();
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                var g = o("WAWebWidFactory").createWid(a.parentGroup),
                  h = yield o("WAWebSchemaParticipant")
                    .getParticipantTable()
                    .get(g.toString());
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
              yield (f || (f = n("Promise"))).all(
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
        L.apply(this, arguments)
      );
    }
    ((l.fetchGroupInfoWithBotFallback = y),
      (l.queryGroupJob = b),
      (l.handleGroupInfoError = R));
  },
  98,
);
