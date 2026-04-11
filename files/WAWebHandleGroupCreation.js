__d(
  "WAWebHandleGroupCreation",
  [
    "Promise",
    "WALogger",
    "WAWebApiChatCommon",
    "WAWebBackendApi",
    "WAWebCreateChat",
    "WAWebGroupDatabaseJob",
    "WAWebGroupJoinCWamEvent",
    "WAWebGroupParticipantsJob",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandlePushnameUpdate",
    "WAWebUserPrefsMeUser",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            (a === void 0 && (a = !1),
              i === void 0 && (i = !1),
              o("WALogger")
                .LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "inside handleGroupCreation",
                    ])),
                )
                .tags("groups"));
            var l = t.author,
              d = t.chatId,
              m = t.pushname,
              p = r.creation,
              _ = r.hasCapi,
              f = r.id,
              g = r.participants,
              h = r.subject;
            ((t.author == null ||
              !t.author.equals(o("WAWebUserPrefsMeUser").getMaybeMePnUser())) &&
              new (o("WAWebGroupJoinCWamEvent").GroupJoinCWamEvent)().commit(),
              l && m && o("WAWebHandlePushnameUpdate").updatePushname(l, m, a),
              yield (c || (c = n("Promise"))).all([
                o("WAWebGroupDatabaseJob").updateGroupMetadataTableJob([r]),
                o("WAWebGroupParticipantsJob").updateParticipantsJob({
                  group: f,
                  participants: g,
                  isOffline: a,
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
              (yield o("WAWebApiChatCommon").getChatRecord(d)) != null
                ? o("WAWebBackendApi").frontendFireAndForget(
                    "updateGroupSubject",
                    { id: d, subject: h },
                  )
                : (yield o("WAWebCreateChat").createChat(
                    { chatId: d },
                    "groupCreation",
                    babelHelpers.extends(
                      { t: p, pendingInitialLoading: !1, createdLocally: !1 },
                      i === !0 && { notSpam: !0 },
                    ),
                    babelHelpers.extends(
                      { createdOffline: a },
                      _ === !0 && {
                        nextPrivacyMode: {
                          actualActors: o("WAWebHandleMsgTypes.flow")
                            .ActualActorsEnumType.Capi,
                          hostStorage: o("WAWebHandleMsgTypes.flow")
                            .HostStorageEnumType.Facebook,
                          privacyModeTs: 0,
                        },
                      },
                    ),
                  ),
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
                    { id: f, subject: h },
                  )),
              o("WAWebBackendApi").frontendFireAndForget("setGroupMetadata", r),
              o("WAWebBackendApi").frontendFireAndForget(
                "markProfilePicStale",
                { profilePicThumbWid: f },
              ),
              !a &&
                o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
                  "maybeSendKeyDistributionMsgToNewGroup",
                  { groupId: f },
                ));
          },
        )),
        m.apply(this, arguments)
      );
    }
    l.handleGroupCreation = d;
  },
  98,
);
