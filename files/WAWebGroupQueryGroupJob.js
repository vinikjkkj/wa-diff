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
            var g = null;
            try {
              g = o(
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
            var h = (i = g) == null ? void 0 : i.groupInfo;
            if (h == null)
              throw r("err")(
                "groupQueryJob: group " +
                  t.toString() +
                  " returned empty response",
              );
            var y = ((l = g) == null ? void 0 : l.participantPhashMatch) === !0,
              C = h,
              b = C.creatorPn,
              v = C.creatorUsername,
              S = C.descOwner,
              R = C.descOwnerUsername,
              L = C.owner,
              E = C.participants,
              k = C.subjectOwner,
              I = C.subjectOwnerPn,
              T = C.subjectOwnerUsername,
              D =
                (u = E.map(function (e) {
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
            (L &&
              b &&
              D.push({
                id: o("WAWebWidFactory").asUserWidOrThrow(L),
                lid: o("WAWebWidFactory").asUserWidOrThrow(L),
                phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(b),
              }),
              k &&
                I &&
                D.push({
                  id: o("WAWebWidFactory").asUserWidOrThrow(k),
                  lid: o("WAWebWidFactory").asUserWidOrThrow(k),
                  phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(I),
                }));
            var x = [];
            (L &&
              v != null &&
              x.push({
                userId: o("WAWebWidFactory").asUserWidOrThrow(L),
                username: v,
              }),
              k &&
                T != null &&
                x.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(k),
                  username: T,
                }),
              S &&
                R != null &&
                x.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(S),
                  username: R,
                }),
              E.forEach(function (e) {
                var t = e.id,
                  n = e.username;
                n != null &&
                  x.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(t),
                    username: n,
                  });
              }));
            var $ = !1;
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) &&
              (($ = yield o(
                "WAWebBotGroupBackendUtils",
              ).addGroupChangedToOpenBotGroupSystemMsgIfRequired({
                currentIsOpenBotGroupState: h.isOpenBotGroup,
                groupWid: t,
                prevIsOpenBotGroupState: c == null ? void 0 : c.isOpenBotGroup,
              })),
              ($ =
                (yield o(
                  "WAWebBotGroupBackendUtils",
                ).addGroupChangedToTeeBotGroupSystemMsgIfRequired({
                  currentIsTeeBotGroupState: h.isTeeBotGroup,
                  groupWid: t,
                  prevIsTeeBotGroupState: c == null ? void 0 : c.isTeeBotGroup,
                })) || $));
            var P = yield o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB(
                [h],
              ),
              N = P[0],
              M = yield (d || (d = n("Promise"))).all([
                y === !0
                  ? o("WAWebDBGroupParticipant").getGroupParticipant({
                      groupWid: t,
                    })
                  : null,
                o("WAWebDBGroupsGroupMetadata").updateGroupMetadataTable({
                  groupInfos: [N],
                }),
                y !== !0 &&
                  o("WAWebGroupsParticipantsApi").updateParticipants({
                    group: h.id,
                    participants: E,
                    groupInfo: h,
                  }),
                o(
                  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
                ).createOrReplaceDisplayNamesAndLidPnMappings(D, !0),
                m &&
                  x.length > 0 &&
                  o("WAWebSetUsernameJob").setUsernamesJob(x),
              ]),
              w = M[0];
            return (
              (o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled()) &&
                (($ =
                  (yield o(
                    "WAWebBotGroupBackendUtils",
                  ).addBotGroupChangedToE2EEFSystemMsgIfRequired({
                    currentIsOpenBotGroupState: h.isOpenBotGroup,
                    currentIsTeeBotGroupState: h.isTeeBotGroup,
                    groupWid: t,
                    prevIsOpenBotGroupState:
                      c == null ? void 0 : c.isOpenBotGroup,
                    prevIsTeeBotGroupState:
                      c == null ? void 0 : c.isTeeBotGroup,
                  })) || $),
                $ &&
                  h.isOpenBotGroup != null &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateGroupMetadataModelForAiGroupState",
                    { group: h.id, isOpenBotGroup: h.isOpenBotGroup },
                  )),
              w != null &&
                (h = babelHelpers.extends({}, h, {
                  participants: w.participants,
                })),
              o("WAWebApiParticipantStore").clearAdminshipCache(
                h.id.toString(),
              ),
              o(
                "WAWebLimitSharingModelUtils",
              ).genLimitSharingSystemMessageOnPersistedChat({
                chatWID: t,
                sharingLimited: N.limitSharingEnabled,
              }),
              { status: "success", groupInfo: h }
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
