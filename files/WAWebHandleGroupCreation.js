__d(
  "WAWebHandleGroupCreation",
  [
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebBackendApi",
    "WAWebCommunityGatingUtils",
    "WAWebCreateChat",
    "WAWebGroupDatabaseJob",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupJoinCWamEvent",
    "WAWebGroupParticipantsJob",
    "WAWebHandleMsgTypes",
    "WAWebHandlePushnameUpdate",
    "WAWebQueryMissingParentGroupJob",
    "WAWebUserUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t) {
      var n = t.groupInfo,
        a = t.isJoinViaInviteLink,
        i = a === void 0 ? !1 : a,
        l = t.isOffline,
        m = l === void 0 ? !1 : l,
        p = t.meta,
        _ = t.suppressInitialE2EENotice,
        f = _ === void 0 ? !1 : _;
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "inside handleGroupCreation",
            ])),
        )
        .tags("groups");
      var g = p.author,
        h = p.chatId,
        y = p.pushname,
        C = n.creation,
        b = n.hasCapi,
        v = n.id,
        S = n.parentGroup,
        R = n.participants,
        L = n.subject;
      ((p.author == null || !o("WAWebUserUtils").isMeAccount(p.author)) &&
        new (o("WAWebGroupJoinCWamEvent").GroupJoinCWamEvent)().commit(),
        g &&
          y != null &&
          y !== "" &&
          o("WAWebHandlePushnameUpdate")
            .updatePushname(g, y, m)
            .catch(function (e) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleGroupCreation: updatePushname failed: ",
                    "",
                  ])),
                String(e),
              );
            }),
        await Promise.all([
          o("WAWebGroupDatabaseJob").updateGroupMetadataTableJob([n]),
          o("WAWebGroupParticipantsJob").updateParticipantsJob({
            group: v,
            participants: R,
            isOffline: m,
            groupInfo: n,
          }),
        ]),
        o("WALogger")
          .LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "updated GroupMetadata and participants tables",
              ])),
          )
          .tags("groups"),
        (await o("WAWebApiChatCommon").getChatRecord(h)) != null
          ? o("WAWebBackendApi").frontendFireAndForget("updateGroupSubject", {
              id: h,
              subject: L,
            })
          : (await o(
              "WAWebGroupHistoryParticipantJob",
            ).clearGroupHistoryParticipantStateForGroup(v),
            await o("WAWebCreateChat").createChat({
              createChatOrigin: "groupCreation",
              destination: { chatId: h },
              initialProps: babelHelpers.extends(
                { t: C, pendingInitialLoading: !1, createdLocally: !1 },
                i === !0 && { notSpam: !0 },
              ),
              options: babelHelpers.extends(
                { createdOffline: m, suppressInitialE2EENotice: f },
                b === !0 && {
                  nextPrivacyMode: {
                    actualActors: o("WAWebHandleMsgTypes").ActualActorsEnumType
                      .Capi,
                    hostStorage: o("WAWebHandleMsgTypes").HostStorageEnumType
                      .Facebook,
                    privacyModeTs: 0,
                  },
                },
              ),
            }),
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "updated chat model and table",
                  ])),
              )
              .tags("groups"),
            o("WAWebBackendApi").frontendFireAndForget("updateGroupSubject", {
              id: v,
              subject: L,
            })),
        o("WAWebBackendApi").frontendFireAndForget("setGroupMetadata", n),
        S != null &&
          o("WAWebCommunityGatingUtils").fetchMissingParentGroupsEnabled() &&
          o("WAWebQueryMissingParentGroupJob")
            .queryParentGroupIfMissing(S)
            .catch(function (e) {
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "handleGroupCreation: parent group query failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("group-creation-parent-group-query-failed");
            }),
        o("WAWebBackendApi").frontendFireAndForget("markProfilePicStale", {
          profilePicThumbWid: v,
        }));
    }
    l.handleGroupCreation = m;
  },
  98,
);
