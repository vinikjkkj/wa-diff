__d(
  "WAWebQueryAndUpdateGroupMetadataJob",
  [
    "WALogger",
    "WAPromiseEach",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiChat",
    "WAWebApiChatCommon",
    "WAWebApiParticipantStore",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebBotGroupBackendUtils",
    "WAWebChatConstants",
    "WAWebGroupDatabaseJob",
    "WAWebGroupQueryJob",
    "WAWebGroupSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidMappingUsernameLearnUtils",
    "WAWebPhashUtils",
    "WAWebQueryAndUpdateSubgroupSuggestionsJob",
    "WAWebReleaseToEventLoop",
    "WAWebSchemaChat",
    "WAWebUserPrefsModelStorage",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y = 5e4;
    async function C(t) {
      var n = t.batchQueryArgs,
        r = t.isHistorySyncInProgress;
      try {
        var a, i, l;
        if ((n == null ? void 0 : n.groupJids) != null) {
          var c = n.groupJids,
            d = n.queryContext;
          l = await o("WAWebGroupQueryJob").queryGroupsById_DO_NOT_USE_DIRECTLY(
            c,
            d,
          );
        } else l = await o("WAWebGroupQueryJob").queryAllGroups();
        if (l == null || l.length === 0) return;
        o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.GroupSync,
        );
        var m = [],
          p = [];
        l.forEach(function (e) {
          e.truncated ? p.push(e) : m.push(e);
        });
        var _ =
          (a = n == null ? void 0 : n.queryContext) != null
            ? a
            : "get_participating_groups";
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[group-info] query context => #",
              "",
            ])),
          _,
        ),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[group-info] #",
                " non-truncated responses found",
              ])),
            m.length,
          ),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[group-info] #",
                " truncated responses found",
              ])),
            p.length,
          ),
          await v(m, r),
          await b(
            p,
            (i = n == null ? void 0 : n.queryContext) != null
              ? i
              : "get_participating_groups_paginated",
            r,
          ));
      } finally {
        o("WAWebAppTracker").AppTracker.stop(
          o("WAWebAppTracker").AppTrackerType.GroupSync,
        );
      }
    }
    async function b(e, t, n) {
      if (e.length !== 0) {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[group-info] processing truncated responses",
            ])),
        );
        var r = [[]],
          a = 0;
        (e.forEach(function (e) {
          var t = o("WAWebWidToJid").widToGroupJid(
              o("WAWebWidFactory").createWid(e.id + "@g.us"),
            ),
            n = e.size;
          (a + n > y && a > 0 && (r.push([]), (a = 0)),
            r[r.length - 1].push(t),
            (a += n));
        }),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[group-info] #",
                " batches created",
              ])),
            r.length,
          ));
        var i = 0;
        (await o("WAPromiseEach").promiseEach(r, async function (e) {
          try {
            var r = await o(
              "WAWebGroupQueryJob",
            ).queryGroupsById_DO_NOT_USE_DIRECTLY(e, t);
            if (r) {
              await v(
                r.filter(function (e) {
                  return e.truncated == null;
                }),
                n,
              );
              var a = r.find(function (e) {
                return e.truncated != null;
              });
              a != null && i++;
            }
          } catch (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-info] batch query failed for truncated group ",
                    "",
                  ])),
                e,
              )
              .sendLogs("failed-to-query-batch-group-info");
          }
        }),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[group-info] processed ",
                " batches",
              ])),
            r.length,
          ),
          i > 0 &&
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[batch-get-group-info] ",
                    " unexpected truncated responses found",
                  ])),
                i,
              )
              .sendLogs("unexpected-truncated-response-found", {
                sampling: 0.1,
              }));
      }
    }
    async function v(e, t) {
      if (e.length !== 0) {
        var n = await o(
            "WAWebApiParticipantStore",
          ).injectPastParticipantsFromDB(e),
          r = await o("WAWebBotGroupBackendUtils").injectBotParticipantState(n),
          a = await o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB(r),
          i = [],
          l = [];
        (o("WAWebABProps").getABPropConfigValue("web_anr_group_metadata_yield")
          ? await o("WAPromiseEach").promiseEach(a, async function (e) {
              (o("WAWebBackendApi").frontendFireAndForget(
                "createOrUpdateGroupMetadataFromQuery",
                { groupInfo: e },
              ),
                t && R(e),
                i.push(
                  o(
                    "WAWebGroupQueryJob",
                  ).maybeQueryAndUpdateMembershipApprovalRequests(e),
                ),
                await o("WAWebReleaseToEventLoop").releaseToEventLoop());
            })
          : a.forEach(function (e) {
              (o("WAWebBackendApi").frontendFireAndForget(
                "createOrUpdateGroupMetadataFromQuery",
                { groupInfo: e },
              ),
                t && R(e),
                i.push(
                  o(
                    "WAWebGroupQueryJob",
                  ).maybeQueryAndUpdateMembershipApprovalRequests(e),
                ));
            }),
          await o(
            "WAWebLidMappingUsernameLearnUtils",
          ).processParsedGroupInfosForLidMappingAndUsernames(a),
          await o("WAWebGroupDatabaseJob").updateGroupMetadataTableJob(a),
          await o(
            "WAWebGroupDatabaseJob",
          ).updateGroupParticipantTableWithoutDeviceSyncJob(a),
          t && (await S(a)),
          a.forEach(function (e) {
            l.push(
              o(
                "WAWebQueryAndUpdateSubgroupSuggestionsJob",
              ).maybeQueryAndUpdateSubgroupSuggestions(e),
            );
          }),
          await Promise.all(i));
      }
    }
    async function S(e) {
      o("WALogger")
        .LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "Start updateGroupEndOfHistorySyncFlag",
            ])),
        )
        .tags("history-sync", "groups");
      var t = o("WAWebUserPrefsModelStorage").getInitialGroupPhashMap(),
        n = [];
      for (var r of e) {
        var a = await o("WAWebApiChatCommon").getChatRecord(r.id);
        if (!a) {
          var i = t == null ? void 0 : t[r.id.toString()];
          i == null &&
            n.push({
              unreadCount: 0,
              muteExpiration: 0,
              isAutoMuted: !1,
              id: r.id,
              endOfHistoryTransferType:
                o("WAWebChatConstants")
                  .ConversationEndOfHistoryTransferModelPropType
                  .NOT_INCLUDED_IN_HIST_SYNC,
            });
        }
      }
      (await o("WAWebBackendApi").frontendSendAndReceive("chatCollectionAdd", {
        things: n,
        options: { merge: !0 },
      }),
        await o("WAWebSchemaChat")
          .getChatTable()
          .bulkCreate(
            n.map(function (e) {
              var t = e.endOfHistoryTransferType,
                n = e.id,
                r = {
                  endOfHistoryTransferType: t,
                  id: n.toString(),
                  unreadCount: 0,
                  muteExpiration: 0,
                  isAutoMuted: !1,
                };
              return r;
            }),
          )
          .catch(function (e) {
            o("WALogger")
              .LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-info] chat create failed for unsynced group: ",
                    "",
                  ])),
                e.message,
              )
              .tags("history-sync", "groups");
          }),
        o("WALogger")
          .LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "Completed updateGroupEndOfHistorySyncFlag",
              ])),
          )
          .tags("history-sync", "groups"));
    }
    async function R(e) {
      var t = o("WAWebUserPrefsModelStorage").getInitialGroupPhash(
        e.id.toString(),
      );
      if (t != null) {
        var n = await o("WAWebPhashUtils").phashV1(
            e.participants.map(function (e) {
              return e.id;
            }),
          ),
          r = n.substring(2);
        t != null &&
          t !== n &&
          t !== r &&
          e.defaultSubgroup !== !0 &&
          o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
            chatId: e.id,
            newMsg: o("WAWebGroupSystemMsg").genInitialPhashMismatchMsg(
              e.id,
              o("WATimeUtils").unixTime(),
            ),
            handleSingleMsgOrigin: "pHashMismatchMsg",
          });
      }
    }
    l.queryAndUpdateAllGroupMetadata = C;
  },
  98,
);
