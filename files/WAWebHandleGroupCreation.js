__d(
  "WAWebHandleGroupCreation",
  [
    "Promise",
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebBackendApi",
    "WAWebCreateChat",
    "WAWebGroupDatabaseJob",
    "WAWebGroupHistoryParticipantJob",
    "WAWebGroupJoinCWamEvent",
    "WAWebGroupParticipantsJob",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandlePushnameUpdate",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.groupInfo,
            a = t.isJoinViaInviteLink,
            i = a === void 0 ? !1 : a,
            l = t.isOffline,
            m = l === void 0 ? !1 : l,
            p = t.meta;
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "inside handleGroupCreation",
                ])),
            )
            .tags("groups");
          var _ = p.author,
            f = p.chatId,
            g = p.pushname,
            h = r.creation,
            y = r.hasCapi,
            C = r.id,
            b = r.participants,
            v = r.subject;
          ((p.author == null ||
            !o("WAWebUserPrefsMeUser").isMeAccount(p.author)) &&
            new (o("WAWebGroupJoinCWamEvent").GroupJoinCWamEvent)().commit(),
            _ &&
              g != null &&
              g !== "" &&
              o("WAWebHandlePushnameUpdate")
                .updatePushname(_, g, m)
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
            yield (d || (d = n("Promise"))).all([
              o("WAWebGroupDatabaseJob").updateGroupMetadataTableJob([r]),
              o("WAWebGroupParticipantsJob").updateParticipantsJob({
                group: C,
                participants: b,
                isOffline: m,
                groupInfo: r,
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
            (yield o("WAWebApiChatCommon").getChatRecord(f)) != null
              ? o("WAWebBackendApi").frontendFireAndForget(
                  "updateGroupSubject",
                  { id: f, subject: v },
                )
              : (yield o(
                  "WAWebGroupHistoryParticipantJob",
                ).clearGroupHistoryParticipantStateForGroup(C),
                yield o("WAWebCreateChat").createChat({
                  createChatOrigin: "groupCreation",
                  destination: { chatId: f },
                  initialProps: babelHelpers.extends(
                    { t: h, pendingInitialLoading: !1, createdLocally: !1 },
                    i === !0 && { notSpam: !0 },
                  ),
                  options: babelHelpers.extends(
                    { createdOffline: m },
                    y === !0 && {
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
                  { id: C, subject: v },
                )),
            o("WAWebBackendApi").frontendFireAndForget("setGroupMetadata", r),
            o("WAWebBackendApi").frontendFireAndForget("markProfilePicStale", {
              profilePicThumbWid: C,
            }));
        })),
        p.apply(this, arguments)
      );
    }
    l.handleGroupCreation = m;
  },
  98,
);
