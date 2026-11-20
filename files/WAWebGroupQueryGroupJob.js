__d(
  "WAWebGroupQueryGroupJob",
  [
    "JSResourceForInteraction",
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
    "WAWebUserUtils",
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
      h,
      y = r("JSResourceForInteraction")(
        "WAWebGroupMembershipFormGating",
      ).__setRef("WAWebGroupQueryGroupJob"),
      C = 400,
      b = 403;
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              (n.statusCode === C || n.statusCode === b)
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
        S.apply(this, arguments)
      );
    }
    function R(t, a, i) {
      var l = i === void 0 ? {} : i,
        p = l.preserveLocalMembership,
        _ = p === void 0 ? !1 : p,
        f = l.updateGroupStateOnError,
        g = f === void 0 ? !0 : f;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryGroup",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var i,
              l,
              p,
              f,
              y = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
            if ((y == null ? void 0 : y.terminated) === !0)
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
            var C = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
              b = {
                groupId: t.toString(),
                includeMembershipForm: yield k(t, y),
                queryContext: a,
              };
            if (
              (y == null ? void 0 : y.hasIncompleteParticipantInformation) ===
                !0 &&
              C
            )
              b.queryContext = "missing_participant_identification";
            else if (a === "enter_group_info") {
              var S = yield o(
                "WAWebDBGroupParticipant",
              ).computeGroupParticipantsHash(t);
              S != null && (b.participantsPhash = S);
            }
            var R = Date.now(),
              E = null,
              I = !1;
            try {
              var D = yield v(b);
              ((E = D.response), (I = D.listsAgents));
            } catch (e) {
              if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                if ((g && (yield T(t, e)), e.statusCode === 404))
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
            var x = (i = E) == null ? void 0 : i.groupInfo;
            if (x == null)
              throw r("err")(
                "groupQueryJob: group " +
                  t.toString() +
                  " returned empty response",
              );
            x = yield L(t, x, _);
            var $ = ((l = E) == null ? void 0 : l.participantPhashMatch) === !0,
              P = x,
              N = P.creatorPn,
              M = P.creatorUsername,
              w = P.descOwner,
              A = P.descOwnerUsername,
              F = P.owner,
              O = P.participants,
              B = P.subjectOwner,
              W = P.subjectOwnerPn,
              q = P.subjectOwnerUsername,
              U =
                (p = O.map(function (e) {
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
            (F &&
              N &&
              U.push({
                id: o("WAWebWidFactory").asUserWidOrThrow(F),
                lid: o("WAWebWidFactory").asUserWidOrThrow(F),
                phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(N),
              }),
              B &&
                W &&
                U.push({
                  id: o("WAWebWidFactory").asUserWidOrThrow(B),
                  lid: o("WAWebWidFactory").asUserWidOrThrow(B),
                  phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(W),
                }));
            var V = [];
            (F &&
              M != null &&
              V.push({
                userId: o("WAWebWidFactory").asUserWidOrThrow(F),
                username: o("WAWebUsernameTypes").asUsername(M),
              }),
              B &&
                q != null &&
                V.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(B),
                  username: o("WAWebUsernameTypes").asUsername(q),
                }),
              w &&
                A != null &&
                V.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(w),
                  username: o("WAWebUsernameTypes").asUsername(A),
                }),
              O.forEach(function (e) {
                var t = e.id,
                  n = e.username;
                n != null &&
                  V.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(t),
                    username: o("WAWebUsernameTypes").asUsername(n),
                  });
              }));
            var H = !1;
            if (
              o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
              o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
            ) {
              var G = yield o(
                "WAWebGroupAgentDeletedChat",
              ).isBotGroupStateChangeInDeletedGroupChat({
                chatId: t,
                currentIsOpenBotGroupState: x.isOpenBotGroup,
                currentIsTeeBotGroupState: x.isTeeBotGroup,
                prevIsOpenBotGroupState: y == null ? void 0 : y.isOpenBotGroup,
                prevIsTeeBotGroupState: y == null ? void 0 : y.isTeeBotGroup,
              });
              ((H = yield o(
                "WAWebBotGroupBackendUtils",
              ).addGroupChangedToOpenBotGroupSystemMsgIfRequired({
                currentIsOpenBotGroupState: x.isOpenBotGroup,
                groupWid: t,
                prevIsOpenBotGroupState: y == null ? void 0 : y.isOpenBotGroup,
                skipSystemMsg: G,
              })),
                (H =
                  (yield o(
                    "WAWebBotGroupBackendUtils",
                  ).addGroupChangedToTeeBotGroupSystemMsgIfRequired({
                    currentIsTeeBotGroupState: x.isTeeBotGroup,
                    groupWid: t,
                    prevIsTeeBotGroupState:
                      y == null ? void 0 : y.isTeeBotGroup,
                    skipSystemMsg: G,
                  })) || H));
            }
            var z =
                I && $ !== !0
                  ? yield o("WAWebSchemaParticipant")
                      .getParticipantTable()
                      .get(t.toString())
                  : null,
              j = yield o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB([
                x,
              ]),
              K = j[0],
              Q = yield (h || (h = n("Promise"))).all([
                $ === !0
                  ? o("WAWebDBGroupParticipant").getGroupParticipant({
                      groupWid: t,
                    })
                  : null,
                o("WAWebDBGroupsGroupMetadata").updateGroupMetadataTable({
                  groupInfos: [K],
                }),
                $ !== !0 &&
                  o("WAWebGroupsParticipantsApi").updateParticipants({
                    group: x.id,
                    participants: O,
                    groupInfo: x,
                  }),
                o(
                  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
                ).createOrReplaceDisplayNamesAndLidPnMappings(U, !0),
                C &&
                  V.length > 0 &&
                  o("WAWebSetUsernameJob").setUsernamesJob(V),
              ]),
              X = Q[0],
              Y = yield o(
                "WAWebGroupAgentDeletedChat",
              ).getPrevParticipantIdsForMetadataAgentRows({
                chatId: t,
                currentParticipantIds: O.map(function (e) {
                  var t = e.id;
                  return t;
                }),
                prevParticipantIds: z == null ? void 0 : z.participants,
              });
            try {
              var J,
                Z = yield o(
                  "WAWebGroupAgentRemovalSystemMsgs",
                ).genGroupAgentRemovalMsgsForMetadata({
                  currentParticipants: O,
                  groupWid: t,
                  isLidAddressingMode:
                    (J = y == null ? void 0 : y.isLidAddressingMode) != null
                      ? J
                      : x.isLidAddressingMode,
                  previousParticipantIds: Y != null ? Y : [],
                });
              yield (h || (h = n("Promise"))).all(
                Z.map(function (e) {
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
                ((H =
                  (yield o(
                    "WAWebBotGroupBackendUtils",
                  ).addBotGroupChangedToE2EEFSystemMsgIfRequired({
                    currentIsOpenBotGroupState: x.isOpenBotGroup,
                    currentIsTeeBotGroupState: x.isTeeBotGroup,
                    groupWid: t,
                    prevIsOpenBotGroupState:
                      y == null ? void 0 : y.isOpenBotGroup,
                    prevIsTeeBotGroupState:
                      y == null ? void 0 : y.isTeeBotGroup,
                  })) || H),
                H &&
                  x.isOpenBotGroup != null &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateGroupMetadataModelForAiGroupState",
                    { group: x.id, isOpenBotGroup: x.isOpenBotGroup },
                  )),
              yield o("WAWebGroupAgentPrivacyNotice")
                .insertGroupAgentPrivacyNoticeForMetadataIfRequired({
                  currentParticipantIds: O.map(function (e) {
                    var t = e.id;
                    return t;
                  }),
                  groupWid: t,
                  prevParticipantIds: Y,
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
                  currentParticipants: O,
                  groupWid: t,
                  prevParticipantIds: Y,
                  responseListsAgents: I,
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
              X != null &&
                (x = babelHelpers.extends({}, x, {
                  participants: X.participants,
                })),
              o("WAWebSyncGroupBotSupportFields")
                .maybeLazySyncGroupBotSupportFields(
                  x.participants.map(function (e) {
                    var t = e.id;
                    return t;
                  }),
                  [],
                  { sourceGroupWid: x.id },
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
                x.id.toString(),
              ),
              o(
                "WAWebLimitSharingModelUtils",
              ).genLimitSharingSystemMessageOnPersistedChat({
                chatWID: t,
                sharingLimited: K.limitSharingEnabled,
                acp2Enabled: K.acp2Enabled,
              }),
              o(
                "WAWebLimitSharingModelUtils",
              ).genAcp2SystemMessageOnPersistedChat({
                chatWID: t,
                enabled: K.acp2Enabled,
                snapshotRequestedAtMs: R,
              }),
              {
                status: "success",
                groupInfo: x,
                membershipForm: (f = E) == null ? void 0 : f.membershipForm,
              }
            );
          }),
          r("WAWebEnvironment").isWindows
            ? { priority: o("WAJobOrchestratorTypes").JobPriority.HIGH }
            : null,
        )
        .waitUntilCompleted();
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            !n ||
            t.participants.some(function (e) {
              var t = e.id;
              return o("WAWebUserUtils").isMeAccount(t);
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
                    return o("WAWebUserUtils").isMeAccount(t);
                  });
          return a == null
            ? t
            : babelHelpers.extends({}, t, {
                participants: [].concat(t.participants, [a]),
              });
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t == null || t.isParentGroup === !0 || t.defaultSubgroup === !0)
            return !1;
          try {
            var n,
              a,
              i = yield o("WAWebSchemaParticipant")
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
            var s = yield y.load(),
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
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          var a = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
          if (a == null) {
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
              var i =
                  a != null &&
                  (yield o("WAWebDBCommunity").isLastJoinedSubgroup(a)),
                l = yield o("WAWebSchemaParticipant")
                  .getParticipantTable()
                  .get(e.toString());
              if ((l == null ? void 0 : l.participants) != null) {
                var s = l.participants.find(function (e) {
                  return o("WAWebUserUtils").isMeAccount(
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
                  _ = yield o("WAWebSchemaParticipant")
                    .getParticipantTable()
                    .get(p.toString());
                if ((_ == null ? void 0 : _.participants) != null) {
                  var y = _.participants.find(function (e) {
                    return o("WAWebUserUtils").isMeAccount(
                      o("WAWebWidFactory").createWid(e),
                    );
                  });
                  if (y != null) {
                    var C = o("WAWebWidFactory").createUserWidOrThrow(y),
                      b = o("WAWebLidMigrationUtils").toLid(C),
                      v = o("WAWebDBGroupParticipant").removeParticipantInfoCAG(
                        _,
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
              yield (h || (h = n("Promise"))).all(
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
        D.apply(this, arguments)
      );
    }
    ((l.fetchGroupInfoWithBotFallback = v),
      (l.queryGroupJob = R),
      (l.handleGroupInfoError = T));
  },
  98,
);
