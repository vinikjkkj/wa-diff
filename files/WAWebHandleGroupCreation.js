__d(
  "WAWebHandleGroupCreation",
  [
    "Promise",
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebBackendApi",
    "WAWebCommunityGatingUtils",
    "WAWebCreateChat",
    "WAWebGroupDatabaseJob",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupJoinCWamEvent",
    "WAWebGroupParticipantsJob",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandlePushnameUpdate",
    "WAWebQueryMissingParentGroupJob",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.groupInfo,
            i = t.isJoinViaInviteLink,
            l = i === void 0 ? !1 : i,
            p = t.isOffline,
            _ = p === void 0 ? !1 : p,
            f = t.meta,
            g = t.suppressInitialE2EENotice,
            h = g === void 0 ? !1 : g;
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "inside handleGroupCreation",
                ])),
            )
            .tags("groups");
          var y = f.author,
            C = f.chatId,
            b = f.pushname,
            v = a.creation,
            S = a.hasCapi,
            R = a.id,
            L = a.parentGroup,
            E = a.participants,
            k = a.subject;
          ((f.author == null ||
            !o("WAWebUserPrefsMeUser").isMeAccount(f.author)) &&
            new (o("WAWebGroupJoinCWamEvent").GroupJoinCWamEvent)().commit(),
            y &&
              b != null &&
              b !== "" &&
              o("WAWebHandlePushnameUpdate")
                .updatePushname(y, b, _)
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
            yield (m || (m = n("Promise"))).all([
              o("WAWebGroupDatabaseJob").updateGroupMetadataTableJob([a]),
              o("WAWebGroupParticipantsJob").updateParticipantsJob({
                group: R,
                participants: E,
                isOffline: _,
                groupInfo: a,
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
            (yield o("WAWebApiChatCommon").getChatRecord(C)) != null
              ? o("WAWebBackendApi").frontendFireAndForget(
                  "updateGroupSubject",
                  { id: C, subject: k },
                )
              : (yield o(
                  "WAWebGroupHistoryParticipantJob",
                ).clearGroupHistoryParticipantStateForGroup(R),
                yield o("WAWebCreateChat").createChat({
                  createChatOrigin: "groupCreation",
                  destination: { chatId: C },
                  initialProps: babelHelpers.extends(
                    { t: v, pendingInitialLoading: !1, createdLocally: !1 },
                    l === !0 && { notSpam: !0 },
                  ),
                  options: babelHelpers.extends(
                    { createdOffline: _, suppressInitialE2EENotice: h },
                    S === !0 && {
                      nextPrivacyMode: {
                        actualActors: o("WAWebHandleMsgTypes.flow")
                          .ActualActorsEnumType.Capi,
                        hostStorage: o("WAWebHandleMsgTypes.flow")
                          .HostStorageEnumType.Facebook,
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
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateGroupSubject",
                  { id: R, subject: k },
                )),
            o("WAWebBackendApi").frontendFireAndForget("setGroupMetadata", a),
            L != null &&
              o(
                "WAWebCommunityGatingUtils",
              ).fetchMissingParentGroupsEnabled() &&
              o("WAWebQueryMissingParentGroupJob")
                .queryParentGroupIfMissing(L)
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
              profilePicThumbWid: R,
            }));
        })),
        _.apply(this, arguments)
      );
    }
    l.handleGroupCreation = p;
  },
  98,
);
