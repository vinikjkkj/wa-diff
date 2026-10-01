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
        c = l.preserveLocalMembership,
        d = c === void 0 ? !1 : c,
        m = l.updateGroupStateOnError,
        _ = m === void 0 ? !0 : m;
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
            var f = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
              h = { groupId: t.toString(), queryContext: a };
            if (
              (m == null ? void 0 : m.hasIncompleteParticipantInformation) ===
                !0 &&
              f
            )
              h.queryContext = "missing_participant_identification";
            else if (a === "enter_group_info") {
              var y = yield o(
                "WAWebDBGroupParticipant",
              ).computeGroupParticipantsHash(t);
              y != null && (h.participantsPhash = y);
            }
            var b = Date.now(),
              S = null;
            try {
              S = yield g(h);
            } catch (e) {
              if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                if ((_ && (yield v(t, e)), e.statusCode === 404))
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
            var R = (i = S) == null ? void 0 : i.groupInfo;
            if (R == null)
              throw r("err")(
                "groupQueryJob: group " +
                  t.toString() +
                  " returned empty response",
              );
            R = yield C(t, R, d);
            var L = ((l = S) == null ? void 0 : l.participantPhashMatch) === !0,
              E = R,
              k = E.creatorPn,
              I = E.creatorUsername,
              T = E.descOwner,
              D = E.descOwnerUsername,
              x = E.owner,
              $ = E.participants,
              P = E.subjectOwner,
              N = E.subjectOwnerPn,
              M = E.subjectOwnerUsername,
              w =
                (c = $.map(function (e) {
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
            (x &&
              k &&
              w.push({
                id: o("WAWebWidFactory").asUserWidOrThrow(x),
                lid: o("WAWebWidFactory").asUserWidOrThrow(x),
                phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(k),
              }),
              P &&
                N &&
                w.push({
                  id: o("WAWebWidFactory").asUserWidOrThrow(P),
                  lid: o("WAWebWidFactory").asUserWidOrThrow(P),
                  phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(N),
                }));
            var A = [];
            (x &&
              I != null &&
              A.push({
                userId: o("WAWebWidFactory").asUserWidOrThrow(x),
                username: o("WAWebUsernameTypes").asUsername(I),
              }),
              P &&
                M != null &&
                A.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(P),
                  username: o("WAWebUsernameTypes").asUsername(M),
                }),
              T &&
                D != null &&
                A.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(T),
                  username: o("WAWebUsernameTypes").asUsername(D),
                }),
              $.forEach(function (e) {
                var t = e.id,
                  n = e.username;
                n != null &&
                  A.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(t),
                    username: o("WAWebUsernameTypes").asUsername(n),
                  });
              }));
            var F = !1;
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) &&
              ((F = yield o(
                "WAWebBotGroupBackendUtils",
              ).addGroupChangedToOpenBotGroupSystemMsgIfRequired({
                currentIsOpenBotGroupState: R.isOpenBotGroup,
                groupWid: t,
                prevIsOpenBotGroupState: m == null ? void 0 : m.isOpenBotGroup,
              })),
              (F =
                (yield o(
                  "WAWebBotGroupBackendUtils",
                ).addGroupChangedToTeeBotGroupSystemMsgIfRequired({
                  currentIsTeeBotGroupState: R.isTeeBotGroup,
                  groupWid: t,
                  prevIsTeeBotGroupState: m == null ? void 0 : m.isTeeBotGroup,
                })) || F));
            var O = yield o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB(
                [R],
              ),
              B = O[0],
              W = yield (p || (p = n("Promise"))).all([
                L === !0
                  ? o("WAWebDBGroupParticipant").getGroupParticipant({
                      groupWid: t,
                    })
                  : null,
                o("WAWebDBGroupsGroupMetadata").updateGroupMetadataTable({
                  groupInfos: [B],
                }),
                L !== !0 &&
                  o("WAWebGroupsParticipantsApi").updateParticipants({
                    group: R.id,
                    participants: $,
                    groupInfo: R,
                  }),
                o(
                  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
                ).createOrReplaceDisplayNamesAndLidPnMappings(w, !0),
                f &&
                  A.length > 0 &&
                  o("WAWebSetUsernameJob").setUsernamesJob(A),
              ]),
              q = W[0];
            return (
              (o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled()) &&
                ((F =
                  (yield o(
                    "WAWebBotGroupBackendUtils",
                  ).addBotGroupChangedToE2EEFSystemMsgIfRequired({
                    currentIsOpenBotGroupState: R.isOpenBotGroup,
                    currentIsTeeBotGroupState: R.isTeeBotGroup,
                    groupWid: t,
                    prevIsOpenBotGroupState:
                      m == null ? void 0 : m.isOpenBotGroup,
                    prevIsTeeBotGroupState:
                      m == null ? void 0 : m.isTeeBotGroup,
                  })) || F),
                F &&
                  R.isOpenBotGroup != null &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateGroupMetadataModelForAiGroupState",
                    { group: R.id, isOpenBotGroup: R.isOpenBotGroup },
                  )),
              q != null &&
                (R = babelHelpers.extends({}, R, {
                  participants: q.participants,
                })),
              o("WAWebSyncGroupBotSupportFields")
                .maybeLazySyncGroupBotSupportFields(
                  R.participants.map(function (e) {
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
                R.id.toString(),
              ),
              o(
                "WAWebLimitSharingModelUtils",
              ).genLimitSharingSystemMessageOnPersistedChat({
                chatWID: t,
                sharingLimited: B.limitSharingEnabled,
                acp2Enabled: B.acp2Enabled,
              }),
              o(
                "WAWebLimitSharingModelUtils",
              ).genAcp2SystemMessageOnPersistedChat({
                chatWID: t,
                enabled: B.acp2Enabled,
                snapshotRequestedAtMs: b,
              }),
              { status: "success", groupInfo: R }
            );
          }),
          r("WAWebEnvironment").isWindows
            ? { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH }
            : null,
        )
        .waitUntilCompleted();
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        S.apply(this, arguments)
      );
    }
    ((l.fetchGroupInfoWithBotFallback = g),
      (l.queryGroupJob = y),
      (l.handleGroupInfoError = v));
  },
  98,
);
