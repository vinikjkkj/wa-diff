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
    "WAWebUpdateDbForCommunityAction",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(t, a) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryGroup",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var i,
              l,
              u,
              c = yield o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
            if ((c == null ? void 0 : c.terminated) === !0)
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
              _ = { groupId: t.toString(), queryContext: a };
            if (
              (c == null ? void 0 : c.hasIncompleteParticipantInformation) ===
                !0 &&
              m
            )
              _.queryContext = "missing_participant_identification";
            else if (a === "enter_group_info") {
              var f = yield o(
                "WAWebDBGroupParticipant",
              ).computeGroupParticipantsHash(t);
              f != null && (_.participantsPhash = f);
            }
            var g = Date.now(),
              h = null;
            try {
              h = o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled()
                ? yield o(
                    "WAWebMexFetchGroupInfoIncludBotsJob",
                  ).mexGetGroupInfoIncludBots(_)
                : yield o("WAWebMexFetchGroupInfoJob").mexGetGroupInfo(_);
            } catch (e) {
              if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                if ((yield p(t, e), e.statusCode === 404))
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
            var y = (i = h) == null ? void 0 : i.groupInfo;
            if (y == null)
              throw r("err")(
                "groupQueryJob: group " +
                  t.toString() +
                  " returned empty response",
              );
            var C = ((l = h) == null ? void 0 : l.participantPhashMatch) === !0,
              b = y,
              v = b.creatorPn,
              S = b.creatorUsername,
              R = b.descOwner,
              L = b.descOwnerUsername,
              E = b.owner,
              k = b.participants,
              I = b.subjectOwner,
              T = b.subjectOwnerPn,
              D = b.subjectOwnerUsername,
              x =
                (u = k.map(function (e) {
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
                  ? u
                  : [];
            (E &&
              v &&
              x.push({
                id: o("WAWebWidFactory").asUserWidOrThrow(E),
                lid: o("WAWebWidFactory").asUserWidOrThrow(E),
                phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(v),
              }),
              I &&
                T &&
                x.push({
                  id: o("WAWebWidFactory").asUserWidOrThrow(I),
                  lid: o("WAWebWidFactory").asUserWidOrThrow(I),
                  phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(T),
                }));
            var $ = [];
            (E &&
              S != null &&
              $.push({
                userId: o("WAWebWidFactory").asUserWidOrThrow(E),
                username: o("WAWebUsernameTypes").asUsername(S),
              }),
              I &&
                D != null &&
                $.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(I),
                  username: o("WAWebUsernameTypes").asUsername(D),
                }),
              R &&
                L != null &&
                $.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(R),
                  username: o("WAWebUsernameTypes").asUsername(L),
                }),
              k.forEach(function (e) {
                var t = e.id,
                  n = e.username;
                n != null &&
                  $.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(t),
                    username: o("WAWebUsernameTypes").asUsername(n),
                  });
              }));
            var P = !1;
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) &&
              ((P = yield o(
                "WAWebBotGroupBackendUtils",
              ).addGroupChangedToOpenBotGroupSystemMsgIfRequired({
                currentIsOpenBotGroupState: y.isOpenBotGroup,
                groupWid: t,
                prevIsOpenBotGroupState: c == null ? void 0 : c.isOpenBotGroup,
              })),
              (P =
                (yield o(
                  "WAWebBotGroupBackendUtils",
                ).addGroupChangedToTeeBotGroupSystemMsgIfRequired({
                  currentIsTeeBotGroupState: y.isTeeBotGroup,
                  groupWid: t,
                  prevIsTeeBotGroupState: c == null ? void 0 : c.isTeeBotGroup,
                })) || P));
            var N = yield o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB(
                [y],
              ),
              M = N[0],
              w = yield (d || (d = n("Promise"))).all([
                C === !0
                  ? o("WAWebDBGroupParticipant").getGroupParticipant({
                      groupWid: t,
                    })
                  : null,
                o("WAWebDBGroupsGroupMetadata").updateGroupMetadataTable({
                  groupInfos: [M],
                }),
                C !== !0 &&
                  o("WAWebGroupsParticipantsApi").updateParticipants({
                    group: y.id,
                    participants: k,
                    groupInfo: y,
                  }),
                o(
                  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
                ).createOrReplaceDisplayNamesAndLidPnMappings(x, !0),
                m &&
                  $.length > 0 &&
                  o("WAWebSetUsernameJob").setUsernamesJob($),
              ]),
              A = w[0];
            return (
              (o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled()) &&
                ((P =
                  (yield o(
                    "WAWebBotGroupBackendUtils",
                  ).addBotGroupChangedToE2EEFSystemMsgIfRequired({
                    currentIsOpenBotGroupState: y.isOpenBotGroup,
                    currentIsTeeBotGroupState: y.isTeeBotGroup,
                    groupWid: t,
                    prevIsOpenBotGroupState:
                      c == null ? void 0 : c.isOpenBotGroup,
                    prevIsTeeBotGroupState:
                      c == null ? void 0 : c.isTeeBotGroup,
                  })) || P),
                P &&
                  y.isOpenBotGroup != null &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateGroupMetadataModelForAiGroupState",
                    { group: y.id, isOpenBotGroup: y.isOpenBotGroup },
                  )),
              A != null &&
                (y = babelHelpers.extends({}, y, {
                  participants: A.participants,
                })),
              o("WAWebApiParticipantStore").clearAdminshipCache(
                y.id.toString(),
              ),
              o(
                "WAWebLimitSharingModelUtils",
              ).genLimitSharingSystemMessageOnPersistedChat({
                chatWID: t,
                sharingLimited: M.limitSharingEnabled,
                acp2Enabled: M.acp2Enabled,
              }),
              o(
                "WAWebLimitSharingModelUtils",
              ).genAcp2SystemMessageOnPersistedChat({
                chatWID: t,
                enabled: M.acp2Enabled,
                snapshotRequestedAtMs: g,
              }),
              { status: "success", groupInfo: y }
            );
          }),
          r("WAWebEnvironment").isWindows
            ? { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH }
            : null,
        )
        .waitUntilCompleted();
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
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
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
                  var m = o("WAWebWidFactory").createUserWidOrThrow(s),
                    p = o("WAWebLidMigrationUtils").toLid(m),
                    _ = !!(a != null && a.defaultSubgroup),
                    f = _
                      ? o("WAWebDBGroupParticipant").removeParticipantInfoCAG(
                          l,
                          [{ id: m, lid: p, isAdmin: !1, isSuperAdmin: !1 }],
                          Date.now(),
                          null,
                          null,
                        )
                      : o("WAWebDBGroupParticipant").removeParticipantInfo(
                          l,
                          [{ id: m, isAdmin: !1, isSuperAdmin: !1 }],
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
              yield (d || (d = n("Promise"))).all(
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
        _.apply(this, arguments)
      );
    }
    ((l.queryGroupJob = m), (l.handleGroupInfoError = p));
  },
  98,
);
