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
    var e, s, u, c, d, m, p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              n.statusCode === 403
            )
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "groupQueryJob: bot-inclusive query forbidden, retrying standard query",
                    ])),
                ),
                o("WAWebMexFetchGroupInfoJob").mexGetGroupInfo(
                  babelHelpers.extends({}, e),
                )
              );
            throw n;
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(t, a) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryGroup",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var i,
              l,
              c,
              d = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
            if ((d == null ? void 0 : d.terminated) === !0)
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
            var m = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
              f = { groupId: t.toString(), queryContext: a };
            if (
              (d == null ? void 0 : d.hasIncompleteParticipantInformation) ===
                !0 &&
              m
            )
              f.queryContext = "missing_participant_identification";
            else if (a === "enter_group_info") {
              var g = yield o(
                "WAWebDBGroupParticipant",
              ).computeGroupParticipantsHash(t);
              g != null && (f.participantsPhash = g);
            }
            var y = Date.now(),
              C = null;
            try {
              C = yield _(f);
            } catch (e) {
              if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                if ((yield h(t, e), e.statusCode === 404))
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
            var b = (i = C) == null ? void 0 : i.groupInfo;
            if (b == null)
              throw r("err")(
                "groupQueryJob: group " +
                  t.toString() +
                  " returned empty response",
              );
            var v = ((l = C) == null ? void 0 : l.participantPhashMatch) === !0,
              S = b,
              R = S.creatorPn,
              L = S.creatorUsername,
              E = S.descOwner,
              k = S.descOwnerUsername,
              I = S.owner,
              T = S.participants,
              D = S.subjectOwner,
              x = S.subjectOwnerPn,
              $ = S.subjectOwnerUsername,
              P =
                (c = T.map(function (e) {
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
            (I &&
              R &&
              P.push({
                id: o("WAWebWidFactory").asUserWidOrThrow(I),
                lid: o("WAWebWidFactory").asUserWidOrThrow(I),
                phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(R),
              }),
              D &&
                x &&
                P.push({
                  id: o("WAWebWidFactory").asUserWidOrThrow(D),
                  lid: o("WAWebWidFactory").asUserWidOrThrow(D),
                  phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(x),
                }));
            var N = [];
            (I &&
              L != null &&
              N.push({
                userId: o("WAWebWidFactory").asUserWidOrThrow(I),
                username: o("WAWebUsernameTypes").asUsername(L),
              }),
              D &&
                $ != null &&
                N.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(D),
                  username: o("WAWebUsernameTypes").asUsername($),
                }),
              E &&
                k != null &&
                N.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(E),
                  username: o("WAWebUsernameTypes").asUsername(k),
                }),
              T.forEach(function (e) {
                var t = e.id,
                  n = e.username;
                n != null &&
                  N.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(t),
                    username: o("WAWebUsernameTypes").asUsername(n),
                  });
              }));
            var M = !1;
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) &&
              ((M = yield o(
                "WAWebBotGroupBackendUtils",
              ).addGroupChangedToOpenBotGroupSystemMsgIfRequired({
                currentIsOpenBotGroupState: b.isOpenBotGroup,
                groupWid: t,
                prevIsOpenBotGroupState: d == null ? void 0 : d.isOpenBotGroup,
              })),
              (M =
                (yield o(
                  "WAWebBotGroupBackendUtils",
                ).addGroupChangedToTeeBotGroupSystemMsgIfRequired({
                  currentIsTeeBotGroupState: b.isTeeBotGroup,
                  groupWid: t,
                  prevIsTeeBotGroupState: d == null ? void 0 : d.isTeeBotGroup,
                })) || M));
            var w = yield o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB(
                [b],
              ),
              A = w[0],
              F = yield (p || (p = n("Promise"))).all([
                v === !0
                  ? o("WAWebDBGroupParticipant").getGroupParticipant({
                      groupWid: t,
                    })
                  : null,
                o("WAWebDBGroupsGroupMetadata").updateGroupMetadataTable({
                  groupInfos: [A],
                }),
                v !== !0 &&
                  o("WAWebGroupsParticipantsApi").updateParticipants({
                    group: b.id,
                    participants: T,
                    groupInfo: b,
                  }),
                o(
                  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
                ).createOrReplaceDisplayNamesAndLidPnMappings(P, !0),
                m &&
                  N.length > 0 &&
                  o("WAWebSetUsernameJob").setUsernamesJob(N),
              ]),
              O = F[0];
            return (
              (o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled()) &&
                ((M =
                  (yield o(
                    "WAWebBotGroupBackendUtils",
                  ).addBotGroupChangedToE2EEFSystemMsgIfRequired({
                    currentIsOpenBotGroupState: b.isOpenBotGroup,
                    currentIsTeeBotGroupState: b.isTeeBotGroup,
                    groupWid: t,
                    prevIsOpenBotGroupState:
                      d == null ? void 0 : d.isOpenBotGroup,
                    prevIsTeeBotGroupState:
                      d == null ? void 0 : d.isTeeBotGroup,
                  })) || M),
                M &&
                  b.isOpenBotGroup != null &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateGroupMetadataModelForAiGroupState",
                    { group: b.id, isOpenBotGroup: b.isOpenBotGroup },
                  )),
              O != null &&
                (b = babelHelpers.extends({}, b, {
                  participants: O.participants,
                })),
              o("WAWebSyncGroupBotSupportFields")
                .maybeLazySyncGroupBotSupportFields(
                  b.participants.map(function (e) {
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
                b.id.toString(),
              ),
              o(
                "WAWebLimitSharingModelUtils",
              ).genLimitSharingSystemMessageOnPersistedChat({
                chatWID: t,
                sharingLimited: A.limitSharingEnabled,
                acp2Enabled: A.acp2Enabled,
              }),
              o(
                "WAWebLimitSharingModelUtils",
              ).genAcp2SystemMessageOnPersistedChat({
                chatWID: t,
                enabled: A.acp2Enabled,
                snapshotRequestedAtMs: y,
              }),
              { status: "success", groupInfo: b }
            );
          }),
          r("WAWebEnvironment").isWindows
            ? { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH }
            : null,
        )
        .waitUntilCompleted();
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        y.apply(this, arguments)
      );
    }
    ((l.fetchGroupInfoWithBotFallback = _),
      (l.queryGroupJob = g),
      (l.handleGroupInfoError = h));
  },
  98,
);
