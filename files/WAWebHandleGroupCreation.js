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
            C = r.creation,
            b = r.hasCapi,
            v = r.id,
            S = r.participants,
            R = r.subject;
          ((p.author == null ||
            !o("WAWebUserPrefsMeUser").isMeAccount(p.author)) &&
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
            yield (d || (d = n("Promise"))).all([
              o("WAWebGroupDatabaseJob").updateGroupMetadataTableJob([r]),
              o("WAWebGroupParticipantsJob").updateParticipantsJob({
                group: v,
                participants: S,
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
            (yield o("WAWebApiChatCommon").getChatRecord(h)) != null
              ? o("WAWebBackendApi").frontendFireAndForget(
                  "updateGroupSubject",
                  { id: h, subject: R },
                )
              : (yield o(
                  "WAWebGroupHistoryParticipantJob",
                ).clearGroupHistoryParticipantStateForGroup(v),
                yield o("WAWebCreateChat").createChat({
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
                  { id: v, subject: R },
                )),
            o("WAWebBackendApi").frontendFireAndForget("setGroupMetadata", r),
            o("WAWebBackendApi").frontendFireAndForget("markProfilePicStale", {
              profilePicThumbWid: v,
            }));
        })),
        p.apply(this, arguments)
      );
    }
    l.handleGroupCreation = m;
  },
  98,
);
