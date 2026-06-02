__d(
  "WAWebHandleGroupCreation",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      var n = t.groupInfo,
        r = t.isJoinViaInviteLink,
        a = r === void 0 ? !1 : r,
        i = t.isOffline,
        l = i === void 0 ? !1 : i,
        c = t.meta;
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "inside handleGroupCreation",
            ])),
        )
        .tags("groups");
      var d = c.author,
        m = c.chatId,
        p = c.pushname,
        _ = n.creation,
        f = n.hasCapi,
        g = n.id,
        h = n.participants,
        y = n.subject;
      ((c.author == null ||
        !c.author.equals(o("WAWebUserPrefsMeUser").getMaybeMePnUser())) &&
        new (o("WAWebGroupJoinCWamEvent").GroupJoinCWamEvent)().commit(),
        d && p && o("WAWebHandlePushnameUpdate").updatePushname(d, p, l),
        await Promise.all([
          o("WAWebGroupDatabaseJob").updateGroupMetadataTableJob([n]),
          o("WAWebGroupParticipantsJob").updateParticipantsJob({
            group: g,
            participants: h,
            isOffline: l,
            groupInfo: n,
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
        (await o("WAWebApiChatCommon").getChatRecord(m)) != null
          ? o("WAWebBackendApi").frontendFireAndForget("updateGroupSubject", {
              id: m,
              subject: y,
            })
          : (await o("WAWebCreateChat").createChat(
              { chatId: m },
              "groupCreation",
              babelHelpers.extends(
                { t: _, pendingInitialLoading: !1, createdLocally: !1 },
                a === !0 && { notSpam: !0 },
              ),
              babelHelpers.extends(
                { createdOffline: l },
                f === !0 && {
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
            o("WAWebBackendApi").frontendFireAndForget("updateGroupSubject", {
              id: g,
              subject: y,
            })),
        o("WAWebBackendApi").frontendFireAndForget("setGroupMetadata", n),
        o("WAWebBackendApi").frontendFireAndForget("markProfilePicStale", {
          profilePicThumbWid: g,
        }),
        !l &&
          o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
            "maybeSendKeyDistributionMsgToNewGroup",
            { groupId: g },
          ));
    }
    l.handleGroupCreation = c;
  },
  98,
);
