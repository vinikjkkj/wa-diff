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
    "WAWebGroupsParticipantsApi",
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
      _ = 400,
      f = 403;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebBotGroupGatingUtils",
          ).isOpenGroupBotParticipantAddEnabled();
          if (
            !t &&
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
          )
            return o("WAWebMexFetchGroupInfoJob").mexGetGroupInfo(
              babelHelpers.extends({}, e),
            );
          try {
            return yield o(
              "WAWebMexFetchGroupInfoIncludBotsJob",
            ).mexGetGroupInfoIncludBots(babelHelpers.extends({}, e));
          } catch (n) {
            if (
              !t &&
              n instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              (n.statusCode === _ || n.statusCode === f)
            )
              return (
                o("WALogger")
                  .LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "groupQueryJob: bot-inclusive query unavailable (",
                        "), retrying standard query",
                      ])),
                    n.statusCode,
                  )
                  .sendLogs("group-info-bot-query-fallback"),
                o("WAWebMexFetchGroupInfoJob").mexGetGroupInfo(
                  babelHelpers.extends({}, e),
                )
              );
            throw n;
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(t, a, i) {
      var l = i === void 0 ? {} : i,
        c = l.updateGroupStateOnError,
        d = c === void 0 ? !0 : c;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryGroup",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var i,
              l,
              c,
              m = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
            if ((m == null ? void 0 : m.terminated) === !0)
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
            var _ = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
              f = { groupId: t.toString(), queryContext: a };
            if (
              (m == null ? void 0 : m.hasIncompleteParticipantInformation) ===
                !0 &&
              _
            )
              f.queryContext = "missing_participant_identification";
            else if (a === "enter_group_info") {
              var h = yield o(
                "WAWebDBGroupParticipant",
              ).computeGroupParticipantsHash(t);
              h != null && (f.participantsPhash = h);
            }
            var y = Date.now(),
              b = null;
            try {
              b = yield g(f);
            } catch (e) {
              if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                if ((d && (yield C(t, e)), e.statusCode === 404))
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
            var v = (i = b) == null ? void 0 : i.groupInfo;
            if (v == null)
              throw r("err")(
                "groupQueryJob: group " +
                  t.toString() +
                  " returned empty response",
              );
            var S = ((l = b) == null ? void 0 : l.participantPhashMatch) === !0,
              R = v,
              L = R.creatorPn,
              E = R.creatorUsername,
              k = R.descOwner,
              I = R.descOwnerUsername,
              T = R.owner,
              D = R.participants,
              x = R.subjectOwner,
              $ = R.subjectOwnerPn,
              P = R.subjectOwnerUsername,
              N =
                (c = D.map(function (e) {
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
                  ? c
                  : [];
            (T &&
              L &&
              N.push({
                id: o("WAWebWidFactory").asUserWidOrThrow(T),
                lid: o("WAWebWidFactory").asUserWidOrThrow(T),
                phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(L),
              }),
              x &&
                $ &&
                N.push({
                  id: o("WAWebWidFactory").asUserWidOrThrow(x),
                  lid: o("WAWebWidFactory").asUserWidOrThrow(x),
                  phoneNumber: o("WAWebWidFactory").asUserWidOrThrow($),
                }));
            var M = [];
            (T &&
              E != null &&
              M.push({
                userId: o("WAWebWidFactory").asUserWidOrThrow(T),
                username: o("WAWebUsernameTypes").asUsername(E),
              }),
              x &&
                P != null &&
                M.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(x),
                  username: o("WAWebUsernameTypes").asUsername(P),
                }),
              k &&
                I != null &&
                M.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(k),
                  username: o("WAWebUsernameTypes").asUsername(I),
                }),
              D.forEach(function (e) {
                var t = e.id,
                  n = e.username;
                n != null &&
                  M.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(t),
                    username: o("WAWebUsernameTypes").asUsername(n),
                  });
              }));
            var w = !1;
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) &&
              ((w = yield o(
                "WAWebBotGroupBackendUtils",
              ).addGroupChangedToOpenBotGroupSystemMsgIfRequired({
                currentIsOpenBotGroupState: v.isOpenBotGroup,
                groupWid: t,
                prevIsOpenBotGroupState: m == null ? void 0 : m.isOpenBotGroup,
              })),
              (w =
                (yield o(
                  "WAWebBotGroupBackendUtils",
                ).addGroupChangedToTeeBotGroupSystemMsgIfRequired({
                  currentIsTeeBotGroupState: v.isTeeBotGroup,
                  groupWid: t,
                  prevIsTeeBotGroupState: m == null ? void 0 : m.isTeeBotGroup,
                })) || w));
            var A = yield o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB(
                [v],
              ),
              F = A[0],
              O = yield (p || (p = n("Promise"))).all([
                S === !0
                  ? o("WAWebDBGroupParticipant").getGroupParticipant({
                      groupWid: t,
                    })
                  : null,
                o("WAWebDBGroupsGroupMetadata").updateGroupMetadataTable({
                  groupInfos: [F],
                }),
                S !== !0 &&
                  o("WAWebGroupsParticipantsApi").updateParticipants({
                    group: v.id,
                    participants: D,
                    groupInfo: v,
                  }),
                o(
                  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
                ).createOrReplaceDisplayNamesAndLidPnMappings(N, !0),
                _ &&
                  M.length > 0 &&
                  o("WAWebSetUsernameJob").setUsernamesJob(M),
              ]),
              B = O[0];
            return (
              (o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled()) &&
                ((w =
                  (yield o(
                    "WAWebBotGroupBackendUtils",
                  ).addBotGroupChangedToE2EEFSystemMsgIfRequired({
                    currentIsOpenBotGroupState: v.isOpenBotGroup,
                    currentIsTeeBotGroupState: v.isTeeBotGroup,
                    groupWid: t,
                    prevIsOpenBotGroupState:
                      m == null ? void 0 : m.isOpenBotGroup,
                    prevIsTeeBotGroupState:
                      m == null ? void 0 : m.isTeeBotGroup,
                  })) || w),
                w &&
                  v.isOpenBotGroup != null &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateGroupMetadataModelForAiGroupState",
                    { group: v.id, isOpenBotGroup: v.isOpenBotGroup },
                  )),
              B != null &&
                (v = babelHelpers.extends({}, v, {
                  participants: B.participants,
                })),
              o("WAWebSyncGroupBotSupportFields")
                .maybeLazySyncGroupBotSupportFields(
                  v.participants.map(function (e) {
                    var t = e.id;
                    return t;
                  }),
                )
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "groupQueryJob: failed to refresh group agent profiles",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("group-query-refresh-agent-profiles-error");
                }),
              o("WAWebApiParticipantStore").clearAdminshipCache(
                v.id.toString(),
              ),
              o(
                "WAWebLimitSharingModelUtils",
              ).genLimitSharingSystemMessageOnPersistedChat({
                chatWID: t,
                sharingLimited: F.limitSharingEnabled,
                acp2Enabled: F.acp2Enabled,
              }),
              o(
                "WAWebLimitSharingModelUtils",
              ).genAcp2SystemMessageOnPersistedChat({
                chatWID: t,
                enabled: F.acp2Enabled,
                snapshotRequestedAtMs: y,
              }),
              { status: "success", groupInfo: v }
            );
          }),
          r("WAWebEnvironment").isWindows
            ? { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH }
            : null,
        )
        .waitUntilCompleted();
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
                    _ = !!(a != null && a.defaultSubgroup),
                    f = _
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
                    .createOrReplace(f);
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
              yield (p || (p = n("Promise"))).all(
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
        b.apply(this, arguments)
      );
    }
    ((l.fetchGroupInfoWithBotFallback = g),
      (l.queryGroupJob = y),
      (l.handleGroupInfoError = C));
  },
  98,
);
