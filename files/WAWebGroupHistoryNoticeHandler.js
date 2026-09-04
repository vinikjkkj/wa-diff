__d(
  "WAWebGroupHistoryNoticeHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBGroupsGroupMetadata",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinTypes",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            t.type === o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE &&
            o(
              "WAWebGroupHistoryGating",
            ).isGroupHistoryPostJoinSenderOrInternalTesterEnabled(t.id.remote)
          ) {
            var n = t.groupHistoryBundleMetadata;
            if (n != null) {
              var r = n.historyReceivers;
              r.length !== 0 &&
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history][M2] notice rcvd, ",
                      " receivers",
                    ])),
                  r.length,
                ),
                yield c(t.id.remote, r),
                t.id.fromMe === !0 &&
                  o(
                    "WAWebGroupHistoryGating",
                  ).isLearnGroupHistoryToggleFromHistorySyncEnabled() &&
                  (yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                    t.id.remote,
                    { shouldDefaultGroupHistoryShareOn: !0 },
                  ),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateGroupMetadataModelForShareHistoryDefault",
                    {
                      group: t.id.remote,
                      shouldDefaultGroupHistoryShareOn: !0,
                    },
                  )));
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield m(
            e,
            t,
            o("WAWebGroupHistoryPostJoinTypes").GroupHistorySentState
              .NOTICE_SENT,
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (t.length !== 0) {
            var a;
            try {
              a = o("WAWebWidToJid").widToGroupJid(e);
            } catch (e) {
              return;
            }
            (yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["group-history-participant"],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n,
                        i = e[0],
                        l = yield i.get(a),
                        s =
                          (n = l == null ? void 0 : l.participantMetadataMap) !=
                          null
                            ? n
                            : new Map();
                      for (var u of t) {
                        var c,
                          d = o("WAWebLidMigrationUtils").toUserLid(u);
                        if (d != null) {
                          var m = o("WAWebWidToJid").userLidtoLidUserJid(d),
                            p = s.get(m);
                          s.set(m, {
                            joinTime:
                              (c = p == null ? void 0 : p.joinTime) != null
                                ? c
                                : null,
                            groupHistorySentState: r,
                          });
                        }
                      }
                      yield i.createOrMerge(a, {
                        chatId: a,
                        participantMetadataMap: s,
                      });
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "updateParticipantsGroupHistorySentState",
                { group: e, receiverIds: t, state: r },
              ));
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.length === 0) return !0;
          var r;
          try {
            r = o("WAWebWidToJid").widToGroupJid(e);
          } catch (e) {
            return !1;
          }
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["group-history-participant"],
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = e[0],
                      a = yield n.get(r),
                      i = a == null ? void 0 : a.participantMetadataMap;
                    if (i == null) return !1;
                    for (var l of t) {
                      var s,
                        u = o("WAWebLidMigrationUtils").toUserLid(l);
                      if (u == null) return !1;
                      var c = o("WAWebWidToJid").userLidtoLidUserJid(u),
                        d =
                          (s = i.get(c)) == null
                            ? void 0
                            : s.groupHistorySentState;
                      if (
                        d !==
                          o("WAWebGroupHistoryPostJoinTypes")
                            .GroupHistorySentState.NOTICE_SENT &&
                        d !==
                          o("WAWebGroupHistoryPostJoinTypes")
                            .GroupHistorySentState.HISTORY_SENT
                      )
                        return !1;
                    }
                    return !0;
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
        })),
        f.apply(this, arguments)
      );
    }
    ((l.maybeHandleGroupHistoryNotice = s),
      (l.markGroupHistoryNoticeSent = c),
      (l.setGroupHistorySentStateForReceivers = m),
      (l.areAllReceiversNoticeSent = _));
  },
  98,
);
