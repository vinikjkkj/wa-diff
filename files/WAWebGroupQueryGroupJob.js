__d(
  "WAWebGroupQueryGroupJob",
  [
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
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t, n) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "queryGroup",
          async function () {
            var a,
              i,
              l,
              u = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(t);
            if ((u == null ? void 0 : u.terminated) === !0)
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
            var c = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
              d = { groupId: t.toString(), queryContext: n };
            if (
              (u == null ? void 0 : u.hasIncompleteParticipantInformation) ===
                !0 &&
              c
            )
              d.queryContext = "missing_participant_identification";
            else if (n === "enter_group_info") {
              var p = await o(
                "WAWebDBGroupParticipant",
              ).computeGroupParticipantsHash(t);
              p != null && (d.participantsPhash = p);
            }
            var _ = null;
            try {
              _ = o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled()
                ? await o(
                    "WAWebMexFetchGroupInfoIncludBotsJob",
                  ).mexGetGroupInfoIncludBots(d)
                : await o("WAWebMexFetchGroupInfoJob").mexGetGroupInfo(d);
            } catch (e) {
              if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError) {
                if ((await m(t, e), e.statusCode === 404))
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
            var f = (a = _) == null ? void 0 : a.groupInfo;
            if (f == null)
              throw r("err")(
                "groupQueryJob: group " +
                  t.toString() +
                  " returned empty response",
              );
            var g = ((i = _) == null ? void 0 : i.participantPhashMatch) === !0,
              h = f,
              y = h.creatorPn,
              C = h.creatorUsername,
              b = h.descOwner,
              v = h.descOwnerUsername,
              S = h.owner,
              R = h.participants,
              L = h.subjectOwner,
              E = h.subjectOwnerPn,
              k = h.subjectOwnerUsername,
              I =
                (l = R.map(function (e) {
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
                  ? l
                  : [];
            (S &&
              y &&
              I.push({
                id: o("WAWebWidFactory").asUserWidOrThrow(S),
                lid: o("WAWebWidFactory").asUserWidOrThrow(S),
                phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(y),
              }),
              L &&
                E &&
                I.push({
                  id: o("WAWebWidFactory").asUserWidOrThrow(L),
                  lid: o("WAWebWidFactory").asUserWidOrThrow(L),
                  phoneNumber: o("WAWebWidFactory").asUserWidOrThrow(E),
                }));
            var T = [];
            (S &&
              C != null &&
              T.push({
                userId: o("WAWebWidFactory").asUserWidOrThrow(S),
                username: C,
              }),
              L &&
                k != null &&
                T.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(L),
                  username: k,
                }),
              b &&
                v != null &&
                T.push({
                  userId: o("WAWebWidFactory").asUserWidOrThrow(b),
                  username: v,
                }),
              R.forEach(function (e) {
                var t = e.id,
                  n = e.username;
                n != null &&
                  T.push({
                    userId: o("WAWebWidFactory").asUserWidOrThrow(t),
                    username: n,
                  });
              }));
            var D = !1;
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
              o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) &&
              ((D = await o(
                "WAWebBotGroupBackendUtils",
              ).addGroupChangedToOpenBotGroupSystemMsgIfRequired({
                currentIsOpenBotGroupState: f.isOpenBotGroup,
                groupWid: t,
                prevIsOpenBotGroupState: u == null ? void 0 : u.isOpenBotGroup,
              })),
              (D =
                (await o(
                  "WAWebBotGroupBackendUtils",
                ).addGroupChangedToTeeBotGroupSystemMsgIfRequired({
                  currentIsTeeBotGroupState: f.isTeeBotGroup,
                  groupWid: t,
                  prevIsTeeBotGroupState: u == null ? void 0 : u.isTeeBotGroup,
                })) || D));
            var x = await o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB(
                [f],
              ),
              $ = x[0],
              P = await Promise.all([
                g === !0
                  ? o("WAWebDBGroupParticipant").getGroupParticipant({
                      groupWid: t,
                    })
                  : null,
                o("WAWebDBGroupsGroupMetadata").updateGroupMetadataTable({
                  groupInfos: [$],
                }),
                g !== !0 &&
                  o("WAWebGroupsParticipantsApi").updateParticipants({
                    group: f.id,
                    participants: R,
                    groupInfo: f,
                  }),
                o(
                  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
                ).createOrReplaceDisplayNamesAndLidPnMappings(I, !0),
                c &&
                  T.length > 0 &&
                  o("WAWebSetUsernameJob").setUsernamesJob(T),
              ]),
              N = P[0];
            return (
              (o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled()) &&
                ((D =
                  (await o(
                    "WAWebBotGroupBackendUtils",
                  ).addBotGroupChangedToE2EEFSystemMsgIfRequired({
                    currentIsOpenBotGroupState: f.isOpenBotGroup,
                    currentIsTeeBotGroupState: f.isTeeBotGroup,
                    groupWid: t,
                    prevIsOpenBotGroupState:
                      u == null ? void 0 : u.isOpenBotGroup,
                    prevIsTeeBotGroupState:
                      u == null ? void 0 : u.isTeeBotGroup,
                  })) || D),
                D &&
                  f.isOpenBotGroup != null &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateGroupMetadataModelForAiGroupState",
                    { group: f.id, isOpenBotGroup: f.isOpenBotGroup },
                  )),
              N != null &&
                (f = babelHelpers.extends({}, f, {
                  participants: N.participants,
                })),
              o("WAWebApiParticipantStore").clearAdminshipCache(
                f.id.toString(),
              ),
              o(
                "WAWebLimitSharingModelUtils",
              ).genLimitSharingSystemMessageOnPersistedChat({
                chatWID: t,
                sharingLimited: $.limitSharingEnabled,
              }),
              { status: "success", groupInfo: f }
            );
          },
          r("WAWebEnvironment").isWindows
            ? { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH }
            : null,
        )
        .waitUntilCompleted();
    }
    async function m(e, t) {
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
      var n = await o("WAWebDBGroupsGroupMetadata").getGroupMetadata(e);
      if (n == null) {
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
          var a =
              n != null &&
              (await o("WAWebDBCommunity").isLastJoinedSubgroup(n)),
            i = await o("WAWebSchemaParticipant")
              .getParticipantTable()
              .get(e.toString());
          if ((i == null ? void 0 : i.participants) != null) {
            var l = i.participants.find(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(
                o("WAWebWidFactory").createWid(e),
              );
            });
            if (l != null) {
              var s = o("WAWebWidFactory").createUserWidOrThrow(l),
                d = o("WAWebLidMigrationUtils").toLid(s),
                m = !!(n != null && n.defaultSubgroup),
                p = m
                  ? o("WAWebDBGroupParticipant").removeParticipantInfoCAG(
                      i,
                      [{ id: s, lid: d, isAdmin: !1, isSuperAdmin: !1 }],
                      Date.now(),
                      null,
                      null,
                    )
                  : o("WAWebDBGroupParticipant").removeParticipantInfo(
                      i,
                      [{ id: s, isAdmin: !1, isSuperAdmin: !1 }],
                      Date.now(),
                      null,
                      null,
                    );
              await o("WAWebSchemaParticipant")
                .getParticipantTable()
                .createOrReplace(p);
            }
          }
          if (
            n != null &&
            n.defaultSubgroup === !0 &&
            !r("isStringNullOrEmpty")(n.parentGroup)
          ) {
            var _ = o("WAWebWidFactory").createWid(n.parentGroup),
              f = await o("WAWebSchemaParticipant")
                .getParticipantTable()
                .get(_.toString());
            if ((f == null ? void 0 : f.participants) != null) {
              var g = f.participants.find(function (e) {
                return o("WAWebUserPrefsMeUser").isMeAccount(
                  o("WAWebWidFactory").createWid(e),
                );
              });
              if (g != null) {
                var h = o("WAWebWidFactory").createUserWidOrThrow(g),
                  y = o("WAWebLidMigrationUtils").toLid(h),
                  C = o("WAWebDBGroupParticipant").removeParticipantInfoCAG(
                    f,
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
    ((l.queryGroupJob = d), (l.handleGroupInfoError = m));
  },
  98,
);
