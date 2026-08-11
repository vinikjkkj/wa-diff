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
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.groupInfo,
            a = t.isJoinViaInviteLink,
            i = a === void 0 ? !1 : a,
            l = t.isOffline,
            d = l === void 0 ? !1 : l,
            m = t.meta;
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "inside handleGroupCreation",
                ])),
            )
            .tags("groups");
          var p = m.author,
            _ = m.chatId,
            f = m.pushname,
            g = r.creation,
            h = r.hasCapi,
            y = r.id,
            C = r.participants,
            b = r.subject;
          ((m.author == null ||
            !o("WAWebUserPrefsMeUser").isMeAccount(m.author)) &&
            new (o("WAWebGroupJoinCWamEvent").GroupJoinCWamEvent)().commit(),
            p && f && o("WAWebHandlePushnameUpdate").updatePushname(p, f, d),
            yield (c || (c = n("Promise"))).all([
              o("WAWebGroupDatabaseJob").updateGroupMetadataTableJob([r]),
              o("WAWebGroupParticipantsJob").updateParticipantsJob({
                group: y,
                participants: C,
                isOffline: d,
                groupInfo: r,
              }),
            ]),
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "updated GroupMetadata and participants tables",
                  ])),
              )
              .tags("groups"),
            (yield o("WAWebApiChatCommon").getChatRecord(_)) != null
              ? o("WAWebBackendApi").frontendFireAndForget(
                  "updateGroupSubject",
                  { id: _, subject: b },
                )
              : (yield o(
                  "WAWebGroupHistoryParticipantJob",
                ).clearGroupHistoryParticipantStateForGroup(y),
                yield o("WAWebCreateChat").createChat({
                  createChatOrigin: "groupCreation",
                  destination: { chatId: _ },
                  initialProps: babelHelpers.extends(
                    { t: g, pendingInitialLoading: !1, createdLocally: !1 },
                    i === !0 && { notSpam: !0 },
                  ),
                  options: babelHelpers.extends(
                    { createdOffline: d },
                    h === !0 && {
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
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "updated chat model and table",
                      ])),
                  )
                  .tags("groups"),
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateGroupSubject",
                  { id: y, subject: b },
                )),
            o("WAWebBackendApi").frontendFireAndForget("setGroupMetadata", r),
            o("WAWebBackendApi").frontendFireAndForget("markProfilePicStale", {
              profilePicThumbWid: y,
            }));
        })),
        m.apply(this, arguments)
      );
    }
    l.handleGroupCreation = d;
  },
  98,
);
