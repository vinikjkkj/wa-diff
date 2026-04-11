__d(
  "WAWebQueryAndUpdateGroupMetadataJob",
  [
    "Promise",
    "WALogger",
    "WAPromiseEach",
    "WATimeUtils",
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
    "WAWebHandleSingleMsgFactory",
    "WAWebLidMappingUsernameLearnUtils",
    "WAWebPhashUtils",
    "WAWebQueryAndUpdateSubgroupSuggestionsJob",
    "WAWebSchemaChat",
    "WAWebUserPrefsModelStorage",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
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
      y,
      C = 5e4;
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.batchQueryArgs,
            r = t.isHistorySyncInProgress;
          try {
            var a, i, l;
            if ((n == null ? void 0 : n.groupJids) != null) {
              var c = n.groupJids,
                d = n.queryContext;
              l = yield o(
                "WAWebGroupQueryJob",
              ).queryGroupsById_DO_NOT_USE_DIRECTLY(c, d);
            } else l = yield o("WAWebGroupQueryJob").queryAllGroups();
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
              yield L(m, r),
              yield S(
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
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (e.length !== 0) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[group-info] processing truncated responses",
                ])),
            );
            var a = [[]],
              i = 0;
            (e.forEach(function (e) {
              var t = o("WAWebWidToJid").widToGroupJid(
                  o("WAWebWidFactory").createWid(e.id + "@g.us"),
                ),
                n = e.size;
              (i + n > C && i > 0 && (a.push([]), (i = 0)),
                a[a.length - 1].push(t),
                (i += n));
            }),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-info] #",
                    " batches created",
                  ])),
                a.length,
              ));
            var l = 0;
            (yield o("WAPromiseEach").promiseEach(
              a,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    try {
                      var n = yield o(
                        "WAWebGroupQueryJob",
                      ).queryGroupsById_DO_NOT_USE_DIRECTLY(e, t);
                      if (n) {
                        yield L(
                          n.filter(function (e) {
                            return e.truncated == null;
                          }),
                          r,
                        );
                        var a = n.find(function (e) {
                          return e.truncated != null;
                        });
                        a != null && l++;
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
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[group-info] processed ",
                    " batches",
                  ])),
                a.length,
              ),
              l > 0 &&
                o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[batch-get-group-info] ",
                        " unexpected truncated responses found",
                      ])),
                    l,
                  )
                  .sendLogs("unexpected-truncated-response-found", {
                    sampling: 0.1,
                  }));
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length !== 0) {
            var r = yield o(
                "WAWebApiParticipantStore",
              ).injectPastParticipantsFromDB(e),
              a = yield o(
                "WAWebBotGroupBackendUtils",
              ).injectBotParticipantState(r),
              i =
                yield o("WAWebApiChat").injectAdditionalEphemeralInfoFromDB(a),
              l = [],
              s = [];
            (i.forEach(function (e) {
              (o("WAWebBackendApi").frontendFireAndForget(
                "createOrUpdateGroupMetadataFromQuery",
                { groupInfo: e },
              ),
                t && T(e),
                l.push(
                  o(
                    "WAWebGroupQueryJob",
                  ).maybeQueryAndUpdateMembershipApprovalRequests(e),
                ));
            }),
              yield o(
                "WAWebLidMappingUsernameLearnUtils",
              ).processParsedGroupInfosForLidMappingAndUsernames(i),
              yield o("WAWebGroupDatabaseJob").updateGroupMetadataTableJob(i),
              yield o(
                "WAWebGroupDatabaseJob",
              ).updateGroupParticipantTableWithoutDeviceSyncJob(i),
              t && (yield k(i)),
              i.forEach(function (e) {
                s.push(
                  o(
                    "WAWebQueryAndUpdateSubgroupSuggestionsJob",
                  ).maybeQueryAndUpdateSubgroupSuggestions(e),
                );
              }),
              yield (y || (y = n("Promise"))).all(l));
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var a = yield o("WAWebApiChatCommon").getChatRecord(r.id);
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
          (yield o("WAWebBackendApi").frontendSendAndReceive(
            "chatCollectionAdd",
            { things: n, options: { merge: !0 } },
          ),
            yield o("WAWebSchemaChat")
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
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsModelStorage").getInitialGroupPhash(
            e.id.toString(),
          );
          if (t != null) {
            var n = yield o("WAWebPhashUtils").phashV1(
                e.participants.map(function (e) {
                  return e.id;
                }),
              ),
              r = n.substring(2);
            t != null &&
              t !== n &&
              t !== r &&
              e.defaultSubgroup !== !0 &&
              o("WAWebHandleSingleMsgFactory").handleSingleMsg({
                chatId: e.id,
                newMsg: o("WAWebGroupSystemMsg").genInitialPhashMismatchMsg(
                  e.id,
                  o("WATimeUtils").unixTime(),
                ),
                handleSingleMsgOrigin: "pHashMismatchMsg",
              });
          }
        })),
        D.apply(this, arguments)
      );
    }
    l.queryAndUpdateAllGroupMetadata = b;
  },
  98,
);
